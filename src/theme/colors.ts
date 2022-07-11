import { DEFAULT_THEME } from './constants';

const colors = (theme: string = DEFAULT_THEME) => ({
  // 	Primary
  primary: {
    light: '#0275ce',
    main: '#90caf9',
    dark: '#648dae',
  }[theme],

  // Secondary
  secondary: {
    light: '#bdc3c7',
    main: '#f48fb1',
    dark: '#aa647b',
  }[theme],

  // Error
  error: {
    light: '#dc3545',
    main: '#f44336',
    dark: '#d32f2f',
  }[theme],

  // Warning
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
  }[theme],

  // Info
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
  }[theme],

  // Success
  success: {
    light: '#2ecc71',
    main: '#4caf50',
    dark: '#388e3c',
  }[theme],

  // Text Color
  text: {
    light: {
      primary: 'black',
      highlightedColor: '#fc5e3b',
      green: '#2ecc71',
      grey: '#bbb',
    },
    main: {
      primary: 'rgba(255, 255, 255, 1)',
      highlightedColor: '#fc5e3b',
      green: '#2ecc71',
      grey: '#bbb',
    },
    dark: {
      primary: 'rgba(255, 255, 255, 1)',
      highlightedColor: '#fc5e3b',
      green: '#2ecc71',
      grey: '#bbb',
    },
  }[theme],

  // Background
  background: {
    light: '#f2F4f5',
    main: '#4caf50',
    dark: '#323232',
  }[theme],

  contrast: {
    light: '#323232',
    main: '#4caf50',
    dark: '#f0f6fc',
  }[theme],

  activeTintColor: {
    light: '#0275ce',
    main: '#4caf50',
    dark: '#f0f6fc',
  }[theme],

  inactiveTintColor: {
    light: '#d0d0d0',
    main: '#4caf50',
    dark: '#f0f6fc',
  }[theme],
});

/**
 * https://material-ui.com/customization/palette/
 */
export { colors };
