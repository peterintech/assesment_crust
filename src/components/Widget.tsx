import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import CryptoToCash from "./tabs/CryptoToCash";
import Loan from "./tabs/Loan";
import CashToCrypto from "./tabs/CashToCrypto";

export default function Widget() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-8">
      <Card className="w-full py-10 rounded-3xl max-w-160 border-none">
        <CardContent className="mx-auto">
          <Tabs defaultValue="crypto-to-cash" className="w-full max-w-122">
            <TabsList className="w-full max-w-98 h-8.5 p-0 rounded-full mx-auto">
              <TabsTrigger
                value="crypto-to-cash"
                className="rounded-full text-xs font-medium shadow-none"
              >
                Crypto to cash
              </TabsTrigger>
              <TabsTrigger
                value="cash-to-crypto"
                className="rounded-full text-xs font-medium"
              >
                Cash to crypto
              </TabsTrigger>
              <TabsTrigger
                value="loan"
                className="rounded-full text-xs font-medium"
              >
                Crypto to fiat loan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="crypto-to-cash" className="mt-10">
              <CryptoToCash />
            </TabsContent>
            <TabsContent value="cash-to-crypto" className="mt-10">
              <CashToCrypto />
            </TabsContent>
            <TabsContent value="loan" className="mt-10">
              <Loan />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
