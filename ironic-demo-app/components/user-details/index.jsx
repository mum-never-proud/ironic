/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/** @jsx $I.v */

import $I from 'ironic';
import Waiting from 'images/waiting.svg';
import Verified from 'images/verified.svg';
import store from 'store';
import './style.css';

const { getState, subscribe } = store;

class UserDetails extends $I.Component {
  constructor(props) {
    super(props);

    const { userReducer: userDetails, formStatsReducer: formStats } = getState();

    this.state = { ...userDetails, ...formStats };

    subscribe(({ userReducer, formStatsReducer }) => this.setState({ ...this.state, ...userReducer, ...formStatsReducer }));
  }

  render() {
    const { email, isSubmitted, retries } = this.state;

    return (
      <div className="row mt-5 justify-content-md-center">
        <div className="col-12">
          <div className="lead sub-header">Store</div>
          <p className="mt-2">
            On successful submission of the above form the user details are dispatched to the store which updates
            the other subscribed Components.
          </p>
          <p>
            This Component is subscribed to the store which will display
            <ul>
              <li>Number of retries before a successful submission of the form.</li>
              <li>Submitted User email post successful submission of the form.</li>
            </ul>
          </p>
        </div>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          {
            isSubmitted
              ? <p><b>Email ID</b> - {email}</p>
              : <p><b>Retries</b> - {`${retries}`}</p>
          }
          <img src={isSubmitted ? Verified : Waiting} alt={isSubmitted ? 'verified' : 'waiting'} className="user-details-background" />
        </div>
        <div className="col-12 text-center">
          <small className="text-muted">Illustrations from <a href="https://undraw.co/" target="_blank" rel="noreferrer">undraw.co</a></small>
        </div>
      </div>
    );
  }
}

export default UserDetails;
