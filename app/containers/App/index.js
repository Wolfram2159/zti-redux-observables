/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { ping } from '../../store/features/actions';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    props.ping();
  }, []);

  return (
    <div>App</div>
  );
}

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = {
  ping: ping,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
