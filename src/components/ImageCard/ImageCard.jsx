import s from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  const {
    alt_description,
    urls: { small },
  } = image;
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
