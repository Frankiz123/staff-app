import { makeStyleSheet } from 'theme/makeStyleSheet';

export const makeStyles = makeStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 10,
  },
  headline: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  label: {
    color: 'black',
  },
  seperator: {
    marginVertical: theme.space.s,
  },
}));
