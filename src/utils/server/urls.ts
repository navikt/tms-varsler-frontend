import { ERROR_REPORTING_URL, NAV_NO_URL, VARSEL_API_URL } from "astro:env/server";

export const minSideUrl = `${NAV_NO_URL}/minside`;
export const appBaseUrl = `${minSideUrl}/varsler`;

export const apiInternIngress = `${VARSEL_API_URL}/alle`;
export const errorReportingUrl = ERROR_REPORTING_URL;
