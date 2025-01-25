const URL = 'https://opentdb.com';

const api = async <T>(path: string, args?: RequestInit) => {
  const response = await fetch(`${URL}${path}`, {
    mode: 'cors',
    ...args,
  });

  return (await response.json()) as T;
};

export default api;
