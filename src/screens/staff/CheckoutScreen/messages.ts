/*
 * Checkout Screen messages
 */

export const scope = 'app.screen.checkout';

const messages = {
  services: {
    scope: `${scope}.services`,
    options: {
      defaultValue: 'Services',
    },
  },
  payments: {
    scope: `${scope}.payments`,
    options: {
      defaultValue: 'Payments',
    },
  },
  products: {
    scope: `${scope}.products`,
    options: {
      defaultValue: 'Products',
    },
  },
  addAnotherProduct: {
    scope: `${scope}.addAnotherProduct`,
    options: {
      defaultValue: 'Add another product',
    },
  },
  addAProduct: {
    scope: `${scope}.addAProduct`,
    options: {
      defaultValue: 'Add a product',
    },
  },
  total: {
    scope: `${scope}.total`,
    options: {
      defaultValue: 'Total',
    },
  },
  pay: {
    scope: `${scope}.pay`,
    options: {
      defaultValue: 'Pay',
    },
  },
};

export default messages;
