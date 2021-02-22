(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_Features_NitsFeatureFive_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureFive.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureFive.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFeatureFive",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    content: Array,
    per_row: Number
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-f091a48a");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f091a48a");

var _hoisted_1 = {
  "class": "w-full"
};
var _hoisted_2 = {
  "class": "flex-col lg:px-16 px-2 md:mt-12 mt-4"
};
var _hoisted_3 = {
  "class": "text-blue-800 tracking-wide font-bold md:text-4xl text-2xl text-center font-ubuntu"
};
var _hoisted_4 = {
  "class": "lg:px-16 md:mt-4 py-4 text-left text-center leading-snug text-gray-600 text-lg font-serif antialiased tracking-wide font-normal"
};
var _hoisted_5 = {
  "class": "flex-col px-6"
};
var _hoisted_6 = {
  "class": "py-4 text-xl font-ubuntu font-semibold text-blue-800 antialiased tracking-normal"
};
var _hoisted_7 = {
  "class": "text-left leading-normal text-gray-600 text-sm font-serif antialiased tracking-wide font-normal"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  var _component_nits_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-column");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_nits_column, {
    gap: 4,
    cols: 1
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subtitle), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
        cols: $props.per_row,
        gap: 4,
        padding: 32
      }, {
        "default": _withId(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.content, function (item, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.desc), 1
            /* TEXT */
            )]);
          }), 256
          /* UNKEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["cols"])])];
    }),
    _: 1
    /* STABLE */

  });
});

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureFive.vue":
/*!***************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureFive.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFeatureFive_vue_vue_type_template_id_f091a48a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true */ "./resources/components/App/Features/NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true");
/* harmony import */ var _NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFeatureFive.vue?vue&type=script&lang=js */ "./resources/components/App/Features/NitsFeatureFive.vue?vue&type=script&lang=js");



_NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFeatureFive_vue_vue_type_template_id_f091a48a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-f091a48a"
/* hot reload */
if (false) {}

_NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/Features/NitsFeatureFive.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureFive.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureFive.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureFive_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureFive.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureFive.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true":
/*!*********************************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureFive_vue_vue_type_template_id_f091a48a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureFive_vue_vue_type_template_id_f091a48a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureFive.vue?vue&type=template&id=f091a48a&scoped=true");


/***/ })

}]);