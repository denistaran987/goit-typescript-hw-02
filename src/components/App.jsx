import { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/api';
import Loader from './Loader/Loader';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchImages(query);
        setImages(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query]);

  const onSubmit = value => {
    setQuery(value);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
