/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/** @jsx $I.v */

import $I from 'ironic';
import generateRGB from 'utils/generate-rgb';
import store from 'store';
import './style.css';

const { getState, subscribe } = store;

class Disco extends $I.Component {
  constructor(props) {
    super(props);

    this.state = { colors: [], selectedColors: [], ...getState().userReducer };

    subscribe(({ userReducer }) => this.setState({ ...this.state, ...userReducer }));
    // TODO: remove this once lifecycle methods are implemented
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
          <p>Disco Component is also subscribed to the store. You can click on the tile to pause the color change again to demonstrate internal state management. </p>
          <div className="alert alert-info text-center">
            Visit the link to identify areas being painted in devtools for <a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#paint-flashing" target="_blank" rel="noreferrer">Chrome/Edge</a> or <a href="https://developer.mozilla.org/en-US/docs/Tools/Paint_Flashing_Tool" target="_blank" rel="noreferrer">Firefox</a>
          </div>
        </div>
        <div className="col-12 col-md-6 disco-lights-container">
          {colors}
        </div>
      </div>
    );
  }
}

export default Disco;
