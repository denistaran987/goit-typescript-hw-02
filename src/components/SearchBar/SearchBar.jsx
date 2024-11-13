import toast from 'react-hot-toast';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value.trim();
    if (inputValue === '') {
      toast.error('Please enter the field', {
        style: {
          backgroundColor: '#D924247F',
          color: '#fff',
        },
      });
    }

    onSubmit(inputValue);
    e.target.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} name="searchForm" onSubmit={handleSubmit}>
        <input
          className={s.field}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
