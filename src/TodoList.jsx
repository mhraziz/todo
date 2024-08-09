const TodoList = (props) => {
  const renderedTodos = props.todos.map((item) => {
    return (
      <li
        style={{ padding: 10, fontWeight: "bold", cursor: "pointer" }}
        onClick={() =>
          props.onClickTodoItemInfo(item.id, item.title, item.completed)
        }
        key={item.id}
      >
        {item.completed ? " ✔ " : ""}
        {item.title}
      </li>
    );
  });

  return <>{renderedTodos}</>;
};

export default TodoList;
