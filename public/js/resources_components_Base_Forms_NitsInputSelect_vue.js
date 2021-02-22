(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsInputSelect_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsInputSelect",
  data: function data() {
    return {
      optionsData: []
    };
  },
  props: {
    styling: String,
    label: String,
    placeholder: String,
    model: String,
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
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    value: '',
    api_url: {
      type: String
    },
    query: {
      type: Object
    },
    test: '',
    // CSS attributes which will be extracted for mixin purpose
    background: {
      type: String,
      "default": 'white'
    },
    border: {
      type: String,
      "default": 'gray-300'
    },
    options_background: {
      type: String,
      "default": 'white'
    }
  },
  created: function created() {
    if (this.api_url) {
      this.fetchOptions();
    } // this.optionsData.unshift({label: 'Select One', value: ''});

  },
  methods: {
    emitEvent: function emitEvent() {
      // const data = {
      //     field: this.model,
      //     value: this.$refs.select.value
      // }
      // eventBus.$emit('nits-form-input', data)
      this.$emit('input', this.$refs.select.value);
      this.$emit('change', this.$refs.select.value);
    },
    fetchOptions: function fetchOptions() {
      var _this = this;

      this.$api.post(this.api_url, this.query).then(function (response) {
        if (response.status === 200) {
          _this.optionsData = response.data.data.map(function (a) {
            return {
              value: a.id,
              label: a.name
            };
          });
        }
      });
    }
  },
  computed: {
    optionsAll: function optionsAll() {
      if (this.api_url) {
        this.optionsData.unshift({
          label: 'Select One',
          value: ''
        });
        return this.optionsData;
      } else {
        // this.options.unshift({label: 'Select One', value: ''});
        return this.options;
      }
    },
    errorDisplay: function errorDisplay() {
      if (this.error.length) return this.error.join(', ');else return '';
    },
    queries: function queries() {
      if (this.query.length) return this.query;
    },
    customStyling: function customStyling() {
      var style = ' block appearance-none w-full border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none';
      style = this.errorDisplay ? style + ' border-red-500 focus:border-red-500' : style + ' focus:border-gray-500 focus:bg-white';
      style = style + ' bg-' + this.background;
      style = style + ' border-' + this.border; // console.log(style);

      return style;
    }
  },
  watch: {
    query: {
      handler: 'fetchOptions',
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-e2e89942");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e2e89942");

var _hoisted_1 = {
  "class": "mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2",
  "for": "grid-select"
};
var _hoisted_2 = {
  "class": "relative"
};
var _hoisted_3 = {
  value: "",
  "class": "text-gray-500"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "fill-current h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "text-xs text-gray-400 font-medium"
};
var _hoisted_6 = {
  key: 1,
  "class": "text-xs text-pink-600 font-medium"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    "class": $props.styling + ' flex-col justify-start w-full py-2'
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
    "class": $options.customStyling,
    value: $props.value,
    onChange: _cache[1] || (_cache[1] = function ($event) {
      return $options.emitEvent();
    }),
    ref: "select",
    id: "grid-select"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.placeholder), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.optionsAll, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
      value: item.value
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.label), 9
    /* TEXT, PROPS */
    , ["value"]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))], 42
  /* CLASS, PROPS, HYDRATE_EVENTS */
  , ["value"]), _hoisted_4]), $props.hint ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hint), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.errorDisplay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errorDisplay), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  );
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputSelect.vue":
/*!*************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputSelect.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsInputSelect_vue_vue_type_template_id_e2e89942_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true */ "./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true");
/* harmony import */ var _NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsInputSelect.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=script&lang=js");



_NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsInputSelect_vue_vue_type_template_id_e2e89942_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-e2e89942"
/* hot reload */
if (false) {}

_NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsInputSelect.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsInputSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputSelect_vue_vue_type_template_id_e2e89942_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputSelect_vue_vue_type_template_id_e2e89942_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputSelect.vue?vue&type=template&id=e2e89942&scoped=true");


/***/ })

}]);