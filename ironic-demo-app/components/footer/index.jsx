/** @jsx $I.v */

import $I from 'ironic';
import CookieLove from 'images/cookie-love.svg';

class Footer extends $I.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-12">
          <footer>
            <p className="font-italic">
              <sup>1 </sup>
              <small>
                - unless one is unhealthily obsessed about performance
              </small>
            </p>
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
