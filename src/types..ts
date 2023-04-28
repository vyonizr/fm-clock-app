export interface IIPAdress {
  ip: string
}

export interface IRegion {
  geoplugin_request: string
  geoplugin_status: number
  geoplugin_delay: string
  geoplugin_credit: string
  geoplugin_city: string
  geoplugin_region: string
  geoplugin_regionCode: string
  geoplugin_regionName: string
  geoplugin_areaCode: string
  geoplugin_dmaCode: string
  geoplugin_countryCode: string
  geoplugin_countryName: string
  geoplugin_inEU: number
  geoplugin_euVATrate: boolean
  geoplugin_continentCode: string
  geoplugin_continentName: string
  geoplugin_latitude: string
  geoplugin_longitude: string
  geoplugin_locationAccuracyRadius: string
  geoplugin_timezone: string
  geoplugin_currencyCode: string
  geoplugin_currencySymbol: string
  geoplugin_currencySymbol_UTF8: string
  geoplugin_currencyConverter: number
}

export interface IRegionTime {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from: any
  dst_offset: number
  dst_until: any
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}
