import {
  toHaveStyle,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers';
import createElement from 'create/element';
import v from '../src/v';

expect.extend({ toHaveStyle, toHaveAttribute });

describe('create element', () => {
  it('should create a text node when string is passed', () => {
    expect(createElement('text')).toBeInstanceOf(Text);
  });

  it('should create element with the give tag', () => {
    expect(createElement(v('p'))).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should create element with props', () => {
    const vNode = v('p', { style: 'color: red', id: 'para' });
    const paraEle = createElement(vNode);

    expect(paraEle).toBeInstanceOf(HTMLParagraphElement);
    expect(paraEle).toHaveStyle('color: red');
    expect(paraEle).toHaveAttribute('id');
  });

  it('should create element with children', () => {
    const vNode = v('div', null, 'Hello', v('p'));
    const div = createElement(vNode);
    // eslint-disable-next-line prefer-destructuring
    const childNodes = div.childNodes;

    expect(div).toBeInstanceOf(HTMLDivElement);
    expect(childNodes.length).toEqual(2);
    expect(childNodes[0]).toBeInstanceOf(Text);
    expect(childNodes[1]).toBeInstanceOf(HTMLParagraphElement);
  });
});
