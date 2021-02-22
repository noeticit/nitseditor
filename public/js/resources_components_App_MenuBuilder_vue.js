(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_MenuBuilder_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/MenuBuilder.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/MenuBuilder.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuedraggable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MenuBuilder",
  methods: {
    emitter: function emitter(value) {
      this.$emit("input", value);
    }
  },
  components: {
    draggable: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuedraggable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue: function realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      "default": null
    },
    list: {
      required: false,
      type: Array,
      "default": null
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-35f3584d");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-35f3584d");

var _hoisted_1 = {
  "class": "p-2 ml-2 items-center bg-white shadow rounded-lg"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component__self = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("_self");

  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_draggable, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)($options.dragOptions, {
    tag: "div",
    "class": "w-full max-w-md",
    list: $props.list,
    value: $props.value,
    onInput: $options.emitter
  }), {
    "default": _withId(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.realValue, function (el) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          "class": "p-1",
          key: el.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(el.name), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component__self, {
          "class": "mt-2 ml-4",
          list: el.elements
        }, null, 8
        /* PROPS */
        , ["list"])]);
      }), 128
      /* KEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  }, 16
  /* FULL_PROPS */
  , ["list", "value", "onInput"]);
});

/***/ }),

/***/ "./resources/components/App/MenuBuilder.vue":
/*!**************************************************!*\
  !*** ./resources/components/App/MenuBuilder.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MenuBuilder_vue_vue_type_template_id_35f3584d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true */ "./resources/components/App/MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true");
/* harmony import */ var _MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuBuilder.vue?vue&type=script&lang=js */ "./resources/components/App/MenuBuilder.vue?vue&type=script&lang=js");



_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MenuBuilder_vue_vue_type_template_id_35f3584d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-35f3584d"
/* hot reload */
if (false) {}

_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/MenuBuilder.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/MenuBuilder.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/components/App/MenuBuilder.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/MenuBuilder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/components/App/MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_template_id_35f3584d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MenuBuilder_vue_vue_type_template_id_35f3584d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/MenuBuilder.vue?vue&type=template&id=35f3584d&scoped=true");


/***/ })

}]);