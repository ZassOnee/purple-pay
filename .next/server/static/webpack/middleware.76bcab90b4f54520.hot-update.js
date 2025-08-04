"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req) {\n    const token = req.cookies.get(\"auth_token\")?.value;\n    const isLoggedIn = token === \"admin123\";\n    if (req.nextUrl.pathname.startsWith(\"/admin\") && !isLoggedIn) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", req.url));\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1RDtBQUVoRCxTQUFTQyxXQUFXQyxHQUFnQjtJQUN6QyxNQUFNQyxRQUFRRCxJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlQztJQUU3QyxNQUFNQyxhQUFhSixVQUFVO0lBRTdCLElBQUlELElBQUlNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsYUFBYSxDQUFDSCxZQUFZO1FBQzVELE9BQU9QLGtGQUFZQSxDQUFDVyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVVixJQUFJVyxHQUFHO0lBQ3hEO0lBRUEsT0FBT2Isa0ZBQVlBLENBQUNjLElBQUk7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmdldCgnYXV0aF90b2tlbicpPy52YWx1ZVxuXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSB0b2tlbiA9PT0gJ2FkbWluMTIzJ1xuXG4gIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKCcvYWRtaW4nKSAmJiAhaXNMb2dnZWRJbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL2xvZ2luJywgcmVxLnVybCkpXG4gIH1cblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwidG9rZW4iLCJjb29raWVzIiwiZ2V0IiwidmFsdWUiLCJpc0xvZ2dlZEluIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/exports/next-response.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__.NextResponse)\n/* harmony export */ });\n/* harmony import */ var _spec_extension_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spec-extension/response */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js\");\n// This file is for modularized imports for next/server to get fully-treeshaking.\n //# sourceMappingURL=next-response.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRkFBaUY7QUFDWixDQUVyRSx5Q0FBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9leHBvcnRzL25leHQtcmVzcG9uc2UuanM/NjQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZm9yIG1vZHVsYXJpemVkIGltcG9ydHMgZm9yIG5leHQvc2VydmVyIHRvIGdldCBmdWxseS10cmVlc2hha2luZy5cbmV4cG9ydCB7IE5leHRSZXNwb25zZSBhcyBkZWZhdWx0IH0gZnJvbSBcIi4uL3NwZWMtZXh0ZW5zaW9uL3Jlc3BvbnNlXCI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtcmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\n");

/***/ })

});