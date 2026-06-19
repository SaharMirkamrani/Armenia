// AMD ⇄ USD conversion helpers, used across the project.
//
// This is an approximate, static rate — it does NOT fetch live FX.
// Update this single constant when the rate drifts.
// 1 USD = 368.19 AMD.
export const AMD_PER_USD = 368.19

/** Convert a dram amount to US dollars (number). */
export function amdToUsd(amd) {
  return Number(amd) / AMD_PER_USD
}

/** Convert a dollar amount to drams (number). */
export function usdToAmd(usd) {
  return Number(usd) * AMD_PER_USD
}

/** Format a USD number like "$15" (whole dollars ≥ $20, else one decimal). */
export function formatUsd(usd) {
  const n = Math.abs(usd) >= 20 ? Math.round(usd) : Math.round(usd * 10) / 10
  return '$' + n.toLocaleString('en-US')
}

/** Format a dram number like "6,000 AMD". */
export function formatAmd(amd) {
  return Math.round(amd).toLocaleString('en-US') + ' AMD'
}

/** Convert drams → a short USD string like "~$15". Handy in templates. */
export function amdToUsdStr(amd) {
  return '~' + formatUsd(amdToUsd(amd))
}

/** Render drams with the USD equivalent: "6,000 AMD (~$15)". */
export function amdWithUsd(amd) {
  return `${formatAmd(amd)} (${amdToUsdStr(amd)})`
}
