import { useEffect, useState } from 'react';
import { fetchImages } from '../services/api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import Loader from './Loader/Loader';
import { ImageResult } from '../types';

interface fetchImagesResponse {
  results: ImageResult[];
  total_pages: number;
}

function App(): JSX.Element {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<ImageResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imageURL, setImageURL] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);

  // Функція отримання і обробки даних
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results, total_pages } = await fetchImages<fetchImagesResponse>(query, page);
        setImages(prev => [...prev, ...results]);
        setTotalPages(total_pages);

        if (results.length === 0) {
          throw new Error('No images found for your search query. Please try again.');
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error &&
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
  const onSubmit = (value: string): void => {
    setPage(1);
    setImages([]);
    setQuery(value);
  };

  const onPage = (): void => {
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
  function openModal(imgRegular: string): void {
    setImageURL(imgRegular);
    setIsOpen(true);
  }

  // Функція закриття модального вікна
  const closeModal = (): void => setIsOpen(false);

  const showLoadMore = images.length > 0 && page < totalPages;

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {showLoadMore && <LoadMoreBtn onPage={onPage} />}
      {isOpen && <ImageModal imageURL={imageURL} isOpen={isOpen} onRequestClose={closeModal} />}
    </div>
  );
}

export default App;
