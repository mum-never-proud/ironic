/** @jsx $I.v */

import $I from 'ironic';
import './style.css';

class Header extends $I.Component {
  render() {
    return (
      <div className="header">
        <h1 className="text-center">ironic (alpha)</h1>
        {/* <p className="text-center mt-3">virtual DOM implementation</p> */}
      </div>
    );
  }
}

export default Header;
