import {
  toHaveStyle,
  toHaveAttribute,
} from '@testing-library/jest-dom/matchers'
import createElement from 'create/element';
import v from '../src/v';

expect.extend({ toHaveStyle, toHaveAttribute });

describe('create element', function() {
  it('should create a text node when string is passed', function() {
    expect(createElement('text')).toBeInstanceOf(Text);
  });

  it('should create element with the give tag', function() {
    expect(createElement(v('p'))).toBeInstanceOf(HTMLParagraphElement);
  });

  it('should create element with props', function() {
    const vNode = v('p', {
      props: { style: 'color: red', id:"para" }
    }),
      paraEle = createElement(vNode);

    expect(paraEle).toBeInstanceOf(HTMLParagraphElement);
    expect(paraEle).toHaveStyle('color: red');
    expect(paraEle).toHaveAttribute('id');
  });

  it('should create element with children', function() {
    const vNode = v('div', {
      children: ['Hello', v('p')]
    }),
      div = createElement(vNode),
      childNodes = div.childNodes;

    expect(div).toBeInstanceOf(HTMLDivElement);
    expect(childNodes.length).toEqual(2);
    expect(childNodes[0]).toBeInstanceOf(Text);
    expect(childNodes[1]).toBeInstanceOf(HTMLParagraphElement);
  });
});