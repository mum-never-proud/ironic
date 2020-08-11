/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-access-state-in-setstate */
/** @jsx $I.v */

// TODO: support for `htmlFor` in ironic

import $I from 'ironic';
import store from '../../store';

class Form extends $I.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      checkout: false,
      isValidEmail: true,
      isValidPassword: true,
      isChecked: true,
      isSubmitting: false,
      isSubmitted: false,
    };
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
      isSubmitting: isValidEmail && isValidPassword && checkout,
    });

    if (this.state.isSubmitting) {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(this.state),
      })
        .then(() => {
          this.updateState({ isSubmitted: true });
          store.dispatch({ type: 'SUBMIT', payload: { isSubmitted: true } });
        })
        .finally(() => this.updateState({ isSubmitting: false }));
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
        <div className="row mt-3 justify-content-md-center">
          <div className="col-12">
            <p className="text-center lead">
              This WebApp (Dumb maybe) is made with <a href="https://github.com/mum-never-proud/ironic" target="_blank" rel="noreferrer">ironic</a> + <a href="https://github.com/mum-never-proud/redux" target="_blank" rel="noreferrer">redux</a>
            </p>
            <p>
              vDOM concepts:
              <ul className="mt-3">
                <li>A Virtual DOM is a data structure that represents the real DOM but lacks the ability to impact UI directly</li>
                <li>A new Virtual DOM tree is created for every change and diffed with the old one to make minimum changes to the real DOM</li>
              </ul>
            </p>
            <p>
              Below is a simple form with validation to demonstrate the <span className="lead">state management</span> inside a <b className="lead">Component</b>.
            </p>
            <p>
              On scrolling down further you can see <span className="lead">Disco Component</span>, which will stop on successful submission of this form.
            </p>
            <div className="alert alert-warning text-center">
              Feel free to play with the form. Remember do not submit any sensitive info!
            </div>
          </div>
        </div>
        <div className="row mt-3 justify-content-md-center">
          <div className="col-12 col-md-6">
            <form>
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
