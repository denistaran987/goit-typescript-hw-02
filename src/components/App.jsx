import { useEffect, useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        const { results } = await fetchImages(query);
        setImages(results);
      } catch (error) {
        console.log(error.message);
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
    </div>
  );
}

export default App;
