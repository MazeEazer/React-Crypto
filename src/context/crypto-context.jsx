import { createContext, useState, useEffect, useContext } from "react"
import { fakeFetchCrypto, fetchAssets } from "../api"
import { percentDifference } from "../utils"
const CryptoContext = createContext({
  assets: [],
  crypto: [],
  loading: false,
})

export function CryptoContextProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [crypto, setCrypto] = useState([]) // Вся крипта вытащенная с апишки
  const [assets, setAssets] = useState([]) //Сколько и какая крипта в нашем портфолио
  function mapAssets(assets, result) {
    return assets.map((asset) => {
      const coin = result.find((coinInResult) => coinInResult.id === asset.id)
      return {
        grow: asset.price < coin.price,
        growPercent: percentDifference(asset.price, coin.price),
        totalAmount: asset.amount * coin.price,
        totalProfit: asset.amount * coin.price - asset.amount * asset.price,
        name: coin.name,
        ...asset,
      }
    })
  }
  useEffect(() => {
    async function preload() {
      setLoading(true)
      const { result } = await fakeFetchCrypto()
      const assets = await fetchAssets()

      setAssets(mapAssets(assets, result))
      setCrypto(result)
      setLoading(false)
    }
    preload()
  }, [])

  function addAsset(newAsset) {
    setAssets((prev) => mapAssets([...prev, newAsset], crypto))
  }
  return (
    <CryptoContext.Provider value={{ loading, crypto, assets, addAsset }}>
      {children}
    </CryptoContext.Provider>
  )
}
export default CryptoContext
export function useCrypto() {
  return useContext(CryptoContext)
}
