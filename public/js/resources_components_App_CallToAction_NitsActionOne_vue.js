(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_CallToAction_NitsActionOne_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsActionOne",
  props: {
    title: {
      type: String,
      required: true
    },
    btn: String,
    url: String
  },
  methods: {
    goTo: function goTo() {
      this.$router.push({
        name: this.url,
        params: {}
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-b502c256");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-b502c256");

var _hoisted_1 = {
  "class": "w-full shadow-sm bg-transparent h-32 bg-blue-800 mt-24"
};
var _hoisted_2 = {
  "class": "flex justify-between container mx-auto py-6 mb-12"
};
var _hoisted_3 = {
  "class": "leading-tight lg:my-2 my-1 lg:ml-48 ml-6 font-bold font-ubuntu text-white lg:text-5xl text-2xl "
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.goTo && $options.goTo.apply($options, arguments);
    }, ["prevent"])),
    "class": "flex rounded md:mr-32 my-auto lg:px-10 px-2 lg:py-2 py-1 mr-8 focus:outline-none font-medium font-ubuntu lg:text-sm text-xs text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.btn), 1
  /* TEXT */
  )])]);
});

/***/ }),

/***/ "./resources/components/App/CallToAction/NitsActionOne.vue":
/*!*****************************************************************!*\
  !*** ./resources/components/App/CallToAction/NitsActionOne.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsActionOne_vue_vue_type_template_id_b502c256_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true */ "./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true");
/* harmony import */ var _NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsActionOne.vue?vue&type=script&lang=js */ "./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=script&lang=js");



_NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsActionOne_vue_vue_type_template_id_b502c256_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-b502c256"
/* hot reload */
if (false) {}

_NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/CallToAction/NitsActionOne.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsActionOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsActionOne.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsActionOne_vue_vue_type_template_id_b502c256_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsActionOne_vue_vue_type_template_id_b502c256_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/CallToAction/NitsActionOne.vue?vue&type=template&id=b502c256&scoped=true");


/***/ })

}]);