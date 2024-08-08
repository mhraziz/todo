const TodoList = ({ todos }) => {
    const renderedTodos = todos.map(({id,title,completed}) => {

    //  if(completed){
    //     return <div key={id}>✔ {title}</div>
    //  }

      return (<div key={id}>
         {completed ? '✔' : ''}
        {title}</div>
      );
    });
  
    return <section>{renderedTodos}</section>;
  };
  
  export default TodoList;