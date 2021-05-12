import { createSelector } from 'reselect';

export const stateSelector = state => state;
export const todoIdSelector = (_, id) => id;

export const getTodos = createSelector(
  stateSelector,
  state => state.main.todos,
);

export const getUsers = createSelector(
  stateSelector,
  state => state.main.users,
);

export const getTodoById = createSelector(
  getTodos,
  getUsers,
  todoIdSelector,
  (todos, users, todoId) => {
    const todo = todos.find(todo => todo.id === todoId);
    const todoUser = users.find(user => user.id === todo.userId);
    return ({
      ...todo,
      user: todoUser
    });
  }
);

export const getTodosWithUsers = createSelector(
  getTodos,
  getUsers,
  (todos, users) => {

    const isLoading = !Boolean(todos && users);

    const todosWithUsers = todos?.map(todo => {
      const todoUser = users?.find(user => user.id === todo.userId);
      return ({
        ...todo,
        user: todoUser
      });
    })

    return ({
      isLoading: isLoading,
      todos: todosWithUsers
    })
  },
);
