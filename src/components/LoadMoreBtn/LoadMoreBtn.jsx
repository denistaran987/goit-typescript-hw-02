import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onPage }) => {
  return (
    <div style={{ paddingBlock: 10 }}>
      <button onClick={onPage} className={s.button} type="button">
        Load more
      </button>
    </div>
  );
};
export default LoadMoreBtn;
