export const scope = 'app.screen.public.register.welcomeMessages.done';

const messages = {
  heading: {
    scope: `${scope}.heading`,
    options: {
      defaultValue: "You're All Set!",
    },
  },
  subHeading: {
    scope: `${scope}.subHeading`,
    options: {
      defaultValue:
        "Open your calendar, you'll find two demo clients already booked.",
    },
  },
  continue: {
    scope: `${scope}.continue`,
    options: {
      defaultValue: 'Go to calendar',
    },
  },
  facebook: {
    scope: `${scope}.facebook`,
    options: {
      defaultValue: 'Continue with Facebook',
    },
  },
};

export default messages;
