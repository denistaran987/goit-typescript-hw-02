import { FC } from 'react';
import s from './ImageCard.module.css';
import { ImageResult } from '../../types';

interface ImageCardProps {
  image: ImageResult;
  openModal: (imgRegular: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  const {
    alt_description,
    urls: { small, regular },
  } = image;

  const handleClick = (): void => {
    openModal(regular);
  };

  return (
    <div onClick={handleClick} className={s.wrapper}>
      <img className={s.image} src={small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
