import { ajax } from 'rxjs/observable/dom/ajax';


// if (process.env.NODE_ENV === 'development') {
//   baseURL = '/api';
// }

export default function request(url, options) {
  const data = {
    url,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    crossDomain: true,
    responseType: 'json',
  };
  if (!options) {
    return ajax({
      method: 'GET',
      ...data,
    });
  }
  return ajax({
    method: options.method,
    body: options.data,
    ...data,
  });
}
