const store = new Map<string, number[]>()

export function isRateLimited(ip: string, limit: number = 100, window: number = 60_000): boolean {
  const now = Date.now()
  const timestamps = store.get(ip) || []
  const recent = timestamps.filter(ts => now - ts < window)

  if (recent.length >= limit) return true

  store.set(ip, [...recent, now])
  return false
}
