// export interface IIPAdress {
//   ip: string
// }

export interface IIPAdress {
  fl: string
  h: string
  ip: string
  ts: string
  visit_scheme: string
  uag: string
  colo: string
  sliver: string
  http: string
  loc: string
  tls: string
  sni: string
  warp: string
  gateway: string
  rbi: string
  kex: string
}

export interface IRegion {
  status: string
  continent: string
  country: string
  countryCode: string
  regionName: string
  city: string
  zip: string
  lat: number
  lon: number
  timezone: string
  currency: string
  isp: string
  org: string
  as: string
  reverse: string
  mobile: boolean
  proxy: boolean
  hosting: boolean
  ip: string
  cached: boolean
  cacheTimestamp: number
}

export interface IRegionTime {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from: unknown
  dst_offset: number
  dst_until: unknown
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}

export interface IQuoteResponse {
  _id: string
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}
