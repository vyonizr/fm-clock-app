// const IP_TRACKING_BASE_URL = 'https://api.ipify.org'
const CORS_PROXY_URL = "https://corsproxy.io"
const IP_TRACKING_BASE_URL = "https://1.1.1.1/cdn-cgi/trace"
const REGION_TRACKING_BASE_URL = "https://api.techniknews.net"
const WORLD_TIME_BASE_URL = "https://worldtimeapi.org/api"
const CORS_WORLD_TIME_BASE_URL =
  `${CORS_PROXY_URL}/?` + encodeURIComponent(WORLD_TIME_BASE_URL)
const QUOTE_BASE_URL = "https://api.quotable.io"

export {
  IP_TRACKING_BASE_URL,
  REGION_TRACKING_BASE_URL,
  WORLD_TIME_BASE_URL,
  QUOTE_BASE_URL,
  CORS_WORLD_TIME_BASE_URL,
}
