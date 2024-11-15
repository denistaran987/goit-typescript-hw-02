import { useEffect, useState } from 'react';
import { fetchImages } from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  // Функція отримання і обробки даних
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages(query, page);
        setImages(prev => [...prev, ...results]);
        setTotalPages(total_pages);

        if (results.length === 0) {
          throw new Error('No images found for your search query. Please try again.');
        }
      } catch (error) {
        console.log(error.message || error);
        const errorMessage =
          error.message === 'No images found for your search query. Please try again.'
            ? error.message
            : 'Sorry, something went wrong. Please try again later';
        setIsError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  // Функція пошуку за запитом
  const onSubmit = value => {
    setPage(1);
    setImages([]);
    setQuery(value);
  };

  const onPage = () => {
    setPage(prev => prev + 1);

    setTimeout(() => {
      const newContentHeight = document.body.scrollHeight;
      window.scrollTo({
        top: newContentHeight,
        behavior: 'smooth',
      });
    }, 500);
  };

  // Функція відкриття модального вікна
  function openModal(imgRegular) {
    setImageURL(imgRegular);
    setIsOpen(true);
  }

  // Функція закриття модального вікна
  const closeModal = () => setIsOpen(false);

  const showLoadMore = images.length > 0 && page < totalPages;

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {showLoadMore && <LoadMoreBtn onPage={onPage} />}
      {isOpen && (
        <ImageModal
          imageURL={imageURL}
          images={images}
          isOpen={isOpen}
          openModal={openModal}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
