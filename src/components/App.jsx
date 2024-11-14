import { useEffect, useState } from 'react';
import { fetchImages } from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages(query, page);
        setImages(prev => [...prev, ...results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const onSubmit = value => {
    setPage(0);
    setImages([]);
    setQuery(value);
  };

  const onPage = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onPage={onPage} />}
    </div>
  );
}

export default App;
