import { Flex, Tag, Typography, Divider } from "antd"
import CoinInfo from "./CoinInfo"
export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSymbol></CoinInfo>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}
        </Tag>

        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1h}
        </Tag>

        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1h}
        </Tag>
      </Typography.Paragraph>

      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)} $
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>
        {coin.priceBtc} $
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>ContractAddress: </Typography.Text>
        {coin.contractAddress}
      </Typography.Paragraph>
    </>
  )
}
