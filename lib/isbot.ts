const blockedAgents = [
  'curl', 'wget', 'httpx', 'httpie', 'node-fetch', 'axios', 'python', 'python-requests',
  'urllib', 'java', 'libwww-perl', 'perl', 'scrapy', 'httpclient', 'aiohttp', 'mechanize',
  'okhttp', 'phpcrawl', 'pycurl', 'ahrefsbot', 'semrush', 'mj12bot', 'dotbot', 'seznambot',
  'screaming frog', 'siteauditbot', 'yandexbot', 'duckduckbot', 'baiduspider', 'bingbot',
  'facebookexternalhit', 'twitterbot', 'slackbot', 'telegrambot', 'discordbot', 'linkpreview',
  'datadome', 'phantomjs', 'puppeteer', 'headlesschrome', 'slimerjs', 'selenium',
  'uptimerobot', 'statuscake', 'checkly', 'cloudflare-healthchecks', 'zgrab', 'masscan',
  'nmap', 'censys', 'shodan', 'netcraft', 'gptbot', 'bytespider', 'amazonbot',
  'anthropic-ai', 'openai', 'ccbot', 'yeti'
]

export function isBlockedUserAgent(userAgent: string): boolean {
  const ua = userAgent.toLowerCase()
  return blockedAgents.some(bot => ua.includes(bot))
}
