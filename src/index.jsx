import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import TodoApp from './components/TodoApp';

const todos = List.of(
  Map({id: 1, test: 'React', status: 'active', editing: false}),
  Map({id: 2, test: 'Redux', status: 'active', editing: false}),
  Map({id: 3, test: 'Immutable', status: 'completed', editing: false})
);

ReactDOM.redner(
  <TodoApp todos={todos} />,
  document.getElementById('app')
);
