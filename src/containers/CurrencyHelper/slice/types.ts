export type Currency = {
  prefix: string;
  suffix: string;
  code: string;
};
export interface CurrencyHelperState {
  error: any;
  loading: boolean;
  currency: Currency | null;
}
