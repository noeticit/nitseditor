(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsFormPageBuilder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFormPageBuilder",
  data: function data() {
    return {
      errors: {},
      loading: false,
      details: {}
    };
  },
  props: {
    forms: Object,
    api_url: String,
    redirect: String,
    back_url: String,
    grid: Object,
    child_components: Array,
    attrs: Object,
    elementData: Object,
    row_index: Number,
    column_index: Number,
    element_index: Number,
    component_name: String,
    element: Object
  },
  created: function created() {},
  methods: {
    listensToEvent: function listensToEvent(field, index) {
      this.details = {
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: this.element_index,
        field: field,
        value: this.child_components[index].attrs.value,
        component_name: this.component_name
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-individual-element-attributes', this.details);
      var valueDetails = {
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: this.element_index,
        field: 'value',
        value: '',
        component_name: this.component_name
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-individual-element-attributes', valueDetails);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-484adf21");

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, $props.grid, {
    "default": _withId(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.child_components, function (item, index, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
          key: key
        }, item.attrs, {
          modelValue: item.attrs.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return item.attrs.value = $event;
          },
          error: $data.errors[key],
          onInput: function onInput($event) {
            return $options.listensToEvent(item.attrs.model, index);
          }
        }), null, 16
        /* FULL_PROPS */
        , ["modelValue", "onUpdate:modelValue", "error", "onInput"]);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 16
  /* FULL_PROPS */
  )]);
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormPageBuilder.vue":
/*!*****************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormPageBuilder.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFormPageBuilder_vue_vue_type_template_id_484adf21_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true */ "./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true");
/* harmony import */ var _NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFormPageBuilder.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=script&lang=js");



_NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFormPageBuilder_vue_vue_type_template_id_484adf21_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-484adf21"
/* hot reload */
if (false) {}

_NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsFormPageBuilder.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormPageBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFormPageBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true":
/*!***********************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormPageBuilder_vue_vue_type_template_id_484adf21_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormPageBuilder_vue_vue_type_template_id_484adf21_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormPageBuilder.vue?vue&type=template&id=484adf21&scoped=true");


/***/ })

}]);