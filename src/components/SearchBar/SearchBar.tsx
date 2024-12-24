import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { FC, FormEvent, useRef } from 'react';

interface SearchBarProps {
  onSubmit: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current;
    if (!input) return;

    const inputValue: string = input.value.trim();
    if (inputValue === '') {
      toast.error('Please enter text to search for images', {
        style: {
          backgroundColor: '#D924247F',
          color: '#fff',
        },
      });
      return;
    }

    onSubmit(inputValue);
    input.value = '';
  };

  return (
    <>
      <div className={s.placeholder}></div>
      <header className={s.header}>
        <form className={s.form} name="searchForm" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
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
    </>
  );
};
export default SearchBar;
