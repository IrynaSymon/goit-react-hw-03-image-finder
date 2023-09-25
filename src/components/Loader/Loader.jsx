import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.StyledLoader}>
      <TailSpin />
    </div>
  );
};
