(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsInputText_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputText.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputText.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import {eventBus} from "../../../Models/_events";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsInputText",
  props: {
    stylish: String,
    label: String,
    hint: {
      type: String,
      "default": function _default() {
        return '';
      }
    },
    error: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    type: {
      type: String,
      "default": 'text'
    },
    background: {
      type: String,
      "default": 'white'
    },
    border: {
      type: String,
      "default": 'gray-300'
    },
    model: String,
    placeholder: String,
    value: '',
    hidden: Boolean
  },
  methods: {
    emitEvent: function emitEvent() {
      this.$emit('input', this.$refs.input.value);
    }
  },
  computed: {
    errorDisplay: function errorDisplay() {
      if (this.error.length) return this.error.join(', ');else return '';
    },
    customStyling: function customStyling() {
      var style = 'block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none';
      style = this.errorDisplay ? style + ' border-red-500 focus:border-red-500' : style + ' focus:border-gray-500 focus:bg-white';
      style = style + ' bg-' + this.background;
      style = style + ' border-' + this.border;
      console.log(style);
      return style;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0ed98c60");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0ed98c60");

var _hoisted_1 = {
  key: 0,
  "class": "flex-col justify-start py-2 w-full"
};
var _hoisted_2 = {
  "class": "mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2"
};
var _hoisted_3 = {
  key: 0,
  "class": "text-xs text-gray-400 font-medium"
};
var _hoisted_4 = {
  key: 1,
  "class": "text-xs text-pink-600 font-medium"
};
var _hoisted_5 = {
  key: 1
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": $props.stylish
  }, [!$props.hidden ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "class": $options.customStyling,
    type: $props.type,
    placeholder: $props.placeholder,
    value: $props.value,
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return $options.emitEvent();
    }),
    ref: "input"
  }, null, 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , ["type", "placeholder", "value"]), $props.hint ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hint), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.errorDisplay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errorDisplay), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: $props.type,
    value: $props.value,
    ref: "input",
    hideen: $props.hidden
  }, null, 8
  /* PROPS */
  , ["type", "value", "hideen"])]))], 2
  /* CLASS */
  );
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputText.vue":
/*!***********************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputText.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsInputText_vue_vue_type_template_id_0ed98c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true */ "./resources/components/Base/Forms/NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true");
/* harmony import */ var _NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsInputText.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsInputText.vue?vue&type=script&lang=js");



_NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsInputText_vue_vue_type_template_id_0ed98c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0ed98c60"
/* hot reload */
if (false) {}

_NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsInputText.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputText.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputText.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsInputText.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputText.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputText_vue_vue_type_template_id_0ed98c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputText_vue_vue_type_template_id_0ed98c60_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputText.vue?vue&type=template&id=0ed98c60&scoped=true");


/***/ })

}]);