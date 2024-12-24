import { FC } from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

interface ImageModalProps {
  imageURL: string;
  onRequestClose: () => void;
  isOpen: boolean;
}

const ImageModal: FC<ImageModalProps> = ({ isOpen, imageURL, onRequestClose }) => {
  const customStyles: ReactModal.Styles = {
    content: {
      position: 'relative',
      inset: 0,
      width: '100%',
      maxWidth: 1200,
      height: '100%',
      maxHeight: 650,
      border: 'none',
      padding: 0,
      overflow: 'hidden',
    },

    overlay: {
      padding: '20',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(49, 38, 26, 0.4)',
    },
  };
  return (
    <ReactModal onRequestClose={onRequestClose} isOpen={isOpen} style={customStyles}>
      <img src={imageURL} alt="" style={{ width: '100%', height: '100%' }} />
    </ReactModal>
  );
};
export default ImageModal;
