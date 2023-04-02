import {string, date, number, array} from 'yup'

export const VALIDATION_SCHEME= {
    title: string().min(1, 'Min. 1 characters').required('Title is required'),
    release_date: date().required('Date is required'),
    poster_path: string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,'Movie URL is required').required('Invalid Movie URL'),
    vote_average: number().min(0, 'Rating is required').max(10, 'Invalid Rating').required('Invalid Rating'),
    genres: array().min(1, 'Select at least one genre to proceed').required('Genres is required'), 
    runtime: number().min(1, 'Runtime is required').required('Invalid Runtime'),
    overview: string().min(20,'Min. 20 characters').required('Overview is required')
}