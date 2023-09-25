import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ children, onClick }) => (
  <button type="button" className={css.Button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
