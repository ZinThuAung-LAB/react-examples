import { Component } from 'react';

class Count extends Component {
  render() {
    return (
      <div className="todo-count">
        <h3>Total Tasks: {this.props.count}</h3>
      </div>
    );
  }
}

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingIndex: null,
      editText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleEdit(index, currentText) {
    this.setState({
      editingIndex: index,
      editText: currentText,
    });
  }

  handleEditChange(e) {
    this.setState({
      editText: e.target.value,
    });
  }

  handleResubmit(indexToSave) {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[indexToSave] = prevState.editText;
      return {
        todos: updatedTodos,
        editingIndex: null,
        editText: '',
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: 'Concat input to todos Array',
    }));
  }

  handleDelete(indexToDelete) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((_, index) => index !== indexToDelete),
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Count count={this.state.todos.length} />
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editingIndex === index ? (
                <>
                  <input
                    value={this.state.editText}
                    type="text"
                    onChange={this.handleEditChange}
                  />
                  <button onClick={() => this.handleResubmit(index)}>
                    Resubmit{' '}
                  </button>
                </>
              ) : (
                <>
                  <span>{todo}</span>
                  <button onClick={() => this.handleEdit(index, todo)}>
                    Edit
                  </button>
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
