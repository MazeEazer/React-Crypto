import { cryptoAssets, cryptoData } from "./data.js"

export function fakeFetchCrypto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(cryptoData), 1)
  })
}
export function fetchAssets() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(cryptoAssets), 1)
  })
}
