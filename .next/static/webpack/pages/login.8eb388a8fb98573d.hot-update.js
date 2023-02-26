"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/hooks/auth.js":
/*!***************************!*\
  !*** ./src/hooks/auth.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": function() { return /* binding */ useAuth; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst useAuth = function() {\n    let { middleware , redirectIfAuthenticated  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    Axios.defaults.headers.common[\"X-CSRF-TOKEN\"] = token;\n    const { data: user , error , mutate  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"/api/user\", ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/api/user\").then((res)=>res.data).catch((error)=>{\n            if (error.response.status !== 409) throw error;\n            router.push(\"/verify-email\");\n        }));\n    const csrf = ()=>_lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"sanctum/csrf-cookie\");\n    const register = async (param)=>{\n        let { setErrors , ...props } = param;\n        await csrf();\n        setErrors([]);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/register\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const login = async (param)=>{\n        let { setErrors , setStatus , ...props } = param;\n        await csrf();\n        setErrors([]);\n        setStatus(null);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/login\", props).then(()=>mutate()).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const forgotPassword = async (param)=>{\n        let { setErrors , setStatus , email  } = param;\n        await csrf();\n        setErrors([]);\n        setStatus(null);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/forgot-password\", {\n            email\n        }).then((response)=>setStatus(response.data.status)).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const resetPassword = async (param)=>{\n        let { setErrors , setStatus , ...props } = param;\n        await csrf();\n        setErrors([]);\n        setStatus(null);\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/reset-password\", {\n            token: router.query.token,\n            ...props\n        }).then((response)=>router.push(\"/login?reset=\" + btoa(response.data.status))).catch((error)=>{\n            if (error.response.status !== 422) throw error;\n            setErrors(error.response.data.errors);\n        });\n    };\n    const resendEmailVerification = (param)=>{\n        let { setStatus  } = param;\n        _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/email/verification-notification\").then((response)=>setStatus(response.data.status));\n    };\n    const logout = async ()=>{\n        if (!error) {\n            await _lib_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/logout\").then(()=>mutate());\n        }\n        window.location.pathname = \"/login\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (middleware === \"guest\" && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated);\n        if (window.location.pathname === \"/verify-email\" && (user === null || user === void 0 ? void 0 : user.email_verified_at)) router.push(redirectIfAuthenticated);\n        if (middleware === \"auth\" && error) logout();\n    }, [\n        user,\n        error\n    ]);\n    return {\n        user,\n        register,\n        login,\n        forgotPassword,\n        resetPassword,\n        resendEmailVerification,\n        logout\n    };\n};\n_s(useAuth, \"QrngQhUX+oNO2ZfGlm2KWW2pov8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBd0I7QUFDTztBQUNFO0FBQ007QUFFaEMsTUFBTUksVUFBVSxXQUFrRDtRQUFqRCxFQUFFQyxXQUFVLEVBQUVDLHdCQUF1QixFQUFFLG9FQUFHLENBQUM7O0lBQy9ELE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QkssTUFBTUMsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQyxlQUFlLEdBQUdDO0lBRWhELE1BQU0sRUFBRUMsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRSxHQUFHaEIsK0NBQU1BLENBQUMsYUFBYSxJQUN0REMsc0RBQ1EsQ0FBQyxhQUNKaUIsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJTixJQUFJLEVBQ3BCTyxLQUFLLENBQUNMLENBQUFBLFFBQVM7WUFDWixJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QLE1BQUs7WUFFOUNSLE9BQU9nQixJQUFJLENBQUM7UUFDaEI7SUFHUixNQUFNQyxPQUFPLElBQU12QixzREFBUyxDQUFDO0lBRTdCLE1BQU13QixXQUFXLGVBQW1DO1lBQTVCLEVBQUVDLFVBQVMsRUFBRSxHQUFHQyxPQUFPO1FBQzNDLE1BQU1IO1FBRU5FLFVBQVUsRUFBRTtRQUVaekIsdURBQ1MsQ0FBQyxhQUFhMEIsT0FDbEJULElBQUksQ0FBQyxJQUFNRixVQUNYSSxLQUFLLENBQUNMLENBQUFBLFFBQVM7WUFDWixJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QLE1BQUs7WUFFOUNXLFVBQVVYLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDZ0IsTUFBTTtRQUN4QztJQUNSO0lBRUEsTUFBTUMsUUFBUSxlQUE4QztZQUF2QyxFQUFFSixVQUFTLEVBQUVLLFVBQVMsRUFBRSxHQUFHSixPQUFPO1FBQ25ELE1BQU1IO1FBRU5FLFVBQVUsRUFBRTtRQUNaSyxVQUFVLElBQUk7UUFFZDlCLHVEQUNTLENBQUMsVUFBVTBCLE9BQ2ZULElBQUksQ0FBQyxJQUFNRixVQUNYSSxLQUFLLENBQUNMLENBQUFBLFFBQVM7WUFDWixJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QLE1BQUs7WUFFOUNXLFVBQVVYLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDZ0IsTUFBTTtRQUN4QztJQUNSO0lBRUEsTUFBTUcsaUJBQWlCLGVBQTJDO1lBQXBDLEVBQUVOLFVBQVMsRUFBRUssVUFBUyxFQUFFRSxNQUFLLEVBQUU7UUFDekQsTUFBTVQ7UUFFTkUsVUFBVSxFQUFFO1FBQ1pLLFVBQVUsSUFBSTtRQUVkOUIsdURBQ1MsQ0FBQyxvQkFBb0I7WUFBRWdDO1FBQU0sR0FDakNmLElBQUksQ0FBQ0csQ0FBQUEsV0FBWVUsVUFBVVYsU0FBU1IsSUFBSSxDQUFDUyxNQUFNLEdBQy9DRixLQUFLLENBQUNMLENBQUFBLFFBQVM7WUFDWixJQUFJQSxNQUFNTSxRQUFRLENBQUNDLE1BQU0sS0FBSyxLQUFLLE1BQU1QLE1BQUs7WUFFOUNXLFVBQVVYLE1BQU1NLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDZ0IsTUFBTTtRQUN4QztJQUNSO0lBRUEsTUFBTUssZ0JBQWdCLGVBQThDO1lBQXZDLEVBQUVSLFVBQVMsRUFBRUssVUFBUyxFQUFFLEdBQUdKLE9BQU87UUFDM0QsTUFBTUg7UUFFTkUsVUFBVSxFQUFFO1FBQ1pLLFVBQVUsSUFBSTtRQUVkOUIsdURBQ1MsQ0FBQyxtQkFBbUI7WUFBRVcsT0FBT0wsT0FBTzRCLEtBQUssQ0FBQ3ZCLEtBQUs7WUFBRSxHQUFHZSxLQUFLO1FBQUMsR0FDOURULElBQUksQ0FBQ0csQ0FBQUEsV0FDRmQsT0FBT2dCLElBQUksQ0FBQyxrQkFBa0JhLEtBQUtmLFNBQVNSLElBQUksQ0FBQ1MsTUFBTSxJQUUxREYsS0FBSyxDQUFDTCxDQUFBQSxRQUFTO1lBQ1osSUFBSUEsTUFBTU0sUUFBUSxDQUFDQyxNQUFNLEtBQUssS0FBSyxNQUFNUCxNQUFLO1lBRTlDVyxVQUFVWCxNQUFNTSxRQUFRLENBQUNSLElBQUksQ0FBQ2dCLE1BQU07UUFDeEM7SUFDUjtJQUVBLE1BQU1RLDBCQUEwQixTQUFtQjtZQUFsQixFQUFFTixVQUFTLEVBQUU7UUFDMUM5Qix1REFDUyxDQUFDLG9DQUNMaUIsSUFBSSxDQUFDRyxDQUFBQSxXQUFZVSxVQUFVVixTQUFTUixJQUFJLENBQUNTLE1BQU07SUFDeEQ7SUFFQSxNQUFNZ0IsU0FBUyxVQUFZO1FBQ3ZCLElBQUksQ0FBQ3ZCLE9BQU87WUFDUixNQUFNZCx1REFBVSxDQUFDLFdBQVdpQixJQUFJLENBQUMsSUFBTUY7UUFDM0MsQ0FBQztRQUVEdUIsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLEdBQUc7SUFDL0I7SUFFQXZDLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJRyxlQUFlLFdBQVdDLDJCQUEyQlEsTUFDckRQLE9BQU9nQixJQUFJLENBQUNqQjtRQUNoQixJQUNJaUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLEtBQUssbUJBQzdCM0IsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNNEIsaUJBQWlCLEdBRXZCbkMsT0FBT2dCLElBQUksQ0FBQ2pCO1FBQ2hCLElBQUlELGVBQWUsVUFBVVUsT0FBT3VCO0lBQ3hDLEdBQUc7UUFBQ3hCO1FBQU1DO0tBQU07SUFFaEIsT0FBTztRQUNIRDtRQUNBVztRQUNBSztRQUNBRTtRQUNBRTtRQUNBRztRQUNBQztJQUNKO0FBQ0osRUFBQztHQXBIWWxDOztRQUNNRCxrREFBU0E7UUFHY0gsMkNBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy9hdXRoLmpzPzRhYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9saWIvYXhpb3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICh7IG1pZGRsZXdhcmUsIHJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIH0gPSB7fSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW5cblxuICAgIGNvbnN0IHsgZGF0YTogdXNlciwgZXJyb3IsIG11dGF0ZSB9ID0gdXNlU1dSKCcvYXBpL3VzZXInLCAoKSA9PlxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLmdldCgnL2FwaS91c2VyJylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDA5KSB0aHJvdyBlcnJvclxuXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy92ZXJpZnktZW1haWwnKVxuICAgICAgICAgICAgfSksXG4gICAgKVxuXG4gICAgY29uc3QgY3NyZiA9ICgpID0+IGF4aW9zLmdldCgnc2FuY3R1bS9jc3JmLWNvb2tpZScpXG5cbiAgICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IHNldEVycm9ycywgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICBhd2FpdCBjc3JmKClcblxuICAgICAgICBzZXRFcnJvcnMoW10pXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KCcvcmVnaXN0ZXInLCBwcm9wcylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IG11dGF0ZSgpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzICE9PSA0MjIpIHRocm93IGVycm9yXG5cbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgc2V0RXJyb3JzLCBzZXRTdGF0dXMsIC4uLnByb3BzIH0pID0+IHtcbiAgICAgICAgYXdhaXQgY3NyZigpXG5cbiAgICAgICAgc2V0RXJyb3JzKFtdKVxuICAgICAgICBzZXRTdGF0dXMobnVsbClcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoJy9sb2dpbicsIHByb3BzKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbXV0YXRlKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQyMikgdGhyb3cgZXJyb3JcblxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBhc3luYyAoeyBzZXRFcnJvcnMsIHNldFN0YXR1cywgZW1haWwgfSkgPT4ge1xuICAgICAgICBhd2FpdCBjc3JmKClcblxuICAgICAgICBzZXRFcnJvcnMoW10pXG4gICAgICAgIHNldFN0YXR1cyhudWxsKVxuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCgnL2ZvcmdvdC1wYXNzd29yZCcsIHsgZW1haWwgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLnN0YXR1cykpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgIT09IDQyMikgdGhyb3cgZXJyb3JcblxuICAgICAgICAgICAgICAgIHNldEVycm9ycyhlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycylcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jICh7IHNldEVycm9ycywgc2V0U3RhdHVzLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgICAgIGF3YWl0IGNzcmYoKVxuXG4gICAgICAgIHNldEVycm9ycyhbXSlcbiAgICAgICAgc2V0U3RhdHVzKG51bGwpXG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5wb3N0KCcvcmVzZXQtcGFzc3dvcmQnLCB7IHRva2VuOiByb3V0ZXIucXVlcnkudG9rZW4sIC4uLnByb3BzIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PlxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4/cmVzZXQ9JyArIGJ0b2EocmVzcG9uc2UuZGF0YS5zdGF0dXMpKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyAhPT0gNDIyKSB0aHJvdyBlcnJvclxuXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZXNlbmRFbWFpbFZlcmlmaWNhdGlvbiA9ICh7IHNldFN0YXR1cyB9KSA9PiB7XG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCgnL2VtYWlsL3ZlcmlmaWNhdGlvbi1ub3RpZmljYXRpb24nKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0U3RhdHVzKHJlc3BvbnNlLmRhdGEuc3RhdHVzKSlcbiAgICB9XG5cbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dvdXQnKS50aGVuKCgpID0+IG11dGF0ZSgpKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID0gJy9sb2dpbidcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobWlkZGxld2FyZSA9PT0gJ2d1ZXN0JyAmJiByZWRpcmVjdElmQXV0aGVudGljYXRlZCAmJiB1c2VyKVxuICAgICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3RJZkF1dGhlbnRpY2F0ZWQpXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy92ZXJpZnktZW1haWwnICYmXG4gICAgICAgICAgICB1c2VyPy5lbWFpbF92ZXJpZmllZF9hdFxuICAgICAgICApXG4gICAgICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdElmQXV0aGVudGljYXRlZClcbiAgICAgICAgaWYgKG1pZGRsZXdhcmUgPT09ICdhdXRoJyAmJiBlcnJvcikgbG9nb3V0KClcbiAgICB9LCBbdXNlciwgZXJyb3JdKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgcmVnaXN0ZXIsXG4gICAgICAgIGxvZ2luLFxuICAgICAgICBmb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgcmVzZXRQYXNzd29yZCxcbiAgICAgICAgcmVzZW5kRW1haWxWZXJpZmljYXRpb24sXG4gICAgICAgIGxvZ291dCxcbiAgICB9XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VBdXRoIiwibWlkZGxld2FyZSIsInJlZGlyZWN0SWZBdXRoZW50aWNhdGVkIiwicm91dGVyIiwiQXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJ0b2tlbiIsImRhdGEiLCJ1c2VyIiwiZXJyb3IiLCJtdXRhdGUiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZXNwb25zZSIsInN0YXR1cyIsInB1c2giLCJjc3JmIiwicmVnaXN0ZXIiLCJzZXRFcnJvcnMiLCJwcm9wcyIsInBvc3QiLCJlcnJvcnMiLCJsb2dpbiIsInNldFN0YXR1cyIsImZvcmdvdFBhc3N3b3JkIiwiZW1haWwiLCJyZXNldFBhc3N3b3JkIiwicXVlcnkiLCJidG9hIiwicmVzZW5kRW1haWxWZXJpZmljYXRpb24iLCJsb2dvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZW1haWxfdmVyaWZpZWRfYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/auth.js\n"));

/***/ })

});