import ReactCountryFlag from "react-country-flag";
import { Wallet2 } from "lucide-react";
import { CryptoIcon, WalletIcon } from "@/components/Icon";

const cryptoTokens = [
  { value: "eth", label: "ETH", icon: <CryptoIcon crypto="ETH" /> },
  {
    value: "usdt-celo",
    label: "USDT - CELO",
    icon: <CryptoIcon crypto="USDT" />,
  },
  {
    value: "ton",
    label: "USDT - TON",
    icon: <CryptoIcon crypto="TON" />,
  },
  {
    value: "bnb",
    label: "USDT - BNB",
    icon: <CryptoIcon crypto="BNB" />,
  },
];

const fiatCurrencies = [
  {
    value: "ngn",
    label: "NGN",
    icon: <ReactCountryFlag countryCode="NG" svg />,
  },
  {
    value: "usd",
    label: "USD",
    icon: <ReactCountryFlag countryCode="US" svg />,
  },
];

const paymentMethods = [
  {
    value: "metamask",
    label: "Metamask",
    icon: <WalletIcon wallet="metamask" />,
  },
  {
    value: "rainbow",
    label: "Rainbow",
    icon: <WalletIcon wallet="rainbow" />,
  },
  {
    value: "walletconnect",
    label: "WalletConnect",
    icon: <WalletIcon wallet="walletconnect" />,
  },
  {
    value: "others",
    label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    icon: <Wallet2 />,
  },
];

const bankMethods = [
  { value: "bank", label: "Bank Account (NG)", icon: null },
  { value: "novacrust", label: "Novacrust", icon: null },
];

export { cryptoTokens, fiatCurrencies, paymentMethods, bankMethods };
