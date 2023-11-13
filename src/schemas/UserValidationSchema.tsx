import { isEmpty } from 'lodash';
import * as Yup from 'yup';

export const UserValidationSchema = Yup.object({
  firstName: Yup.string()
  .matches(/^[^\d]+$/, 'First name should not contain numbers')
  .required('First Name is Required'),
  lastName: Yup.string().required('Last name is Required'),
  email: Yup.string().email('Invalid email address').required('Email is Required'),
  mobileNumber: Yup.string()
  .test('type', 'Phone number must be in phone format', (value) => {
      const phoneRegex = /^[\\+]?[(]?[0-9]{1,3}[)]?[-\\s\\.]?[0-9]{1,3}[-\\s\\.]?[0-9]{4,6}$/im;
      const isCorrectPhoneFormat = phoneRegex.test(value || '');

      return isEmpty(value) || isCorrectPhoneFormat;
  })
  .notRequired()
//   .matches(/^[0-9]*$/, 'Invalid phone number')
});
