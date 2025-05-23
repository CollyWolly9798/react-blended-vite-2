import { RiDeleteBinLine } from 'react-icons/ri';
import Text from '../Text/Text';
import style from './TodoListItem.module.css';
const TodoListItem = ({ todo, onDelete }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{todo.id}
      </Text>
      <Text>{todo.text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
