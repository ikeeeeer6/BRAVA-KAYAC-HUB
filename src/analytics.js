export async function sendEvent(payload) {
  const endpoint = import.meta.env.VITE_EVENT_ENDPOINT
  const timestamped = { ...payload, ts: Date.now() }

  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(timestamped),
      })
      return
    } catch (e) {
      console.error('sendEvent: failed to POST, saving locally', e)
    }
  }

  try {
    const key = 'site_analytics_events'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.push(timestamped)
    localStorage.setItem(key, JSON.stringify(existing))
  } catch (e) {
    console.error('sendEvent: localStorage failed', e)
  }
}

export async function fetchStoredEvents() {
  const key = 'site_analytics_events'
  try {
    return JSON.parse(localStorage.getItem(key) || '[]')
  } catch (e) {
    return []
  }
}
