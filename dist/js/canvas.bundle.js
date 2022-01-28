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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\_E\\Projects\\mario-game-server-js\\src\\js\\canvas.js: Identifier 'platformSmallTall' has already been declared (6:7)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m platformSmallTall from \u001b[32m'../images/platformSmallTall.png'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[90m//! Импорт спрайта\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\u001b[36mimport\u001b[39m platformSmallTall from \u001b[32m'../images/platformSmallTall.png'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m\u001b[36mimport\u001b[39m platformSmallTall from \u001b[32m'../images/platformSmallTall.png'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m\u001b[36mimport\u001b[39m platformSmallTall from \u001b[32m'../images/platformSmallTall.png'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 | \u001b[39m\u001b[36mimport\u001b[39m platformSmallTall from \u001b[32m'../images/platformSmallTall.png'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:742:17)\n    at Parser.raiseWithData (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.raise (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:729:17)\n    at ScopeHandler.checkRedeclarationInScope (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:4769:12)\n    at ScopeHandler.declareName (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:4735:12)\n    at Parser.checkLVal (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:9207:22)\n    at Parser.parseImportSpecifierLocal (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:12460:10)\n    at Parser.maybeParseDefaultImportSpecifier (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:12466:12)\n    at Parser.parseImport (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:12437:31)\n    at Parser.parseStatementContent (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:11179:27)\n    at Parser.parseStatement (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:11656:25)\n    at Parser.parseBlockBody (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:11642:10)\n    at Parser.parseTopLevel (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:11012:10)\n    at Parser.parse (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:12637:10)\n    at parse (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\parser\\lib\\index.js:12688:38)\n    at parser (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\gensync\\index.js:254:32)\n    at D:\\_E\\Projects\\mario-game-server-js\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (D:\\_E\\Projects\\mario-game-server-js\\node_modules\\gensync\\index.js:216:11)");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map