import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.list}>
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
