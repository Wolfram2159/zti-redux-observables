import React from 'react';
import {
  cancel,
  getTodoRequest,
  getTodosRequest,
  getUsersRequest,
  ping,
} from '../../store/features/actions';
import { connect } from 'react-redux';
import { getTodosWithUsers } from '../../store/features/selectors';
import TodoListItem from '../../components/TodoListItem';

function App(props) {

  return (
    <>
      <div>{ console.log(props.todosWithUsers) }
        Ping-pong
        <button onClick={ () => props.ping() }>
          Start
        </button>
        <button onClick={ () => props.cancel() }>
          Stop
        </button>
      </div>
      <div>
        Request
        <button onClick={ () => props.getTodos() }>
          GET TODOS
        </button>
        <button onClick={ () => props.getTodo(1) }>
          GET TODO
        </button>
        <button onClick={ () => props.getUsers() }>
          GET USERS
        </button>
      </div>
      {
        !props.todosWithUsers.isLoading &&
        props.todosWithUsers.todos.map(todo =>
          <TodoListItem key={ todo.id } id={ todo.id } />,
        )
      }
    </>
  );
}

const mapStateToProps = state => ({
  state: state.ping,
  todosWithUsers: getTodosWithUsers(state),
});

const mapDispatchToProps = {
  ping: ping,
  cancel: cancel,
  getTodos: getTodosRequest,
  getTodo: getTodoRequest,
  getUsers: getUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
