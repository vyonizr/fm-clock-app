import {
  IP_TRACKING_BASE_URL,
  REGION_TRACKING_BASE_URL,
  WORLD_TIME_BASE_URL,
  QUOTE_BASE_URL,
} from './constants'

import { IIPAdress, IRegion, IRegionTime, IQuoteResponse } from "./types";

// async function fetchIPAdress(): Promise<IIPAdress> {
//   const response = await fetch(`${IP_TRACKING_BASE_URL}?format=json`);
//   const responseJSON = await response.json();
//   return responseJSON;
// }

async function fetchIPAdress(): Promise<IIPAdress> {
  const data = await fetch(IP_TRACKING_BASE_URL).then((res) =>
    res.text()
  )

  const dataArray = data
    .trim()
    .split("\n")
    .map((e) => e.split("="))
  return Object.fromEntries(dataArray)
}

async function fetchRegion(ipAddress: string): Promise<IRegion> {
  const response = await fetch(`${REGION_TRACKING_BASE_URL}/ipgeo/${ipAddress}`)
  const responseJSON = await response.json();
  return responseJSON;
}

async function fetchRegionTime(ipAddress: string): Promise<IRegionTime> {
  const response = await fetch(`${WORLD_TIME_BASE_URL}/ip/${ipAddress}`);
  const responseJSON = await response.json();
  return responseJSON;
}

async function fetchQuote(): Promise<IQuoteResponse> {
  const response = await fetch(`${QUOTE_BASE_URL}/random`);
  const responseJSON = await response.json();
  return responseJSON;
}

function determineDayOrNight(time: Date): string {
  const hours = time.getHours();

  if (hours < 5) {
    return "night";
  } else if (hours < 18) {
    return "day";
  }

  return "night";
}

export {
  fetchIPAdress,
  fetchRegion,
  fetchRegionTime,
  fetchQuote,
  determineDayOrNight,
};
