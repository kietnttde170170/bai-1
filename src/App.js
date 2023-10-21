import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './taskList';
import TaskForm from './taskForm';

const App = () => {
  return (
    <Provider store={store}>
      <TaskList />
      <TaskForm />
    </Provider>
  );
};

export default App;