export interface PaymentsState {
  paymentMethods: Array<any>;
  loading: {
    paymentMethods: boolean;
    payAction: boolean;
    paymentHash: boolean;
    updateAppointment: boolean;
  };
  error: {
    paymentMethods: any;
    payAction: any;
    paymentHash: any;
    updateAppointment: any;
  };
  selectedPaymentMethod: string;
  paymentHash: string;
  paymentModalvisible: boolean;
}
