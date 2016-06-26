import React from 'react';

export default class TodoApp extends React.Component {
  getItems() }{
    return this.props.todos || [];
  }

  render() {
    return <div>
      <section className="todoapp">
        <section className="main">
          <ul className="todo-list">
            {this.getItems().map(item =>

            )}
  }
};
