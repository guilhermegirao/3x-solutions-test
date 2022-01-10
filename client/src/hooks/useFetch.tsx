import { useEffect, useState } from 'react';
import api from '@/utils/api';
import { AxiosRequestConfig } from 'axios';

function useFetch<T>(url: string, config?: AxiosRequestConfig) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(url, config)
      .then(async response => {
        const json = await response.data;
        setData(json);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { loading, data, error };
}

export default useFetch;
