import * as yup from 'yup';

export type FormValues = {
  bookingTrxId: string;
  phone: string;
};

export const validationSchema = yup.object().shape({
  bookingTrxId: yup.string().required('Booking ID is required'),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone number must be digits only')
    .required('Phone number is required'),
});
