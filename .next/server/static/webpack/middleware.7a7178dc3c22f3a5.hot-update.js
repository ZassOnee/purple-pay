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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\nfunction middleware(req) {\n    const token = req.cookies.get(\"auth_token\")?.value;\n    const isLoggedIn = token === \"admin123\";\n    if (req.nextUrl.pathname.startsWith(\"/admin\") && !isLoggedIn) {\n        return NextResponse.redirect(new URL(\"/login\", req.url));\n    }\n    return NextResponse.next();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sU0FBU0EsV0FBV0MsR0FBZ0I7SUFDekMsTUFBTUMsUUFBUUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZUM7SUFFN0MsTUFBTUMsYUFBYUosVUFBVTtJQUU3QixJQUFJRCxJQUFJTSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGFBQWEsQ0FBQ0gsWUFBWTtRQUM1RCxPQUFPSSxhQUFhQyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVWCxJQUFJWSxHQUFHO0lBQ3hEO0lBRUEsT0FBT0gsYUFBYUksSUFBSTtBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy5nZXQoJ2F1dGhfdG9rZW4nKT8udmFsdWVcblxuICBjb25zdCBpc0xvZ2dlZEluID0gdG9rZW4gPT09ICdhZG1pbjEyMydcblxuICBpZiAocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL2FkbWluJykgJiYgIWlzTG9nZ2VkSW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy9sb2dpbicsIHJlcS51cmwpKVxuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcbn0iXSwibmFtZXMiOlsibWlkZGxld2FyZSIsInJlcSIsInRva2VuIiwiY29va2llcyIsImdldCIsInZhbHVlIiwiaXNMb2dnZWRJbiIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJOZXh0UmVzcG9uc2UiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});