/*
 * ForgotPswd component messages
 */

export const scope = 'app.screen.public.logIn';

const messages = {
  header: {
    scope: `${scope}.header`,
    options: {
      defaultValue: 'Log In',
    },
  },
  title: {
    scope: `${scope}.title`,
    options: {
      defaultValue: 'CLINICSOFTWARE',
    },
  },
  subtitle: {
    scope: `${scope}.subtitle`,
    options: {
      defaultValue: 'The one app for your business needs',
    },
  },
  email: {
    scope: `${scope}.email`,
    options: {
      defaultValue: 'Email',
    },
  },
  password: {
    scope: `${scope}.password`,
    options: {
      defaultValue: 'Password',
    },
  },
  passwordRequired: {
    scope: `${scope}.passwordRequired`,
    options: {
      defaultValue: 'Password is required.',
    },
  },
  emailRequired: {
    scope: `${scope}.emailRequired`,
    options: {
      defaultValue: 'Email is required.',
    },
  },
  login: {
    scope: `${scope}.login`,
    options: {
      defaultValue: 'Log In',
    },
  },
  createAcc: {
    scope: `${scope}.createAcc`,
    options: {
      defaultValue: 'Create a Free Account',
    },
  },
  rememberMe: {
    scope: `${scope}.rememberMe`,
    options: {
      defaultValue: 'Remember me',
    },
  },
  orLoginWith: {
    scope: `${scope}.orLoginWith`,
    options: {
      defaultValue: 'Or Log In with:',
    },
  },
  forgot: {
    scope: `${scope}.forgot`,
    options: {
      defaultValue: 'Forgot Your Password?',
    },
  },
  toastNotFound: {
    scope: `${scope}.toastNotFound`,
    options: {
      defaultValue: 'No match found for the email and password combination',
    },
  },

  missingInputs: {
    scope: `${scope}.missingInputs`,
    options: {
      defaultValue: 'Please fill in the Email and Password.',
    },
  },

  facebook: {
    scope: `${scope}.facebook`,
    options: {
      defaultValue: 'Continue with Facebook',
    },
  },
  google: {
    scope: `${scope}.google`,
    options: {
      defaultValue: 'Continue with Google',
    },
  },
  apple: {
    scope: `${scope}.apple`,
    options: {
      defaultValue: 'Continue with Apple',
    },
  },
};

export default messages;
