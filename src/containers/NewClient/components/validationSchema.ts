import * as yup from 'yup';
import messages from '../messages';

export const schema = yup.object().shape({
  name: yup.string().required('firstname is required'),
  surname: yup.string().required('lastname is required'),
  phone: yup.number().min(10).required('phone is required'),
  email: yup
    .string()
    .required('email is required')
    .email('eneter a valid email'),
  notes: yup.string(),
});
