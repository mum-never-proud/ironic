import Component from '../src/Component';

describe('component', function() {
  let component, updateComponentSpy;

  beforeEach(function() {
    const ele = document.createElement('div');

    component = new Component();
    updateComponentSpy = jest.spyOn(component, 'updateComponent');
    component._parentElement = ele;
    component._currentElement =  ele;
  });

  afterEach(function() {
    component = null;
    updateComponentSpy.mockRestore();
  });

  it('should call update component on setting state', function() {
    component.setState({});

    expect(updateComponentSpy).toHaveBeenCalled();
  });

  it('should not update component when shouldUpdate() returns false', function() {
    component.shouldUpdate = function() { return false; }

    component.setState({});

    expect(updateComponentSpy).not.toHaveBeenCalled();
  });
});
