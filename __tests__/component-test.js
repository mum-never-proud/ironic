import Component from '../src/Component';

describe('component', () => {
  let component;
  let updateComponentSpy;

  beforeEach(() => {
    const ele = document.createElement('div');

    component = new Component();
    updateComponentSpy = jest.spyOn(component, 'updateComponent');
    component._parentElement = ele;
    component._currentElement = ele;
  });

  afterEach(() => {
    component = null;
    updateComponentSpy.mockRestore();
  });

  it('should call update component on setting state', () => {
    component.setState({});

    expect(updateComponentSpy).toHaveBeenCalled();
  });

  it('should not update component when shouldUpdate() returns false', () => {
    component.shouldUpdate = () => false;

    component.setState({});

    expect(updateComponentSpy).not.toHaveBeenCalled();
  });
});
