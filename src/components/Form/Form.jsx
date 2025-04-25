import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    if (!value) {
      alert('Empty value');
      return;
    }
    onSubmit(value);
    e.target.reset();
  };
  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <input
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          autoFocus
        />
      </form>
    </div>
  );
};

export default Form;
