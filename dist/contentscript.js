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
                        if (!message.hasOwnProperty('action')) return [3 /*break*/, 3];
                        store = new webext_redux_1.Store();
                        return [4 /*yield*/, store.ready()];
                    case 1:
                        _a.sent();
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
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    ;
    chrome.runtime.onMessage.addListener(onMessage);
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5hc3NpZ25pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9hbGlhcy9hbGlhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvc2VyaWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9zdG9yZS9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi9zdG9yZS9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvc3RyYXRlZ2llcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvc3RyYXRlZ2llcy9zaGFsbG93RGlmZi9kaWZmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93ZWJleHQtcmVkdXgvbGliL3N0cmF0ZWdpZXMvc2hhbGxvd0RpZmYvcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYmV4dC1yZWR1eC9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd2ViZXh0LXJlZHV4L2xpYi93cmFwLXN0b3JlL3dyYXBTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wdXAvc3JjL2NvbnRlbnRzY3JpcHQvY29udGVudHNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBp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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7QUFDTDtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7O0FBRUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE9BLHlHQUFvQztBQUdwQyxDQUFDO0lBRUcsU0FBZSxTQUFTLENBQUMsT0FBWSxFQUFFLE1BQW9DOzs7Ozs7NkJBRW5FLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQWhDLHdCQUFnQzt3QkFFNUIsS0FBSyxHQUFHLElBQUksb0JBQUssRUFBRTt3QkFDdkIscUJBQU0sS0FBSyxDQUFDLEtBQUssRUFBRTs7d0JBQW5CLFNBQW1CO3dCQUNOLHFCQUFNLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0NBQzlCLElBQUksRUFBRSxpQkFBaUI7Z0NBQ3ZCLE9BQU8sRUFBRTtvQ0FDVCxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7b0NBQ3JCLEdBQUcsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUk7b0NBQzNCLElBQUksRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVM7aUNBQzNDOzZCQUFDLENBQUM7O3dCQU5DLE1BQU0sR0FBRyxTQU1WO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDOzs7Ozs7S0FLMUI7SUFBQSxDQUFDO0lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiY29udGVudHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BvcHVwL3NyYy9jb250ZW50c2NyaXB0L2NvbnRlbnRzY3JpcHQudHNcIik7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgLy8gU2FmYXJpIDguMSBtYWtlcyBgYXJndW1lbnRzLmNhbGxlZWAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgLy8gU2FmYXJpIDkgbWFrZXMgYGFyZ3VtZW50cy5sZW5ndGhgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKVxuICAgIDogW107XG5cbiAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICBza2lwSW5kZXhlcyA9ICEhbGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKGtleSA9PSAnbGVuZ3RoJyB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmVzdGAgd2hpY2ggZG9lc24ndCB2YWxpZGF0ZSBvciBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhcHBseSBhIHJlc3QgcGFyYW1ldGVyIHRvLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6IHN0YXJ0LCAwKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBuYXRpdmVNYXgoYXJncy5sZW5ndGggLSBzdGFydCwgMCksXG4gICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBpbmRleCA9IC0xO1xuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgIG90aGVyQXJnc1tpbmRleF0gPSBhcmdzW2luZGV4XTtcbiAgICB9XG4gICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5hc3NpZ25gIGV4Y2VwdCB0aGF0IGl0IGl0ZXJhdGVzIG92ZXIgb3duIGFuZFxuICogaW5oZXJpdGVkIHNvdXJjZSBwcm9wZXJ0aWVzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBhbGlhcyBleHRlbmRcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBzZWUgXy5hc3NpZ25cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIEJhcigpIHtcbiAqICAgdGhpcy5jID0gMztcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmIgPSAyO1xuICogQmFyLnByb3RvdHlwZS5kID0gNDtcbiAqXG4gKiBfLmFzc2lnbkluKHsgJ2EnOiAwIH0sIG5ldyBGb28sIG5ldyBCYXIpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzLCAnZCc6IDQgfVxuICovXG52YXIgYXNzaWduSW4gPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSkge1xuICBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduSW47XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqXHJcbiAqIFNpbXBsZSBtaWRkbGV3YXJlIGludGVyY2VwdHMgYWN0aW9ucyBhbmQgcmVwbGFjZXMgd2l0aFxyXG4gKiBhbm90aGVyIGJ5IGNhbGxpbmcgYW4gYWxpYXMgZnVuY3Rpb24gd2l0aCB0aGUgb3JpZ2luYWwgYWN0aW9uXHJcbiAqIEB0eXBlIHtvYmplY3R9IGFsaWFzZXMgYW4gb2JqZWN0IHRoYXQgbWFwcyBhY3Rpb24gdHlwZXMgKGtleXMpIHRvIGFsaWFzIGZ1bmN0aW9ucyAodmFsdWVzKSAoZS5nLiB7IFNPTUVfQUNUSU9OOiBuZXdBY3Rpb25BbGlhc0Z1bmMgfSlcclxuICovXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChhbGlhc2VzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB2YXIgYWxpYXMgPSBhbGlhc2VzW2FjdGlvbi50eXBlXTtcblxuICAgICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dChhbGlhcyhhY3Rpb24pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuREVGQVVMVF9QT1JUX05BTUUgPSBleHBvcnRzLlBBVENIX1NUQVRFX1RZUEUgPSBleHBvcnRzLlNUQVRFX1RZUEUgPSBleHBvcnRzLkRJU1BBVENIX1RZUEUgPSB2b2lkIDA7XG4vLyBNZXNzYWdlIHR5cGUgdXNlZCBmb3IgZGlzcGF0Y2ggZXZlbnRzXG4vLyBmcm9tIHRoZSBQcm94eSBTdG9yZXMgdG8gYmFja2dyb3VuZFxudmFyIERJU1BBVENIX1RZUEUgPSAnY2hyb21leC5kaXNwYXRjaCc7IC8vIE1lc3NhZ2UgdHlwZSBmb3Igc3RhdGUgdXBkYXRlIGV2ZW50cyBmcm9tXG4vLyBiYWNrZ3JvdW5kIHRvIFByb3h5IFN0b3Jlc1xuXG5leHBvcnRzLkRJU1BBVENIX1RZUEUgPSBESVNQQVRDSF9UWVBFO1xudmFyIFNUQVRFX1RZUEUgPSAnY2hyb21leC5zdGF0ZSc7IC8vIE1lc3NhZ2UgdHlwZSBmb3Igc3RhdGUgcGF0Y2ggZXZlbnRzIGZyb21cbi8vIGJhY2tncm91bmQgdG8gUHJveHkgU3RvcmVzXG5cbmV4cG9ydHMuU1RBVEVfVFlQRSA9IFNUQVRFX1RZUEU7XG52YXIgUEFUQ0hfU1RBVEVfVFlQRSA9ICdjaHJvbWV4LnBhdGNoX3N0YXRlJzsgLy8gVGhlIGRlZmF1bHQgbmFtZSBmb3IgdGhlIHBvcnQgY29tbXVuaWNhdGlvbiB2aWFcbi8vIHJlYWN0LWNocm9tZS1yZWR1eFxuXG5leHBvcnRzLlBBVENIX1NUQVRFX1RZUEUgPSBQQVRDSF9TVEFURV9UWVBFO1xudmFyIERFRkFVTFRfUE9SVF9OQU1FID0gXCJjaHJvbWV4LnBvcnRfbmFtZVwiO1xuZXhwb3J0cy5ERUZBVUxUX1BPUlRfTkFNRSA9IERFRkFVTFRfUE9SVF9OQU1FOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3RvcmVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1N0b3JlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYXBwbHlNaWRkbGV3YXJlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hcHBseU1pZGRsZXdhcmUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3cmFwU3RvcmVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dyYXBTdG9yZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFsaWFzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbGlhcy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9TdG9yZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RvcmUvU3RvcmVcIikpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RvcmUvYXBwbHlNaWRkbGV3YXJlXCIpKTtcblxudmFyIF93cmFwU3RvcmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dyYXAtc3RvcmUvd3JhcFN0b3JlXCIpKTtcblxudmFyIF9hbGlhcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxpYXMvYWxpYXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoU2VyaWFsaXplciA9IGV4cG9ydHMud2l0aERlc2VyaWFsaXplciA9IGV4cG9ydHMubm9vcCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AocGF5bG9hZCkge1xuICByZXR1cm4gcGF5bG9hZDtcbn07XG5cbmV4cG9ydHMubm9vcCA9IG5vb3A7XG5cbnZhciB0cmFuc2Zvcm1QYXlsb2FkID0gZnVuY3Rpb24gdHJhbnNmb3JtUGF5bG9hZChtZXNzYWdlKSB7XG4gIHZhciB0cmFuc2Zvcm1lciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQoe30sIG1lc3NhZ2UsIG1lc3NhZ2UucGF5bG9hZCA/IHtcbiAgICBwYXlsb2FkOiB0cmFuc2Zvcm1lcihtZXNzYWdlLnBheWxvYWQpXG4gIH0gOiB7fSk7XG59O1xuXG52YXIgZGVzZXJpYWxpemVMaXN0ZW5lciA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgdmFyIGRlc2VyaWFsaXplciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbm9vcDtcbiAgdmFyIHNob3VsZERlc2VyaWFsaXplID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgLy8gSWYgYSBzaG91bGREZXNlcmlhbGl6ZSBmdW5jdGlvbiBpcyBwYXNzZWQsIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgdXNlcyBpdFxuICAvLyB0byBjaGVjayBpZiBhbnkgZ2l2ZW4gbWVzc2FnZSBwYXlsb2FkIHNob3VsZCBiZSBkZXNlcmlhbGl6ZWRcbiAgaWYgKHNob3VsZERlc2VyaWFsaXplKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkRGVzZXJpYWxpemUuYXBwbHkodm9pZCAwLCBbbWVzc2FnZV0uY29uY2F0KGFyZ3MpKSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBbdHJhbnNmb3JtUGF5bG9hZChtZXNzYWdlLCBkZXNlcmlhbGl6ZXIpXS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBbbWVzc2FnZV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xuICB9IC8vIE90aGVyd2lzZSwgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB0cmllcyB0byBkZXNlcmlhbGl6ZSBvbiBldmVyeSBtZXNzYWdlXG5cblxuICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdGVuZXIuYXBwbHkodm9pZCAwLCBbdHJhbnNmb3JtUGF5bG9hZChtZXNzYWdlLCBkZXNlcmlhbGl6ZXIpXS5jb25jYXQoYXJncykpO1xuICB9O1xufTtcbi8qKlxyXG4gKiBBIGZ1bmN0aW9uIHJldHVybmVkIGZyb20gd2l0aERlc2VyaWFsaXplciB0aGF0LCB3aGVuIGNhbGxlZCwgd3JhcHMgYWRkTGlzdGVuZXJGbiB3aXRoIHRoZVxyXG4gKiBkZXNlcmlhbGl6ZXIgcGFzc2VkIHRvIHdpdGhEZXNlcmlhbGl6ZXIuXHJcbiAqIEBuYW1lIEFkZExpc3RlbmVyRGVzZXJpYWxpemVyXHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZGRMaXN0ZW5lckZuIFRoZSBhZGQgbGlzdGVuZXIgZnVuY3Rpb24gdG8gd3JhcC5cclxuICogQHJldHVybnMge0Rlc2VyaWFsaXplZEFkZExpc3RlbmVyfVxyXG4gKi9cblxuLyoqXHJcbiAqIEEgd3JhcHBlZCBhZGQgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCByZWdpc3RlcnMgdGhlIGdpdmVuIGxpc3RlbmVyLlxyXG4gKiBAbmFtZSBEZXNlcmlhbGl6ZWRBZGRMaXN0ZW5lclxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyLiBJdCBzaG91bGQgZXhwZWN0IHRoZSAob3B0aW9uYWxseSlcclxuICogZGVzZXJpYWxpemVkIG1lc3NhZ2UgYXMgaXRzIGZpcnN0IGFyZ3VtZW50LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbc2hvdWxkRGVzZXJpYWxpemVdIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbGlzdGVuZXJcclxuICogYW5kIHJldHVybnMgd2hldGhlciB0aGUgbWVzc2FnZSBwYXlsb2FkIHNob3VsZCBiZSBkZXNlcmlhbGl6ZWQuIE5vdCBhbGwgbWVzc2FnZXMgKG5vdGFibHksIG1lc3NhZ2VzXHJcbiAqIHRoaXMgbGlzdGVuZXIgZG9lc24ndCBjYXJlIGFib3V0KSBzaG91bGQgYmUgYXR0ZW1wdGVkIHRvIGJlIGRlc2VyaWFsaXplZC5cclxuICovXG5cbi8qKlxyXG4gKiBHaXZlbiBhIGRlc2VyaWFsaXplciwgcmV0dXJucyBhbiBBZGRMaXN0ZW5lckRlc2VyaWFsaXplciBmdW5jdGlvbiB0aGF0IHRoYXQgdGFrZXMgYW4gYWRkIGxpc3RlbmVyXHJcbiAqIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGEgRGVzZXJpYWxpemVkQWRkTGlzdGVuZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGRlc2VyaWFsaXplcyBtZXNzYWdlIHBheWxvYWRzLlxyXG4gKiBFYWNoIG1lc3NhZ2UgbGlzdGVuZXIgaXMgZXhwZWN0ZWQgdG8gdGFrZSB0aGUgbWVzc2FnZSBhcyBpdHMgZmlyc3QgYXJndW1lbnQuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRlc2VyaWFsaXplciBBIGZ1bmN0aW9uIHRoYXQgZGVzZXJpYWxpemVzIGEgbWVzc2FnZSBwYXlsb2FkLlxyXG4gKiBAcmV0dXJucyB7QWRkTGlzdGVuZXJEZXNlcmlhbGl6ZXJ9XHJcbiAqIEV4YW1wbGUgVXNhZ2U6XHJcbiAqICAgY29uc3Qgd2l0aEpzb25EZXNlcmlhbGl6ZXIgPSB3aXRoRGVzZXJpYWxpemVyKHBheWxvYWQgPT4gSlNPTi5wYXJzZShwYXlsb2FkKSk7XHJcbiAqICAgY29uc3QgZGVzZXJpYWxpemVkQ2hyb21lTGlzdGVuZXIgPSB3aXRoSnNvbkRlc2VyaWFsaXplcihjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIpO1xyXG4gKiAgIGNvbnN0IHNob3VsZERlc2VyaWFsaXplID0gKG1lc3NhZ2UpID0+IG1lc3NhZ2UudHlwZSA9PT0gJ0RFU0VSSUFMSVpFX01FJztcclxuICogICBkZXNlcmlhbGl6ZWRDaHJvbWVMaXN0ZW5lcihtZXNzYWdlID0+IGNvbnNvbGUubG9nKFwiUGF5bG9hZDpcIiwgbWVzc2FnZS5wYXlsb2FkKSwgc2hvdWxkRGVzZXJpYWxpemUpO1xyXG4gKiAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFwieyd0eXBlOidERVNFUklBTElaRV9NRScsJ3BheWxvYWQnOnsncHJvcCc6NH19XCIpO1xyXG4gKiAgIC8vUGF5bG9hZDogeyBwcm9wOiA0IH07XHJcbiAqICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXCJ7J3BheWxvYWQnOnsncHJvcCc6NH19XCIpO1xyXG4gKiAgIC8vUGF5bG9hZDogXCJ7J3Byb3AnOjR9XCI7XHJcbiAqL1xuXG5cbnZhciB3aXRoRGVzZXJpYWxpemVyID0gZnVuY3Rpb24gd2l0aERlc2VyaWFsaXplcigpIHtcbiAgdmFyIGRlc2VyaWFsaXplciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbm9vcDtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhZGRMaXN0ZW5lckZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0ZW5lciwgc2hvdWxkRGVzZXJpYWxpemUpIHtcbiAgICAgIHJldHVybiBhZGRMaXN0ZW5lckZuKGRlc2VyaWFsaXplTGlzdGVuZXIobGlzdGVuZXIsIGRlc2VyaWFsaXplciwgc2hvdWxkRGVzZXJpYWxpemUpKTtcbiAgICB9O1xuICB9O1xufTtcbi8qKlxyXG4gKiBHaXZlbiBhIHNlcmlhbGl6ZXIsIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgbWVzc2FnZSBzZW5kaW5nXHJcbiAqIGZ1bmN0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50IGFuZCByZXR1cm5zIGEgd3JhcHBlZCBtZXNzYWdlIHNlbmRlciB0aGF0XHJcbiAqIGF1dG9tYXRpY2FseSBzZXJpYWxpemVzIG1lc3NhZ2UgcGF5bG9hZHMuIFRoZSBtZXNzYWdlIHNlbmRlclxyXG4gKiBpcyBleHBlY3RlZCB0byB0YWtlIHRoZSBtZXNzYWdlIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdW5sZXNzIG1lc3NhZ2VBcmdJbmRleFxyXG4gKiBpcyBub256ZXJvLCBpbiB3aGljaCBjYXNlIGl0IGlzIGV4cGVjdGVkIGluIHRoZSBwb3NpdGlvbiBzcGVjaWZpZWQgYnkgbWVzc2FnZUFyZ0luZGV4LlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZXJpYWxpemVyIEEgZnVuY3Rpb24gdGhhdCBzZXJpYWxpemVzIGEgbWVzc2FnZSBwYXlsb2FkXHJcbiAqIEV4YW1wbGUgVXNhZ2U6XHJcbiAqICAgY29uc3Qgd2l0aEpzb25TZXJpYWxpemVyID0gd2l0aFNlcmlhbGl6ZXIocGF5bG9hZCA9PiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSlcclxuICogICBjb25zdCBzZXJpYWxpemVkQ2hyb21lU2VuZGVyID0gd2l0aEpzb25TZXJpYWxpemVyKGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKVxyXG4gKiAgIGNocm9tZS5ydW50aW1lLmFkZExpc3RlbmVyKG1lc3NhZ2UgPT4gY29uc29sZS5sb2coXCJQYXlsb2FkOlwiLCBtZXNzYWdlLnBheWxvYWQpKVxyXG4gKiAgIHNlcmlhbGl6ZWRDaHJvbWVTZW5kZXIoeyBwYXlsb2FkOiB7IHByb3A6IDQgfX0pXHJcbiAqICAgLy9QYXlsb2FkOiBcInsncHJvcCc6NH1cIlxyXG4gKi9cblxuXG5leHBvcnRzLndpdGhEZXNlcmlhbGl6ZXIgPSB3aXRoRGVzZXJpYWxpemVyO1xuXG52YXIgd2l0aFNlcmlhbGl6ZXIgPSBmdW5jdGlvbiB3aXRoU2VyaWFsaXplcigpIHtcbiAgdmFyIHNlcmlhbGl6ZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG5vb3A7XG4gIHJldHVybiBmdW5jdGlvbiAoc2VuZE1lc3NhZ2VGbikge1xuICAgIHZhciBtZXNzYWdlQXJnSW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA8PSBtZXNzYWdlQXJnSW5kZXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWVzc2FnZSBpbiByZXF1ZXN0IGNvdWxkIG5vdCBiZSBzZXJpYWxpemVkLiBcIiArIFwiRXhwZWN0ZWQgbWVzc2FnZSBpbiBwb3NpdGlvbiBcIi5jb25jYXQobWVzc2FnZUFyZ0luZGV4LCBcIiBidXQgb25seSByZWNlaXZlZCBcIikuY29uY2F0KGFyZ3MubGVuZ3RoLCBcIiBhcmdzLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGFyZ3NbbWVzc2FnZUFyZ0luZGV4XSA9IHRyYW5zZm9ybVBheWxvYWQoYXJnc1ttZXNzYWdlQXJnSW5kZXhdLCBzZXJpYWxpemVyKTtcbiAgICAgIHJldHVybiBzZW5kTWVzc2FnZUZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydHMud2l0aFNlcmlhbGl6ZXIgPSB3aXRoU2VyaWFsaXplcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9sb2Rhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJsb2Rhc2guYXNzaWduaW5cIikpO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbnZhciBfc2VyaWFsaXphdGlvbiA9IHJlcXVpcmUoXCIuLi9zZXJpYWxpemF0aW9uXCIpO1xuXG52YXIgX3BhdGNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc3RyYXRlZ2llcy9zaGFsbG93RGlmZi9wYXRjaFwiKSk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBiYWNrZ3JvdW5kRXJyUHJlZml4ID0gJ1xcbkxvb2tzIGxpa2UgdGhlcmUgaXMgYW4gZXJyb3IgaW4gdGhlIGJhY2tncm91bmQgcGFnZS4gJyArICdZb3UgbWlnaHQgd2FudCB0byBpbnNwZWN0IHlvdXIgYmFja2dyb3VuZCBwYWdlIGZvciBtb3JlIGRldGFpbHMuXFxuJztcbnZhciBkZWZhdWx0T3B0cyA9IHtcbiAgcG9ydE5hbWU6IF9jb25zdGFudHMuREVGQVVMVF9QT1JUX05BTUUsXG4gIHN0YXRlOiB7fSxcbiAgZXh0ZW5zaW9uSWQ6IG51bGwsXG4gIHNlcmlhbGl6ZXI6IF9zZXJpYWxpemF0aW9uLm5vb3AsXG4gIGRlc2VyaWFsaXplcjogX3NlcmlhbGl6YXRpb24ubm9vcCxcbiAgcGF0Y2hTdHJhdGVneTogX3BhdGNoLmRlZmF1bHRcbn07XG5cbnZhciBTdG9yZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgUHJveHkgc3RvcmVcclxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgQW4gb2JqZWN0IG9mIGZvcm0ge3BvcnROYW1lLCBzdGF0ZSwgZXh0ZW5zaW9uSWQsIHNlcmlhbGl6ZXIsIGRlc2VyaWFsaXplciwgZGlmZlN0cmF0ZWd5fSwgd2hlcmUgYHBvcnROYW1lYCBpcyBhIHJlcXVpcmVkIHN0cmluZyBhbmQgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcG9ydCBmb3Igc3RhdGUgdHJhbnNpdGlvbiBjaGFuZ2VzLCBgc3RhdGVgIGlzIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoaXMgc3RvcmUgKGRlZmF1bHQgYHt9YCkgYGV4dGVuc2lvbklkYCBpcyB0aGUgZXh0ZW5zaW9uIGlkIGFzIGRlZmluZWQgYnkgYnJvd3NlckFQSSB3aGVuIGV4dGVuc2lvbiBpcyBsb2FkZWQgKGRlZmF1bHQgYCcnYCksIGBzZXJpYWxpemVyYCBpcyBhIGZ1bmN0aW9uIHRvIHNlcmlhbGl6ZSBvdXRnb2luZyBtZXNzYWdlIHBheWxvYWRzIChkZWZhdWx0IGlzIHBhc3N0aHJvdWdoKSwgYGRlc2VyaWFsaXplcmAgaXMgYSBmdW5jdGlvbiB0byBkZXNlcmlhbGl6ZSBpbmNvbWluZyBtZXNzYWdlIHBheWxvYWRzIChkZWZhdWx0IGlzIHBhc3N0aHJvdWdoKSwgYW5kIHBhdGNoU3RyYXRlZ3kgaXMgb25lIG9mIHRoZSBpbmNsdWRlZCBwYXRjaGluZyBzdHJhdGVnaWVzIChkZWZhdWx0IGlzIHNoYWxsb3cgZGlmZikgb3IgYSBjdXN0b20gcGF0Y2hpbmcgZnVuY3Rpb24uXHJcbiAgICovXG4gIGZ1bmN0aW9uIFN0b3JlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZGVmYXVsdE9wdHMsXG4gICAgICAgIF9yZWYkcG9ydE5hbWUgPSBfcmVmLnBvcnROYW1lLFxuICAgICAgICBwb3J0TmFtZSA9IF9yZWYkcG9ydE5hbWUgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLnBvcnROYW1lIDogX3JlZiRwb3J0TmFtZSxcbiAgICAgICAgX3JlZiRzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICAgIHN0YXRlID0gX3JlZiRzdGF0ZSA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuc3RhdGUgOiBfcmVmJHN0YXRlLFxuICAgICAgICBfcmVmJGV4dGVuc2lvbklkID0gX3JlZi5leHRlbnNpb25JZCxcbiAgICAgICAgZXh0ZW5zaW9uSWQgPSBfcmVmJGV4dGVuc2lvbklkID09PSB2b2lkIDAgPyBkZWZhdWx0T3B0cy5leHRlbnNpb25JZCA6IF9yZWYkZXh0ZW5zaW9uSWQsXG4gICAgICAgIF9yZWYkc2VyaWFsaXplciA9IF9yZWYuc2VyaWFsaXplcixcbiAgICAgICAgc2VyaWFsaXplciA9IF9yZWYkc2VyaWFsaXplciA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuc2VyaWFsaXplciA6IF9yZWYkc2VyaWFsaXplcixcbiAgICAgICAgX3JlZiRkZXNlcmlhbGl6ZXIgPSBfcmVmLmRlc2VyaWFsaXplcixcbiAgICAgICAgZGVzZXJpYWxpemVyID0gX3JlZiRkZXNlcmlhbGl6ZXIgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLmRlc2VyaWFsaXplciA6IF9yZWYkZGVzZXJpYWxpemVyLFxuICAgICAgICBfcmVmJHBhdGNoU3RyYXRlZ3kgPSBfcmVmLnBhdGNoU3RyYXRlZ3ksXG4gICAgICAgIHBhdGNoU3RyYXRlZ3kgPSBfcmVmJHBhdGNoU3RyYXRlZ3kgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLnBhdGNoU3RyYXRlZ3kgOiBfcmVmJHBhdGNoU3RyYXRlZ3k7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RvcmUpO1xuXG4gICAgaWYgKCFwb3J0TmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwb3J0TmFtZSBpcyByZXF1aXJlZCBpbiBvcHRpb25zJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzZXJpYWxpemVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NlcmlhbGl6ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZXNlcmlhbGl6ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZGVzZXJpYWxpemVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGF0Y2hTdHJhdGVneSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXRjaFN0cmF0ZWd5IG11c3QgYmUgb25lIG9mIHRoZSBpbmNsdWRlZCBwYXRjaGluZyBzdHJhdGVnaWVzIG9yIGEgY3VzdG9tIHBhdGNoaW5nIGZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3J0TmFtZSA9IHBvcnROYW1lO1xuICAgIHRoaXMucmVhZHlSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVhZHlQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZWFkeVJlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIHRoaXMuYnJvd3NlckFQSSA9ICgwLCBfdXRpbC5nZXRCcm93c2VyQVBJKSgpO1xuICAgIHRoaXMuZXh0ZW5zaW9uSWQgPSBleHRlbnNpb25JZDsgLy8ga2VlcCB0aGUgZXh0ZW5zaW9uSWQgYXMgYW4gaW5zdGFuY2UgdmFyaWFibGVcblxuICAgIHRoaXMucG9ydCA9IHRoaXMuYnJvd3NlckFQSS5ydW50aW1lLmNvbm5lY3QodGhpcy5leHRlbnNpb25JZCwge1xuICAgICAgbmFtZTogcG9ydE5hbWVcbiAgICB9KTtcbiAgICB0aGlzLnNhZmV0eUhhbmRsZXIgPSB0aGlzLnNhZmV0eUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIGlmICh0aGlzLmJyb3dzZXJBUEkucnVudGltZS5vbk1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2FmZXR5TWVzc2FnZSA9IHRoaXMuYnJvd3NlckFQSS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcih0aGlzLnNhZmV0eUhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoaXMuc2VyaWFsaXplZFBvcnRMaXN0ZW5lciA9ICgwLCBfc2VyaWFsaXphdGlvbi53aXRoRGVzZXJpYWxpemVyKShkZXNlcmlhbGl6ZXIpKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwb3J0JG9uTWVzc2FnZTtcblxuICAgICAgcmV0dXJuIChfdGhpcyRwb3J0JG9uTWVzc2FnZSA9IF90aGlzLnBvcnQub25NZXNzYWdlKS5hZGRMaXN0ZW5lci5hcHBseShfdGhpcyRwb3J0JG9uTWVzc2FnZSwgYXJndW1lbnRzKTtcbiAgICB9KTtcbiAgICB0aGlzLnNlcmlhbGl6ZWRNZXNzYWdlU2VuZGVyID0gKDAsIF9zZXJpYWxpemF0aW9uLndpdGhTZXJpYWxpemVyKShzZXJpYWxpemVyKShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkYnJvd3NlckFQSSRydW50O1xuXG4gICAgICByZXR1cm4gKF90aGlzJGJyb3dzZXJBUEkkcnVudCA9IF90aGlzLmJyb3dzZXJBUEkucnVudGltZSkuc2VuZE1lc3NhZ2UuYXBwbHkoX3RoaXMkYnJvd3NlckFQSSRydW50LCBhcmd1bWVudHMpO1xuICAgIH0sIDEpO1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMucGF0Y2hTdHJhdGVneSA9IHBhdGNoU3RyYXRlZ3k7IC8vIERvbid0IHVzZSBzaG91bGREZXNlcmlhbGl6ZSBoZXJlLCBzaW5jZSBubyBvbmUgZWxzZSBzaG91bGQgYmUgdXNpbmcgdGhpcyBwb3J0XG5cbiAgICB0aGlzLnNlcmlhbGl6ZWRQb3J0TGlzdGVuZXIoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgX2NvbnN0YW50cy5TVEFURV9UWVBFOlxuICAgICAgICAgIF90aGlzLnJlcGxhY2VTdGF0ZShtZXNzYWdlLnBheWxvYWQpO1xuXG4gICAgICAgICAgaWYgKCFfdGhpcy5yZWFkeVJlc29sdmVkKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWFkeVJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgX3RoaXMucmVhZHlSZXNvbHZlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBfY29uc3RhbnRzLlBBVENIX1NUQVRFX1RZUEU6XG4gICAgICAgICAgX3RoaXMucGF0Y2hTdGF0ZShtZXNzYWdlLnBheWxvYWQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDogLy8gZG8gbm90aGluZ1xuXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaCA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzKTsgLy8gYWRkIHRoaXMgY29udGV4dCB0byBkaXNwYXRjaFxuICB9XG4gIC8qKlxyXG4gICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeS4gT3B0aW9uYWxseSBhIGNhbGxiYWNrIG1heSBiZSBwYXNzZWQgaW4gaW5zdGVhZC5cclxuICAqIEBwYXJhbSBbZnVuY3Rpb25dIGNhbGxiYWNrIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgbWF5IGJlIHBhc3NlZCBpbiBhbmQgd2lsbCBmaXJlIHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5LlxyXG4gICogQHJldHVybiB7b2JqZWN0fSBwcm9taXNlIEEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIHN0b3JlIGhhcyBlc3RhYmxpc2hlZCBhIGNvbm5lY3Rpb24gd2l0aCB0aGUgYmFja2dyb3VuZCBwYWdlLlxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoU3RvcmUsIFt7XG4gICAga2V5OiBcInJlYWR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXG4gICAgICBpZiAoY2IgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZHlQcm9taXNlLnRoZW4oY2IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZWFkeVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3Vic2NyaWJlcyBhIGxpc3RlbmVyIGZ1bmN0aW9uIGZvciBhbGwgc3RhdGUgY2hhbmdlc1xyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGxpc3RlbmVyIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gc3RvcmUgc3RhdGUgY2hhbmdlc1xyXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259ICAgICAgICAgIEFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIHdoaWNoIGNhbiBiZSBjYWxsZWQgdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lciBmcm9tIHN0YXRlIHVwZGF0ZXNcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3Vic2NyaWJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmxpc3RlbmVycyA9IF90aGlzMi5saXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgcmV0dXJuIGwgIT09IGxpc3RlbmVyO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmVwbGFjZXMgdGhlIHN0YXRlIGZvciBvbmx5IHRoZSBrZXlzIGluIHRoZSB1cGRhdGVkIHN0YXRlLiBOb3RpZmllcyBhbGwgbGlzdGVuZXJzIG9mIHN0YXRlIGNoYW5nZS5cclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0ZSB0aGUgbmV3IChwYXJ0aWFsKSByZWR1eCBzdGF0ZVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJwYXRjaFN0YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdGNoU3RhdGUoZGlmZmVyZW5jZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucGF0Y2hTdHJhdGVneSh0aGlzLnN0YXRlLCBkaWZmZXJlbmNlKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJlcGxhY2UgdGhlIGN1cnJlbnQgc3RhdGUgd2l0aCBhIG5ldyBzdGF0ZS4gTm90aWZpZXMgYWxsIGxpc3RlbmVycyBvZiBzdGF0ZSBjaGFuZ2UuXHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IHN0YXRlIFRoZSBuZXcgc3RhdGUgZm9yIHRoZSBzdG9yZVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXBsYWNlU3RhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgIHJldHVybiBsKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHN0b3JlXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBjdXJyZW50IHN0b3JlIHN0YXRlXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogU3R1YiBmdW5jdGlvbiB0byBzdGF5IGNvbnNpc3RlbnQgd2l0aCBSZWR1eCBTdG9yZSBBUEkuIE5vLW9wLlxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXBsYWNlUmVkdWNlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcigpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBEaXNwYXRjaCBhbiBhY3Rpb24gdG8gdGhlIGJhY2tncm91bmQgdXNpbmcgbWVzc2FnaW5nIHBhc3NpbmdcclxuICAgICAqIEBwYXJhbSAge29iamVjdH0gZGF0YSBUaGUgYWN0aW9uIGRhdGEgdG8gZGlzcGF0Y2hcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9ICAgICBQcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlL3JlamVjdCBiYXNlZCBvbiB0aGUgYWN0aW9uIHJlc3BvbnNlIGZyb20gdGhlIGJhY2tncm91bmRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGlzcGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGF0Y2goZGF0YSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIF90aGlzMy5zZXJpYWxpemVkTWVzc2FnZVNlbmRlcihfdGhpczMuZXh0ZW5zaW9uSWQsIHtcbiAgICAgICAgICB0eXBlOiBfY29uc3RhbnRzLkRJU1BBVENIX1RZUEUsXG4gICAgICAgICAgcG9ydE5hbWU6IF90aGlzMy5wb3J0TmFtZSxcbiAgICAgICAgICBwYXlsb2FkOiBkYXRhXG4gICAgICAgIH0sIG51bGwsIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gcmVzcC5lcnJvcixcbiAgICAgICAgICAgICAgdmFsdWUgPSByZXNwLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB2YXIgYmdFcnIgPSBuZXcgRXJyb3IoXCJcIi5jb25jYXQoYmFja2dyb3VuZEVyclByZWZpeCkuY29uY2F0KGVycm9yKSk7XG4gICAgICAgICAgICByZWplY3QoKDAsIF9sb2Rhc2guZGVmYXVsdCkoYmdFcnIsIGVycm9yKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUgJiYgdmFsdWUucGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzYWZldHlIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNhZmV0eUhhbmRsZXIobWVzc2FnZSkge1xuICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3RvcmVSZWFkeScgJiYgbWVzc2FnZS5wb3J0TmFtZSA9PT0gdGhpcy5wb3J0TmFtZSkge1xuICAgICAgICAvLyBSZW1vdmUgU2FmdGV5IExpc3RlbmVyXG4gICAgICAgIHRoaXMuYnJvd3NlckFQSS5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcih0aGlzLnNhZmV0eUhhbmRsZXIpOyAvLyBSZXNvbHZlIGlmIHJlYWR5UHJvbWlzZSBoYXMgbm90IGJlZW4gcmVzb2x2ZWQuXG5cbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5UmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlYWR5UmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVhZHlSZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RvcmU7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IFN0b3JlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcHBseU1pZGRsZXdhcmU7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfSB9XG5cbi8vIEZ1bmN0aW9uIHRha2VuIGZyb20gcmVkdXggc291cmNlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWR1eC9ibG9iL21hc3Rlci9zcmMvY29tcG9zZS5qc1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59IC8vIEJhc2VkIG9uIHJlZHV4IGltcGxlbWVudGF0aW9uIG9mIGFwcGx5TWlkZGxld2FyZSB0byBzdXBwb3J0IGFsbCBzdGFuZGFyZFxuLy8gcmVkdXggbWlkZGxld2FyZXNcblxuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoc3RvcmUpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiAnICsgJ090aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC4nKTtcbiAgfTtcblxuICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUuYmluZChzdG9yZSksXG4gICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xuICBtaWRkbGV3YXJlcyA9IChtaWRkbGV3YXJlcyB8fCBbXSkubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gIH0pO1xuICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgX3RvQ29uc3VtYWJsZUFycmF5KG1pZGRsZXdhcmVzKSkoc3RvcmUuZGlzcGF0Y2gpO1xuICBzdG9yZS5kaXNwYXRjaCA9IF9kaXNwYXRjaDtcbiAgcmV0dXJuIHN0b3JlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ESUZGX1NUQVRVU19BUlJBWV9VUERBVEVEID0gZXhwb3J0cy5ESUZGX1NUQVRVU19LRVlTX1VQREFURUQgPSBleHBvcnRzLkRJRkZfU1RBVFVTX1JFTU9WRUQgPSBleHBvcnRzLkRJRkZfU1RBVFVTX1VQREFURUQgPSB2b2lkIDA7XG4vLyBUaGUgYGNoYW5nZWAgdmFsdWUgZm9yIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQgZmllbGRzIHJlc3VsdGluZyBmcm9tIHNoYWxsb3cgZGlmZlxudmFyIERJRkZfU1RBVFVTX1VQREFURUQgPSAndXBkYXRlZCc7IC8vIFRoZSBgY2hhbmdlYCB2YWx1ZSBmb3IgcmVtb3ZlZCBmaWVsZHMgcmVzdWx0aW5nIGZyb20gc2hhbGxvdyBkaWZmXG5cbmV4cG9ydHMuRElGRl9TVEFUVVNfVVBEQVRFRCA9IERJRkZfU1RBVFVTX1VQREFURUQ7XG52YXIgRElGRl9TVEFUVVNfUkVNT1ZFRCA9ICdyZW1vdmVkJztcbmV4cG9ydHMuRElGRl9TVEFUVVNfUkVNT1ZFRCA9IERJRkZfU1RBVFVTX1JFTU9WRUQ7XG52YXIgRElGRl9TVEFUVVNfS0VZU19VUERBVEVEID0gJ3VwZGF0ZWRfa2V5cyc7XG5leHBvcnRzLkRJRkZfU1RBVFVTX0tFWVNfVVBEQVRFRCA9IERJRkZfU1RBVFVTX0tFWVNfVVBEQVRFRDtcbnZhciBESUZGX1NUQVRVU19BUlJBWV9VUERBVEVEID0gJ3VwZGF0ZWRfYXJyYXknO1xuZXhwb3J0cy5ESUZGX1NUQVRVU19BUlJBWV9VUERBVEVEID0gRElGRl9TVEFUVVNfQVJSQVlfVVBEQVRFRDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNoYWxsb3dEaWZmO1xuXG52YXIgX2NvbnN0YW50cyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5cbi8qKlxyXG4gKiBSZXR1cm5zIGEgbmV3IE9iamVjdCBjb250YWluaW5nIG9ubHkgdGhlIGZpZWxkcyBpbiBgbmV3YCB0aGF0IGRpZmZlciBmcm9tIGBvbGRgXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRcclxuICogQHBhcmFtIHtPYmplY3R9IG5ld1xyXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgY2hhbmdlcy4gVGhlIGNoYW5nZXMgaGF2ZSBhIGBrZXlgLCBgdmFsdWVgLCBhbmQgYGNoYW5nZWAuXHJcbiAqICAgVGhlIGNoYW5nZSBpcyBlaXRoZXIgYHVwZGF0ZWRgLCB3aGljaCBpcyBpZiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQgb3IgYmVlbiBhZGRlZCxcclxuICogICBvciBgcmVtb3ZlZGAuXHJcbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0RpZmYob2xkT2JqLCBuZXdPYmopIHtcbiAgdmFyIGRpZmZlcmVuY2UgPSBbXTtcbiAgT2JqZWN0LmtleXMobmV3T2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAob2xkT2JqW2tleV0gIT09IG5ld09ialtrZXldKSB7XG4gICAgICBkaWZmZXJlbmNlLnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IG5ld09ialtrZXldLFxuICAgICAgICBjaGFuZ2U6IF9jb25zdGFudHMuRElGRl9TVEFUVVNfVVBEQVRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmtleXMob2xkT2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIW5ld09iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBkaWZmZXJlbmNlLnB1c2goe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgY2hhbmdlOiBfY29uc3RhbnRzLkRJRkZfU1RBVFVTX1JFTU9WRURcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkaWZmZXJlbmNlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxuZnVuY3Rpb24gX2RlZmF1bHQob2JqLCBkaWZmZXJlbmNlKSB7XG4gIHZhciBuZXdPYmogPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xuICBkaWZmZXJlbmNlLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlID0gX3JlZi5jaGFuZ2UsXG4gICAgICAgIGtleSA9IF9yZWYua2V5LFxuICAgICAgICB2YWx1ZSA9IF9yZWYudmFsdWU7XG5cbiAgICBzd2l0Y2ggKGNoYW5nZSkge1xuICAgICAgY2FzZSBfY29uc3RhbnRzLkRJRkZfU1RBVFVTX1VQREFURUQ6XG4gICAgICAgIG5ld09ialtrZXldID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIF9jb25zdGFudHMuRElGRl9TVEFUVVNfUkVNT1ZFRDpcbiAgICAgICAgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShuZXdPYmosIGtleSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OiAvLyBkbyBub3RoaW5nXG5cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3T2JqO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRCcm93c2VyQVBJID0gZ2V0QnJvd3NlckFQSTtcblxuLyoqXHJcbiAqIExvb2tzIGZvciBhIGdsb2JhbCBicm93c2VyIGFwaSwgZmlyc3QgY2hlY2tpbmcgdGhlIGNocm9tZSBuYW1lc3BhY2UgYW5kIHRoZW5cclxuICogY2hlY2tpbmcgdGhlIGJyb3dzZXIgbmFtZXNwYWNlLiBJZiBubyBhcHByb3ByaWF0ZSBuYW1lc3BhY2UgaXMgcHJlc2VudCwgdGhpc1xyXG4gKiBmdW5jdGlvbiB3aWxsIHRocm93IGFuIGVycm9yLlxyXG4gKi9cbmZ1bmN0aW9uIGdldEJyb3dzZXJBUEkoKSB7XG4gIHZhciBhcGk7XG5cbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBhcGkgPSBzZWxmLmNocm9tZSB8fCBzZWxmLmJyb3dzZXIgfHwgYnJvd3NlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBhcGkgPSBicm93c2VyO1xuICB9XG5cbiAgaWYgKCFhcGkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyIEFQSSBpcyBub3QgcHJlc2VudFwiKTtcbiAgfVxuXG4gIHJldHVybiBhcGk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29uc3RhbnRzID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcblxudmFyIF9zZXJpYWxpemF0aW9uID0gcmVxdWlyZShcIi4uL3NlcmlhbGl6YXRpb25cIik7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xuXG52YXIgX2RpZmYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zdHJhdGVnaWVzL3NoYWxsb3dEaWZmL2RpZmZcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcclxuICogUmVzcG9uZGVyIGZvciBwcm9taXNpZmllZCByZXN1bHRzXHJcbiAqIEBwYXJhbSAge29iamVjdH0gZGlzcGF0Y2hSZXN1bHQgVGhlIHJlc3VsdCBmcm9tIGBzdG9yZS5kaXNwYXRjaCgpYFxyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gc2VuZCAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHJlc3BvbmQgdG8gb3JpZ2luYWwgbWVzc2FnZVxyXG4gKiBAcmV0dXJuIHt1bmRlZmluZWR9XHJcbiAqL1xudmFyIHByb21pc2VSZXNwb25kZXIgPSBmdW5jdGlvbiBwcm9taXNlUmVzcG9uZGVyKGRpc3BhdGNoUmVzdWx0LCBzZW5kKSB7XG4gIFByb21pc2UucmVzb2x2ZShkaXNwYXRjaFJlc3VsdCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgc2VuZCh7XG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIHZhbHVlOiByZXNcbiAgICB9KTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGRpc3BhdGNoaW5nIHJlc3VsdDonLCBlcnIpO1xuICAgIHNlbmQoe1xuICAgICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgICAgdmFsdWU6IG51bGxcbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdE9wdHMgPSB7XG4gIHBvcnROYW1lOiBfY29uc3RhbnRzLkRFRkFVTFRfUE9SVF9OQU1FLFxuICBkaXNwYXRjaFJlc3BvbmRlcjogcHJvbWlzZVJlc3BvbmRlcixcbiAgc2VyaWFsaXplcjogX3NlcmlhbGl6YXRpb24ubm9vcCxcbiAgZGVzZXJpYWxpemVyOiBfc2VyaWFsaXphdGlvbi5ub29wLFxuICBkaWZmU3RyYXRlZ3k6IF9kaWZmLmRlZmF1bHRcbn07XG4vKipcclxuICogV3JhcHMgYSBSZWR1eCBzdG9yZSBzbyB0aGF0IHByb3h5IHN0b3JlcyBjYW4gY29ubmVjdCB0byBpdC5cclxuICogQHBhcmFtIHtPYmplY3R9IHN0b3JlIEEgUmVkdXggc3RvcmVcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgQW4gb2JqZWN0IG9mIGZvcm0ge3BvcnROYW1lLCBkaXNwYXRjaFJlc3BvbmRlciwgc2VyaWFsaXplciwgZGVzZXJpYWxpemVyfSwgd2hlcmUgYHBvcnROYW1lYCBpcyBhIHJlcXVpcmVkIHN0cmluZyBhbmQgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgcG9ydCBmb3Igc3RhdGUgdHJhbnNpdGlvbiBjaGFuZ2VzLCBgZGlzcGF0Y2hSZXNwb25kZXJgIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IG9mIGEgc3RvcmUgZGlzcGF0Y2ggYW5kIG9wdGlvbmFsbHkgaW1wbGVtZW50cyBjdXN0b20gbG9naWMgZm9yIHJlc3BvbmRpbmcgdG8gdGhlIG9yaWdpbmFsIGRpc3BhdGNoIG1lc3NhZ2UsYHNlcmlhbGl6ZXJgIGlzIGEgZnVuY3Rpb24gdG8gc2VyaWFsaXplIG91dGdvaW5nIG1lc3NhZ2UgcGF5bG9hZHMgKGRlZmF1bHQgaXMgcGFzc3Rocm91Z2gpLCBgZGVzZXJpYWxpemVyYCBpcyBhIGZ1bmN0aW9uIHRvIGRlc2VyaWFsaXplIGluY29taW5nIG1lc3NhZ2UgcGF5bG9hZHMgKGRlZmF1bHQgaXMgcGFzc3Rocm91Z2gpLCBhbmQgZGlmZlN0cmF0ZWd5IGlzIG9uZSBvZiB0aGUgaW5jbHVkZWQgZGlmZmluZyBzdHJhdGVnaWVzIChkZWZhdWx0IGlzIHNoYWxsb3cgZGlmZikgb3IgYSBjdXN0b20gZGlmZmluZyBmdW5jdGlvbi5cclxuICovXG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHN0b3JlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBkZWZhdWx0T3B0cyxcbiAgICAgIF9yZWYkcG9ydE5hbWUgPSBfcmVmLnBvcnROYW1lLFxuICAgICAgcG9ydE5hbWUgPSBfcmVmJHBvcnROYW1lID09PSB2b2lkIDAgPyBkZWZhdWx0T3B0cy5wb3J0TmFtZSA6IF9yZWYkcG9ydE5hbWUsXG4gICAgICBfcmVmJGRpc3BhdGNoUmVzcG9uZGUgPSBfcmVmLmRpc3BhdGNoUmVzcG9uZGVyLFxuICAgICAgZGlzcGF0Y2hSZXNwb25kZXIgPSBfcmVmJGRpc3BhdGNoUmVzcG9uZGUgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLmRpc3BhdGNoUmVzcG9uZGVyIDogX3JlZiRkaXNwYXRjaFJlc3BvbmRlLFxuICAgICAgX3JlZiRzZXJpYWxpemVyID0gX3JlZi5zZXJpYWxpemVyLFxuICAgICAgc2VyaWFsaXplciA9IF9yZWYkc2VyaWFsaXplciA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuc2VyaWFsaXplciA6IF9yZWYkc2VyaWFsaXplcixcbiAgICAgIF9yZWYkZGVzZXJpYWxpemVyID0gX3JlZi5kZXNlcmlhbGl6ZXIsXG4gICAgICBkZXNlcmlhbGl6ZXIgPSBfcmVmJGRlc2VyaWFsaXplciA9PT0gdm9pZCAwID8gZGVmYXVsdE9wdHMuZGVzZXJpYWxpemVyIDogX3JlZiRkZXNlcmlhbGl6ZXIsXG4gICAgICBfcmVmJGRpZmZTdHJhdGVneSA9IF9yZWYuZGlmZlN0cmF0ZWd5LFxuICAgICAgZGlmZlN0cmF0ZWd5ID0gX3JlZiRkaWZmU3RyYXRlZ3kgPT09IHZvaWQgMCA/IGRlZmF1bHRPcHRzLmRpZmZTdHJhdGVneSA6IF9yZWYkZGlmZlN0cmF0ZWd5O1xuXG4gIGlmICghcG9ydE5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvcnROYW1lIGlzIHJlcXVpcmVkIGluIG9wdGlvbnMnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VyaWFsaXplciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignc2VyaWFsaXplciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVzZXJpYWxpemVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdkZXNlcmlhbGl6ZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRpZmZTdHJhdGVneSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGlmZlN0cmF0ZWd5IG11c3QgYmUgb25lIG9mIHRoZSBpbmNsdWRlZCBkaWZmaW5nIHN0cmF0ZWdpZXMgb3IgYSBjdXN0b20gZGlmZiBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGJyb3dzZXJBUEkgPSAoMCwgX3V0aWwuZ2V0QnJvd3NlckFQSSkoKTtcbiAgLyoqXHJcbiAgICogUmVzcG9uZCB0byBkaXNwYXRjaGVzIGZyb20gVUkgY29tcG9uZW50c1xyXG4gICAqL1xuXG4gIHZhciBkaXNwYXRjaFJlc3BvbnNlID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXNwb25zZShyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09IF9jb25zdGFudHMuRElTUEFUQ0hfVFlQRSAmJiByZXF1ZXN0LnBvcnROYW1lID09PSBwb3J0TmFtZSkge1xuICAgICAgdmFyIGFjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3QucGF5bG9hZCwge1xuICAgICAgICBfc2VuZGVyOiBzZW5kZXJcbiAgICAgIH0pO1xuICAgICAgdmFyIGRpc3BhdGNoUmVzdWx0ID0gbnVsbDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZGlzcGF0Y2hSZXN1bHQgPSBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkaXNwYXRjaFJlc3VsdCA9IFByb21pc2UucmVqZWN0KGUubWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG5cbiAgICAgIGRpc3BhdGNoUmVzcG9uZGVyKGRpc3BhdGNoUmVzdWx0LCBzZW5kUmVzcG9uc2UpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuICAvKipcclxuICAqIFNldHVwIGZvciBzdGF0ZSB1cGRhdGVzXHJcbiAgKi9cblxuXG4gIHZhciBjb25uZWN0U3RhdGUgPSBmdW5jdGlvbiBjb25uZWN0U3RhdGUocG9ydCkge1xuICAgIGlmIChwb3J0Lm5hbWUgIT09IHBvcnROYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlcmlhbGl6ZWRNZXNzYWdlUG9zdGVyID0gKDAsIF9zZXJpYWxpemF0aW9uLndpdGhTZXJpYWxpemVyKShzZXJpYWxpemVyKShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcG9ydC5wb3N0TWVzc2FnZS5hcHBseShwb3J0LCBhcmd1bWVudHMpO1xuICAgIH0pO1xuICAgIHZhciBwcmV2U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgdmFyIHBhdGNoU3RhdGUgPSBmdW5jdGlvbiBwYXRjaFN0YXRlKCkge1xuICAgICAgdmFyIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIHZhciBkaWZmID0gZGlmZlN0cmF0ZWd5KHByZXZTdGF0ZSwgc3RhdGUpO1xuXG4gICAgICBpZiAoZGlmZi5sZW5ndGgpIHtcbiAgICAgICAgcHJldlN0YXRlID0gc3RhdGU7XG4gICAgICAgIHNlcmlhbGl6ZWRNZXNzYWdlUG9zdGVyKHtcbiAgICAgICAgICB0eXBlOiBfY29uc3RhbnRzLlBBVENIX1NUQVRFX1RZUEUsXG4gICAgICAgICAgcGF5bG9hZDogZGlmZlxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBTZW5kIHBhdGNoZWQgc3RhdGUgZG93biBjb25uZWN0ZWQgcG9ydCBvbiBldmVyeSByZWR1eCBzdG9yZSBzdGF0ZSBjaGFuZ2VcblxuXG4gICAgdmFyIHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKHBhdGNoU3RhdGUpOyAvLyB3aGVuIHRoZSBwb3J0IGRpc2Nvbm5lY3RzLCB1bnN1YnNjcmliZSB0aGUgc2VuZFN0YXRlIGxpc3RlbmVyXG5cbiAgICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcih1bnN1YnNjcmliZSk7IC8vIFNlbmQgc3RvcmUncyBpbml0aWFsIHN0YXRlIHRocm91Z2ggcG9ydFxuXG4gICAgc2VyaWFsaXplZE1lc3NhZ2VQb3N0ZXIoe1xuICAgICAgdHlwZTogX2NvbnN0YW50cy5TVEFURV9UWVBFLFxuICAgICAgcGF5bG9hZDogcHJldlN0YXRlXG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHdpdGhQYXlsb2FkRGVzZXJpYWxpemVyID0gKDAsIF9zZXJpYWxpemF0aW9uLndpdGhEZXNlcmlhbGl6ZXIpKGRlc2VyaWFsaXplcik7XG5cbiAgdmFyIHNob3VsZERlc2VyaWFsaXplID0gZnVuY3Rpb24gc2hvdWxkRGVzZXJpYWxpemUocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnR5cGUgPT09IF9jb25zdGFudHMuRElTUEFUQ0hfVFlQRSAmJiByZXF1ZXN0LnBvcnROYW1lID09PSBwb3J0TmFtZTtcbiAgfTtcbiAgLyoqXHJcbiAgICogU2V0dXAgYWN0aW9uIGhhbmRsZXJcclxuICAgKi9cblxuXG4gIHdpdGhQYXlsb2FkRGVzZXJpYWxpemVyKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2Jyb3dzZXJBUEkkcnVudGltZSRvO1xuXG4gICAgcmV0dXJuIChfYnJvd3NlckFQSSRydW50aW1lJG8gPSBicm93c2VyQVBJLnJ1bnRpbWUub25NZXNzYWdlKS5hZGRMaXN0ZW5lci5hcHBseShfYnJvd3NlckFQSSRydW50aW1lJG8sIGFyZ3VtZW50cyk7XG4gIH0pKGRpc3BhdGNoUmVzcG9uc2UsIHNob3VsZERlc2VyaWFsaXplKTtcbiAgLyoqXHJcbiAgICogU2V0dXAgZXh0ZXJuYWwgYWN0aW9uIGhhbmRsZXJcclxuICAgKi9cblxuICBpZiAoYnJvd3NlckFQSS5ydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsKSB7XG4gICAgd2l0aFBheWxvYWREZXNlcmlhbGl6ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9icm93c2VyQVBJJHJ1bnRpbWUkbzI7XG5cbiAgICAgIHJldHVybiAoX2Jyb3dzZXJBUEkkcnVudGltZSRvMiA9IGJyb3dzZXJBUEkucnVudGltZS5vbk1lc3NhZ2VFeHRlcm5hbCkuYWRkTGlzdGVuZXIuYXBwbHkoX2Jyb3dzZXJBUEkkcnVudGltZSRvMiwgYXJndW1lbnRzKTtcbiAgICB9KShkaXNwYXRjaFJlc3BvbnNlLCBzaG91bGREZXNlcmlhbGl6ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdydW50aW1lLm9uTWVzc2FnZUV4dGVybmFsIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgfVxuICAvKipcclxuICAgKiBTZXR1cCBleHRlbmRlZCBjb25uZWN0aW9uXHJcbiAgICovXG5cblxuICBicm93c2VyQVBJLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKGNvbm5lY3RTdGF0ZSk7XG4gIC8qKlxyXG4gICAqIFNldHVwIGV4dGVuZGVkIGV4dGVybmFsIGNvbm5lY3Rpb25cclxuICAgKi9cblxuICBpZiAoYnJvd3NlckFQSS5ydW50aW1lLm9uQ29ubmVjdEV4dGVybmFsKSB7XG4gICAgYnJvd3NlckFQSS5ydW50aW1lLm9uQ29ubmVjdEV4dGVybmFsLmFkZExpc3RlbmVyKGNvbm5lY3RTdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdydW50aW1lLm9uQ29ubmVjdEV4dGVybmFsIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgfVxuICAvKipcclxuICAgKiBTYWZldHkgbWVzc2FnZSB0byB0YWJzIGZvciBjb250ZW50IHNjcmlwdHNcclxuICAgKi9cblxuXG4gIGJyb3dzZXJBUEkudGFicy5xdWVyeSh7fSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHRhYnNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgIHZhciB0YWIgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgYnJvd3NlckFQSS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICAgIGFjdGlvbjogJ3N0b3JlUmVhZHknLFxuICAgICAgICAgIHBvcnROYW1lOiBwb3J0TmFtZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikgey8vIGRvIG5vdGhpbmcgLSBlcnJvcnMgY2FuIGJlIHByZXNlbnRcbiAgICAgICAgICAgIC8vIGlmIG5vIGNvbnRlbnQgc2NyaXB0IGV4aXN0cyBvbiByZWNpZXZlclxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4gIT0gbnVsbCkge1xuICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBGb3Igbm9uLXRhYiBiYXNlZFxuICAvLyBUT0RPOiBGaW5kIHVzZSBjYXNlIGZvciB0aGlzLiBPbW1pdGluZyB1bnRpbCB0aGVuLlxuICAvLyBicm93c2VyQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobnVsbCwge2FjdGlvbjogJ3N0b3JlUmVhZHknfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ3dlYmV4dC1yZWR1eCdcblxuXG4oZnVuY3Rpb24oKXtcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZTogYW55LCBzZW5kZXI6IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXIpIHtcbiAgICAgXG4gICAgICAgIGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KCdhY3Rpb24nKSkge1xuXG4gICAgICAgICAgICBsZXQgc3RvcmUgPSBuZXcgU3RvcmUoKVxuICAgICAgICAgICAgYXdhaXQgc3RvcmUucmVhZHkoKVxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1BBR0VfU09VUkNFJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgIHVybDogZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICBodG1sOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MLFxuICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIH0gXG4gICAgXG5cblxuICAgIH07XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKG9uTWVzc2FnZSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=