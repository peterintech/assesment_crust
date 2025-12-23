import { ComingSoonSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../ui/button";
import { Form } from "../ui/form";

import CustomFormField from "../CustomFormField";

const CashToCrypto = () => {
  const form = useForm<z.infer<typeof ComingSoonSchema>>({
    resolver: zodResolver(ComingSoonSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof ComingSoonSchema>) {
    console.log("Submitting:", data);
    alert(`We'll alert you as soon as it is ready😁`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h1 className="mb-4.25 font-medium text-green text-[32px] text-center">
            Coming Soon!
          </h1>
          <p className="text-center text-xl mb-7.5">
            Cash to Crypto is almost here. <br />
            Enter your email and we’ll let you know the moment it’s live.
          </p>
        </div>

        <CustomFormField
          type="text"
          control={form.control}
          name="email"
          label="Email"
          placeholder="Enter your email"
        />

        <Button type="submit" className="w-full h-15 mt-20 rounded-full">
          Update me
        </Button>
      </form>
    </Form>
  );
};

export default CashToCrypto;
