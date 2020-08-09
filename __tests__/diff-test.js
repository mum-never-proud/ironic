import { toHaveTextContent } from '@testing-library/jest-dom/matchers';
import diff from '../src/diff';
import mount from '../src/mount';
import v from '../src/v';

expect.extend({ toHaveTextContent });

describe('diff', () => {
  let rootElement;

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    rootElement = document.getElementById('root');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should remove old node when there is no new node', () => {
    const vNode = v('p');
    const p = mount(vNode, rootElement);

    expect(rootElement.childNodes.length).toEqual(1);

    const patch = diff(vNode, null);

    patch(p);

    expect(rootElement.childNodes.length).toEqual(0);
  });

  it('should append new node if not already present', () => {
    const vNode = v('p');

    expect(rootElement.childNodes.length).toEqual(0);

    const patch = diff(null, vNode);

    patch(rootElement);

    expect(rootElement.childNodes.length).toEqual(1);
  });

  it('should replace the text', () => {
    const textNode = mount('hello', rootElement);

    expect(rootElement).toHaveTextContent('hello');

    const patch = diff(textNode, 'hello 1');

    patch(textNode);

    expect(rootElement).toHaveTextContent('hello 1');
  });

  it('should replace the tag', () => {
    const p = v('p');
    const ele = mount(p, rootElement); // to be replaced with div

    expect(rootElement.childNodes[0]).toBeInstanceOf(HTMLParagraphElement);

    const patch = diff(v('p'), v('div'));

    patch(ele);

    expect(rootElement.childNodes[0]).toBeInstanceOf(HTMLDivElement);
  });
});
