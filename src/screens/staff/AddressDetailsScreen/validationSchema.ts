import * as yup from 'yup';

export const schema = yup.object().shape({
  address: yup.string().required('please provide an address'),
  city: yup.string().required('please provide a city'),
  state: yup.string(),
  zip: yup.number(),
});
