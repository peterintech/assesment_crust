import { z } from "zod";

export const CryptoExchangeSchema = z.object({
  payAmount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,18})?$/, "Invalid number"),
  receiveAmount: z.string().min(1, "Amount is required"),
  payFrom: z.string().min(1, "Please select a source"),
  payTo: z.string().min(1, "Please select a destination"),
});
