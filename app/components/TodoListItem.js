import React from 'react';
import { connect } from 'react-redux';
import { getTodoById } from '../store/features/selectors';

function TodoListItem(props) {
  return (
    <div>
      <h3>{props.todo.title}</h3>
      <p>{props.todo.user.name}</p>
      <p>{props.todo.completed ? 'Done' : 'Not done'}</p>
      <hr/>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  todo: getTodoById(state, props.id)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
