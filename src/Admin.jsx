import React, { useState, useEffect } from 'react'

export default function Admin() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [authed, setAuthed] = useState(false)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  // Accept either Vite-prefixed env vars or plain env names (USER_ADMIN / PASS_ADMIN)
  const adminUser = import.meta.env.VITE_ADMIN_USER || import.meta.env.USER_ADMIN
  const adminPass = import.meta.env.VITE_ADMIN_PASS || import.meta.env.PASS_ADMIN
  const endpoint = import.meta.env.VITE_EVENT_ENDPOINT || ''

  // temp credentials stored in localStorage for easy local testing
  const [tempUser, setTempUser] = useState('')
  const [tempPass, setTempPass] = useState('')

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('dev_admin_credentials') || 'null')
      if (stored && stored.user) {
        setTempUser(stored.user)
        setTempPass(stored.pass || '')
      } else {
        // create simple default credentials for quick testing if none exist
        const defaultCreds = { user: 'admin', pass: 'admin' }
        localStorage.setItem('dev_admin_credentials', JSON.stringify(defaultCreds))
        setTempUser(defaultCreds.user)
        setTempPass(defaultCreds.pass)
      }
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (authed) fetchEvents()
  }, [authed])

  async function fetchEvents() {
    setLoading(true)
    if (endpoint) {
      try {
        const res = await fetch(endpoint, { method: 'GET' })
        if (res.ok) {
          const data = await res.json()
          setEvents(Array.isArray(data) ? data.reverse() : [])
          setLoading(false)
          return
        }
      } catch (e) {
        console.error('fetchEvents error', e)
      }
    }

    try {
      const key = 'site_analytics_events'
      const existing = JSON.parse(localStorage.getItem(key) || '[]')
      setEvents(existing.slice().reverse())
    } catch (e) {
      console.error(e)
      setEvents([])
    }
    setLoading(false)
  }

  function handleLogin(e) {
    e.preventDefault()
    setError('')
    setNotice('')
    const suppliedUser = user.trim()
    const suppliedPass = pass.trim()

    if (adminUser && adminPass) {
      if (suppliedUser === String(adminUser).trim() && suppliedPass === String(adminPass).trim()) {
        setAuthed(true)
        return
      }
      setError('Credenciales incorrectas para las variables de entorno')
      return
    }

    try {
      const stored = JSON.parse(localStorage.getItem('dev_admin_credentials') || 'null')
      if (stored && suppliedUser === stored.user && suppliedPass === stored.pass) {
        setAuthed(true)
        return
      }
    } catch (e) {
      // ignore
    }

    setError('Credenciales incorrectas. Define VITE_ADMIN_USER/VITE_ADMIN_PASS o USER_ADMIN/PASS_ADMIN o guarda credenciales temporales abajo.')
  }

  function handleLogout() {
    setAuthed(false)
    setUser('')
    setPass('')
    setEvents([])
    window.history.pushState({}, '', '/')
  }

  // --- Helpers for metrics ---
  function getRangeStart(period) {
    const now = Date.now()
    const d = new Date()
    if (period === 'today') {
      d.setHours(0, 0, 0, 0)
      return d.getTime()
    }
    if (period === 'week') return now - 7 * 24 * 60 * 60 * 1000
    if (period === 'month') return now - 30 * 24 * 60 * 60 * 1000
    return 0
  }

  function countInRange(eventsList, type, period, predicate) {
    if (!eventsList || !eventsList.length) return 0
    const start = getRangeStart(period)
    const filtered = eventsList.filter((e) => {
      if (!e || !e.ts) return false
      if (type && e.type !== type) return false
      if (e.ts < start) return false
      if (predicate && !predicate(e)) return false
      return true
    })

    // Try to return unique visitors when an id exists, else return total events
    const visitorKeys = filtered.map((e) => e.visitorId || e.clientId || e.client || e.cid || e.user || e.ip).filter(Boolean)
    if (visitorKeys.length) return new Set(visitorKeys).size
    return filtered.length
  }

  function MetricCard({ label, value }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="text-sm text-slate-500">{label}</div>
        <div className="font-semibold text-2xl text-black">{value}</div>
      </div>
    )
  }

  function TopPages({ events, period = 'week' }) {
    const start = getRangeStart(period)
    const pages = {}
    ;(events || []).forEach((e) => {
      if (!e || !e.ts || e.ts < start) return
      if (e.type !== 'pageview') return
      const p = e.path || e.url || '/'
      pages[p] = (pages[p] || 0) + 1
    })
    const list = Object.entries(pages).sort((a, b) => b[1] - a[1]).slice(0, 8)
    if (!list.length) return <div className="text-sm text-slate-500">No hay datos suficientes.</div>
    return (
      <ol className="text-sm list-decimal list-inside space-y-1">
        {list.map(([p, c]) => (
          <li key={p} className="flex justify-between">
            <span className="truncate pr-4 text-slate-700">{p}</span>
              <span className="font-semibold text-black">{c}</span>
          </li>
        ))}
      </ol>
    )
  }

  // UI: login
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-slate-800">Panel Admin</h2>
            <p className="text-sm text-slate-500">Accede para ver estadísticas del sitio</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && <div className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</div>}
            {notice && <div className="text-sm text-green-700 bg-green-50 p-2 rounded">{notice}</div>}

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Usuario</span>
              <input
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
                placeholder="Usuario"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Contraseña</span>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
                placeholder="Contraseña"
              />
            </label>

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full">Entrar</button>
          </form>
          <p className="mt-4 text-xs text-black">Nota: puedes configurar credenciales en entorno. Acepto `VITE_ADMIN_USER`/`VITE_ADMIN_PASS` o `USER_ADMIN`/`PASS_ADMIN`.</p>
        </div>
      </div>
    )
  }

  // UI: admin dashboard
  return (
    <div className="min-h-screen p-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Estadísticas</h2>
            <p className="text-sm text-slate-500">Panel de administración — eventos registrados</p>
          </div>
          <div className="flex gap-2">
            <button onClick={fetchEvents} className="px-4 py-2 bg-white border rounded-md shadow-sm text-black font-semibold hover:bg-slate-100">{loading ? 'Cargando...' : 'Refrescar'}</button>
            <button onClick={handleLogout} className="px-4 py-2 bg-orange-500 text-white rounded-md">Cerrar sesión</button>
          </div>
        </div>

        {/* Metrics: today / week / month / whatsapp clicks + top pages */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <MetricCard label="Vistas hoy" value={countInRange(events, 'pageview', 'today')} />
          <MetricCard label="Vistas última semana" value={countInRange(events, 'pageview', 'week')} />
          <MetricCard label="Vistas último mes" value={countInRange(events, 'pageview', 'month')} />
          <MetricCard label="Clicks WhatsApp (mes)" value={countInRange(events, 'contact', 'month', (ev) => ev.method === 'whatsapp')} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-sm text-slate-500 mb-2">Top páginas (última semana)</h3>
            <TopPages events={events} period="week" />
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-sm text-slate-500 mb-2">Detalles</h3>
            <div className="text-sm text-slate-600">Origen: {endpoint ? 'Endpoint (VITE_EVENT_ENDPOINT)' : 'localStorage (fallback)'}</div>
            <div className="text-sm text-slate-600">Total eventos: <span className="text-black font-semibold">{events.length}</span></div>
            <div className="text-sm text-slate-600">Último evento: <span className="text-black">{events.length ? (events[0].ts ? new Date(events[0].ts).toLocaleString() : '-') : '-'}</span></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500">Fecha</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500">Tipo</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500">Datos</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {events.map((ev, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-sm text-slate-700">{ev.ts ? new Date(ev.ts).toLocaleString() : '-'}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{ev.type || '-'}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 font-mono">{JSON.stringify(ev)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
