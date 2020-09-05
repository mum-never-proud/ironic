/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/** @jsx $I.v */

import $I from 'ironic';

class Intro extends $I.Component {
  render() {
    return (
      <div className="row mt-3 justify-content-md-center">
        <div className="col-12">
          <p className="text-center lead">
            this WebApp is made with <a href="https://github.com/mum-never-proud/ironic" target="_blank" rel="noreferrer">ironic</a> + <a href="https://github.com/mum-never-proud/redux" target="_blank" rel="noreferrer">redux</a>
          </p>
          <div>
            <div className="lead sub-header">vDOM concepts</div>
            <ul className="mt-2">
              <li>A Virtual DOM is a data structure that represents the real DOM but lacks the ability to impact UI directly</li>
              <li>A new Virtual DOM tree is created for every change and diffed with the old one to make minimum changes to the real DOM</li>
            </ul>
          </div>
        </div>
        <div className="col-12">
          <div className="lead sub-header">Redux</div>
          <p className="mt-2">Redux at its core implements Pub/Sub pattern similar to event driven architecture used heavily in JS. It centralizes the Application state which can be shared among multiple components.</p>
        </div>
        <div className="col-12">
          <div className="lead sub-header">Takeaway</div>
          <p className="mt-2">Virtual DOM is not a silver bullet. Anything that isn&apos;t vanilla JS is a pure overhead. In my opinion a Developer<sup>1</sup> doesn&apos;t choose a framework based on size or performance rather its Community, Extendibility, Speed of Development, Code structure and some Fun!</p>
          <p>Enough of the talks lets dive into the Demo!</p>
        </div>
      </div>
    );
  }
}

export default Intro;
