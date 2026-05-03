import React from 'react';

export const navigate = (page, params = {}) => {
  const cleanPage = page.startsWith('/') ? page.slice(1) : page;
  let hash = `#/${cleanPage}`;
  if (Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) hash += `?${queryString}`;
  }
  window.location.hash = hash;
};

function parseHashParams() {
  try {
    const hashPart = window.location.hash.split('?')[1] || '';
    const searchParams = new URLSearchParams(hashPart);
    const paramsObj = {};
    for (const [key, value] of searchParams) {
      paramsObj[key] = value;
    }
    return paramsObj;
  } catch (error) {
    console.error('Error parsing URL params:', error);
    return {};
  }
}

export const useParams = () => {
  const [params, setParams] = React.useState(() => parseHashParams());

  React.useEffect(() => {
    const updateParams = () => setParams(parseHashParams());
    updateParams();
    window.addEventListener('hashchange', updateParams);
    return () => window.removeEventListener('hashchange', updateParams);
  }, []);

  return params;
};

export const useRouter = () => ({ navigate });
