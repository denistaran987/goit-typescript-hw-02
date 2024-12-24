import { FC } from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onPage: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onPage }) => {
  return (
    <div style={{ paddingBlock: 10 }}>
      <button onClick={onPage} className={s.button} type="button">
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
