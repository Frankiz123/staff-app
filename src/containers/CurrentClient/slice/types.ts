export type IClient = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  avatar: string;
  // email_appointments_optin?: number;
  // email_purchases_optin?: number;
  // email_marketing_optin?: number;
  // email_other_optin?: number;
  // sms_appointments_optin?: number;
  // sms_purchases_optin?: number;
  // sms_marketing_optin?: number;
  // sms_other_optin?: number;
  // notes?: any;
  // sex?: any;
  // dob?: any;
  // marketing_source_id?: string;
  // address?: any;
  // postcode?: any;
  // image_file?: any;
};

export interface CurrentClientState {
  loading: boolean;
  error: any;
  client: IClient | null;
}
