import axios from 'axios';

export const fetchImages = async <T>(query: string, page: number): Promise<T> => {
  const ACCESS_KEY = 'VDRecn2uPDHq_2Qjxu2NKODyXsH-POwoFHwzhvtiXjM';
  const { data } = await axios.get<T>(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=12`
  );
  return data;
};
