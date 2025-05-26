// export const API_URL = `https://garbage-collection-backend.onrender.com/api`;
export const API_URL = `http://localhost:4200/api`;
// export const API_URL = `${process.env.APP_URL}/api`;

export const getAuthUrl = (string: string) => `/auth/${string}`;
export const getUsersUrl = (string: string) => `/users/${string}`;
export const getOrdersUrl = (string: string) => `/orders/${string}`;
export const getServicesUrl = (string: string) => `/services/${string}`;
