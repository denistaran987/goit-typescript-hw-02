import axios from 'axios';

export const fetchImages = async query => {
  const ACCESS_KEY = 'VDRecn2uPDHq_2Qjxu2NKODyXsH-POwoFHwzhvtiXjM';
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&page=1&per_page=12&query=${query}`
  );
  return data;
};
