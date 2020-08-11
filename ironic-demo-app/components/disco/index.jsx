/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/** @jsx $I.v */

import $I from 'ironic';
import generateRGB from 'utils/generate-rgb';
import store from '../../store';
import './style.css';

class Disco extends $I.Component {
  constructor(props) {
    super(props);

    this.state = { colors: [], selectedColors: [], isSubmitted: false };

    // TODO: remove this once lifecycle methods are implemented
    store.subscribe((state) => this.setState({ ...this.state, ...state }));
    window.setTimeout(() => this.updateRGBGrid());
  }

  updateRGBGrid() {
    const { colors, selectedColors, isSubmitted } = this.state;

    this.setState({ ...this.state, colors: Array.from({ length: 16 }, (_, i) => (selectedColors.includes(i) ? colors[i] : generateRGB())) });
    window.setTimeout(() => {
      if (!isSubmitted) {
        this.updateRGBGrid();
      }
    }, 500);
  }

  updateSelectedColors(i) {
    const { selectedColors } = this.state;
    const colorIndex = selectedColors.indexOf(i);

    if (colorIndex >= 0) {
      selectedColors.splice(colorIndex, 1);
    } else {
      selectedColors.push(i);
    }

    this.setState({ ...this.state, selectedColors });
  }

  render() {
    const colors = this.state.colors.map((color, i) => <div className="color col-3" style={`background-color: rgb(${color.join(',')})`} onClick={this.updateSelectedColors.bind(this, i)} />);

    return (
      <div className="row mt-5 justify-content-md-center">
        <div className="col-12">
          <p className="text-center">
            <span className="lead">Disco Component</span> is subscribed to Central state using my own basic implementation of <a href="https://github.com/mum-never-proud/redux" target="_blank" rel="noreferrer">redux</a>.
          </p>
          <p>
            You can click on the tile to stop the color change. Well this isn&apos;t much useful unless <span className="lead">Dev Tools</span> is open to see the minimum change (in this case props) in DOM.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            {colors}
          </div>
        </div>
      </div>
    );
  }
}

export default Disco;
