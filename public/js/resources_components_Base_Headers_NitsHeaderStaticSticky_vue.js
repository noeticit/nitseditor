(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Headers_NitsHeaderStaticSticky_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsStaticStickyHeader",
  data: function data() {
    return {
      // isVisibleHeader1: false,
      // isVisibleHeader2: false,
      search: false
    };
  },
  props: {
    // heading:{
    //     type: String,
    //     required: true
    // },
    menus: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-66fe7d44");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-66fe7d44");

var _hoisted_1 = {
  "class": ""
};
var _hoisted_2 = {
  "class": "flex fixed top-0 w-full justify-between items-center shadow-lg py-4 bg-white"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "float-left border-r pr-3 "
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "h-16 w-56 mt-0 mr-5",
  src: "/nits-assets/images/nits-editor-logo.png"
})], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "border-l "
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "w-5 h-5 mt-0 cursor-pointer text-gray-800 mx-10",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
})])], -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-11/12 w-screen"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/project-assets/images/work-from-home-getty.jpg",
  "class": "w-screen h-full",
  alt: " image"
})], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_menus = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-menus");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_menus, {
    menus: $props.menus
  }, null, 8
  /* PROPS */
  , ["menus"]), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div @click=\"search = ! search\" class=\"border-l \">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <svg class=\"w-5 h-5 mt-10 cursor-pointer text-gray-800 mx-10\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 20 20\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <path fill-rule=\"evenodd\" d=\"M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    </svg>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </nav>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <div class=\"absolute flex top-0 w-full \" v-if=\"search\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <input class=\"w-full h-24 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal\" type=\"text\" placeholder=\"TYPE HERE..\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <svg @click=\"search = ! search\" class=\"h-5 w-5 mt-8 ml-4 text-black \" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 20 20\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <path fill-rule=\"evenodd\" d=\"M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            </svg>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <div class=\"absolute bottom-0 px-56 mb-16 ml-64 \">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <h3 class=\" font-black text-5xl text-white \">{{heading}}</h3>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </div>"), _hoisted_5]);
});

/***/ }),

/***/ "./resources/components/Base/Headers/NitsHeaderStaticSticky.vue":
/*!**********************************************************************!*\
  !*** ./resources/components/Base/Headers/NitsHeaderStaticSticky.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsHeaderStaticSticky_vue_vue_type_template_id_66fe7d44_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true */ "./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true");
/* harmony import */ var _NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsHeaderStaticSticky.vue?vue&type=script&lang=js */ "./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=script&lang=js");



_NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsHeaderStaticSticky_vue_vue_type_template_id_66fe7d44_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-66fe7d44"
/* hot reload */
if (false) {}

_NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Headers/NitsHeaderStaticSticky.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStaticSticky_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsHeaderStaticSticky.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStaticSticky_vue_vue_type_template_id_66fe7d44_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStaticSticky_vue_vue_type_template_id_66fe7d44_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStaticSticky.vue?vue&type=template&id=66fe7d44&scoped=true");


/***/ })

}]);