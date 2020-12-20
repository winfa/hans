const key = 'U4DMV*8nvpm3EOpvf69Rxw((';
const access_token = 'Mfyo3Vi0EFYwm*hVHAzs0w))';

export async function fetchApi(url, options) {
  if (options) {
    return (await fetch(`${url}&key=${key}&token=${access_token}`, ...options)).json();
  } else {
    return (await fetch(`${url}&key=${key}&access_token=${access_token}`)).json();
  }
}
