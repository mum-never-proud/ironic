/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-access-state-in-setstate */
/** @jsx $I.v */

// TODO: support for `htmlFor` in ironic

import $I from 'ironic';
import { incrementRetryCount, submitUserDetails } from '../../actions';
import store from 'store';
import './style.css';

const { dispatch, getState, subscribe } = store;

class Form extends $I.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkout: false,
      isValidEmail: true,
      isValidPassword: true,
      isChecked: true,
      ...getState().userReducer,
    };

    subscribe(({ userReducer }) => this.setState({ ...this.state, ...userReducer }));
  }

  updateInput(e) {
    const attrName = e.target.getAttribute('name');

    this.updateState({ [attrName]: attrName === 'checkout' ? e.target.checked : e.target.value });
  }

  clearError(field) {
    this.updateState({ [field]: true });
  }

  // regex stolen from chromium :P that accepts unicode characters
  static validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
  }

  static validatePassword(password) {
    return password.length >= 8;
  }

  validateForm() {
    const { email, password, checkout } = this.state;
    const isValidEmail = Form.validateEmail(email);
    const isValidPassword = Form.validatePassword(password);

    this.updateState({
      isValidEmail,
      isValidPassword,
      isChecked: checkout,
    });

    if (isValidEmail && isValidPassword && checkout) {
      submitUserDetails(dispatch)({ email, password });
    } else {
      incrementRetryCount(dispatch);
    }
  }

  updateState(newState) {
    this.setState({ ...this.state, ...newState });
  }

  render() {
    const {
      email,
      password,
      isValidEmail,
      isValidPassword,
      isChecked,
      isSubmitting,
      isSubmitted,
    } = this.state;

    return (
      <div>
        <div className="row justify-content-md-center">
          <div className="col-12">
            <div className="lead sub-header">State Management</div>
            <p className="mt-2">
              This Signin form with validation demonstrates state management within the Component, it is also subscribed to the store will talk about it later, for now feel free to play with the form.
            </p>
          </div>
        </div>
        <div className="row mt-3 justify-content-md-center">
          <div className="col-12 col-md-6">
            <form className="signin-form">
              <div className="form-group">
                <div className="alert alert-info text-center">
                  Submitted details are sent to <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">jsonplaceholder.com</a>.
                </div>
                <div className="alert alert-warning text-center">
                  Remember do not submit any sensitive info!
                </div>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  disabled={isSubmitted}
                  onInput={this.updateInput.bind(this)}
                  onFocusIn={this.clearError.bind(this, 'isValidEmail')}
                />
                <small id="emailHelp" className={`form-text ${isValidEmail ? 'text-muted' : 'text-danger'}`}>
                  {
                    isValidEmail
                      ? 'We\'ll never share your email with anyone else.'
                      : 'Invalid Email.'
                  }
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  disabled={isSubmitted}
                  onInput={this.updateInput.bind(this)}
                  onFocusIn={this.clearError.bind(this, 'isValidPassword')}
                />
                <small id="emailHelp" className={`form-text ${isValidPassword ? 'text-muted' : 'text-danger'}`}>
                  {
                    isValidPassword
                      ? 'Stronger the better!'
                      : 'Password must be at least 8 characters long.'
                  }
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  name="checkout"
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  disabled={isSubmitted}
                  onChange={this.updateInput.bind(this)}
                  onFocusIn={this.clearError.bind(this, 'isChecked')}
                />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                <small className={`form-text ${isChecked ? '' : 'text-danger'}`}>
                  {
                    isChecked
                      ? <a href="https://generator.lorem-ipsum.info/terms-and-conditions" target="_blank" rel="noreferrer">Terms and Conditions</a>
                      : 'Please check me out!'
                  }
                </small>
              </div>
              {
                isSubmitted
                  ? <div className="alert alert-success text-center">Woohoo, details Submitted!</div>
                  : <button type="button" className="btn btn-primary" onClick={this.validateForm.bind(this)} disabled={isSubmitting}>Submit</button>
              }
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
