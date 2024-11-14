import axios from 'axios';

export const fetchImages = async (query, page) => {
  const ACCESS_KEY = 'VDRecn2uPDHq_2Qjxu2NKODyXsH-POwoFHwzhvtiXjM';
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}&per_page=12`
  );
  return data;
};
