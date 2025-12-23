import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CryptoExchangeSchema } from "@/lib/validation";

import {
  cryptoTokens,
  fiatCurrencies,
  paymentMethods,
  bankMethods,
} from "@/data";
import CustomFormField from "../CustomFormField";
import { useState } from "react";
import type { CurrencyOption } from "@/types";

const CryptoToCash = () => {
  const [payToken, setPayToken] = useState<CurrencyOption>(cryptoTokens[0]);
  const [receiveToken, setReceiveToken] = useState<CurrencyOption>(
    fiatCurrencies[0]
  );

  const handleCurrencyPay = (item: CurrencyOption) => {
    setPayToken(item);
  };
  const handleCurrencyReceive = (item: CurrencyOption) => {
    setReceiveToken(item);
  };

  const form = useForm<z.infer<typeof CryptoExchangeSchema>>({
    resolver: zodResolver(CryptoExchangeSchema),
    defaultValues: {
      payAmount: "1.00",
      receiveAmount: "1450.00",
      payFrom: "",
      payTo: "",
    },
  });

  async function onSubmit(data: z.infer<typeof CryptoExchangeSchema>) {
    const payload = {
      ...data,
      payToken: payToken.value,
      receiveToken: receiveToken.value,
    };

    console.log("Submitting:", payload);
    alert(
      `Submitted! You will receive ${payload.receiveAmount} of ${payload.receiveToken} thanks for trading with Novacrust😁`
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* you pay */}
        <CustomFormField
          type={"cryptoAmount"}
          control={form.control}
          name="payAmount"
          label="You pay"
          placeholder="0.00"
          currentCurrency={payToken}
          onCurrencyChange={handleCurrencyPay}
          currencyOptions={cryptoTokens}
        />

        {/* you receive */}
        <CustomFormField
          type={"cryptoAmount"}
          control={form.control}
          name="receiveAmount"
          label="You receive"
          placeholder="0.00"
          currentCurrency={receiveToken}
          onCurrencyChange={handleCurrencyReceive}
          currencyOptions={fiatCurrencies}
        />

        {/* pay from */}
        <CustomFormField
          type={"select"}
          control={form.control}
          name="payFrom"
          label="Pay from"
          placeholder="Select an option"
          selectOptions={paymentMethods}
        />

        {/* pay to */}
        <CustomFormField
          type={"select"}
          control={form.control}
          name="payTo"
          label="Pay to"
          placeholder="Select an option"
          selectOptions={bankMethods}
        />

        <Button type="submit" className="w-full h-15 mb-4 rounded-full">
          Convert now
        </Button>
      </form>
    </Form>
  );
};

export default CryptoToCash;
