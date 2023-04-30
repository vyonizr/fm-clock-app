// const IP_TRACKING_BASE_URL = 'https://api.ipify.org'
const CORSPROXY_IO_URL = "https://corsproxy.io"
const IP_TRACKING_BASE_URL = "https://1.1.1.1/cdn-cgi/trace"
const REGION_TRACKING_BASE_URL = "https://api.techniknews.net"
const WORLD_TIME_BASE_URL = "https://worldtimeapi.org/api"
const CORS_WORLD_TIME_BASE_URL =
  `${CORSPROXY_IO_URL}/?` + encodeURIComponent(WORLD_TIME_BASE_URL)
const QUOTE_BASE_URL = "https://api.quotable.io"
const CODETABS_URL = "https://api.codetabs.com/v1/proxy?quest="
const CODETABS_CORS_WORLD_TIME_BASE_URL =
  CODETABS_URL + encodeURIComponent(WORLD_TIME_BASE_URL)

  const GREETING = {
    MORNING: "Good Morning",
    AFTERNOON: "Good Afternoon",
    EVENING: "Good Evening",
  }

  export {
    IP_TRACKING_BASE_URL,
    REGION_TRACKING_BASE_URL,
    WORLD_TIME_BASE_URL,
    QUOTE_BASE_URL,
    CORS_WORLD_TIME_BASE_URL,
    CODETABS_CORS_WORLD_TIME_BASE_URL,
    GREETING,
  }
