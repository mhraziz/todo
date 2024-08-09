import TodoList from "./TodoList";

const App = () => {
  const handleClickTodoItemInfo = (id, title, completed) => {
    alert(
      `Todo List Details: \n\n ID - ${id}\n Title - ${title}\n Is completed - ${
        completed ? "Yes" : "No"
      }`
    );
  };

  const todos = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build an app", completed: false },
    { id: 3, title: "Deploy the app", completed: false },
    { id: 4, title: "Learn C#", completed: false },
    { id: 5, title: "Build C# app", completed: false },
    { id: 6, title: "Deploy C# app", completed: false },
    { id: 7, title: "Learn Dart", completed: false },
    { id: 8, title: "Build an Dart app", completed: false },
    { id: 9, title: "Deploy Dart app", completed: false },
    { id: 10, title: "Learn more", completed: false },
  ];

  return (
    <main>
      <h1>Todo List</h1>
      <hr />
      <ol>
        <TodoList todos={todos} onClickTodoItemInfo={handleClickTodoItemInfo} />
      </ol>
    </main>
  );
};

export default App;
