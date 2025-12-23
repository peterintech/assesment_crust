import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import type { FieldValues } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { type CustomProps } from "@/types";
import { Button } from "./ui/button";

const RenderField = <T extends FieldValues>({
  field,
  props,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  props: CustomProps<T>;
}) => {
  const {
    type,
    placeholder,
    selectOptions,
    currentCurrency,
    onCurrencyChange,
    currencyOptions,
  } = props;
  const [open, setOpen] = useState(false);

  switch (type) {
    case "cryptoAmount":
      return (
        <div className="relative group">
          <div className="flex items-end justify-between w-full pb-6 pt-11 px-6 rounded-[30px] border">
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className="w-2/3 h-10 border-none shadow-none bg-transparent text-2xl! font-semibold text-black outline-none placeholder:text-gray-300 p-0"
              />
            </FormControl>

            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="secondary"
                  className="flex items-center gap-1 border rounded-full"
                >
                  <span className="flex items-center justify-center rounded-full overflow-hidden [&>img]:w-5! [&>img]:h-5!">
                    {currentCurrency?.icon}
                  </span>
                  <span className="font-medium uppercase text-sm text-green">
                    {currentCurrency?.label}
                  </span>
                  <ChevronDown className="w-5 h-5 text-green" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 w-61 rounded-4xl border"
                align="end"
              >
                <Command className="rounded-4xl gap-2 px-3 py-4">
                  <div className="flex items-center">
                    <CommandInput placeholder="Search..." />
                  </div>
                  <CommandList>
                    <CommandEmpty>No token found.</CommandEmpty>
                    <CommandGroup>
                      {currencyOptions?.map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.value}
                          onSelect={() => {
                            if (onCurrencyChange) onCurrencyChange(item);
                            setOpen(false);
                          }}
                          className="flex items-center gap-3 rounded-xl py-3 px-3 cursor-pointer aria-selected:bg-accent"
                        >
                          <div className="flex items-center justify-center  rounded-full [&>span>svg]:w-6! [&>span>svg]:h-6!">
                            {item.icon}
                          </div>
                          <span className="font-bold">{item.label}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      );

    case "select":
      return (
        <FormControl>
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="px-6 h-15! rounded-full bg-white border border-gray-200 w-full shadow-none">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="rounded-4xl px-2 py-3 shadow-none">
              <SelectGroup>
                {selectOptions?.map((option, index) => (
                  <SelectItem
                    key={index}
                    value={option.value}
                    className="h-12 px-3 cursor-pointer focus:bg-accent rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      {option.icon && <span className="">{option.icon}</span>}
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
      );

    case "text":
      return (
        <FormControl>
          <Input
            className="px-6 h-15 rounded-full"
            {...field}
            placeholder={placeholder}
          />
        </FormControl>
      );

    default:
      return null;
  }
};

const CustomFormField = <T extends FieldValues>(props: CustomProps<T>) => {
  const { control, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full gap-4">
          {props.type !== "cryptoAmount" && label && (
            <FormLabel className="font-medium">{label}</FormLabel>
          )}
          {/* for crypto amount */}
          {props.type === "cryptoAmount" && label && (
            <FormLabel className="absolute z-10 translate-y-6 translate-x-6 text-gray font-medium ">
              {label}
            </FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="text-red-500 text-xs mt-1" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
