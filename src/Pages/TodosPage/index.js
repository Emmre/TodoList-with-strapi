import React, { Component } from "react";
import Card from "../../components/Ui/Card";
import Button from "../../components/Ui/Button";
import Input from "../../components/Ui/Input";
import s from "./TodosPage.module.css";

class TodosPage extends Component {
  state = {
    todos: [],
    todoTitle: "",
  };

  componentDidMount() {
    this.fetchTodos();
  }

  // Get Data
  fetchTodos = async () => {
    const response = await fetch("http://localhost:1337/todos");
    const data = await response.json();
    this.setState({ todos: data });
  };

  // Send Data
  postTodo = async (newTodo) => {
    const response = await fetch("http://localhost:1337/todos", {
      body: JSON.stringify(newTodo),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  };

  // Delete Todo
  deleteTodo = async (todoId) => {
    await fetch(`http://localhost:1337/todos/${todoId}`, {
      method: "DELETE",
    });

    await this.fetchTodos();
  };

  // Change Completed
  toggleCompleted = async (todo) => {
    await fetch(`http://localhost:1337/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await this.fetchTodos();
  };

  // Add New Todo
  addTodo = async (e) => {
    e.preventDefault();

    const newTodo = {
      title: this.state.todoTitle,
    };

    await this.postTodo(newTodo);
    await this.fetchTodos();

    this.setState({
      todoTitle: "",
    });
  };

  // Set Todo Title
  setTodoTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  render() {
    const { todos, todoTitle } = this.state;
    return (
      <div>
        <h1>TodosPage</h1>
        <hr />
        <div className={s.todoFromWrapper}>
          <Card>
            <h1>Add Todo</h1>
            <form onSubmit={this.addTodo}>
              <Input
                label="Todo Title"
                placeholder="Enter a todo title..."
                value={todoTitle}
                onChangeHandler={this.setTodoTitle}
              />
              <Button type="submit">Add Todo</Button>
            </form>
          </Card>
        </div>
        <div className={s.todosGrid}>
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              onToggleDone={this.toggleCompleted}
              onDelete={this.deleteTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

const TodoCard = ({ todo, onToggleDone, onDelete }) => (
  <Card>
    <h3>{todo.title}</h3>
    <div className={s.todoAction}>
      <Button
        variant={todo.completed ? "success" : "primary"}
        onClickHandler={() => onToggleDone(todo)}
      >
        {todo.completed ? "Done" : "Not Done"}
      </Button>
      <Button variant="danger" onClickHandler={() => onDelete(todo.id)}>
        Delete
      </Button>
    </div>
  </Card>
);
export default TodosPage;
