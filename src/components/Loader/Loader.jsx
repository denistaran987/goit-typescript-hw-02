import { MagnifyingGlass } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass={s['magnifying-glass-wrapper']}
        glassColor="#c0efff"
        color="#02020"
      />
    </div>
  );
};
export default Loader;
