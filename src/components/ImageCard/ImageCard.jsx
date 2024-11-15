import s from './ImageCard.module.css';

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(regular);
  };
  const {
    alt_description,
    urls: { small, regular },
  } = image;
  return (
    <div onClick={handleClick} className={s.wrapper}>
      <img className={s.image} src={small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
