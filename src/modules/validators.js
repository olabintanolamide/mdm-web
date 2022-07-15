import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const loginDefaultValues = {
  email: '',
  password: ''
}

export const loginSchma = Yup.object({
  email: Yup.string().email().required('Email must be provided'),
  password: Yup
    .string().required('Password must be provided')
    .min(8, 'Password cannot be less than 8 characters')
})

export const loginResover = yupResolver(loginSchma)
