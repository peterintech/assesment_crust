import {
  BnbCircleColorful,
  BtcCircleColorful,
  EthereumCircleColorful,
  MetaMaskColorful,
  RainbowWalletColorful,
  TonCircleColorful,
  UsdtCircleColorful,
  WalletConnectColorful,
} from "@ant-design/web3-icons";

function CryptoIcon({ crypto }: { crypto: string }) {
  switch (crypto) {
    case "BTC":
      return <BtcCircleColorful />;
    case "ETH":
      return <EthereumCircleColorful />;
    case "USDT":
      return <UsdtCircleColorful />;
    case "TON":
      return <TonCircleColorful />;
    case "BNB":
      return <BnbCircleColorful />;
  }
}

function WalletIcon({ wallet }: { wallet: string }) {
  switch (wallet) {
    case "metamask":
      return <MetaMaskColorful />;
    case "rainbow":
      return <RainbowWalletColorful />;
    case "walletconnect":
      return <WalletConnectColorful />;
  }
}

export { CryptoIcon, WalletIcon };
