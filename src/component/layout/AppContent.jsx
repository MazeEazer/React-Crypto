import { Layout, Typography } from "antd"
import { useCrypto } from "../../context/crypto-context"
import AssetsTable from "../AssetsTable"
import PortfolioChart from "./PortfolioChart"
const contentStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#001529",
  padding: " 1rem",
}

const AppContent = () => {
  const { assets, crypto } = useCrypto()

  const cryptoPriceMap = crypto.reduce((acc, current) => {
    acc[current.id] = current.price
    return acc
  }, {})

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ textAlign: "left", color: "#fff" }}>
        {assets
          .map((asset) => {
            return asset.amount * cryptoPriceMap[asset.id]
          })
          .reduce((acc, current) => (acc += current), 0)
          .toFixed(2)}
        $
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  )
}

export default AppContent
