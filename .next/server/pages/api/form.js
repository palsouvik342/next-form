"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/form.js":
/*!***************************!*\
  !*** ./pages/api/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return req.status(405).json({\n            status: \"Method Not Found\"\n        });\n    }\n    try {\n        const firstName = req.body.first_name;\n        const lastName = req.body.last_name;\n        const ph_no = req.body.ph_no;\n        const email = req.body.email;\n        // console.log(firstName,lastName,ph_no,email)\n        console.log(typeof firstName, typeof lastName, typeof ph_no, typeof email);\n        const saveContact = await prisma.Contact.create({\n            data: {\n                firstName: firstName,\n                lastName: lastName,\n                ph_no: ph_no,\n                email: email\n            }\n        });\n        res.status(200).json({\n            status: \"Data Inserted Successfully\",\n            success: true\n        });\n    } catch  {\n        res.status(400).json({\n            status: \"Internal server error\"\n        });\n    }\n}; // export default function handler(req, res) {\n //     console.log(req.body);\n //     res.status(200).json({ success:true, successMessage: \"Data uploaded successfully\" , errorMessage: \"Inetrnal server error\"})\n //   }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDOUMsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFZLEVBQUU7QUFFbEIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxNQUFNLEVBQUM7UUFDbkIsT0FBT0YsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRCxNQUFNLEVBQUMsa0JBQWtCO1NBQUUsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsSUFBRztRQUNDLE1BQU1FLFNBQVMsR0FBR0wsR0FBRyxDQUFDTSxJQUFJLENBQUNDLFVBQVU7UUFDckMsTUFBTUMsUUFBUSxHQUFHUixHQUFHLENBQUNNLElBQUksQ0FBQ0csU0FBUztRQUNuQyxNQUFNQyxLQUFLLEdBQUdWLEdBQUcsQ0FBQ00sSUFBSSxDQUFDSSxLQUFLO1FBQzVCLE1BQU1DLEtBQUssR0FBR1gsR0FBRyxDQUFDTSxJQUFJLENBQUNLLEtBQUs7UUFDNUIsOENBQThDO1FBQzlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPUixTQUFTLEVBQUMsT0FBT0csUUFBUSxFQUFDLE9BQU9FLEtBQUssRUFBQyxPQUFPQyxLQUFLLENBQUM7UUFDdkUsTUFBTUcsV0FBVyxHQUFHLE1BQU1oQixNQUFNLENBQUNpQixPQUFPLENBQUNDLE1BQU0sQ0FBQztZQUFFQyxJQUFJLEVBQUU7Z0JBQ3BEWixTQUFTLEVBQUVBLFNBQVM7Z0JBQ3BCRyxRQUFRLEVBQUVBLFFBQVE7Z0JBQ2xCRSxLQUFLLEVBQUdBLEtBQUs7Z0JBQ2JDLEtBQUssRUFBR0EsS0FBSzthQUNkO1NBQ0YsQ0FBQztRQUNGVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNELE1BQU0sRUFBQyw0QkFBNEI7WUFBRWUsT0FBTyxFQUFDLElBQUk7U0FBQyxDQUFDLENBQUM7S0FDN0UsQ0FDRCxPQUFLO1FBQ0RqQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNELE1BQU0sRUFBRyx1QkFBdUI7U0FBQyxDQUFDO0tBQzNEO0NBQ0osRUFFRCw4Q0FBOEM7Q0FDOUMsNkJBQTZCO0NBQzdCLGtJQUFrSTtDQUNsSSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1mb3JtLy4vcGFnZXMvYXBpL2Zvcm0uanM/MTE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmKHJlcS5tZXRob2QhPT1cIlBPU1RcIil7XHJcbiAgICAgICAgcmV0dXJuIHJlcS5zdGF0dXMoNDA1KS5qc29uKHsgc3RhdHVzOlwiTWV0aG9kIE5vdCBGb3VuZFwiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSByZXEuYm9keS5maXJzdF9uYW1lO1xyXG4gICAgICAgIGNvbnN0IGxhc3ROYW1lID0gcmVxLmJvZHkubGFzdF9uYW1lO1xyXG4gICAgICAgIGNvbnN0IHBoX25vID0gcmVxLmJvZHkucGhfbm87XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdE5hbWUsbGFzdE5hbWUscGhfbm8sZW1haWwpXHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGZpcnN0TmFtZSx0eXBlb2YgbGFzdE5hbWUsdHlwZW9mIHBoX25vLHR5cGVvZiBlbWFpbClcclxuICAgICAgICBjb25zdCBzYXZlQ29udGFjdCA9IGF3YWl0IHByaXNtYS5Db250YWN0LmNyZWF0ZSh7IGRhdGE6IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgcGhfbm8gOiBwaF9ubyxcclxuICAgICAgICAgICAgZW1haWwgOiBlbWFpbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdGF0dXM6XCJEYXRhIEluc2VydGVkIFN1Y2Nlc3NmdWxseVwiLCBzdWNjZXNzOnRydWV9KTtcclxuICAgIH1cclxuICAgIGNhdGNoe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdGF0dXMgOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwifSlcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOnRydWUsIHN1Y2Nlc3NNZXNzYWdlOiBcIkRhdGEgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5XCIgLCBlcnJvck1lc3NhZ2U6IFwiSW5ldHJuYWwgc2VydmVyIGVycm9yXCJ9KVxyXG4vLyAgIH1cclxuICAiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJmaXJzdE5hbWUiLCJib2R5IiwiZmlyc3RfbmFtZSIsImxhc3ROYW1lIiwibGFzdF9uYW1lIiwicGhfbm8iLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJzYXZlQ29udGFjdCIsIkNvbnRhY3QiLCJjcmVhdGUiLCJkYXRhIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/form.js"));
module.exports = __webpack_exports__;

})();