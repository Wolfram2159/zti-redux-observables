import React from 'react';
import { axiosRequest, cancel, ping } from '../../store/features/actions';
import { connect } from 'react-redux';

function App(props) {

  return (
    <>
      <div>
        {console.log(props.state)}
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
        <button onClick={ () => props.axiosRequest()}>
          Send request
        </button>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  state: state.ping,
});

const mapDispatchToProps = {
  ping: ping,
  cancel: cancel,
  axiosRequest: axiosRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
