/** @jsx $I.v */

import $I from 'ironic';

class Header extends $I.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p className="display-4 text-center mt-3">ironic (alpha)</p>
          <p className="text-center mt-3">virtual DOM implementation</p>
        </div>
      </div>
    );
  }
}

export default Header;
