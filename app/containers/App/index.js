/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { cancel, ping } from '../../store/features/actions';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div>
      App
      <button onClick={() => props.ping()}>
        Start
      </button>
      <button onClick={() => props.cancel()}>
        Stop
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = {
  ping: ping,
  cancel: cancel
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
