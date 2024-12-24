import { FC } from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { ImageResult } from '../../types';

interface ImageGalleryProps {
  images: ImageResult[];
  openModal: (imgRegular: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images.map(image => {
        return (
          <li className={s.item} key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
