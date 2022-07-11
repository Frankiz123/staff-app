import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { colors as constColors, fontSizes, breakpoint } from 'theme';

const space = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32,
  xxxxl: 36,
};
// [0, 4, 8, 16, 32, 64, 128, 256, 512];
// 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const width = [16, 32, 64, 128, 256];
const height = [16, 32, 64, 128, 256];

// this one if for responsive layouts
// const breakpoints = {
//   xs: '0',
//   sm: '600px',
//   md: '960px',
//   lg: '1280px',
//   xl: '1920px',
// };

const defaultShadow = {
  elevation: 3,
  shadowColor: '#000000',
  shadowOffset: { height: 3, width: 0 },
  shadowOpacity: 0.4,
  shadowRadius: 6,
};

export const useTheme = () => {
  const theme = useSelector((store: any) => store.themeProvider?.theme);
  const insets = useSafeAreaInsets();
  const colors = constColors(theme);

  return {
    colors,
    space,
    fontSizes,
    fontWeights,
    width,
    height,
    defaultShadow,
    breakpoint,
    selectedTheme: theme,
    dimensions: Dimensions.get('screen'),
    insets,
  };
};

export default useTheme;
