(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_ColumnElement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/ColumnElement.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/ColumnElement.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColumnElement",
  data: function data() {
    return {
      loading: false
    };
  },
  props: {
    cols: Number,
    gap: Number,
    row_index: Number,
    column_index: Number,
    form_element_index: Number,
    form_column_index: Number,
    child_components: Array
  },
  methods: {
    removeRow: function removeRow() {
      var data = {
        row: this.row_index,
        column: this.column_index
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('remove-row-column', data);
    },
    cloneRow: function cloneRow() {
      var data = {
        row: this.row_index,
        column: this.column_index
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('clone-row-column', data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/ColumnElement.vue?vue&type=template&id=2635f611&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/ColumnElement.vue?vue&type=template&id=2635f611&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-2635f611");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-2635f611");

var _hoisted_1 = {
  "class": " h-auto pb-5 ml-8 mr-8 rounded-b px-5 bg-gray-200 border-black"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 my-2 mx-3 font-bold",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M20.5 24h-12A2.503 2.503 0 016 21.5v-15C6 5.121 7.122 4 8.5 4h12C21.878 4 23 5.121 23 6.5v15c0 1.379-1.122 2.5-2.5 2.5zM8.5 5C7.673 5 7 5.673 7 6.5v15c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M4.5 21h-1A2.503 2.503 0 011 18.5v-16C1 1.121 2.122 0 3.5 0h12C16.878 0 18 1.121 18 2.5a.5.5 0 01-1 0c0-.827-.673-1.5-1.5-1.5h-12C2.673 1 2 1.673 2 2.5v16c0 .827.673 1.5 1.5 1.5h1a.5.5 0 010 1zM18.5 17h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 21h-8a.5.5 0 010-1h8a.5.5 0 010 1z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M18.5 13h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18.5 9h-8a.5.5 0 010-1h8a.5.5 0 010 1z"
})], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 my-2 mx-3 font-bold",
  fill: "currentColor",
  viewBox: "0 0 512.001 512.001",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"
})], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_builder_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("builder-element");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.cloneRow();
    }),
    "class": "text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold"
  }, [_hoisted_2]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.removeRow();
    }),
    "class": "text-gray-600 hover:text-gray-400 inline-block bg-gray-200 font-bold"
  }, [_hoisted_3]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": 'grid ' + ($props.cols ? 'grid-cols-' + $props.cols + ' ' : ' ') + ($props.gap ? 'gap-' + $props.gap + ' ' : ' ')
  }, [!$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.child_components, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_builder_element, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: 'element_index_' + index
    }, item.attrs, {
      attrs: item.attrs,
      component: item.component,
      row_index: $props.row_index,
      column_index: $props.column_index,
      form_column_index: $props.form_column_index,
      form_element_index: $props.form_element_index,
      element_index: index,
      element: item,
      "class": "border bg-white"
    }), null, 16
    /* FULL_PROPS */
    , ["attrs", "component", "row_index", "column_index", "form_column_index", "form_element_index", "element_index", "element"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )])]);
});

/***/ }),

/***/ "./resources/components/Builder/ColumnElement.vue":
/*!********************************************************!*\
  !*** ./resources/components/Builder/ColumnElement.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnElement_vue_vue_type_template_id_2635f611_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnElement.vue?vue&type=template&id=2635f611&scoped=true */ "./resources/components/Builder/ColumnElement.vue?vue&type=template&id=2635f611&scoped=true");
/* harmony import */ var _ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnElement.vue?vue&type=script&lang=js */ "./resources/components/Builder/ColumnElement.vue?vue&type=script&lang=js");



_ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ColumnElement_vue_vue_type_template_id_2635f611_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-2635f611"
/* hot reload */
if (false) {}

_ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/ColumnElement.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/ColumnElement.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/components/Builder/ColumnElement.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColumnElement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/ColumnElement.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/ColumnElement.vue?vue&type=template&id=2635f611&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/components/Builder/ColumnElement.vue?vue&type=template&id=2635f611&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnElement_vue_vue_type_template_id_2635f611_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnElement_vue_vue_type_template_id_2635f611_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColumnElement.vue?vue&type=template&id=2635f611&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/ColumnElement.vue?vue&type=template&id=2635f611&scoped=true");


/***/ })

}]);