import * as yup from 'yup'

export const messageSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  messageName: yup
    .string()
    .min(2, 'At least 2 characters')
    .required('Required'),
  subject: yup.string().max(40, 'Max 30 characters'),
  message: yup
    .string()
    .min(10, 'At least 10 characters')
    .max(350, 'Max 350 characters')
    .required('Required'),
})
