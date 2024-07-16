define([], function () {
  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  'use strict';

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
  function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
  function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function createCommand(type) {
    return {
      type: type
    };
  }
  var SELECTION_CHANGE_COMMAND = createCommand('SELECTION_CHANGE_COMMAND');
  var SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = createCommand('SELECTION_INSERT_CLIPBOARD_NODES_COMMAND');
  var CLICK_COMMAND = createCommand('CLICK_COMMAND');
  var DELETE_CHARACTER_COMMAND = createCommand('DELETE_CHARACTER_COMMAND');
  var INSERT_LINE_BREAK_COMMAND = createCommand('INSERT_LINE_BREAK_COMMAND');
  var INSERT_PARAGRAPH_COMMAND = createCommand('INSERT_PARAGRAPH_COMMAND');
  var CONTROLLED_TEXT_INSERTION_COMMAND = createCommand('CONTROLLED_TEXT_INSERTION_COMMAND');
  var PASTE_COMMAND = createCommand('PASTE_COMMAND');
  var REMOVE_TEXT_COMMAND = createCommand('REMOVE_TEXT_COMMAND');
  var DELETE_WORD_COMMAND = createCommand('DELETE_WORD_COMMAND');
  var DELETE_LINE_COMMAND = createCommand('DELETE_LINE_COMMAND');
  var FORMAT_TEXT_COMMAND = createCommand('FORMAT_TEXT_COMMAND');
  var UNDO_COMMAND = createCommand('UNDO_COMMAND');
  var REDO_COMMAND = createCommand('REDO_COMMAND');
  var KEY_DOWN_COMMAND = createCommand('KEYDOWN_COMMAND');
  var KEY_ARROW_RIGHT_COMMAND = createCommand('KEY_ARROW_RIGHT_COMMAND');
  var MOVE_TO_END = createCommand('MOVE_TO_END');
  var KEY_ARROW_LEFT_COMMAND = createCommand('KEY_ARROW_LEFT_COMMAND');
  var MOVE_TO_START = createCommand('MOVE_TO_START');
  var KEY_ARROW_UP_COMMAND = createCommand('KEY_ARROW_UP_COMMAND');
  var KEY_ARROW_DOWN_COMMAND = createCommand('KEY_ARROW_DOWN_COMMAND');
  var KEY_ENTER_COMMAND = createCommand('KEY_ENTER_COMMAND');
  var KEY_SPACE_COMMAND = createCommand('KEY_SPACE_COMMAND');
  var KEY_BACKSPACE_COMMAND = createCommand('KEY_BACKSPACE_COMMAND');
  var KEY_ESCAPE_COMMAND = createCommand('KEY_ESCAPE_COMMAND');
  var KEY_DELETE_COMMAND = createCommand('KEY_DELETE_COMMAND');
  var KEY_TAB_COMMAND = createCommand('KEY_TAB_COMMAND');
  var INSERT_TAB_COMMAND = createCommand('INSERT_TAB_COMMAND');
  var INDENT_CONTENT_COMMAND = createCommand('INDENT_CONTENT_COMMAND');
  var OUTDENT_CONTENT_COMMAND = createCommand('OUTDENT_CONTENT_COMMAND');
  var DROP_COMMAND = createCommand('DROP_COMMAND');
  var FORMAT_ELEMENT_COMMAND = createCommand('FORMAT_ELEMENT_COMMAND');
  var DRAGSTART_COMMAND = createCommand('DRAGSTART_COMMAND');
  var DRAGOVER_COMMAND = createCommand('DRAGOVER_COMMAND');
  var DRAGEND_COMMAND = createCommand('DRAGEND_COMMAND');
  var COPY_COMMAND = createCommand('COPY_COMMAND');
  var CUT_COMMAND = createCommand('CUT_COMMAND');
  var SELECT_ALL_COMMAND = createCommand('SELECT_ALL_COMMAND');
  var CLEAR_EDITOR_COMMAND = createCommand('CLEAR_EDITOR_COMMAND');
  var CLEAR_HISTORY_COMMAND = createCommand('CLEAR_HISTORY_COMMAND');
  var CAN_REDO_COMMAND = createCommand('CAN_REDO_COMMAND');
  var CAN_UNDO_COMMAND = createCommand('CAN_UNDO_COMMAND');
  var FOCUS_COMMAND = createCommand('FOCUS_COMMAND');
  var BLUR_COMMAND = createCommand('BLUR_COMMAND');
  var KEY_MODIFIER_COMMAND = createCommand('KEY_MODIFIER_COMMAND');

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var CAN_USE_DOM = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var documentMode = CAN_USE_DOM && 'documentMode' in document ? document.documentMode : null;
  var IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
  var IS_FIREFOX = CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
  var CAN_USE_BEFORE_INPUT = CAN_USE_DOM && 'InputEvent' in window && !documentMode ? 'getTargetRanges' in new window.InputEvent('input') : false;
  var IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
  var IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var IS_ANDROID = CAN_USE_DOM && /Android/.test(navigator.userAgent);

  // Keep these in case we need to use them in the future.
  // export const IS_WINDOWS: boolean = CAN_USE_DOM && /Win/.test(navigator.platform);
  var IS_CHROME = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
  // export const canUseTextInputEvent: boolean = CAN_USE_DOM && 'TextEvent' in window && !documentMode;

  var IS_ANDROID_CHROME = CAN_USE_DOM && IS_ANDROID && IS_CHROME;
  var IS_APPLE_WEBKIT = CAN_USE_DOM && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !IS_CHROME;

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  // DOM
  var DOM_ELEMENT_TYPE = 1;
  var DOM_TEXT_TYPE = 3;

  // Reconciling
  var NO_DIRTY_NODES = 0;
  var HAS_DIRTY_NODES = 1;
  var FULL_RECONCILE = 2;

  // Text node modes
  var IS_NORMAL = 0;
  var IS_TOKEN = 1;
  var IS_SEGMENTED = 2;
  // IS_INERT = 3

  // Text node formatting
  var IS_BOLD = 1;
  var IS_ITALIC = 1 << 1;
  var IS_STRIKETHROUGH = 1 << 2;
  var IS_UNDERLINE = 1 << 3;
  var IS_CODE = 1 << 4;
  var IS_SUBSCRIPT = 1 << 5;
  var IS_SUPERSCRIPT = 1 << 6;
  var IS_HIGHLIGHT = 1 << 7;
  var IS_ALL_FORMATTING = IS_BOLD | IS_ITALIC | IS_STRIKETHROUGH | IS_UNDERLINE | IS_CODE | IS_SUBSCRIPT | IS_SUPERSCRIPT | IS_HIGHLIGHT;

  // Text node details
  var IS_DIRECTIONLESS = 1;
  var IS_UNMERGEABLE = 1 << 1;

  // Element node formatting
  var IS_ALIGN_LEFT = 1;
  var IS_ALIGN_CENTER = 2;
  var IS_ALIGN_RIGHT = 3;
  var IS_ALIGN_JUSTIFY = 4;
  var IS_ALIGN_START = 5;
  var IS_ALIGN_END = 6;

  // Reconciliation
  var NON_BREAKING_SPACE = "\xA0";
  var ZERO_WIDTH_SPACE = "\u200B";

  // For iOS/Safari we use a non breaking space, otherwise the cursor appears
  // overlapping the composed text.
  var COMPOSITION_SUFFIX = IS_SAFARI || IS_IOS || IS_APPLE_WEBKIT ? NON_BREAKING_SPACE : ZERO_WIDTH_SPACE;
  var DOUBLE_LINE_BREAK = '\n\n';

  // For FF, we need to use a non-breaking space, or it gets composition
  // in a stuck state.
  var COMPOSITION_START_CHAR = IS_FIREFOX ? NON_BREAKING_SPACE : COMPOSITION_SUFFIX;
  var RTL = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
  var LTR = "A-Za-z\xC0-\xD6\xD8-\xF6" + "\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C" + "\uFE00-\uFE6F\uFEFD-\uFFFF";

  // eslint-disable-next-line no-misleading-character-class
  var RTL_REGEX = new RegExp('^[^' + LTR + ']*[' + RTL + ']');
  // eslint-disable-next-line no-misleading-character-class
  var LTR_REGEX = new RegExp('^[^' + RTL + ']*[' + LTR + ']');
  var TEXT_TYPE_TO_FORMAT = {
    bold: IS_BOLD,
    code: IS_CODE,
    highlight: IS_HIGHLIGHT,
    italic: IS_ITALIC,
    strikethrough: IS_STRIKETHROUGH,
    subscript: IS_SUBSCRIPT,
    superscript: IS_SUPERSCRIPT,
    underline: IS_UNDERLINE
  };
  var DETAIL_TYPE_TO_DETAIL = {
    directionless: IS_DIRECTIONLESS,
    unmergeable: IS_UNMERGEABLE
  };
  var ELEMENT_TYPE_TO_FORMAT = {
    center: IS_ALIGN_CENTER,
    end: IS_ALIGN_END,
    justify: IS_ALIGN_JUSTIFY,
    left: IS_ALIGN_LEFT,
    right: IS_ALIGN_RIGHT,
    start: IS_ALIGN_START
  };
  var ELEMENT_FORMAT_TO_TYPE = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, IS_ALIGN_CENTER, 'center'), IS_ALIGN_END, 'end'), IS_ALIGN_JUSTIFY, 'justify'), IS_ALIGN_LEFT, 'left'), IS_ALIGN_RIGHT, 'right'), IS_ALIGN_START, 'start');
  var TEXT_MODE_TO_TYPE = {
    normal: IS_NORMAL,
    segmented: IS_SEGMENTED,
    token: IS_TOKEN
  };
  var TEXT_TYPE_TO_MODE = _defineProperty(_defineProperty(_defineProperty({}, IS_NORMAL, 'normal'), IS_SEGMENTED, 'segmented'), IS_TOKEN, 'token');

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  function normalizeClassNames() {
    var rval = [];
    for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }
    for (var _i = 0, _classNames = classNames; _i < _classNames.length; _i++) {
      var className = _classNames[_i];
      if (className && typeof className === 'string') {
        var _iterator = _createForOfIteratorHelper(className.matchAll(/\S+/g)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 1),
              s = _step$value[0];
            rval.push(s);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    return rval;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  // The time between a text entry event and the mutation observer firing.
  var TEXT_MUTATION_VARIANCE = 100;
  var isProcessingMutations = false;
  var lastTextEntryTimeStamp = 0;
  function getIsProcessingMutations() {
    return isProcessingMutations;
  }
  function updateTimeStamp(event) {
    lastTextEntryTimeStamp = event.timeStamp;
  }
  function initTextEntryListener(editor) {
    if (lastTextEntryTimeStamp === 0) {
      getWindow(editor).addEventListener('textInput', updateTimeStamp, true);
    }
  }
  function isManagedLineBreak(dom, target, editor) {
    return (
      // @ts-expect-error: internal field
      target.__lexicalLineBreak === dom ||
      // @ts-ignore We intentionally add this to the Node.
      dom["__lexicalKey_".concat(editor._key)] !== undefined
    );
  }
  function getLastSelection(editor) {
    return editor.getEditorState().read(function () {
      var selection = $getSelection();
      return selection !== null ? selection.clone() : null;
    });
  }
  function $handleTextMutation(target, node, editor) {
    var domSelection = getDOMSelection(editor._window);
    var anchorOffset = null;
    var focusOffset = null;
    if (domSelection !== null && domSelection.anchorNode === target) {
      anchorOffset = domSelection.anchorOffset;
      focusOffset = domSelection.focusOffset;
    }
    var text = target.nodeValue;
    if (text !== null) {
      $updateTextNodeFromDOMContent(node, text, anchorOffset, focusOffset, false);
    }
  }
  function shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode) {
    if ($isRangeSelection(selection)) {
      var anchorNode = selection.anchor.getNode();
      if (anchorNode.is(targetNode) && selection.format !== anchorNode.getFormat()) {
        return false;
      }
    }
    return targetDOM.nodeType === DOM_TEXT_TYPE && targetNode.isAttached();
  }
  function $flushMutations$1(editor, mutations, observer) {
    isProcessingMutations = true;
    var shouldFlushTextMutations = performance.now() - lastTextEntryTimeStamp > TEXT_MUTATION_VARIANCE;
    try {
      updateEditor(editor, function () {
        var selection = $getSelection() || getLastSelection(editor);
        var badDOMTargets = new Map();
        var rootElement = editor.getRootElement();
        // We use the current editor state, as that reflects what is
        // actually "on screen".
        var currentEditorState = editor._editorState;
        var blockCursorElement = editor._blockCursorElement;
        var shouldRevertSelection = false;
        var possibleTextForFirefoxPaste = '';
        for (var i = 0; i < mutations.length; i++) {
          var mutation = mutations[i];
          var type = mutation.type;
          var targetDOM = mutation.target;
          var targetNode = $getNearestNodeFromDOMNode(targetDOM, currentEditorState);
          if (targetNode === null && targetDOM !== rootElement || $isDecoratorNode(targetNode)) {
            continue;
          }
          if (type === 'characterData') {
            // Text mutations are deferred and passed to mutation listeners to be
            // processed outside of the Lexical engine.
            if (shouldFlushTextMutations && $isTextNode(targetNode) && shouldUpdateTextNodeFromMutation(selection, targetDOM, targetNode)) {
              $handleTextMutation(
              // nodeType === DOM_TEXT_TYPE is a Text DOM node
              targetDOM, targetNode, editor);
            }
          } else if (type === 'childList') {
            shouldRevertSelection = true;
            // We attempt to "undo" any changes that have occurred outside
            // of Lexical. We want Lexical's editor state to be source of truth.
            // To the user, these will look like no-ops.
            var addedDOMs = mutation.addedNodes;
            for (var s = 0; s < addedDOMs.length; s++) {
              var addedDOM = addedDOMs[s];
              var node = $getNodeFromDOMNode(addedDOM);
              var parentDOM = addedDOM.parentNode;
              if (parentDOM != null && addedDOM !== blockCursorElement && node === null && (addedDOM.nodeName !== 'BR' || !isManagedLineBreak(addedDOM, parentDOM, editor))) {
                if (IS_FIREFOX) {
                  var possibleText = addedDOM.innerText || addedDOM.nodeValue;
                  if (possibleText) {
                    possibleTextForFirefoxPaste += possibleText;
                  }
                }
                parentDOM.removeChild(addedDOM);
              }
            }
            var removedDOMs = mutation.removedNodes;
            var removedDOMsLength = removedDOMs.length;
            if (removedDOMsLength > 0) {
              var unremovedBRs = 0;
              for (var _s = 0; _s < removedDOMsLength; _s++) {
                var removedDOM = removedDOMs[_s];
                if (removedDOM.nodeName === 'BR' && isManagedLineBreak(removedDOM, targetDOM, editor) || blockCursorElement === removedDOM) {
                  targetDOM.appendChild(removedDOM);
                  unremovedBRs++;
                }
              }
              if (removedDOMsLength !== unremovedBRs) {
                if (targetDOM === rootElement) {
                  targetNode = internalGetRoot(currentEditorState);
                }
                badDOMTargets.set(targetDOM, targetNode);
              }
            }
          }
        }

        // Now we process each of the unique target nodes, attempting
        // to restore their contents back to the source of truth, which
        // is Lexical's "current" editor state. This is basically like
        // an internal revert on the DOM.
        if (badDOMTargets.size > 0) {
          var _iterator2 = _createForOfIteratorHelper(badDOMTargets),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                _targetDOM = _step2$value[0],
                _targetNode = _step2$value[1];
              if ($isElementNode(_targetNode)) {
                var childKeys = _targetNode.getChildrenKeys();
                var currentDOM = _targetDOM.firstChild;
                for (var _s2 = 0; _s2 < childKeys.length; _s2++) {
                  var key = childKeys[_s2];
                  var correctDOM = editor.getElementByKey(key);
                  if (correctDOM === null) {
                    continue;
                  }
                  if (currentDOM == null) {
                    _targetDOM.appendChild(correctDOM);
                    currentDOM = correctDOM;
                  } else if (currentDOM !== correctDOM) {
                    _targetDOM.replaceChild(correctDOM, currentDOM);
                  }
                  currentDOM = currentDOM.nextSibling;
                }
              } else if ($isTextNode(_targetNode)) {
                _targetNode.markDirty();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        // Capture all the mutations made during this function. This
        // also prevents us having to process them on the next cycle
        // of onMutation, as these mutations were made by us.
        var records = observer.takeRecords();

        // Check for any random auto-added <br> elements, and remove them.
        // These get added by the browser when we undo the above mutations
        // and this can lead to a broken UI.
        if (records.length > 0) {
          for (var _i2 = 0; _i2 < records.length; _i2++) {
            var record = records[_i2];
            var addedNodes = record.addedNodes;
            var target = record.target;
            for (var _s3 = 0; _s3 < addedNodes.length; _s3++) {
              var _addedDOM = addedNodes[_s3];
              var _parentDOM = _addedDOM.parentNode;
              if (_parentDOM != null && _addedDOM.nodeName === 'BR' && !isManagedLineBreak(_addedDOM, target, editor)) {
                _parentDOM.removeChild(_addedDOM);
              }
            }
          }

          // Clear any of those removal mutations
          observer.takeRecords();
        }
        if (selection !== null) {
          if (shouldRevertSelection) {
            selection.dirty = true;
            $setSelection(selection);
          }
          if (IS_FIREFOX && isFirefoxClipboardEvents(editor)) {
            selection.insertRawText(possibleTextForFirefoxPaste);
          }
        }
      });
    } finally {
      isProcessingMutations = false;
    }
  }
  function $flushRootMutations(editor) {
    var observer = editor._observer;
    if (observer !== null) {
      var mutations = observer.takeRecords();
      $flushMutations$1(editor, mutations, observer);
    }
  }
  function initMutationObserver(editor) {
    initTextEntryListener(editor);
    editor._observer = new MutationObserver(function (mutations, observer) {
      $flushMutations$1(editor, mutations, observer);
    });
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  function $canSimpleTextNodesBeMerged(node1, node2) {
    var node1Mode = node1.__mode;
    var node1Format = node1.__format;
    var node1Style = node1.__style;
    var node2Mode = node2.__mode;
    var node2Format = node2.__format;
    var node2Style = node2.__style;
    return (node1Mode === null || node1Mode === node2Mode) && (node1Format === null || node1Format === node2Format) && (node1Style === null || node1Style === node2Style);
  }
  function $mergeTextNodes(node1, node2) {
    var writableNode1 = node1.mergeWithSibling(node2);
    var normalizedNodes = getActiveEditor()._normalizedNodes;
    normalizedNodes.add(node1.__key);
    normalizedNodes.add(node2.__key);
    return writableNode1;
  }
  function $normalizeTextNode(textNode) {
    var node = textNode;
    if (node.__text === '' && node.isSimpleText() && !node.isUnmergeable()) {
      node.remove();
      return;
    }

    // Backward
    var previousNode;
    while ((previousNode = node.getPreviousSibling()) !== null && $isTextNode(previousNode) && previousNode.isSimpleText() && !previousNode.isUnmergeable()) {
      if (previousNode.__text === '') {
        previousNode.remove();
      } else if ($canSimpleTextNodesBeMerged(previousNode, node)) {
        node = $mergeTextNodes(previousNode, node);
        break;
      } else {
        break;
      }
    }

    // Forward
    var nextNode;
    while ((nextNode = node.getNextSibling()) !== null && $isTextNode(nextNode) && nextNode.isSimpleText() && !nextNode.isUnmergeable()) {
      if (nextNode.__text === '') {
        nextNode.remove();
      } else if ($canSimpleTextNodesBeMerged(node, nextNode)) {
        node = $mergeTextNodes(node, nextNode);
        break;
      } else {
        break;
      }
    }
  }
  function $normalizeSelection(selection) {
    $normalizePoint(selection.anchor);
    $normalizePoint(selection.focus);
    return selection;
  }
  function $normalizePoint(point) {
    while (point.type === 'element') {
      var node = point.getNode();
      var offset = point.offset;
      var nextNode = void 0;
      var nextOffsetAtEnd = void 0;
      if (offset === node.getChildrenSize()) {
        nextNode = node.getChildAtIndex(offset - 1);
        nextOffsetAtEnd = true;
      } else {
        nextNode = node.getChildAtIndex(offset);
        nextOffsetAtEnd = false;
      }
      if ($isTextNode(nextNode)) {
        point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getTextContentSize() : 0, 'text');
        break;
      } else if (!$isElementNode(nextNode)) {
        break;
      }
      point.set(nextNode.__key, nextOffsetAtEnd ? nextNode.getChildrenSize() : 0, 'element');
    }
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var keyCounter = 1;
  function resetRandomKey() {
    keyCounter = 1;
  }
  function generateRandomKey() {
    return '' + keyCounter++;
  }
  function getRegisteredNodeOrThrow(editor, nodeType) {
    var registeredNode = editor._nodes.get(nodeType);
    if (registeredNode === undefined) {
      {
        throw Error("registeredNode: Type ".concat(nodeType, " not found"));
      }
    }
    return registeredNode;
  }
  var scheduleMicroTask = typeof queueMicrotask === 'function' ? queueMicrotask : function (fn) {
    // No window prefix intended (#1400)
    Promise.resolve().then(fn);
  };
  function $isSelectionCapturedInDecorator(node) {
    return $isDecoratorNode($getNearestNodeFromDOMNode(node));
  }
  function isSelectionCapturedInDecoratorInput(anchorDOM) {
    var activeElement = document.activeElement;
    if (activeElement === null) {
      return false;
    }
    var nodeName = activeElement.nodeName;
    return $isDecoratorNode($getNearestNodeFromDOMNode(anchorDOM)) && (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || activeElement.contentEditable === 'true' &&
    // @ts-ignore internal field
    activeElement.__lexicalEditor == null);
  }
  function isSelectionWithinEditor(editor, anchorDOM, focusDOM) {
    var rootElement = editor.getRootElement();
    try {
      return rootElement !== null && rootElement.contains(anchorDOM) && rootElement.contains(focusDOM) &&
      // Ignore if selection is within nested editor
      anchorDOM !== null && !isSelectionCapturedInDecoratorInput(anchorDOM) && getNearestEditorFromDOMNode(anchorDOM) === editor;
    } catch (error) {
      return false;
    }
  }
  function getNearestEditorFromDOMNode(node) {
    var currentNode = node;
    while (currentNode != null) {
      // @ts-expect-error: internal field
      var editor = currentNode.__lexicalEditor;
      if (editor != null) {
        return editor;
      }
      currentNode = getParentElement(currentNode);
    }
    return null;
  }
  function getTextDirection(text) {
    if (RTL_REGEX.test(text)) {
      return 'rtl';
    }
    if (LTR_REGEX.test(text)) {
      return 'ltr';
    }
    return null;
  }
  function $isTokenOrSegmented(node) {
    return node.isToken() || node.isSegmented();
  }
  function isDOMNodeLexicalTextNode(node) {
    return node.nodeType === DOM_TEXT_TYPE;
  }
  function getDOMTextNode(element) {
    var node = element;
    while (node != null) {
      if (isDOMNodeLexicalTextNode(node)) {
        return node;
      }
      node = node.firstChild;
    }
    return null;
  }
  function toggleTextFormatType(format, type, alignWithFormat) {
    var activeFormat = TEXT_TYPE_TO_FORMAT[type];
    if (alignWithFormat !== null && (format & activeFormat) === (alignWithFormat & activeFormat)) {
      return format;
    }
    var newFormat = format ^ activeFormat;
    if (type === 'subscript') {
      newFormat &= ~TEXT_TYPE_TO_FORMAT.superscript;
    } else if (type === 'superscript') {
      newFormat &= ~TEXT_TYPE_TO_FORMAT.subscript;
    }
    return newFormat;
  }
  function $isLeafNode(node) {
    return $isTextNode(node) || $isLineBreakNode(node) || $isDecoratorNode(node);
  }
  function $setNodeKey(node, existingKey) {
    if (existingKey != null) {
      {
        errorOnNodeKeyConstructorMismatch(node, existingKey);
      }
      node.__key = existingKey;
      return;
    }
    errorOnReadOnly();
    errorOnInfiniteTransforms();
    var editor = getActiveEditor();
    var editorState = getActiveEditorState();
    var key = generateRandomKey();
    editorState._nodeMap.set(key, node);
    // TODO Split this function into leaf/element
    if ($isElementNode(node)) {
      editor._dirtyElements.set(key, true);
    } else {
      editor._dirtyLeaves.add(key);
    }
    editor._cloneNotNeeded.add(key);
    editor._dirtyType = HAS_DIRTY_NODES;
    node.__key = key;
  }
  function errorOnNodeKeyConstructorMismatch(node, existingKey) {
    var editorState = internalGetActiveEditorState();
    if (!editorState) {
      // tests expect to be able to do this kind of clone without an active editor state
      return;
    }
    var existingNode = editorState._nodeMap.get(existingKey);
    if (existingNode && existingNode.constructor !== node.constructor) {
      // Lifted condition to if statement because the inverted logic is a bit confusing
      if (node.constructor.name !== existingNode.constructor.name) {
        {
          throw Error("Lexical node with constructor ".concat(node.constructor.name, " attempted to re-use key from node in active editor state with constructor ").concat(existingNode.constructor.name, ". Keys must not be re-used when the type is changed."));
        }
      } else {
        {
          throw Error("Lexical node with constructor ".concat(node.constructor.name, " attempted to re-use key from node in active editor state with different constructor with the same name (possibly due to invalid Hot Module Replacement). Keys must not be re-used when the type is changed."));
        }
      }
    }
  }
  function internalMarkParentElementsAsDirty(parentKey, nodeMap, dirtyElements) {
    var nextParentKey = parentKey;
    while (nextParentKey !== null) {
      if (dirtyElements.has(nextParentKey)) {
        return;
      }
      var node = nodeMap.get(nextParentKey);
      if (node === undefined) {
        break;
      }
      dirtyElements.set(nextParentKey, false);
      nextParentKey = node.__parent;
    }
  }

  // TODO #6031 this function or their callers have to adjust selection (i.e. insertBefore)
  function removeFromParent(node) {
    var oldParent = node.getParent();
    if (oldParent !== null) {
      var writableNode = node.getWritable();
      var writableParent = oldParent.getWritable();
      var prevSibling = node.getPreviousSibling();
      var nextSibling = node.getNextSibling();
      // TODO: this function duplicates a bunch of operations, can be simplified.
      if (prevSibling === null) {
        if (nextSibling !== null) {
          var writableNextSibling = nextSibling.getWritable();
          writableParent.__first = nextSibling.__key;
          writableNextSibling.__prev = null;
        } else {
          writableParent.__first = null;
        }
      } else {
        var writablePrevSibling = prevSibling.getWritable();
        if (nextSibling !== null) {
          var _writableNextSibling = nextSibling.getWritable();
          _writableNextSibling.__prev = writablePrevSibling.__key;
          writablePrevSibling.__next = _writableNextSibling.__key;
        } else {
          writablePrevSibling.__next = null;
        }
        writableNode.__prev = null;
      }
      if (nextSibling === null) {
        if (prevSibling !== null) {
          var _writablePrevSibling = prevSibling.getWritable();
          writableParent.__last = prevSibling.__key;
          _writablePrevSibling.__next = null;
        } else {
          writableParent.__last = null;
        }
      } else {
        var _writableNextSibling2 = nextSibling.getWritable();
        if (prevSibling !== null) {
          var _writablePrevSibling2 = prevSibling.getWritable();
          _writablePrevSibling2.__next = _writableNextSibling2.__key;
          _writableNextSibling2.__prev = _writablePrevSibling2.__key;
        } else {
          _writableNextSibling2.__prev = null;
        }
        writableNode.__next = null;
      }
      writableParent.__size--;
      writableNode.__parent = null;
    }
  }

  // Never use this function directly! It will break
  // the cloning heuristic. Instead use node.getWritable().
  function internalMarkNodeAsDirty(node) {
    errorOnInfiniteTransforms();
    var latest = node.getLatest();
    var parent = latest.__parent;
    var editorState = getActiveEditorState();
    var editor = getActiveEditor();
    var nodeMap = editorState._nodeMap;
    var dirtyElements = editor._dirtyElements;
    if (parent !== null) {
      internalMarkParentElementsAsDirty(parent, nodeMap, dirtyElements);
    }
    var key = latest.__key;
    editor._dirtyType = HAS_DIRTY_NODES;
    if ($isElementNode(node)) {
      dirtyElements.set(key, true);
    } else {
      // TODO split internally MarkNodeAsDirty into two dedicated Element/leave functions
      editor._dirtyLeaves.add(key);
    }
  }
  function internalMarkSiblingsAsDirty(node) {
    var previousNode = node.getPreviousSibling();
    var nextNode = node.getNextSibling();
    if (previousNode !== null) {
      internalMarkNodeAsDirty(previousNode);
    }
    if (nextNode !== null) {
      internalMarkNodeAsDirty(nextNode);
    }
  }
  function $setCompositionKey(compositionKey) {
    errorOnReadOnly();
    var editor = getActiveEditor();
    var previousCompositionKey = editor._compositionKey;
    if (compositionKey !== previousCompositionKey) {
      editor._compositionKey = compositionKey;
      if (previousCompositionKey !== null) {
        var node = $getNodeByKey(previousCompositionKey);
        if (node !== null) {
          node.getWritable();
        }
      }
      if (compositionKey !== null) {
        var _node = $getNodeByKey(compositionKey);
        if (_node !== null) {
          _node.getWritable();
        }
      }
    }
  }
  function $getCompositionKey() {
    if (isCurrentlyReadOnlyMode()) {
      return null;
    }
    var editor = getActiveEditor();
    return editor._compositionKey;
  }
  function $getNodeByKey(key, _editorState) {
    var editorState = _editorState || getActiveEditorState();
    var node = editorState._nodeMap.get(key);
    if (node === undefined) {
      return null;
    }
    return node;
  }
  function $getNodeFromDOMNode(dom, editorState) {
    var editor = getActiveEditor();
    // @ts-ignore We intentionally add this to the Node.
    var key = dom["__lexicalKey_".concat(editor._key)];
    if (key !== undefined) {
      return $getNodeByKey(key, editorState);
    }
    return null;
  }
  function $getNearestNodeFromDOMNode(startingDOM, editorState) {
    var dom = startingDOM;
    while (dom != null) {
      var node = $getNodeFromDOMNode(dom, editorState);
      if (node !== null) {
        return node;
      }
      dom = getParentElement(dom);
    }
    return null;
  }
  function cloneDecorators(editor) {
    var currentDecorators = editor._decorators;
    var pendingDecorators = Object.assign({}, currentDecorators);
    editor._pendingDecorators = pendingDecorators;
    return pendingDecorators;
  }
  function getEditorStateTextContent(editorState) {
    return editorState.read(function () {
      return $getRoot().getTextContent();
    });
  }
  function markAllNodesAsDirty(editor, type) {
    // Mark all existing text nodes as dirty
    updateEditor(editor, function () {
      var editorState = getActiveEditorState();
      if (editorState.isEmpty()) {
        return;
      }
      if (type === 'root') {
        $getRoot().markDirty();
        return;
      }
      var nodeMap = editorState._nodeMap;
      var _iterator3 = _createForOfIteratorHelper(nodeMap),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _slicedToArray(_step3.value, 2),
            node = _step3$value[1];
          node.markDirty();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }, editor._pendingEditorState === null ? {
      tag: 'history-merge'
    } : undefined);
  }
  function $getRoot() {
    return internalGetRoot(getActiveEditorState());
  }
  function internalGetRoot(editorState) {
    return editorState._nodeMap.get('root');
  }
  function $setSelection(selection) {
    errorOnReadOnly();
    var editorState = getActiveEditorState();
    if (selection !== null) {
      {
        if (Object.isFrozen(selection)) {
          {
            throw Error("$setSelection called on frozen selection object. Ensure selection is cloned before passing in.");
          }
        }
      }
      selection.dirty = true;
      selection.setCachedNodes(null);
    }
    editorState._selection = selection;
  }
  function $flushMutations() {
    errorOnReadOnly();
    var editor = getActiveEditor();
    $flushRootMutations(editor);
  }
  function $getNodeFromDOM(dom) {
    var editor = getActiveEditor();
    var nodeKey = getNodeKeyFromDOM(dom, editor);
    if (nodeKey === null) {
      var rootElement = editor.getRootElement();
      if (dom === rootElement) {
        return $getNodeByKey('root');
      }
      return null;
    }
    return $getNodeByKey(nodeKey);
  }
  function getTextNodeOffset(node, moveSelectionToEnd) {
    return moveSelectionToEnd ? node.getTextContentSize() : 0;
  }
  function getNodeKeyFromDOM(
  // Note that node here refers to a DOM Node, not an Lexical Node
  dom, editor) {
    var node = dom;
    while (node != null) {
      // @ts-ignore We intentionally add this to the Node.
      var key = node["__lexicalKey_".concat(editor._key)];
      if (key !== undefined) {
        return key;
      }
      node = getParentElement(node);
    }
    return null;
  }
  function doesContainGrapheme(str) {
    return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(str);
  }
  function getEditorsToPropagate(editor) {
    var editorsToPropagate = [];
    var currentEditor = editor;
    while (currentEditor !== null) {
      editorsToPropagate.push(currentEditor);
      currentEditor = currentEditor._parentEditor;
    }
    return editorsToPropagate;
  }
  function createUID() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }
  function getAnchorTextFromDOM(anchorNode) {
    if (anchorNode.nodeType === DOM_TEXT_TYPE) {
      return anchorNode.nodeValue;
    }
    return null;
  }
  function $updateSelectedTextFromDOM(isCompositionEnd, editor, data) {
    // Update the text content with the latest composition text
    var domSelection = getDOMSelection(editor._window);
    if (domSelection === null) {
      return;
    }
    var anchorNode = domSelection.anchorNode;
    var anchorOffset = domSelection.anchorOffset,
      focusOffset = domSelection.focusOffset;
    if (anchorNode !== null) {
      var textContent = getAnchorTextFromDOM(anchorNode);
      var node = $getNearestNodeFromDOMNode(anchorNode);
      if (textContent !== null && $isTextNode(node)) {
        // Data is intentionally truthy, as we check for boolean, null and empty string.
        if (textContent === COMPOSITION_SUFFIX && data) {
          var offset = data.length;
          textContent = data;
          anchorOffset = offset;
          focusOffset = offset;
        }
        if (textContent !== null) {
          $updateTextNodeFromDOMContent(node, textContent, anchorOffset, focusOffset, isCompositionEnd);
        }
      }
    }
  }
  function $updateTextNodeFromDOMContent(textNode, textContent, anchorOffset, focusOffset, compositionEnd) {
    var node = textNode;
    if (node.isAttached() && (compositionEnd || !node.isDirty())) {
      var isComposing = node.isComposing();
      var normalizedTextContent = textContent;
      if ((isComposing || compositionEnd) && textContent[textContent.length - 1] === COMPOSITION_SUFFIX) {
        normalizedTextContent = textContent.slice(0, -1);
      }
      var prevTextContent = node.getTextContent();
      if (compositionEnd || normalizedTextContent !== prevTextContent) {
        if (normalizedTextContent === '') {
          $setCompositionKey(null);
          if (!IS_SAFARI && !IS_IOS && !IS_APPLE_WEBKIT) {
            // For composition (mainly Android), we have to remove the node on a later update
            var editor = getActiveEditor();
            setTimeout(function () {
              editor.update(function () {
                if (node.isAttached()) {
                  node.remove();
                }
              });
            }, 20);
          } else {
            node.remove();
          }
          return;
        }
        var parent = node.getParent();
        var prevSelection = $getPreviousSelection();
        var prevTextContentSize = node.getTextContentSize();
        var compositionKey = $getCompositionKey();
        var nodeKey = node.getKey();
        if (node.isToken() || compositionKey !== null && nodeKey === compositionKey && !isComposing ||
        // Check if character was added at the start or boundaries when not insertable, and we need
        // to clear this input from occurring as that action wasn't permitted.
        $isRangeSelection(prevSelection) && (parent !== null && !parent.canInsertTextBefore() && prevSelection.anchor.offset === 0 || prevSelection.anchor.key === textNode.__key && prevSelection.anchor.offset === 0 && !node.canInsertTextBefore() && !isComposing || prevSelection.focus.key === textNode.__key && prevSelection.focus.offset === prevTextContentSize && !node.canInsertTextAfter() && !isComposing)) {
          node.markDirty();
          return;
        }
        var selection = $getSelection();
        if (!$isRangeSelection(selection) || anchorOffset === null || focusOffset === null) {
          node.setTextContent(normalizedTextContent);
          return;
        }
        selection.setTextNodeRange(node, anchorOffset, node, focusOffset);
        if (node.isSegmented()) {
          var originalTextContent = node.getTextContent();
          var replacement = $createTextNode(originalTextContent);
          node.replace(replacement);
          node = replacement;
        }
        node.setTextContent(normalizedTextContent);
      }
    }
  }
  function $previousSiblingDoesNotAcceptText(node) {
    var previousSibling = node.getPreviousSibling();
    return ($isTextNode(previousSibling) || $isElementNode(previousSibling) && previousSibling.isInline()) && !previousSibling.canInsertTextAfter();
  }

  // This function is connected to $shouldPreventDefaultAndInsertText and determines whether the
  // TextNode boundaries are writable or we should use the previous/next sibling instead. For example,
  // in the case of a LinkNode, boundaries are not writable.
  function $shouldInsertTextAfterOrBeforeTextNode(selection, node) {
    if (node.isSegmented()) {
      return true;
    }
    if (!selection.isCollapsed()) {
      return false;
    }
    var offset = selection.anchor.offset;
    var parent = node.getParentOrThrow();
    var isToken = node.isToken();
    if (offset === 0) {
      return !node.canInsertTextBefore() || !parent.canInsertTextBefore() && !node.isComposing() || isToken || $previousSiblingDoesNotAcceptText(node);
    } else if (offset === node.getTextContentSize()) {
      return !node.canInsertTextAfter() || !parent.canInsertTextAfter() && !node.isComposing() || isToken;
    } else {
      return false;
    }
  }
  function isTab(key, altKey, ctrlKey, metaKey) {
    return key === 'Tab' && !altKey && !ctrlKey && !metaKey;
  }
  function isBold(key, altKey, metaKey, ctrlKey) {
    return key.toLowerCase() === 'b' && !altKey && controlOrMeta(metaKey, ctrlKey);
  }
  function isItalic(key, altKey, metaKey, ctrlKey) {
    return key.toLowerCase() === 'i' && !altKey && controlOrMeta(metaKey, ctrlKey);
  }
  function isUnderline(key, altKey, metaKey, ctrlKey) {
    return key.toLowerCase() === 'u' && !altKey && controlOrMeta(metaKey, ctrlKey);
  }
  function isParagraph(key, shiftKey) {
    return isReturn(key) && !shiftKey;
  }
  function isLineBreak(key, shiftKey) {
    return isReturn(key) && shiftKey;
  }

  // Inserts a new line after the selection

  function isOpenLineBreak(key, ctrlKey) {
    // 79 = KeyO
    return IS_APPLE && ctrlKey && key.toLowerCase() === 'o';
  }
  function isDeleteWordBackward(key, altKey, ctrlKey) {
    return isBackspace(key) && (IS_APPLE ? altKey : ctrlKey);
  }
  function isDeleteWordForward(key, altKey, ctrlKey) {
    return isDelete(key) && (IS_APPLE ? altKey : ctrlKey);
  }
  function isDeleteLineBackward(key, metaKey) {
    return IS_APPLE && metaKey && isBackspace(key);
  }
  function isDeleteLineForward(key, metaKey) {
    return IS_APPLE && metaKey && isDelete(key);
  }
  function isDeleteBackward(key, altKey, metaKey, ctrlKey) {
    if (IS_APPLE) {
      if (altKey || metaKey) {
        return false;
      }
      return isBackspace(key) || key.toLowerCase() === 'h' && ctrlKey;
    }
    if (ctrlKey || altKey || metaKey) {
      return false;
    }
    return isBackspace(key);
  }
  function isDeleteForward(key, ctrlKey, shiftKey, altKey, metaKey) {
    if (IS_APPLE) {
      if (shiftKey || altKey || metaKey) {
        return false;
      }
      return isDelete(key) || key.toLowerCase() === 'd' && ctrlKey;
    }
    if (ctrlKey || altKey || metaKey) {
      return false;
    }
    return isDelete(key);
  }
  function isUndo(key, shiftKey, metaKey, ctrlKey) {
    return key.toLowerCase() === 'z' && !shiftKey && controlOrMeta(metaKey, ctrlKey);
  }
  function isRedo(key, shiftKey, metaKey, ctrlKey) {
    if (IS_APPLE) {
      return key.toLowerCase() === 'z' && metaKey && shiftKey;
    }
    return key.toLowerCase() === 'y' && ctrlKey || key.toLowerCase() === 'z' && ctrlKey && shiftKey;
  }
  function isCopy(key, shiftKey, metaKey, ctrlKey) {
    if (shiftKey) {
      return false;
    }
    if (key.toLowerCase() === 'c') {
      return IS_APPLE ? metaKey : ctrlKey;
    }
    return false;
  }
  function isCut(key, shiftKey, metaKey, ctrlKey) {
    if (shiftKey) {
      return false;
    }
    if (key.toLowerCase() === 'x') {
      return IS_APPLE ? metaKey : ctrlKey;
    }
    return false;
  }
  function isArrowLeft(key) {
    return key === 'ArrowLeft';
  }
  function isArrowRight(key) {
    return key === 'ArrowRight';
  }
  function isArrowUp(key) {
    return key === 'ArrowUp';
  }
  function isArrowDown(key) {
    return key === 'ArrowDown';
  }
  function isMoveBackward(key, ctrlKey, altKey, metaKey) {
    return isArrowLeft(key) && !ctrlKey && !metaKey && !altKey;
  }
  function isMoveToStart(key, ctrlKey, shiftKey, altKey, metaKey) {
    return isArrowLeft(key) && !altKey && !shiftKey && (ctrlKey || metaKey);
  }
  function isMoveForward(key, ctrlKey, altKey, metaKey) {
    return isArrowRight(key) && !ctrlKey && !metaKey && !altKey;
  }
  function isMoveToEnd(key, ctrlKey, shiftKey, altKey, metaKey) {
    return isArrowRight(key) && !altKey && !shiftKey && (ctrlKey || metaKey);
  }
  function isMoveUp(key, ctrlKey, metaKey) {
    return isArrowUp(key) && !ctrlKey && !metaKey;
  }
  function isMoveDown(key, ctrlKey, metaKey) {
    return isArrowDown(key) && !ctrlKey && !metaKey;
  }
  function isModifier(ctrlKey, shiftKey, altKey, metaKey) {
    return ctrlKey || shiftKey || altKey || metaKey;
  }
  function isSpace(key) {
    return key === ' ';
  }
  function controlOrMeta(metaKey, ctrlKey) {
    if (IS_APPLE) {
      return metaKey;
    }
    return ctrlKey;
  }
  function isReturn(key) {
    return key === 'Enter';
  }
  function isBackspace(key) {
    return key === 'Backspace';
  }
  function isEscape(key) {
    return key === 'Escape';
  }
  function isDelete(key) {
    return key === 'Delete';
  }
  function isSelectAll(key, metaKey, ctrlKey) {
    return key.toLowerCase() === 'a' && controlOrMeta(metaKey, ctrlKey);
  }
  function $selectAll() {
    var root = $getRoot();
    var selection = root.select(0, root.getChildrenSize());
    $setSelection($normalizeSelection(selection));
  }
  function getCachedClassNameArray(classNamesTheme, classNameThemeType) {
    if (classNamesTheme.__lexicalClassNameCache === undefined) {
      classNamesTheme.__lexicalClassNameCache = {};
    }
    var classNamesCache = classNamesTheme.__lexicalClassNameCache;
    var cachedClassNames = classNamesCache[classNameThemeType];
    if (cachedClassNames !== undefined) {
      return cachedClassNames;
    }
    var classNames = classNamesTheme[classNameThemeType];
    // As we're using classList, we need
    // to handle className tokens that have spaces.
    // The easiest way to do this to convert the
    // className tokens to an array that can be
    // applied to classList.add()/remove().
    if (typeof classNames === 'string') {
      var classNamesArr = normalizeClassNames(classNames);
      classNamesCache[classNameThemeType] = classNamesArr;
      return classNamesArr;
    }
    return classNames;
  }
  function setMutatedNode(mutatedNodes, registeredNodes, mutationListeners, node, mutation) {
    if (mutationListeners.size === 0) {
      return;
    }
    var nodeType = node.__type;
    var nodeKey = node.__key;
    var registeredNode = registeredNodes.get(nodeType);
    if (registeredNode === undefined) {
      {
        throw Error("Type ".concat(nodeType, " not in registeredNodes"));
      }
    }
    var klass = registeredNode.klass;
    var mutatedNodesByType = mutatedNodes.get(klass);
    if (mutatedNodesByType === undefined) {
      mutatedNodesByType = new Map();
      mutatedNodes.set(klass, mutatedNodesByType);
    }
    var prevMutation = mutatedNodesByType.get(nodeKey);
    // If the node has already been "destroyed", yet we are
    // re-making it, then this means a move likely happened.
    // We should change the mutation to be that of "updated"
    // instead.
    var isMove = prevMutation === 'destroyed' && mutation === 'created';
    if (prevMutation === undefined || isMove) {
      mutatedNodesByType.set(nodeKey, isMove ? 'updated' : mutation);
    }
  }
  function $nodesOfType(klass) {
    var editorState = getActiveEditorState();
    var readOnly = editorState._readOnly;
    var klassType = klass.getType();
    var nodes = editorState._nodeMap;
    var nodesOfType = [];
    var _iterator4 = _createForOfIteratorHelper(nodes),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 2),
          node = _step4$value[1];
        if (node instanceof klass && node.__type === klassType && (readOnly || node.isAttached())) {
          nodesOfType.push(node);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return nodesOfType;
  }
  function resolveElement(element, isBackward, focusOffset) {
    var parent = element.getParent();
    var offset = focusOffset;
    var block = element;
    if (parent !== null) {
      if (isBackward && focusOffset === 0) {
        offset = block.getIndexWithinParent();
        block = parent;
      } else if (!isBackward && focusOffset === block.getChildrenSize()) {
        offset = block.getIndexWithinParent() + 1;
        block = parent;
      }
    }
    return block.getChildAtIndex(isBackward ? offset - 1 : offset);
  }
  function $getAdjacentNode(focus, isBackward) {
    var focusOffset = focus.offset;
    if (focus.type === 'element') {
      var block = focus.getNode();
      return resolveElement(block, isBackward, focusOffset);
    } else {
      var focusNode = focus.getNode();
      if (isBackward && focusOffset === 0 || !isBackward && focusOffset === focusNode.getTextContentSize()) {
        var possibleNode = isBackward ? focusNode.getPreviousSibling() : focusNode.getNextSibling();
        if (possibleNode === null) {
          return resolveElement(focusNode.getParentOrThrow(), isBackward, focusNode.getIndexWithinParent() + (isBackward ? 0 : 1));
        }
        return possibleNode;
      }
    }
    return null;
  }
  function isFirefoxClipboardEvents(editor) {
    var event = getWindow(editor).event;
    var inputType = event && event.inputType;
    return inputType === 'insertFromPaste' || inputType === 'insertFromPasteAsQuotation';
  }
  function _dispatchCommand(editor, command, payload) {
    return triggerCommandListeners(editor, command, payload);
  }
  function $textContentRequiresDoubleLinebreakAtEnd(node) {
    return !$isRootNode(node) && !node.isLastChild() && !node.isInline();
  }
  function getElementByKeyOrThrow(editor, key) {
    var element = editor._keyToDOMMap.get(key);
    if (element === undefined) {
      {
        throw Error("Reconciliation: could not find DOM element for node key ".concat(key));
      }
    }
    return element;
  }
  function getParentElement(node) {
    var parentElement = node.assignedSlot || node.parentElement;
    return parentElement !== null && parentElement.nodeType === 11 ? parentElement.host : parentElement;
  }
  function scrollIntoViewIfNeeded(editor, selectionRect, rootElement) {
    var doc = rootElement.ownerDocument;
    var defaultView = doc.defaultView;
    if (defaultView === null) {
      return;
    }
    var currentTop = selectionRect.top,
      currentBottom = selectionRect.bottom;
    var targetTop = 0;
    var targetBottom = 0;
    var element = rootElement;
    while (element !== null) {
      var isBodyElement = element === doc.body;
      if (isBodyElement) {
        targetTop = 0;
        targetBottom = getWindow(editor).innerHeight;
      } else {
        var targetRect = element.getBoundingClientRect();
        targetTop = targetRect.top;
        targetBottom = targetRect.bottom;
      }
      var diff = 0;
      if (currentTop < targetTop) {
        diff = -(targetTop - currentTop);
      } else if (currentBottom > targetBottom) {
        diff = currentBottom - targetBottom;
      }
      if (diff !== 0) {
        if (isBodyElement) {
          // Only handles scrolling of Y axis
          defaultView.scrollBy(0, diff);
        } else {
          var scrollTop = element.scrollTop;
          element.scrollTop += diff;
          var yOffset = element.scrollTop - scrollTop;
          currentTop -= yOffset;
          currentBottom -= yOffset;
        }
      }
      if (isBodyElement) {
        break;
      }
      element = getParentElement(element);
    }
  }
  function $hasUpdateTag(tag) {
    var editor = getActiveEditor();
    return editor._updateTags.has(tag);
  }
  function $addUpdateTag(tag) {
    errorOnReadOnly();
    var editor = getActiveEditor();
    editor._updateTags.add(tag);
  }
  function $maybeMoveChildrenSelectionToParent(parentNode) {
    var selection = $getSelection();
    if (!$isRangeSelection(selection) || !$isElementNode(parentNode)) {
      return selection;
    }
    var anchor = selection.anchor,
      focus = selection.focus;
    var anchorNode = anchor.getNode();
    var focusNode = focus.getNode();
    if ($hasAncestor(anchorNode, parentNode)) {
      anchor.set(parentNode.__key, 0, 'element');
    }
    if ($hasAncestor(focusNode, parentNode)) {
      focus.set(parentNode.__key, 0, 'element');
    }
    return selection;
  }
  function $hasAncestor(child, targetNode) {
    var parent = child.getParent();
    while (parent !== null) {
      if (parent.is(targetNode)) {
        return true;
      }
      parent = parent.getParent();
    }
    return false;
  }
  function getDefaultView(domElem) {
    var ownerDoc = domElem.ownerDocument;
    return ownerDoc && ownerDoc.defaultView || null;
  }
  function getWindow(editor) {
    var windowObj = editor._window;
    if (windowObj === null) {
      {
        throw Error("window object not found");
      }
    }
    return windowObj;
  }
  function $isInlineElementOrDecoratorNode(node) {
    return $isElementNode(node) && node.isInline() || $isDecoratorNode(node) && node.isInline();
  }
  function $getNearestRootOrShadowRoot(node) {
    var parent = node.getParentOrThrow();
    while (parent !== null) {
      if ($isRootOrShadowRoot(parent)) {
        return parent;
      }
      parent = parent.getParentOrThrow();
    }
    return parent;
  }
  function $isRootOrShadowRoot(node) {
    return $isRootNode(node) || $isElementNode(node) && node.isShadowRoot();
  }
  function $copyNode(node) {
    var copy = node.constructor.clone(node);
    $setNodeKey(copy, null);
    // @ts-expect-error
    return copy;
  }
  function $applyNodeReplacement(node) {
    var editor = getActiveEditor();
    var nodeType = node.constructor.getType();
    var registeredNode = editor._nodes.get(nodeType);
    if (registeredNode === undefined) {
      {
        throw Error("$initializeNode failed. Ensure node has been registered to the editor. You can do this by passing the node class via the \"nodes\" array in the editor config.");
      }
    }
    var replaceFunc = registeredNode.replace;
    if (replaceFunc !== null) {
      var replacementNode = replaceFunc(node);
      if (!(replacementNode instanceof node.constructor)) {
        {
          throw Error("$initializeNode failed. Ensure replacement node is a subclass of the original node.");
        }
      }
      return replacementNode;
    }
    return node;
  }
  function errorOnInsertTextNodeOnRoot(node, insertNode) {
    var parentNode = node.getParent();
    if ($isRootNode(parentNode) && !$isElementNode(insertNode) && !$isDecoratorNode(insertNode)) {
      {
        throw Error("Only element or decorator nodes can be inserted in to the root node");
      }
    }
  }
  function $getNodeByKeyOrThrow(key) {
    var node = $getNodeByKey(key);
    if (node === null) {
      {
        throw Error("Expected node with key ".concat(key, " to exist but it's not in the nodeMap."));
      }
    }
    return node;
  }
  function createBlockCursorElement(editorConfig) {
    var theme = editorConfig.theme;
    var element = document.createElement('div');
    element.contentEditable = 'false';
    element.setAttribute('data-lexical-cursor', 'true');
    var blockCursorTheme = theme.blockCursor;
    if (blockCursorTheme !== undefined) {
      if (typeof blockCursorTheme === 'string') {
        var classNamesArr = normalizeClassNames(blockCursorTheme);
        // @ts-expect-error: intentional
        blockCursorTheme = theme.blockCursor = classNamesArr;
      }
      if (blockCursorTheme !== undefined) {
        var _element$classList;
        (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(blockCursorTheme));
      }
    }
    return element;
  }
  function needsBlockCursor(node) {
    return ($isDecoratorNode(node) || $isElementNode(node) && !node.canBeEmpty()) && !node.isInline();
  }
  function removeDOMBlockCursorElement(blockCursorElement, editor, rootElement) {
    rootElement.style.removeProperty('caret-color');
    editor._blockCursorElement = null;
    var parentElement = blockCursorElement.parentElement;
    if (parentElement !== null) {
      parentElement.removeChild(blockCursorElement);
    }
  }
  function updateDOMBlockCursorElement(editor, rootElement, nextSelection) {
    var blockCursorElement = editor._blockCursorElement;
    if ($isRangeSelection(nextSelection) && nextSelection.isCollapsed() && nextSelection.anchor.type === 'element' && rootElement.contains(document.activeElement)) {
      var anchor = nextSelection.anchor;
      var elementNode = anchor.getNode();
      var offset = anchor.offset;
      var elementNodeSize = elementNode.getChildrenSize();
      var isBlockCursor = false;
      var insertBeforeElement = null;
      if (offset === elementNodeSize) {
        var child = elementNode.getChildAtIndex(offset - 1);
        if (needsBlockCursor(child)) {
          isBlockCursor = true;
        }
      } else {
        var _child = elementNode.getChildAtIndex(offset);
        if (needsBlockCursor(_child)) {
          var sibling = _child.getPreviousSibling();
          if (sibling === null || needsBlockCursor(sibling)) {
            isBlockCursor = true;
            insertBeforeElement = editor.getElementByKey(_child.__key);
          }
        }
      }
      if (isBlockCursor) {
        var elementDOM = editor.getElementByKey(elementNode.__key);
        if (blockCursorElement === null) {
          editor._blockCursorElement = blockCursorElement = createBlockCursorElement(editor._config);
        }
        rootElement.style.caretColor = 'transparent';
        if (insertBeforeElement === null) {
          elementDOM.appendChild(blockCursorElement);
        } else {
          elementDOM.insertBefore(blockCursorElement, insertBeforeElement);
        }
        return;
      }
    }
    // Remove cursor
    if (blockCursorElement !== null) {
      removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
    }
  }
  function getDOMSelection(targetWindow) {
    return !CAN_USE_DOM ? null : (targetWindow || window).getSelection();
  }
  function $splitNode(node, offset) {
    var startNode = node.getChildAtIndex(offset);
    if (startNode == null) {
      startNode = node;
    }
    if (!!$isRootOrShadowRoot(node)) {
      throw Error("Can not call $splitNode() on root element");
    }
    var recurse = function recurse(currentNode) {
      var parent = currentNode.getParentOrThrow();
      var isParentRoot = $isRootOrShadowRoot(parent);
      // The node we start split from (leaf) is moved, but its recursive
      // parents are copied to create separate tree
      var nodeToMove = currentNode === startNode && !isParentRoot ? currentNode : $copyNode(currentNode);
      if (isParentRoot) {
        if (!($isElementNode(currentNode) && $isElementNode(nodeToMove))) {
          throw Error("Children of a root must be ElementNode");
        }
        currentNode.insertAfter(nodeToMove);
        return [currentNode, nodeToMove, nodeToMove];
      } else {
        var _recurse = recurse(parent),
          _recurse2 = _slicedToArray(_recurse, 3),
          _leftTree = _recurse2[0],
          _rightTree = _recurse2[1],
          newParent = _recurse2[2];
        var nextSiblings = currentNode.getNextSiblings();
        newParent.append.apply(newParent, [nodeToMove].concat(_toConsumableArray(nextSiblings)));
        return [_leftTree, _rightTree, nodeToMove];
      }
    };
    var _recurse3 = recurse(startNode),
      _recurse4 = _slicedToArray(_recurse3, 2),
      leftTree = _recurse4[0],
      rightTree = _recurse4[1];
    return [leftTree, rightTree];
  }

  /**
   * @param x - The element being tested
   * @returns Returns true if x is an HTML anchor tag, false otherwise
   */
  function isHTMLAnchorElement(x) {
    return isHTMLElement(x) && x.tagName === 'A';
  }

  /**
   * @param x - The element being testing
   * @returns Returns true if x is an HTML element, false otherwise.
   */
  function isHTMLElement(x) {
    // @ts-ignore-next-line - strict check on nodeType here should filter out non-Element EventTarget implementors
    return x.nodeType === 1;
  }

  /**
   *
   * @param node - the Dom Node to check
   * @returns if the Dom Node is an inline node
   */
  function isInlineDomNode(node) {
    var inlineNodes = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, 'i');
    return node.nodeName.match(inlineNodes) !== null;
  }

  /**
   *
   * @param node - the Dom Node to check
   * @returns if the Dom Node is a block node
   */
  function isBlockDomNode(node) {
    var blockNodes = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, 'i');
    return node.nodeName.match(blockNodes) !== null;
  }

  /**
   * This function is for internal use of the library.
   * Please do not use it as it may change in the future.
   */
  function INTERNAL_$isBlock(node) {
    if ($isRootNode(node) || $isDecoratorNode(node) && !node.isInline()) {
      return true;
    }
    if (!$isElementNode(node) || $isRootOrShadowRoot(node)) {
      return false;
    }
    var firstChild = node.getFirstChild();
    var isLeafElement = firstChild === null || $isLineBreakNode(firstChild) || $isTextNode(firstChild) || firstChild.isInline();
    return !node.isInline() && node.canBeEmpty() !== false && isLeafElement;
  }
  function $getAncestor(node, predicate) {
    var parent = node;
    while (parent !== null && parent.getParent() !== null && !predicate(parent)) {
      parent = parent.getParentOrThrow();
    }
    return predicate(parent) ? parent : null;
  }

  /**
   * Utility function for accessing current active editor instance.
   * @returns Current active editor
   */
  function $getEditor() {
    return getActiveEditor();
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  function $garbageCollectDetachedDecorators(editor, pendingEditorState) {
    var currentDecorators = editor._decorators;
    var pendingDecorators = editor._pendingDecorators;
    var decorators = pendingDecorators || currentDecorators;
    var nodeMap = pendingEditorState._nodeMap;
    var key;
    for (key in decorators) {
      if (!nodeMap.has(key)) {
        if (decorators === currentDecorators) {
          decorators = cloneDecorators(editor);
        }
        delete decorators[key];
      }
    }
  }
  function $garbageCollectDetachedDeepChildNodes(node, parentKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyNodes) {
    var child = node.getFirstChild();
    while (child !== null) {
      var childKey = child.__key;
      // TODO Revise condition below, redundant? LexicalNode already cleans up children when moving Nodes
      if (child.__parent === parentKey) {
        if ($isElementNode(child)) {
          $garbageCollectDetachedDeepChildNodes(child, childKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyNodes);
        }

        // If we have created a node and it was dereferenced, then also
        // remove it from out dirty nodes Set.
        if (!prevNodeMap.has(childKey)) {
          dirtyNodes["delete"](childKey);
        }
        nodeMapDelete.push(childKey);
      }
      child = child.getNextSibling();
    }
  }
  function $garbageCollectDetachedNodes(prevEditorState, editorState, dirtyLeaves, dirtyElements) {
    var prevNodeMap = prevEditorState._nodeMap;
    var nodeMap = editorState._nodeMap;
    // Store dirtyElements in a queue for later deletion; deleting dirty subtrees too early will
    // hinder accessing .__next on child nodes
    var nodeMapDelete = [];
    var _iterator5 = _createForOfIteratorHelper(dirtyElements),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = _slicedToArray(_step5.value, 1),
          _nodeKey = _step5$value[0];
        var node = nodeMap.get(_nodeKey);
        if (node !== undefined) {
          // Garbage collect node and its children if they exist
          if (!node.isAttached()) {
            if ($isElementNode(node)) {
              $garbageCollectDetachedDeepChildNodes(node, _nodeKey, prevNodeMap, nodeMap, nodeMapDelete, dirtyElements);
            }
            // If we have created a node and it was dereferenced, then also
            // remove it from out dirty nodes Set.
            if (!prevNodeMap.has(_nodeKey)) {
              dirtyElements["delete"](_nodeKey);
            }
            nodeMapDelete.push(_nodeKey);
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    for (var _i3 = 0, _nodeMapDelete = nodeMapDelete; _i3 < _nodeMapDelete.length; _i3++) {
      var nodeKey = _nodeMapDelete[_i3];
      nodeMap["delete"](nodeKey);
    }
    var _iterator6 = _createForOfIteratorHelper(dirtyLeaves),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _nodeKey2 = _step6.value;
        var _node2 = nodeMap.get(_nodeKey2);
        if (_node2 !== undefined && !_node2.isAttached()) {
          if (!prevNodeMap.has(_nodeKey2)) {
            dirtyLeaves["delete"](_nodeKey2);
          }
          nodeMap["delete"](_nodeKey2);
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var subTreeTextContent = '';
  var subTreeDirectionedTextContent = '';
  var subTreeTextFormat = null;
  var editorTextContent = '';
  var activeEditorConfig;
  var activeEditor$1;
  var activeEditorNodes;
  var treatAllNodesAsDirty = false;
  var activeEditorStateReadOnly = false;
  var activeMutationListeners;
  var activeTextDirection = null;
  var activeDirtyElements;
  var activeDirtyLeaves;
  var activePrevNodeMap;
  var activeNextNodeMap;
  var activePrevKeyToDOMMap;
  var mutatedNodes;
  function destroyNode(key, parentDOM) {
    var node = activePrevNodeMap.get(key);
    if (parentDOM !== null) {
      var dom = getPrevElementByKeyOrThrow(key);
      if (dom.parentNode === parentDOM) {
        parentDOM.removeChild(dom);
      }
    }

    // This logic is really important, otherwise we will leak DOM nodes
    // when their corresponding LexicalNodes are removed from the editor state.
    if (!activeNextNodeMap.has(key)) {
      activeEditor$1._keyToDOMMap["delete"](key);
    }
    if ($isElementNode(node)) {
      var children = createChildrenArray(node, activePrevNodeMap);
      destroyChildren(children, 0, children.length - 1, null);
    }
    if (node !== undefined) {
      setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, 'destroyed');
    }
  }
  function destroyChildren(children, _startIndex, endIndex, dom) {
    var startIndex = _startIndex;
    for (; startIndex <= endIndex; ++startIndex) {
      var child = children[startIndex];
      if (child !== undefined) {
        destroyNode(child, dom);
      }
    }
  }
  function setTextAlign(domStyle, value) {
    domStyle.setProperty('text-align', value);
  }
  var DEFAULT_INDENT_VALUE = '40px';
  function setElementIndent(dom, indent) {
    var indentClassName = activeEditorConfig.theme.indent;
    if (typeof indentClassName === 'string') {
      var elementHasClassName = dom.classList.contains(indentClassName);
      if (indent > 0 && !elementHasClassName) {
        dom.classList.add(indentClassName);
      } else if (indent < 1 && elementHasClassName) {
        dom.classList.remove(indentClassName);
      }
    }
    var indentationBaseValue = getComputedStyle(dom).getPropertyValue('--lexical-indent-base-value') || DEFAULT_INDENT_VALUE;
    dom.style.setProperty('padding-inline-start', indent === 0 ? '' : "calc(".concat(indent, " * ").concat(indentationBaseValue, ")"));
  }
  function setElementFormat(dom, format) {
    var domStyle = dom.style;
    if (format === 0) {
      setTextAlign(domStyle, '');
    } else if (format === IS_ALIGN_LEFT) {
      setTextAlign(domStyle, 'left');
    } else if (format === IS_ALIGN_CENTER) {
      setTextAlign(domStyle, 'center');
    } else if (format === IS_ALIGN_RIGHT) {
      setTextAlign(domStyle, 'right');
    } else if (format === IS_ALIGN_JUSTIFY) {
      setTextAlign(domStyle, 'justify');
    } else if (format === IS_ALIGN_START) {
      setTextAlign(domStyle, 'start');
    } else if (format === IS_ALIGN_END) {
      setTextAlign(domStyle, 'end');
    }
  }
  function $createNode(key, parentDOM, insertDOM) {
    var node = activeNextNodeMap.get(key);
    if (node === undefined) {
      {
        throw Error("createNode: node does not exist in nodeMap");
      }
    }
    var dom = node.createDOM(activeEditorConfig, activeEditor$1);
    storeDOMWithKey(key, dom, activeEditor$1);

    // This helps preserve the text, and stops spell check tools from
    // merging or break the spans (which happens if they are missing
    // this attribute).
    if ($isTextNode(node)) {
      dom.setAttribute('data-lexical-text', 'true');
    } else if ($isDecoratorNode(node)) {
      dom.setAttribute('data-lexical-decorator', 'true');
    }
    if ($isElementNode(node)) {
      var indent = node.__indent;
      var childrenSize = node.__size;
      if (indent !== 0) {
        setElementIndent(dom, indent);
      }
      if (childrenSize !== 0) {
        var endIndex = childrenSize - 1;
        var children = createChildrenArray(node, activeNextNodeMap);
        $createChildrenWithDirection(children, endIndex, node, dom);
      }
      var format = node.__format;
      if (format !== 0) {
        setElementFormat(dom, format);
      }
      if (!node.isInline()) {
        reconcileElementTerminatingLineBreak(null, node, dom);
      }
      if ($textContentRequiresDoubleLinebreakAtEnd(node)) {
        subTreeTextContent += DOUBLE_LINE_BREAK;
        editorTextContent += DOUBLE_LINE_BREAK;
      }
    } else {
      var text = node.getTextContent();
      if ($isDecoratorNode(node)) {
        var decorator = node.decorate(activeEditor$1, activeEditorConfig);
        if (decorator !== null) {
          reconcileDecorator(key, decorator);
        }
        // Decorators are always non editable
        dom.contentEditable = 'false';
      } else if ($isTextNode(node)) {
        if (!node.isDirectionless()) {
          subTreeDirectionedTextContent += text;
        }
      }
      subTreeTextContent += text;
      editorTextContent += text;
    }
    if (parentDOM !== null) {
      if (insertDOM != null) {
        parentDOM.insertBefore(dom, insertDOM);
      } else {
        // @ts-expect-error: internal field
        var possibleLineBreak = parentDOM.__lexicalLineBreak;
        if (possibleLineBreak != null) {
          parentDOM.insertBefore(dom, possibleLineBreak);
        } else {
          parentDOM.appendChild(dom);
        }
      }
    }
    {
      // Freeze the node in DEV to prevent accidental mutations
      Object.freeze(node);
    }
    setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, node, 'created');
    return dom;
  }
  function $createChildrenWithDirection(children, endIndex, element, dom) {
    var previousSubTreeDirectionedTextContent = subTreeDirectionedTextContent;
    subTreeDirectionedTextContent = '';
    $createChildren(children, element, 0, endIndex, dom, null);
    reconcileBlockDirection(element, dom);
    subTreeDirectionedTextContent = previousSubTreeDirectionedTextContent;
  }
  function $createChildren(children, element, _startIndex, endIndex, dom, insertDOM) {
    var previousSubTreeTextContent = subTreeTextContent;
    subTreeTextContent = '';
    var startIndex = _startIndex;
    for (; startIndex <= endIndex; ++startIndex) {
      $createNode(children[startIndex], dom, insertDOM);
      var node = activeNextNodeMap.get(children[startIndex]);
      if (node !== null && subTreeTextFormat === null && $isTextNode(node)) {
        subTreeTextFormat = node.getFormat();
      }
    }
    if ($textContentRequiresDoubleLinebreakAtEnd(element)) {
      subTreeTextContent += DOUBLE_LINE_BREAK;
    }
    // @ts-expect-error: internal field
    dom.__lexicalTextContent = subTreeTextContent;
    subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
  }
  function isLastChildLineBreakOrDecorator(childKey, nodeMap) {
    var node = nodeMap.get(childKey);
    return $isLineBreakNode(node) || $isDecoratorNode(node) && node.isInline();
  }

  // If we end an element with a LineBreakNode, then we need to add an additional <br>
  function reconcileElementTerminatingLineBreak(prevElement, nextElement, dom) {
    var prevLineBreak = prevElement !== null && (prevElement.__size === 0 || isLastChildLineBreakOrDecorator(prevElement.__last, activePrevNodeMap));
    var nextLineBreak = nextElement.__size === 0 || isLastChildLineBreakOrDecorator(nextElement.__last, activeNextNodeMap);
    if (prevLineBreak) {
      if (!nextLineBreak) {
        // @ts-expect-error: internal field
        var element = dom.__lexicalLineBreak;
        if (element != null) {
          dom.removeChild(element);
        }

        // @ts-expect-error: internal field
        dom.__lexicalLineBreak = null;
      }
    } else if (nextLineBreak) {
      var _element = document.createElement('br');
      // @ts-expect-error: internal field
      dom.__lexicalLineBreak = _element;
      dom.appendChild(_element);
    }
  }
  function reconcileParagraphFormat(element) {
    if ($isParagraphNode(element) && subTreeTextFormat != null && subTreeTextFormat !== element.__textFormat && !activeEditorStateReadOnly) {
      element.setTextFormat(subTreeTextFormat);
    }
  }
  function reconcileBlockDirection(element, dom) {
    var previousSubTreeDirectionTextContent =
    // @ts-expect-error: internal field
    dom.__lexicalDirTextContent;
    // @ts-expect-error: internal field
    var previousDirection = dom.__lexicalDir;
    if (previousSubTreeDirectionTextContent !== subTreeDirectionedTextContent || previousDirection !== activeTextDirection) {
      var hasEmptyDirectionedTextContent = subTreeDirectionedTextContent === '';
      var direction = hasEmptyDirectionedTextContent ? activeTextDirection : getTextDirection(subTreeDirectionedTextContent);
      if (direction !== previousDirection) {
        var classList = dom.classList;
        var theme = activeEditorConfig.theme;
        var previousDirectionTheme = previousDirection !== null ? theme[previousDirection] : undefined;
        var nextDirectionTheme = direction !== null ? theme[direction] : undefined;

        // Remove the old theme classes if they exist
        if (previousDirectionTheme !== undefined) {
          if (typeof previousDirectionTheme === 'string') {
            var classNamesArr = normalizeClassNames(previousDirectionTheme);
            previousDirectionTheme = theme[previousDirection] = classNamesArr;
          }

          // @ts-ignore: intentional
          classList.remove.apply(classList, _toConsumableArray(previousDirectionTheme));
        }
        if (direction === null || hasEmptyDirectionedTextContent && direction === 'ltr') {
          // Remove direction
          dom.removeAttribute('dir');
        } else {
          // Apply the new theme classes if they exist
          if (nextDirectionTheme !== undefined) {
            if (typeof nextDirectionTheme === 'string') {
              var _classNamesArr = normalizeClassNames(nextDirectionTheme);
              // @ts-expect-error: intentional
              nextDirectionTheme = theme[direction] = _classNamesArr;
            }
            if (nextDirectionTheme !== undefined) {
              classList.add.apply(classList, _toConsumableArray(nextDirectionTheme));
            }
          }

          // Update direction
          dom.dir = direction;
        }
        if (!activeEditorStateReadOnly) {
          var writableNode = element.getWritable();
          writableNode.__dir = direction;
        }
      }
      activeTextDirection = direction;
      // @ts-expect-error: internal field
      dom.__lexicalDirTextContent = subTreeDirectionedTextContent;
      // @ts-expect-error: internal field
      dom.__lexicalDir = direction;
    }
  }
  function $reconcileChildrenWithDirection(prevElement, nextElement, dom) {
    var previousSubTreeDirectionTextContent = subTreeDirectionedTextContent;
    subTreeDirectionedTextContent = '';
    subTreeTextFormat = null;
    $reconcileChildren(prevElement, nextElement, dom);
    reconcileBlockDirection(nextElement, dom);
    reconcileParagraphFormat(nextElement);
    subTreeDirectionedTextContent = previousSubTreeDirectionTextContent;
    subTreeTextFormat = null;
  }
  function createChildrenArray(element, nodeMap) {
    var children = [];
    var nodeKey = element.__first;
    while (nodeKey !== null) {
      var node = nodeMap.get(nodeKey);
      if (node === undefined) {
        {
          throw Error("createChildrenArray: node does not exist in nodeMap");
        }
      }
      children.push(nodeKey);
      nodeKey = node.__next;
    }
    return children;
  }
  function $reconcileChildren(prevElement, nextElement, dom) {
    var previousSubTreeTextContent = subTreeTextContent;
    var prevChildrenSize = prevElement.__size;
    var nextChildrenSize = nextElement.__size;
    subTreeTextContent = '';
    if (prevChildrenSize === 1 && nextChildrenSize === 1) {
      var prevFirstChildKey = prevElement.__first;
      var nextFrstChildKey = nextElement.__first;
      if (prevFirstChildKey === nextFrstChildKey) {
        $reconcileNode(prevFirstChildKey, dom);
      } else {
        var lastDOM = getPrevElementByKeyOrThrow(prevFirstChildKey);
        var replacementDOM = $createNode(nextFrstChildKey, null, null);
        dom.replaceChild(replacementDOM, lastDOM);
        destroyNode(prevFirstChildKey, null);
      }
      var nextChildNode = activeNextNodeMap.get(nextFrstChildKey);
      if (subTreeTextFormat === null && $isTextNode(nextChildNode)) {
        subTreeTextFormat = nextChildNode.getFormat();
      }
    } else {
      var prevChildren = createChildrenArray(prevElement, activePrevNodeMap);
      var nextChildren = createChildrenArray(nextElement, activeNextNodeMap);
      if (prevChildrenSize === 0) {
        if (nextChildrenSize !== 0) {
          $createChildren(nextChildren, nextElement, 0, nextChildrenSize - 1, dom, null);
        }
      } else if (nextChildrenSize === 0) {
        if (prevChildrenSize !== 0) {
          // @ts-expect-error: internal field
          var lexicalLineBreak = dom.__lexicalLineBreak;
          var canUseFastPath = lexicalLineBreak == null;
          destroyChildren(prevChildren, 0, prevChildrenSize - 1, canUseFastPath ? null : dom);
          if (canUseFastPath) {
            // Fast path for removing DOM nodes
            dom.textContent = '';
          }
        }
      } else {
        $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenSize, nextChildrenSize, dom);
      }
    }
    if ($textContentRequiresDoubleLinebreakAtEnd(nextElement)) {
      subTreeTextContent += DOUBLE_LINE_BREAK;
    }

    // @ts-expect-error: internal field
    dom.__lexicalTextContent = subTreeTextContent;
    subTreeTextContent = previousSubTreeTextContent + subTreeTextContent;
  }
  function $reconcileNode(key, parentDOM) {
    var prevNode = activePrevNodeMap.get(key);
    var nextNode = activeNextNodeMap.get(key);
    if (prevNode === undefined || nextNode === undefined) {
      {
        throw Error("reconcileNode: prevNode or nextNode does not exist in nodeMap");
      }
    }
    var isDirty = treatAllNodesAsDirty || activeDirtyLeaves.has(key) || activeDirtyElements.has(key);
    var dom = getElementByKeyOrThrow(activeEditor$1, key);

    // If the node key points to the same instance in both states
    // and isn't dirty, we just update the text content cache
    // and return the existing DOM Node.
    if (prevNode === nextNode && !isDirty) {
      if ($isElementNode(prevNode)) {
        // @ts-expect-error: internal field
        var previousSubTreeTextContent = dom.__lexicalTextContent;
        if (previousSubTreeTextContent !== undefined) {
          subTreeTextContent += previousSubTreeTextContent;
          editorTextContent += previousSubTreeTextContent;
        }

        // @ts-expect-error: internal field
        var previousSubTreeDirectionTextContent = dom.__lexicalDirTextContent;
        if (previousSubTreeDirectionTextContent !== undefined) {
          subTreeDirectionedTextContent += previousSubTreeDirectionTextContent;
        }
      } else {
        var text = prevNode.getTextContent();
        if ($isTextNode(prevNode) && !prevNode.isDirectionless()) {
          subTreeDirectionedTextContent += text;
        }
        editorTextContent += text;
        subTreeTextContent += text;
      }
      return dom;
    }
    // If the node key doesn't point to the same instance in both maps,
    // it means it were cloned. If they're also dirty, we mark them as mutated.
    if (prevNode !== nextNode && isDirty) {
      setMutatedNode(mutatedNodes, activeEditorNodes, activeMutationListeners, nextNode, 'updated');
    }

    // Update node. If it returns true, we need to unmount and re-create the node
    if (nextNode.updateDOM(prevNode, dom, activeEditorConfig)) {
      var replacementDOM = $createNode(key, null, null);
      if (parentDOM === null) {
        {
          throw Error("reconcileNode: parentDOM is null");
        }
      }
      parentDOM.replaceChild(replacementDOM, dom);
      destroyNode(key, null);
      return replacementDOM;
    }
    if ($isElementNode(prevNode) && $isElementNode(nextNode)) {
      // Reconcile element children
      var nextIndent = nextNode.__indent;
      if (nextIndent !== prevNode.__indent) {
        setElementIndent(dom, nextIndent);
      }
      var nextFormat = nextNode.__format;
      if (nextFormat !== prevNode.__format) {
        setElementFormat(dom, nextFormat);
      }
      if (isDirty) {
        $reconcileChildrenWithDirection(prevNode, nextNode, dom);
        if (!$isRootNode(nextNode) && !nextNode.isInline()) {
          reconcileElementTerminatingLineBreak(prevNode, nextNode, dom);
        }
      }
      if ($textContentRequiresDoubleLinebreakAtEnd(nextNode)) {
        subTreeTextContent += DOUBLE_LINE_BREAK;
        editorTextContent += DOUBLE_LINE_BREAK;
      }
    } else {
      var _text2 = nextNode.getTextContent();
      if ($isDecoratorNode(nextNode)) {
        var decorator = nextNode.decorate(activeEditor$1, activeEditorConfig);
        if (decorator !== null) {
          reconcileDecorator(key, decorator);
        }
      } else if ($isTextNode(nextNode) && !nextNode.isDirectionless()) {
        // Handle text content, for LTR, LTR cases.
        subTreeDirectionedTextContent += _text2;
      }
      subTreeTextContent += _text2;
      editorTextContent += _text2;
    }
    if (!activeEditorStateReadOnly && $isRootNode(nextNode) && nextNode.__cachedText !== editorTextContent) {
      // Cache the latest text content.
      var nextRootNode = nextNode.getWritable();
      nextRootNode.__cachedText = editorTextContent;
      nextNode = nextRootNode;
    }
    {
      // Freeze the node in DEV to prevent accidental mutations
      Object.freeze(nextNode);
    }
    return dom;
  }
  function reconcileDecorator(key, decorator) {
    var pendingDecorators = activeEditor$1._pendingDecorators;
    var currentDecorators = activeEditor$1._decorators;
    if (pendingDecorators === null) {
      if (currentDecorators[key] === decorator) {
        return;
      }
      pendingDecorators = cloneDecorators(activeEditor$1);
    }
    pendingDecorators[key] = decorator;
  }
  function getFirstChild(element) {
    return element.firstChild;
  }
  function getNextSibling(element) {
    var nextSibling = element.nextSibling;
    if (nextSibling !== null && nextSibling === activeEditor$1._blockCursorElement) {
      nextSibling = nextSibling.nextSibling;
    }
    return nextSibling;
  }
  function $reconcileNodeChildren(nextElement, prevChildren, nextChildren, prevChildrenLength, nextChildrenLength, dom) {
    var prevEndIndex = prevChildrenLength - 1;
    var nextEndIndex = nextChildrenLength - 1;
    var prevChildrenSet;
    var nextChildrenSet;
    var siblingDOM = getFirstChild(dom);
    var prevIndex = 0;
    var nextIndex = 0;
    while (prevIndex <= prevEndIndex && nextIndex <= nextEndIndex) {
      var prevKey = prevChildren[prevIndex];
      var nextKey = nextChildren[nextIndex];
      if (prevKey === nextKey) {
        siblingDOM = getNextSibling($reconcileNode(nextKey, dom));
        prevIndex++;
        nextIndex++;
      } else {
        if (prevChildrenSet === undefined) {
          prevChildrenSet = new Set(prevChildren);
        }
        if (nextChildrenSet === undefined) {
          nextChildrenSet = new Set(nextChildren);
        }
        var nextHasPrevKey = nextChildrenSet.has(prevKey);
        var prevHasNextKey = prevChildrenSet.has(nextKey);
        if (!nextHasPrevKey) {
          // Remove prev
          siblingDOM = getNextSibling(getPrevElementByKeyOrThrow(prevKey));
          destroyNode(prevKey, dom);
          prevIndex++;
        } else if (!prevHasNextKey) {
          // Create next
          $createNode(nextKey, dom, siblingDOM);
          nextIndex++;
        } else {
          // Move next
          var childDOM = getElementByKeyOrThrow(activeEditor$1, nextKey);
          if (childDOM === siblingDOM) {
            siblingDOM = getNextSibling($reconcileNode(nextKey, dom));
          } else {
            if (siblingDOM != null) {
              dom.insertBefore(childDOM, siblingDOM);
            } else {
              dom.appendChild(childDOM);
            }
            $reconcileNode(nextKey, dom);
          }
          prevIndex++;
          nextIndex++;
        }
      }
      var node = activeNextNodeMap.get(nextKey);
      if (node !== null && subTreeTextFormat === null && $isTextNode(node)) {
        subTreeTextFormat = node.getFormat();
      }
    }
    var appendNewChildren = prevIndex > prevEndIndex;
    var removeOldChildren = nextIndex > nextEndIndex;
    if (appendNewChildren && !removeOldChildren) {
      var previousNode = nextChildren[nextEndIndex + 1];
      var insertDOM = previousNode === undefined ? null : activeEditor$1.getElementByKey(previousNode);
      $createChildren(nextChildren, nextElement, nextIndex, nextEndIndex, dom, insertDOM);
    } else if (removeOldChildren && !appendNewChildren) {
      destroyChildren(prevChildren, prevIndex, prevEndIndex, dom);
    }
  }
  function $reconcileRoot(prevEditorState, nextEditorState, editor, dirtyType, dirtyElements, dirtyLeaves) {
    // We cache text content to make retrieval more efficient.
    // The cache must be rebuilt during reconciliation to account for any changes.
    subTreeTextContent = '';
    editorTextContent = '';
    subTreeDirectionedTextContent = '';
    // Rather than pass around a load of arguments through the stack recursively
    // we instead set them as bindings within the scope of the module.
    treatAllNodesAsDirty = dirtyType === FULL_RECONCILE;
    activeTextDirection = null;
    activeEditor$1 = editor;
    activeEditorConfig = editor._config;
    activeEditorNodes = editor._nodes;
    activeMutationListeners = activeEditor$1._listeners.mutation;
    activeDirtyElements = dirtyElements;
    activeDirtyLeaves = dirtyLeaves;
    activePrevNodeMap = prevEditorState._nodeMap;
    activeNextNodeMap = nextEditorState._nodeMap;
    activeEditorStateReadOnly = nextEditorState._readOnly;
    activePrevKeyToDOMMap = new Map(editor._keyToDOMMap);
    // We keep track of mutated nodes so we can trigger mutation
    // listeners later in the update cycle.
    var currentMutatedNodes = new Map();
    mutatedNodes = currentMutatedNodes;
    $reconcileNode('root', null);
    // We don't want a bunch of void checks throughout the scope
    // so instead we make it seem that these values are always set.
    // We also want to make sure we clear them down, otherwise we
    // can leak memory.
    // @ts-ignore
    activeEditor$1 = undefined;
    // @ts-ignore
    activeEditorNodes = undefined;
    // @ts-ignore
    activeDirtyElements = undefined;
    // @ts-ignore
    activeDirtyLeaves = undefined;
    // @ts-ignore
    activePrevNodeMap = undefined;
    // @ts-ignore
    activeNextNodeMap = undefined;
    // @ts-ignore
    activeEditorConfig = undefined;
    // @ts-ignore
    activePrevKeyToDOMMap = undefined;
    // @ts-ignore
    mutatedNodes = undefined;
    return currentMutatedNodes;
  }
  function storeDOMWithKey(key, dom, editor) {
    var keyToDOMMap = editor._keyToDOMMap;
    // @ts-ignore We intentionally add this to the Node.
    dom['__lexicalKey_' + editor._key] = key;
    keyToDOMMap.set(key, dom);
  }
  function getPrevElementByKeyOrThrow(key) {
    var element = activePrevKeyToDOMMap.get(key);
    if (element === undefined) {
      {
        throw Error("Reconciliation: could not find DOM element for node key ".concat(key));
      }
    }
    return element;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var PASS_THROUGH_COMMAND = Object.freeze({});
  var ANDROID_COMPOSITION_LATENCY = 30;
  var rootElementEvents = [['keydown', onKeyDown], ['pointerdown', onPointerDown], ['compositionstart', onCompositionStart], ['compositionend', onCompositionEnd], ['input', onInput], ['click', onClick], ['cut', PASS_THROUGH_COMMAND], ['copy', PASS_THROUGH_COMMAND], ['dragstart', PASS_THROUGH_COMMAND], ['dragover', PASS_THROUGH_COMMAND], ['dragend', PASS_THROUGH_COMMAND], ['paste', PASS_THROUGH_COMMAND], ['focus', PASS_THROUGH_COMMAND], ['blur', PASS_THROUGH_COMMAND], ['drop', PASS_THROUGH_COMMAND]];
  if (CAN_USE_BEFORE_INPUT) {
    rootElementEvents.push(['beforeinput', function (event, editor) {
      return onBeforeInput(event, editor);
    }]);
  }
  var lastKeyDownTimeStamp = 0;
  var lastKeyCode = null;
  var lastBeforeInputInsertTextTimeStamp = 0;
  var unprocessedBeforeInputData = null;
  var rootElementsRegistered = new WeakMap();
  var isSelectionChangeFromDOMUpdate = false;
  var isSelectionChangeFromMouseDown = false;
  var isInsertLineBreak = false;
  var isFirefoxEndingComposition = false;
  var collapsedSelectionFormat = [0, '', 0, 'root', 0];

  // This function is used to determine if Lexical should attempt to override
  // the default browser behavior for insertion of text and use its own internal
  // heuristics. This is an extremely important function, and makes much of Lexical
  // work as intended between different browsers and across word, line and character
  // boundary/formats. It also is important for text replacement, node schemas and
  // composition mechanics.

  function $shouldPreventDefaultAndInsertText(selection, domTargetRange, text, timeStamp, isBeforeInput) {
    var anchor = selection.anchor;
    var focus = selection.focus;
    var anchorNode = anchor.getNode();
    var editor = getActiveEditor();
    var domSelection = getDOMSelection(editor._window);
    var domAnchorNode = domSelection !== null ? domSelection.anchorNode : null;
    var anchorKey = anchor.key;
    var backingAnchorElement = editor.getElementByKey(anchorKey);
    var textLength = text.length;
    return anchorKey !== focus.key ||
    // If we're working with a non-text node.
    !$isTextNode(anchorNode) ||
    // If we are replacing a range with a single character or grapheme, and not composing.
    (!isBeforeInput && (!CAN_USE_BEFORE_INPUT ||
    // We check to see if there has been
    // a recent beforeinput event for "textInput". If there has been one in the last
    // 50ms then we proceed as normal. However, if there is not, then this is likely
    // a dangling `input` event caused by execCommand('insertText').
    lastBeforeInputInsertTextTimeStamp < timeStamp + 50) || anchorNode.isDirty() && textLength < 2 || doesContainGrapheme(text)) && anchor.offset !== focus.offset && !anchorNode.isComposing() ||
    // Any non standard text node.
    $isTokenOrSegmented(anchorNode) ||
    // If the text length is more than a single character and we're either
    // dealing with this in "beforeinput" or where the node has already recently
    // been changed (thus is dirty).
    anchorNode.isDirty() && textLength > 1 ||
    // If the DOM selection element is not the same as the backing node during beforeinput.
    (isBeforeInput || !CAN_USE_BEFORE_INPUT) && backingAnchorElement !== null && !anchorNode.isComposing() && domAnchorNode !== getDOMTextNode(backingAnchorElement) ||
    // If TargetRange is not the same as the DOM selection; browser trying to edit random parts
    // of the editor.
    domSelection !== null && domTargetRange !== null && (!domTargetRange.collapsed || domTargetRange.startContainer !== domSelection.anchorNode || domTargetRange.startOffset !== domSelection.anchorOffset) ||
    // Check if we're changing from bold to italics, or some other format.
    anchorNode.getFormat() !== selection.format || anchorNode.getStyle() !== selection.style ||
    // One last set of heuristics to check against.
    $shouldInsertTextAfterOrBeforeTextNode(selection, anchorNode);
  }
  function shouldSkipSelectionChange(domNode, offset) {
    return domNode !== null && domNode.nodeValue !== null && domNode.nodeType === DOM_TEXT_TYPE && offset !== 0 && offset !== domNode.nodeValue.length;
  }
  function onSelectionChange(domSelection, editor, isActive) {
    var anchorDOM = domSelection.anchorNode,
      anchorOffset = domSelection.anchorOffset,
      focusDOM = domSelection.focusNode,
      focusOffset = domSelection.focusOffset;
    if (isSelectionChangeFromDOMUpdate) {
      isSelectionChangeFromDOMUpdate = false;

      // If native DOM selection is on a DOM element, then
      // we should continue as usual, as Lexical's selection
      // may have normalized to a better child. If the DOM
      // element is a text node, we can safely apply this
      // optimization and skip the selection change entirely.
      // We also need to check if the offset is at the boundary,
      // because in this case, we might need to normalize to a
      // sibling instead.
      if (shouldSkipSelectionChange(anchorDOM, anchorOffset) && shouldSkipSelectionChange(focusDOM, focusOffset)) {
        return;
      }
    }
    updateEditor(editor, function () {
      // Non-active editor don't need any extra logic for selection, it only needs update
      // to reconcile selection (set it to null) to ensure that only one editor has non-null selection.
      if (!isActive) {
        $setSelection(null);
        return;
      }
      if (!isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
        return;
      }
      var selection = $getSelection();

      // Update the selection format
      if ($isRangeSelection(selection)) {
        var anchor = selection.anchor;
        var anchorNode = anchor.getNode();
        if (selection.isCollapsed()) {
          // Badly interpreted range selection when collapsed - #1482
          if (domSelection.type === 'Range' && domSelection.anchorNode === domSelection.focusNode) {
            selection.dirty = true;
          }

          // If we have marked a collapsed selection format, and we're
          // within the given time range – then attempt to use that format
          // instead of getting the format from the anchor node.
          var windowEvent = getWindow(editor).event;
          var currentTimeStamp = windowEvent ? windowEvent.timeStamp : performance.now();
          var _collapsedSelectionFo = collapsedSelectionFormat,
            _collapsedSelectionFo2 = _slicedToArray(_collapsedSelectionFo, 5),
            lastFormat = _collapsedSelectionFo2[0],
            lastStyle = _collapsedSelectionFo2[1],
            lastOffset = _collapsedSelectionFo2[2],
            lastKey = _collapsedSelectionFo2[3],
            timeStamp = _collapsedSelectionFo2[4];
          var root = $getRoot();
          var isRootTextContentEmpty = editor.isComposing() === false && root.getTextContent() === '';
          if (currentTimeStamp < timeStamp + 200 && anchor.offset === lastOffset && anchor.key === lastKey) {
            selection.format = lastFormat;
            selection.style = lastStyle;
          } else {
            if (anchor.type === 'text') {
              if (!$isTextNode(anchorNode)) {
                throw Error("Point.getNode() must return TextNode when type is text");
              }
              selection.format = anchorNode.getFormat();
              selection.style = anchorNode.getStyle();
            } else if (anchor.type === 'element' && !isRootTextContentEmpty) {
              var lastNode = anchor.getNode();
              if (lastNode instanceof ParagraphNode && lastNode.getChildrenSize() === 0) {
                selection.format = lastNode.getTextFormat();
              } else {
                selection.format = 0;
              }
              selection.style = '';
            }
          }
        } else {
          var anchorKey = anchor.key;
          var focus = selection.focus;
          var focusKey = focus.key;
          var nodes = selection.getNodes();
          var nodesLength = nodes.length;
          var isBackward = selection.isBackward();
          var startOffset = isBackward ? focusOffset : anchorOffset;
          var endOffset = isBackward ? anchorOffset : focusOffset;
          var startKey = isBackward ? focusKey : anchorKey;
          var endKey = isBackward ? anchorKey : focusKey;
          var combinedFormat = IS_ALL_FORMATTING;
          var hasTextNodes = false;
          for (var i = 0; i < nodesLength; i++) {
            var node = nodes[i];
            var textContentSize = node.getTextContentSize();
            if ($isTextNode(node) && textContentSize !== 0 &&
            // Exclude empty text nodes at boundaries resulting from user's selection
            !(i === 0 && node.__key === startKey && startOffset === textContentSize || i === nodesLength - 1 && node.__key === endKey && endOffset === 0)) {
              // TODO: what about style?
              hasTextNodes = true;
              combinedFormat &= node.getFormat();
              if (combinedFormat === 0) {
                break;
              }
            }
          }
          selection.format = hasTextNodes ? combinedFormat : 0;
        }
      }
      _dispatchCommand(editor, SELECTION_CHANGE_COMMAND, undefined);
    });
  }

  // This is a work-around is mainly Chrome specific bug where if you select
  // the contents of an empty block, you cannot easily unselect anything.
  // This results in a tiny selection box that looks buggy/broken. This can
  // also help other browsers when selection might "appear" lost, when it
  // really isn't.
  function onClick(event, editor) {
    updateEditor(editor, function () {
      var selection = $getSelection();
      var domSelection = getDOMSelection(editor._window);
      var lastSelection = $getPreviousSelection();
      if (domSelection) {
        if ($isRangeSelection(selection)) {
          var anchor = selection.anchor;
          var anchorNode = anchor.getNode();
          if (anchor.type === 'element' && anchor.offset === 0 && selection.isCollapsed() && !$isRootNode(anchorNode) && $getRoot().getChildrenSize() === 1 && anchorNode.getTopLevelElementOrThrow().isEmpty() && lastSelection !== null && selection.is(lastSelection)) {
            domSelection.removeAllRanges();
            selection.dirty = true;
          } else if (event.detail === 3 && !selection.isCollapsed()) {
            // Tripple click causing selection to overflow into the nearest element. In that
            // case visually it looks like a single element content is selected, focus node
            // is actually at the beginning of the next element (if present) and any manipulations
            // with selection (formatting) are affecting second element as well
            var focus = selection.focus;
            var focusNode = focus.getNode();
            if (anchorNode !== focusNode) {
              if ($isElementNode(anchorNode)) {
                anchorNode.select(0);
              } else {
                anchorNode.getParentOrThrow().select(0);
              }
            }
          }
        } else if (event.pointerType === 'touch') {
          // This is used to update the selection on touch devices when the user clicks on text after a
          // node selection. See isSelectionChangeFromMouseDown for the inverse
          var domAnchorNode = domSelection.anchorNode;
          if (domAnchorNode !== null) {
            var nodeType = domAnchorNode.nodeType;
            // If the user is attempting to click selection back onto text, then
            // we should attempt create a range selection.
            // When we click on an empty paragraph node or the end of a paragraph that ends
            // with an image/poll, the nodeType will be ELEMENT_NODE
            if (nodeType === DOM_ELEMENT_TYPE || nodeType === DOM_TEXT_TYPE) {
              var newSelection = $internalCreateRangeSelection(lastSelection, domSelection, editor, event);
              $setSelection(newSelection);
            }
          }
        }
      }
      _dispatchCommand(editor, CLICK_COMMAND, event);
    });
  }
  function onPointerDown(event, editor) {
    // TODO implement text drag & drop
    var target = event.target;
    var pointerType = event.pointerType;
    if (target instanceof Node && pointerType !== 'touch') {
      updateEditor(editor, function () {
        // Drag & drop should not recompute selection until mouse up; otherwise the initially
        // selected content is lost.
        if (!$isSelectionCapturedInDecorator(target)) {
          isSelectionChangeFromMouseDown = true;
        }
      });
    }
  }
  function getTargetRange(event) {
    if (!event.getTargetRanges) {
      return null;
    }
    var targetRanges = event.getTargetRanges();
    if (targetRanges.length === 0) {
      return null;
    }
    return targetRanges[0];
  }
  function $canRemoveText(anchorNode, focusNode) {
    return anchorNode !== focusNode || $isElementNode(anchorNode) || $isElementNode(focusNode) || !anchorNode.isToken() || !focusNode.isToken();
  }
  function isPossiblyAndroidKeyPress(timeStamp) {
    return lastKeyCode === 'MediaLast' && timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY;
  }
  function onBeforeInput(event, editor) {
    var inputType = event.inputType;
    var targetRange = getTargetRange(event);

    // We let the browser do its own thing for composition.
    if (inputType === 'deleteCompositionText' ||
    // If we're pasting in FF, we shouldn't get this event
    // as the `paste` event should have triggered, unless the
    // user has dom.event.clipboardevents.enabled disabled in
    // about:config. In that case, we need to process the
    // pasted content in the DOM mutation phase.
    IS_FIREFOX && isFirefoxClipboardEvents(editor)) {
      return;
    } else if (inputType === 'insertCompositionText') {
      return;
    }
    updateEditor(editor, function () {
      var selection = $getSelection();
      if (inputType === 'deleteContentBackward') {
        if (selection === null) {
          // Use previous selection
          var prevSelection = $getPreviousSelection();
          if (!$isRangeSelection(prevSelection)) {
            return;
          }
          $setSelection(prevSelection.clone());
        }
        if ($isRangeSelection(selection)) {
          var isSelectionAnchorSameAsFocus = selection.anchor.key === selection.focus.key;
          if (isPossiblyAndroidKeyPress(event.timeStamp) && editor.isComposing() && isSelectionAnchorSameAsFocus) {
            $setCompositionKey(null);
            lastKeyDownTimeStamp = 0;
            // Fixes an Android bug where selection flickers when backspacing
            setTimeout(function () {
              updateEditor(editor, function () {
                $setCompositionKey(null);
              });
            }, ANDROID_COMPOSITION_LATENCY);
            if ($isRangeSelection(selection)) {
              var _anchorNode = selection.anchor.getNode();
              _anchorNode.markDirty();
              selection.format = _anchorNode.getFormat();
              if (!$isTextNode(_anchorNode)) {
                throw Error("Anchor node must be a TextNode");
              }
              selection.style = _anchorNode.getStyle();
            }
          } else {
            $setCompositionKey(null);
            event.preventDefault();
            // Chromium Android at the moment seems to ignore the preventDefault
            // on 'deleteContentBackward' and still deletes the content. Which leads
            // to multiple deletions. So we let the browser handle the deletion in this case.
            var selectedNodeText = selection.anchor.getNode().getTextContent();
            var hasSelectedAllTextInNode = selection.anchor.offset === 0 && selection.focus.offset === selectedNodeText.length;
            var shouldLetBrowserHandleDelete = IS_ANDROID_CHROME && isSelectionAnchorSameAsFocus && !hasSelectedAllTextInNode;
            if (!shouldLetBrowserHandleDelete) {
              _dispatchCommand(editor, DELETE_CHARACTER_COMMAND, true);
            }
          }
          return;
        }
      }
      if (!$isRangeSelection(selection)) {
        return;
      }
      var data = event.data;

      // This represents the case when two beforeinput events are triggered at the same time (without a
      // full event loop ending at input). This happens with MacOS with the default keyboard settings,
      // a combination of autocorrection + autocapitalization.
      // Having Lexical run everything in controlled mode would fix the issue without additional code
      // but this would kill the massive performance win from the most common typing event.
      // Alternatively, when this happens we can prematurely update our EditorState based on the DOM
      // content, a job that would usually be the input event's responsibility.
      if (unprocessedBeforeInputData !== null) {
        $updateSelectedTextFromDOM(false, editor, unprocessedBeforeInputData);
      }
      if ((!selection.dirty || unprocessedBeforeInputData !== null) && selection.isCollapsed() && !$isRootNode(selection.anchor.getNode()) && targetRange !== null) {
        selection.applyDOMRange(targetRange);
      }
      unprocessedBeforeInputData = null;
      var anchor = selection.anchor;
      var focus = selection.focus;
      var anchorNode = anchor.getNode();
      var focusNode = focus.getNode();
      if (inputType === 'insertText' || inputType === 'insertTranspose') {
        if (data === '\n') {
          event.preventDefault();
          _dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
        } else if (data === DOUBLE_LINE_BREAK) {
          event.preventDefault();
          _dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND, undefined);
        } else if (data == null && event.dataTransfer) {
          // Gets around a Safari text replacement bug.
          var text = event.dataTransfer.getData('text/plain');
          event.preventDefault();
          selection.insertRawText(text);
        } else if (data != null && $shouldPreventDefaultAndInsertText(selection, targetRange, data, event.timeStamp, true)) {
          event.preventDefault();
          _dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, data);
        } else {
          unprocessedBeforeInputData = data;
        }
        lastBeforeInputInsertTextTimeStamp = event.timeStamp;
        return;
      }

      // Prevent the browser from carrying out
      // the input event, so we can control the
      // output.
      event.preventDefault();
      switch (inputType) {
        case 'insertFromYank':
        case 'insertFromDrop':
        case 'insertReplacementText':
          {
            _dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, event);
            break;
          }
        case 'insertFromComposition':
          {
            // This is the end of composition
            $setCompositionKey(null);
            _dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, event);
            break;
          }
        case 'insertLineBreak':
          {
            // Used for Android
            $setCompositionKey(null);
            _dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
            break;
          }
        case 'insertParagraph':
          {
            // Used for Android
            $setCompositionKey(null);

            // Safari does not provide the type "insertLineBreak".
            // So instead, we need to infer it from the keyboard event.
            // We do not apply this logic to iOS to allow newline auto-capitalization
            // work without creating linebreaks when pressing Enter
            if (isInsertLineBreak && !IS_IOS) {
              isInsertLineBreak = false;
              _dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, false);
            } else {
              _dispatchCommand(editor, INSERT_PARAGRAPH_COMMAND, undefined);
            }
            break;
          }
        case 'insertFromPaste':
        case 'insertFromPasteAsQuotation':
          {
            _dispatchCommand(editor, PASTE_COMMAND, event);
            break;
          }
        case 'deleteByComposition':
          {
            if ($canRemoveText(anchorNode, focusNode)) {
              _dispatchCommand(editor, REMOVE_TEXT_COMMAND, event);
            }
            break;
          }
        case 'deleteByDrag':
        case 'deleteByCut':
          {
            _dispatchCommand(editor, REMOVE_TEXT_COMMAND, event);
            break;
          }
        case 'deleteContent':
          {
            _dispatchCommand(editor, DELETE_CHARACTER_COMMAND, false);
            break;
          }
        case 'deleteWordBackward':
          {
            _dispatchCommand(editor, DELETE_WORD_COMMAND, true);
            break;
          }
        case 'deleteWordForward':
          {
            _dispatchCommand(editor, DELETE_WORD_COMMAND, false);
            break;
          }
        case 'deleteHardLineBackward':
        case 'deleteSoftLineBackward':
          {
            _dispatchCommand(editor, DELETE_LINE_COMMAND, true);
            break;
          }
        case 'deleteContentForward':
        case 'deleteHardLineForward':
        case 'deleteSoftLineForward':
          {
            _dispatchCommand(editor, DELETE_LINE_COMMAND, false);
            break;
          }
        case 'formatStrikeThrough':
          {
            _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'strikethrough');
            break;
          }
        case 'formatBold':
          {
            _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'bold');
            break;
          }
        case 'formatItalic':
          {
            _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'italic');
            break;
          }
        case 'formatUnderline':
          {
            _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'underline');
            break;
          }
        case 'historyUndo':
          {
            _dispatchCommand(editor, UNDO_COMMAND, undefined);
            break;
          }
        case 'historyRedo':
          {
            _dispatchCommand(editor, REDO_COMMAND, undefined);
            break;
          }
        // NO-OP
      }
    });
  }
  function onInput(event, editor) {
    // We don't want the onInput to bubble, in the case of nested editors.
    event.stopPropagation();
    updateEditor(editor, function () {
      var selection = $getSelection();
      var data = event.data;
      var targetRange = getTargetRange(event);
      if (data != null && $isRangeSelection(selection) && $shouldPreventDefaultAndInsertText(selection, targetRange, data, event.timeStamp, false)) {
        // Given we're over-riding the default behavior, we will need
        // to ensure to disable composition before dispatching the
        // insertText command for when changing the sequence for FF.
        if (isFirefoxEndingComposition) {
          $onCompositionEndImpl(editor, data);
          isFirefoxEndingComposition = false;
        }
        var anchor = selection.anchor;
        var anchorNode = anchor.getNode();
        var domSelection = getDOMSelection(editor._window);
        if (domSelection === null) {
          return;
        }
        var isBackward = selection.isBackward();
        var startOffset = isBackward ? selection.anchor.offset : selection.focus.offset;
        var endOffset = isBackward ? selection.focus.offset : selection.anchor.offset;
        // If the content is the same as inserted, then don't dispatch an insertion.
        // Given onInput doesn't take the current selection (it uses the previous)
        // we can compare that against what the DOM currently says.
        if (!CAN_USE_BEFORE_INPUT || selection.isCollapsed() || !$isTextNode(anchorNode) || domSelection.anchorNode === null || anchorNode.getTextContent().slice(0, startOffset) + data + anchorNode.getTextContent().slice(startOffset + endOffset) !== getAnchorTextFromDOM(domSelection.anchorNode)) {
          _dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, data);
        }
        var textLength = data.length;

        // Another hack for FF, as it's possible that the IME is still
        // open, even though compositionend has already fired (sigh).
        if (IS_FIREFOX && textLength > 1 && event.inputType === 'insertCompositionText' && !editor.isComposing()) {
          selection.anchor.offset -= textLength;
        }

        // This ensures consistency on Android.
        if (!IS_SAFARI && !IS_IOS && !IS_APPLE_WEBKIT && editor.isComposing()) {
          lastKeyDownTimeStamp = 0;
          $setCompositionKey(null);
        }
      } else {
        var characterData = data !== null ? data : undefined;
        $updateSelectedTextFromDOM(false, editor, characterData);

        // onInput always fires after onCompositionEnd for FF.
        if (isFirefoxEndingComposition) {
          $onCompositionEndImpl(editor, data || undefined);
          isFirefoxEndingComposition = false;
        }
      }

      // Also flush any other mutations that might have occurred
      // since the change.
      $flushMutations();
    });
    unprocessedBeforeInputData = null;
  }
  function onCompositionStart(event, editor) {
    updateEditor(editor, function () {
      var selection = $getSelection();
      if ($isRangeSelection(selection) && !editor.isComposing()) {
        var anchor = selection.anchor;
        var node = selection.anchor.getNode();
        $setCompositionKey(anchor.key);
        if (
        // If it has been 30ms since the last keydown, then we should
        // apply the empty space heuristic. We can't do this for Safari,
        // as the keydown fires after composition start.
        event.timeStamp < lastKeyDownTimeStamp + ANDROID_COMPOSITION_LATENCY ||
        // FF has issues around composing multibyte characters, so we also
        // need to invoke the empty space heuristic below.
        anchor.type === 'element' || !selection.isCollapsed() || node.getFormat() !== selection.format || $isTextNode(node) && node.getStyle() !== selection.style) {
          // We insert a zero width character, ready for the composition
          // to get inserted into the new node we create. If
          // we don't do this, Safari will fail on us because
          // there is no text node matching the selection.
          _dispatchCommand(editor, CONTROLLED_TEXT_INSERTION_COMMAND, COMPOSITION_START_CHAR);
        }
      }
    });
  }
  function $onCompositionEndImpl(editor, data) {
    var compositionKey = editor._compositionKey;
    $setCompositionKey(null);

    // Handle termination of composition.
    if (compositionKey !== null && data != null) {
      // Composition can sometimes move to an adjacent DOM node when backspacing.
      // So check for the empty case.
      if (data === '') {
        var node = $getNodeByKey(compositionKey);
        var textNode = getDOMTextNode(editor.getElementByKey(compositionKey));
        if (textNode !== null && textNode.nodeValue !== null && $isTextNode(node)) {
          $updateTextNodeFromDOMContent(node, textNode.nodeValue, null, null, true);
        }
        return;
      }

      // Composition can sometimes be that of a new line. In which case, we need to
      // handle that accordingly.
      if (data[data.length - 1] === '\n') {
        var selection = $getSelection();
        if ($isRangeSelection(selection)) {
          // If the last character is a line break, we also need to insert
          // a line break.
          var focus = selection.focus;
          selection.anchor.set(focus.key, focus.offset, focus.type);
          _dispatchCommand(editor, KEY_ENTER_COMMAND, null);
          return;
        }
      }
    }
    $updateSelectedTextFromDOM(true, editor, data);
  }
  function onCompositionEnd(event, editor) {
    // Firefox fires onCompositionEnd before onInput, but Chrome/Webkit,
    // fire onInput before onCompositionEnd. To ensure the sequence works
    // like Chrome/Webkit we use the isFirefoxEndingComposition flag to
    // defer handling of onCompositionEnd in Firefox till we have processed
    // the logic in onInput.
    if (IS_FIREFOX) {
      isFirefoxEndingComposition = true;
    } else {
      updateEditor(editor, function () {
        $onCompositionEndImpl(editor, event.data);
      });
    }
  }
  function onKeyDown(event, editor) {
    lastKeyDownTimeStamp = event.timeStamp;
    lastKeyCode = event.key;
    if (editor.isComposing()) {
      return;
    }
    var key = event.key,
      shiftKey = event.shiftKey,
      ctrlKey = event.ctrlKey,
      metaKey = event.metaKey,
      altKey = event.altKey;
    if (_dispatchCommand(editor, KEY_DOWN_COMMAND, event)) {
      return;
    }
    if (key == null) {
      return;
    }
    if (isMoveForward(key, ctrlKey, altKey, metaKey)) {
      _dispatchCommand(editor, KEY_ARROW_RIGHT_COMMAND, event);
    } else if (isMoveToEnd(key, ctrlKey, shiftKey, altKey, metaKey)) {
      _dispatchCommand(editor, MOVE_TO_END, event);
    } else if (isMoveBackward(key, ctrlKey, altKey, metaKey)) {
      _dispatchCommand(editor, KEY_ARROW_LEFT_COMMAND, event);
    } else if (isMoveToStart(key, ctrlKey, shiftKey, altKey, metaKey)) {
      _dispatchCommand(editor, MOVE_TO_START, event);
    } else if (isMoveUp(key, ctrlKey, metaKey)) {
      _dispatchCommand(editor, KEY_ARROW_UP_COMMAND, event);
    } else if (isMoveDown(key, ctrlKey, metaKey)) {
      _dispatchCommand(editor, KEY_ARROW_DOWN_COMMAND, event);
    } else if (isLineBreak(key, shiftKey)) {
      isInsertLineBreak = true;
      _dispatchCommand(editor, KEY_ENTER_COMMAND, event);
    } else if (isSpace(key)) {
      _dispatchCommand(editor, KEY_SPACE_COMMAND, event);
    } else if (isOpenLineBreak(key, ctrlKey)) {
      event.preventDefault();
      isInsertLineBreak = true;
      _dispatchCommand(editor, INSERT_LINE_BREAK_COMMAND, true);
    } else if (isParagraph(key, shiftKey)) {
      isInsertLineBreak = false;
      _dispatchCommand(editor, KEY_ENTER_COMMAND, event);
    } else if (isDeleteBackward(key, altKey, metaKey, ctrlKey)) {
      if (isBackspace(key)) {
        _dispatchCommand(editor, KEY_BACKSPACE_COMMAND, event);
      } else {
        event.preventDefault();
        _dispatchCommand(editor, DELETE_CHARACTER_COMMAND, true);
      }
    } else if (isEscape(key)) {
      _dispatchCommand(editor, KEY_ESCAPE_COMMAND, event);
    } else if (isDeleteForward(key, ctrlKey, shiftKey, altKey, metaKey)) {
      if (isDelete(key)) {
        _dispatchCommand(editor, KEY_DELETE_COMMAND, event);
      } else {
        event.preventDefault();
        _dispatchCommand(editor, DELETE_CHARACTER_COMMAND, false);
      }
    } else if (isDeleteWordBackward(key, altKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, DELETE_WORD_COMMAND, true);
    } else if (isDeleteWordForward(key, altKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, DELETE_WORD_COMMAND, false);
    } else if (isDeleteLineBackward(key, metaKey)) {
      event.preventDefault();
      _dispatchCommand(editor, DELETE_LINE_COMMAND, true);
    } else if (isDeleteLineForward(key, metaKey)) {
      event.preventDefault();
      _dispatchCommand(editor, DELETE_LINE_COMMAND, false);
    } else if (isBold(key, altKey, metaKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'bold');
    } else if (isUnderline(key, altKey, metaKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'underline');
    } else if (isItalic(key, altKey, metaKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, FORMAT_TEXT_COMMAND, 'italic');
    } else if (isTab(key, altKey, ctrlKey, metaKey)) {
      _dispatchCommand(editor, KEY_TAB_COMMAND, event);
    } else if (isUndo(key, shiftKey, metaKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, UNDO_COMMAND, undefined);
    } else if (isRedo(key, shiftKey, metaKey, ctrlKey)) {
      event.preventDefault();
      _dispatchCommand(editor, REDO_COMMAND, undefined);
    } else {
      var prevSelection = editor._editorState._selection;
      if ($isNodeSelection(prevSelection)) {
        if (isCopy(key, shiftKey, metaKey, ctrlKey)) {
          event.preventDefault();
          _dispatchCommand(editor, COPY_COMMAND, event);
        } else if (isCut(key, shiftKey, metaKey, ctrlKey)) {
          event.preventDefault();
          _dispatchCommand(editor, CUT_COMMAND, event);
        } else if (isSelectAll(key, metaKey, ctrlKey)) {
          event.preventDefault();
          _dispatchCommand(editor, SELECT_ALL_COMMAND, event);
        }
        // FF does it well (no need to override behavior)
      } else if (!IS_FIREFOX && isSelectAll(key, metaKey, ctrlKey)) {
        event.preventDefault();
        _dispatchCommand(editor, SELECT_ALL_COMMAND, event);
      }
    }
    if (isModifier(ctrlKey, shiftKey, altKey, metaKey)) {
      _dispatchCommand(editor, KEY_MODIFIER_COMMAND, event);
    }
  }
  function getRootElementRemoveHandles(rootElement) {
    // @ts-expect-error: internal field
    var eventHandles = rootElement.__lexicalEventHandles;
    if (eventHandles === undefined) {
      eventHandles = [];
      // @ts-expect-error: internal field
      rootElement.__lexicalEventHandles = eventHandles;
    }
    return eventHandles;
  }

  // Mapping root editors to their active nested editors, contains nested editors
  // mapping only, so if root editor is selected map will have no reference to free up memory
  var activeNestedEditorsMap = new Map();
  function onDocumentSelectionChange(event) {
    var target = event.target;
    var targetWindow = target == null ? null : target.nodeType === 9 ? target.defaultView : target.ownerDocument.defaultView;
    var domSelection = getDOMSelection(targetWindow);
    if (domSelection === null) {
      return;
    }
    var nextActiveEditor = getNearestEditorFromDOMNode(domSelection.anchorNode);
    if (nextActiveEditor === null) {
      return;
    }
    if (isSelectionChangeFromMouseDown) {
      isSelectionChangeFromMouseDown = false;
      updateEditor(nextActiveEditor, function () {
        var lastSelection = $getPreviousSelection();
        var domAnchorNode = domSelection.anchorNode;
        if (domAnchorNode === null) {
          return;
        }
        var nodeType = domAnchorNode.nodeType;
        // If the user is attempting to click selection back onto text, then
        // we should attempt create a range selection.
        // When we click on an empty paragraph node or the end of a paragraph that ends
        // with an image/poll, the nodeType will be ELEMENT_NODE
        if (nodeType !== DOM_ELEMENT_TYPE && nodeType !== DOM_TEXT_TYPE) {
          return;
        }
        var newSelection = $internalCreateRangeSelection(lastSelection, domSelection, nextActiveEditor, event);
        $setSelection(newSelection);
      });
    }

    // When editor receives selection change event, we're checking if
    // it has any sibling editors (within same parent editor) that were active
    // before, and trigger selection change on it to nullify selection.
    var editors = getEditorsToPropagate(nextActiveEditor);
    var rootEditor = editors[editors.length - 1];
    var rootEditorKey = rootEditor._key;
    var activeNestedEditor = activeNestedEditorsMap.get(rootEditorKey);
    var prevActiveEditor = activeNestedEditor || rootEditor;
    if (prevActiveEditor !== nextActiveEditor) {
      onSelectionChange(domSelection, prevActiveEditor, false);
    }
    onSelectionChange(domSelection, nextActiveEditor, true);

    // If newly selected editor is nested, then add it to the map, clean map otherwise
    if (nextActiveEditor !== rootEditor) {
      activeNestedEditorsMap.set(rootEditorKey, nextActiveEditor);
    } else if (activeNestedEditor) {
      activeNestedEditorsMap["delete"](rootEditorKey);
    }
  }
  function stopLexicalPropagation(event) {
    // We attach a special property to ensure the same event doesn't re-fire
    // for parent editors.
    // @ts-ignore
    event._lexicalHandled = true;
  }
  function hasStoppedLexicalPropagation(event) {
    // @ts-ignore
    var stopped = event._lexicalHandled === true;
    return stopped;
  }
  function addRootElementEvents(rootElement, editor) {
    // We only want to have a single global selectionchange event handler, shared
    // between all editor instances.
    var doc = rootElement.ownerDocument;
    var documentRootElementsCount = rootElementsRegistered.get(doc);
    if (documentRootElementsCount === undefined || documentRootElementsCount < 1) {
      doc.addEventListener('selectionchange', onDocumentSelectionChange);
    }
    rootElementsRegistered.set(doc, (documentRootElementsCount || 0) + 1);

    // @ts-expect-error: internal field
    rootElement.__lexicalEditor = editor;
    var removeHandles = getRootElementRemoveHandles(rootElement);
    var _loop = function _loop() {
      var _rootElementEvents$i = _slicedToArray(rootElementEvents[i], 2),
        eventName = _rootElementEvents$i[0],
        onEvent = _rootElementEvents$i[1];
      var eventHandler = typeof onEvent === 'function' ? function (event) {
        if (hasStoppedLexicalPropagation(event)) {
          return;
        }
        stopLexicalPropagation(event);
        if (editor.isEditable() || eventName === 'click') {
          onEvent(event, editor);
        }
      } : function (event) {
        if (hasStoppedLexicalPropagation(event)) {
          return;
        }
        stopLexicalPropagation(event);
        var isEditable = editor.isEditable();
        switch (eventName) {
          case 'cut':
            return isEditable && _dispatchCommand(editor, CUT_COMMAND, event);
          case 'copy':
            return _dispatchCommand(editor, COPY_COMMAND, event);
          case 'paste':
            return isEditable && _dispatchCommand(editor, PASTE_COMMAND, event);
          case 'dragstart':
            return isEditable && _dispatchCommand(editor, DRAGSTART_COMMAND, event);
          case 'dragover':
            return isEditable && _dispatchCommand(editor, DRAGOVER_COMMAND, event);
          case 'dragend':
            return isEditable && _dispatchCommand(editor, DRAGEND_COMMAND, event);
          case 'focus':
            return isEditable && _dispatchCommand(editor, FOCUS_COMMAND, event);
          case 'blur':
            {
              return isEditable && _dispatchCommand(editor, BLUR_COMMAND, event);
            }
          case 'drop':
            return isEditable && _dispatchCommand(editor, DROP_COMMAND, event);
        }
      };
      rootElement.addEventListener(eventName, eventHandler);
      removeHandles.push(function () {
        rootElement.removeEventListener(eventName, eventHandler);
      });
    };
    for (var i = 0; i < rootElementEvents.length; i++) {
      _loop();
    }
  }
  function removeRootElementEvents(rootElement) {
    var doc = rootElement.ownerDocument;
    var documentRootElementsCount = rootElementsRegistered.get(doc);
    if (!(documentRootElementsCount !== undefined)) {
      throw Error("Root element not registered");
    } // We only want to have a single global selectionchange event handler, shared
    // between all editor instances.
    var newCount = documentRootElementsCount - 1;
    if (!(newCount >= 0)) {
      throw Error("Root element count less than 0");
    }
    rootElementsRegistered.set(doc, newCount);
    if (newCount === 0) {
      doc.removeEventListener('selectionchange', onDocumentSelectionChange);
    }

    // @ts-expect-error: internal field
    var editor = rootElement.__lexicalEditor;
    if (editor !== null && editor !== undefined) {
      cleanActiveNestedEditorsMap(editor);
      // @ts-expect-error: internal field
      rootElement.__lexicalEditor = null;
    }
    var removeHandles = getRootElementRemoveHandles(rootElement);
    for (var i = 0; i < removeHandles.length; i++) {
      removeHandles[i]();
    }

    // @ts-expect-error: internal field
    rootElement.__lexicalEventHandles = [];
  }
  function cleanActiveNestedEditorsMap(editor) {
    if (editor._parentEditor !== null) {
      // For nested editor cleanup map if this editor was marked as active
      var editors = getEditorsToPropagate(editor);
      var rootEditor = editors[editors.length - 1];
      var rootEditorKey = rootEditor._key;
      if (activeNestedEditorsMap.get(rootEditorKey) === editor) {
        activeNestedEditorsMap["delete"](rootEditorKey);
      }
    } else {
      // For top-level editors cleanup map
      activeNestedEditorsMap["delete"](editor._key);
    }
  }
  function markSelectionChangeFromDOMUpdate() {
    isSelectionChangeFromDOMUpdate = true;
  }
  function markCollapsedSelectionFormat(format, style, offset, key, timeStamp) {
    collapsedSelectionFormat = [format, style, offset, key, timeStamp];
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  function $removeNode(nodeToRemove, restoreSelection, preserveEmptyParent) {
    errorOnReadOnly();
    var key = nodeToRemove.__key;
    var parent = nodeToRemove.getParent();
    if (parent === null) {
      return;
    }
    var selection = $maybeMoveChildrenSelectionToParent(nodeToRemove);
    var selectionMoved = false;
    if ($isRangeSelection(selection) && restoreSelection) {
      var anchor = selection.anchor;
      var focus = selection.focus;
      if (anchor.key === key) {
        moveSelectionPointToSibling(anchor, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
        selectionMoved = true;
      }
      if (focus.key === key) {
        moveSelectionPointToSibling(focus, nodeToRemove, parent, nodeToRemove.getPreviousSibling(), nodeToRemove.getNextSibling());
        selectionMoved = true;
      }
    } else if ($isNodeSelection(selection) && restoreSelection && nodeToRemove.isSelected()) {
      nodeToRemove.selectPrevious();
    }
    if ($isRangeSelection(selection) && restoreSelection && !selectionMoved) {
      // Doing this is O(n) so lets avoid it unless we need to do it
      var index = nodeToRemove.getIndexWithinParent();
      removeFromParent(nodeToRemove);
      $updateElementSelectionOnCreateDeleteNode(selection, parent, index, -1);
    } else {
      removeFromParent(nodeToRemove);
    }
    if (!preserveEmptyParent && !$isRootOrShadowRoot(parent) && !parent.canBeEmpty() && parent.isEmpty()) {
      $removeNode(parent, restoreSelection);
    }
    if (restoreSelection && $isRootNode(parent) && parent.isEmpty()) {
      parent.selectEnd();
    }
  }
  var LexicalNode = /*#__PURE__*/function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    function LexicalNode(key) {
      _classCallCheck(this, LexicalNode);
      this.__type = this.constructor.getType();
      this.__parent = null;
      this.__prev = null;
      this.__next = null;
      $setNodeKey(this, key);
      {
        if (this.__type !== 'root') {
          errorOnReadOnly();
          errorOnTypeKlassMismatch(this.__type, this.constructor);
        }
      }
    }
    // Getters and Traversers

    /**
     * Returns the string type of this node.
     */
    return _createClass(LexicalNode, [{
      key: "getType",
      value: function getType() {
        return this.__type;
      }
    }, {
      key: "isInline",
      value: function isInline() {
        {
          throw Error("LexicalNode: Node ".concat(this.constructor.name, " does not implement .isInline()."));
        }
      }

      /**
       * Returns true if there is a path between this node and the RootNode, false otherwise.
       * This is a way of determining if the node is "attached" EditorState. Unattached nodes
       * won't be reconciled and will ultimatelt be cleaned up by the Lexical GC.
       */
    }, {
      key: "isAttached",
      value: function isAttached() {
        var nodeKey = this.__key;
        while (nodeKey !== null) {
          if (nodeKey === 'root') {
            return true;
          }
          var node = $getNodeByKey(nodeKey);
          if (node === null) {
            break;
          }
          nodeKey = node.__parent;
        }
        return false;
      }

      /**
       * Returns true if this node is contained within the provided Selection., false otherwise.
       * Relies on the algorithms implemented in {@link BaseSelection.getNodes} to determine
       * what's included.
       *
       * @param selection - The selection that we want to determine if the node is in.
       */
    }, {
      key: "isSelected",
      value: function isSelected(selection) {
        var _this = this;
        var targetSelection = selection || $getSelection();
        if (targetSelection == null) {
          return false;
        }
        var isSelected = targetSelection.getNodes().some(function (n) {
          return n.__key === _this.__key;
        });
        if ($isTextNode(this)) {
          return isSelected;
        }
        // For inline images inside of element nodes.
        // Without this change the image will be selected if the cursor is before or after it.
        if ($isRangeSelection(targetSelection) && targetSelection.anchor.type === 'element' && targetSelection.focus.type === 'element' && targetSelection.anchor.key === targetSelection.focus.key && targetSelection.anchor.offset === targetSelection.focus.offset) {
          return false;
        }
        return isSelected;
      }

      /**
       * Returns this nodes key.
       */
    }, {
      key: "getKey",
      value: function getKey() {
        // Key is stable between copies
        return this.__key;
      }

      /**
       * Returns the zero-based index of this node within the parent.
       */
    }, {
      key: "getIndexWithinParent",
      value: function getIndexWithinParent() {
        var parent = this.getParent();
        if (parent === null) {
          return -1;
        }
        var node = parent.getFirstChild();
        var index = 0;
        while (node !== null) {
          if (this.is(node)) {
            return index;
          }
          index++;
          node = node.getNextSibling();
        }
        return -1;
      }

      /**
       * Returns the parent of this node, or null if none is found.
       */
    }, {
      key: "getParent",
      value: function getParent() {
        var parent = this.getLatest().__parent;
        if (parent === null) {
          return null;
        }
        return $getNodeByKey(parent);
      }

      /**
       * Returns the parent of this node, or throws if none is found.
       */
    }, {
      key: "getParentOrThrow",
      value: function getParentOrThrow() {
        var parent = this.getParent();
        if (parent === null) {
          {
            throw Error("Expected node ".concat(this.__key, " to have a parent."));
          }
        }
        return parent;
      }

      /**
       * Returns the highest (in the EditorState tree)
       * non-root ancestor of this node, or null if none is found. See {@link lexical!$isRootOrShadowRoot}
       * for more information on which Elements comprise "roots".
       */
    }, {
      key: "getTopLevelElement",
      value: function getTopLevelElement() {
        var node = this;
        while (node !== null) {
          var parent = node.getParent();
          if ($isRootOrShadowRoot(parent)) {
            if (!$isElementNode(node)) {
              throw Error("Children of root nodes must be elements");
            }
            return node;
          }
          node = parent;
        }
        return null;
      }

      /**
       * Returns the highest (in the EditorState tree)
       * non-root ancestor of this node, or throws if none is found. See {@link lexical!$isRootOrShadowRoot}
       * for more information on which Elements comprise "roots".
       */
    }, {
      key: "getTopLevelElementOrThrow",
      value: function getTopLevelElementOrThrow() {
        var parent = this.getTopLevelElement();
        if (parent === null) {
          {
            throw Error("Expected node ".concat(this.__key, " to have a top parent element."));
          }
        }
        return parent;
      }

      /**
       * Returns a list of the every ancestor of this node,
       * all the way up to the RootNode.
       *
       */
    }, {
      key: "getParents",
      value: function getParents() {
        var parents = [];
        var node = this.getParent();
        while (node !== null) {
          parents.push(node);
          node = node.getParent();
        }
        return parents;
      }

      /**
       * Returns a list of the keys of every ancestor of this node,
       * all the way up to the RootNode.
       *
       */
    }, {
      key: "getParentKeys",
      value: function getParentKeys() {
        var parents = [];
        var node = this.getParent();
        while (node !== null) {
          parents.push(node.__key);
          node = node.getParent();
        }
        return parents;
      }

      /**
       * Returns the "previous" siblings - that is, the node that comes
       * before this one in the same parent.
       *
       */
    }, {
      key: "getPreviousSibling",
      value: function getPreviousSibling() {
        var self = this.getLatest();
        var prevKey = self.__prev;
        return prevKey === null ? null : $getNodeByKey(prevKey);
      }

      /**
       * Returns the "previous" siblings - that is, the nodes that come between
       * this one and the first child of it's parent, inclusive.
       *
       */
    }, {
      key: "getPreviousSiblings",
      value: function getPreviousSiblings() {
        var siblings = [];
        var parent = this.getParent();
        if (parent === null) {
          return siblings;
        }
        var node = parent.getFirstChild();
        while (node !== null) {
          if (node.is(this)) {
            break;
          }
          siblings.push(node);
          node = node.getNextSibling();
        }
        return siblings;
      }

      /**
       * Returns the "next" siblings - that is, the node that comes
       * after this one in the same parent
       *
       */
    }, {
      key: "getNextSibling",
      value: function getNextSibling() {
        var self = this.getLatest();
        var nextKey = self.__next;
        return nextKey === null ? null : $getNodeByKey(nextKey);
      }

      /**
       * Returns all "next" siblings - that is, the nodes that come between this
       * one and the last child of it's parent, inclusive.
       *
       */
    }, {
      key: "getNextSiblings",
      value: function getNextSiblings() {
        var siblings = [];
        var node = this.getNextSibling();
        while (node !== null) {
          siblings.push(node);
          node = node.getNextSibling();
        }
        return siblings;
      }

      /**
       * Returns the closest common ancestor of this node and the provided one or null
       * if one cannot be found.
       *
       * @param node - the other node to find the common ancestor of.
       */
    }, {
      key: "getCommonAncestor",
      value: function getCommonAncestor(node) {
        var a = this.getParents();
        var b = node.getParents();
        if ($isElementNode(this)) {
          a.unshift(this);
        }
        if ($isElementNode(node)) {
          b.unshift(node);
        }
        var aLength = a.length;
        var bLength = b.length;
        if (aLength === 0 || bLength === 0 || a[aLength - 1] !== b[bLength - 1]) {
          return null;
        }
        var bSet = new Set(b);
        for (var i = 0; i < aLength; i++) {
          var ancestor = a[i];
          if (bSet.has(ancestor)) {
            return ancestor;
          }
        }
        return null;
      }

      /**
       * Returns true if the provided node is the exact same one as this node, from Lexical's perspective.
       * Always use this instead of referential equality.
       *
       * @param object - the node to perform the equality comparison on.
       */
    }, {
      key: "is",
      value: function is(object) {
        if (object == null) {
          return false;
        }
        return this.__key === object.__key;
      }

      /**
       * Returns true if this node logical precedes the target node in the editor state.
       *
       * @param targetNode - the node we're testing to see if it's after this one.
       */
    }, {
      key: "isBefore",
      value: function isBefore(targetNode) {
        if (this === targetNode) {
          return false;
        }
        if (targetNode.isParentOf(this)) {
          return true;
        }
        if (this.isParentOf(targetNode)) {
          return false;
        }
        var commonAncestor = this.getCommonAncestor(targetNode);
        var indexA = 0;
        var indexB = 0;
        var node = this;
        while (true) {
          var parent = node.getParentOrThrow();
          if (parent === commonAncestor) {
            indexA = node.getIndexWithinParent();
            break;
          }
          node = parent;
        }
        node = targetNode;
        while (true) {
          var _parent = node.getParentOrThrow();
          if (_parent === commonAncestor) {
            indexB = node.getIndexWithinParent();
            break;
          }
          node = _parent;
        }
        return indexA < indexB;
      }

      /**
       * Returns true if this node is the parent of the target node, false otherwise.
       *
       * @param targetNode - the would-be child node.
       */
    }, {
      key: "isParentOf",
      value: function isParentOf(targetNode) {
        var key = this.__key;
        if (key === targetNode.__key) {
          return false;
        }
        var node = targetNode;
        while (node !== null) {
          if (node.__key === key) {
            return true;
          }
          node = node.getParent();
        }
        return false;
      }

      // TO-DO: this function can be simplified a lot
      /**
       * Returns a list of nodes that are between this node and
       * the target node in the EditorState.
       *
       * @param targetNode - the node that marks the other end of the range of nodes to be returned.
       */
    }, {
      key: "getNodesBetween",
      value: function getNodesBetween(targetNode) {
        var isBefore = this.isBefore(targetNode);
        var nodes = [];
        var visited = new Set();
        var node = this;
        while (true) {
          if (node === null) {
            break;
          }
          var key = node.__key;
          if (!visited.has(key)) {
            visited.add(key);
            nodes.push(node);
          }
          if (node === targetNode) {
            break;
          }
          var child = $isElementNode(node) ? isBefore ? node.getFirstChild() : node.getLastChild() : null;
          if (child !== null) {
            node = child;
            continue;
          }
          var nextSibling = isBefore ? node.getNextSibling() : node.getPreviousSibling();
          if (nextSibling !== null) {
            node = nextSibling;
            continue;
          }
          var parent = node.getParentOrThrow();
          if (!visited.has(parent.__key)) {
            nodes.push(parent);
          }
          if (parent === targetNode) {
            break;
          }
          var parentSibling = null;
          var ancestor = parent;
          do {
            if (ancestor === null) {
              {
                throw Error("getNodesBetween: ancestor is null");
              }
            }
            parentSibling = isBefore ? ancestor.getNextSibling() : ancestor.getPreviousSibling();
            ancestor = ancestor.getParent();
            if (ancestor !== null) {
              if (parentSibling === null && !visited.has(ancestor.__key)) {
                nodes.push(ancestor);
              }
            } else {
              break;
            }
          } while (parentSibling === null);
          node = parentSibling;
        }
        if (!isBefore) {
          nodes.reverse();
        }
        return nodes;
      }

      /**
       * Returns true if this node has been marked dirty during this update cycle.
       *
       */
    }, {
      key: "isDirty",
      value: function isDirty() {
        var editor = getActiveEditor();
        var dirtyLeaves = editor._dirtyLeaves;
        return dirtyLeaves !== null && dirtyLeaves.has(this.__key);
      }

      /**
       * Returns the latest version of the node from the active EditorState.
       * This is used to avoid getting values from stale node references.
       *
       */
    }, {
      key: "getLatest",
      value: function getLatest() {
        var latest = $getNodeByKey(this.__key);
        if (latest === null) {
          {
            throw Error("Lexical node does not exist in active editor state. Avoid using the same node references between nested closures from editorState.read/editor.update.");
          }
        }
        return latest;
      }

      /**
       * Returns a mutable version of the node. Will throw an error if
       * called outside of a Lexical Editor {@link LexicalEditor.update} callback.
       *
       */
    }, {
      key: "getWritable",
      value: function getWritable() {
        errorOnReadOnly();
        var editorState = getActiveEditorState();
        var editor = getActiveEditor();
        var nodeMap = editorState._nodeMap;
        var key = this.__key;
        // Ensure we get the latest node from pending state
        var latestNode = this.getLatest();
        var parent = latestNode.__parent;
        var cloneNotNeeded = editor._cloneNotNeeded;
        var selection = $getSelection();
        if (selection !== null) {
          selection.setCachedNodes(null);
        }
        if (cloneNotNeeded.has(key)) {
          // Transforms clear the dirty node set on each iteration to keep track on newly dirty nodes
          internalMarkNodeAsDirty(latestNode);
          return latestNode;
        }
        var constructor = latestNode.constructor;
        var mutableNode = constructor.clone(latestNode);
        mutableNode.__parent = parent;
        mutableNode.__next = latestNode.__next;
        mutableNode.__prev = latestNode.__prev;
        if ($isElementNode(latestNode) && $isElementNode(mutableNode)) {
          if ($isParagraphNode(latestNode) && $isParagraphNode(mutableNode)) {
            mutableNode.__textFormat = latestNode.__textFormat;
          }
          mutableNode.__first = latestNode.__first;
          mutableNode.__last = latestNode.__last;
          mutableNode.__size = latestNode.__size;
          mutableNode.__indent = latestNode.__indent;
          mutableNode.__format = latestNode.__format;
          mutableNode.__dir = latestNode.__dir;
        } else if ($isTextNode(latestNode) && $isTextNode(mutableNode)) {
          mutableNode.__format = latestNode.__format;
          mutableNode.__style = latestNode.__style;
          mutableNode.__mode = latestNode.__mode;
          mutableNode.__detail = latestNode.__detail;
        }
        cloneNotNeeded.add(key);
        mutableNode.__key = key;
        internalMarkNodeAsDirty(mutableNode);
        // Update reference in node map
        nodeMap.set(key, mutableNode);

        // @ts-expect-error
        return mutableNode;
      }

      /**
       * Returns the text content of the node. Override this for
       * custom nodes that should have a representation in plain text
       * format (for copy + paste, for example)
       *
       */
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        return '';
      }

      /**
       * Returns the length of the string produced by calling getTextContent on this node.
       *
       */
    }, {
      key: "getTextContentSize",
      value: function getTextContentSize() {
        return this.getTextContent().length;
      }

      // View

      /**
       * Called during the reconciliation process to determine which nodes
       * to insert into the DOM for this Lexical Node.
       *
       * This method must return exactly one HTMLElement. Nested elements are not supported.
       *
       * Do not attempt to update the Lexical EditorState during this phase of the update lifecyle.
       *
       * @param _config - allows access to things like the EditorTheme (to apply classes) during reconciliation.
       * @param _editor - allows access to the editor for context during reconciliation.
       *
       * */
    }, {
      key: "createDOM",
      value: function createDOM(_config, _editor) {
        {
          throw Error("createDOM: base method not extended");
        }
      }

      /**
       * Called when a node changes and should update the DOM
       * in whatever way is necessary to make it align with any changes that might
       * have happened during the update.
       *
       * Returning "true" here will cause lexical to unmount and recreate the DOM node
       * (by calling createDOM). You would need to do this if the element tag changes,
       * for instance.
       *
       * */
    }, {
      key: "updateDOM",
      value: function updateDOM(_prevNode, _dom, _config) {
        {
          throw Error("updateDOM: base method not extended");
        }
      }

      /**
       * Controls how the this node is serialized to HTML. This is important for
       * copy and paste between Lexical and non-Lexical editors, or Lexical editors with different namespaces,
       * in which case the primary transfer format is HTML. It's also important if you're serializing
       * to HTML for any other reason via {@link @lexical/html!$generateHtmlFromNodes}. You could
       * also use this method to build your own HTML renderer.
       *
       * */
    }, {
      key: "exportDOM",
      value: function exportDOM(editor) {
        var element = this.createDOM(editor._config, editor);
        return {
          element: element
        };
      }

      /**
       * Controls how the this node is serialized to JSON. This is important for
       * copy and paste between Lexical editors sharing the same namespace. It's also important
       * if you're serializing to JSON for persistent storage somewhere.
       * See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).
       *
       * */
    }, {
      key: "exportJSON",
      value: function exportJSON() {
        {
          throw Error("exportJSON: base method not extended");
        }
      }

      /**
       * Controls how the this node is deserialized from JSON. This is usually boilerplate,
       * but provides an abstraction between the node implementation and serialized interface that can
       * be important if you ever make breaking changes to a node schema (by adding or removing properties).
       * See [Serialization & Deserialization](https://lexical.dev/docs/concepts/serialization#lexical---html).
       *
       * */
    }, {
      key: "remove",
      value:
      // Setters and mutators

      /**
       * Removes this LexicalNode from the EditorState. If the node isn't re-inserted
       * somewhere, the Lexical garbage collector will eventually clean it up.
       *
       * @param preserveEmptyParent - If falsy, the node's parent will be removed if
       * it's empty after the removal operation. This is the default behavior, subject to
       * other node heuristics such as {@link ElementNode#canBeEmpty}
       * */
      function remove(preserveEmptyParent) {
        $removeNode(this, true, preserveEmptyParent);
      }

      /**
       * Replaces this LexicalNode with the provided node, optionally transferring the children
       * of the replaced node to the replacing node.
       *
       * @param replaceWith - The node to replace this one with.
       * @param includeChildren - Whether or not to transfer the children of this node to the replacing node.
       * */
    }, {
      key: "replace",
      value: function replace(replaceWith, includeChildren) {
        errorOnReadOnly();
        var selection = $getSelection();
        if (selection !== null) {
          selection = selection.clone();
        }
        errorOnInsertTextNodeOnRoot(this, replaceWith);
        var self = this.getLatest();
        var toReplaceKey = this.__key;
        var key = replaceWith.__key;
        var writableReplaceWith = replaceWith.getWritable();
        var writableParent = this.getParentOrThrow().getWritable();
        var size = writableParent.__size;
        removeFromParent(writableReplaceWith);
        var prevSibling = self.getPreviousSibling();
        var nextSibling = self.getNextSibling();
        var prevKey = self.__prev;
        var nextKey = self.__next;
        var parentKey = self.__parent;
        $removeNode(self, false, true);
        if (prevSibling === null) {
          writableParent.__first = key;
        } else {
          var writablePrevSibling = prevSibling.getWritable();
          writablePrevSibling.__next = key;
        }
        writableReplaceWith.__prev = prevKey;
        if (nextSibling === null) {
          writableParent.__last = key;
        } else {
          var writableNextSibling = nextSibling.getWritable();
          writableNextSibling.__prev = key;
        }
        writableReplaceWith.__next = nextKey;
        writableReplaceWith.__parent = parentKey;
        writableParent.__size = size;
        if (includeChildren) {
          if (!($isElementNode(this) && $isElementNode(writableReplaceWith))) {
            throw Error("includeChildren should only be true for ElementNodes");
          }
          this.getChildren().forEach(function (child) {
            writableReplaceWith.append(child);
          });
        }
        if ($isRangeSelection(selection)) {
          $setSelection(selection);
          var anchor = selection.anchor;
          var focus = selection.focus;
          if (anchor.key === toReplaceKey) {
            $moveSelectionPointToEnd(anchor, writableReplaceWith);
          }
          if (focus.key === toReplaceKey) {
            $moveSelectionPointToEnd(focus, writableReplaceWith);
          }
        }
        if ($getCompositionKey() === toReplaceKey) {
          $setCompositionKey(key);
        }
        return writableReplaceWith;
      }

      /**
       * Inserts a node after this LexicalNode (as the next sibling).
       *
       * @param nodeToInsert - The node to insert after this one.
       * @param restoreSelection - Whether or not to attempt to resolve the
       * selection to the appropriate place after the operation is complete.
       * */
    }, {
      key: "insertAfter",
      value: function insertAfter(nodeToInsert) {
        var restoreSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        errorOnReadOnly();
        errorOnInsertTextNodeOnRoot(this, nodeToInsert);
        var writableSelf = this.getWritable();
        var writableNodeToInsert = nodeToInsert.getWritable();
        var oldParent = writableNodeToInsert.getParent();
        var selection = $getSelection();
        var elementAnchorSelectionOnNode = false;
        var elementFocusSelectionOnNode = false;
        if (oldParent !== null) {
          // TODO: this is O(n), can we improve?
          var oldIndex = nodeToInsert.getIndexWithinParent();
          removeFromParent(writableNodeToInsert);
          if ($isRangeSelection(selection)) {
            var oldParentKey = oldParent.__key;
            var anchor = selection.anchor;
            var focus = selection.focus;
            elementAnchorSelectionOnNode = anchor.type === 'element' && anchor.key === oldParentKey && anchor.offset === oldIndex + 1;
            elementFocusSelectionOnNode = focus.type === 'element' && focus.key === oldParentKey && focus.offset === oldIndex + 1;
          }
        }
        var nextSibling = this.getNextSibling();
        var writableParent = this.getParentOrThrow().getWritable();
        var insertKey = writableNodeToInsert.__key;
        var nextKey = writableSelf.__next;
        if (nextSibling === null) {
          writableParent.__last = insertKey;
        } else {
          var writableNextSibling = nextSibling.getWritable();
          writableNextSibling.__prev = insertKey;
        }
        writableParent.__size++;
        writableSelf.__next = insertKey;
        writableNodeToInsert.__next = nextKey;
        writableNodeToInsert.__prev = writableSelf.__key;
        writableNodeToInsert.__parent = writableSelf.__parent;
        if (restoreSelection && $isRangeSelection(selection)) {
          var index = this.getIndexWithinParent();
          $updateElementSelectionOnCreateDeleteNode(selection, writableParent, index + 1);
          var writableParentKey = writableParent.__key;
          if (elementAnchorSelectionOnNode) {
            selection.anchor.set(writableParentKey, index + 2, 'element');
          }
          if (elementFocusSelectionOnNode) {
            selection.focus.set(writableParentKey, index + 2, 'element');
          }
        }
        return nodeToInsert;
      }

      /**
       * Inserts a node before this LexicalNode (as the previous sibling).
       *
       * @param nodeToInsert - The node to insert before this one.
       * @param restoreSelection - Whether or not to attempt to resolve the
       * selection to the appropriate place after the operation is complete.
       * */
    }, {
      key: "insertBefore",
      value: function insertBefore(nodeToInsert) {
        var restoreSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        errorOnReadOnly();
        errorOnInsertTextNodeOnRoot(this, nodeToInsert);
        var writableSelf = this.getWritable();
        var writableNodeToInsert = nodeToInsert.getWritable();
        var insertKey = writableNodeToInsert.__key;
        removeFromParent(writableNodeToInsert);
        var prevSibling = this.getPreviousSibling();
        var writableParent = this.getParentOrThrow().getWritable();
        var prevKey = writableSelf.__prev;
        // TODO: this is O(n), can we improve?
        var index = this.getIndexWithinParent();
        if (prevSibling === null) {
          writableParent.__first = insertKey;
        } else {
          var writablePrevSibling = prevSibling.getWritable();
          writablePrevSibling.__next = insertKey;
        }
        writableParent.__size++;
        writableSelf.__prev = insertKey;
        writableNodeToInsert.__prev = prevKey;
        writableNodeToInsert.__next = writableSelf.__key;
        writableNodeToInsert.__parent = writableSelf.__parent;
        var selection = $getSelection();
        if (restoreSelection && $isRangeSelection(selection)) {
          var parent = this.getParentOrThrow();
          $updateElementSelectionOnCreateDeleteNode(selection, parent, index);
        }
        return nodeToInsert;
      }

      /**
       * Whether or not this node has a required parent. Used during copy + paste operations
       * to normalize nodes that would otherwise be orphaned. For example, ListItemNodes without
       * a ListNode parent or TextNodes with a ParagraphNode parent.
       *
       * */
    }, {
      key: "isParentRequired",
      value: function isParentRequired() {
        return false;
      }

      /**
       * The creation logic for any required parent. Should be implemented if {@link isParentRequired} returns true.
       *
       * */
    }, {
      key: "createParentElementNode",
      value: function createParentElementNode() {
        return $createParagraphNode();
      }
    }, {
      key: "selectStart",
      value: function selectStart() {
        return this.selectPrevious();
      }
    }, {
      key: "selectEnd",
      value: function selectEnd() {
        return this.selectNext(0, 0);
      }

      /**
       * Moves selection to the previous sibling of this node, at the specified offsets.
       *
       * @param anchorOffset - The anchor offset for selection.
       * @param focusOffset -  The focus offset for selection
       * */
    }, {
      key: "selectPrevious",
      value: function selectPrevious(anchorOffset, focusOffset) {
        errorOnReadOnly();
        var prevSibling = this.getPreviousSibling();
        var parent = this.getParentOrThrow();
        if (prevSibling === null) {
          return parent.select(0, 0);
        }
        if ($isElementNode(prevSibling)) {
          return prevSibling.select();
        } else if (!$isTextNode(prevSibling)) {
          var index = prevSibling.getIndexWithinParent() + 1;
          return parent.select(index, index);
        }
        return prevSibling.select(anchorOffset, focusOffset);
      }

      /**
       * Moves selection to the next sibling of this node, at the specified offsets.
       *
       * @param anchorOffset - The anchor offset for selection.
       * @param focusOffset -  The focus offset for selection
       * */
    }, {
      key: "selectNext",
      value: function selectNext(anchorOffset, focusOffset) {
        errorOnReadOnly();
        var nextSibling = this.getNextSibling();
        var parent = this.getParentOrThrow();
        if (nextSibling === null) {
          return parent.select();
        }
        if ($isElementNode(nextSibling)) {
          return nextSibling.select(0, 0);
        } else if (!$isTextNode(nextSibling)) {
          var index = nextSibling.getIndexWithinParent();
          return parent.select(index, index);
        }
        return nextSibling.select(anchorOffset, focusOffset);
      }

      /**
       * Marks a node dirty, triggering transforms and
       * forcing it to be reconciled during the update cycle.
       *
       * */
    }, {
      key: "markDirty",
      value: function markDirty() {
        this.getWritable();
      }
    }], [{
      key: "getType",
      value:
      // Allow us to look up the type including static props

      /** @internal */

      /** @internal */
      //@ts-ignore We set the key in the constructor.

      /** @internal */

      /** @internal */

      /** @internal */

      // Flow doesn't support abstract classes unfortunately, so we can't _force_
      // subclasses of Node to implement statics. All subclasses of Node should have
      // a static getType and clone method though. We define getType and clone here so we can call it
      // on any  Node, and we throw this error by default since the subclass should provide
      // their own implementation.
      /**
       * Returns the string type of this node. Every node must
       * implement this and it MUST BE UNIQUE amongst nodes registered
       * on the editor.
       *
       */
      function getType() {
        {
          throw Error("LexicalNode: Node ".concat(this.name, " does not implement .getType()."));
        }
      }

      /**
       * Clones this node, creating a new node with a different key
       * and adding it to the EditorState (but not attaching it anywhere!). All nodes must
       * implement this method.
       *
       */
    }, {
      key: "clone",
      value: function clone(_data) {
        {
          throw Error("LexicalNode: Node ".concat(this.name, " does not implement .clone()."));
        }
      }
    }, {
      key: "importJSON",
      value: function importJSON(_serializedNode) {
        {
          throw Error("LexicalNode: Node ".concat(this.name, " does not implement .importJSON()."));
        }
      }
      /**
       * @experimental
       *
       * Registers the returned function as a transform on the node during
       * Editor initialization. Most such use cases should be addressed via
       * the {@link LexicalEditor.registerNodeTransform} API.
       *
       * Experimental - use at your own risk.
       */
    }, {
      key: "transform",
      value: function transform() {
        return null;
      }
    }]);
  }();
  function errorOnTypeKlassMismatch(type, klass) {
    var registeredNode = getActiveEditor()._nodes.get(type);
    // Common error - split in its own invariant
    if (registeredNode === undefined) {
      {
        throw Error("Create node: Attempted to create node ".concat(klass.name, " that was not configured to be used on the editor."));
      }
    }
    var editorKlass = registeredNode.klass;
    if (editorKlass !== klass) {
      {
        throw Error("Create node: Type ".concat(type, " in node ").concat(klass.name, " does not match registered node ").concat(editorKlass.name, " with the same type"));
      }
    }
  }

  /**
   * Insert a series of nodes after this LexicalNode (as next siblings)
   *
   * @param firstToInsert - The first node to insert after this one.
   * @param lastToInsert - The last node to insert after this one. Must be a
   * later sibling of FirstNode. If not provided, it will be its last sibling.
   */
  function insertRangeAfter(node, firstToInsert, lastToInsert) {
    var lastToInsert2 = firstToInsert.getParentOrThrow().getLastChild();
    var current = firstToInsert;
    var nodesToInsert = [firstToInsert];
    while (current !== lastToInsert2) {
      if (!current.getNextSibling()) {
        {
          throw Error("insertRangeAfter: lastToInsert must be a later sibling of firstToInsert");
        }
      }
      current = current.getNextSibling();
      nodesToInsert.push(current);
    }
    var currentNode = node;
    for (var _i4 = 0, _nodesToInsert = nodesToInsert; _i4 < _nodesToInsert.length; _i4++) {
      var nodeToInsert = _nodesToInsert[_i4];
      currentNode = currentNode.insertAfter(nodeToInsert);
    }
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /** @noInheritDoc */
  var LineBreakNode = /*#__PURE__*/function (_LexicalNode) {
    function LineBreakNode(key) {
      _classCallCheck(this, LineBreakNode);
      return _callSuper(this, LineBreakNode, [key]);
    }
    _inherits(LineBreakNode, _LexicalNode);
    return _createClass(LineBreakNode, [{
      key: "getTextContent",
      value: function getTextContent() {
        return '\n';
      }
    }, {
      key: "createDOM",
      value: function createDOM() {
        return document.createElement('br');
      }
    }, {
      key: "updateDOM",
      value: function updateDOM() {
        return false;
      }
    }, {
      key: "exportJSON",
      value: function exportJSON() {
        return {
          type: 'linebreak',
          version: 1
        };
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'linebreak';
      }
    }, {
      key: "clone",
      value: function clone(node) {
        return new LineBreakNode(node.__key);
      }
    }, {
      key: "importDOM",
      value: function importDOM() {
        return {
          br: function br(node) {
            if (isOnlyChild(node)) {
              return null;
            }
            return {
              conversion: $convertLineBreakElement,
              priority: 0
            };
          }
        };
      }
    }, {
      key: "importJSON",
      value: function importJSON(serializedLineBreakNode) {
        return $createLineBreakNode();
      }
    }]);
  }(LexicalNode);
  function $convertLineBreakElement(node) {
    return {
      node: $createLineBreakNode()
    };
  }
  function $createLineBreakNode() {
    return $applyNodeReplacement(new LineBreakNode());
  }
  function $isLineBreakNode(node) {
    return node instanceof LineBreakNode;
  }
  function isOnlyChild(node) {
    var parentElement = node.parentElement;
    if (parentElement !== null) {
      var firstChild = parentElement.firstChild;
      if (firstChild === node || firstChild.nextSibling === node && isWhitespaceDomTextNode(firstChild)) {
        var lastChild = parentElement.lastChild;
        if (lastChild === node || lastChild.previousSibling === node && isWhitespaceDomTextNode(lastChild)) {
          return true;
        }
      }
    }
    return false;
  }
  function isWhitespaceDomTextNode(node) {
    return node.nodeType === DOM_TEXT_TYPE && /^( |\t|\r?\n)+$/.test(node.textContent || '');
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  function getElementOuterTag(node, format) {
    if (format & IS_CODE) {
      return 'code';
    }
    if (format & IS_HIGHLIGHT) {
      return 'mark';
    }
    if (format & IS_SUBSCRIPT) {
      return 'sub';
    }
    if (format & IS_SUPERSCRIPT) {
      return 'sup';
    }
    return null;
  }
  function getElementInnerTag(node, format) {
    if (format & IS_BOLD) {
      return 'strong';
    }
    if (format & IS_ITALIC) {
      return 'em';
    }
    return 'span';
  }
  function setTextThemeClassNames(tag, prevFormat, nextFormat, dom, textClassNames) {
    var domClassList = dom.classList;
    // Firstly we handle the base theme.
    var classNames = getCachedClassNameArray(textClassNames, 'base');
    if (classNames !== undefined) {
      domClassList.add.apply(domClassList, _toConsumableArray(classNames));
    }
    // Secondly we handle the special case: underline + strikethrough.
    // We have to do this as we need a way to compose the fact that
    // the same CSS property will need to be used: text-decoration.
    // In an ideal world we shouldn't have to do this, but there's no
    // easy workaround for many atomic CSS systems today.
    classNames = getCachedClassNameArray(textClassNames, 'underlineStrikethrough');
    var hasUnderlineStrikethrough = false;
    var prevUnderlineStrikethrough = prevFormat & IS_UNDERLINE && prevFormat & IS_STRIKETHROUGH;
    var nextUnderlineStrikethrough = nextFormat & IS_UNDERLINE && nextFormat & IS_STRIKETHROUGH;
    if (classNames !== undefined) {
      if (nextUnderlineStrikethrough) {
        hasUnderlineStrikethrough = true;
        if (!prevUnderlineStrikethrough) {
          domClassList.add.apply(domClassList, _toConsumableArray(classNames));
        }
      } else if (prevUnderlineStrikethrough) {
        domClassList.remove.apply(domClassList, _toConsumableArray(classNames));
      }
    }
    for (var key in TEXT_TYPE_TO_FORMAT) {
      var format = key;
      var flag = TEXT_TYPE_TO_FORMAT[format];
      classNames = getCachedClassNameArray(textClassNames, key);
      if (classNames !== undefined) {
        if (nextFormat & flag) {
          if (hasUnderlineStrikethrough && (key === 'underline' || key === 'strikethrough')) {
            if (prevFormat & flag) {
              domClassList.remove.apply(domClassList, _toConsumableArray(classNames));
            }
            continue;
          }
          if ((prevFormat & flag) === 0 || prevUnderlineStrikethrough && key === 'underline' || key === 'strikethrough') {
            domClassList.add.apply(domClassList, _toConsumableArray(classNames));
          }
        } else if (prevFormat & flag) {
          domClassList.remove.apply(domClassList, _toConsumableArray(classNames));
        }
      }
    }
  }
  function diffComposedText(a, b) {
    var aLength = a.length;
    var bLength = b.length;
    var left = 0;
    var right = 0;
    while (left < aLength && left < bLength && a[left] === b[left]) {
      left++;
    }
    while (right + left < aLength && right + left < bLength && a[aLength - right - 1] === b[bLength - right - 1]) {
      right++;
    }
    return [left, aLength - left - right, b.slice(left, bLength - right)];
  }
  function setTextContent(nextText, dom, node) {
    var firstChild = dom.firstChild;
    var isComposing = node.isComposing();
    // Always add a suffix if we're composing a node
    var suffix = isComposing ? COMPOSITION_SUFFIX : '';
    var text = nextText + suffix;
    if (firstChild == null) {
      dom.textContent = text;
    } else {
      var nodeValue = firstChild.nodeValue;
      if (nodeValue !== text) {
        if (isComposing || IS_FIREFOX) {
          // We also use the diff composed text for general text in FF to avoid
          // the spellcheck red line from flickering.
          var _diffComposedText = diffComposedText(nodeValue, text),
            _diffComposedText2 = _slicedToArray(_diffComposedText, 3),
            index = _diffComposedText2[0],
            remove = _diffComposedText2[1],
            insert = _diffComposedText2[2];
          if (remove !== 0) {
            // @ts-expect-error
            firstChild.deleteData(index, remove);
          }
          // @ts-expect-error
          firstChild.insertData(index, insert);
        } else {
          firstChild.nodeValue = text;
        }
      }
    }
  }
  function createTextInnerDOM(innerDOM, node, innerTag, format, text, config) {
    setTextContent(text, innerDOM, node);
    var theme = config.theme;
    // Apply theme class names
    var textClassNames = theme.text;
    if (textClassNames !== undefined) {
      setTextThemeClassNames(innerTag, 0, format, innerDOM, textClassNames);
    }
  }
  function wrapElementWith(element, tag) {
    var el = document.createElement(tag);
    el.appendChild(element);
    return el;
  }

  /** @noInheritDoc */
  var TextNode = /*#__PURE__*/function (_LexicalNode2) {
    function TextNode(text, key) {
      var _this2;
      _classCallCheck(this, TextNode);
      _this2 = _callSuper(this, TextNode, [key]);
      _this2.__text = text;
      _this2.__format = 0;
      _this2.__style = '';
      _this2.__mode = 0;
      _this2.__detail = 0;
      return _this2;
    }

    /**
     * Returns a 32-bit integer that represents the TextFormatTypes currently applied to the
     * TextNode. You probably don't want to use this method directly - consider using TextNode.hasFormat instead.
     *
     * @returns a number representing the format of the text node.
     */
    _inherits(TextNode, _LexicalNode2);
    return _createClass(TextNode, [{
      key: "getFormat",
      value: function getFormat() {
        var self = this.getLatest();
        return self.__format;
      }

      /**
       * Returns a 32-bit integer that represents the TextDetailTypes currently applied to the
       * TextNode. You probably don't want to use this method directly - consider using TextNode.isDirectionless
       * or TextNode.isUnmergeable instead.
       *
       * @returns a number representing the detail of the text node.
       */
    }, {
      key: "getDetail",
      value: function getDetail() {
        var self = this.getLatest();
        return self.__detail;
      }

      /**
       * Returns the mode (TextModeType) of the TextNode, which may be "normal", "token", or "segmented"
       *
       * @returns TextModeType.
       */
    }, {
      key: "getMode",
      value: function getMode() {
        var self = this.getLatest();
        return TEXT_TYPE_TO_MODE[self.__mode];
      }

      /**
       * Returns the styles currently applied to the node. This is analogous to CSSText in the DOM.
       *
       * @returns CSSText-like string of styles applied to the underlying DOM node.
       */
    }, {
      key: "getStyle",
      value: function getStyle() {
        var self = this.getLatest();
        return self.__style;
      }

      /**
       * Returns whether or not the node is in "token" mode. TextNodes in token mode can be navigated through character-by-character
       * with a RangeSelection, but are deleted as a single entity (not invdividually by character).
       *
       * @returns true if the node is in token mode, false otherwise.
       */
    }, {
      key: "isToken",
      value: function isToken() {
        var self = this.getLatest();
        return self.__mode === IS_TOKEN;
      }

      /**
       *
       * @returns true if Lexical detects that an IME or other 3rd-party script is attempting to
       * mutate the TextNode, false otherwise.
       */
    }, {
      key: "isComposing",
      value: function isComposing() {
        return this.__key === $getCompositionKey();
      }

      /**
       * Returns whether or not the node is in "segemented" mode. TextNodes in segemented mode can be navigated through character-by-character
       * with a RangeSelection, but are deleted in space-delimited "segments".
       *
       * @returns true if the node is in segmented mode, false otherwise.
       */
    }, {
      key: "isSegmented",
      value: function isSegmented() {
        var self = this.getLatest();
        return self.__mode === IS_SEGMENTED;
      }
      /**
       * Returns whether or not the node is "directionless". Directionless nodes don't respect changes between RTL and LTR modes.
       *
       * @returns true if the node is directionless, false otherwise.
       */
    }, {
      key: "isDirectionless",
      value: function isDirectionless() {
        var self = this.getLatest();
        return (self.__detail & IS_DIRECTIONLESS) !== 0;
      }
      /**
       * Returns whether or not the node is unmergeable. In some scenarios, Lexical tries to merge
       * adjacent TextNodes into a single TextNode. If a TextNode is unmergeable, this won't happen.
       *
       * @returns true if the node is unmergeable, false otherwise.
       */
    }, {
      key: "isUnmergeable",
      value: function isUnmergeable() {
        var self = this.getLatest();
        return (self.__detail & IS_UNMERGEABLE) !== 0;
      }

      /**
       * Returns whether or not the node has the provided format applied. Use this with the human-readable TextFormatType
       * string values to get the format of a TextNode.
       *
       * @param type - the TextFormatType to check for.
       *
       * @returns true if the node has the provided format, false otherwise.
       */
    }, {
      key: "hasFormat",
      value: function hasFormat(type) {
        var formatFlag = TEXT_TYPE_TO_FORMAT[type];
        return (this.getFormat() & formatFlag) !== 0;
      }

      /**
       * Returns whether or not the node is simple text. Simple text is defined as a TextNode that has the string type "text"
       * (i.e., not a subclass) and has no mode applied to it (i.e., not segmented or token).
       *
       * @returns true if the node is simple text, false otherwise.
       */
    }, {
      key: "isSimpleText",
      value: function isSimpleText() {
        return this.__type === 'text' && this.__mode === 0;
      }

      /**
       * Returns the text content of the node as a string.
       *
       * @returns a string representing the text content of the node.
       */
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        var self = this.getLatest();
        return self.__text;
      }

      /**
       * Returns the format flags applied to the node as a 32-bit integer.
       *
       * @returns a number representing the TextFormatTypes applied to the node.
       */
    }, {
      key: "getFormatFlags",
      value: function getFormatFlags(type, alignWithFormat) {
        var self = this.getLatest();
        var format = self.__format;
        return toggleTextFormatType(format, type, alignWithFormat);
      }

      /**
       *
       * @returns true if the text node supports font styling, false otherwise.
       */
    }, {
      key: "canHaveFormat",
      value: function canHaveFormat() {
        return true;
      }

      // View
    }, {
      key: "createDOM",
      value: function createDOM(config, editor) {
        var format = this.__format;
        var outerTag = getElementOuterTag(this, format);
        var innerTag = getElementInnerTag(this, format);
        var tag = outerTag === null ? innerTag : outerTag;
        var dom = document.createElement(tag);
        var innerDOM = dom;
        if (this.hasFormat('code')) {
          dom.setAttribute('spellcheck', 'false');
        }
        if (outerTag !== null) {
          innerDOM = document.createElement(innerTag);
          dom.appendChild(innerDOM);
        }
        var text = this.__text;
        createTextInnerDOM(innerDOM, this, innerTag, format, text, config);
        var style = this.__style;
        if (style !== '') {
          dom.style.cssText = style;
        }
        return dom;
      }
    }, {
      key: "updateDOM",
      value: function updateDOM(prevNode, dom, config) {
        var nextText = this.__text;
        var prevFormat = prevNode.__format;
        var nextFormat = this.__format;
        var prevOuterTag = getElementOuterTag(this, prevFormat);
        var nextOuterTag = getElementOuterTag(this, nextFormat);
        var prevInnerTag = getElementInnerTag(this, prevFormat);
        var nextInnerTag = getElementInnerTag(this, nextFormat);
        var prevTag = prevOuterTag === null ? prevInnerTag : prevOuterTag;
        var nextTag = nextOuterTag === null ? nextInnerTag : nextOuterTag;
        if (prevTag !== nextTag) {
          return true;
        }
        if (prevOuterTag === nextOuterTag && prevInnerTag !== nextInnerTag) {
          // should always be an element
          var prevInnerDOM = dom.firstChild;
          if (prevInnerDOM == null) {
            {
              throw Error("updateDOM: prevInnerDOM is null or undefined");
            }
          }
          var nextInnerDOM = document.createElement(nextInnerTag);
          createTextInnerDOM(nextInnerDOM, this, nextInnerTag, nextFormat, nextText, config);
          dom.replaceChild(nextInnerDOM, prevInnerDOM);
          return false;
        }
        var innerDOM = dom;
        if (nextOuterTag !== null) {
          if (prevOuterTag !== null) {
            innerDOM = dom.firstChild;
            if (innerDOM == null) {
              {
                throw Error("updateDOM: innerDOM is null or undefined");
              }
            }
          }
        }
        setTextContent(nextText, innerDOM, this);
        var theme = config.theme;
        // Apply theme class names
        var textClassNames = theme.text;
        if (textClassNames !== undefined && prevFormat !== nextFormat) {
          setTextThemeClassNames(nextInnerTag, prevFormat, nextFormat, innerDOM, textClassNames);
        }
        var prevStyle = prevNode.__style;
        var nextStyle = this.__style;
        if (prevStyle !== nextStyle) {
          dom.style.cssText = nextStyle;
        }
        return false;
      }
    }, {
      key: "exportDOM",
      value:
      // This improves Lexical's basic text output in copy+paste plus
      // for headless mode where people might use Lexical to generate
      // HTML content and not have the ability to use CSS classes.
      function exportDOM(editor) {
        var _get$call = _get(_getPrototypeOf(TextNode.prototype), "exportDOM", this).call(this, editor),
          element = _get$call.element;
        if (!(element !== null && isHTMLElement(element))) {
          throw Error("Expected TextNode createDOM to always return a HTMLElement");
        }
        element.style.whiteSpace = 'pre-wrap';
        // This is the only way to properly add support for most clients,
        // even if it's semantically incorrect to have to resort to using
        // <b>, <u>, <s>, <i> elements.
        if (this.hasFormat('bold')) {
          element = wrapElementWith(element, 'b');
        }
        if (this.hasFormat('italic')) {
          element = wrapElementWith(element, 'i');
        }
        if (this.hasFormat('strikethrough')) {
          element = wrapElementWith(element, 's');
        }
        if (this.hasFormat('underline')) {
          element = wrapElementWith(element, 'u');
        }
        return {
          element: element
        };
      }
    }, {
      key: "exportJSON",
      value: function exportJSON() {
        return {
          detail: this.getDetail(),
          format: this.getFormat(),
          mode: this.getMode(),
          style: this.getStyle(),
          text: this.getTextContent(),
          type: 'text',
          version: 1
        };
      }

      // Mutators
    }, {
      key: "selectionTransform",
      value: function selectionTransform(prevSelection, nextSelection) {
        return;
      }

      /**
       * Sets the node format to the provided TextFormatType or 32-bit integer. Note that the TextFormatType
       * version of the argument can only specify one format and doing so will remove all other formats that
       * may be applied to the node. For toggling behavior, consider using {@link TextNode.toggleFormat}
       *
       * @param format - TextFormatType or 32-bit integer representing the node format.
       *
       * @returns this TextNode.
       * // TODO 0.12 This should just be a `string`.
       */
    }, {
      key: "setFormat",
      value: function setFormat(format) {
        var self = this.getWritable();
        self.__format = typeof format === 'string' ? TEXT_TYPE_TO_FORMAT[format] : format;
        return self;
      }

      /**
       * Sets the node detail to the provided TextDetailType or 32-bit integer. Note that the TextDetailType
       * version of the argument can only specify one detail value and doing so will remove all other detail values that
       * may be applied to the node. For toggling behavior, consider using {@link TextNode.toggleDirectionless}
       * or {@link TextNode.toggleUnmergeable}
       *
       * @param detail - TextDetailType or 32-bit integer representing the node detail.
       *
       * @returns this TextNode.
       * // TODO 0.12 This should just be a `string`.
       */
    }, {
      key: "setDetail",
      value: function setDetail(detail) {
        var self = this.getWritable();
        self.__detail = typeof detail === 'string' ? DETAIL_TYPE_TO_DETAIL[detail] : detail;
        return self;
      }

      /**
       * Sets the node style to the provided CSSText-like string. Set this property as you
       * would an HTMLElement style attribute to apply inline styles to the underlying DOM Element.
       *
       * @param style - CSSText to be applied to the underlying HTMLElement.
       *
       * @returns this TextNode.
       */
    }, {
      key: "setStyle",
      value: function setStyle(style) {
        var self = this.getWritable();
        self.__style = style;
        return self;
      }

      /**
       * Applies the provided format to this TextNode if it's not present. Removes it if it's present.
       * The subscript and superscript formats are mutually exclusive.
       * Prefer using this method to turn specific formats on and off.
       *
       * @param type - TextFormatType to toggle.
       *
       * @returns this TextNode.
       */
    }, {
      key: "toggleFormat",
      value: function toggleFormat(type) {
        var format = this.getFormat();
        var newFormat = toggleTextFormatType(format, type, null);
        return this.setFormat(newFormat);
      }

      /**
       * Toggles the directionless detail value of the node. Prefer using this method over setDetail.
       *
       * @returns this TextNode.
       */
    }, {
      key: "toggleDirectionless",
      value: function toggleDirectionless() {
        var self = this.getWritable();
        self.__detail ^= IS_DIRECTIONLESS;
        return self;
      }

      /**
       * Toggles the unmergeable detail value of the node. Prefer using this method over setDetail.
       *
       * @returns this TextNode.
       */
    }, {
      key: "toggleUnmergeable",
      value: function toggleUnmergeable() {
        var self = this.getWritable();
        self.__detail ^= IS_UNMERGEABLE;
        return self;
      }

      /**
       * Sets the mode of the node.
       *
       * @returns this TextNode.
       */
    }, {
      key: "setMode",
      value: function setMode(type) {
        var mode = TEXT_MODE_TO_TYPE[type];
        if (this.__mode === mode) {
          return this;
        }
        var self = this.getWritable();
        self.__mode = mode;
        return self;
      }

      /**
       * Sets the text content of the node.
       *
       * @param text - the string to set as the text value of the node.
       *
       * @returns this TextNode.
       */
    }, {
      key: "setTextContent",
      value: function setTextContent(text) {
        if (this.__text === text) {
          return this;
        }
        var self = this.getWritable();
        self.__text = text;
        return self;
      }

      /**
       * Sets the current Lexical selection to be a RangeSelection with anchor and focus on this TextNode at the provided offsets.
       *
       * @param _anchorOffset - the offset at which the Selection anchor will be placed.
       * @param _focusOffset - the offset at which the Selection focus will be placed.
       *
       * @returns the new RangeSelection.
       */
    }, {
      key: "select",
      value: function select(_anchorOffset, _focusOffset) {
        errorOnReadOnly();
        var anchorOffset = _anchorOffset;
        var focusOffset = _focusOffset;
        var selection = $getSelection();
        var text = this.getTextContent();
        var key = this.__key;
        if (typeof text === 'string') {
          var lastOffset = text.length;
          if (anchorOffset === undefined) {
            anchorOffset = lastOffset;
          }
          if (focusOffset === undefined) {
            focusOffset = lastOffset;
          }
        } else {
          anchorOffset = 0;
          focusOffset = 0;
        }
        if (!$isRangeSelection(selection)) {
          return $internalMakeRangeSelection(key, anchorOffset, key, focusOffset, 'text', 'text');
        } else {
          var compositionKey = $getCompositionKey();
          if (compositionKey === selection.anchor.key || compositionKey === selection.focus.key) {
            $setCompositionKey(key);
          }
          selection.setTextNodeRange(this, anchorOffset, this, focusOffset);
        }
        return selection;
      }
    }, {
      key: "selectStart",
      value: function selectStart() {
        return this.select(0, 0);
      }
    }, {
      key: "selectEnd",
      value: function selectEnd() {
        var size = this.getTextContentSize();
        return this.select(size, size);
      }

      /**
       * Inserts the provided text into this TextNode at the provided offset, deleting the number of characters
       * specified. Can optionally calculate a new selection after the operation is complete.
       *
       * @param offset - the offset at which the splice operation should begin.
       * @param delCount - the number of characters to delete, starting from the offset.
       * @param newText - the text to insert into the TextNode at the offset.
       * @param moveSelection - optional, whether or not to move selection to the end of the inserted substring.
       *
       * @returns this TextNode.
       */
    }, {
      key: "spliceText",
      value: function spliceText(offset, delCount, newText, moveSelection) {
        var writableSelf = this.getWritable();
        var text = writableSelf.__text;
        var handledTextLength = newText.length;
        var index = offset;
        if (index < 0) {
          index = handledTextLength + index;
          if (index < 0) {
            index = 0;
          }
        }
        var selection = $getSelection();
        if (moveSelection && $isRangeSelection(selection)) {
          var newOffset = offset + handledTextLength;
          selection.setTextNodeRange(writableSelf, newOffset, writableSelf, newOffset);
        }
        var updatedText = text.slice(0, index) + newText + text.slice(index + delCount);
        writableSelf.__text = updatedText;
        return writableSelf;
      }

      /**
       * This method is meant to be overriden by TextNode subclasses to control the behavior of those nodes
       * when a user event would cause text to be inserted before them in the editor. If true, Lexical will attempt
       * to insert text into this node. If false, it will insert the text in a new sibling node.
       *
       * @returns true if text can be inserted before the node, false otherwise.
       */
    }, {
      key: "canInsertTextBefore",
      value: function canInsertTextBefore() {
        return true;
      }

      /**
       * This method is meant to be overriden by TextNode subclasses to control the behavior of those nodes
       * when a user event would cause text to be inserted after them in the editor. If true, Lexical will attempt
       * to insert text into this node. If false, it will insert the text in a new sibling node.
       *
       * @returns true if text can be inserted after the node, false otherwise.
       */
    }, {
      key: "canInsertTextAfter",
      value: function canInsertTextAfter() {
        return true;
      }

      /**
       * Splits this TextNode at the provided character offsets, forming new TextNodes from the substrings
       * formed by the split, and inserting those new TextNodes into the editor, replacing the one that was split.
       *
       * @param splitOffsets - rest param of the text content character offsets at which this node should be split.
       *
       * @returns an Array containing the newly-created TextNodes.
       */
    }, {
      key: "splitText",
      value: function splitText() {
        errorOnReadOnly();
        var self = this.getLatest();
        var textContent = self.getTextContent();
        var key = self.__key;
        var compositionKey = $getCompositionKey();
        for (var _len2 = arguments.length, splitOffsets = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          splitOffsets[_key2] = arguments[_key2];
        }
        var offsetsSet = new Set(splitOffsets);
        var parts = [];
        var textLength = textContent.length;
        var string = '';
        for (var i = 0; i < textLength; i++) {
          if (string !== '' && offsetsSet.has(i)) {
            parts.push(string);
            string = '';
          }
          string += textContent[i];
        }
        if (string !== '') {
          parts.push(string);
        }
        var partsLength = parts.length;
        if (partsLength === 0) {
          return [];
        } else if (parts[0] === textContent) {
          return [self];
        }
        var firstPart = parts[0];
        var parent = self.getParentOrThrow();
        var writableNode;
        var format = self.getFormat();
        var style = self.getStyle();
        var detail = self.__detail;
        var hasReplacedSelf = false;
        if (self.isSegmented()) {
          // Create a new TextNode
          writableNode = $createTextNode(firstPart);
          writableNode.__format = format;
          writableNode.__style = style;
          writableNode.__detail = detail;
          hasReplacedSelf = true;
        } else {
          // For the first part, update the existing node
          writableNode = self.getWritable();
          writableNode.__text = firstPart;
        }

        // Handle selection
        var selection = $getSelection();

        // Then handle all other parts
        var splitNodes = [writableNode];
        var textSize = firstPart.length;
        for (var _i5 = 1; _i5 < partsLength; _i5++) {
          var part = parts[_i5];
          var partSize = part.length;
          var sibling = $createTextNode(part).getWritable();
          sibling.__format = format;
          sibling.__style = style;
          sibling.__detail = detail;
          var siblingKey = sibling.__key;
          var nextTextSize = textSize + partSize;
          if ($isRangeSelection(selection)) {
            var anchor = selection.anchor;
            var focus = selection.focus;
            if (anchor.key === key && anchor.type === 'text' && anchor.offset > textSize && anchor.offset <= nextTextSize) {
              anchor.key = siblingKey;
              anchor.offset -= textSize;
              selection.dirty = true;
            }
            if (focus.key === key && focus.type === 'text' && focus.offset > textSize && focus.offset <= nextTextSize) {
              focus.key = siblingKey;
              focus.offset -= textSize;
              selection.dirty = true;
            }
          }
          if (compositionKey === key) {
            $setCompositionKey(siblingKey);
          }
          textSize = nextTextSize;
          splitNodes.push(sibling);
        }

        // Insert the nodes into the parent's children
        internalMarkSiblingsAsDirty(this);
        var writableParent = parent.getWritable();
        var insertionIndex = this.getIndexWithinParent();
        if (hasReplacedSelf) {
          writableParent.splice(insertionIndex, 0, splitNodes);
          this.remove();
        } else {
          writableParent.splice(insertionIndex, 1, splitNodes);
        }
        if ($isRangeSelection(selection)) {
          $updateElementSelectionOnCreateDeleteNode(selection, parent, insertionIndex, partsLength - 1);
        }
        return splitNodes;
      }

      /**
       * Merges the target TextNode into this TextNode, removing the target node.
       *
       * @param target - the TextNode to merge into this one.
       *
       * @returns this TextNode.
       */
    }, {
      key: "mergeWithSibling",
      value: function mergeWithSibling(target) {
        var isBefore = target === this.getPreviousSibling();
        if (!isBefore && target !== this.getNextSibling()) {
          {
            throw Error("mergeWithSibling: sibling must be a previous or next sibling");
          }
        }
        var key = this.__key;
        var targetKey = target.__key;
        var text = this.__text;
        var textLength = text.length;
        var compositionKey = $getCompositionKey();
        if (compositionKey === targetKey) {
          $setCompositionKey(key);
        }
        var selection = $getSelection();
        if ($isRangeSelection(selection)) {
          var anchor = selection.anchor;
          var focus = selection.focus;
          if (anchor !== null && anchor.key === targetKey) {
            adjustPointOffsetForMergedSibling(anchor, isBefore, key, target, textLength);
            selection.dirty = true;
          }
          if (focus !== null && focus.key === targetKey) {
            adjustPointOffsetForMergedSibling(focus, isBefore, key, target, textLength);
            selection.dirty = true;
          }
        }
        var targetText = target.__text;
        var newText = isBefore ? targetText + text : text + targetText;
        this.setTextContent(newText);
        var writableSelf = this.getWritable();
        target.remove();
        return writableSelf;
      }

      /**
       * This method is meant to be overriden by TextNode subclasses to control the behavior of those nodes
       * when used with the registerLexicalTextEntity function. If you're using registerLexicalTextEntity, the
       * node class that you create and replace matched text with should return true from this method.
       *
       * @returns true if the node is to be treated as a "text entity", false otherwise.
       */
    }, {
      key: "isTextEntity",
      value: function isTextEntity() {
        return false;
      }
    }], [{
      key: "getType",
      value: /** @internal */

      /** @internal */

      /** @internal */

      /** @internal */

      function getType() {
        return 'text';
      }
    }, {
      key: "clone",
      value: function clone(node) {
        return new TextNode(node.__text, node.__key);
      }
    }, {
      key: "importDOM",
      value: function importDOM() {
        return {
          '#text': function text() {
            return {
              conversion: $convertTextDOMNode,
              priority: 0
            };
          },
          b: function b() {
            return {
              conversion: convertBringAttentionToElement,
              priority: 0
            };
          },
          code: function code() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          em: function em() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          i: function i() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          s: function s() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          span: function span() {
            return {
              conversion: convertSpanElement,
              priority: 0
            };
          },
          strong: function strong() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          sub: function sub() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          sup: function sup() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          },
          u: function u() {
            return {
              conversion: convertTextFormatElement,
              priority: 0
            };
          }
        };
      }
    }, {
      key: "importJSON",
      value: function importJSON(serializedNode) {
        var node = $createTextNode(serializedNode.text);
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
      }
    }]);
  }(LexicalNode);
  function convertSpanElement(domNode) {
    // domNode is a <span> since we matched it by nodeName
    var span = domNode;
    var style = span.style;
    return {
      forChild: applyTextFormatFromStyle(style),
      node: null
    };
  }
  function convertBringAttentionToElement(domNode) {
    // domNode is a <b> since we matched it by nodeName
    var b = domNode;
    // Google Docs wraps all copied HTML in a <b> with font-weight normal
    var hasNormalFontWeight = b.style.fontWeight === 'normal';
    return {
      forChild: applyTextFormatFromStyle(b.style, hasNormalFontWeight ? undefined : 'bold'),
      node: null
    };
  }
  var preParentCache = new WeakMap();
  function isNodePre(node) {
    return node.nodeName === 'PRE' || node.nodeType === DOM_ELEMENT_TYPE && node.style !== undefined && node.style.whiteSpace !== undefined && node.style.whiteSpace.startsWith('pre');
  }
  function findParentPreDOMNode(node) {
    var cached;
    var parent = node.parentNode;
    var visited = [node];
    while (parent !== null && (cached = preParentCache.get(parent)) === undefined && !isNodePre(parent)) {
      visited.push(parent);
      parent = parent.parentNode;
    }
    var resultNode = cached === undefined ? parent : cached;
    for (var i = 0; i < visited.length; i++) {
      preParentCache.set(visited[i], resultNode);
    }
    return resultNode;
  }
  function $convertTextDOMNode(domNode) {
    var domNode_ = domNode;
    var parentDom = domNode.parentElement;
    if (!(parentDom !== null)) {
      throw Error("Expected parentElement of Text not to be null");
    }
    var textContent = domNode_.textContent || '';
    // No collapse and preserve segment break for pre, pre-wrap and pre-line
    if (findParentPreDOMNode(domNode_) !== null) {
      var parts = textContent.split(/(\r?\n|\t)/);
      var nodes = [];
      var length = parts.length;
      for (var i = 0; i < length; i++) {
        var part = parts[i];
        if (part === '\n' || part === '\r\n') {
          nodes.push($createLineBreakNode());
        } else if (part === '\t') {
          nodes.push($createTabNode());
        } else if (part !== '') {
          nodes.push($createTextNode(part));
        }
      }
      return {
        node: nodes
      };
    }
    textContent = textContent.replace(/\r/g, '').replace(/[ \t\n]+/g, ' ');
    if (textContent === '') {
      return {
        node: null
      };
    }
    if (textContent[0] === ' ') {
      // Traverse backward while in the same line. If content contains new line or tab -> pontential
      // delete, other elements can borrow from this one. Deletion depends on whether it's also the
      // last space (see next condition: textContent[textContent.length - 1] === ' '))
      var previousText = domNode_;
      var isStartOfLine = true;
      while (previousText !== null && (previousText = findTextInLine(previousText, false)) !== null) {
        var previousTextContent = previousText.textContent || '';
        if (previousTextContent.length > 0) {
          if (/[ \t\n]$/.test(previousTextContent)) {
            textContent = textContent.slice(1);
          }
          isStartOfLine = false;
          break;
        }
      }
      if (isStartOfLine) {
        textContent = textContent.slice(1);
      }
    }
    if (textContent[textContent.length - 1] === ' ') {
      // Traverse forward while in the same line, preserve if next inline will require a space
      var nextText = domNode_;
      var isEndOfLine = true;
      while (nextText !== null && (nextText = findTextInLine(nextText, true)) !== null) {
        var nextTextContent = (nextText.textContent || '').replace(/^( |\t|\r?\n)+/, '');
        if (nextTextContent.length > 0) {
          isEndOfLine = false;
          break;
        }
      }
      if (isEndOfLine) {
        textContent = textContent.slice(0, textContent.length - 1);
      }
    }
    if (textContent === '') {
      return {
        node: null
      };
    }
    return {
      node: $createTextNode(textContent)
    };
  }
  function findTextInLine(text, forward) {
    var node = text;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      var sibling = void 0;
      while ((sibling = forward ? node.nextSibling : node.previousSibling) === null) {
        var parentElement = node.parentElement;
        if (parentElement === null) {
          return null;
        }
        node = parentElement;
      }
      node = sibling;
      if (node.nodeType === DOM_ELEMENT_TYPE) {
        var display = node.style.display;
        if (display === '' && !isInlineDomNode(node) || display !== '' && !display.startsWith('inline')) {
          return null;
        }
      }
      var descendant = node;
      while ((descendant = forward ? node.firstChild : node.lastChild) !== null) {
        node = descendant;
      }
      if (node.nodeType === DOM_TEXT_TYPE) {
        return node;
      } else if (node.nodeName === 'BR') {
        return null;
      }
    }
  }
  var nodeNameToTextFormat = {
    code: 'code',
    em: 'italic',
    i: 'italic',
    s: 'strikethrough',
    strong: 'bold',
    sub: 'subscript',
    sup: 'superscript',
    u: 'underline'
  };
  function convertTextFormatElement(domNode) {
    var format = nodeNameToTextFormat[domNode.nodeName.toLowerCase()];
    if (format === undefined) {
      return {
        node: null
      };
    }
    return {
      forChild: applyTextFormatFromStyle(domNode.style, format),
      node: null
    };
  }
  function $createTextNode() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return $applyNodeReplacement(new TextNode(text));
  }
  function $isTextNode(node) {
    return node instanceof TextNode;
  }
  function applyTextFormatFromStyle(style, shouldApply) {
    var fontWeight = style.fontWeight;
    var textDecoration = style.textDecoration.split(' ');
    // Google Docs uses span tags + font-weight for bold text
    var hasBoldFontWeight = fontWeight === '700' || fontWeight === 'bold';
    // Google Docs uses span tags + text-decoration: line-through for strikethrough text
    var hasLinethroughTextDecoration = textDecoration.includes('line-through');
    // Google Docs uses span tags + font-style for italic text
    var hasItalicFontStyle = style.fontStyle === 'italic';
    // Google Docs uses span tags + text-decoration: underline for underline text
    var hasUnderlineTextDecoration = textDecoration.includes('underline');
    // Google Docs uses span tags + vertical-align to specify subscript and superscript
    var verticalAlign = style.verticalAlign;
    return function (lexicalNode) {
      if (!$isTextNode(lexicalNode)) {
        return lexicalNode;
      }
      if (hasBoldFontWeight && !lexicalNode.hasFormat('bold')) {
        lexicalNode.toggleFormat('bold');
      }
      if (hasLinethroughTextDecoration && !lexicalNode.hasFormat('strikethrough')) {
        lexicalNode.toggleFormat('strikethrough');
      }
      if (hasItalicFontStyle && !lexicalNode.hasFormat('italic')) {
        lexicalNode.toggleFormat('italic');
      }
      if (hasUnderlineTextDecoration && !lexicalNode.hasFormat('underline')) {
        lexicalNode.toggleFormat('underline');
      }
      if (verticalAlign === 'sub' && !lexicalNode.hasFormat('subscript')) {
        lexicalNode.toggleFormat('subscript');
      }
      if (verticalAlign === 'super' && !lexicalNode.hasFormat('superscript')) {
        lexicalNode.toggleFormat('superscript');
      }
      if (shouldApply && !lexicalNode.hasFormat(shouldApply)) {
        lexicalNode.toggleFormat(shouldApply);
      }
      return lexicalNode;
    };
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /** @noInheritDoc */
  var TabNode = /*#__PURE__*/function (_TextNode) {
    function TabNode(key) {
      var _this3;
      _classCallCheck(this, TabNode);
      _this3 = _callSuper(this, TabNode, ['\t', key]);
      _this3.__detail = IS_UNMERGEABLE;
      return _this3;
    }
    _inherits(TabNode, _TextNode);
    return _createClass(TabNode, [{
      key: "exportJSON",
      value: function exportJSON() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(TabNode.prototype), "exportJSON", this).call(this)), {}, {
          type: 'tab',
          version: 1
        });
      }
    }, {
      key: "setTextContent",
      value: function setTextContent(_text) {
        {
          throw Error("TabNode does not support setTextContent");
        }
      }
    }, {
      key: "setDetail",
      value: function setDetail(_detail) {
        {
          throw Error("TabNode does not support setDetail");
        }
      }
    }, {
      key: "setMode",
      value: function setMode(_type) {
        {
          throw Error("TabNode does not support setMode");
        }
      }
    }, {
      key: "canInsertTextBefore",
      value: function canInsertTextBefore() {
        return false;
      }
    }, {
      key: "canInsertTextAfter",
      value: function canInsertTextAfter() {
        return false;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'tab';
      }
    }, {
      key: "clone",
      value: function clone(node) {
        var newNode = new TabNode(node.__key);
        // TabNode __text can be either '\t' or ''. insertText will remove the empty Node
        newNode.__text = node.__text;
        newNode.__format = node.__format;
        newNode.__style = node.__style;
        return newNode;
      }
    }, {
      key: "importDOM",
      value: function importDOM() {
        return null;
      }
    }, {
      key: "importJSON",
      value: function importJSON(serializedTabNode) {
        var node = $createTabNode();
        node.setFormat(serializedTabNode.format);
        node.setStyle(serializedTabNode.style);
        return node;
      }
    }]);
  }(TextNode);
  function $createTabNode() {
    return $applyNodeReplacement(new TabNode());
  }
  function $isTabNode(node) {
    return node instanceof TabNode;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */
  var Point = /*#__PURE__*/function () {
    function Point(key, offset, type) {
      _classCallCheck(this, Point);
      this._selection = null;
      this.key = key;
      this.offset = offset;
      this.type = type;
    }
    return _createClass(Point, [{
      key: "is",
      value: function is(point) {
        return this.key === point.key && this.offset === point.offset && this.type === point.type;
      }
    }, {
      key: "isBefore",
      value: function isBefore(b) {
        var aNode = this.getNode();
        var bNode = b.getNode();
        var aOffset = this.offset;
        var bOffset = b.offset;
        if ($isElementNode(aNode)) {
          var aNodeDescendant = aNode.getDescendantByIndex(aOffset);
          aNode = aNodeDescendant != null ? aNodeDescendant : aNode;
        }
        if ($isElementNode(bNode)) {
          var bNodeDescendant = bNode.getDescendantByIndex(bOffset);
          bNode = bNodeDescendant != null ? bNodeDescendant : bNode;
        }
        if (aNode === bNode) {
          return aOffset < bOffset;
        }
        return aNode.isBefore(bNode);
      }
    }, {
      key: "getNode",
      value: function getNode() {
        var key = this.key;
        var node = $getNodeByKey(key);
        if (node === null) {
          {
            throw Error("Point.getNode: node not found");
          }
        }
        return node;
      }
    }, {
      key: "set",
      value: function set(key, offset, type) {
        var selection = this._selection;
        var oldKey = this.key;
        this.key = key;
        this.offset = offset;
        this.type = type;
        if (!isCurrentlyReadOnlyMode()) {
          if ($getCompositionKey() === oldKey) {
            $setCompositionKey(key);
          }
          if (selection !== null) {
            selection.setCachedNodes(null);
            selection.dirty = true;
          }
        }
      }
    }]);
  }();
  function $createPoint(key, offset, type) {
    // @ts-expect-error: intentionally cast as we use a class for perf reasons
    return new Point(key, offset, type);
  }
  function selectPointOnNode(point, node) {
    var key = node.__key;
    var offset = point.offset;
    var type = 'element';
    if ($isTextNode(node)) {
      type = 'text';
      var textContentLength = node.getTextContentSize();
      if (offset > textContentLength) {
        offset = textContentLength;
      }
    } else if (!$isElementNode(node)) {
      var nextSibling = node.getNextSibling();
      if ($isTextNode(nextSibling)) {
        key = nextSibling.__key;
        offset = 0;
        type = 'text';
      } else {
        var parentNode = node.getParent();
        if (parentNode) {
          key = parentNode.__key;
          offset = node.getIndexWithinParent() + 1;
        }
      }
    }
    point.set(key, offset, type);
  }
  function $moveSelectionPointToEnd(point, node) {
    if ($isElementNode(node)) {
      var lastNode = node.getLastDescendant();
      if ($isElementNode(lastNode) || $isTextNode(lastNode)) {
        selectPointOnNode(point, lastNode);
      } else {
        selectPointOnNode(point, node);
      }
    } else {
      selectPointOnNode(point, node);
    }
  }
  function $transferStartingElementPointToTextPoint(start, end, format, style) {
    var element = start.getNode();
    var placementNode = element.getChildAtIndex(start.offset);
    var textNode = $createTextNode();
    var target = $isRootNode(element) ? $createParagraphNode().append(textNode) : textNode;
    textNode.setFormat(format);
    textNode.setStyle(style);
    if (placementNode === null) {
      element.append(target);
    } else {
      placementNode.insertBefore(target);
    }
    // Transfer the element point to a text point.
    if (start.is(end)) {
      end.set(textNode.__key, 0, 'text');
    }
    start.set(textNode.__key, 0, 'text');
  }
  function $setPointValues(point, key, offset, type) {
    point.key = key;
    point.offset = offset;
    point.type = type;
  }
  var NodeSelection = /*#__PURE__*/function () {
    function NodeSelection(objects) {
      _classCallCheck(this, NodeSelection);
      this._cachedNodes = null;
      this._nodes = objects;
      this.dirty = false;
    }
    return _createClass(NodeSelection, [{
      key: "getCachedNodes",
      value: function getCachedNodes() {
        return this._cachedNodes;
      }
    }, {
      key: "setCachedNodes",
      value: function setCachedNodes(nodes) {
        this._cachedNodes = nodes;
      }
    }, {
      key: "is",
      value: function is(selection) {
        if (!$isNodeSelection(selection)) {
          return false;
        }
        var a = this._nodes;
        var b = selection._nodes;
        return a.size === b.size && Array.from(a).every(function (key) {
          return b.has(key);
        });
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        return false;
      }
    }, {
      key: "isBackward",
      value: function isBackward() {
        return false;
      }
    }, {
      key: "getStartEndPoints",
      value: function getStartEndPoints() {
        return null;
      }
    }, {
      key: "add",
      value: function add(key) {
        this.dirty = true;
        this._nodes.add(key);
        this._cachedNodes = null;
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        this.dirty = true;
        this._nodes["delete"](key);
        this._cachedNodes = null;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.dirty = true;
        this._nodes.clear();
        this._cachedNodes = null;
      }
    }, {
      key: "has",
      value: function has(key) {
        return this._nodes.has(key);
      }
    }, {
      key: "clone",
      value: function clone() {
        return new NodeSelection(new Set(this._nodes));
      }
    }, {
      key: "extract",
      value: function extract() {
        return this.getNodes();
      }
    }, {
      key: "insertRawText",
      value: function insertRawText(text) {
        // Do nothing?
      }
    }, {
      key: "insertText",
      value: function insertText() {
        // Do nothing?
      }
    }, {
      key: "insertNodes",
      value: function insertNodes(nodes) {
        var selectedNodes = this.getNodes();
        var selectedNodesLength = selectedNodes.length;
        var lastSelectedNode = selectedNodes[selectedNodesLength - 1];
        var selectionAtEnd;
        // Insert nodes
        if ($isTextNode(lastSelectedNode)) {
          selectionAtEnd = lastSelectedNode.select();
        } else {
          var index = lastSelectedNode.getIndexWithinParent() + 1;
          selectionAtEnd = lastSelectedNode.getParentOrThrow().select(index, index);
        }
        selectionAtEnd.insertNodes(nodes);
        // Remove selected nodes
        for (var i = 0; i < selectedNodesLength; i++) {
          selectedNodes[i].remove();
        }
      }
    }, {
      key: "getNodes",
      value: function getNodes() {
        var cachedNodes = this._cachedNodes;
        if (cachedNodes !== null) {
          return cachedNodes;
        }
        var objects = this._nodes;
        var nodes = [];
        var _iterator7 = _createForOfIteratorHelper(objects),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var object = _step7.value;
            var node = $getNodeByKey(object);
            if (node !== null) {
              nodes.push(node);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        if (!isCurrentlyReadOnlyMode()) {
          this._cachedNodes = nodes;
        }
        return nodes;
      }
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        var nodes = this.getNodes();
        var textContent = '';
        for (var i = 0; i < nodes.length; i++) {
          textContent += nodes[i].getTextContent();
        }
        return textContent;
      }
    }]);
  }();
  function $isRangeSelection(x) {
    return x instanceof RangeSelection;
  }
  var RangeSelection = /*#__PURE__*/function () {
    function RangeSelection(anchor, focus, format, style) {
      _classCallCheck(this, RangeSelection);
      this.anchor = anchor;
      this.focus = focus;
      anchor._selection = this;
      focus._selection = this;
      this._cachedNodes = null;
      this.format = format;
      this.style = style;
      this.dirty = false;
    }
    return _createClass(RangeSelection, [{
      key: "getCachedNodes",
      value: function getCachedNodes() {
        return this._cachedNodes;
      }
    }, {
      key: "setCachedNodes",
      value: function setCachedNodes(nodes) {
        this._cachedNodes = nodes;
      }

      /**
       * Used to check if the provided selections is equal to this one by value,
       * inluding anchor, focus, format, and style properties.
       * @param selection - the Selection to compare this one to.
       * @returns true if the Selections are equal, false otherwise.
       */
    }, {
      key: "is",
      value: function is(selection) {
        if (!$isRangeSelection(selection)) {
          return false;
        }
        return this.anchor.is(selection.anchor) && this.focus.is(selection.focus) && this.format === selection.format && this.style === selection.style;
      }

      /**
       * Returns whether the Selection is "collapsed", meaning the anchor and focus are
       * the same node and have the same offset.
       *
       * @returns true if the Selection is collapsed, false otherwise.
       */
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        return this.anchor.is(this.focus);
      }

      /**
       * Gets all the nodes in the Selection. Uses caching to make it generally suitable
       * for use in hot paths.
       *
       * @returns an Array containing all the nodes in the Selection
       */
    }, {
      key: "getNodes",
      value: function getNodes() {
        var cachedNodes = this._cachedNodes;
        if (cachedNodes !== null) {
          return cachedNodes;
        }
        var anchor = this.anchor;
        var focus = this.focus;
        var isBefore = anchor.isBefore(focus);
        var firstPoint = isBefore ? anchor : focus;
        var lastPoint = isBefore ? focus : anchor;
        var firstNode = firstPoint.getNode();
        var lastNode = lastPoint.getNode();
        var startOffset = firstPoint.offset;
        var endOffset = lastPoint.offset;
        if ($isElementNode(firstNode)) {
          var firstNodeDescendant = firstNode.getDescendantByIndex(startOffset);
          firstNode = firstNodeDescendant != null ? firstNodeDescendant : firstNode;
        }
        if ($isElementNode(lastNode)) {
          var lastNodeDescendant = lastNode.getDescendantByIndex(endOffset);
          // We don't want to over-select, as node selection infers the child before
          // the last descendant, not including that descendant.
          if (lastNodeDescendant !== null && lastNodeDescendant !== firstNode && lastNode.getChildAtIndex(endOffset) === lastNodeDescendant) {
            lastNodeDescendant = lastNodeDescendant.getPreviousSibling();
          }
          lastNode = lastNodeDescendant != null ? lastNodeDescendant : lastNode;
        }
        var nodes;
        if (firstNode.is(lastNode)) {
          if ($isElementNode(firstNode) && firstNode.getChildrenSize() > 0) {
            nodes = [];
          } else {
            nodes = [firstNode];
          }
        } else {
          nodes = firstNode.getNodesBetween(lastNode);
        }
        if (!isCurrentlyReadOnlyMode()) {
          this._cachedNodes = nodes;
        }
        return nodes;
      }

      /**
       * Sets this Selection to be of type "text" at the provided anchor and focus values.
       *
       * @param anchorNode - the anchor node to set on the Selection
       * @param anchorOffset - the offset to set on the Selection
       * @param focusNode - the focus node to set on the Selection
       * @param focusOffset - the focus offset to set on the Selection
       */
    }, {
      key: "setTextNodeRange",
      value: function setTextNodeRange(anchorNode, anchorOffset, focusNode, focusOffset) {
        $setPointValues(this.anchor, anchorNode.__key, anchorOffset, 'text');
        $setPointValues(this.focus, focusNode.__key, focusOffset, 'text');
        this._cachedNodes = null;
        this.dirty = true;
      }

      /**
       * Gets the (plain) text content of all the nodes in the selection.
       *
       * @returns a string representing the text content of all the nodes in the Selection
       */
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        var nodes = this.getNodes();
        if (nodes.length === 0) {
          return '';
        }
        var firstNode = nodes[0];
        var lastNode = nodes[nodes.length - 1];
        var anchor = this.anchor;
        var focus = this.focus;
        var isBefore = anchor.isBefore(focus);
        var _$getCharacterOffsets = $getCharacterOffsets(this),
          _$getCharacterOffsets2 = _slicedToArray(_$getCharacterOffsets, 2),
          anchorOffset = _$getCharacterOffsets2[0],
          focusOffset = _$getCharacterOffsets2[1];
        var textContent = '';
        var prevWasElement = true;
        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];
          if ($isElementNode(node) && !node.isInline()) {
            if (!prevWasElement) {
              textContent += '\n';
            }
            if (node.isEmpty()) {
              prevWasElement = false;
            } else {
              prevWasElement = true;
            }
          } else {
            prevWasElement = false;
            if ($isTextNode(node)) {
              var text = node.getTextContent();
              if (node === firstNode) {
                if (node === lastNode) {
                  if (anchor.type !== 'element' || focus.type !== 'element' || focus.offset === anchor.offset) {
                    text = anchorOffset < focusOffset ? text.slice(anchorOffset, focusOffset) : text.slice(focusOffset, anchorOffset);
                  }
                } else {
                  text = isBefore ? text.slice(anchorOffset) : text.slice(focusOffset);
                }
              } else if (node === lastNode) {
                text = isBefore ? text.slice(0, focusOffset) : text.slice(0, anchorOffset);
              }
              textContent += text;
            } else if (($isDecoratorNode(node) || $isLineBreakNode(node)) && (node !== lastNode || !this.isCollapsed())) {
              textContent += node.getTextContent();
            }
          }
        }
        return textContent;
      }

      /**
       * Attempts to map a DOM selection range onto this Lexical Selection,
       * setting the anchor, focus, and type accordingly
       *
       * @param range a DOM Selection range conforming to the StaticRange interface.
       */
    }, {
      key: "applyDOMRange",
      value: function applyDOMRange(range) {
        var editor = getActiveEditor();
        var currentEditorState = editor.getEditorState();
        var lastSelection = currentEditorState._selection;
        var resolvedSelectionPoints = $internalResolveSelectionPoints(range.startContainer, range.startOffset, range.endContainer, range.endOffset, editor, lastSelection);
        if (resolvedSelectionPoints === null) {
          return;
        }
        var _resolvedSelectionPoi = _slicedToArray(resolvedSelectionPoints, 2),
          anchorPoint = _resolvedSelectionPoi[0],
          focusPoint = _resolvedSelectionPoi[1];
        $setPointValues(this.anchor, anchorPoint.key, anchorPoint.offset, anchorPoint.type);
        $setPointValues(this.focus, focusPoint.key, focusPoint.offset, focusPoint.type);
        this._cachedNodes = null;
      }

      /**
       * Creates a new RangeSelection, copying over all the property values from this one.
       *
       * @returns a new RangeSelection with the same property values as this one.
       */
    }, {
      key: "clone",
      value: function clone() {
        var anchor = this.anchor;
        var focus = this.focus;
        var selection = new RangeSelection($createPoint(anchor.key, anchor.offset, anchor.type), $createPoint(focus.key, focus.offset, focus.type), this.format, this.style);
        return selection;
      }

      /**
       * Toggles the provided format on all the TextNodes in the Selection.
       *
       * @param format a string TextFormatType to toggle on the TextNodes in the selection
       */
    }, {
      key: "toggleFormat",
      value: function toggleFormat(format) {
        this.format = toggleTextFormatType(this.format, format, null);
        this.dirty = true;
      }

      /**
       * Sets the value of the style property on the Selection
       *
       * @param style - the style to set at the value of the style property.
       */
    }, {
      key: "setStyle",
      value: function setStyle(style) {
        this.style = style;
        this.dirty = true;
      }

      /**
       * Returns whether the provided TextFormatType is present on the Selection. This will be true if any node in the Selection
       * has the specified format.
       *
       * @param type the TextFormatType to check for.
       * @returns true if the provided format is currently toggled on on the Selection, false otherwise.
       */
    }, {
      key: "hasFormat",
      value: function hasFormat(type) {
        var formatFlag = TEXT_TYPE_TO_FORMAT[type];
        return (this.format & formatFlag) !== 0;
      }

      /**
       * Attempts to insert the provided text into the EditorState at the current Selection.
       * converts tabs, newlines, and carriage returns into LexicalNodes.
       *
       * @param text the text to insert into the Selection
       */
    }, {
      key: "insertRawText",
      value: function insertRawText(text) {
        var parts = text.split(/(\r?\n|\t)/);
        var nodes = [];
        var length = parts.length;
        for (var i = 0; i < length; i++) {
          var part = parts[i];
          if (part === '\n' || part === '\r\n') {
            nodes.push($createLineBreakNode());
          } else if (part === '\t') {
            nodes.push($createTabNode());
          } else {
            nodes.push($createTextNode(part));
          }
        }
        this.insertNodes(nodes);
      }

      /**
       * Attempts to insert the provided text into the EditorState at the current Selection as a new
       * Lexical TextNode, according to a series of insertion heuristics based on the selection type and position.
       *
       * @param text the text to insert into the Selection
       */
    }, {
      key: "insertText",
      value: function insertText(text) {
        var anchor = this.anchor;
        var focus = this.focus;
        var format = this.format;
        var style = this.style;
        var firstPoint = anchor;
        var endPoint = focus;
        if (!this.isCollapsed() && focus.isBefore(anchor)) {
          firstPoint = focus;
          endPoint = anchor;
        }
        if (firstPoint.type === 'element') {
          $transferStartingElementPointToTextPoint(firstPoint, endPoint, format, style);
        }
        var startOffset = firstPoint.offset;
        var endOffset = endPoint.offset;
        var selectedNodes = this.getNodes();
        var selectedNodesLength = selectedNodes.length;
        var firstNode = selectedNodes[0];
        if (!$isTextNode(firstNode)) {
          {
            throw Error("insertText: first node is not a text node");
          }
        }
        var firstNodeText = firstNode.getTextContent();
        var firstNodeTextLength = firstNodeText.length;
        var firstNodeParent = firstNode.getParentOrThrow();
        var lastIndex = selectedNodesLength - 1;
        var lastNode = selectedNodes[lastIndex];
        if (selectedNodesLength === 1 && endPoint.type === 'element') {
          endOffset = firstNodeTextLength;
          endPoint.set(firstPoint.key, endOffset, 'text');
        }
        if (this.isCollapsed() && startOffset === firstNodeTextLength && (firstNode.isSegmented() || firstNode.isToken() || !firstNode.canInsertTextAfter() || !firstNodeParent.canInsertTextAfter() && firstNode.getNextSibling() === null)) {
          var nextSibling = firstNode.getNextSibling();
          if (!$isTextNode(nextSibling) || !nextSibling.canInsertTextBefore() || $isTokenOrSegmented(nextSibling)) {
            nextSibling = $createTextNode();
            nextSibling.setFormat(format);
            nextSibling.setStyle(style);
            if (!firstNodeParent.canInsertTextAfter()) {
              firstNodeParent.insertAfter(nextSibling);
            } else {
              firstNode.insertAfter(nextSibling);
            }
          }
          nextSibling.select(0, 0);
          firstNode = nextSibling;
          if (text !== '') {
            this.insertText(text);
            return;
          }
        } else if (this.isCollapsed() && startOffset === 0 && (firstNode.isSegmented() || firstNode.isToken() || !firstNode.canInsertTextBefore() || !firstNodeParent.canInsertTextBefore() && firstNode.getPreviousSibling() === null)) {
          var prevSibling = firstNode.getPreviousSibling();
          if (!$isTextNode(prevSibling) || $isTokenOrSegmented(prevSibling)) {
            prevSibling = $createTextNode();
            prevSibling.setFormat(format);
            if (!firstNodeParent.canInsertTextBefore()) {
              firstNodeParent.insertBefore(prevSibling);
            } else {
              firstNode.insertBefore(prevSibling);
            }
          }
          prevSibling.select();
          firstNode = prevSibling;
          if (text !== '') {
            this.insertText(text);
            return;
          }
        } else if (firstNode.isSegmented() && startOffset !== firstNodeTextLength) {
          var textNode = $createTextNode(firstNode.getTextContent());
          textNode.setFormat(format);
          firstNode.replace(textNode);
          firstNode = textNode;
        } else if (!this.isCollapsed() && text !== '') {
          // When the firstNode or lastNode parents are elements that
          // do not allow text to be inserted before or after, we first
          // clear the content. Then we normalize selection, then insert
          // the new content.
          var lastNodeParent = lastNode.getParent();
          if (!firstNodeParent.canInsertTextBefore() || !firstNodeParent.canInsertTextAfter() || $isElementNode(lastNodeParent) && (!lastNodeParent.canInsertTextBefore() || !lastNodeParent.canInsertTextAfter())) {
            this.insertText('');
            $normalizeSelectionPointsForBoundaries(this.anchor, this.focus, null);
            this.insertText(text);
            return;
          }
        }
        if (selectedNodesLength === 1) {
          if (firstNode.isToken()) {
            var _textNode = $createTextNode(text);
            _textNode.select();
            firstNode.replace(_textNode);
            return;
          }
          var firstNodeFormat = firstNode.getFormat();
          var firstNodeStyle = firstNode.getStyle();
          if (startOffset === endOffset && (firstNodeFormat !== format || firstNodeStyle !== style)) {
            if (firstNode.getTextContent() === '') {
              firstNode.setFormat(format);
              firstNode.setStyle(style);
            } else {
              var _textNode2 = $createTextNode(text);
              _textNode2.setFormat(format);
              _textNode2.setStyle(style);
              _textNode2.select();
              if (startOffset === 0) {
                firstNode.insertBefore(_textNode2, false);
              } else {
                var _firstNode$splitText = firstNode.splitText(startOffset),
                  _firstNode$splitText2 = _slicedToArray(_firstNode$splitText, 1),
                  targetNode = _firstNode$splitText2[0];
                targetNode.insertAfter(_textNode2, false);
              }
              // When composing, we need to adjust the anchor offset so that
              // we correctly replace that right range.
              if (_textNode2.isComposing() && this.anchor.type === 'text') {
                this.anchor.offset -= text.length;
              }
              return;
            }
          } else if ($isTabNode(firstNode)) {
            // We don't need to check for delCount because there is only the entire selected node case
            // that can hit here for content size 1 and with canInsertTextBeforeAfter false
            var _textNode3 = $createTextNode(text);
            _textNode3.setFormat(format);
            _textNode3.setStyle(style);
            _textNode3.select();
            firstNode.replace(_textNode3);
            return;
          }
          var delCount = endOffset - startOffset;
          firstNode = firstNode.spliceText(startOffset, delCount, text, true);
          if (firstNode.getTextContent() === '') {
            firstNode.remove();
          } else if (this.anchor.type === 'text') {
            if (firstNode.isComposing()) {
              // When composing, we need to adjust the anchor offset so that
              // we correctly replace that right range.
              this.anchor.offset -= text.length;
            } else {
              this.format = firstNodeFormat;
              this.style = firstNodeStyle;
            }
          }
        } else {
          var markedNodeKeysForKeep = new Set([].concat(_toConsumableArray(firstNode.getParentKeys()), _toConsumableArray(lastNode.getParentKeys())));

          // We have to get the parent elements before the next section,
          // as in that section we might mutate the lastNode.
          var firstElement = $isElementNode(firstNode) ? firstNode : firstNode.getParentOrThrow();
          var lastElement = $isElementNode(lastNode) ? lastNode : lastNode.getParentOrThrow();
          var lastElementChild = lastNode;

          // If the last element is inline, we should instead look at getting
          // the nodes of its parent, rather than itself. This behavior will
          // then better match how text node insertions work. We will need to
          // also update the last element's child accordingly as we do this.
          if (!firstElement.is(lastElement) && lastElement.isInline()) {
            // Keep traversing till we have a non-inline element parent.
            do {
              lastElementChild = lastElement;
              lastElement = lastElement.getParentOrThrow();
            } while (lastElement.isInline());
          }

          // Handle mutations to the last node.
          if (endPoint.type === 'text' && (endOffset !== 0 || lastNode.getTextContent() === '') || endPoint.type === 'element' && lastNode.getIndexWithinParent() < endOffset) {
            if ($isTextNode(lastNode) && !lastNode.isToken() && endOffset !== lastNode.getTextContentSize()) {
              if (lastNode.isSegmented()) {
                var _textNode4 = $createTextNode(lastNode.getTextContent());
                lastNode.replace(_textNode4);
                lastNode = _textNode4;
              }
              // root node selections only select whole nodes, so no text splice is necessary
              if (!$isRootNode(endPoint.getNode()) && endPoint.type === 'text') {
                lastNode = lastNode.spliceText(0, endOffset, '');
              }
              markedNodeKeysForKeep.add(lastNode.__key);
            } else {
              var _lastNodeParent = lastNode.getParentOrThrow();
              if (!_lastNodeParent.canBeEmpty() && _lastNodeParent.getChildrenSize() === 1) {
                _lastNodeParent.remove();
              } else {
                lastNode.remove();
              }
            }
          } else {
            markedNodeKeysForKeep.add(lastNode.__key);
          }

          // Either move the remaining nodes of the last parent to after
          // the first child, or remove them entirely. If the last parent
          // is the same as the first parent, this logic also works.
          var lastNodeChildren = lastElement.getChildren();
          var selectedNodesSet = new Set(selectedNodes);
          var firstAndLastElementsAreEqual = firstElement.is(lastElement);

          // We choose a target to insert all nodes after. In the case of having
          // and inline starting parent element with a starting node that has no
          // siblings, we should insert after the starting parent element, otherwise
          // we will incorrectly merge into the starting parent element.
          // TODO: should we keep on traversing parents if we're inside another
          // nested inline element?
          var insertionTarget = firstElement.isInline() && firstNode.getNextSibling() === null ? firstElement : firstNode;
          for (var i = lastNodeChildren.length - 1; i >= 0; i--) {
            var lastNodeChild = lastNodeChildren[i];
            if (lastNodeChild.is(firstNode) || $isElementNode(lastNodeChild) && lastNodeChild.isParentOf(firstNode)) {
              break;
            }
            if (lastNodeChild.isAttached()) {
              if (!selectedNodesSet.has(lastNodeChild) || lastNodeChild.is(lastElementChild)) {
                if (!firstAndLastElementsAreEqual) {
                  insertionTarget.insertAfter(lastNodeChild, false);
                }
              } else {
                lastNodeChild.remove();
              }
            }
          }
          if (!firstAndLastElementsAreEqual) {
            // Check if we have already moved out all the nodes of the
            // last parent, and if so, traverse the parent tree and mark
            // them all as being able to deleted too.
            var parent = lastElement;
            var lastRemovedParent = null;
            while (parent !== null) {
              var children = parent.getChildren();
              var childrenLength = children.length;
              if (childrenLength === 0 || children[childrenLength - 1].is(lastRemovedParent)) {
                markedNodeKeysForKeep["delete"](parent.__key);
                lastRemovedParent = parent;
              }
              parent = parent.getParent();
            }
          }

          // Ensure we do splicing after moving of nodes, as splicing
          // can have side-effects (in the case of hashtags).
          if (!firstNode.isToken()) {
            firstNode = firstNode.spliceText(startOffset, firstNodeTextLength - startOffset, text, true);
            if (firstNode.getTextContent() === '') {
              firstNode.remove();
            } else if (firstNode.isComposing() && this.anchor.type === 'text') {
              // When composing, we need to adjust the anchor offset so that
              // we correctly replace that right range.
              this.anchor.offset -= text.length;
            }
          } else if (startOffset === firstNodeTextLength) {
            firstNode.select();
          } else {
            var _textNode5 = $createTextNode(text);
            _textNode5.select();
            firstNode.replace(_textNode5);
          }

          // Remove all selected nodes that haven't already been removed.
          for (var _i6 = 1; _i6 < selectedNodesLength; _i6++) {
            var selectedNode = selectedNodes[_i6];
            var key = selectedNode.__key;
            if (!markedNodeKeysForKeep.has(key)) {
              selectedNode.remove();
            }
          }
        }
      }

      /**
       * Removes the text in the Selection, adjusting the EditorState accordingly.
       */
    }, {
      key: "removeText",
      value: function removeText() {
        this.insertText('');
      }

      /**
       * Applies the provided format to the TextNodes in the Selection, splitting or
       * merging nodes as necessary.
       *
       * @param formatType the format type to apply to the nodes in the Selection.
       */
    }, {
      key: "formatText",
      value: function formatText(formatType) {
        if (this.isCollapsed()) {
          this.toggleFormat(formatType);
          // When changing format, we should stop composition
          $setCompositionKey(null);
          return;
        }
        var selectedNodes = this.getNodes();
        var selectedTextNodes = [];
        var _iterator8 = _createForOfIteratorHelper(selectedNodes),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var selectedNode = _step8.value;
            if ($isTextNode(selectedNode)) {
              selectedTextNodes.push(selectedNode);
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        var selectedTextNodesLength = selectedTextNodes.length;
        if (selectedTextNodesLength === 0) {
          this.toggleFormat(formatType);
          // When changing format, we should stop composition
          $setCompositionKey(null);
          return;
        }
        var anchor = this.anchor;
        var focus = this.focus;
        var isBackward = this.isBackward();
        var startPoint = isBackward ? focus : anchor;
        var endPoint = isBackward ? anchor : focus;
        var firstIndex = 0;
        var firstNode = selectedTextNodes[0];
        var startOffset = startPoint.type === 'element' ? 0 : startPoint.offset;

        // In case selection started at the end of text node use next text node
        if (startPoint.type === 'text' && startOffset === firstNode.getTextContentSize()) {
          firstIndex = 1;
          firstNode = selectedTextNodes[1];
          startOffset = 0;
        }
        if (firstNode == null) {
          return;
        }
        var firstNextFormat = firstNode.getFormatFlags(formatType, null);
        var lastIndex = selectedTextNodesLength - 1;
        var lastNode = selectedTextNodes[lastIndex];
        var endOffset = endPoint.type === 'text' ? endPoint.offset : lastNode.getTextContentSize();

        // Single node selected
        if (firstNode.is(lastNode)) {
          // No actual text is selected, so do nothing.
          if (startOffset === endOffset) {
            return;
          }
          // The entire node is selected or it is token, so just format it
          if ($isTokenOrSegmented(firstNode) || startOffset === 0 && endOffset === firstNode.getTextContentSize()) {
            firstNode.setFormat(firstNextFormat);
          } else {
            // Node is partially selected, so split it into two nodes
            // add style the selected one.
            var splitNodes = firstNode.splitText(startOffset, endOffset);
            var replacement = startOffset === 0 ? splitNodes[0] : splitNodes[1];
            replacement.setFormat(firstNextFormat);

            // Update selection only if starts/ends on text node
            if (startPoint.type === 'text') {
              startPoint.set(replacement.__key, 0, 'text');
            }
            if (endPoint.type === 'text') {
              endPoint.set(replacement.__key, endOffset - startOffset, 'text');
            }
          }
          this.format = firstNextFormat;
          return;
        }
        // Multiple nodes selected
        // The entire first node isn't selected, so split it
        if (startOffset !== 0 && !$isTokenOrSegmented(firstNode)) {
          var _firstNode$splitText3 = firstNode.splitText(startOffset);
          var _firstNode$splitText4 = _slicedToArray(_firstNode$splitText3, 2);
          firstNode = _firstNode$splitText4[1];
          startOffset = 0;
        }
        firstNode.setFormat(firstNextFormat);
        var lastNextFormat = lastNode.getFormatFlags(formatType, firstNextFormat);
        // If the offset is 0, it means no actual characters are selected,
        // so we skip formatting the last node altogether.
        if (endOffset > 0) {
          if (endOffset !== lastNode.getTextContentSize() && !$isTokenOrSegmented(lastNode)) {
            var _lastNode$splitText = lastNode.splitText(endOffset);
            var _lastNode$splitText2 = _slicedToArray(_lastNode$splitText, 1);
            lastNode = _lastNode$splitText2[0];
          }
          lastNode.setFormat(lastNextFormat);
        }

        // Process all text nodes in between
        for (var i = firstIndex + 1; i < lastIndex; i++) {
          var textNode = selectedTextNodes[i];
          var nextFormat = textNode.getFormatFlags(formatType, lastNextFormat);
          textNode.setFormat(nextFormat);
        }

        // Update selection only if starts/ends on text node
        if (startPoint.type === 'text') {
          startPoint.set(firstNode.__key, startOffset, 'text');
        }
        if (endPoint.type === 'text') {
          endPoint.set(lastNode.__key, endOffset, 'text');
        }
        this.format = firstNextFormat | lastNextFormat;
      }

      /**
       * Attempts to "intelligently" insert an arbitrary list of Lexical nodes into the EditorState at the
       * current Selection according to a set of heuristics that determine how surrounding nodes
       * should be changed, replaced, or moved to accomodate the incoming ones.
       *
       * @param nodes - the nodes to insert
       */
    }, {
      key: "insertNodes",
      value: function insertNodes(nodes) {
        if (nodes.length === 0) {
          return;
        }
        if (this.anchor.key === 'root') {
          this.insertParagraph();
          var selection = $getSelection();
          if (!$isRangeSelection(selection)) {
            throw Error("Expected RangeSelection after insertParagraph");
          }
          return selection.insertNodes(nodes);
        }
        var firstPoint = this.isBackward() ? this.focus : this.anchor;
        var firstBlock = $getAncestor(firstPoint.getNode(), INTERNAL_$isBlock);
        var last = nodes[nodes.length - 1];

        // CASE 1: insert inside a code block
        if ('__language' in firstBlock && $isElementNode(firstBlock)) {
          if ('__language' in nodes[0]) {
            this.insertText(nodes[0].getTextContent());
          } else {
            var index = $removeTextAndSplitBlock(this);
            firstBlock.splice(index, 0, nodes);
            last.selectEnd();
          }
          return;
        }

        // CASE 2: All elements of the array are inline
        var notInline = function notInline(node) {
          return ($isElementNode(node) || $isDecoratorNode(node)) && !node.isInline();
        };
        if (!nodes.some(notInline)) {
          if (!$isElementNode(firstBlock)) {
            throw Error("Expected 'firstBlock' to be an ElementNode");
          }
          var _index = $removeTextAndSplitBlock(this);
          firstBlock.splice(_index, 0, nodes);
          last.selectEnd();
          return;
        }

        // CASE 3: At least 1 element of the array is not inline
        var blocksParent = $wrapInlineNodes(nodes);
        var nodeToSelect = blocksParent.getLastDescendant();
        var blocks = blocksParent.getChildren();
        var isLI = function isLI(node) {
          return '__value' in node && '__checked' in node;
        };
        var isMergeable = function isMergeable(node) {
          return $isElementNode(node) && INTERNAL_$isBlock(node) && !node.isEmpty() && $isElementNode(firstBlock) && (!firstBlock.isEmpty() || isLI(firstBlock));
        };
        var shouldInsert = !$isElementNode(firstBlock) || !firstBlock.isEmpty();
        var insertedParagraph = shouldInsert ? this.insertParagraph() : null;
        var lastToInsert = blocks[blocks.length - 1];
        var firstToInsert = blocks[0];
        if (isMergeable(firstToInsert)) {
          if (!$isElementNode(firstBlock)) {
            throw Error("Expected 'firstBlock' to be an ElementNode");
          }
          firstBlock.append.apply(firstBlock, _toConsumableArray(firstToInsert.getChildren()));
          firstToInsert = blocks[1];
        }
        if (firstToInsert) {
          insertRangeAfter(firstBlock, firstToInsert);
        }
        var lastInsertedBlock = $getAncestor(nodeToSelect, INTERNAL_$isBlock);
        if (insertedParagraph && $isElementNode(lastInsertedBlock) && (isLI(insertedParagraph) || INTERNAL_$isBlock(lastToInsert))) {
          lastInsertedBlock.append.apply(lastInsertedBlock, _toConsumableArray(insertedParagraph.getChildren()));
          insertedParagraph.remove();
        }
        if ($isElementNode(firstBlock) && firstBlock.isEmpty()) {
          firstBlock.remove();
        }
        nodeToSelect.selectEnd();

        // To understand this take a look at the test "can wrap post-linebreak nodes into new element"
        var lastChild = $isElementNode(firstBlock) ? firstBlock.getLastChild() : null;
        if ($isLineBreakNode(lastChild) && lastInsertedBlock !== firstBlock) {
          lastChild.remove();
        }
      }

      /**
       * Inserts a new ParagraphNode into the EditorState at the current Selection
       *
       * @returns the newly inserted node.
       */
    }, {
      key: "insertParagraph",
      value: function insertParagraph() {
        if (this.anchor.key === 'root') {
          var paragraph = $createParagraphNode();
          $getRoot().splice(this.anchor.offset, 0, [paragraph]);
          paragraph.select();
          return paragraph;
        }
        var index = $removeTextAndSplitBlock(this);
        var block = $getAncestor(this.anchor.getNode(), INTERNAL_$isBlock);
        if (!$isElementNode(block)) {
          throw Error("Expected ancestor to be an ElementNode");
        }
        var firstToAppend = block.getChildAtIndex(index);
        var nodesToInsert = firstToAppend ? [firstToAppend].concat(_toConsumableArray(firstToAppend.getNextSiblings())) : [];
        var newBlock = block.insertNewAfter(this, false);
        if (newBlock) {
          newBlock.append.apply(newBlock, _toConsumableArray(nodesToInsert));
          newBlock.selectStart();
          return newBlock;
        }
        // if newBlock is null, it means that block is of type CodeNode.
        return null;
      }

      /**
       * Inserts a logical linebreak, which may be a new LineBreakNode or a new ParagraphNode, into the EditorState at the
       * current Selection.
       */
    }, {
      key: "insertLineBreak",
      value: function insertLineBreak(selectStart) {
        var lineBreak = $createLineBreakNode();
        this.insertNodes([lineBreak]);
        // this is used in MacOS with the command 'ctrl-O' (openLineBreak)
        if (selectStart) {
          var parent = lineBreak.getParentOrThrow();
          var index = lineBreak.getIndexWithinParent();
          parent.select(index, index);
        }
      }

      /**
       * Extracts the nodes in the Selection, splitting nodes where necessary
       * to get offset-level precision.
       *
       * @returns The nodes in the Selection
       */
    }, {
      key: "extract",
      value: function extract() {
        var selectedNodes = this.getNodes();
        var selectedNodesLength = selectedNodes.length;
        var lastIndex = selectedNodesLength - 1;
        var anchor = this.anchor;
        var focus = this.focus;
        var firstNode = selectedNodes[0];
        var lastNode = selectedNodes[lastIndex];
        var _$getCharacterOffsets3 = $getCharacterOffsets(this),
          _$getCharacterOffsets4 = _slicedToArray(_$getCharacterOffsets3, 2),
          anchorOffset = _$getCharacterOffsets4[0],
          focusOffset = _$getCharacterOffsets4[1];
        if (selectedNodesLength === 0) {
          return [];
        } else if (selectedNodesLength === 1) {
          if ($isTextNode(firstNode) && !this.isCollapsed()) {
            var startOffset = anchorOffset > focusOffset ? focusOffset : anchorOffset;
            var endOffset = anchorOffset > focusOffset ? anchorOffset : focusOffset;
            var splitNodes = firstNode.splitText(startOffset, endOffset);
            var node = startOffset === 0 ? splitNodes[0] : splitNodes[1];
            return node != null ? [node] : [];
          }
          return [firstNode];
        }
        var isBefore = anchor.isBefore(focus);
        if ($isTextNode(firstNode)) {
          var _startOffset = isBefore ? anchorOffset : focusOffset;
          if (_startOffset === firstNode.getTextContentSize()) {
            selectedNodes.shift();
          } else if (_startOffset !== 0) {
            var _firstNode$splitText5 = firstNode.splitText(_startOffset);
            var _firstNode$splitText6 = _slicedToArray(_firstNode$splitText5, 2);
            firstNode = _firstNode$splitText6[1];
            selectedNodes[0] = firstNode;
          }
        }
        if ($isTextNode(lastNode)) {
          var lastNodeText = lastNode.getTextContent();
          var lastNodeTextLength = lastNodeText.length;
          var _endOffset = isBefore ? focusOffset : anchorOffset;
          if (_endOffset === 0) {
            selectedNodes.pop();
          } else if (_endOffset !== lastNodeTextLength) {
            var _lastNode$splitText3 = lastNode.splitText(_endOffset);
            var _lastNode$splitText4 = _slicedToArray(_lastNode$splitText3, 1);
            lastNode = _lastNode$splitText4[0];
            selectedNodes[lastIndex] = lastNode;
          }
        }
        return selectedNodes;
      }

      /**
       * Modifies the Selection according to the parameters and a set of heuristics that account for
       * various node types. Can be used to safely move or extend selection by one logical "unit" without
       * dealing explicitly with all the possible node types.
       *
       * @param alter the type of modification to perform
       * @param isBackward whether or not selection is backwards
       * @param granularity the granularity at which to apply the modification
       */
    }, {
      key: "modify",
      value: function modify(alter, isBackward, granularity) {
        var focus = this.focus;
        var anchor = this.anchor;
        var collapse = alter === 'move';

        // Handle the selection movement around decorators.
        var possibleNode = $getAdjacentNode(focus, isBackward);
        if ($isDecoratorNode(possibleNode) && !possibleNode.isIsolated()) {
          // Make it possible to move selection from range selection to
          // node selection on the node.
          if (collapse && possibleNode.isKeyboardSelectable()) {
            var nodeSelection = $createNodeSelection();
            nodeSelection.add(possibleNode.__key);
            $setSelection(nodeSelection);
            return;
          }
          var sibling = isBackward ? possibleNode.getPreviousSibling() : possibleNode.getNextSibling();
          if (!$isTextNode(sibling)) {
            var parent = possibleNode.getParentOrThrow();
            var offset;
            var elementKey;
            if ($isElementNode(sibling)) {
              elementKey = sibling.__key;
              offset = isBackward ? sibling.getChildrenSize() : 0;
            } else {
              offset = possibleNode.getIndexWithinParent();
              elementKey = parent.__key;
              if (!isBackward) {
                offset++;
              }
            }
            focus.set(elementKey, offset, 'element');
            if (collapse) {
              anchor.set(elementKey, offset, 'element');
            }
            return;
          } else {
            var siblingKey = sibling.__key;
            var _offset = isBackward ? sibling.getTextContent().length : 0;
            focus.set(siblingKey, _offset, 'text');
            if (collapse) {
              anchor.set(siblingKey, _offset, 'text');
            }
            return;
          }
        }
        var editor = getActiveEditor();
        var domSelection = getDOMSelection(editor._window);
        if (!domSelection) {
          return;
        }
        var blockCursorElement = editor._blockCursorElement;
        var rootElement = editor._rootElement;
        // Remove the block cursor element if it exists. This will ensure selection
        // works as intended. If we leave it in the DOM all sorts of strange bugs
        // occur. :/
        if (rootElement !== null && blockCursorElement !== null && $isElementNode(possibleNode) && !possibleNode.isInline() && !possibleNode.canBeEmpty()) {
          removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
        }
        // We use the DOM selection.modify API here to "tell" us what the selection
        // will be. We then use it to update the Lexical selection accordingly. This
        // is much more reliable than waiting for a beforeinput and using the ranges
        // from getTargetRanges(), and is also better than trying to do it ourselves
        // using Intl.Segmenter or other workarounds that struggle with word segments
        // and line segments (especially with word wrapping and non-Roman languages).
        moveNativeSelection(domSelection, alter, isBackward ? 'backward' : 'forward', granularity);
        // Guard against no ranges
        if (domSelection.rangeCount > 0) {
          var range = domSelection.getRangeAt(0);
          // Apply the DOM selection to our Lexical selection.
          var anchorNode = this.anchor.getNode();
          var root = $isRootNode(anchorNode) ? anchorNode : $getNearestRootOrShadowRoot(anchorNode);
          this.applyDOMRange(range);
          this.dirty = true;
          if (!collapse) {
            // Validate selection; make sure that the new extended selection respects shadow roots
            var nodes = this.getNodes();
            var validNodes = [];
            var shrinkSelection = false;
            for (var i = 0; i < nodes.length; i++) {
              var nextNode = nodes[i];
              if ($hasAncestor(nextNode, root)) {
                validNodes.push(nextNode);
              } else {
                shrinkSelection = true;
              }
            }
            if (shrinkSelection && validNodes.length > 0) {
              // validNodes length check is a safeguard against an invalid selection; as getNodes()
              // will return an empty array in this case
              if (isBackward) {
                var firstValidNode = validNodes[0];
                if ($isElementNode(firstValidNode)) {
                  firstValidNode.selectStart();
                } else {
                  firstValidNode.getParentOrThrow().selectStart();
                }
              } else {
                var lastValidNode = validNodes[validNodes.length - 1];
                if ($isElementNode(lastValidNode)) {
                  lastValidNode.selectEnd();
                } else {
                  lastValidNode.getParentOrThrow().selectEnd();
                }
              }
            }

            // Because a range works on start and end, we might need to flip
            // the anchor and focus points to match what the DOM has, not what
            // the range has specifically.
            if (domSelection.anchorNode !== range.startContainer || domSelection.anchorOffset !== range.startOffset) {
              $swapPoints(this);
            }
          }
        }
      }
      /**
       * Helper for handling forward character and word deletion that prevents element nodes
       * like a table, columns layout being destroyed
       *
       * @param anchor the anchor
       * @param anchorNode the anchor node in the selection
       * @param isBackward whether or not selection is backwards
       */
    }, {
      key: "forwardDeletion",
      value: function forwardDeletion(anchor, anchorNode, isBackward) {
        if (!isBackward && (
        // Delete forward handle case
        anchor.type === 'element' && $isElementNode(anchorNode) && anchor.offset === anchorNode.getChildrenSize() || anchor.type === 'text' && anchor.offset === anchorNode.getTextContentSize())) {
          var parent = anchorNode.getParent();
          var nextSibling = anchorNode.getNextSibling() || (parent === null ? null : parent.getNextSibling());
          if ($isElementNode(nextSibling) && nextSibling.isShadowRoot()) {
            return true;
          }
        }
        return false;
      }

      /**
       * Performs one logical character deletion operation on the EditorState based on the current Selection.
       * Handles different node types.
       *
       * @param isBackward whether or not the selection is backwards.
       */
    }, {
      key: "deleteCharacter",
      value: function deleteCharacter(isBackward) {
        var wasCollapsed = this.isCollapsed();
        if (this.isCollapsed()) {
          var anchor = this.anchor;
          var anchorNode = anchor.getNode();
          if (this.forwardDeletion(anchor, anchorNode, isBackward)) {
            return;
          }

          // Handle the deletion around decorators.
          var focus = this.focus;
          var possibleNode = $getAdjacentNode(focus, isBackward);
          if ($isDecoratorNode(possibleNode) && !possibleNode.isIsolated()) {
            // Make it possible to move selection from range selection to
            // node selection on the node.
            if (possibleNode.isKeyboardSelectable() && $isElementNode(anchorNode) && anchorNode.getChildrenSize() === 0) {
              anchorNode.remove();
              var nodeSelection = $createNodeSelection();
              nodeSelection.add(possibleNode.__key);
              $setSelection(nodeSelection);
            } else {
              possibleNode.remove();
              var editor = getActiveEditor();
              editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
            }
            return;
          } else if (!isBackward && $isElementNode(possibleNode) && $isElementNode(anchorNode) && anchorNode.isEmpty()) {
            anchorNode.remove();
            possibleNode.selectStart();
            return;
          }
          this.modify('extend', isBackward, 'character');
          if (!this.isCollapsed()) {
            var focusNode = focus.type === 'text' ? focus.getNode() : null;
            anchorNode = anchor.type === 'text' ? anchor.getNode() : null;
            if (focusNode !== null && focusNode.isSegmented()) {
              var offset = focus.offset;
              var textContentSize = focusNode.getTextContentSize();
              if (focusNode.is(anchorNode) || isBackward && offset !== textContentSize || !isBackward && offset !== 0) {
                $removeSegment(focusNode, isBackward, offset);
                return;
              }
            } else if (anchorNode !== null && anchorNode.isSegmented()) {
              var _offset2 = anchor.offset;
              var _textContentSize = anchorNode.getTextContentSize();
              if (anchorNode.is(focusNode) || isBackward && _offset2 !== 0 || !isBackward && _offset2 !== _textContentSize) {
                $removeSegment(anchorNode, isBackward, _offset2);
                return;
              }
            }
            $updateCaretSelectionForUnicodeCharacter(this, isBackward);
          } else if (isBackward && anchor.offset === 0) {
            // Special handling around rich text nodes
            var element = anchor.type === 'element' ? anchor.getNode() : anchor.getNode().getParentOrThrow();
            if (element.collapseAtStart(this)) {
              return;
            }
          }
        }
        this.removeText();
        if (isBackward && !wasCollapsed && this.isCollapsed() && this.anchor.type === 'element' && this.anchor.offset === 0) {
          var _anchorNode2 = this.anchor.getNode();
          if (_anchorNode2.isEmpty() && $isRootNode(_anchorNode2.getParent()) && _anchorNode2.getIndexWithinParent() === 0) {
            _anchorNode2.collapseAtStart(this);
          }
        }
      }

      /**
       * Performs one logical line deletion operation on the EditorState based on the current Selection.
       * Handles different node types.
       *
       * @param isBackward whether or not the selection is backwards.
       */
    }, {
      key: "deleteLine",
      value: function deleteLine(isBackward) {
        if (this.isCollapsed()) {
          // Since `domSelection.modify('extend', ..., 'lineboundary')` works well for text selections
          // but doesn't properly handle selections which end on elements, a space character is added
          // for such selections transforming their anchor's type to 'text'
          var anchorIsElement = this.anchor.type === 'element';
          if (anchorIsElement) {
            this.insertText(' ');
          }
          this.modify('extend', isBackward, 'lineboundary');

          // If selection is extended to cover text edge then extend it one character more
          // to delete its parent element. Otherwise text content will be deleted but empty
          // parent node will remain
          var endPoint = isBackward ? this.focus : this.anchor;
          if (endPoint.offset === 0) {
            this.modify('extend', isBackward, 'character');
          }

          // Adjusts selection to include an extra character added for element anchors to remove it
          if (anchorIsElement) {
            var startPoint = isBackward ? this.anchor : this.focus;
            startPoint.set(startPoint.key, startPoint.offset + 1, startPoint.type);
          }
        }
        this.removeText();
      }

      /**
       * Performs one logical word deletion operation on the EditorState based on the current Selection.
       * Handles different node types.
       *
       * @param isBackward whether or not the selection is backwards.
       */
    }, {
      key: "deleteWord",
      value: function deleteWord(isBackward) {
        if (this.isCollapsed()) {
          var anchor = this.anchor;
          var anchorNode = anchor.getNode();
          if (this.forwardDeletion(anchor, anchorNode, isBackward)) {
            return;
          }
          this.modify('extend', isBackward, 'word');
        }
        this.removeText();
      }

      /**
       * Returns whether the Selection is "backwards", meaning the focus
       * logically precedes the anchor in the EditorState.
       * @returns true if the Selection is backwards, false otherwise.
       */
    }, {
      key: "isBackward",
      value: function isBackward() {
        return this.focus.isBefore(this.anchor);
      }
    }, {
      key: "getStartEndPoints",
      value: function getStartEndPoints() {
        return [this.anchor, this.focus];
      }
    }]);
  }();
  function $isNodeSelection(x) {
    return x instanceof NodeSelection;
  }
  function getCharacterOffset(point) {
    var offset = point.offset;
    if (point.type === 'text') {
      return offset;
    }
    var parent = point.getNode();
    return offset === parent.getChildrenSize() ? parent.getTextContent().length : 0;
  }
  function $getCharacterOffsets(selection) {
    var anchorAndFocus = selection.getStartEndPoints();
    if (anchorAndFocus === null) {
      return [0, 0];
    }
    var _anchorAndFocus = _slicedToArray(anchorAndFocus, 2),
      anchor = _anchorAndFocus[0],
      focus = _anchorAndFocus[1];
    if (anchor.type === 'element' && focus.type === 'element' && anchor.key === focus.key && anchor.offset === focus.offset) {
      return [0, 0];
    }
    return [getCharacterOffset(anchor), getCharacterOffset(focus)];
  }
  function $swapPoints(selection) {
    var focus = selection.focus;
    var anchor = selection.anchor;
    var anchorKey = anchor.key;
    var anchorOffset = anchor.offset;
    var anchorType = anchor.type;
    $setPointValues(anchor, focus.key, focus.offset, focus.type);
    $setPointValues(focus, anchorKey, anchorOffset, anchorType);
    selection._cachedNodes = null;
  }
  function moveNativeSelection(domSelection, alter, direction, granularity) {
    // Selection.modify() method applies a change to the current selection or cursor position,
    // but is still non-standard in some browsers.
    domSelection.modify(alter, direction, granularity);
  }
  function $updateCaretSelectionForUnicodeCharacter(selection, isBackward) {
    var anchor = selection.anchor;
    var focus = selection.focus;
    var anchorNode = anchor.getNode();
    var focusNode = focus.getNode();
    if (anchorNode === focusNode && anchor.type === 'text' && focus.type === 'text') {
      // Handling of multibyte characters
      var anchorOffset = anchor.offset;
      var focusOffset = focus.offset;
      var isBefore = anchorOffset < focusOffset;
      var startOffset = isBefore ? anchorOffset : focusOffset;
      var endOffset = isBefore ? focusOffset : anchorOffset;
      var characterOffset = endOffset - 1;
      if (startOffset !== characterOffset) {
        var text = anchorNode.getTextContent().slice(startOffset, endOffset);
        if (!doesContainGrapheme(text)) {
          if (isBackward) {
            focus.offset = characterOffset;
          } else {
            anchor.offset = characterOffset;
          }
        }
      }
    }
  }
  function $removeSegment(node, isBackward, offset) {
    var textNode = node;
    var textContent = textNode.getTextContent();
    var split = textContent.split(/(?=\s)/g);
    var splitLength = split.length;
    var segmentOffset = 0;
    var restoreOffset = 0;
    for (var i = 0; i < splitLength; i++) {
      var text = split[i];
      var isLast = i === splitLength - 1;
      restoreOffset = segmentOffset;
      segmentOffset += text.length;
      if (isBackward && segmentOffset === offset || segmentOffset > offset || isLast) {
        split.splice(i, 1);
        if (isLast) {
          restoreOffset = undefined;
        }
        break;
      }
    }
    var nextTextContent = split.join('').trim();
    if (nextTextContent === '') {
      textNode.remove();
    } else {
      textNode.setTextContent(nextTextContent);
      textNode.select(restoreOffset, restoreOffset);
    }
  }
  function shouldResolveAncestor(resolvedElement, resolvedOffset, lastPoint) {
    var parent = resolvedElement.getParent();
    return lastPoint === null || parent === null || !parent.canBeEmpty() || parent !== lastPoint.getNode();
  }
  function $internalResolveSelectionPoint(dom, offset, lastPoint, editor) {
    var resolvedOffset = offset;
    var resolvedNode;
    // If we have selection on an element, we will
    // need to figure out (using the offset) what text
    // node should be selected.

    if (dom.nodeType === DOM_ELEMENT_TYPE) {
      // Resolve element to a ElementNode, or TextNode, or null
      var moveSelectionToEnd = false;
      // Given we're moving selection to another node, selection is
      // definitely dirty.
      // We use the anchor to find which child node to select
      var childNodes = dom.childNodes;
      var childNodesLength = childNodes.length;
      var blockCursorElement = editor._blockCursorElement;
      // If the anchor is the same as length, then this means we
      // need to select the very last text node.
      if (resolvedOffset === childNodesLength) {
        moveSelectionToEnd = true;
        resolvedOffset = childNodesLength - 1;
      }
      var childDOM = childNodes[resolvedOffset];
      var hasBlockCursor = false;
      if (childDOM === blockCursorElement) {
        childDOM = childNodes[resolvedOffset + 1];
        hasBlockCursor = true;
      } else if (blockCursorElement !== null) {
        var blockCursorElementParent = blockCursorElement.parentNode;
        if (dom === blockCursorElementParent) {
          var blockCursorOffset = Array.prototype.indexOf.call(blockCursorElementParent.children, blockCursorElement);
          if (offset > blockCursorOffset) {
            resolvedOffset--;
          }
        }
      }
      resolvedNode = $getNodeFromDOM(childDOM);
      if ($isTextNode(resolvedNode)) {
        resolvedOffset = getTextNodeOffset(resolvedNode, moveSelectionToEnd);
      } else {
        var resolvedElement = $getNodeFromDOM(dom);
        // Ensure resolvedElement is actually a element.
        if (resolvedElement === null) {
          return null;
        }
        if ($isElementNode(resolvedElement)) {
          resolvedOffset = Math.min(resolvedElement.getChildrenSize(), resolvedOffset);
          var child = resolvedElement.getChildAtIndex(resolvedOffset);
          if ($isElementNode(child) && shouldResolveAncestor(child, resolvedOffset, lastPoint)) {
            var descendant = moveSelectionToEnd ? child.getLastDescendant() : child.getFirstDescendant();
            if (descendant === null) {
              resolvedElement = child;
            } else {
              child = descendant;
              resolvedElement = $isElementNode(child) ? child : child.getParentOrThrow();
            }
            resolvedOffset = 0;
          }
          if ($isTextNode(child)) {
            resolvedNode = child;
            resolvedElement = null;
            resolvedOffset = getTextNodeOffset(child, moveSelectionToEnd);
          } else if (child !== resolvedElement && moveSelectionToEnd && !hasBlockCursor) {
            resolvedOffset++;
          }
        } else {
          var index = resolvedElement.getIndexWithinParent();
          // When selecting decorators, there can be some selection issues when using resolvedOffset,
          // and instead we should be checking if we're using the offset
          if (offset === 0 && $isDecoratorNode(resolvedElement) && $getNodeFromDOM(dom) === resolvedElement) {
            resolvedOffset = index;
          } else {
            resolvedOffset = index + 1;
          }
          resolvedElement = resolvedElement.getParentOrThrow();
        }
        if ($isElementNode(resolvedElement)) {
          return $createPoint(resolvedElement.__key, resolvedOffset, 'element');
        }
      }
    } else {
      // TextNode or null
      resolvedNode = $getNodeFromDOM(dom);
    }
    if (!$isTextNode(resolvedNode)) {
      return null;
    }
    return $createPoint(resolvedNode.__key, resolvedOffset, 'text');
  }
  function resolveSelectionPointOnBoundary(point, isBackward, isCollapsed) {
    var offset = point.offset;
    var node = point.getNode();
    if (offset === 0) {
      var prevSibling = node.getPreviousSibling();
      var parent = node.getParent();
      if (!isBackward) {
        if ($isElementNode(prevSibling) && !isCollapsed && prevSibling.isInline()) {
          point.key = prevSibling.__key;
          point.offset = prevSibling.getChildrenSize();
          // @ts-expect-error: intentional
          point.type = 'element';
        } else if ($isTextNode(prevSibling)) {
          point.key = prevSibling.__key;
          point.offset = prevSibling.getTextContent().length;
        }
      } else if ((isCollapsed || !isBackward) && prevSibling === null && $isElementNode(parent) && parent.isInline()) {
        var parentSibling = parent.getPreviousSibling();
        if ($isTextNode(parentSibling)) {
          point.key = parentSibling.__key;
          point.offset = parentSibling.getTextContent().length;
        }
      }
    } else if (offset === node.getTextContent().length) {
      var nextSibling = node.getNextSibling();
      var _parent2 = node.getParent();
      if (isBackward && $isElementNode(nextSibling) && nextSibling.isInline()) {
        point.key = nextSibling.__key;
        point.offset = 0;
        // @ts-expect-error: intentional
        point.type = 'element';
      } else if ((isCollapsed || isBackward) && nextSibling === null && $isElementNode(_parent2) && _parent2.isInline() && !_parent2.canInsertTextAfter()) {
        var _parentSibling = _parent2.getNextSibling();
        if ($isTextNode(_parentSibling)) {
          point.key = _parentSibling.__key;
          point.offset = 0;
        }
      }
    }
  }
  function $normalizeSelectionPointsForBoundaries(anchor, focus, lastSelection) {
    if (anchor.type === 'text' && focus.type === 'text') {
      var isBackward = anchor.isBefore(focus);
      var isCollapsed = anchor.is(focus);

      // Attempt to normalize the offset to the previous sibling if we're at the
      // start of a text node and the sibling is a text node or inline element.
      resolveSelectionPointOnBoundary(anchor, isBackward, isCollapsed);
      resolveSelectionPointOnBoundary(focus, !isBackward, isCollapsed);
      if (isCollapsed) {
        focus.key = anchor.key;
        focus.offset = anchor.offset;
        focus.type = anchor.type;
      }
      var editor = getActiveEditor();
      if (editor.isComposing() && editor._compositionKey !== anchor.key && $isRangeSelection(lastSelection)) {
        var lastAnchor = lastSelection.anchor;
        var lastFocus = lastSelection.focus;
        $setPointValues(anchor, lastAnchor.key, lastAnchor.offset, lastAnchor.type);
        $setPointValues(focus, lastFocus.key, lastFocus.offset, lastFocus.type);
      }
    }
  }
  function $internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection) {
    if (anchorDOM === null || focusDOM === null || !isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
      return null;
    }
    var resolvedAnchorPoint = $internalResolveSelectionPoint(anchorDOM, anchorOffset, $isRangeSelection(lastSelection) ? lastSelection.anchor : null, editor);
    if (resolvedAnchorPoint === null) {
      return null;
    }
    var resolvedFocusPoint = $internalResolveSelectionPoint(focusDOM, focusOffset, $isRangeSelection(lastSelection) ? lastSelection.focus : null, editor);
    if (resolvedFocusPoint === null) {
      return null;
    }
    if (resolvedAnchorPoint.type === 'element' && resolvedFocusPoint.type === 'element') {
      var anchorNode = $getNodeFromDOM(anchorDOM);
      var focusNode = $getNodeFromDOM(focusDOM);
      // Ensure if we're selecting the content of a decorator that we
      // return null for this point, as it's not in the controlled scope
      // of Lexical.
      if ($isDecoratorNode(anchorNode) && $isDecoratorNode(focusNode)) {
        return null;
      }
    }

    // Handle normalization of selection when it is at the boundaries.
    $normalizeSelectionPointsForBoundaries(resolvedAnchorPoint, resolvedFocusPoint, lastSelection);
    return [resolvedAnchorPoint, resolvedFocusPoint];
  }
  function $isBlockElementNode(node) {
    return $isElementNode(node) && !node.isInline();
  }

  // This is used to make a selection when the existing
  // selection is null, i.e. forcing selection on the editor
  // when it current exists outside the editor.

  function $internalMakeRangeSelection(anchorKey, anchorOffset, focusKey, focusOffset, anchorType, focusType) {
    var editorState = getActiveEditorState();
    var selection = new RangeSelection($createPoint(anchorKey, anchorOffset, anchorType), $createPoint(focusKey, focusOffset, focusType), 0, '');
    selection.dirty = true;
    editorState._selection = selection;
    return selection;
  }
  function $createRangeSelection() {
    var anchor = $createPoint('root', 0, 'element');
    var focus = $createPoint('root', 0, 'element');
    return new RangeSelection(anchor, focus, 0, '');
  }
  function $createNodeSelection() {
    return new NodeSelection(new Set());
  }
  function $internalCreateSelection(editor) {
    var currentEditorState = editor.getEditorState();
    var lastSelection = currentEditorState._selection;
    var domSelection = getDOMSelection(editor._window);
    if ($isRangeSelection(lastSelection) || lastSelection == null) {
      return $internalCreateRangeSelection(lastSelection, domSelection, editor, null);
    }
    return lastSelection.clone();
  }
  function $createRangeSelectionFromDom(domSelection, editor) {
    return $internalCreateRangeSelection(null, domSelection, editor, null);
  }
  function $internalCreateRangeSelection(lastSelection, domSelection, editor, event) {
    var windowObj = editor._window;
    if (windowObj === null) {
      return null;
    }
    // When we create a selection, we try to use the previous
    // selection where possible, unless an actual user selection
    // change has occurred. When we do need to create a new selection
    // we validate we can have text nodes for both anchor and focus
    // nodes. If that holds true, we then return that selection
    // as a mutable object that we use for the editor state for this
    // update cycle. If a selection gets changed, and requires a
    // update to native DOM selection, it gets marked as "dirty".
    // If the selection changes, but matches with the existing
    // DOM selection, then we only need to sync it. Otherwise,
    // we generally bail out of doing an update to selection during
    // reconciliation unless there are dirty nodes that need
    // reconciling.

    var windowEvent = event || windowObj.event;
    var eventType = windowEvent ? windowEvent.type : undefined;
    var isSelectionChange = eventType === 'selectionchange';
    var useDOMSelection = !getIsProcessingMutations() && (isSelectionChange || eventType === 'beforeinput' || eventType === 'compositionstart' || eventType === 'compositionend' || eventType === 'click' && windowEvent && windowEvent.detail === 3 || eventType === 'drop' || eventType === undefined);
    var anchorDOM, focusDOM, anchorOffset, focusOffset;
    if (!$isRangeSelection(lastSelection) || useDOMSelection) {
      if (domSelection === null) {
        return null;
      }
      anchorDOM = domSelection.anchorNode;
      focusDOM = domSelection.focusNode;
      anchorOffset = domSelection.anchorOffset;
      focusOffset = domSelection.focusOffset;
      if (isSelectionChange && $isRangeSelection(lastSelection) && !isSelectionWithinEditor(editor, anchorDOM, focusDOM)) {
        return lastSelection.clone();
      }
    } else {
      return lastSelection.clone();
    }
    // Let's resolve the text nodes from the offsets and DOM nodes we have from
    // native selection.
    var resolvedSelectionPoints = $internalResolveSelectionPoints(anchorDOM, anchorOffset, focusDOM, focusOffset, editor, lastSelection);
    if (resolvedSelectionPoints === null) {
      return null;
    }
    var _resolvedSelectionPoi2 = _slicedToArray(resolvedSelectionPoints, 2),
      resolvedAnchorPoint = _resolvedSelectionPoi2[0],
      resolvedFocusPoint = _resolvedSelectionPoi2[1];
    return new RangeSelection(resolvedAnchorPoint, resolvedFocusPoint, !$isRangeSelection(lastSelection) ? 0 : lastSelection.format, !$isRangeSelection(lastSelection) ? '' : lastSelection.style);
  }
  function $getSelection() {
    var editorState = getActiveEditorState();
    return editorState._selection;
  }
  function $getPreviousSelection() {
    var editor = getActiveEditor();
    return editor._editorState._selection;
  }
  function $updateElementSelectionOnCreateDeleteNode(selection, parentNode, nodeOffset) {
    var times = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var anchor = selection.anchor;
    var focus = selection.focus;
    var anchorNode = anchor.getNode();
    var focusNode = focus.getNode();
    if (!parentNode.is(anchorNode) && !parentNode.is(focusNode)) {
      return;
    }
    var parentKey = parentNode.__key;
    // Single node. We shift selection but never redimension it
    if (selection.isCollapsed()) {
      var selectionOffset = anchor.offset;
      if (nodeOffset <= selectionOffset && times > 0 || nodeOffset < selectionOffset && times < 0) {
        var newSelectionOffset = Math.max(0, selectionOffset + times);
        anchor.set(parentKey, newSelectionOffset, 'element');
        focus.set(parentKey, newSelectionOffset, 'element');
        // The new selection might point to text nodes, try to resolve them
        $updateSelectionResolveTextNodes(selection);
      }
    } else {
      // Multiple nodes selected. We shift or redimension selection
      var isBackward = selection.isBackward();
      var firstPoint = isBackward ? focus : anchor;
      var firstPointNode = firstPoint.getNode();
      var lastPoint = isBackward ? anchor : focus;
      var lastPointNode = lastPoint.getNode();
      if (parentNode.is(firstPointNode)) {
        var firstPointOffset = firstPoint.offset;
        if (nodeOffset <= firstPointOffset && times > 0 || nodeOffset < firstPointOffset && times < 0) {
          firstPoint.set(parentKey, Math.max(0, firstPointOffset + times), 'element');
        }
      }
      if (parentNode.is(lastPointNode)) {
        var lastPointOffset = lastPoint.offset;
        if (nodeOffset <= lastPointOffset && times > 0 || nodeOffset < lastPointOffset && times < 0) {
          lastPoint.set(parentKey, Math.max(0, lastPointOffset + times), 'element');
        }
      }
    }
    // The new selection might point to text nodes, try to resolve them
    $updateSelectionResolveTextNodes(selection);
  }
  function $updateSelectionResolveTextNodes(selection) {
    var anchor = selection.anchor;
    var anchorOffset = anchor.offset;
    var focus = selection.focus;
    var focusOffset = focus.offset;
    var anchorNode = anchor.getNode();
    var focusNode = focus.getNode();
    if (selection.isCollapsed()) {
      if (!$isElementNode(anchorNode)) {
        return;
      }
      var childSize = anchorNode.getChildrenSize();
      var anchorOffsetAtEnd = anchorOffset >= childSize;
      var child = anchorOffsetAtEnd ? anchorNode.getChildAtIndex(childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
      if ($isTextNode(child)) {
        var newOffset = 0;
        if (anchorOffsetAtEnd) {
          newOffset = child.getTextContentSize();
        }
        anchor.set(child.__key, newOffset, 'text');
        focus.set(child.__key, newOffset, 'text');
      }
      return;
    }
    if ($isElementNode(anchorNode)) {
      var _childSize = anchorNode.getChildrenSize();
      var _anchorOffsetAtEnd = anchorOffset >= _childSize;
      var _child2 = _anchorOffsetAtEnd ? anchorNode.getChildAtIndex(_childSize - 1) : anchorNode.getChildAtIndex(anchorOffset);
      if ($isTextNode(_child2)) {
        var _newOffset = 0;
        if (_anchorOffsetAtEnd) {
          _newOffset = _child2.getTextContentSize();
        }
        anchor.set(_child2.__key, _newOffset, 'text');
      }
    }
    if ($isElementNode(focusNode)) {
      var _childSize2 = focusNode.getChildrenSize();
      var focusOffsetAtEnd = focusOffset >= _childSize2;
      var _child3 = focusOffsetAtEnd ? focusNode.getChildAtIndex(_childSize2 - 1) : focusNode.getChildAtIndex(focusOffset);
      if ($isTextNode(_child3)) {
        var _newOffset2 = 0;
        if (focusOffsetAtEnd) {
          _newOffset2 = _child3.getTextContentSize();
        }
        focus.set(_child3.__key, _newOffset2, 'text');
      }
    }
  }
  function applySelectionTransforms(nextEditorState, editor) {
    var prevEditorState = editor.getEditorState();
    var prevSelection = prevEditorState._selection;
    var nextSelection = nextEditorState._selection;
    if ($isRangeSelection(nextSelection)) {
      var anchor = nextSelection.anchor;
      var focus = nextSelection.focus;
      var anchorNode;
      if (anchor.type === 'text') {
        anchorNode = anchor.getNode();
        anchorNode.selectionTransform(prevSelection, nextSelection);
      }
      if (focus.type === 'text') {
        var focusNode = focus.getNode();
        if (anchorNode !== focusNode) {
          focusNode.selectionTransform(prevSelection, nextSelection);
        }
      }
    }
  }
  function moveSelectionPointToSibling(point, node, parent, prevSibling, nextSibling) {
    var siblingKey = null;
    var offset = 0;
    var type = null;
    if (prevSibling !== null) {
      siblingKey = prevSibling.__key;
      if ($isTextNode(prevSibling)) {
        offset = prevSibling.getTextContentSize();
        type = 'text';
      } else if ($isElementNode(prevSibling)) {
        offset = prevSibling.getChildrenSize();
        type = 'element';
      }
    } else {
      if (nextSibling !== null) {
        siblingKey = nextSibling.__key;
        if ($isTextNode(nextSibling)) {
          type = 'text';
        } else if ($isElementNode(nextSibling)) {
          type = 'element';
        }
      }
    }
    if (siblingKey !== null && type !== null) {
      point.set(siblingKey, offset, type);
    } else {
      offset = node.getIndexWithinParent();
      if (offset === -1) {
        // Move selection to end of parent
        offset = parent.getChildrenSize();
      }
      point.set(parent.__key, offset, 'element');
    }
  }
  function adjustPointOffsetForMergedSibling(point, isBefore, key, target, textLength) {
    if (point.type === 'text') {
      point.key = key;
      if (!isBefore) {
        point.offset += textLength;
      }
    } else if (point.offset > target.getIndexWithinParent()) {
      point.offset -= 1;
    }
  }
  function updateDOMSelection(prevSelection, nextSelection, editor, domSelection, tags, rootElement, nodeCount) {
    var anchorDOMNode = domSelection.anchorNode;
    var focusDOMNode = domSelection.focusNode;
    var anchorOffset = domSelection.anchorOffset;
    var focusOffset = domSelection.focusOffset;
    var activeElement = document.activeElement;

    // TODO: make this not hard-coded, and add another config option
    // that makes this configurable.
    if (tags.has('collaboration') && activeElement !== rootElement || activeElement !== null && isSelectionCapturedInDecoratorInput(activeElement)) {
      return;
    }
    if (!$isRangeSelection(nextSelection)) {
      // We don't remove selection if the prevSelection is null because
      // of editor.setRootElement(). If this occurs on init when the
      // editor is already focused, then this can cause the editor to
      // lose focus.
      if (prevSelection !== null && isSelectionWithinEditor(editor, anchorDOMNode, focusDOMNode)) {
        domSelection.removeAllRanges();
      }
      return;
    }
    var anchor = nextSelection.anchor;
    var focus = nextSelection.focus;
    var anchorKey = anchor.key;
    var focusKey = focus.key;
    var anchorDOM = getElementByKeyOrThrow(editor, anchorKey);
    var focusDOM = getElementByKeyOrThrow(editor, focusKey);
    var nextAnchorOffset = anchor.offset;
    var nextFocusOffset = focus.offset;
    var nextFormat = nextSelection.format;
    var nextStyle = nextSelection.style;
    var isCollapsed = nextSelection.isCollapsed();
    var nextAnchorNode = anchorDOM;
    var nextFocusNode = focusDOM;
    var anchorFormatOrStyleChanged = false;
    if (anchor.type === 'text') {
      nextAnchorNode = getDOMTextNode(anchorDOM);
      var anchorNode = anchor.getNode();
      anchorFormatOrStyleChanged = anchorNode.getFormat() !== nextFormat || anchorNode.getStyle() !== nextStyle;
    } else if ($isRangeSelection(prevSelection) && prevSelection.anchor.type === 'text') {
      anchorFormatOrStyleChanged = true;
    }
    if (focus.type === 'text') {
      nextFocusNode = getDOMTextNode(focusDOM);
    }

    // If we can't get an underlying text node for selection, then
    // we should avoid setting selection to something incorrect.
    if (nextAnchorNode === null || nextFocusNode === null) {
      return;
    }
    if (isCollapsed && (prevSelection === null || anchorFormatOrStyleChanged || $isRangeSelection(prevSelection) && (prevSelection.format !== nextFormat || prevSelection.style !== nextStyle))) {
      markCollapsedSelectionFormat(nextFormat, nextStyle, nextAnchorOffset, anchorKey, performance.now());
    }

    // Diff against the native DOM selection to ensure we don't do
    // an unnecessary selection update. We also skip this check if
    // we're moving selection to within an element, as this can
    // sometimes be problematic around scrolling.
    if (anchorOffset === nextAnchorOffset && focusOffset === nextFocusOffset && anchorDOMNode === nextAnchorNode && focusDOMNode === nextFocusNode &&
    // Badly interpreted range selection when collapsed - #1482
    !(domSelection.type === 'Range' && isCollapsed)) {
      // If the root element does not have focus, ensure it has focus
      if (activeElement === null || !rootElement.contains(activeElement)) {
        rootElement.focus({
          preventScroll: true
        });
      }
      if (anchor.type !== 'element') {
        return;
      }
    }

    // Apply the updated selection to the DOM. Note: this will trigger
    // a "selectionchange" event, although it will be asynchronous.
    try {
      domSelection.setBaseAndExtent(nextAnchorNode, nextAnchorOffset, nextFocusNode, nextFocusOffset);
    } catch (error) {
      // If we encounter an error, continue. This can sometimes
      // occur with FF and there's no good reason as to why it
      // should happen.
      {
        console.warn(error);
      }
    }
    if (!tags.has('skip-scroll-into-view') && nextSelection.isCollapsed() && rootElement !== null && rootElement === document.activeElement) {
      var selectionTarget = nextSelection instanceof RangeSelection && nextSelection.anchor.type === 'element' ? nextAnchorNode.childNodes[nextAnchorOffset] || null : domSelection.rangeCount > 0 ? domSelection.getRangeAt(0) : null;
      if (selectionTarget !== null) {
        var selectionRect;
        if (selectionTarget instanceof Text) {
          var range = document.createRange();
          range.selectNode(selectionTarget);
          selectionRect = range.getBoundingClientRect();
        } else {
          selectionRect = selectionTarget.getBoundingClientRect();
        }
        scrollIntoViewIfNeeded(editor, selectionRect, rootElement);
      }
    }
    markSelectionChangeFromDOMUpdate();
  }
  function $insertNodes(nodes) {
    var selection = $getSelection() || $getPreviousSelection();
    if (selection === null) {
      selection = $getRoot().selectEnd();
    }
    selection.insertNodes(nodes);
  }
  function $getTextContent() {
    var selection = $getSelection();
    if (selection === null) {
      return '';
    }
    return selection.getTextContent();
  }
  function $removeTextAndSplitBlock(selection) {
    var selection_ = selection;
    if (!selection.isCollapsed()) {
      selection_.removeText();
    }
    // A new selection can originate as a result of node replacement, in which case is registered via
    // $setSelection
    var newSelection = $getSelection();
    if ($isRangeSelection(newSelection)) {
      selection_ = newSelection;
    }
    if (!$isRangeSelection(selection_)) {
      throw Error("Unexpected dirty selection to be null");
    }
    var anchor = selection_.anchor;
    var node = anchor.getNode();
    var offset = anchor.offset;
    while (!INTERNAL_$isBlock(node)) {
      var _$splitNodeAtPoint = $splitNodeAtPoint(node, offset);
      var _$splitNodeAtPoint2 = _slicedToArray(_$splitNodeAtPoint, 2);
      node = _$splitNodeAtPoint2[0];
      offset = _$splitNodeAtPoint2[1];
    }
    return offset;
  }
  function $splitNodeAtPoint(node, offset) {
    var parent = node.getParent();
    if (!parent) {
      var paragraph = $createParagraphNode();
      $getRoot().append(paragraph);
      paragraph.select();
      return [$getRoot(), 0];
    }
    if ($isTextNode(node)) {
      var split = node.splitText(offset);
      if (split.length === 0) {
        return [parent, node.getIndexWithinParent()];
      }
      var x = offset === 0 ? 0 : 1;
      var index = split[0].getIndexWithinParent() + x;
      return [parent, index];
    }
    if (!$isElementNode(node) || offset === 0) {
      return [parent, node.getIndexWithinParent()];
    }
    var firstToAppend = node.getChildAtIndex(offset);
    if (firstToAppend) {
      var insertPoint = new RangeSelection($createPoint(node.__key, offset, 'element'), $createPoint(node.__key, offset, 'element'), 0, '');
      var newElement = node.insertNewAfter(insertPoint);
      if (newElement) {
        newElement.append.apply(newElement, [firstToAppend].concat(_toConsumableArray(firstToAppend.getNextSiblings())));
      }
    }
    return [parent, node.getIndexWithinParent() + 1];
  }
  function $wrapInlineNodes(nodes) {
    // We temporarily insert the topLevelNodes into an arbitrary ElementNode,
    // since insertAfter does not work on nodes that have no parent (TO-DO: fix that).
    var virtualRoot = $createParagraphNode();
    var currentBlock = null;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var isLineBreakNode = $isLineBreakNode(node);
      if (isLineBreakNode || $isDecoratorNode(node) && node.isInline() || $isElementNode(node) && node.isInline() || $isTextNode(node) || node.isParentRequired()) {
        if (currentBlock === null) {
          currentBlock = node.createParentElementNode();
          virtualRoot.append(currentBlock);
          // In the case of LineBreakNode, we just need to
          // add an empty ParagraphNode to the topLevelBlocks.
          if (isLineBreakNode) {
            continue;
          }
        }
        if (currentBlock !== null) {
          currentBlock.append(node);
        }
      } else {
        virtualRoot.append(node);
        currentBlock = null;
      }
    }
    return virtualRoot;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var activeEditorState = null;
  var activeEditor = null;
  var isReadOnlyMode = false;
  var isAttemptingToRecoverFromReconcilerError = false;
  var infiniteTransformCount = 0;
  var observerOptions = {
    characterData: true,
    childList: true,
    subtree: true
  };
  function isCurrentlyReadOnlyMode() {
    return isReadOnlyMode || activeEditorState !== null && activeEditorState._readOnly;
  }
  function errorOnReadOnly() {
    if (isReadOnlyMode) {
      {
        throw Error("Cannot use method in read-only mode.");
      }
    }
  }
  function errorOnInfiniteTransforms() {
    if (infiniteTransformCount > 99) {
      {
        throw Error("One or more transforms are endlessly triggering additional transforms. May have encountered infinite recursion caused by transforms that have their preconditions too lose and/or conflict with each other.");
      }
    }
  }
  function getActiveEditorState() {
    if (activeEditorState === null) {
      {
        throw Error("Unable to find an active editor state. State helpers or node methods can only be used synchronously during the callback of editor.update() or editorState.read().");
      }
    }
    return activeEditorState;
  }
  function getActiveEditor() {
    if (activeEditor === null) {
      {
        throw Error("Unable to find an active editor. This method can only be used synchronously during the callback of editor.update().");
      }
    }
    return activeEditor;
  }
  function internalGetActiveEditor() {
    return activeEditor;
  }
  function internalGetActiveEditorState() {
    return activeEditorState;
  }
  function $applyTransforms(editor, node, transformsCache) {
    var type = node.__type;
    var registeredNode = getRegisteredNodeOrThrow(editor, type);
    var transformsArr = transformsCache.get(type);
    if (transformsArr === undefined) {
      transformsArr = Array.from(registeredNode.transforms);
      transformsCache.set(type, transformsArr);
    }
    var transformsArrLength = transformsArr.length;
    for (var i = 0; i < transformsArrLength; i++) {
      transformsArr[i](node);
      if (!node.isAttached()) {
        break;
      }
    }
  }
  function $isNodeValidForTransform(node, compositionKey) {
    return node !== undefined &&
    // We don't want to transform nodes being composed
    node.__key !== compositionKey && node.isAttached();
  }
  function $normalizeAllDirtyTextNodes(editorState, editor) {
    var dirtyLeaves = editor._dirtyLeaves;
    var nodeMap = editorState._nodeMap;
    var _iterator9 = _createForOfIteratorHelper(dirtyLeaves),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var nodeKey = _step9.value;
        var node = nodeMap.get(nodeKey);
        if ($isTextNode(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) {
          $normalizeTextNode(node);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
  }

  /**
   * Transform heuristic:
   * 1. We transform leaves first. If transforms generate additional dirty nodes we repeat step 1.
   * The reasoning behind this is that marking a leaf as dirty marks all its parent elements as dirty too.
   * 2. We transform elements. If element transforms generate additional dirty nodes we repeat step 1.
   * If element transforms only generate additional dirty elements we only repeat step 2.
   *
   * Note that to keep track of newly dirty nodes and subtrees we leverage the editor._dirtyNodes and
   * editor._subtrees which we reset in every loop.
   */
  function $applyAllTransforms(editorState, editor) {
    var dirtyLeaves = editor._dirtyLeaves;
    var dirtyElements = editor._dirtyElements;
    var nodeMap = editorState._nodeMap;
    var compositionKey = $getCompositionKey();
    var transformsCache = new Map();
    var untransformedDirtyLeaves = dirtyLeaves;
    var untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
    var untransformedDirtyElements = dirtyElements;
    var untransformedDirtyElementsLength = untransformedDirtyElements.size;
    while (untransformedDirtyLeavesLength > 0 || untransformedDirtyElementsLength > 0) {
      if (untransformedDirtyLeavesLength > 0) {
        // We leverage editor._dirtyLeaves to track the new dirty leaves after the transforms
        editor._dirtyLeaves = new Set();
        var _iterator10 = _createForOfIteratorHelper(untransformedDirtyLeaves),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var nodeKey = _step10.value;
            var node = nodeMap.get(nodeKey);
            if ($isTextNode(node) && node.isAttached() && node.isSimpleText() && !node.isUnmergeable()) {
              $normalizeTextNode(node);
            }
            if (node !== undefined && $isNodeValidForTransform(node, compositionKey)) {
              $applyTransforms(editor, node, transformsCache);
            }
            dirtyLeaves.add(nodeKey);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        untransformedDirtyLeaves = editor._dirtyLeaves;
        untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;

        // We want to prioritize node transforms over element transforms
        if (untransformedDirtyLeavesLength > 0) {
          infiniteTransformCount++;
          continue;
        }
      }

      // All dirty leaves have been processed. Let's do elements!
      // We have previously processed dirty leaves, so let's restart the editor leaves Set to track
      // new ones caused by element transforms
      editor._dirtyLeaves = new Set();
      editor._dirtyElements = new Map();
      var _iterator11 = _createForOfIteratorHelper(untransformedDirtyElements),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var currentUntransformedDirtyElement = _step11.value;
          var _nodeKey3 = currentUntransformedDirtyElement[0];
          var intentionallyMarkedAsDirty = currentUntransformedDirtyElement[1];
          if (_nodeKey3 !== 'root' && !intentionallyMarkedAsDirty) {
            continue;
          }
          var _node3 = nodeMap.get(_nodeKey3);
          if (_node3 !== undefined && $isNodeValidForTransform(_node3, compositionKey)) {
            $applyTransforms(editor, _node3, transformsCache);
          }
          dirtyElements.set(_nodeKey3, intentionallyMarkedAsDirty);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      untransformedDirtyLeaves = editor._dirtyLeaves;
      untransformedDirtyLeavesLength = untransformedDirtyLeaves.size;
      untransformedDirtyElements = editor._dirtyElements;
      untransformedDirtyElementsLength = untransformedDirtyElements.size;
      infiniteTransformCount++;
    }
    editor._dirtyLeaves = dirtyLeaves;
    editor._dirtyElements = dirtyElements;
  }
  function $parseSerializedNode(serializedNode) {
    var internalSerializedNode = serializedNode;
    return $parseSerializedNodeImpl(internalSerializedNode, getActiveEditor()._nodes);
  }
  function $parseSerializedNodeImpl(serializedNode, registeredNodes) {
    var type = serializedNode.type;
    var registeredNode = registeredNodes.get(type);
    if (registeredNode === undefined) {
      {
        throw Error("parseEditorState: type \"".concat(type, "\" + not found"));
      }
    }
    var nodeClass = registeredNode.klass;
    if (serializedNode.type !== nodeClass.getType()) {
      {
        throw Error("LexicalNode: Node ".concat(nodeClass.name, " does not implement .importJSON()."));
      }
    }
    var node = nodeClass.importJSON(serializedNode);
    var children = serializedNode.children;
    if ($isElementNode(node) && Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var serializedJSONChildNode = children[i];
        var childNode = $parseSerializedNodeImpl(serializedJSONChildNode, registeredNodes);
        node.append(childNode);
      }
    }
    return node;
  }
  function _parseEditorState(serializedEditorState, editor, updateFn) {
    var editorState = createEmptyEditorState();
    var previousActiveEditorState = activeEditorState;
    var previousReadOnlyMode = isReadOnlyMode;
    var previousActiveEditor = activeEditor;
    var previousDirtyElements = editor._dirtyElements;
    var previousDirtyLeaves = editor._dirtyLeaves;
    var previousCloneNotNeeded = editor._cloneNotNeeded;
    var previousDirtyType = editor._dirtyType;
    editor._dirtyElements = new Map();
    editor._dirtyLeaves = new Set();
    editor._cloneNotNeeded = new Set();
    editor._dirtyType = 0;
    activeEditorState = editorState;
    isReadOnlyMode = false;
    activeEditor = editor;
    try {
      var registeredNodes = editor._nodes;
      var serializedNode = serializedEditorState.root;
      $parseSerializedNodeImpl(serializedNode, registeredNodes);
      if (updateFn) {
        updateFn();
      }

      // Make the editorState immutable
      editorState._readOnly = true;
      {
        handleDEVOnlyPendingUpdateGuarantees(editorState);
      }
    } catch (error) {
      if (error instanceof Error) {
        editor._onError(error);
      }
    } finally {
      editor._dirtyElements = previousDirtyElements;
      editor._dirtyLeaves = previousDirtyLeaves;
      editor._cloneNotNeeded = previousCloneNotNeeded;
      editor._dirtyType = previousDirtyType;
      activeEditorState = previousActiveEditorState;
      isReadOnlyMode = previousReadOnlyMode;
      activeEditor = previousActiveEditor;
    }
    return editorState;
  }

  // This technically isn't an update but given we need
  // exposure to the module's active bindings, we have this
  // function here

  function readEditorState(editorState, callbackFn) {
    var previousActiveEditorState = activeEditorState;
    var previousReadOnlyMode = isReadOnlyMode;
    var previousActiveEditor = activeEditor;
    activeEditorState = editorState;
    isReadOnlyMode = true;
    activeEditor = null;
    try {
      return callbackFn();
    } finally {
      activeEditorState = previousActiveEditorState;
      isReadOnlyMode = previousReadOnlyMode;
      activeEditor = previousActiveEditor;
    }
  }
  function handleDEVOnlyPendingUpdateGuarantees(pendingEditorState) {
    // Given we can't Object.freeze the nodeMap as it's a Map,
    // we instead replace its set, clear and delete methods.
    var nodeMap = pendingEditorState._nodeMap;
    nodeMap.set = function () {
      throw new Error('Cannot call set() on a frozen Lexical node map');
    };
    nodeMap.clear = function () {
      throw new Error('Cannot call clear() on a frozen Lexical node map');
    };
    nodeMap["delete"] = function () {
      throw new Error('Cannot call delete() on a frozen Lexical node map');
    };
  }
  function $commitPendingUpdates(editor, recoveryEditorState) {
    var pendingEditorState = editor._pendingEditorState;
    var rootElement = editor._rootElement;
    var shouldSkipDOM = editor._headless || rootElement === null;
    if (pendingEditorState === null) {
      return;
    }

    // ======
    // Reconciliation has started.
    // ======

    var currentEditorState = editor._editorState;
    var currentSelection = currentEditorState._selection;
    var pendingSelection = pendingEditorState._selection;
    var needsUpdate = editor._dirtyType !== NO_DIRTY_NODES;
    var previousActiveEditorState = activeEditorState;
    var previousReadOnlyMode = isReadOnlyMode;
    var previousActiveEditor = activeEditor;
    var previouslyUpdating = editor._updating;
    var observer = editor._observer;
    var mutatedNodes = null;
    editor._pendingEditorState = null;
    editor._editorState = pendingEditorState;
    if (!shouldSkipDOM && needsUpdate && observer !== null) {
      activeEditor = editor;
      activeEditorState = pendingEditorState;
      isReadOnlyMode = false;
      // We don't want updates to sync block the reconciliation.
      editor._updating = true;
      try {
        var dirtyType = editor._dirtyType;
        var _dirtyElements = editor._dirtyElements;
        var _dirtyLeaves = editor._dirtyLeaves;
        observer.disconnect();
        mutatedNodes = $reconcileRoot(currentEditorState, pendingEditorState, editor, dirtyType, _dirtyElements, _dirtyLeaves);
      } catch (error) {
        // Report errors
        if (error instanceof Error) {
          editor._onError(error);
        }

        // Reset editor and restore incoming editor state to the DOM
        if (!isAttemptingToRecoverFromReconcilerError) {
          resetEditor(editor, null, rootElement, pendingEditorState);
          initMutationObserver(editor);
          editor._dirtyType = FULL_RECONCILE;
          isAttemptingToRecoverFromReconcilerError = true;
          $commitPendingUpdates(editor, currentEditorState);
          isAttemptingToRecoverFromReconcilerError = false;
        } else {
          // To avoid a possible situation of infinite loops, lets throw
          throw error;
        }
        return;
      } finally {
        observer.observe(rootElement, observerOptions);
        editor._updating = previouslyUpdating;
        activeEditorState = previousActiveEditorState;
        isReadOnlyMode = previousReadOnlyMode;
        activeEditor = previousActiveEditor;
      }
    }
    if (!pendingEditorState._readOnly) {
      pendingEditorState._readOnly = true;
      {
        handleDEVOnlyPendingUpdateGuarantees(pendingEditorState);
        if ($isRangeSelection(pendingSelection)) {
          Object.freeze(pendingSelection.anchor);
          Object.freeze(pendingSelection.focus);
        }
        Object.freeze(pendingSelection);
      }
    }
    var dirtyLeaves = editor._dirtyLeaves;
    var dirtyElements = editor._dirtyElements;
    var normalizedNodes = editor._normalizedNodes;
    var tags = editor._updateTags;
    var deferred = editor._deferred;
    if (needsUpdate) {
      editor._dirtyType = NO_DIRTY_NODES;
      editor._cloneNotNeeded.clear();
      editor._dirtyLeaves = new Set();
      editor._dirtyElements = new Map();
      editor._normalizedNodes = new Set();
      editor._updateTags = new Set();
    }
    $garbageCollectDetachedDecorators(editor, pendingEditorState);

    // ======
    // Reconciliation has finished. Now update selection and trigger listeners.
    // ======

    var domSelection = shouldSkipDOM ? null : getDOMSelection(editor._window);

    // Attempt to update the DOM selection, including focusing of the root element,
    // and scroll into view if needed.
    if (editor._editable &&
    // domSelection will be null in headless
    domSelection !== null && (needsUpdate || pendingSelection === null || pendingSelection.dirty)) {
      activeEditor = editor;
      activeEditorState = pendingEditorState;
      try {
        if (observer !== null) {
          observer.disconnect();
        }
        if (needsUpdate || pendingSelection === null || pendingSelection.dirty) {
          var blockCursorElement = editor._blockCursorElement;
          if (blockCursorElement !== null) {
            removeDOMBlockCursorElement(blockCursorElement, editor, rootElement);
          }
          updateDOMSelection(currentSelection, pendingSelection, editor, domSelection, tags, rootElement);
        }
        updateDOMBlockCursorElement(editor, rootElement, pendingSelection);
        if (observer !== null) {
          observer.observe(rootElement, observerOptions);
        }
      } finally {
        activeEditor = previousActiveEditor;
        activeEditorState = previousActiveEditorState;
      }
    }
    if (mutatedNodes !== null) {
      triggerMutationListeners(editor, mutatedNodes, tags, dirtyLeaves, currentEditorState);
    }
    if (!$isRangeSelection(pendingSelection) && pendingSelection !== null && (currentSelection === null || !currentSelection.is(pendingSelection))) {
      editor.dispatchCommand(SELECTION_CHANGE_COMMAND, undefined);
    }
    /**
     * Capture pendingDecorators after garbage collecting detached decorators
     */
    var pendingDecorators = editor._pendingDecorators;
    if (pendingDecorators !== null) {
      editor._decorators = pendingDecorators;
      editor._pendingDecorators = null;
      triggerListeners('decorator', editor, true, pendingDecorators);
    }

    // If reconciler fails, we reset whole editor (so current editor state becomes empty)
    // and attempt to re-render pendingEditorState. If that goes through we trigger
    // listeners, but instead use recoverEditorState which is current editor state before reset
    // This specifically important for collab that relies on prevEditorState from update
    // listener to calculate delta of changed nodes/properties
    triggerTextContentListeners(editor, recoveryEditorState || currentEditorState, pendingEditorState);
    triggerListeners('update', editor, true, {
      dirtyElements: dirtyElements,
      dirtyLeaves: dirtyLeaves,
      editorState: pendingEditorState,
      normalizedNodes: normalizedNodes,
      prevEditorState: recoveryEditorState || currentEditorState,
      tags: tags
    });
    triggerDeferredUpdateCallbacks(editor, deferred);
    $triggerEnqueuedUpdates(editor);
  }
  function triggerTextContentListeners(editor, currentEditorState, pendingEditorState) {
    var currentTextContent = getEditorStateTextContent(currentEditorState);
    var latestTextContent = getEditorStateTextContent(pendingEditorState);
    if (currentTextContent !== latestTextContent) {
      triggerListeners('textcontent', editor, true, latestTextContent);
    }
  }
  function triggerMutationListeners(editor, mutatedNodes, updateTags, dirtyLeaves, prevEditorState) {
    var listeners = Array.from(editor._listeners.mutation);
    var listenersLength = listeners.length;
    for (var i = 0; i < listenersLength; i++) {
      var _listeners$i = _slicedToArray(listeners[i], 2),
        listener = _listeners$i[0],
        klass = _listeners$i[1];
      var mutatedNodesByType = mutatedNodes.get(klass);
      if (mutatedNodesByType !== undefined) {
        listener(mutatedNodesByType, {
          dirtyLeaves: dirtyLeaves,
          prevEditorState: prevEditorState,
          updateTags: updateTags
        });
      }
    }
  }
  function triggerListeners(type, editor, isCurrentlyEnqueuingUpdates) {
    var previouslyUpdating = editor._updating;
    editor._updating = isCurrentlyEnqueuingUpdates;
    try {
      var listeners = Array.from(editor._listeners[type]);
      for (var _len3 = arguments.length, payload = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
        payload[_key3 - 3] = arguments[_key3];
      }
      for (var i = 0; i < listeners.length; i++) {
        // @ts-ignore
        listeners[i].apply(null, payload);
      }
    } finally {
      editor._updating = previouslyUpdating;
    }
  }
  function triggerCommandListeners(editor, type, payload) {
    if (editor._updating === false || activeEditor !== editor) {
      var returnVal = false;
      editor.update(function () {
        returnVal = triggerCommandListeners(editor, type, payload);
      });
      return returnVal;
    }
    var editors = getEditorsToPropagate(editor);
    for (var i = 4; i >= 0; i--) {
      for (var e = 0; e < editors.length; e++) {
        var currentEditor = editors[e];
        var commandListeners = currentEditor._commands;
        var listenerInPriorityOrder = commandListeners.get(type);
        if (listenerInPriorityOrder !== undefined) {
          var listenersSet = listenerInPriorityOrder[i];
          if (listenersSet !== undefined) {
            var listeners = Array.from(listenersSet);
            var listenersLength = listeners.length;
            for (var j = 0; j < listenersLength; j++) {
              if (listeners[j](payload, editor) === true) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }
  function $triggerEnqueuedUpdates(editor) {
    var queuedUpdates = editor._updates;
    if (queuedUpdates.length !== 0) {
      var queuedUpdate = queuedUpdates.shift();
      if (queuedUpdate) {
        var _queuedUpdate = _slicedToArray(queuedUpdate, 2),
          updateFn = _queuedUpdate[0],
          options = _queuedUpdate[1];
        $beginUpdate(editor, updateFn, options);
      }
    }
  }
  function triggerDeferredUpdateCallbacks(editor, deferred) {
    editor._deferred = [];
    if (deferred.length !== 0) {
      var previouslyUpdating = editor._updating;
      editor._updating = true;
      try {
        for (var i = 0; i < deferred.length; i++) {
          deferred[i]();
        }
      } finally {
        editor._updating = previouslyUpdating;
      }
    }
  }
  function processNestedUpdates(editor, initialSkipTransforms) {
    var queuedUpdates = editor._updates;
    var skipTransforms = initialSkipTransforms || false;

    // Updates might grow as we process them, we so we'll need
    // to handle each update as we go until the updates array is
    // empty.
    while (queuedUpdates.length !== 0) {
      var queuedUpdate = queuedUpdates.shift();
      if (queuedUpdate) {
        var _queuedUpdate2 = _slicedToArray(queuedUpdate, 2),
          nextUpdateFn = _queuedUpdate2[0],
          options = _queuedUpdate2[1];
        var onUpdate = void 0;
        var tag = void 0;
        if (options !== undefined) {
          onUpdate = options.onUpdate;
          tag = options.tag;
          if (options.skipTransforms) {
            skipTransforms = true;
          }
          if (onUpdate) {
            editor._deferred.push(onUpdate);
          }
          if (tag) {
            editor._updateTags.add(tag);
          }
        }
        nextUpdateFn();
      }
    }
    return skipTransforms;
  }
  function $beginUpdate(editor, updateFn, options) {
    var updateTags = editor._updateTags;
    var onUpdate;
    var tag;
    var skipTransforms = false;
    var discrete = false;
    if (options !== undefined) {
      onUpdate = options.onUpdate;
      tag = options.tag;
      if (tag != null) {
        updateTags.add(tag);
      }
      skipTransforms = options.skipTransforms || false;
      discrete = options.discrete || false;
    }
    if (onUpdate) {
      editor._deferred.push(onUpdate);
    }
    var currentEditorState = editor._editorState;
    var pendingEditorState = editor._pendingEditorState;
    var editorStateWasCloned = false;
    if (pendingEditorState === null || pendingEditorState._readOnly) {
      pendingEditorState = editor._pendingEditorState = cloneEditorState(pendingEditorState || currentEditorState);
      editorStateWasCloned = true;
    }
    pendingEditorState._flushSync = discrete;
    var previousActiveEditorState = activeEditorState;
    var previousReadOnlyMode = isReadOnlyMode;
    var previousActiveEditor = activeEditor;
    var previouslyUpdating = editor._updating;
    activeEditorState = pendingEditorState;
    isReadOnlyMode = false;
    editor._updating = true;
    activeEditor = editor;
    try {
      if (editorStateWasCloned) {
        if (editor._headless) {
          if (currentEditorState._selection !== null) {
            pendingEditorState._selection = currentEditorState._selection.clone();
          }
        } else {
          pendingEditorState._selection = $internalCreateSelection(editor);
        }
      }
      var startingCompositionKey = editor._compositionKey;
      updateFn();
      skipTransforms = processNestedUpdates(editor, skipTransforms);
      applySelectionTransforms(pendingEditorState, editor);
      if (editor._dirtyType !== NO_DIRTY_NODES) {
        if (skipTransforms) {
          $normalizeAllDirtyTextNodes(pendingEditorState, editor);
        } else {
          $applyAllTransforms(pendingEditorState, editor);
        }
        processNestedUpdates(editor);
        $garbageCollectDetachedNodes(currentEditorState, pendingEditorState, editor._dirtyLeaves, editor._dirtyElements);
      }
      var endingCompositionKey = editor._compositionKey;
      if (startingCompositionKey !== endingCompositionKey) {
        pendingEditorState._flushSync = true;
      }
      var pendingSelection = pendingEditorState._selection;
      if ($isRangeSelection(pendingSelection)) {
        var pendingNodeMap = pendingEditorState._nodeMap;
        var anchorKey = pendingSelection.anchor.key;
        var focusKey = pendingSelection.focus.key;
        if (pendingNodeMap.get(anchorKey) === undefined || pendingNodeMap.get(focusKey) === undefined) {
          {
            throw Error("updateEditor: selection has been lost because the previously selected nodes have been removed and selection wasn't moved to another node. Ensure selection changes after removing/replacing a selected node.");
          }
        }
      } else if ($isNodeSelection(pendingSelection)) {
        // TODO: we should also validate node selection?
        if (pendingSelection._nodes.size === 0) {
          pendingEditorState._selection = null;
        }
      }
    } catch (error) {
      // Report errors
      if (error instanceof Error) {
        editor._onError(error);
      }

      // Restore existing editor state to the DOM
      editor._pendingEditorState = currentEditorState;
      editor._dirtyType = FULL_RECONCILE;
      editor._cloneNotNeeded.clear();
      editor._dirtyLeaves = new Set();
      editor._dirtyElements.clear();
      $commitPendingUpdates(editor);
      return;
    } finally {
      activeEditorState = previousActiveEditorState;
      isReadOnlyMode = previousReadOnlyMode;
      activeEditor = previousActiveEditor;
      editor._updating = previouslyUpdating;
      infiniteTransformCount = 0;
    }
    var shouldUpdate = editor._dirtyType !== NO_DIRTY_NODES || editorStateHasDirtySelection(pendingEditorState, editor);
    if (shouldUpdate) {
      if (pendingEditorState._flushSync) {
        pendingEditorState._flushSync = false;
        $commitPendingUpdates(editor);
      } else if (editorStateWasCloned) {
        scheduleMicroTask(function () {
          $commitPendingUpdates(editor);
        });
      }
    } else {
      pendingEditorState._flushSync = false;
      if (editorStateWasCloned) {
        updateTags.clear();
        editor._deferred = [];
        editor._pendingEditorState = null;
      }
    }
  }
  function updateEditor(editor, updateFn, options) {
    if (editor._updating) {
      editor._updates.push([updateFn, options]);
    } else {
      $beginUpdate(editor, updateFn, options);
    }
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /** @noInheritDoc */
  var ElementNode = /*#__PURE__*/function (_LexicalNode3) {
    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    function ElementNode(key) {
      var _this4;
      _classCallCheck(this, ElementNode);
      _this4 = _callSuper(this, ElementNode, [key]);
      _this4.__first = null;
      _this4.__last = null;
      _this4.__size = 0;
      _this4.__format = 0;
      _this4.__indent = 0;
      _this4.__dir = null;
      return _this4;
    }
    _inherits(ElementNode, _LexicalNode3);
    return _createClass(ElementNode, [{
      key: "getFormat",
      value: function getFormat() {
        var self = this.getLatest();
        return self.__format;
      }
    }, {
      key: "getFormatType",
      value: function getFormatType() {
        var format = this.getFormat();
        return ELEMENT_FORMAT_TO_TYPE[format] || '';
      }
    }, {
      key: "getIndent",
      value: function getIndent() {
        var self = this.getLatest();
        return self.__indent;
      }
    }, {
      key: "getChildren",
      value: function getChildren() {
        var children = [];
        var child = this.getFirstChild();
        while (child !== null) {
          children.push(child);
          child = child.getNextSibling();
        }
        return children;
      }
    }, {
      key: "getChildrenKeys",
      value: function getChildrenKeys() {
        var children = [];
        var child = this.getFirstChild();
        while (child !== null) {
          children.push(child.__key);
          child = child.getNextSibling();
        }
        return children;
      }
    }, {
      key: "getChildrenSize",
      value: function getChildrenSize() {
        var self = this.getLatest();
        return self.__size;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.getChildrenSize() === 0;
      }
    }, {
      key: "isDirty",
      value: function isDirty() {
        var editor = getActiveEditor();
        var dirtyElements = editor._dirtyElements;
        return dirtyElements !== null && dirtyElements.has(this.__key);
      }
    }, {
      key: "isLastChild",
      value: function isLastChild() {
        var self = this.getLatest();
        var parentLastChild = this.getParentOrThrow().getLastChild();
        return parentLastChild !== null && parentLastChild.is(self);
      }
    }, {
      key: "getAllTextNodes",
      value: function getAllTextNodes() {
        var textNodes = [];
        var child = this.getFirstChild();
        while (child !== null) {
          if ($isTextNode(child)) {
            textNodes.push(child);
          }
          if ($isElementNode(child)) {
            var subChildrenNodes = child.getAllTextNodes();
            textNodes.push.apply(textNodes, _toConsumableArray(subChildrenNodes));
          }
          child = child.getNextSibling();
        }
        return textNodes;
      }
    }, {
      key: "getFirstDescendant",
      value: function getFirstDescendant() {
        var node = this.getFirstChild();
        while ($isElementNode(node)) {
          var child = node.getFirstChild();
          if (child === null) {
            break;
          }
          node = child;
        }
        return node;
      }
    }, {
      key: "getLastDescendant",
      value: function getLastDescendant() {
        var node = this.getLastChild();
        while ($isElementNode(node)) {
          var child = node.getLastChild();
          if (child === null) {
            break;
          }
          node = child;
        }
        return node;
      }
    }, {
      key: "getDescendantByIndex",
      value: function getDescendantByIndex(index) {
        var children = this.getChildren();
        var childrenLength = children.length;
        // For non-empty element nodes, we resolve its descendant
        // (either a leaf node or the bottom-most element)
        if (index >= childrenLength) {
          var _resolvedNode = children[childrenLength - 1];
          return $isElementNode(_resolvedNode) && _resolvedNode.getLastDescendant() || _resolvedNode || null;
        }
        var resolvedNode = children[index];
        return $isElementNode(resolvedNode) && resolvedNode.getFirstDescendant() || resolvedNode || null;
      }
    }, {
      key: "getFirstChild",
      value: function getFirstChild() {
        var self = this.getLatest();
        var firstKey = self.__first;
        return firstKey === null ? null : $getNodeByKey(firstKey);
      }
    }, {
      key: "getFirstChildOrThrow",
      value: function getFirstChildOrThrow() {
        var firstChild = this.getFirstChild();
        if (firstChild === null) {
          {
            throw Error("Expected node ".concat(this.__key, " to have a first child."));
          }
        }
        return firstChild;
      }
    }, {
      key: "getLastChild",
      value: function getLastChild() {
        var self = this.getLatest();
        var lastKey = self.__last;
        return lastKey === null ? null : $getNodeByKey(lastKey);
      }
    }, {
      key: "getLastChildOrThrow",
      value: function getLastChildOrThrow() {
        var lastChild = this.getLastChild();
        if (lastChild === null) {
          {
            throw Error("Expected node ".concat(this.__key, " to have a last child."));
          }
        }
        return lastChild;
      }
    }, {
      key: "getChildAtIndex",
      value: function getChildAtIndex(index) {
        var size = this.getChildrenSize();
        var node;
        var i;
        if (index < size / 2) {
          node = this.getFirstChild();
          i = 0;
          while (node !== null && i <= index) {
            if (i === index) {
              return node;
            }
            node = node.getNextSibling();
            i++;
          }
          return null;
        }
        node = this.getLastChild();
        i = size - 1;
        while (node !== null && i >= index) {
          if (i === index) {
            return node;
          }
          node = node.getPreviousSibling();
          i--;
        }
        return null;
      }
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        var textContent = '';
        var children = this.getChildren();
        var childrenLength = children.length;
        for (var i = 0; i < childrenLength; i++) {
          var child = children[i];
          textContent += child.getTextContent();
          if ($isElementNode(child) && i !== childrenLength - 1 && !child.isInline()) {
            textContent += DOUBLE_LINE_BREAK;
          }
        }
        return textContent;
      }
    }, {
      key: "getTextContentSize",
      value: function getTextContentSize() {
        var textContentSize = 0;
        var children = this.getChildren();
        var childrenLength = children.length;
        for (var i = 0; i < childrenLength; i++) {
          var child = children[i];
          textContentSize += child.getTextContentSize();
          if ($isElementNode(child) && i !== childrenLength - 1 && !child.isInline()) {
            textContentSize += DOUBLE_LINE_BREAK.length;
          }
        }
        return textContentSize;
      }
    }, {
      key: "getDirection",
      value: function getDirection() {
        var self = this.getLatest();
        return self.__dir;
      }
    }, {
      key: "hasFormat",
      value: function hasFormat(type) {
        if (type !== '') {
          var formatFlag = ELEMENT_TYPE_TO_FORMAT[type];
          return (this.getFormat() & formatFlag) !== 0;
        }
        return false;
      }

      // Mutators
    }, {
      key: "select",
      value: function select(_anchorOffset, _focusOffset) {
        errorOnReadOnly();
        var selection = $getSelection();
        var anchorOffset = _anchorOffset;
        var focusOffset = _focusOffset;
        var childrenCount = this.getChildrenSize();
        if (!this.canBeEmpty()) {
          if (_anchorOffset === 0 && _focusOffset === 0) {
            var firstChild = this.getFirstChild();
            if ($isTextNode(firstChild) || $isElementNode(firstChild)) {
              return firstChild.select(0, 0);
            }
          } else if ((_anchorOffset === undefined || _anchorOffset === childrenCount) && (_focusOffset === undefined || _focusOffset === childrenCount)) {
            var lastChild = this.getLastChild();
            if ($isTextNode(lastChild) || $isElementNode(lastChild)) {
              return lastChild.select();
            }
          }
        }
        if (anchorOffset === undefined) {
          anchorOffset = childrenCount;
        }
        if (focusOffset === undefined) {
          focusOffset = childrenCount;
        }
        var key = this.__key;
        if (!$isRangeSelection(selection)) {
          return $internalMakeRangeSelection(key, anchorOffset, key, focusOffset, 'element', 'element');
        } else {
          selection.anchor.set(key, anchorOffset, 'element');
          selection.focus.set(key, focusOffset, 'element');
          selection.dirty = true;
        }
        return selection;
      }
    }, {
      key: "selectStart",
      value: function selectStart() {
        var firstNode = this.getFirstDescendant();
        return firstNode ? firstNode.selectStart() : this.select();
      }
    }, {
      key: "selectEnd",
      value: function selectEnd() {
        var lastNode = this.getLastDescendant();
        return lastNode ? lastNode.selectEnd() : this.select();
      }
    }, {
      key: "clear",
      value: function clear() {
        var writableSelf = this.getWritable();
        var children = this.getChildren();
        children.forEach(function (child) {
          return child.remove();
        });
        return writableSelf;
      }
    }, {
      key: "append",
      value: function append() {
        for (var _len4 = arguments.length, nodesToAppend = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          nodesToAppend[_key4] = arguments[_key4];
        }
        return this.splice(this.getChildrenSize(), 0, nodesToAppend);
      }
    }, {
      key: "setDirection",
      value: function setDirection(direction) {
        var self = this.getWritable();
        self.__dir = direction;
        return self;
      }
    }, {
      key: "setFormat",
      value: function setFormat(type) {
        var self = this.getWritable();
        self.__format = type !== '' ? ELEMENT_TYPE_TO_FORMAT[type] : 0;
        return this;
      }
    }, {
      key: "setIndent",
      value: function setIndent(indentLevel) {
        var self = this.getWritable();
        self.__indent = indentLevel;
        return this;
      }
    }, {
      key: "splice",
      value: function splice(start, deleteCount, nodesToInsert) {
        var nodesToInsertLength = nodesToInsert.length;
        var oldSize = this.getChildrenSize();
        var writableSelf = this.getWritable();
        var writableSelfKey = writableSelf.__key;
        var nodesToInsertKeys = [];
        var nodesToRemoveKeys = [];
        var nodeAfterRange = this.getChildAtIndex(start + deleteCount);
        var nodeBeforeRange = null;
        var newSize = oldSize - deleteCount + nodesToInsertLength;
        if (start !== 0) {
          if (start === oldSize) {
            nodeBeforeRange = this.getLastChild();
          } else {
            var node = this.getChildAtIndex(start);
            if (node !== null) {
              nodeBeforeRange = node.getPreviousSibling();
            }
          }
        }
        if (deleteCount > 0) {
          var nodeToDelete = nodeBeforeRange === null ? this.getFirstChild() : nodeBeforeRange.getNextSibling();
          for (var i = 0; i < deleteCount; i++) {
            if (nodeToDelete === null) {
              {
                throw Error("splice: sibling not found");
              }
            }
            var nextSibling = nodeToDelete.getNextSibling();
            var nodeKeyToDelete = nodeToDelete.__key;
            var writableNodeToDelete = nodeToDelete.getWritable();
            removeFromParent(writableNodeToDelete);
            nodesToRemoveKeys.push(nodeKeyToDelete);
            nodeToDelete = nextSibling;
          }
        }
        var prevNode = nodeBeforeRange;
        for (var _i7 = 0; _i7 < nodesToInsertLength; _i7++) {
          var nodeToInsert = nodesToInsert[_i7];
          if (prevNode !== null && nodeToInsert.is(prevNode)) {
            nodeBeforeRange = prevNode = prevNode.getPreviousSibling();
          }
          var writableNodeToInsert = nodeToInsert.getWritable();
          if (writableNodeToInsert.__parent === writableSelfKey) {
            newSize--;
          }
          removeFromParent(writableNodeToInsert);
          var nodeKeyToInsert = nodeToInsert.__key;
          if (prevNode === null) {
            writableSelf.__first = nodeKeyToInsert;
            writableNodeToInsert.__prev = null;
          } else {
            var writablePrevNode = prevNode.getWritable();
            writablePrevNode.__next = nodeKeyToInsert;
            writableNodeToInsert.__prev = writablePrevNode.__key;
          }
          if (nodeToInsert.__key === writableSelfKey) {
            {
              throw Error("append: attempting to append self");
            }
          }
          // Set child parent to self
          writableNodeToInsert.__parent = writableSelfKey;
          nodesToInsertKeys.push(nodeKeyToInsert);
          prevNode = nodeToInsert;
        }
        if (start + deleteCount === oldSize) {
          if (prevNode !== null) {
            var _writablePrevNode = prevNode.getWritable();
            _writablePrevNode.__next = null;
            writableSelf.__last = prevNode.__key;
          }
        } else if (nodeAfterRange !== null) {
          var writableNodeAfterRange = nodeAfterRange.getWritable();
          if (prevNode !== null) {
            var _writablePrevNode2 = prevNode.getWritable();
            writableNodeAfterRange.__prev = prevNode.__key;
            _writablePrevNode2.__next = nodeAfterRange.__key;
          } else {
            writableNodeAfterRange.__prev = null;
          }
        }
        writableSelf.__size = newSize;

        // In case of deletion we need to adjust selection, unlink removed nodes
        // and clean up node itself if it becomes empty. None of these needed
        // for insertion-only cases
        if (nodesToRemoveKeys.length) {
          // Adjusting selection, in case node that was anchor/focus will be deleted
          var selection = $getSelection();
          if ($isRangeSelection(selection)) {
            var nodesToRemoveKeySet = new Set(nodesToRemoveKeys);
            var nodesToInsertKeySet = new Set(nodesToInsertKeys);
            var anchor = selection.anchor,
              focus = selection.focus;
            if (isPointRemoved(anchor, nodesToRemoveKeySet, nodesToInsertKeySet)) {
              moveSelectionPointToSibling(anchor, anchor.getNode(), this, nodeBeforeRange, nodeAfterRange);
            }
            if (isPointRemoved(focus, nodesToRemoveKeySet, nodesToInsertKeySet)) {
              moveSelectionPointToSibling(focus, focus.getNode(), this, nodeBeforeRange, nodeAfterRange);
            }
            // Cleanup if node can't be empty
            if (newSize === 0 && !this.canBeEmpty() && !$isRootOrShadowRoot(this)) {
              this.remove();
            }
          }
        }
        return writableSelf;
      }
      // JSON serialization
    }, {
      key: "exportJSON",
      value: function exportJSON() {
        return {
          children: [],
          direction: this.getDirection(),
          format: this.getFormatType(),
          indent: this.getIndent(),
          type: 'element',
          version: 1
        };
      }
      // These are intended to be extends for specific element heuristics.
    }, {
      key: "insertNewAfter",
      value: function insertNewAfter(selection, restoreSelection) {
        return null;
      }
    }, {
      key: "canIndent",
      value: function canIndent() {
        return true;
      }
      /*
       * This method controls the behavior of a the node during backwards
       * deletion (i.e., backspace) when selection is at the beginning of
       * the node (offset 0)
       */
    }, {
      key: "collapseAtStart",
      value: function collapseAtStart(selection) {
        return false;
      }
    }, {
      key: "excludeFromCopy",
      value: function excludeFromCopy(destination) {
        return false;
      }
      /** @deprecated @internal */
    }, {
      key: "canReplaceWith",
      value: function canReplaceWith(replacement) {
        return true;
      }
      /** @deprecated @internal */
    }, {
      key: "canInsertAfter",
      value: function canInsertAfter(node) {
        return true;
      }
    }, {
      key: "canBeEmpty",
      value: function canBeEmpty() {
        return true;
      }
    }, {
      key: "canInsertTextBefore",
      value: function canInsertTextBefore() {
        return true;
      }
    }, {
      key: "canInsertTextAfter",
      value: function canInsertTextAfter() {
        return true;
      }
    }, {
      key: "isInline",
      value: function isInline() {
        return false;
      }
      // A shadow root is a Node that behaves like RootNode. The shadow root (and RootNode) mark the
      // end of the hiercharchy, most implementations should treat it as there's nothing (upwards)
      // beyond this point. For example, node.getTopLevelElement(), when performed inside a TableCellNode
      // will return the immediate first child underneath TableCellNode instead of RootNode.
    }, {
      key: "isShadowRoot",
      value: function isShadowRoot() {
        return false;
      }
      /** @deprecated @internal */
    }, {
      key: "canMergeWith",
      value: function canMergeWith(node) {
        return false;
      }
    }, {
      key: "extractWithChild",
      value: function extractWithChild(child, selection, destination) {
        return false;
      }
    }]);
  }(LexicalNode);
  function $isElementNode(node) {
    return node instanceof ElementNode;
  }
  function isPointRemoved(point, nodesToRemoveKeySet, nodesToInsertKeySet) {
    var node = point.getNode();
    while (node) {
      var nodeKey = node.__key;
      if (nodesToRemoveKeySet.has(nodeKey) && !nodesToInsertKeySet.has(nodeKey)) {
        return true;
      }
      node = node.getParent();
    }
    return false;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /** @noInheritDoc */
  var DecoratorNode = /*#__PURE__*/function (_LexicalNode4) {
    function DecoratorNode(key) {
      _classCallCheck(this, DecoratorNode);
      return _callSuper(this, DecoratorNode, [key]);
    }

    /**
     * The returned value is added to the LexicalEditor._decorators
     */
    _inherits(DecoratorNode, _LexicalNode4);
    return _createClass(DecoratorNode, [{
      key: "decorate",
      value: function decorate(editor, config) {
        {
          throw Error("decorate: base method not extended");
        }
      }
    }, {
      key: "isIsolated",
      value: function isIsolated() {
        return false;
      }
    }, {
      key: "isInline",
      value: function isInline() {
        return true;
      }
    }, {
      key: "isKeyboardSelectable",
      value: function isKeyboardSelectable() {
        return true;
      }
    }]);
  }(LexicalNode);
  function $isDecoratorNode(node) {
    return node instanceof DecoratorNode;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /** @noInheritDoc */
  var RootNode = /*#__PURE__*/function (_ElementNode) {
    function RootNode() {
      var _this5;
      _classCallCheck(this, RootNode);
      _this5 = _callSuper(this, RootNode, ['root']);
      _this5.__cachedText = null;
      return _this5;
    }
    _inherits(RootNode, _ElementNode);
    return _createClass(RootNode, [{
      key: "getTopLevelElementOrThrow",
      value: function getTopLevelElementOrThrow() {
        {
          throw Error("getTopLevelElementOrThrow: root nodes are not top level elements");
        }
      }
    }, {
      key: "getTextContent",
      value: function getTextContent() {
        var cachedText = this.__cachedText;
        if (isCurrentlyReadOnlyMode() || getActiveEditor()._dirtyType === NO_DIRTY_NODES) {
          if (cachedText !== null) {
            return cachedText;
          }
        }
        return _get(_getPrototypeOf(RootNode.prototype), "getTextContent", this).call(this);
      }
    }, {
      key: "remove",
      value: function remove() {
        {
          throw Error("remove: cannot be called on root nodes");
        }
      }
    }, {
      key: "replace",
      value: function replace(node) {
        {
          throw Error("replace: cannot be called on root nodes");
        }
      }
    }, {
      key: "insertBefore",
      value: function insertBefore(nodeToInsert) {
        {
          throw Error("insertBefore: cannot be called on root nodes");
        }
      }
    }, {
      key: "insertAfter",
      value: function insertAfter(nodeToInsert) {
        {
          throw Error("insertAfter: cannot be called on root nodes");
        }
      }

      // View
    }, {
      key: "updateDOM",
      value: function updateDOM(prevNode, dom) {
        return false;
      }

      // Mutate
    }, {
      key: "append",
      value: function append() {
        var _get2;
        for (var _len5 = arguments.length, nodesToAppend = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          nodesToAppend[_key5] = arguments[_key5];
        }
        for (var i = 0; i < nodesToAppend.length; i++) {
          var node = nodesToAppend[i];
          if (!$isElementNode(node) && !$isDecoratorNode(node)) {
            {
              throw Error("rootNode.append: Only element or decorator nodes can be appended to the root node");
            }
          }
        }
        return (_get2 = _get(_getPrototypeOf(RootNode.prototype), "append", this)).call.apply(_get2, [this].concat(nodesToAppend));
      }
    }, {
      key: "exportJSON",
      value: function exportJSON() {
        return {
          children: [],
          direction: this.getDirection(),
          format: this.getFormatType(),
          indent: this.getIndent(),
          type: 'root',
          version: 1
        };
      }
    }, {
      key: "collapseAtStart",
      value: function collapseAtStart() {
        return true;
      }
    }], [{
      key: "getType",
      value: /** @internal */

      function getType() {
        return 'root';
      }
    }, {
      key: "clone",
      value: function clone() {
        return new RootNode();
      }
    }, {
      key: "importJSON",
      value: function importJSON(serializedNode) {
        // We don't create a root, and instead use the existing root.
        var node = $getRoot();
        node.setFormat(serializedNode.format);
        node.setIndent(serializedNode.indent);
        node.setDirection(serializedNode.direction);
        return node;
      }
    }]);
  }(ElementNode);
  function $createRootNode() {
    return new RootNode();
  }
  function $isRootNode(node) {
    return node instanceof RootNode;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  function editorStateHasDirtySelection(editorState, editor) {
    var currentSelection = editor.getEditorState()._selection;
    var pendingSelection = editorState._selection;

    // Check if we need to update because of changes in selection
    if (pendingSelection !== null) {
      if (pendingSelection.dirty || !pendingSelection.is(currentSelection)) {
        return true;
      }
    } else if (currentSelection !== null) {
      return true;
    }
    return false;
  }
  function cloneEditorState(current) {
    return new EditorState(new Map(current._nodeMap));
  }
  function createEmptyEditorState() {
    return new EditorState(new Map([['root', $createRootNode()]]));
  }
  function exportNodeToJSON(node) {
    var serializedNode = node.exportJSON();
    var nodeClass = node.constructor;
    if (serializedNode.type !== nodeClass.getType()) {
      {
        throw Error("LexicalNode: Node ".concat(nodeClass.name, " does not match the serialized type. Check if .exportJSON() is implemented and it is returning the correct type."));
      }
    }
    if ($isElementNode(node)) {
      var serializedChildren = serializedNode.children;
      if (!Array.isArray(serializedChildren)) {
        {
          throw Error("LexicalNode: Node ".concat(nodeClass.name, " is an element but .exportJSON() does not have a children array."));
        }
      }
      var children = node.getChildren();
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var serializedChildNode = exportNodeToJSON(child);
        serializedChildren.push(serializedChildNode);
      }
    }

    // @ts-expect-error
    return serializedNode;
  }
  var EditorState = /*#__PURE__*/function () {
    function EditorState(nodeMap, selection) {
      _classCallCheck(this, EditorState);
      this._nodeMap = nodeMap;
      this._selection = selection || null;
      this._flushSync = false;
      this._readOnly = false;
    }
    return _createClass(EditorState, [{
      key: "isEmpty",
      value: function isEmpty() {
        return this._nodeMap.size === 1 && this._selection === null;
      }
    }, {
      key: "read",
      value: function read(callbackFn) {
        return readEditorState(this, callbackFn);
      }
    }, {
      key: "clone",
      value: function clone(selection) {
        var editorState = new EditorState(this._nodeMap, selection === undefined ? this._selection : selection);
        editorState._readOnly = true;
        return editorState;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return readEditorState(this, function () {
          return {
            root: exportNodeToJSON($getRoot())
          };
        });
      }
    }]);
  }();
  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */
  // TODO: Cleanup ArtificialNode__DO_NOT_USE #5966
  var ArtificialNode__DO_NOT_USE = /*#__PURE__*/function (_ElementNode2) {
    function ArtificialNode__DO_NOT_USE() {
      _classCallCheck(this, ArtificialNode__DO_NOT_USE);
      return _callSuper(this, ArtificialNode__DO_NOT_USE, arguments);
    }
    _inherits(ArtificialNode__DO_NOT_USE, _ElementNode2);
    return _createClass(ArtificialNode__DO_NOT_USE, [{
      key: "createDOM",
      value: function createDOM(config) {
        // this isnt supposed to be used and is not used anywhere but defining it to appease the API
        var dom = document.createElement('div');
        return dom;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'artificial';
      }
    }]);
  }(ElementNode);
  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */
  /** @noInheritDoc */
  var ParagraphNode = /*#__PURE__*/function (_ElementNode3) {
    /** @internal */

    function ParagraphNode(key) {
      var _this6;
      _classCallCheck(this, ParagraphNode);
      _this6 = _callSuper(this, ParagraphNode, [key]);
      _this6.__textFormat = 0;
      return _this6;
    }
    _inherits(ParagraphNode, _ElementNode3);
    return _createClass(ParagraphNode, [{
      key: "getTextFormat",
      value: function getTextFormat() {
        var self = this.getLatest();
        return self.__textFormat;
      }
    }, {
      key: "setTextFormat",
      value: function setTextFormat(type) {
        var self = this.getWritable();
        self.__textFormat = type;
        return self;
      }
    }, {
      key: "hasTextFormat",
      value: function hasTextFormat(type) {
        var formatFlag = TEXT_TYPE_TO_FORMAT[type];
        return (this.getTextFormat() & formatFlag) !== 0;
      }
    }, {
      key: "createDOM",
      value:
      // View

      function createDOM(config) {
        var dom = document.createElement('p');
        var classNames = getCachedClassNameArray(config.theme, 'paragraph');
        if (classNames !== undefined) {
          var domClassList = dom.classList;
          domClassList.add.apply(domClassList, _toConsumableArray(classNames));
        }
        return dom;
      }
    }, {
      key: "updateDOM",
      value: function updateDOM(prevNode, dom, config) {
        return false;
      }
    }, {
      key: "exportDOM",
      value: function exportDOM(editor) {
        var _get$call2 = _get(_getPrototypeOf(ParagraphNode.prototype), "exportDOM", this).call(this, editor),
          element = _get$call2.element;
        if (element && isHTMLElement(element)) {
          if (this.isEmpty()) {
            element.append(document.createElement('br'));
          }
          var formatType = this.getFormatType();
          element.style.textAlign = formatType;
          var direction = this.getDirection();
          if (direction) {
            element.dir = direction;
          }
          var indent = this.getIndent();
          if (indent > 0) {
            // padding-inline-start is not widely supported in email HTML, but
            // Lexical Reconciler uses padding-inline-start. Using text-indent instead.
            element.style.textIndent = "".concat(indent * 20, "px");
          }
        }
        return {
          element: element
        };
      }
    }, {
      key: "exportJSON",
      value: function exportJSON() {
        return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ParagraphNode.prototype), "exportJSON", this).call(this)), {}, {
          textFormat: this.getTextFormat(),
          type: 'paragraph',
          version: 1
        });
      }

      // Mutation
    }, {
      key: "insertNewAfter",
      value: function insertNewAfter(rangeSelection, restoreSelection) {
        var newElement = $createParagraphNode();
        newElement.setTextFormat(rangeSelection.format);
        var direction = this.getDirection();
        newElement.setDirection(direction);
        newElement.setFormat(this.getFormatType());
        this.insertAfter(newElement, restoreSelection);
        return newElement;
      }
    }, {
      key: "collapseAtStart",
      value: function collapseAtStart() {
        var children = this.getChildren();
        // If we have an empty (trimmed) first paragraph and try and remove it,
        // delete the paragraph as long as we have another sibling to go to
        if (children.length === 0 || $isTextNode(children[0]) && children[0].getTextContent().trim() === '') {
          var nextSibling = this.getNextSibling();
          if (nextSibling !== null) {
            this.selectNext();
            this.remove();
            return true;
          }
          var prevSibling = this.getPreviousSibling();
          if (prevSibling !== null) {
            this.selectPrevious();
            this.remove();
            return true;
          }
        }
        return false;
      }
    }], [{
      key: "getType",
      value: function getType() {
        return 'paragraph';
      }
    }, {
      key: "clone",
      value: function clone(node) {
        return new ParagraphNode(node.__key);
      }
    }, {
      key: "importDOM",
      value: function importDOM() {
        return {
          p: function p(node) {
            return {
              conversion: $convertParagraphElement,
              priority: 0
            };
          }
        };
      }
    }, {
      key: "importJSON",
      value: function importJSON(serializedNode) {
        var node = $createParagraphNode();
        node.setFormat(serializedNode.format);
        node.setIndent(serializedNode.indent);
        node.setDirection(serializedNode.direction);
        node.setTextFormat(serializedNode.textFormat);
        return node;
      }
    }]);
  }(ElementNode);
  function $convertParagraphElement(element) {
    var node = $createParagraphNode();
    if (element.style) {
      node.setFormat(element.style.textAlign);
      var indent = parseInt(element.style.textIndent, 10) / 20;
      if (indent > 0) {
        node.setIndent(indent);
      }
    }
    return {
      node: node
    };
  }
  function $createParagraphNode() {
    return $applyNodeReplacement(new ParagraphNode());
  }
  function $isParagraphNode(node) {
    return node instanceof ParagraphNode;
  }

  /**
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  // https://github.com/microsoft/TypeScript/issues/3841
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var COMMAND_PRIORITY_EDITOR = 0;
  var COMMAND_PRIORITY_LOW = 1;
  var COMMAND_PRIORITY_NORMAL = 2;
  var COMMAND_PRIORITY_HIGH = 3;
  var COMMAND_PRIORITY_CRITICAL = 4;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  /**
   * Type helper for extracting the payload type from a command.
   *
   * @example
   * ```ts
   * const MY_COMMAND = createCommand<SomeType>();
   *
   * // ...
   *
   * editor.registerCommand(MY_COMMAND, payload => {
   *   // Type of `payload` is inferred here. But lets say we want to extract a function to delegate to
   *   handleMyCommand(editor, payload);
   *   return true;
   * });
   *
   * function handleMyCommand(editor: LexicalEditor, payload: CommandPayloadType<typeof MY_COMMAND>) {
   *   // `payload` is of type `SomeType`, extracted from the command.
   * }
   * ```
   */

  function resetEditor(editor, prevRootElement, nextRootElement, pendingEditorState) {
    var keyNodeMap = editor._keyToDOMMap;
    keyNodeMap.clear();
    editor._editorState = createEmptyEditorState();
    editor._pendingEditorState = pendingEditorState;
    editor._compositionKey = null;
    editor._dirtyType = NO_DIRTY_NODES;
    editor._cloneNotNeeded.clear();
    editor._dirtyLeaves = new Set();
    editor._dirtyElements.clear();
    editor._normalizedNodes = new Set();
    editor._updateTags = new Set();
    editor._updates = [];
    editor._blockCursorElement = null;
    var observer = editor._observer;
    if (observer !== null) {
      observer.disconnect();
      editor._observer = null;
    }

    // Remove all the DOM nodes from the root element
    if (prevRootElement !== null) {
      prevRootElement.textContent = '';
    }
    if (nextRootElement !== null) {
      nextRootElement.textContent = '';
      keyNodeMap.set('root', nextRootElement);
    }
  }
  function initializeConversionCache(nodes, additionalConversions) {
    var conversionCache = new Map();
    var handledConversions = new Set();
    var addConversionsToCache = function addConversionsToCache(map) {
      Object.keys(map).forEach(function (key) {
        var currentCache = conversionCache.get(key);
        if (currentCache === undefined) {
          currentCache = [];
          conversionCache.set(key, currentCache);
        }
        currentCache.push(map[key]);
      });
    };
    nodes.forEach(function (node) {
      var importDOM = node.klass.importDOM;
      if (importDOM == null || handledConversions.has(importDOM)) {
        return;
      }
      handledConversions.add(importDOM);
      var map = importDOM.call(node.klass);
      if (map !== null) {
        addConversionsToCache(map);
      }
    });
    if (additionalConversions) {
      addConversionsToCache(additionalConversions);
    }
    return conversionCache;
  }

  /**
   * Creates a new LexicalEditor attached to a single contentEditable (provided in the config). This is
   * the lowest-level initialization API for a LexicalEditor. If you're using React or another framework,
   * consider using the appropriate abstractions, such as LexicalComposer
   * @param editorConfig - the editor configuration.
   * @returns a LexicalEditor instance
   */
  function createEditor(editorConfig) {
    var config = editorConfig || {};
    var activeEditor = internalGetActiveEditor();
    var theme = config.theme || {};
    var parentEditor = editorConfig === undefined ? activeEditor : config.parentEditor || null;
    var disableEvents = config.disableEvents || false;
    var editorState = createEmptyEditorState();
    var namespace = config.namespace || (parentEditor !== null ? parentEditor._config.namespace : createUID());
    var initialEditorState = config.editorState;
    var nodes = [RootNode, TextNode, LineBreakNode, TabNode, ParagraphNode, ArtificialNode__DO_NOT_USE].concat(_toConsumableArray(config.nodes || []));
    var onError = config.onError,
      html = config.html;
    var isEditable = config.editable !== undefined ? config.editable : true;
    var registeredNodes;
    if (editorConfig === undefined && activeEditor !== null) {
      registeredNodes = activeEditor._nodes;
    } else {
      registeredNodes = new Map();
      var _loop2 = function _loop2() {
        var klass = nodes[i];
        var replace = null;
        var replaceWithKlass = null;
        if (typeof klass !== 'function') {
          var options = klass;
          klass = options.replace;
          replace = options["with"];
          replaceWithKlass = options.withKlass || null;
        }
        // Ensure custom nodes implement required methods and replaceWithKlass is instance of base klass.
        {
          // ArtificialNode__DO_NOT_USE can get renamed, so we use the type
          var nodeType = Object.prototype.hasOwnProperty.call(klass, 'getType') && klass.getType();
          var name = klass.name;
          if (replaceWithKlass) {
            if (!(replaceWithKlass.prototype instanceof klass)) {
              throw Error("".concat(replaceWithKlass.name, " doesn't extend the ").concat(name));
            }
          }
          if (name !== 'RootNode' && nodeType !== 'root' && nodeType !== 'artificial') {
            var proto = klass.prototype;
            ['getType', 'clone'].forEach(function (method) {
              // eslint-disable-next-line no-prototype-builtins
              if (!klass.hasOwnProperty(method)) {
                console.warn("".concat(name, " must implement static \"").concat(method, "\" method"));
              }
            });
            if (
            // eslint-disable-next-line no-prototype-builtins
            !klass.hasOwnProperty('importDOM') &&
            // eslint-disable-next-line no-prototype-builtins
            klass.hasOwnProperty('exportDOM')) {
              console.warn("".concat(name, " should implement \"importDOM\" if using a custom \"exportDOM\" method to ensure HTML serialization (important for copy & paste) works as expected"));
            }
            if (proto instanceof DecoratorNode) {
              // eslint-disable-next-line no-prototype-builtins
              if (!proto.hasOwnProperty('decorate')) {
                console.warn("".concat(proto.constructor.name, " must implement \"decorate\" method"));
              }
            }
            if (
            // eslint-disable-next-line no-prototype-builtins
            !klass.hasOwnProperty('importJSON')) {
              console.warn("".concat(name, " should implement \"importJSON\" method to ensure JSON and default HTML serialization works as expected"));
            }
            if (
            // eslint-disable-next-line no-prototype-builtins
            !proto.hasOwnProperty('exportJSON')) {
              console.warn("".concat(name, " should implement \"exportJSON\" method to ensure JSON and default HTML serialization works as expected"));
            }
          }
        }
        var type = klass.getType();
        var transform = klass.transform();
        var transforms = new Set();
        if (transform !== null) {
          transforms.add(transform);
        }
        registeredNodes.set(type, {
          exportDOM: html && html["export"] ? html["export"].get(klass) : undefined,
          klass: klass,
          replace: replace,
          replaceWithKlass: replaceWithKlass,
          transforms: transforms
        });
      };
      for (var i = 0; i < nodes.length; i++) {
        _loop2();
      }
    }
    var editor = new LexicalEditor(editorState, parentEditor, registeredNodes, {
      disableEvents: disableEvents,
      namespace: namespace,
      theme: theme
    }, onError ? onError : console.error, initializeConversionCache(registeredNodes, html ? html["import"] : undefined), isEditable);
    if (initialEditorState !== undefined) {
      editor._pendingEditorState = initialEditorState;
      editor._dirtyType = FULL_RECONCILE;
    }
    return editor;
  }
  var LexicalEditor = /*#__PURE__*/function () {
    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */

    /** @internal */
    function LexicalEditor(editorState, parentEditor, nodes, config, onError, htmlConversions, editable) {
      _classCallCheck(this, LexicalEditor);
      this._parentEditor = parentEditor;
      // The root element associated with this editor
      this._rootElement = null;
      // The current editor state
      this._editorState = editorState;
      // Handling of drafts and updates
      this._pendingEditorState = null;
      // Used to help co-ordinate selection and events
      this._compositionKey = null;
      this._deferred = [];
      // Used during reconciliation
      this._keyToDOMMap = new Map();
      this._updates = [];
      this._updating = false;
      // Listeners
      this._listeners = {
        decorator: new Set(),
        editable: new Set(),
        mutation: new Map(),
        root: new Set(),
        textcontent: new Set(),
        update: new Set()
      };
      // Commands
      this._commands = new Map();
      // Editor configuration for theme/context.
      this._config = config;
      // Mapping of types to their nodes
      this._nodes = nodes;
      // React node decorators for portals
      this._decorators = {};
      this._pendingDecorators = null;
      // Used to optimize reconciliation
      this._dirtyType = NO_DIRTY_NODES;
      this._cloneNotNeeded = new Set();
      this._dirtyLeaves = new Set();
      this._dirtyElements = new Map();
      this._normalizedNodes = new Set();
      this._updateTags = new Set();
      // Handling of DOM mutations
      this._observer = null;
      // Used for identifying owning editors
      this._key = createUID();
      this._onError = onError;
      this._htmlConversions = htmlConversions;
      this._editable = editable;
      this._headless = parentEditor !== null && parentEditor._headless;
      this._window = null;
      this._blockCursorElement = null;
    }

    /**
     *
     * @returns true if the editor is currently in "composition" mode due to receiving input
     * through an IME, or 3P extension, for example. Returns false otherwise.
     */
    return _createClass(LexicalEditor, [{
      key: "isComposing",
      value: function isComposing() {
        return this._compositionKey != null;
      }
      /**
       * Registers a listener for Editor update event. Will trigger the provided callback
       * each time the editor goes through an update (via {@link LexicalEditor.update}) until the
       * teardown function is called.
       *
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerUpdateListener",
      value: function registerUpdateListener(listener) {
        var listenerSetOrMap = this._listeners.update;
        listenerSetOrMap.add(listener);
        return function () {
          listenerSetOrMap["delete"](listener);
        };
      }
      /**
       * Registers a listener for for when the editor changes between editable and non-editable states.
       * Will trigger the provided callback each time the editor transitions between these states until the
       * teardown function is called.
       *
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerEditableListener",
      value: function registerEditableListener(listener) {
        var listenerSetOrMap = this._listeners.editable;
        listenerSetOrMap.add(listener);
        return function () {
          listenerSetOrMap["delete"](listener);
        };
      }
      /**
       * Registers a listener for when the editor's decorator object changes. The decorator object contains
       * all DecoratorNode keys -> their decorated value. This is primarily used with external UI frameworks.
       *
       * Will trigger the provided callback each time the editor transitions between these states until the
       * teardown function is called.
       *
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerDecoratorListener",
      value: function registerDecoratorListener(listener) {
        var listenerSetOrMap = this._listeners.decorator;
        listenerSetOrMap.add(listener);
        return function () {
          listenerSetOrMap["delete"](listener);
        };
      }
      /**
       * Registers a listener for when Lexical commits an update to the DOM and the text content of
       * the editor changes from the previous state of the editor. If the text content is the
       * same between updates, no notifications to the listeners will happen.
       *
       * Will trigger the provided callback each time the editor transitions between these states until the
       * teardown function is called.
       *
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerTextContentListener",
      value: function registerTextContentListener(listener) {
        var listenerSetOrMap = this._listeners.textcontent;
        listenerSetOrMap.add(listener);
        return function () {
          listenerSetOrMap["delete"](listener);
        };
      }
      /**
       * Registers a listener for when the editor's root DOM element (the content editable
       * Lexical attaches to) changes. This is primarily used to attach event listeners to the root
       *  element. The root listener function is executed directly upon registration and then on
       * any subsequent update.
       *
       * Will trigger the provided callback each time the editor transitions between these states until the
       * teardown function is called.
       *
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerRootListener",
      value: function registerRootListener(listener) {
        var _this7 = this;
        var listenerSetOrMap = this._listeners.root;
        listener(this._rootElement, null);
        listenerSetOrMap.add(listener);
        return function () {
          listener(null, _this7._rootElement);
          listenerSetOrMap["delete"](listener);
        };
      }
      /**
       * Registers a listener that will trigger anytime the provided command
       * is dispatched, subject to priority. Listeners that run at a higher priority can "intercept"
       * commands and prevent them from propagating to other handlers by returning true.
       *
       * Listeners registered at the same priority level will run deterministically in the order of registration.
       *
       * @param command - the command that will trigger the callback.
       * @param listener - the function that will execute when the command is dispatched.
       * @param priority - the relative priority of the listener. 0 | 1 | 2 | 3 | 4
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerCommand",
      value: function registerCommand(command, listener, priority) {
        if (priority === undefined) {
          {
            throw Error("Listener for type \"command\" requires a \"priority\".");
          }
        }
        var commandsMap = this._commands;
        if (!commandsMap.has(command)) {
          commandsMap.set(command, [new Set(), new Set(), new Set(), new Set(), new Set()]);
        }
        var listenersInPriorityOrder = commandsMap.get(command);
        if (listenersInPriorityOrder === undefined) {
          {
            throw Error("registerCommand: Command ".concat(String(command), " not found in command map"));
          }
        }
        var listeners = listenersInPriorityOrder[priority];
        listeners.add(listener);
        return function () {
          listeners["delete"](listener);
          if (listenersInPriorityOrder.every(function (listenersSet) {
            return listenersSet.size === 0;
          })) {
            commandsMap["delete"](command);
          }
        };
      }

      /**
       * Registers a listener that will run when a Lexical node of the provided class is
       * mutated. The listener will receive a list of nodes along with the type of mutation
       * that was performed on each: created, destroyed, or updated.
       *
       * One common use case for this is to attach DOM event listeners to the underlying DOM nodes as Lexical nodes are created.
       * {@link LexicalEditor.getElementByKey} can be used for this.
       *
       * @param klass - The class of the node that you want to listen to mutations on.
       * @param listener - The logic you want to run when the node is mutated.
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerMutationListener",
      value: function registerMutationListener(klass, listener) {
        var registeredNode = this._nodes.get(klass.getType());
        if (registeredNode === undefined) {
          {
            throw Error("Node ".concat(klass.name, " has not been registered. Ensure node has been passed to createEditor."));
          }
        }
        var klassToMutate = klass;
        var replaceKlass = null;
        while (replaceKlass = registeredNode.replaceWithKlass) {
          klassToMutate = replaceKlass;
          registeredNode = this._nodes.get(replaceKlass.getType());
          if (registeredNode === undefined) {
            {
              throw Error("Node ".concat(replaceKlass.name, " has not been registered. Ensure node has been passed to createEditor."));
            }
          }
        }
        var mutations = this._listeners.mutation;
        mutations.set(listener, klassToMutate);
        return function () {
          mutations["delete"](listener);
        };
      }

      /** @internal */
    }, {
      key: "registerNodeTransformToKlass",
      value: function registerNodeTransformToKlass(klass, listener) {
        var type = klass.getType();
        var registeredNode = this._nodes.get(type);
        if (registeredNode === undefined) {
          {
            throw Error("Node ".concat(klass.name, " has not been registered. Ensure node has been passed to createEditor."));
          }
        }
        var transforms = registeredNode.transforms;
        transforms.add(listener);
        return registeredNode;
      }

      /**
       * Registers a listener that will run when a Lexical node of the provided class is
       * marked dirty during an update. The listener will continue to run as long as the node
       * is marked dirty. There are no guarantees around the order of transform execution!
       *
       * Watch out for infinite loops. See [Node Transforms](https://lexical.dev/docs/concepts/transforms)
       * @param klass - The class of the node that you want to run transforms on.
       * @param listener - The logic you want to run when the node is updated.
       * @returns a teardown function that can be used to cleanup the listener.
       */
    }, {
      key: "registerNodeTransform",
      value: function registerNodeTransform(klass, listener) {
        var registeredNode = this.registerNodeTransformToKlass(klass, listener);
        var registeredNodes = [registeredNode];
        var replaceWithKlass = registeredNode.replaceWithKlass;
        if (replaceWithKlass != null) {
          var registeredReplaceWithNode = this.registerNodeTransformToKlass(replaceWithKlass, listener);
          registeredNodes.push(registeredReplaceWithNode);
        }
        markAllNodesAsDirty(this, klass.getType());
        return function () {
          registeredNodes.forEach(function (node) {
            return node.transforms["delete"](listener);
          });
        };
      }

      /**
       * Used to assert that a certain node is registered, usually by plugins to ensure nodes that they
       * depend on have been registered.
       * @returns True if the editor has registered the provided node type, false otherwise.
       */
    }, {
      key: "hasNode",
      value: function hasNode(node) {
        return this._nodes.has(node.getType());
      }

      /**
       * Used to assert that certain nodes are registered, usually by plugins to ensure nodes that they
       * depend on have been registered.
       * @returns True if the editor has registered all of the provided node types, false otherwise.
       */
    }, {
      key: "hasNodes",
      value: function hasNodes(nodes) {
        return nodes.every(this.hasNode.bind(this));
      }

      /**
       * Dispatches a command of the specified type with the specified payload.
       * This triggers all command listeners (set by {@link LexicalEditor.registerCommand})
       * for this type, passing them the provided payload.
       * @param type - the type of command listeners to trigger.
       * @param payload - the data to pass as an argument to the command listeners.
       */
    }, {
      key: "dispatchCommand",
      value: function dispatchCommand(type, payload) {
        return _dispatchCommand(this, type, payload);
      }

      /**
       * Gets a map of all decorators in the editor.
       * @returns A mapping of call decorator keys to their decorated content
       */
    }, {
      key: "getDecorators",
      value: function getDecorators() {
        return this._decorators;
      }

      /**
       *
       * @returns the current root element of the editor. If you want to register
       * an event listener, do it via {@link LexicalEditor.registerRootListener}, since
       * this reference may not be stable.
       */
    }, {
      key: "getRootElement",
      value: function getRootElement() {
        return this._rootElement;
      }

      /**
       * Gets the key of the editor
       * @returns The editor key
       */
    }, {
      key: "getKey",
      value: function getKey() {
        return this._key;
      }

      /**
       * Imperatively set the root contenteditable element that Lexical listens
       * for events on.
       */
    }, {
      key: "setRootElement",
      value: function setRootElement(nextRootElement) {
        var prevRootElement = this._rootElement;
        if (nextRootElement !== prevRootElement) {
          var classNames = getCachedClassNameArray(this._config.theme, 'root');
          var pendingEditorState = this._pendingEditorState || this._editorState;
          this._rootElement = nextRootElement;
          resetEditor(this, prevRootElement, nextRootElement, pendingEditorState);
          if (prevRootElement !== null) {
            // TODO: remove this flag once we no longer use UEv2 internally
            if (!this._config.disableEvents) {
              removeRootElementEvents(prevRootElement);
            }
            if (classNames != null) {
              var _prevRootElement$clas;
              (_prevRootElement$clas = prevRootElement.classList).remove.apply(_prevRootElement$clas, _toConsumableArray(classNames));
            }
          }
          if (nextRootElement !== null) {
            var windowObj = getDefaultView(nextRootElement);
            var style = nextRootElement.style;
            style.userSelect = 'text';
            style.whiteSpace = 'pre-wrap';
            style.wordBreak = 'break-word';
            nextRootElement.setAttribute('data-lexical-editor', 'true');
            this._window = windowObj;
            this._dirtyType = FULL_RECONCILE;
            initMutationObserver(this);
            this._updateTags.add('history-merge');
            $commitPendingUpdates(this);

            // TODO: remove this flag once we no longer use UEv2 internally
            if (!this._config.disableEvents) {
              addRootElementEvents(nextRootElement, this);
            }
            if (classNames != null) {
              var _nextRootElement$clas;
              (_nextRootElement$clas = nextRootElement.classList).add.apply(_nextRootElement$clas, _toConsumableArray(classNames));
            }
          } else {
            // If content editable is unmounted we'll reset editor state back to original
            // (or pending) editor state since there will be no reconciliation
            this._editorState = pendingEditorState;
            this._pendingEditorState = null;
            this._window = null;
          }
          triggerListeners('root', this, false, nextRootElement, prevRootElement);
        }
      }

      /**
       * Gets the underlying HTMLElement associated with the LexicalNode for the given key.
       * @returns the HTMLElement rendered by the LexicalNode associated with the key.
       * @param key - the key of the LexicalNode.
       */
    }, {
      key: "getElementByKey",
      value: function getElementByKey(key) {
        return this._keyToDOMMap.get(key) || null;
      }

      /**
       * Gets the active editor state.
       * @returns The editor state
       */
    }, {
      key: "getEditorState",
      value: function getEditorState() {
        return this._editorState;
      }

      /**
       * Imperatively set the EditorState. Triggers reconciliation like an update.
       * @param editorState - the state to set the editor
       * @param options - options for the update.
       */
    }, {
      key: "setEditorState",
      value: function setEditorState(editorState, options) {
        if (editorState.isEmpty()) {
          {
            throw Error("setEditorState: the editor state is empty. Ensure the editor state's root node never becomes empty.");
          }
        }
        $flushRootMutations(this);
        var pendingEditorState = this._pendingEditorState;
        var tags = this._updateTags;
        var tag = options !== undefined ? options.tag : null;
        if (pendingEditorState !== null && !pendingEditorState.isEmpty()) {
          if (tag != null) {
            tags.add(tag);
          }
          $commitPendingUpdates(this);
        }
        this._pendingEditorState = editorState;
        this._dirtyType = FULL_RECONCILE;
        this._dirtyElements.set('root', false);
        this._compositionKey = null;
        if (tag != null) {
          tags.add(tag);
        }
        $commitPendingUpdates(this);
      }

      /**
       * Parses a SerializedEditorState (usually produced by {@link EditorState.toJSON}) and returns
       * and EditorState object that can be, for example, passed to {@link LexicalEditor.setEditorState}. Typically,
       * deserliazation from JSON stored in a database uses this method.
       * @param maybeStringifiedEditorState
       * @param updateFn
       * @returns
       */
    }, {
      key: "parseEditorState",
      value: function parseEditorState(maybeStringifiedEditorState, updateFn) {
        var serializedEditorState = typeof maybeStringifiedEditorState === 'string' ? JSON.parse(maybeStringifiedEditorState) : maybeStringifiedEditorState;
        return _parseEditorState(serializedEditorState, this, updateFn);
      }

      /**
       * Executes an update to the editor state. The updateFn callback is the ONLY place
       * where Lexical editor state can be safely mutated.
       * @param updateFn - A function that has access to writable editor state.
       * @param options - A bag of options to control the behavior of the update.
       * @param options.onUpdate - A function to run once the update is complete.
       * Useful for synchronizing updates in some cases.
       * @param options.skipTransforms - Setting this to true will suppress all node
       * transforms for this update cycle.
       * @param options.tag - A tag to identify this update, in an update listener, for instance.
       * Some tags are reserved by the core and control update behavior in different ways.
       * @param options.discrete - If true, prevents this update from being batched, forcing it to
       * run synchronously.
       */
    }, {
      key: "update",
      value: function update(updateFn, options) {
        updateEditor(this, updateFn, options);
      }

      /**
       * Focuses the editor
       * @param callbackFn - A function to run after the editor is focused.
       * @param options - A bag of options
       * @param options.defaultSelection - Where to move selection when the editor is
       * focused. Can be rootStart, rootEnd, or undefined. Defaults to rootEnd.
       */
    }, {
      key: "focus",
      value: function focus(callbackFn) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var rootElement = this._rootElement;
        if (rootElement !== null) {
          // This ensures that iOS does not trigger caps lock upon focus
          rootElement.setAttribute('autocapitalize', 'off');
          updateEditor(this, function () {
            var selection = $getSelection();
            var root = $getRoot();
            if (selection !== null) {
              // Marking the selection dirty will force the selection back to it
              selection.dirty = true;
            } else if (root.getChildrenSize() !== 0) {
              if (options.defaultSelection === 'rootStart') {
                root.selectStart();
              } else {
                root.selectEnd();
              }
            }
          }, {
            onUpdate: function onUpdate() {
              rootElement.removeAttribute('autocapitalize');
              if (callbackFn) {
                callbackFn();
              }
            },
            tag: 'focus'
          });
          // In the case where onUpdate doesn't fire (due to the focus update not
          // occuring).
          if (this._pendingEditorState === null) {
            rootElement.removeAttribute('autocapitalize');
          }
        }
      }

      /**
       * Removes focus from the editor.
       */
    }, {
      key: "blur",
      value: function blur() {
        var rootElement = this._rootElement;
        if (rootElement !== null) {
          rootElement.blur();
        }
        var domSelection = getDOMSelection(this._window);
        if (domSelection !== null) {
          domSelection.removeAllRanges();
        }
      }
      /**
       * Returns true if the editor is editable, false otherwise.
       * @returns True if the editor is editable, false otherwise.
       */
    }, {
      key: "isEditable",
      value: function isEditable() {
        return this._editable;
      }
      /**
       * Sets the editable property of the editor. When false, the
       * editor will not listen for user events on the underling contenteditable.
       * @param editable - the value to set the editable mode to.
       */
    }, {
      key: "setEditable",
      value: function setEditable(editable) {
        if (this._editable !== editable) {
          this._editable = editable;
          triggerListeners('editable', this, true, editable);
        }
      }
      /**
       * Returns a JSON-serializable javascript object NOT a JSON string.
       * You still must call JSON.stringify (or something else) to turn the
       * state into a string you can transfer over the wire and store in a database.
       *
       * See {@link LexicalNode.exportJSON}
       *
       * @returns A JSON-serializable javascript object
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          editorState: this._editorState.toJSON()
        };
      }
    }]);
  }();
  exports.$addUpdateTag = $addUpdateTag;
  exports.$applyNodeReplacement = $applyNodeReplacement;
  exports.$copyNode = $copyNode;
  exports.$createLineBreakNode = $createLineBreakNode;
  exports.$createNodeSelection = $createNodeSelection;
  exports.$createParagraphNode = $createParagraphNode;
  exports.$createPoint = $createPoint;
  exports.$createRangeSelection = $createRangeSelection;
  exports.$createRangeSelectionFromDom = $createRangeSelectionFromDom;
  exports.$createTabNode = $createTabNode;
  exports.$createTextNode = $createTextNode;
  exports.$getAdjacentNode = $getAdjacentNode;
  exports.$getCharacterOffsets = $getCharacterOffsets;
  exports.$getEditor = $getEditor;
  exports.$getNearestNodeFromDOMNode = $getNearestNodeFromDOMNode;
  exports.$getNearestRootOrShadowRoot = $getNearestRootOrShadowRoot;
  exports.$getNodeByKey = $getNodeByKey;
  exports.$getNodeByKeyOrThrow = $getNodeByKeyOrThrow;
  exports.$getPreviousSelection = $getPreviousSelection;
  exports.$getRoot = $getRoot;
  exports.$getSelection = $getSelection;
  exports.$getTextContent = $getTextContent;
  exports.$hasAncestor = $hasAncestor;
  exports.$hasUpdateTag = $hasUpdateTag;
  exports.$insertNodes = $insertNodes;
  exports.$isBlockElementNode = $isBlockElementNode;
  exports.$isDecoratorNode = $isDecoratorNode;
  exports.$isElementNode = $isElementNode;
  exports.$isInlineElementOrDecoratorNode = $isInlineElementOrDecoratorNode;
  exports.$isLeafNode = $isLeafNode;
  exports.$isLineBreakNode = $isLineBreakNode;
  exports.$isNodeSelection = $isNodeSelection;
  exports.$isParagraphNode = $isParagraphNode;
  exports.$isRangeSelection = $isRangeSelection;
  exports.$isRootNode = $isRootNode;
  exports.$isRootOrShadowRoot = $isRootOrShadowRoot;
  exports.$isTabNode = $isTabNode;
  exports.$isTextNode = $isTextNode;
  exports.$nodesOfType = $nodesOfType;
  exports.$normalizeSelection__EXPERIMENTAL = $normalizeSelection;
  exports.$parseSerializedNode = $parseSerializedNode;
  exports.$selectAll = $selectAll;
  exports.$setCompositionKey = $setCompositionKey;
  exports.$setSelection = $setSelection;
  exports.$splitNode = $splitNode;
  exports.ArtificialNode__DO_NOT_USE = ArtificialNode__DO_NOT_USE;
  exports.BLUR_COMMAND = BLUR_COMMAND;
  exports.CAN_REDO_COMMAND = CAN_REDO_COMMAND;
  exports.CAN_UNDO_COMMAND = CAN_UNDO_COMMAND;
  exports.CLEAR_EDITOR_COMMAND = CLEAR_EDITOR_COMMAND;
  exports.CLEAR_HISTORY_COMMAND = CLEAR_HISTORY_COMMAND;
  exports.CLICK_COMMAND = CLICK_COMMAND;
  exports.COMMAND_PRIORITY_CRITICAL = COMMAND_PRIORITY_CRITICAL;
  exports.COMMAND_PRIORITY_EDITOR = COMMAND_PRIORITY_EDITOR;
  exports.COMMAND_PRIORITY_HIGH = COMMAND_PRIORITY_HIGH;
  exports.COMMAND_PRIORITY_LOW = COMMAND_PRIORITY_LOW;
  exports.COMMAND_PRIORITY_NORMAL = COMMAND_PRIORITY_NORMAL;
  exports.CONTROLLED_TEXT_INSERTION_COMMAND = CONTROLLED_TEXT_INSERTION_COMMAND;
  exports.COPY_COMMAND = COPY_COMMAND;
  exports.CUT_COMMAND = CUT_COMMAND;
  exports.DELETE_CHARACTER_COMMAND = DELETE_CHARACTER_COMMAND;
  exports.DELETE_LINE_COMMAND = DELETE_LINE_COMMAND;
  exports.DELETE_WORD_COMMAND = DELETE_WORD_COMMAND;
  exports.DRAGEND_COMMAND = DRAGEND_COMMAND;
  exports.DRAGOVER_COMMAND = DRAGOVER_COMMAND;
  exports.DRAGSTART_COMMAND = DRAGSTART_COMMAND;
  exports.DROP_COMMAND = DROP_COMMAND;
  exports.DecoratorNode = DecoratorNode;
  exports.ElementNode = ElementNode;
  exports.FOCUS_COMMAND = FOCUS_COMMAND;
  exports.FORMAT_ELEMENT_COMMAND = FORMAT_ELEMENT_COMMAND;
  exports.FORMAT_TEXT_COMMAND = FORMAT_TEXT_COMMAND;
  exports.INDENT_CONTENT_COMMAND = INDENT_CONTENT_COMMAND;
  exports.INSERT_LINE_BREAK_COMMAND = INSERT_LINE_BREAK_COMMAND;
  exports.INSERT_PARAGRAPH_COMMAND = INSERT_PARAGRAPH_COMMAND;
  exports.INSERT_TAB_COMMAND = INSERT_TAB_COMMAND;
  exports.IS_ALL_FORMATTING = IS_ALL_FORMATTING;
  exports.IS_BOLD = IS_BOLD;
  exports.IS_CODE = IS_CODE;
  exports.IS_HIGHLIGHT = IS_HIGHLIGHT;
  exports.IS_ITALIC = IS_ITALIC;
  exports.IS_STRIKETHROUGH = IS_STRIKETHROUGH;
  exports.IS_SUBSCRIPT = IS_SUBSCRIPT;
  exports.IS_SUPERSCRIPT = IS_SUPERSCRIPT;
  exports.IS_UNDERLINE = IS_UNDERLINE;
  exports.KEY_ARROW_DOWN_COMMAND = KEY_ARROW_DOWN_COMMAND;
  exports.KEY_ARROW_LEFT_COMMAND = KEY_ARROW_LEFT_COMMAND;
  exports.KEY_ARROW_RIGHT_COMMAND = KEY_ARROW_RIGHT_COMMAND;
  exports.KEY_ARROW_UP_COMMAND = KEY_ARROW_UP_COMMAND;
  exports.KEY_BACKSPACE_COMMAND = KEY_BACKSPACE_COMMAND;
  exports.KEY_DELETE_COMMAND = KEY_DELETE_COMMAND;
  exports.KEY_DOWN_COMMAND = KEY_DOWN_COMMAND;
  exports.KEY_ENTER_COMMAND = KEY_ENTER_COMMAND;
  exports.KEY_ESCAPE_COMMAND = KEY_ESCAPE_COMMAND;
  exports.KEY_MODIFIER_COMMAND = KEY_MODIFIER_COMMAND;
  exports.KEY_SPACE_COMMAND = KEY_SPACE_COMMAND;
  exports.KEY_TAB_COMMAND = KEY_TAB_COMMAND;
  exports.LineBreakNode = LineBreakNode;
  exports.MOVE_TO_END = MOVE_TO_END;
  exports.MOVE_TO_START = MOVE_TO_START;
  exports.OUTDENT_CONTENT_COMMAND = OUTDENT_CONTENT_COMMAND;
  exports.PASTE_COMMAND = PASTE_COMMAND;
  exports.ParagraphNode = ParagraphNode;
  exports.REDO_COMMAND = REDO_COMMAND;
  exports.REMOVE_TEXT_COMMAND = REMOVE_TEXT_COMMAND;
  exports.RootNode = RootNode;
  exports.SELECTION_CHANGE_COMMAND = SELECTION_CHANGE_COMMAND;
  exports.SELECTION_INSERT_CLIPBOARD_NODES_COMMAND = SELECTION_INSERT_CLIPBOARD_NODES_COMMAND;
  exports.SELECT_ALL_COMMAND = SELECT_ALL_COMMAND;
  exports.TEXT_TYPE_TO_FORMAT = TEXT_TYPE_TO_FORMAT;
  exports.TabNode = TabNode;
  exports.TextNode = TextNode;
  exports.UNDO_COMMAND = UNDO_COMMAND;
  exports.createCommand = createCommand;
  exports.createEditor = createEditor;
  exports.getNearestEditorFromDOMNode = getNearestEditorFromDOMNode;
  exports.isBlockDomNode = isBlockDomNode;
  exports.isCurrentlyReadOnlyMode = isCurrentlyReadOnlyMode;
  exports.isHTMLAnchorElement = isHTMLAnchorElement;
  exports.isHTMLElement = isHTMLElement;
  exports.isInlineDomNode = isInlineDomNode;
  exports.isSelectionCapturedInDecoratorInput = isSelectionCapturedInDecoratorInput;
  exports.isSelectionWithinEditor = isSelectionWithinEditor;
  exports.resetRandomKey = resetRandomKey;
});
