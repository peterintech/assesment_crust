import { TokenBTC, TokenUSDT, TokenBNB, TokenETH } from "@web3icons/react";

function CryptoIcon({ crypto }: { crypto: string }) {
  switch (crypto) {
    case "BTC":
      return <TokenBTC variant="branded" />;
    case "ETH":
      return <TokenETH variant="branded" />;
    case "USDT":
    case "TRON_USDT":
      return <TokenUSDT variant="branded" />;
    case "BNB":
      return <TokenBNB variant="branded" />;
  }
}

export default CryptoIcon;
