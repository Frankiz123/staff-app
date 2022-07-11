import { makeStyleSheet } from 'theme/makeStyleSheet';

export const makeStyles = makeStyleSheet((theme) => ({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 0.5,
    padding: 8,
    width: 350,
    borderRadius: 4,
    color: 'black',
    borderColor: 'grey',
    marginVertical: theme.space.xxxs,
  },
  inputHolder: {
    paddingVertical: 12,
  },
  label: {
    color: 'black',
    paddingVertical: 6,
  },
  buttonHolder: {
    marginVertical: 24,
    width: '100%',
    alignItems: 'center',
  },
  saveButton: {
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    width: 350,
    justifyContent: 'center',
    paddingVertical: theme.space.m,
    alignItems: 'center',
  },
  notesInput: {
    borderWidth: 0.5,
    padding: 8,
    width: 350,
    borderRadius: 4,
    color: 'black',
    borderColor: 'grey',
    marginVertical: theme.space.xxxs,
    height: 120,
  },
  accordionHolder: {
    marginTop: theme.space.m,
  },
  checkBoxText: {
    color: 'black',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  additionalInfo: {
    paddingVertical: theme.space.m,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 120,
    resizeMode: 'cover',
    backgroundColor: 'lightgray',
  },
}));
