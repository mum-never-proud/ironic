/** @jsx $I.v */

import $I from 'ironic';
import CookieLove from 'images/cookie-love.svg';

class Footer extends $I.Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-12">
          <footer>
            <p className="text-center">
              made with much
              <img src={CookieLove} alt="Cookie Love" width="50" height="50" />
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
