import type { Control, FieldValues, Path } from "react-hook-form";

type FormFieldType = "text" | "select" | "cryptoAmount";

interface CurrencyOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface CustomProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type: FormFieldType;
  selectOptions?: SelectOption[];
  currentCurrency?: CurrencyOption;
  onCurrencyChange?: (currency: CurrencyOption) => void;
  currencyOptions?: CurrencyOption[];
}

export type { CurrencyOption, SelectOption, CustomProps, FormFieldType };
