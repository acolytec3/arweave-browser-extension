/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup/src/contentscript/contentscript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.assignin/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.assignin/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = assignIn;


/***/ }),

/***/ "./node_modules/webext-redux/lib/alias/alias.js":
/*!******************************************************!*\
  !*** ./node_modules/webext-redux/lib/alias/alias.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Simple middleware intercepts actions and replaces with
 * another by calling an alias function with the original action
 * @type {object} aliases an object that maps action types (keys) to alias functions (values) (e.g. { SOME_ACTION: newActionAliasFunc })
 */
var _default = function _default(aliases) {
  return function () {
    return function (next) {
      return function (action) {
        var alias = aliases[action.type];

        if (alias) {
          return next(alias(action));
        }

        return next(action);
      };
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/webext-redux/lib/constants/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/webext-redux/lib/constants/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_PORT_NAME = exports.PATCH_STATE_TYPE = exports.STATE_TYPE = exports.DISPATCH_TYPE = void 0;
// Message type used for dispatch events
// from the Proxy Stores to background
var DISPATCH_TYPE = 'chromex.dispatch'; // Message type for state update events from
// background to Proxy Stores

exports.DISPATCH_TYPE = DISPATCH_TYPE;
var STATE_TYPE = 'chromex.state'; // Message type for state patch events from
// background to Proxy Stores

exports.STATE_TYPE = STATE_TYPE;
var PATCH_STATE_TYPE = 'chromex.patch_state'; // The default name for the port communication via
// react-chrome-redux

exports.PATCH_STATE_TYPE = PATCH_STATE_TYPE;
var DEFAULT_PORT_NAME = "chromex.port_name";
exports.DEFAULT_PORT_NAME = DEFAULT_PORT_NAME;

/***/ }),

/***/ "./node_modules/webext-redux/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/webext-redux/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Store", {
  enumerable: true,
  get: function get() {
    return _Store.default;
  }
});
Object.defineProperty(exports, "applyMiddleware", {
  enumerable: true,
  get: function get() {
    return _applyMiddleware.default;
  }
});
Object.defineProperty(exports, "wrapStore", {
  enumerable: true,
  get: function get() {
    return _wrapStore.default;
  }
});
Object.defineProperty(exports, "alias", {
  enumerable: true,
  get: function get() {
    return _alias.default;
  }
});

var _Store = _interopRequireDefault(__webpack_require__(/*! ./store/Store */ "./node_modules/webext-redux/lib/store/Store.js"));

var _applyMiddleware = _interopRequireDefault(__webpack_require__(/*! ./store/applyMiddleware */ "./node_modules/webext-redux/lib/store/applyMiddleware.js"));

var _wrapStore = _interopRequireDefault(__webpack_require__(/*! ./wrap-store/wrapStore */ "./node_modules/webext-redux/lib/wrap-store/wrapStore.js"));

var _alias = _interopRequireDefault(__webpack_require__(/*! ./alias/alias */ "./node_modules/webext-redux/lib/alias/alias.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/webext-redux/lib/serialization.js":
/*!********************************************************!*\
  !*** ./node_modules/webext-redux/lib/serialization.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSerializer = exports.withDeserializer = exports.noop = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop(payload) {
  return payload;
};

exports.noop = noop;

var transformPayload = function transformPayload(message) {
  var transformer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  return _objectSpread({}, message, message.payload ? {
    payload: transformer(message.payload)
  } : {});
};

var deserializeListener = function deserializeListener(listener) {
  var deserializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
  var shouldDeserialize = arguments.length > 2 ? arguments[2] : undefined;

  // If a shouldDeserialize function is passed, return a function that uses it
  // to check if any given message payload should be deserialized
  if (shouldDeserialize) {
    return function (message) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (shouldDeserialize.apply(void 0, [message].concat(args))) {
        return listener.apply(void 0, [transformPayload(message, deserializer)].concat(args));
      }

      return listener.apply(void 0, [message].concat(args));
    };
  } // Otherwise, return a function that tries to deserialize on every message


  return function (message) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return listener.apply(void 0, [transformPayload(message, deserializer)].concat(args));
  };
};
/**
 * A function returned from withDeserializer that, when called, wraps addListenerFn with the
 * deserializer passed to withDeserializer.
 * @name AddListenerDeserializer
 * @function
 * @param {Function} addListenerFn The add listener function to wrap.
 * @returns {DeserializedAddListener}
 */

/**
 * A wrapped add listener function that registers the given listener.
 * @name DeserializedAddListener
 * @function
 * @param {Function} listener The listener function to register. It should expect the (optionally)
 * deserialized message as its first argument.
 * @param {Function} [shouldDeserialize] A function that takes the arguments passed to the listener
 * and returns whether the message payload should be deserialized. Not all messages (notably, messages
 * this listener doesn't care about) should be attempted to be deserialized.
 */

/**
 * Given a deserializer, returns an AddListenerDeserializer function that that takes an add listener
 * function and returns a DeserializedAddListener that automatically deserializes message payloads.
 * Each message listener is expected to take the message as its first argument.
 * @param {Function} deserializer A function that deserializes a message payload.
 * @returns {AddListenerDeserializer}
 * Example Usage:
 *   const withJsonDeserializer = withDeserializer(payload => JSON.parse(payload));
 *   const deserializedChromeListener = withJsonDeserializer(chrome.runtime.onMessage.addListener);
 *   const shouldDeserialize = (message) => message.type === 'DESERIALIZE_ME';
 *   deserializedChromeListener(message => console.log("Payload:", message.payload), shouldDeserialize);
 *   chrome.runtime.sendMessage("{'type:'DESERIALIZE_ME','payload':{'prop':4}}");
 *   //Payload: { prop: 4 };
 *   chrome.runtime.sendMessage("{'payload':{'prop':4}}");
 *   //Payload: "{'prop':4}";
 */


var withDeserializer = function withDeserializer() {
  var deserializer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (addListenerFn) {
    return function (listener, shouldDeserialize) {
      return addListenerFn(deserializeListener(listener, deserializer, shouldDeserialize));
    };
  };
};
/**
 * Given a serializer, returns a function that takes a message sending
 * function as its sole argument and returns a wrapped message sender that
 * automaticaly serializes message payloads. The message sender
 * is expected to take the message as its first argument, unless messageArgIndex
 * is nonzero, in which case it is expected in the position specified by messageArgIndex.
 * @param {Function} serializer A function that serializes a message payload
 * Example Usage:
 *   const withJsonSerializer = withSerializer(payload => JSON.stringify(payload))
 *   const serializedChromeSender = withJsonSerializer(chrome.runtime.sendMessage)
 *   chrome.runtime.addListener(message => console.log("Payload:", message.payload))
 *   serializedChromeSender({ payload: { prop: 4 }})
 *   //Payload: "{'prop':4}"
 */


exports.withDeserializer = withDeserializer;

var withSerializer = function withSerializer() {
  var serializer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (sendMessageFn) {
    var messageArgIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (args.length <= messageArgIndex) {
        throw new Error("Message in request could not be serialized. " + "Expected message in position ".concat(messageArgIndex, " but only received ").concat(args.length, " args."));
      }

      args[messageArgIndex] = transformPayload(args[messageArgIndex], serializer);
      return sendMessageFn.apply(void 0, args);
    };
  };
};

exports.withSerializer = withSerializer;

/***/ }),

/***/ "./node_modules/webext-redux/lib/store/Store.js":
/*!******************************************************!*\
  !*** ./node_modules/webext-redux/lib/store/Store.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.assignin */ "./node_modules/lodash.assignin/index.js"));

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/webext-redux/lib/constants/index.js");

var _serialization = __webpack_require__(/*! ../serialization */ "./node_modules/webext-redux/lib/serialization.js");

var _patch = _interopRequireDefault(__webpack_require__(/*! ../strategies/shallowDiff/patch */ "./node_modules/webext-redux/lib/strategies/shallowDiff/patch.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/webext-redux/lib/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var backgroundErrPrefix = '\nLooks like there is an error in the background page. ' + 'You might want to inspect your background page for more details.\n';
var defaultOpts = {
  portName: _constants.DEFAULT_PORT_NAME,
  state: {},
  extensionId: null,
  serializer: _serialization.noop,
  deserializer: _serialization.noop,
  patchStrategy: _patch.default
};

var Store =
/*#__PURE__*/
function () {
  /**
   * Creates a new Proxy store
   * @param  {object} options An object of form {portName, state, extensionId, serializer, deserializer, diffStrategy}, where `portName` is a required string and defines the name of the port for state transition changes, `state` is the initial state of this store (default `{}`) `extensionId` is the extension id as defined by browserAPI when extension is loaded (default `''`), `serializer` is a function to serialize outgoing message payloads (default is passthrough), `deserializer` is a function to deserialize incoming message payloads (default is passthrough), and patchStrategy is one of the included patching strategies (default is shallow diff) or a custom patching function.
   */
  function Store() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultOpts,
        _ref$portName = _ref.portName,
        portName = _ref$portName === void 0 ? defaultOpts.portName : _ref$portName,
        _ref$state = _ref.state,
        state = _ref$state === void 0 ? defaultOpts.state : _ref$state,
        _ref$extensionId = _ref.extensionId,
        extensionId = _ref$extensionId === void 0 ? defaultOpts.extensionId : _ref$extensionId,
        _ref$serializer = _ref.serializer,
        serializer = _ref$serializer === void 0 ? defaultOpts.serializer : _ref$serializer,
        _ref$deserializer = _ref.deserializer,
        deserializer = _ref$deserializer === void 0 ? defaultOpts.deserializer : _ref$deserializer,
        _ref$patchStrategy = _ref.patchStrategy,
        patchStrategy = _ref$patchStrategy === void 0 ? defaultOpts.patchStrategy : _ref$patchStrategy;

    _classCallCheck(this, Store);

    if (!portName) {
      throw new Error('portName is required in options');
    }

    if (typeof serializer !== 'function') {
      throw new Error('serializer must be a function');
    }

    if (typeof deserializer !== 'function') {
      throw new Error('deserializer must be a function');
    }

    if (typeof patchStrategy !== 'function') {
      throw new Error('patchStrategy must be one of the included patching strategies or a custom patching function');
    }

    this.portName = portName;
    this.readyResolved = false;
    this.readyPromise = new Promise(function (resolve) {
      return _this.readyResolve = resolve;
    });
    this.browserAPI = (0, _util.getBrowserAPI)();
    this.extensionId = extensionId; // keep the extensionId as an instance variable

    this.port = this.browserAPI.runtime.connect(this.extensionId, {
      name: portName
    });
    this.safetyHandler = this.safetyHandler.bind(this);

    if (this.browserAPI.runtime.onMessage) {
      this.safetyMessage = this.browserAPI.runtime.onMessage.addListener(this.safetyHandler);
    }

    this.serializedPortListener = (0, _serialization.withDeserializer)(deserializer)(function () {
      var _this$port$onMessage;

      return (_this$port$onMessage = _this.port.onMessage).addListener.apply(_this$port$onMessage, arguments);
    });
    this.serializedMessageSender = (0, _serialization.withSerializer)(serializer)(function () {
      var _this$browserAPI$runt;

      return (_this$browserAPI$runt = _this.browserAPI.runtime).sendMessage.apply(_this$browserAPI$runt, arguments);
    }, 1);
    this.listeners = [];
    this.state = state;
    this.patchStrategy = patchStrategy; // Don't use shouldDeserialize here, since no one else should be using this port

    this.serializedPortListener(function (message) {
      switch (message.type) {
        case _constants.STATE_TYPE:
          _this.replaceState(message.payload);

          if (!_this.readyResolved) {
            _this.readyResolved = true;

            _this.readyResolve();
          }

          break;

        case _constants.PATCH_STATE_TYPE:
          _this.patchState(message.payload);

          break;

        default: // do nothing

      }
    });
    this.dispatch = this.dispatch.bind(this); // add this context to dispatch
  }
  /**
  * Returns a promise that resolves when the store is ready. Optionally a callback may be passed in instead.
  * @param [function] callback An optional callback that may be passed in and will fire when the store is ready.
  * @return {object} promise A promise that resolves when the store has established a connection with the background page.
  */


  _createClass(Store, [{
    key: "ready",
    value: function ready() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (cb !== null) {
        return this.readyPromise.then(cb);
      }

      return this.readyPromise;
    }
    /**
     * Subscribes a listener function for all state changes
     * @param  {function} listener A listener function to be called when store state changes
     * @return {function}          An unsubscribe function which can be called to remove the listener from state updates
     */

  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      var _this2 = this;

      this.listeners.push(listener);
      return function () {
        _this2.listeners = _this2.listeners.filter(function (l) {
          return l !== listener;
        });
      };
    }
    /**
     * Replaces the state for only the keys in the updated state. Notifies all listeners of state change.
     * @param {object} state the new (partial) redux state
     */

  }, {
    key: "patchState",
    value: function patchState(difference) {
      this.state = this.patchStrategy(this.state, difference);
      this.listeners.forEach(function (l) {
        return l();
      });
    }
    /**
     * Replace the current state with a new state. Notifies all listeners of state change.
     * @param  {object} state The new state for the store
     */

  }, {
    key: "replaceState",
    value: function replaceState(state) {
      this.state = state;
      this.listeners.forEach(function (l) {
        return l();
      });
    }
    /**
     * Get the current state of the store
     * @return {object} the current store state
     */

  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
    /**
     * Stub function to stay consistent with Redux Store API. No-op.
     */

  }, {
    key: "replaceReducer",
    value: function replaceReducer() {
      return;
    }
    /**
     * Dispatch an action to the background using messaging passing
     * @param  {object} data The action data to dispatch
     * @return {Promise}     Promise that will resolve/reject based on the action response from the background
     */

  }, {
    key: "dispatch",
    value: function dispatch(data) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.serializedMessageSender(_this3.extensionId, {
          type: _constants.DISPATCH_TYPE,
          portName: _this3.portName,
          payload: data
        }, null, function (resp) {
          var error = resp.error,
              value = resp.value;

          if (error) {
            var bgErr = new Error("".concat(backgroundErrPrefix).concat(error));
            reject((0, _lodash.default)(bgErr, error));
          } else {
            resolve(value && value.payload);
          }
        });
      });
    }
  }, {
    key: "safetyHandler",
    value: function safetyHandler(message) {
      if (message.action === 'storeReady' && message.portName === this.portName) {
        // Remove Saftey Listener
        this.browserAPI.runtime.onMessage.removeListener(this.safetyHandler); // Resolve if readyPromise has not been resolved.

        if (!this.readyResolved) {
          this.readyResolved = true;
          this.readyResolve();
        }
      }
    }
  }]);

  return Store;
}();

var _default = Store;
exports.default = _default;

/***/ }),

/***/ "./node_modules/webext-redux/lib/store/applyMiddleware.js":
/*!****************************************************************!*\
  !*** ./node_modules/webext-redux/lib/store/applyMiddleware.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Function taken from redux source
// https://github.com/reactjs/redux/blob/master/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
} // Based on redux implementation of applyMiddleware to support all standard
// redux middlewares


function applyMiddleware(store) {
  for (var _len2 = arguments.length, middlewares = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    middlewares[_key2 - 1] = arguments[_key2];
  }

  var _dispatch = function dispatch() {
    throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  };

  var middlewareAPI = {
    getState: store.getState.bind(store),
    dispatch: function dispatch() {
      return _dispatch.apply(void 0, arguments);
    }
  };
  middlewares = (middlewares || []).map(function (middleware) {
    return middleware(middlewareAPI);
  });
  _dispatch = compose.apply(void 0, _toConsumableArray(middlewares))(store.dispatch);
  store.dispatch = _dispatch;
  return store;
}

/***/ }),

/***/ "./node_modules/webext-redux/lib/strategies/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/webext-redux/lib/strategies/constants.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIFF_STATUS_ARRAY_UPDATED = exports.DIFF_STATUS_KEYS_UPDATED = exports.DIFF_STATUS_REMOVED = exports.DIFF_STATUS_UPDATED = void 0;
// The `change` value for updated or inserted fields resulting from shallow diff
var DIFF_STATUS_UPDATED = 'updated'; // The `change` value for removed fields resulting from shallow diff

exports.DIFF_STATUS_UPDATED = DIFF_STATUS_UPDATED;
var DIFF_STATUS_REMOVED = 'removed';
exports.DIFF_STATUS_REMOVED = DIFF_STATUS_REMOVED;
var DIFF_STATUS_KEYS_UPDATED = 'updated_keys';
exports.DIFF_STATUS_KEYS_UPDATED = DIFF_STATUS_KEYS_UPDATED;
var DIFF_STATUS_ARRAY_UPDATED = 'updated_array';
exports.DIFF_STATUS_ARRAY_UPDATED = DIFF_STATUS_ARRAY_UPDATED;

/***/ }),

/***/ "./node_modules/webext-redux/lib/strategies/shallowDiff/diff.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webext-redux/lib/strategies/shallowDiff/diff.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = shallowDiff;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/webext-redux/lib/strategies/constants.js");

/**
 * Returns a new Object containing only the fields in `new` that differ from `old`
 *
 * @param {Object} old
 * @param {Object} new
 * @return {Array} An array of changes. The changes have a `key`, `value`, and `change`.
 *   The change is either `updated`, which is if the value has changed or been added,
 *   or `removed`.
 */
function shallowDiff(oldObj, newObj) {
  var difference = [];
  Object.keys(newObj).forEach(function (key) {
    if (oldObj[key] !== newObj[key]) {
      difference.push({
        key: key,
        value: newObj[key],
        change: _constants.DIFF_STATUS_UPDATED
      });
    }
  });
  Object.keys(oldObj).forEach(function (key) {
    if (!newObj.hasOwnProperty(key)) {
      difference.push({
        key: key,
        change: _constants.DIFF_STATUS_REMOVED
      });
    }
  });
  return difference;
}

/***/ }),

/***/ "./node_modules/webext-redux/lib/strategies/shallowDiff/patch.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webext-redux/lib/strategies/shallowDiff/patch.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/webext-redux/lib/strategies/constants.js");

function _default(obj, difference) {
  var newObj = Object.assign({}, obj);
  difference.forEach(function (_ref) {
    var change = _ref.change,
        key = _ref.key,
        value = _ref.value;

    switch (change) {
      case _constants.DIFF_STATUS_UPDATED:
        newObj[key] = value;
        break;

      case _constants.DIFF_STATUS_REMOVED:
        Reflect.deleteProperty(newObj, key);
        break;

      default: // do nothing

    }
  });
  return newObj;
}

/***/ }),

/***/ "./node_modules/webext-redux/lib/util.js":
/*!***********************************************!*\
  !*** ./node_modules/webext-redux/lib/util.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrowserAPI = getBrowserAPI;

/**
 * Looks for a global browser api, first checking the chrome namespace and then
 * checking the browser namespace. If no appropriate namespace is present, this
 * function will throw an error.
 */
function getBrowserAPI() {
  var api;

  try {
    // eslint-disable-next-line no-undef
    api = self.chrome || self.browser || browser;
  } catch (error) {
    // eslint-disable-next-line no-undef
    api = browser;
  }

  if (!api) {
    throw new Error("Browser API is not present");
  }

  return api;
}

/***/ }),

/***/ "./node_modules/webext-redux/lib/wrap-store/wrapStore.js":
/*!***************************************************************!*\
  !*** ./node_modules/webext-redux/lib/wrap-store/wrapStore.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(/*! ../constants */ "./node_modules/webext-redux/lib/constants/index.js");

var _serialization = __webpack_require__(/*! ../serialization */ "./node_modules/webext-redux/lib/serialization.js");

var _util = __webpack_require__(/*! ../util */ "./node_modules/webext-redux/lib/util.js");

var _diff = _interopRequireDefault(__webpack_require__(/*! ../strategies/shallowDiff/diff */ "./node_modules/webext-redux/lib/strategies/shallowDiff/diff.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Responder for promisified results
 * @param  {object} dispatchResult The result from `store.dispatch()`
 * @param  {function} send         The function used to respond to original message
 * @return {undefined}
 */
var promiseResponder = function promiseResponder(dispatchResult, send) {
  Promise.resolve(dispatchResult).then(function (res) {
    send({
      error: null,
      value: res
    });
  }).catch(function (err) {
    console.error('error dispatching result:', err);
    send({
      error: err.message,
      value: null
    });
  });
};

var defaultOpts = {
  portName: _constants.DEFAULT_PORT_NAME,
  dispatchResponder: promiseResponder,
  serializer: _serialization.noop,
  deserializer: _serialization.noop,
  diffStrategy: _diff.default
};
/**
 * Wraps a Redux store so that proxy stores can connect to it.
 * @param {Object} store A Redux store
 * @param {Object} options An object of form {portName, dispatchResponder, serializer, deserializer}, where `portName` is a required string and defines the name of the port for state transition changes, `dispatchResponder` is a function that takes the result of a store dispatch and optionally implements custom logic for responding to the original dispatch message,`serializer` is a function to serialize outgoing message payloads (default is passthrough), `deserializer` is a function to deserialize incoming message payloads (default is passthrough), and diffStrategy is one of the included diffing strategies (default is shallow diff) or a custom diffing function.
 */

var _default = function _default(store) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOpts,
      _ref$portName = _ref.portName,
      portName = _ref$portName === void 0 ? defaultOpts.portName : _ref$portName,
      _ref$dispatchResponde = _ref.dispatchResponder,
      dispatchResponder = _ref$dispatchResponde === void 0 ? defaultOpts.dispatchResponder : _ref$dispatchResponde,
      _ref$serializer = _ref.serializer,
      serializer = _ref$serializer === void 0 ? defaultOpts.serializer : _ref$serializer,
      _ref$deserializer = _ref.deserializer,
      deserializer = _ref$deserializer === void 0 ? defaultOpts.deserializer : _ref$deserializer,
      _ref$diffStrategy = _ref.diffStrategy,
      diffStrategy = _ref$diffStrategy === void 0 ? defaultOpts.diffStrategy : _ref$diffStrategy;

  if (!portName) {
    throw new Error('portName is required in options');
  }

  if (typeof serializer !== 'function') {
    throw new Error('serializer must be a function');
  }

  if (typeof deserializer !== 'function') {
    throw new Error('deserializer must be a function');
  }

  if (typeof diffStrategy !== 'function') {
    throw new Error('diffStrategy must be one of the included diffing strategies or a custom diff function');
  }

  var browserAPI = (0, _util.getBrowserAPI)();
  /**
   * Respond to dispatches from UI components
   */

  var dispatchResponse = function dispatchResponse(request, sender, sendResponse) {
    if (request.type === _constants.DISPATCH_TYPE && request.portName === portName) {
      var action = Object.assign({}, request.payload, {
        _sender: sender
      });
      var dispatchResult = null;

      try {
        dispatchResult = store.dispatch(action);
      } catch (e) {
        dispatchResult = Promise.reject(e.message);
        console.error(e);
      }

      dispatchResponder(dispatchResult, sendResponse);
      return true;
    }
  };
  /**
  * Setup for state updates
  */


  var connectState = function connectState(port) {
    if (port.name !== portName) {
      return;
    }

    var serializedMessagePoster = (0, _serialization.withSerializer)(serializer)(function () {
      return port.postMessage.apply(port, arguments);
    });
    var prevState = store.getState();

    var patchState = function patchState() {
      var state = store.getState();
      var diff = diffStrategy(prevState, state);

      if (diff.length) {
        prevState = state;
        serializedMessagePoster({
          type: _constants.PATCH_STATE_TYPE,
          payload: diff
        });
      }
    }; // Send patched state down connected port on every redux store state change


    var unsubscribe = store.subscribe(patchState); // when the port disconnects, unsubscribe the sendState listener

    port.onDisconnect.addListener(unsubscribe); // Send store's initial state through port

    serializedMessagePoster({
      type: _constants.STATE_TYPE,
      payload: prevState
    });
  };

  var withPayloadDeserializer = (0, _serialization.withDeserializer)(deserializer);

  var shouldDeserialize = function shouldDeserialize(request) {
    return request.type === _constants.DISPATCH_TYPE && request.portName === portName;
  };
  /**
   * Setup action handler
   */


  withPayloadDeserializer(function () {
    var _browserAPI$runtime$o;

    return (_browserAPI$runtime$o = browserAPI.runtime.onMessage).addListener.apply(_browserAPI$runtime$o, arguments);
  })(dispatchResponse, shouldDeserialize);
  /**
   * Setup external action handler
   */

  if (browserAPI.runtime.onMessageExternal) {
    withPayloadDeserializer(function () {
      var _browserAPI$runtime$o2;

      return (_browserAPI$runtime$o2 = browserAPI.runtime.onMessageExternal).addListener.apply(_browserAPI$runtime$o2, arguments);
    })(dispatchResponse, shouldDeserialize);
  } else {
    console.warn('runtime.onMessageExternal is not supported');
  }
  /**
   * Setup extended connection
   */


  browserAPI.runtime.onConnect.addListener(connectState);
  /**
   * Setup extended external connection
   */

  if (browserAPI.runtime.onConnectExternal) {
    browserAPI.runtime.onConnectExternal.addListener(connectState);
  } else {
    console.warn('runtime.onConnectExternal is not supported');
  }
  /**
   * Safety message to tabs for content scripts
   */


  browserAPI.tabs.query({}, function (tabs) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tab = _step.value;
        browserAPI.tabs.sendMessage(tab.id, {
          action: 'storeReady',
          portName: portName
        }, function () {
          if (chrome.runtime.lastError) {// do nothing - errors can be present
            // if no content script exists on reciever
          }
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }); // For non-tab based
  // TODO: Find use case for this. Ommiting until then.
  // browserAPI.runtime.sendMessage(null, {action: 'storeReady'});
};

exports.default = _default;

/***/ }),

/***/ "./src/popup/src/contentscript/contentscript.ts":
/*!******************************************************!*\
  !*** ./src/popup/src/contentscript/contentscript.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var webext_redux_1 = __webpack_require__(/*! webext-redux */ "./node_modules/webext-redux/lib/index.js");
(function () {
    function onMessage(message, sender) {
        return __awaiter(this, void 0, void 0, function () {
            var store, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(message);
                        store = new webext_redux_1.Store();
                        return [4 /*yield*/, store.ready()];
                    case 1:
                        _a.sent();
                        if (!message.hasOwnProperty('action')) return [3 /*break*/, 3];
                        console.log('sending message');
                        return [4 /*yield*/, store.dispatch({
                                type: 'SET_PAGE_SOURCE',
                                payload: {
                                    title: document.title,
                                    url: document.location.href,
                                    html: document.documentElement.outerHTML,
                                }
                            })];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, Promise.resolve('Hello from content script')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    ;
    chrome.runtime.onMessage.addListener(onMessage);
    console.log('Waiting for a queue');
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ25pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9hbGlhcy9hbGlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvc2VyaWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9zdG9yZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9zdG9yZS9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvc3RyYXRlZ2llcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvc3RyYXRlZ2llcy9zaGFsbG93RGlmZi9kaWZmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWJleHQtcmVkdXgvbGliL3N0cmF0ZWdpZXMvc2hhbGxvd0RpZmYvcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi93cmFwLXN0b3JlL3dyYXBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvc3JjL2NvbnRlbnRzY3JpcHQvY29udGVudHNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBp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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Iiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcG9wdXAvc3JjL2NvbnRlbnRzY3JpcHQvY29udGVudHNjcmlwdC50c1wiKTtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkID8gc291cmNlW2tleV0gOiBuZXdWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgcmV0dXJuIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbmAgZXhjZXB0IHRoYXQgaXQgaXRlcmF0ZXMgb3ZlciBvd24gYW5kXG4gKiBpbmhlcml0ZWQgc291cmNlIHByb3BlcnRpZXMuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIG11dGF0ZXMgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGFsaWFzIGV4dGVuZFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICogQHNlZSBfLmFzc2lnblxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogZnVuY3Rpb24gQmFyKCkge1xuICogICB0aGlzLmMgPSAzO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYiA9IDI7XG4gKiBCYXIucHJvdG90eXBlLmQgPSA0O1xuICpcbiAqIF8uYXNzaWduSW4oeyAnYSc6IDAgfSwgbmV3IEZvbywgbmV3IEJhcik7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDMsICdkJzogNCB9XG4gKi9cbnZhciBhc3NpZ25JbiA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlKSB7XG4gIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn0pO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25JbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKipcclxuICogU2ltcGxlIG1pZGRsZXdhcmUgaW50ZXJjZXB0cyBhY3Rpb25zIGFuZCByZXBsYWNlcyB3aXRoXHJcbiAqIGFub3RoZXIgYnkgY2FsbGluZyBhbiBhbGlhcyBmdW5jdGlvbiB3aXRoIHRoZSBvcmlnaW5hbCBhY3Rpb25cclxuICogQHR5cGUge29iamVjdH0gYWxpYXNlcyBhbiBvYmplY3QgdGhhdCBtYXBzIGFjdGlvbiB0eXBlcyAoa2V5cykgdG8gYWxpYXMgZnVuY3Rpb25zICh2YWx1ZXMpIChlLmcuIHsgU09NRV9BQ1RJT046IG5ld0FjdGlvbkFsaWFzRnVuYyB9KVxyXG4gKi9cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGFsaWFzZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBhbGlhcyA9IGFsaWFzZXNbYWN0aW9uLnR5cGVdO1xuXG4gICAgICAgIGlmIChhbGlhcykge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFsaWFzKGFjdGlvbikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ERUZBVUxUX1BPUlRfTkFNRSA9IGV4cG9ydHMuUEFUQ0hfU1RBVEVfVFlQRSA9IGV4cG9ydHMuU1RBVEVfVFlQRSA9IGV4cG9ydHMuRElTUEFUQ0hfVFlQRSA9IHZvaWQgMDtcbi8vIE1lc3NhZ2UgdHlwZSB1c2VkIGZvciBkaXNwYXRjaCBldmVudHNcbi8vIGZyb20gdGhlIFByb3h5IFN0b3JlcyB0byBiYWNrZ3JvdW5kXG52YXIgRElTUEFUQ0hfVFlQRSA9ICdjaHJvbWV4LmRpc3BhdGNoJzsgLy8gTWVzc2FnZSB0eXBlIGZvciBzdGF0ZSB1cGRhdGUgZXZlbnRzIGZyb21cbi8vIGJhY2tncm91bmQgdG8gUHJveHkgU3RvcmVzXG5cbmV4cG9ydHMuRElTUEFUQ0hfVFlQRSA9IERJU1BBVENIX1RZUEU7XG52YXIgU1RBVEVfVFlQRSA9ICdjaHJvbWV4LnN0YXRlJzsgLy8gTWVzc2FnZSB0eXBlIGZvciBzdGF0ZSBwYXRjaCBldmVudHMgZnJvbVxuLy8gYmFja2dyb3VuZCB0byBQcm94eSBTdG9yZXNcblxuZXhwb3J0cy5TVEFURV9UWVBFID0gU1RBVEVfVFlQRTtcbnZhciBQQVRDSF9TVEFURV9UWVBFID0gJ2Nocm9tZXgucGF0Y2hfc3RhdGUnOyAvLyBUaGUgZGVmYXVsdCBuYW1lIGZvciB0aGUgcG9ydCBjb21tdW5pY2F0aW9uIHZpYVxuLy8gcmVhY3QtY2hyb21lLXJlZHV4XG5cbmV4cG9ydHMuUEFUQ0hfU1RBVEVfVFlQRSA9IFBBVENIX1NUQVRFX1RZUEU7XG52YXIgREVGQVVMVF9QT1JUX05BTUUgPSBcImNocm9tZXgucG9ydF9uYW1lXCI7XG5leHBvcnRzLkRFRkFVTFRfUE9SVF9OQU1FID0gREVGQVVMVF9QT1JUX05BTUU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTdG9yZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfU3RvcmUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseU1pZGRsZXdhcmVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FwcGx5TWlkZGxld2FyZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndyYXBTdG9yZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd3JhcFN0b3JlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxpYXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FsaWFzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX1N0b3JlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdG9yZS9TdG9yZVwiKSk7XG5cbnZhciBfYXBwbHlNaWRkbGV3YXJlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdG9yZS9hcHBseU1pZGRsZXdhcmVcIikpO1xuXG52YXIgX3dyYXBTdG9yZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd3JhcC1zdG9yZS93cmFwU3RvcmVcIikpO1xuXG52YXIgX2FsaWFzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbGlhcy9hbGlhc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhTZXJpYWxpemVyID0gZXhwb3J0cy53aXRoRGVzZXJpYWxpemVyID0gZXhwb3J0cy5ub29wID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcChwYXlsb2FkKSB7XG4gIHJldHVybiBwYXlsb2FkO1xufTtcblxuZXhwb3J0cy5ub29wID0gbm9vcDtcblxudmFyIHRyYW5zZm9ybVBheWxvYWQgPSBmdW5jdGlvbiB0cmFuc2Zvcm1QYXlsb2FkKG1lc3NhZ2UpIHtcbiAgdmFyIHRyYW5zZm9ybWVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgbWVzc2FnZSwgbWVzc2FnZS5wYXlsb2FkID8ge1xuICAgIHBheWxvYWQ6IHRyYW5zZm9ybWVyKG1lc3NhZ2UucGF5bG9hZClcbiAgfSA6IHt9KTtcbn07XG5cbnZhciBkZXNlcmlhbGl6ZUxpc3RlbmVyID0gZnVuY3Rpb24gZGVzZXJpYWxpemVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICB2YXIgZGVzZXJpYWxpemVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBub29wO1xuICB2YXIgc2hvdWxkRGVzZXJpYWxpemUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAvLyBJZiBhIHNob3VsZERlc2VyaWFsaXplIGZ1bmN0aW9uIGlzIHBhc3NlZCwgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB1c2VzIGl0XG4gIC8vIHRvIGNoZWNrIGlmIGFueSBnaXZlbiBtZXNzYWdlIHBheWxvYWQgc2hvdWxkIGJlIGRlc2VyaWFsaXplZFxuICBpZiAoc2hvdWxkRGVzZXJpYWxpemUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGREZXNlcmlhbGl6ZS5hcHBseSh2b2lkIDAsIFttZXNzYWdlXS5jb25jYXQoYXJncykpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh2b2lkIDAsIFt0cmFuc2Zvcm1QYXlsb2FkKG1lc3NhZ2UsIGRlc2VyaWFsaXplcildLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh2b2lkIDAsIFttZXNzYWdlXS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gIH0gLy8gT3RoZXJ3aXNlLCByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHRyaWVzIHRvIGRlc2VyaWFsaXplIG9uIGV2ZXJ5IG1lc3NhZ2VcblxuXG4gIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh2b2lkIDAsIFt0cmFuc2Zvcm1QYXlsb2FkKG1lc3NhZ2UsIGRlc2VyaWFsaXplcildLmNvbmNhdChhcmdzKSk7XG4gIH07XG59O1xuLyoqXHJcbiAqIEEgZnVuY3Rpb24gcmV0dXJuZWQgZnJvbSB3aXRoRGVzZXJpYWxpemVyIHRoYXQsIHdoZW4gY2FsbGVkLCB3cmFwcyBhZGRMaXN0ZW5lckZuIHdpdGggdGhlXHJcbiAqIGRlc2VyaWFsaXplciBwYXNzZWQgdG8gd2l0aERlc2VyaWFsaXplci5cclxuICogQG5hbWUgQWRkTGlzdGVuZXJEZXNlcmlhbGl6ZXJcclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZExpc3RlbmVyRm4gVGhlIGFkZCBsaXN0ZW5lciBmdW5jdGlvbiB0byB3cmFwLlxyXG4gKiBAcmV0dXJucyB7RGVzZXJpYWxpemVkQWRkTGlzdGVuZXJ9XHJcbiAqL1xuXG4vKipcclxuICogQSB3cmFwcGVkIGFkZCBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IHJlZ2lzdGVycyB0aGUgZ2l2ZW4gbGlzdGVuZXIuXHJcbiAqIEBuYW1lIERlc2VyaWFsaXplZEFkZExpc3RlbmVyXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdG8gcmVnaXN0ZXIuIEl0IHNob3VsZCBleHBlY3QgdGhlIChvcHRpb25hbGx5KVxyXG4gKiBkZXNlcmlhbGl6ZWQgbWVzc2FnZSBhcyBpdHMgZmlyc3QgYXJndW1lbnQuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtzaG91bGREZXNlcmlhbGl6ZV0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lclxyXG4gKiBhbmQgcmV0dXJucyB3aGV0aGVyIHRoZSBtZXNzYWdlIHBheWxvYWQgc2hvdWxkIGJlIGRlc2VyaWFsaXplZC4gTm90IGFsbCBtZXNzYWdlcyAobm90YWJseSwgbWVzc2FnZXNcclxuICogdGhpcyBsaXN0ZW5lciBkb2Vzbid0IGNhcmUgYWJvdXQpIHNob3VsZCBiZSBhdHRlbXB0ZWQgdG8gYmUgZGVzZXJpYWxpemVkLlxyXG4gKi9cblxuLyoqXHJcbiAqIEdpdmVuIGEgZGVzZXJpYWxpemVyLCByZXR1cm5zIGFuIEFkZExpc3RlbmVyRGVzZXJpYWxpemVyIGZ1bmN0aW9uIHRoYXQgdGhhdCB0YWtlcyBhbiBhZGQgbGlzdGVuZXJcclxuICogZnVuY3Rpb24gYW5kIHJldHVybnMgYSBEZXNlcmlhbGl6ZWRBZGRMaXN0ZW5lciB0aGF0IGF1dG9tYXRpY2FsbHkgZGVzZXJpYWxpemVzIG1lc3NhZ2UgcGF5bG9hZHMuXHJcbiAqIEVhY2ggbWVzc2FnZSBsaXN0ZW5lciBpcyBleHBlY3RlZCB0byB0YWtlIHRoZSBtZXNzYWdlIGFzIGl0cyBmaXJzdCBhcmd1bWVudC5cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGVzZXJpYWxpemVyIEEgZnVuY3Rpb24gdGhhdCBkZXNlcmlhbGl6ZXMgYSBtZXNzYWdlIHBheWxvYWQuXHJcbiAqIEByZXR1cm5zIHtBZGRMaXN0ZW5lckRlc2VyaWFsaXplcn1cclxuICogRXhhbXBsZSBVc2FnZTpcclxuICogICBjb25zdCB3aXRoSnNvbkRlc2VyaWFsaXplciA9IHdpdGhEZXNlcmlhbGl6ZXIocGF5bG9hZCA9PiBKU09OLnBhcnNlKHBheWxvYWQpKTtcclxuICogICBjb25zdCBkZXNlcmlhbGl6ZWRDaHJvbWVMaXN0ZW5lciA9IHdpdGhKc29uRGVzZXJpYWxpemVyKGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcik7XHJcbiAqICAgY29uc3Qgc2hvdWxkRGVzZXJpYWxpemUgPSAobWVzc2FnZSkgPT4gbWVzc2FnZS50eXBlID09PSAnREVTRVJJQUxJWkVfTUUnO1xyXG4gKiAgIGRlc2VyaWFsaXplZENocm9tZUxpc3RlbmVyKG1lc3NhZ2UgPT4gY29uc29sZS5sb2coXCJQYXlsb2FkOlwiLCBtZXNzYWdlLnBheWxvYWQpLCBzaG91bGREZXNlcmlhbGl6ZSk7XHJcbiAqICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXCJ7J3R5cGU6J0RFU0VSSUFMSVpFX01FJywncGF5bG9hZCc6eydwcm9wJzo0fX1cIik7XHJcbiAqICAgLy9QYXlsb2FkOiB7IHByb3A6IDQgfTtcclxuICogICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcInsncGF5bG9hZCc6eydwcm9wJzo0fX1cIik7XHJcbiAqICAgLy9QYXlsb2FkOiBcInsncHJvcCc6NH1cIjtcclxuICovXG5cblxudmFyIHdpdGhEZXNlcmlhbGl6ZXIgPSBmdW5jdGlvbiB3aXRoRGVzZXJpYWxpemVyKCkge1xuICB2YXIgZGVzZXJpYWxpemVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBub29wO1xuICByZXR1cm4gZnVuY3Rpb24gKGFkZExpc3RlbmVyRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxpc3RlbmVyLCBzaG91bGREZXNlcmlhbGl6ZSkge1xuICAgICAgcmV0dXJuIGFkZExpc3RlbmVyRm4oZGVzZXJpYWxpemVMaXN0ZW5lcihsaXN0ZW5lciwgZGVzZXJpYWxpemVyLCBzaG91bGREZXNlcmlhbGl6ZSkpO1xuICAgIH07XG4gIH07XG59O1xuLyoqXHJcbiAqIEdpdmVuIGEgc2VyaWFsaXplciwgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBtZXNzYWdlIHNlbmRpbmdcclxuICogZnVuY3Rpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQgYW5kIHJldHVybnMgYSB3cmFwcGVkIG1lc3NhZ2Ugc2VuZGVyIHRoYXRcclxuICogYXV0b21hdGljYWx5IHNlcmlhbGl6ZXMgbWVzc2FnZSBwYXlsb2Fkcy4gVGhlIG1lc3NhZ2Ugc2VuZGVyXHJcbiAqIGlzIGV4cGVjdGVkIHRvIHRha2UgdGhlIG1lc3NhZ2UgYXMgaXRzIGZpcnN0IGFyZ3VtZW50LCB1bmxlc3MgbWVzc2FnZUFyZ0luZGV4XHJcbiAqIGlzIG5vbnplcm8sIGluIHdoaWNoIGNhc2UgaXQgaXMgZXhwZWN0ZWQgaW4gdGhlIHBvc2l0aW9uIHNwZWNpZmllZCBieSBtZXNzYWdlQXJnSW5kZXguXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNlcmlhbGl6ZXIgQSBmdW5jdGlvbiB0aGF0IHNlcmlhbGl6ZXMgYSBtZXNzYWdlIHBheWxvYWRcclxuICogRXhhbXBsZSBVc2FnZTpcclxuICogICBjb25zdCB3aXRoSnNvblNlcmlhbGl6ZXIgPSB3aXRoU2VyaWFsaXplcihwYXlsb2FkID0+IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKVxyXG4gKiAgIGNvbnN0IHNlcmlhbGl6ZWRDaHJvbWVTZW5kZXIgPSB3aXRoSnNvblNlcmlhbGl6ZXIoY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UpXHJcbiAqICAgY2hyb21lLnJ1bnRpbWUuYWRkTGlzdGVuZXIobWVzc2FnZSA9PiBjb25zb2xlLmxvZyhcIlBheWxvYWQ6XCIsIG1lc3NhZ2UucGF5bG9hZCkpXHJcbiAqICAgc2VyaWFsaXplZENocm9tZVNlbmRlcih7IHBheWxvYWQ6IHsgcHJvcDogNCB9fSlcclxuICogICAvL1BheWxvYWQ6IFwieydwcm9wJzo0fVwiXHJcbiAqL1xuXG5cbmV4cG9ydHMud2l0aERlc2VyaWFsaXplciA9IHdpdGhEZXNlcmlhbGl6ZXI7XG5cbnZhciB3aXRoU2VyaWFsaXplciA9IGZ1bmN0aW9uIHdpdGhTZXJpYWxpemVyKCkge1xuICB2YXIgc2VyaWFsaXplciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzZW5kTWVzc2FnZUZuKSB7XG4gICAgdmFyIG1lc3NhZ2VBcmdJbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDw9IG1lc3NhZ2VBcmdJbmRleCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXNzYWdlIGluIHJlcXVlc3QgY291bGQgbm90IGJlIHNlcmlhbGl6ZWQuIFwiICsgXCJFeHBlY3RlZCBtZXNzYWdlIGluIHBvc2l0aW9uIFwiLmNvbmNhdChtZXNzYWdlQXJnSW5kZXgsIFwiIGJ1dCBvbmx5IHJlY2VpdmVkIFwiKS5jb25jYXQoYXJncy5sZW5ndGgsIFwiIGFyZ3MuXCIpKTtcbiAgICAgIH1cblxuICAgICAgYXJnc1ttZXNzYWdlQXJnSW5kZXhdID0gdHJhbnNmb3JtUGF5bG9hZChhcmdzW21lc3NhZ2VBcmdJbmRleF0sIHNlcmlhbGl6ZXIpO1xuICAgICAgcmV0dXJuIHNlbmRNZXNzYWdlRm4uYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgICB9O1xuICB9O1xufTtcblxuZXhwb3J0cy53aXRoU2VyaWFsaXplciA9IHdpdGhTZXJpYWxpemVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2xvZGFzaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImxvZGFzaC5hc3NpZ25pblwiKSk7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxudmFyIF9zZXJpYWxpemF0aW9uID0gcmVxdWlyZShcIi4uL3NlcmlhbGl6YXRpb25cIik7XG5cbnZhciBfcGF0Y2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdHJhdGVnaWVzL3NoYWxsb3dEaWZmL3BhdGNoXCIpKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIGJhY2tncm91bmRFcnJQcmVmaXggPSAnXFxuTG9va3MgbGlrZSB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgYmFja2dyb3VuZCBwYWdlLiAnICsgJ1lvdSBtaWdodCB3YW50IHRvIGluc3BlY3QgeW91ciBiYWNrZ3JvdW5kIHBhZ2UgZm9yIG1vcmUgZGV0YWlscy5cXG4nO1xudmFyIGRlZmF1bHRPcHRzID0ge1xuICBwb3J0TmFtZTogX2NvbnN0YW50cy5ERUZBVUxUX1BPUlRfTkFNRSxcbiAgc3RhdGU6IHt9LFxuICBleHRlbnNpb25JZDogbnVsbCxcbiAgc2VyaWFsaXplcjogX3NlcmlhbGl6YXRpb24ubm9vcCxcbiAgZGVzZXJpYWxpemVyOiBfc2VyaWFsaXphdGlvbi5ub29wLFxuICBwYXRjaFN0cmF0ZWd5OiBfcGF0Y2guZGVmYXVsdFxufTtcblxudmFyIFN0b3JlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBQcm94eSBzdG9yZVxyXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBBbiBvYmplY3Qgb2YgZm9ybSB7cG9ydE5hbWUsIHN0YXRlLCBleHRlbnNpb25JZCwgc2VyaWFsaXplciwgZGVzZXJpYWxpemVyLCBkaWZmU3RyYXRlZ3l9LCB3aGVyZSBgcG9ydE5hbWVgIGlzIGEgcmVxdWlyZWQgc3RyaW5nIGFuZCBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBwb3J0IGZvciBzdGF0ZSB0cmFuc2l0aW9uIGNoYW5nZXMsIGBzdGF0ZWAgaXMgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhpcyBzdG9yZSAoZGVmYXVsdCBge31gKSBgZXh0ZW5zaW9uSWRgIGlzIHRoZSBleHRlbnNpb24gaWQgYXMgZGVmaW5lZCBieSBicm93c2VyQVBJIHdoZW4gZXh0ZW5zaW9uIGlzIGxvYWRlZCAoZGVmYXVsdCBgJydgKSwgYHNlcmlhbGl6ZXJgIGlzIGEgZnVuY3Rpb24gdG8gc2VyaWFsaXplIG91dGdvaW5nIG1lc3NhZ2UgcGF5bG9hZHMgKGRlZmF1bHQgaXMgcGFzc3Rocm91Z2gpLCBgZGVzZXJpYWxpemVyYCBpcyBhIGZ1bmN0aW9uIHRvIGRlc2VyaWFsaXplIGluY29taW5nIG1lc3NhZ2UgcGF5bG9hZHMgKGRlZmF1bHQgaXMgcGFzc3Rocm91Z2gpLCBhbmQgcGF0Y2hTdHJhdGVneSBpcyBvbmUgb2YgdGhlIGluY2x1ZGVkIHBhdGNoaW5nIHN0cmF0ZWdpZXMgKGRlZmF1bHQgaXMgc2hhbGxvdyBkaWZmKSBvciBhIGN1c3RvbSBwYXRjaGluZyBmdW5jdGlvbi5cclxuICAgKi9cbiAgZnVuY3Rpb24gU3RvcmUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBkZWZhdWx0T3B0cyxcbiAgICAgICAgX3JlZiRwb3J0TmFtZSA9IF9yZWYucG9ydE5hbWUsXG4gICAgICAgIHBvcnROYW1lID0gX3JlZiRwb3J0TmFtZSA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMucG9ydE5hbWUgOiBfcmVmJHBvcnROYW1lLFxuICAgICAgICBfcmVmJHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgICAgc3RhdGUgPSBfcmVmJHN0YXRlID09PSB2b2lkIDAgPyBkZWZhdWx0T3B0cy5zdGF0ZSA6IF9yZWYkc3RhdGUsXG4gICAgICAgIF9yZWYkZXh0ZW5zaW9uSWQgPSBfcmVmLmV4dGVuc2lvbklkLFxuICAgICAgICBleHRlbnNpb25JZCA9IF9yZWYkZXh0ZW5zaW9uSWQgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLmV4dGVuc2lvbklkIDogX3JlZiRleHRlbnNpb25JZCxcbiAgICAgICAgX3JlZiRzZXJpYWxpemVyID0gX3JlZi5zZXJpYWxpemVyLFxuICAgICAgICBzZXJpYWxpemVyID0gX3JlZiRzZXJpYWxpemVyID09PSB2b2lkIDAgPyBkZWZhdWx0T3B0cy5zZXJpYWxpemVyIDogX3JlZiRzZXJpYWxpemVyLFxuICAgICAgICBfcmVmJGRlc2VyaWFsaXplciA9IF9yZWYuZGVzZXJpYWxpemVyLFxuICAgICAgICBkZXNlcmlhbGl6ZXIgPSBfcmVmJGRlc2VyaWFsaXplciA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuZGVzZXJpYWxpemVyIDogX3JlZiRkZXNlcmlhbGl6ZXIsXG4gICAgICAgIF9yZWYkcGF0Y2hTdHJhdGVneSA9IF9yZWYucGF0Y2hTdHJhdGVneSxcbiAgICAgICAgcGF0Y2hTdHJhdGVneSA9IF9yZWYkcGF0Y2hTdHJhdGVneSA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMucGF0Y2hTdHJhdGVneSA6IF9yZWYkcGF0Y2hTdHJhdGVneTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdG9yZSk7XG5cbiAgICBpZiAoIXBvcnROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvcnROYW1lIGlzIHJlcXVpcmVkIGluIG9wdGlvbnMnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNlcmlhbGl6ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2VyaWFsaXplciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlc2VyaWFsaXplciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdkZXNlcmlhbGl6ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXRjaFN0cmF0ZWd5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BhdGNoU3RyYXRlZ3kgbXVzdCBiZSBvbmUgb2YgdGhlIGluY2x1ZGVkIHBhdGNoaW5nIHN0cmF0ZWdpZXMgb3IgYSBjdXN0b20gcGF0Y2hpbmcgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICB0aGlzLnBvcnROYW1lID0gcG9ydE5hbWU7XG4gICAgdGhpcy5yZWFkeVJlc29sdmVkID0gZmFsc2U7XG4gICAgdGhpcy5yZWFkeVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmV0dXJuIF90aGlzLnJlYWR5UmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgdGhpcy5icm93c2VyQVBJID0gKDAsIF91dGlsLmdldEJyb3dzZXJBUEkpKCk7XG4gICAgdGhpcy5leHRlbnNpb25JZCA9IGV4dGVuc2lvbklkOyAvLyBrZWVwIHRoZSBleHRlbnNpb25JZCBhcyBhbiBpbnN0YW5jZSB2YXJpYWJsZVxuXG4gICAgdGhpcy5wb3J0ID0gdGhpcy5icm93c2VyQVBJLnJ1bnRpbWUuY29ubmVjdCh0aGlzLmV4dGVuc2lvbklkLCB7XG4gICAgICBuYW1lOiBwb3J0TmFtZVxuICAgIH0pO1xuICAgIHRoaXMuc2FmZXR5SGFuZGxlciA9IHRoaXMuc2FmZXR5SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuYnJvd3NlckFQSS5ydW50aW1lLm9uTWVzc2FnZSkge1xuICAgICAgdGhpcy5zYWZldHlNZXNzYWdlID0gdGhpcy5icm93c2VyQVBJLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMuc2FmZXR5SGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhpcy5zZXJpYWxpemVkUG9ydExpc3RlbmVyID0gKDAsIF9zZXJpYWxpemF0aW9uLndpdGhEZXNlcmlhbGl6ZXIpKGRlc2VyaWFsaXplcikoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHBvcnQkb25NZXNzYWdlO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHBvcnQkb25NZXNzYWdlID0gX3RoaXMucG9ydC5vbk1lc3NhZ2UpLmFkZExpc3RlbmVyLmFwcGx5KF90aGlzJHBvcnQkb25NZXNzYWdlLCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICAgIHRoaXMuc2VyaWFsaXplZE1lc3NhZ2VTZW5kZXIgPSAoMCwgX3NlcmlhbGl6YXRpb24ud2l0aFNlcmlhbGl6ZXIpKHNlcmlhbGl6ZXIpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRicm93c2VyQVBJJHJ1bnQ7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkYnJvd3NlckFQSSRydW50ID0gX3RoaXMuYnJvd3NlckFQSS5ydW50aW1lKS5zZW5kTWVzc2FnZS5hcHBseShfdGhpcyRicm93c2VyQVBJJHJ1bnQsIGFyZ3VtZW50cyk7XG4gICAgfSwgMSk7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5wYXRjaFN0cmF0ZWd5ID0gcGF0Y2hTdHJhdGVneTsgLy8gRG9uJ3QgdXNlIHNob3VsZERlc2VyaWFsaXplIGhlcmUsIHNpbmNlIG5vIG9uZSBlbHNlIHNob3VsZCBiZSB1c2luZyB0aGlzIHBvcnRcblxuICAgIHRoaXMuc2VyaWFsaXplZFBvcnRMaXN0ZW5lcihmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBfY29uc3RhbnRzLlNUQVRFX1RZUEU6XG4gICAgICAgICAgX3RoaXMucmVwbGFjZVN0YXRlKG1lc3NhZ2UucGF5bG9hZCk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzLnJlYWR5UmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnJlYWR5UmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBfdGhpcy5yZWFkeVJlc29sdmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIF9jb25zdGFudHMuUEFUQ0hfU1RBVEVfVFlQRTpcbiAgICAgICAgICBfdGhpcy5wYXRjaFN0YXRlKG1lc3NhZ2UucGF5bG9hZCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OiAvLyBkbyBub3RoaW5nXG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoID0gdGhpcy5kaXNwYXRjaC5iaW5kKHRoaXMpOyAvLyBhZGQgdGhpcyBjb250ZXh0IHRvIGRpc3BhdGNoXG4gIH1cbiAgLyoqXHJcbiAgKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5LiBPcHRpb25hbGx5IGEgY2FsbGJhY2sgbWF5IGJlIHBhc3NlZCBpbiBpbnN0ZWFkLlxyXG4gICogQHBhcmFtIFtmdW5jdGlvbl0gY2FsbGJhY2sgQW4gb3B0aW9uYWwgY2FsbGJhY2sgdGhhdCBtYXkgYmUgcGFzc2VkIGluIGFuZCB3aWxsIGZpcmUgd2hlbiB0aGUgc3RvcmUgaXMgcmVhZHkuXHJcbiAgKiBAcmV0dXJuIHtvYmplY3R9IHByb21pc2UgQSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3RvcmUgaGFzIGVzdGFibGlzaGVkIGEgY29ubmVjdGlvbiB3aXRoIHRoZSBiYWNrZ3JvdW5kIHBhZ2UuXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhTdG9yZSwgW3tcbiAgICBrZXk6IFwicmVhZHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICB2YXIgY2IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgICAgIGlmIChjYiAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeVByb21pc2UudGhlbihjYik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlYWR5UHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmVzIGEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIGFsbCBzdGF0ZSBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gbGlzdGVuZXIgQSBsaXN0ZW5lciBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiBzdG9yZSBzdGF0ZSBjaGFuZ2VzXHJcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gICAgICAgICAgQW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gd2hpY2ggY2FuIGJlIGNhbGxlZCB0byByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20gc3RhdGUgdXBkYXRlc1xyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzdWJzY3JpYmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIubGlzdGVuZXJzID0gX3RoaXMyLmxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXBsYWNlcyB0aGUgc3RhdGUgZm9yIG9ubHkgdGhlIGtleXMgaW4gdGhlIHVwZGF0ZWQgc3RhdGUuIE5vdGlmaWVzIGFsbCBsaXN0ZW5lcnMgb2Ygc3RhdGUgY2hhbmdlLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIHRoZSBuZXcgKHBhcnRpYWwpIHJlZHV4IHN0YXRlXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBhdGNoU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF0Y2hTdGF0ZShkaWZmZXJlbmNlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gdGhpcy5wYXRjaFN0cmF0ZWd5KHRoaXMuc3RhdGUsIGRpZmZlcmVuY2UpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZSB0aGUgY3VycmVudCBzdGF0ZSB3aXRoIGEgbmV3IHN0YXRlLiBOb3RpZmllcyBhbGwgbGlzdGVuZXJzIG9mIHN0YXRlIGNoYW5nZS5cclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gc3RhdGUgVGhlIG5ldyBzdGF0ZSBmb3IgdGhlIHN0b3JlXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcGxhY2VTdGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3RvcmVcclxuICAgICAqIEByZXR1cm4ge29iamVjdH0gdGhlIGN1cnJlbnQgc3RvcmUgc3RhdGVcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBTdHViIGZ1bmN0aW9uIHRvIHN0YXkgY29uc2lzdGVudCB3aXRoIFJlZHV4IFN0b3JlIEFQSS4gTm8tb3AuXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlcGxhY2VSZWR1Y2VyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIERpc3BhdGNoIGFuIGFjdGlvbiB0byB0aGUgYmFja2dyb3VuZCB1c2luZyBtZXNzYWdpbmcgcGFzc2luZ1xyXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBkYXRhIFRoZSBhY3Rpb24gZGF0YSB0byBkaXNwYXRjaFxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gICAgIFByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUvcmVqZWN0IGJhc2VkIG9uIHRoZSBhY3Rpb24gcmVzcG9uc2UgZnJvbSB0aGUgYmFja2dyb3VuZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkaXNwYXRjaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwYXRjaChkYXRhKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMzLnNlcmlhbGl6ZWRNZXNzYWdlU2VuZGVyKF90aGlzMy5leHRlbnNpb25JZCwge1xuICAgICAgICAgIHR5cGU6IF9jb25zdGFudHMuRElTUEFUQ0hfVFlQRSxcbiAgICAgICAgICBwb3J0TmFtZTogX3RoaXMzLnBvcnROYW1lLFxuICAgICAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICAgICAgfSwgbnVsbCwgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSByZXNwLmVycm9yLFxuICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3AudmFsdWU7XG5cbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBiZ0VyciA9IG5ldyBFcnJvcihcIlwiLmNvbmNhdChiYWNrZ3JvdW5kRXJyUHJlZml4KS5jb25jYXQoZXJyb3IpKTtcbiAgICAgICAgICAgIHJlamVjdCgoMCwgX2xvZGFzaC5kZWZhdWx0KShiZ0VyciwgZXJyb3IpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS5wYXlsb2FkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNhZmV0eUhhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2FmZXR5SGFuZGxlcihtZXNzYWdlKSB7XG4gICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzdG9yZVJlYWR5JyAmJiBtZXNzYWdlLnBvcnROYW1lID09PSB0aGlzLnBvcnROYW1lKSB7XG4gICAgICAgIC8vIFJlbW92ZSBTYWZ0ZXkgTGlzdGVuZXJcbiAgICAgICAgdGhpcy5icm93c2VyQVBJLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKHRoaXMuc2FmZXR5SGFuZGxlcik7IC8vIFJlc29sdmUgaWYgcmVhZHlQcm9taXNlIGhhcyBub3QgYmVlbiByZXNvbHZlZC5cblxuICAgICAgICBpZiAoIXRoaXMucmVhZHlSZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMucmVhZHlSZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5yZWFkeVJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdG9yZTtcbn0oKTtcblxudmFyIF9kZWZhdWx0ID0gU3RvcmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwcGx5TWlkZGxld2FyZTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuLy8gRnVuY3Rpb24gdGFrZW4gZnJvbSByZWR1eCBzb3VyY2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlZHV4L2Jsb2IvbWFzdGVyL3NyYy9jb21wb3NlLmpzXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn0gLy8gQmFzZWQgb24gcmVkdXggaW1wbGVtZW50YXRpb24gb2YgYXBwbHlNaWRkbGV3YXJlIHRvIHN1cHBvcnQgYWxsIHN0YW5kYXJkXG4vLyByZWR1eCBtaWRkbGV3YXJlc1xuXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZShzdG9yZSkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICB9O1xuXG4gIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZS5iaW5kKHN0b3JlKSxcbiAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG4gIG1pZGRsZXdhcmVzID0gKG1pZGRsZXdhcmVzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgfSk7XG4gIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBfdG9Db25zdW1hYmxlQXJyYXkobWlkZGxld2FyZXMpKShzdG9yZS5kaXNwYXRjaCk7XG4gIHN0b3JlLmRpc3BhdGNoID0gX2Rpc3BhdGNoO1xuICByZXR1cm4gc3RvcmU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkRJRkZfU1RBVFVTX0FSUkFZX1VQREFURUQgPSBleHBvcnRzLkRJRkZfU1RBVFVTX0tFWVNfVVBEQVRFRCA9IGV4cG9ydHMuRElGRl9TVEFUVVNfUkVNT1ZFRCA9IGV4cG9ydHMuRElGRl9TVEFUVVNfVVBEQVRFRCA9IHZvaWQgMDtcbi8vIFRoZSBgY2hhbmdlYCB2YWx1ZSBmb3IgdXBkYXRlZCBvciBpbnNlcnRlZCBmaWVsZHMgcmVzdWx0aW5nIGZyb20gc2hhbGxvdyBkaWZmXG52YXIgRElGRl9TVEFUVVNfVVBEQVRFRCA9ICd1cGRhdGVkJzsgLy8gVGhlIGBjaGFuZ2VgIHZhbHVlIGZvciByZW1vdmVkIGZpZWxkcyByZXN1bHRpbmcgZnJvbSBzaGFsbG93IGRpZmZcblxuZXhwb3J0cy5ESUZGX1NUQVRVU19VUERBVEVEID0gRElGRl9TVEFUVVNfVVBEQVRFRDtcbnZhciBESUZGX1NUQVRVU19SRU1PVkVEID0gJ3JlbW92ZWQnO1xuZXhwb3J0cy5ESUZGX1NUQVRVU19SRU1PVkVEID0gRElGRl9TVEFUVVNfUkVNT1ZFRDtcbnZhciBESUZGX1NUQVRVU19LRVlTX1VQREFURUQgPSAndXBkYXRlZF9rZXlzJztcbmV4cG9ydHMuRElGRl9TVEFUVVNfS0VZU19VUERBVEVEID0gRElGRl9TVEFUVVNfS0VZU19VUERBVEVEO1xudmFyIERJRkZfU1RBVFVTX0FSUkFZX1VQREFURUQgPSAndXBkYXRlZF9hcnJheSc7XG5leHBvcnRzLkRJRkZfU1RBVFVTX0FSUkFZX1VQREFURUQgPSBESUZGX1NUQVRVU19BUlJBWV9VUERBVEVEOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2hhbGxvd0RpZmY7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuLyoqXHJcbiAqIFJldHVybnMgYSBuZXcgT2JqZWN0IGNvbnRhaW5pbmcgb25seSB0aGUgZmllbGRzIGluIGBuZXdgIHRoYXQgZGlmZmVyIGZyb20gYG9sZGBcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9sZFxyXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3XHJcbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBjaGFuZ2VzLiBUaGUgY2hhbmdlcyBoYXZlIGEgYGtleWAsIGB2YWx1ZWAsIGFuZCBgY2hhbmdlYC5cclxuICogICBUaGUgY2hhbmdlIGlzIGVpdGhlciBgdXBkYXRlZGAsIHdoaWNoIGlzIGlmIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZCBvciBiZWVuIGFkZGVkLFxyXG4gKiAgIG9yIGByZW1vdmVkYC5cclxuICovXG5mdW5jdGlvbiBzaGFsbG93RGlmZihvbGRPYmosIG5ld09iaikge1xuICB2YXIgZGlmZmVyZW5jZSA9IFtdO1xuICBPYmplY3Qua2V5cyhuZXdPYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvbGRPYmpba2V5XSAhPT0gbmV3T2JqW2tleV0pIHtcbiAgICAgIGRpZmZlcmVuY2UucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogbmV3T2JqW2tleV0sXG4gICAgICAgIGNoYW5nZTogX2NvbnN0YW50cy5ESUZGX1NUQVRVU19VUERBVEVEXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3Qua2V5cyhvbGRPYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGRpZmZlcmVuY2UucHVzaCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBjaGFuZ2U6IF9jb25zdGFudHMuRElGRl9TVEFUVVNfUkVNT1ZFRFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRpZmZlcmVuY2U7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG5mdW5jdGlvbiBfZGVmYXVsdChvYmosIGRpZmZlcmVuY2UpIHtcbiAgdmFyIG5ld09iaiA9IE9iamVjdC5hc3NpZ24oe30sIG9iaik7XG4gIGRpZmZlcmVuY2UuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGFuZ2UgPSBfcmVmLmNoYW5nZSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHZhbHVlID0gX3JlZi52YWx1ZTtcblxuICAgIHN3aXRjaCAoY2hhbmdlKSB7XG4gICAgICBjYXNlIF9jb25zdGFudHMuRElGRl9TVEFUVVNfVVBEQVRFRDpcbiAgICAgICAgbmV3T2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX2NvbnN0YW50cy5ESUZGX1NUQVRVU19SRU1PVkVEOlxuICAgICAgICBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KG5ld09iaiwga2V5KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6IC8vIGRvIG5vdGhpbmdcblxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdPYmo7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldEJyb3dzZXJBUEkgPSBnZXRCcm93c2VyQVBJO1xuXG4vKipcclxuICogTG9va3MgZm9yIGEgZ2xvYmFsIGJyb3dzZXIgYXBpLCBmaXJzdCBjaGVja2luZyB0aGUgY2hyb21lIG5hbWVzcGFjZSBhbmQgdGhlblxyXG4gKiBjaGVja2luZyB0aGUgYnJvd3NlciBuYW1lc3BhY2UuIElmIG5vIGFwcHJvcHJpYXRlIG5hbWVzcGFjZSBpcyBwcmVzZW50LCB0aGlzXHJcbiAqIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gZXJyb3IuXHJcbiAqL1xuZnVuY3Rpb24gZ2V0QnJvd3NlckFQSSgpIHtcbiAgdmFyIGFwaTtcblxuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGFwaSA9IHNlbGYuY2hyb21lIHx8IHNlbGYuYnJvd3NlciB8fCBicm93c2VyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGFwaSA9IGJyb3dzZXI7XG4gIH1cblxuICBpZiAoIWFwaSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkJyb3dzZXIgQVBJIGlzIG5vdCBwcmVzZW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGFwaTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuXG52YXIgX3NlcmlhbGl6YXRpb24gPSByZXF1aXJlKFwiLi4vc2VyaWFsaXphdGlvblwiKTtcblxudmFyIF91dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XG5cbnZhciBfZGlmZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3N0cmF0ZWdpZXMvc2hhbGxvd0RpZmYvZGlmZlwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxyXG4gKiBSZXNwb25kZXIgZm9yIHByb21pc2lmaWVkIHJlc3VsdHNcclxuICogQHBhcmFtICB7b2JqZWN0fSBkaXNwYXRjaFJlc3VsdCBUaGUgcmVzdWx0IGZyb20gYHN0b3JlLmRpc3BhdGNoKClgXHJcbiAqIEBwYXJhbSAge2Z1bmN0aW9ufSBzZW5kICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gcmVzcG9uZCB0byBvcmlnaW5hbCBtZXNzYWdlXHJcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cclxuICovXG52YXIgcHJvbWlzZVJlc3BvbmRlciA9IGZ1bmN0aW9uIHByb21pc2VSZXNwb25kZXIoZGlzcGF0Y2hSZXN1bHQsIHNlbmQpIHtcbiAgUHJvbWlzZS5yZXNvbHZlKGRpc3BhdGNoUmVzdWx0KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICBzZW5kKHtcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgdmFsdWU6IHJlc1xuICAgIH0pO1xuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3IgZGlzcGF0Y2hpbmcgcmVzdWx0OicsIGVycik7XG4gICAgc2VuZCh7XG4gICAgICBlcnJvcjogZXJyLm1lc3NhZ2UsXG4gICAgICB2YWx1ZTogbnVsbFxuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0T3B0cyA9IHtcbiAgcG9ydE5hbWU6IF9jb25zdGFudHMuREVGQVVMVF9QT1JUX05BTUUsXG4gIGRpc3BhdGNoUmVzcG9uZGVyOiBwcm9taXNlUmVzcG9uZGVyLFxuICBzZXJpYWxpemVyOiBfc2VyaWFsaXphdGlvbi5ub29wLFxuICBkZXNlcmlhbGl6ZXI6IF9zZXJpYWxpemF0aW9uLm5vb3AsXG4gIGRpZmZTdHJhdGVneTogX2RpZmYuZGVmYXVsdFxufTtcbi8qKlxyXG4gKiBXcmFwcyBhIFJlZHV4IHN0b3JlIHNvIHRoYXQgcHJveHkgc3RvcmVzIGNhbiBjb25uZWN0IHRvIGl0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gc3RvcmUgQSBSZWR1eCBzdG9yZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBBbiBvYmplY3Qgb2YgZm9ybSB7cG9ydE5hbWUsIGRpc3BhdGNoUmVzcG9uZGVyLCBzZXJpYWxpemVyLCBkZXNlcmlhbGl6ZXJ9LCB3aGVyZSBgcG9ydE5hbWVgIGlzIGEgcmVxdWlyZWQgc3RyaW5nIGFuZCBkZWZpbmVzIHRoZSBuYW1lIG9mIHRoZSBwb3J0IGZvciBzdGF0ZSB0cmFuc2l0aW9uIGNoYW5nZXMsIGBkaXNwYXRjaFJlc3BvbmRlcmAgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgb2YgYSBzdG9yZSBkaXNwYXRjaCBhbmQgb3B0aW9uYWxseSBpbXBsZW1lbnRzIGN1c3RvbSBsb2dpYyBmb3IgcmVzcG9uZGluZyB0byB0aGUgb3JpZ2luYWwgZGlzcGF0Y2ggbWVzc2FnZSxgc2VyaWFsaXplcmAgaXMgYSBmdW5jdGlvbiB0byBzZXJpYWxpemUgb3V0Z29pbmcgbWVzc2FnZSBwYXlsb2FkcyAoZGVmYXVsdCBpcyBwYXNzdGhyb3VnaCksIGBkZXNlcmlhbGl6ZXJgIGlzIGEgZnVuY3Rpb24gdG8gZGVzZXJpYWxpemUgaW5jb21pbmcgbWVzc2FnZSBwYXlsb2FkcyAoZGVmYXVsdCBpcyBwYXNzdGhyb3VnaCksIGFuZCBkaWZmU3RyYXRlZ3kgaXMgb25lIG9mIHRoZSBpbmNsdWRlZCBkaWZmaW5nIHN0cmF0ZWdpZXMgKGRlZmF1bHQgaXMgc2hhbGxvdyBkaWZmKSBvciBhIGN1c3RvbSBkaWZmaW5nIGZ1bmN0aW9uLlxyXG4gKi9cblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoc3RvcmUpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRPcHRzLFxuICAgICAgX3JlZiRwb3J0TmFtZSA9IF9yZWYucG9ydE5hbWUsXG4gICAgICBwb3J0TmFtZSA9IF9yZWYkcG9ydE5hbWUgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLnBvcnROYW1lIDogX3JlZiRwb3J0TmFtZSxcbiAgICAgIF9yZWYkZGlzcGF0Y2hSZXNwb25kZSA9IF9yZWYuZGlzcGF0Y2hSZXNwb25kZXIsXG4gICAgICBkaXNwYXRjaFJlc3BvbmRlciA9IF9yZWYkZGlzcGF0Y2hSZXNwb25kZSA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuZGlzcGF0Y2hSZXNwb25kZXIgOiBfcmVmJGRpc3BhdGNoUmVzcG9uZGUsXG4gICAgICBfcmVmJHNlcmlhbGl6ZXIgPSBfcmVmLnNlcmlhbGl6ZXIsXG4gICAgICBzZXJpYWxpemVyID0gX3JlZiRzZXJpYWxpemVyID09PSB2b2lkIDAgPyBkZWZhdWx0T3B0cy5zZXJpYWxpemVyIDogX3JlZiRzZXJpYWxpemVyLFxuICAgICAgX3JlZiRkZXNlcmlhbGl6ZXIgPSBfcmVmLmRlc2VyaWFsaXplcixcbiAgICAgIGRlc2VyaWFsaXplciA9IF9yZWYkZGVzZXJpYWxpemVyID09PSB2b2lkIDAgPyBkZWZhdWx0T3B0cy5kZXNlcmlhbGl6ZXIgOiBfcmVmJGRlc2VyaWFsaXplcixcbiAgICAgIF9yZWYkZGlmZlN0cmF0ZWd5ID0gX3JlZi5kaWZmU3RyYXRlZ3ksXG4gICAgICBkaWZmU3RyYXRlZ3kgPSBfcmVmJGRpZmZTdHJhdGVneSA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuZGlmZlN0cmF0ZWd5IDogX3JlZiRkaWZmU3RyYXRlZ3k7XG5cbiAgaWYgKCFwb3J0TmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncG9ydE5hbWUgaXMgcmVxdWlyZWQgaW4gb3B0aW9ucycpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZXJpYWxpemVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXJpYWxpemVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkZXNlcmlhbGl6ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Rlc2VyaWFsaXplciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGlmZlN0cmF0ZWd5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkaWZmU3RyYXRlZ3kgbXVzdCBiZSBvbmUgb2YgdGhlIGluY2x1ZGVkIGRpZmZpbmcgc3RyYXRlZ2llcyBvciBhIGN1c3RvbSBkaWZmIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgYnJvd3NlckFQSSA9ICgwLCBfdXRpbC5nZXRCcm93c2VyQVBJKSgpO1xuICAvKipcclxuICAgKiBSZXNwb25kIHRvIGRpc3BhdGNoZXMgZnJvbSBVSSBjb21wb25lbnRzXHJcbiAgICovXG5cbiAgdmFyIGRpc3BhdGNoUmVzcG9uc2UgPSBmdW5jdGlvbiBkaXNwYXRjaFJlc3BvbnNlKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgaWYgKHJlcXVlc3QudHlwZSA9PT0gX2NvbnN0YW50cy5ESVNQQVRDSF9UWVBFICYmIHJlcXVlc3QucG9ydE5hbWUgPT09IHBvcnROYW1lKSB7XG4gICAgICB2YXIgYWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdC5wYXlsb2FkLCB7XG4gICAgICAgIF9zZW5kZXI6IHNlbmRlclxuICAgICAgfSk7XG4gICAgICB2YXIgZGlzcGF0Y2hSZXN1bHQgPSBudWxsO1xuXG4gICAgICB0cnkge1xuICAgICAgICBkaXNwYXRjaFJlc3VsdCA9IHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRpc3BhdGNoUmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZS5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cblxuICAgICAgZGlzcGF0Y2hSZXNwb25kZXIoZGlzcGF0Y2hSZXN1bHQsIHNlbmRSZXNwb25zZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIC8qKlxyXG4gICogU2V0dXAgZm9yIHN0YXRlIHVwZGF0ZXNcclxuICAqL1xuXG5cbiAgdmFyIGNvbm5lY3RTdGF0ZSA9IGZ1bmN0aW9uIGNvbm5lY3RTdGF0ZShwb3J0KSB7XG4gICAgaWYgKHBvcnQubmFtZSAhPT0gcG9ydE5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZE1lc3NhZ2VQb3N0ZXIgPSAoMCwgX3NlcmlhbGl6YXRpb24ud2l0aFNlcmlhbGl6ZXIpKHNlcmlhbGl6ZXIpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwb3J0LnBvc3RNZXNzYWdlLmFwcGx5KHBvcnQsIGFyZ3VtZW50cyk7XG4gICAgfSk7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICB2YXIgcGF0Y2hTdGF0ZSA9IGZ1bmN0aW9uIHBhdGNoU3RhdGUoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgdmFyIGRpZmYgPSBkaWZmU3RyYXRlZ3kocHJldlN0YXRlLCBzdGF0ZSk7XG5cbiAgICAgIGlmIChkaWZmLmxlbmd0aCkge1xuICAgICAgICBwcmV2U3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgc2VyaWFsaXplZE1lc3NhZ2VQb3N0ZXIoe1xuICAgICAgICAgIHR5cGU6IF9jb25zdGFudHMuUEFUQ0hfU1RBVEVfVFlQRSxcbiAgICAgICAgICBwYXlsb2FkOiBkaWZmXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07IC8vIFNlbmQgcGF0Y2hlZCBzdGF0ZSBkb3duIGNvbm5lY3RlZCBwb3J0IG9uIGV2ZXJ5IHJlZHV4IHN0b3JlIHN0YXRlIGNoYW5nZVxuXG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUocGF0Y2hTdGF0ZSk7IC8vIHdoZW4gdGhlIHBvcnQgZGlzY29ubmVjdHMsIHVuc3Vic2NyaWJlIHRoZSBzZW5kU3RhdGUgbGlzdGVuZXJcblxuICAgIHBvcnQub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKHVuc3Vic2NyaWJlKTsgLy8gU2VuZCBzdG9yZSdzIGluaXRpYWwgc3RhdGUgdGhyb3VnaCBwb3J0XG5cbiAgICBzZXJpYWxpemVkTWVzc2FnZVBvc3Rlcih7XG4gICAgICB0eXBlOiBfY29uc3RhbnRzLlNUQVRFX1RZUEUsXG4gICAgICBwYXlsb2FkOiBwcmV2U3RhdGVcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgd2l0aFBheWxvYWREZXNlcmlhbGl6ZXIgPSAoMCwgX3NlcmlhbGl6YXRpb24ud2l0aERlc2VyaWFsaXplcikoZGVzZXJpYWxpemVyKTtcblxuICB2YXIgc2hvdWxkRGVzZXJpYWxpemUgPSBmdW5jdGlvbiBzaG91bGREZXNlcmlhbGl6ZShyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3QudHlwZSA9PT0gX2NvbnN0YW50cy5ESVNQQVRDSF9UWVBFICYmIHJlcXVlc3QucG9ydE5hbWUgPT09IHBvcnROYW1lO1xuICB9O1xuICAvKipcclxuICAgKiBTZXR1cCBhY3Rpb24gaGFuZGxlclxyXG4gICAqL1xuXG5cbiAgd2l0aFBheWxvYWREZXNlcmlhbGl6ZXIoZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYnJvd3NlckFQSSRydW50aW1lJG87XG5cbiAgICByZXR1cm4gKF9icm93c2VyQVBJJHJ1bnRpbWUkbyA9IGJyb3dzZXJBUEkucnVudGltZS5vbk1lc3NhZ2UpLmFkZExpc3RlbmVyLmFwcGx5KF9icm93c2VyQVBJJHJ1bnRpbWUkbywgYXJndW1lbnRzKTtcbiAgfSkoZGlzcGF0Y2hSZXNwb25zZSwgc2hvdWxkRGVzZXJpYWxpemUpO1xuICAvKipcclxuICAgKiBTZXR1cCBleHRlcm5hbCBhY3Rpb24gaGFuZGxlclxyXG4gICAqL1xuXG4gIGlmIChicm93c2VyQVBJLnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwpIHtcbiAgICB3aXRoUGF5bG9hZERlc2VyaWFsaXplcihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2Jyb3dzZXJBUEkkcnVudGltZSRvMjtcblxuICAgICAgcmV0dXJuIChfYnJvd3NlckFQSSRydW50aW1lJG8yID0gYnJvd3NlckFQSS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsKS5hZGRMaXN0ZW5lci5hcHBseShfYnJvd3NlckFQSSRydW50aW1lJG8yLCBhcmd1bWVudHMpO1xuICAgIH0pKGRpc3BhdGNoUmVzcG9uc2UsIHNob3VsZERlc2VyaWFsaXplKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwgaXMgbm90IHN1cHBvcnRlZCcpO1xuICB9XG4gIC8qKlxyXG4gICAqIFNldHVwIGV4dGVuZGVkIGNvbm5lY3Rpb25cclxuICAgKi9cblxuXG4gIGJyb3dzZXJBUEkucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoY29ubmVjdFN0YXRlKTtcbiAgLyoqXHJcbiAgICogU2V0dXAgZXh0ZW5kZWQgZXh0ZXJuYWwgY29ubmVjdGlvblxyXG4gICAqL1xuXG4gIGlmIChicm93c2VyQVBJLnJ1bnRpbWUub25Db25uZWN0RXh0ZXJuYWwpIHtcbiAgICBicm93c2VyQVBJLnJ1bnRpbWUub25Db25uZWN0RXh0ZXJuYWwuYWRkTGlzdGVuZXIoY29ubmVjdFN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ3J1bnRpbWUub25Db25uZWN0RXh0ZXJuYWwgaXMgbm90IHN1cHBvcnRlZCcpO1xuICB9XG4gIC8qKlxyXG4gICAqIFNhZmV0eSBtZXNzYWdlIHRvIHRhYnMgZm9yIGNvbnRlbnQgc2NyaXB0c1xyXG4gICAqL1xuXG5cbiAgYnJvd3NlckFQSS50YWJzLnF1ZXJ5KHt9LCBmdW5jdGlvbiAodGFicykge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdGFic1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgdmFyIHRhYiA9IF9zdGVwLnZhbHVlO1xuICAgICAgICBicm93c2VyQVBJLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XG4gICAgICAgICAgYWN0aW9uOiAnc3RvcmVSZWFkeScsXG4gICAgICAgICAgcG9ydE5hbWU6IHBvcnROYW1lXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7Ly8gZG8gbm90aGluZyAtIGVycm9ycyBjYW4gYmUgcHJlc2VudFxuICAgICAgICAgICAgLy8gaWYgbm8gY29udGVudCBzY3JpcHQgZXhpc3RzIG9uIHJlY2lldmVyXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybiAhPSBudWxsKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7IC8vIEZvciBub24tdGFiIGJhc2VkXG4gIC8vIFRPRE86IEZpbmQgdXNlIGNhc2UgZm9yIHRoaXMuIE9tbWl0aW5nIHVudGlsIHRoZW4uXG4gIC8vIGJyb3dzZXJBUEkucnVudGltZS5zZW5kTWVzc2FnZShudWxsLCB7YWN0aW9uOiAnc3RvcmVSZWFkeSd9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnd2ViZXh0LXJlZHV4J1xuXG5cbihmdW5jdGlvbigpe1xuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlOiBhbnksIHNlbmRlcjogY2hyb21lLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcikge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgICAgICBsZXQgc3RvcmUgPSBuZXcgU3RvcmUoKVxuICAgICAgICBhd2FpdCBzdG9yZS5yZWFkeSgpXG4gICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KCdhY3Rpb24nKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgbWVzc2FnZScpXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfUEFHRV9TT1VSQ0UnLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgICAgIGh0bWw6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUwsXG4gICAgICAgICAgICB9fSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ0hlbGxvIGZyb20gY29udGVudCBzY3JpcHQnKVxuICAgICAgICB9XG4gICAgXG5cblxuICAgIH07XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZSk7XG4gICAgY29uc29sZS5sb2coJ1dhaXRpbmcgZm9yIGEgcXVldWUnKVxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9