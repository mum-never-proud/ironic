import diff from 'diff';

export default class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this._pendingState = null;
    this._parentElement = null;
    this._currentNode = null;
    this._currentElement = null;
  }
  setState(partialState) {
    this._pendingState = Object.assign({}, this.state, partialState);
    this.shouldUpdate() && this.updateComponent();
  }
  // @override
  shouldUpdate() {
    return true;
  }
  updateComponent() {
    if (this.shouldUpdate()) {
      const $currentNode = this._currentNode;

      if (this.state !== this._pendingState) {
        this.state = this._pendingState;
      }

      const $nextNode = this.render();

      this._pendingState = null;
      this._currentNode = $nextNode;

      const patch = diff($currentNode, $nextNode);

      patch(this._currentElement);
    }
  }
  // @override
  render(){}
}
