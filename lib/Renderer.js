'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _syntheticDom = require('synthetic-dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(options) {
    _classCallCheck(this, Renderer);

    console.log('RENDERER');
    this.options = options || {};
  }

  _createClass(Renderer, [{
    key: 'code',
    value: function code(childNode, lang) {
      var attributes = [];
      if (lang) {
        attributes.push(['class', this.options.langPrefix + lang]);
      }
      var codeNode = new _syntheticDom.ElementNode('code', attributes, [childNode]);
      return new _syntheticDom.ElementNode('pre', [], [codeNode]);
    }
  }, {
    key: 'blockquote',
    value: function blockquote(childNode) {
      return new _syntheticDom.ElementNode('blockquote', [], [childNode]);
    }
  }, {
    key: 'heading',
    value: function heading(childNode, level) {
      return new _syntheticDom.ElementNode('h' + level, [], [childNode]);
    }
  }, {
    key: 'hr',
    value: function hr() {
      return new _syntheticDom.ElementNode('hr', [], _syntheticDom.SELF_CLOSING);
    }
  }, {
    key: 'list',
    value: function list(childNode, isOrdered) {
      return new _syntheticDom.ElementNode(isOrdered ? 'ol' : 'ul', [], [childNode]);
    }
  }, {
    key: 'listitem',
    value: function listitem(childNode) {
      return new _syntheticDom.ElementNode('li', [], [childNode]);
    }
  }, {
    key: 'paragraph',
    value: function paragraph(childNode) {
      return new _syntheticDom.ElementNode('p', [], [childNode]);
    }

    // span level renderer

  }, {
    key: 'strong',
    value: function strong(childNode) {
      return new _syntheticDom.ElementNode('strong', [], [childNode]);
    }
  }, {
    key: 'em',
    value: function em(childNode) {
      return new _syntheticDom.ElementNode('em', [], [childNode]);
    }
  }, {
    key: 'codespan',
    value: function codespan(text) {
      return new _syntheticDom.ElementNode('code', [], [new _syntheticDom.TextNode(text)]);
    }
  }, {
    key: 'br',
    value: function br() {
      return new _syntheticDom.ElementNode('br', [], _syntheticDom.SELF_CLOSING);
    }
  }, {
    key: 'del',
    value: function del(childNode) {
      return new _syntheticDom.ElementNode('del', [], [childNode]);
    }
  }, {
    key: 'ins',
    value: function ins(childNode) {
      return new _syntheticDom.ElementNode('ins', [], [childNode]);
    }
  }, {
    key: 'link',
    value: function link(href, title, childNode) {
      var attributes = [['href', href]];
      if (title) {
        attributes.push(['title', title]);
      }
      return new _syntheticDom.ElementNode('a', attributes, [childNode]);
    }
  }, {
    key: 'image',
    value: function image(href, title, alt) {
      var attributes = [['src', href]];
      if (title) {
        attributes.push(['title', title]);
      }
      if (alt) {
        attributes.push(['alt', alt]);
      }
      return new _syntheticDom.ElementNode('img', attributes, _syntheticDom.SELF_CLOSING);
    }
  }, {
    key: 'text',
    value: function text(childNode) {
      return childNode;
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;