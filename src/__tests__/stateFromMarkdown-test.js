/* @flow */
const {describe, it} = global;
import expect from 'expect';
import stateFromMarkdown from '../stateFromMarkdown';
import {convertToRaw} from 'draft-js';

describe('stateFromMarkdown', () => {
  it('should sanitize links ', () => {
    let markdown = '[Clickme i am XSS 2](javascript:alert`XSS Alerted`)';
    let contentState = stateFromMarkdown(markdown);
    let rawContentState = convertToRaw(contentState);
    let url = rawContentState.entityMap[0].data.url;
    expect(url).toEqual('');
  });

  it('should create content state', () => {
    let markdown = 'Hello World';
    let contentState = stateFromMarkdown(markdown);
    let rawContentState = convertToRaw(contentState);
    let blocks = removeKeys(rawContentState.blocks);
    expect(blocks).toEqual(
      [{text: 'Hello World', type: 'unstyled', data: {}, depth: 0, inlineStyleRanges: [], entityRanges: []}]
    );
  });
});

function removeKeys(blocks) {
  return blocks.map((block) => {
    let {key, ...other} = block; // eslint-disable-line no-unused-vars
    return other;
  });
}
