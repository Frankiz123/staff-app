/*
 * ForgotPswd component messages
 */

export const scope = 'app.screen.bookingDetails';

const messages = {
  appointmentDetails: {
    scope: `${scope}.appointmentDetails`,
    options: {
      defaultValue: 'Appointment Details',
    },
  },
  appointmentHistory: {
    scope: `${scope}.appointmentHistory`,
    options: {
      defaultValue: 'Appointment History',
    },
  },
  noEmailFound: {
    scope: `${scope}.noEmailFound`,
    options: {
      defaultValue: 'No Email Found',
    },
  },
  editApp: {
    scope: `${scope}.editApp`,
    options: {
      defaultValue: 'Edit Appointment',
    },
  },
  rescheduleApp: {
    scope: `${scope}.rescheduleApp`,
    options: {
      defaultValue: 'Reschedule Appointment',
    },
  },
  cancelApp: {
    scope: `${scope}.cancelApp`,
    options: {
      defaultValue: 'Cancel Appointment',
    },
  },
  close: {
    scope: `${scope}.close`,
    options: {
      defaultValue: 'Close',
    },
  },
  moreOptions: {
    scope: `${scope}.moreOptions`,
    options: {
      defaultValue: 'More Options',
    },
  },
  checkout: {
    scope: `${scope}.checkout`,
    options: {
      defaultValue: 'Checkout',
    },
  },
};

export default messages;
