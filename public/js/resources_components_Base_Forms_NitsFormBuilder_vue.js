(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsFormBuilder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFormBuilder",
  data: function data() {
    return {
      attrs: {},
      form_title: '',
      back_api: '',
      api_url: '',
      redirect_api: ''
    };
  },
  props: {
    api_url_id: String,
    form_type: String
  },
  created: function created() {
    var _this = this;

    this.$api.get('/nits-system-api/form/' + this.api_url_id).then(function (response) {
      if (response.status === 200) {
        _this.attrs = {
          type: _this.form_type,
          api_url: response.data.data.form_api_url,
          forms: JSON.parse(response.data.data.form_data),
          back_api: response.data.data.form_cancel_or_back_url,
          redirect_api: response.data.data.form_redirect_url
        };
        console.log(JSON.parse(response.data.data.form_data));
        _this.form_title = response.data.data.form_title;
      }
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('add-form-data', function (data) {
      _this.attrs.forms[data.rowIndex].attrs.child_components[data.columnIndex].attrs.child_components[data.repeaterIndex].attrs.child_components.push(data.value);
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('delete-form-data', function (data) {
      _this.attrs.forms[data.rowIndex].attrs.child_components[data.columnIndex].attrs.child_components[data.repeaterIndex].attrs.child_components.splice(data.index, 1);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-7edf3fb0");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7edf3fb0");

var _hoisted_1 = {
  "class": "flex w-full justify-center"
};
var _hoisted_2 = {
  "class": "m-2 w-full overflow-y-auto h-screen"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  slot: "toolbox"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "p-4"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_base_portlet_one = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("base-portlet-one");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_base_portlet_one, {
    title: $data.form_title
  }, {
    "default": _withId(function () {
      return [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)("nits-form"), $data.attrs, null, 16
      /* FULL_PROPS */
      ))])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["title"])])]);
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormBuilder.vue":
/*!*************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormBuilder.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFormBuilder_vue_vue_type_template_id_7edf3fb0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true */ "./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true");
/* harmony import */ var _NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFormBuilder.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=script&lang=js");



_NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFormBuilder_vue_vue_type_template_id_7edf3fb0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-7edf3fb0"
/* hot reload */
if (false) {}

_NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsFormBuilder.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFormBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormBuilder_vue_vue_type_template_id_7edf3fb0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormBuilder_vue_vue_type_template_id_7edf3fb0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormBuilder.vue?vue&type=template&id=7edf3fb0&scoped=true");


/***/ })

}]);