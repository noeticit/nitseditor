(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsInputMultiSelect_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-virtual-scroller'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: '',
      dropdown: false,
      optionsData: [],
      selectedElements: [],
      apiResponse: [],
      postData: {},
      loading: false
    };
  },
  components: {
    RecycleScroller: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-virtual-scroller'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  created: function created() {
    var _this = this;

    this.initState();
    this.debounceFunctionCalled = _.debounce(function () {
      _this.fetchOptions();
    }, 1000, {
      'leading': false,
      'trailing': true
    });
  },
  mounted: function mounted() {
    this.selectedElement();
  },
  methods: {
    selectElement: function selectElement(item) {
      var _this2 = this;

      if (this.multiple) {
        var index = _.findIndex(this.selectedElements, function (o) {
          return o[_this2.trackBy] === item[_this2.trackBy];
        });

        if (index > -1) this.selectedElements.splice(index, 1);else {
          this.selectedElements.push(item);
        }
      } else if (!this.multiple && this.selectedElements.length < 1) {
        this.selectedElements.push(item);
        this.dropdown = false;
      } else return this.selectedElements;

      var data = {
        field: this.model,
        value: this.selectedElements
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('nits-form-input', data);
      this.$emit('input', this.selectedElements);
    },
    selectedElement: function selectedElement() {
      if (typeof this.value !== 'undefined' || this.value !== '') this.selectedElements = this.value;else this.selectedElements = [];
    },
    selected: function selected(item) {
      var _this3 = this;

      var index = _.findIndex(this.selectedElements, function (o) {
        return o[_this3.trackBy] === item[_this3.trackBy];
      });

      return index <= -1;
    },
    initState: function initState() {
      if (this.api_init) this.fetchOptions();
    },
    optionPropsChanged: function optionPropsChanged() {
      this.optionsData = this.options;
    },
    fetchOptions: function fetchOptions() {
      var _this4 = this;

      this.loading = true;

      if (typeof this.query === '' || typeof this.query === "undefined") {
        this.postData = {
          search: this.search
        };
      } else {
        var data = {
          search: this.search
        };
        this.postData = Object.assign(this.query, data);
      }

      this.$api.post(this.api_url, this.postData).then(function (response) {
        if (response.status === 200) {
          _this4.optionsData = response.data.data;
          _this4.loading = false;
        }
      });
    },
    removeElement: function removeElement(item) {
      var _this5 = this;

      if (this.multiple) {
        var index = _.findIndex(this.selectedElements, function (o) {
          return o[_this5.trackBy] === item[_this5.trackBy];
        });

        this.selectedElements.splice(index, 1);
      } else this.selectedElements = [];

      this.$emit('input', this.selectedElements);
    }
  },
  name: "NitsInputMultiSelect",
  props: {
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
    trackBy: {
      type: String,
      "default": 'value'
    },
    optionLabel: {
      type: String,
      "default": 'label'
    },
    searchable: {
      type: Boolean,
      "default": false
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    value: Array,
    api_url: {
      type: String
    },
    api_init: {
      type: Boolean
    },
    query: {
      type: Object,
      "default": function _default() {}
    }
  },
  computed: {
    errorDisplay: function errorDisplay() {
      if (this.error.length) return this.error.join(', ');else return '';
    },
    computedOptions: function computedOptions() {
      var _this6 = this;

      var searchTerm = this.search.toLowerCase();
      if (this.searchable && searchTerm) this.$emit('searchQuery', this.search);
      if (this.optionsData.length) return this.optionsData.filter(function (item) {
        return item[_this6.optionLabel].toLowerCase().includes(searchTerm);
      });else return this.options.filter(function (item) {
        return item[_this6.optionLabel].toLowerCase().includes(searchTerm);
      });
    },
    checkValue: function checkValue() {
      return _.isArray(this.selectedElements);
    },
    queries: function queries() {
      return this.query;
    }
  },
  watch: {
    query: {
      handler: 'fetchOptions',
      deep: true
    },
    'search': function search(newValue, oldValue) {
      this.debounceFunctionCalled();
    },
    // search: {
    //   handler: 'fetchOptions',
    // },
    options: {
      handler: 'optionPropsChanged'
    },
    value: {
      handler: 'selectedElement'
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-46fbf67c");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-46fbf67c");

var _hoisted_1 = {
  "class": "flex-col justify-start w-full py-2"
};
var _hoisted_2 = {
  "class": "mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2"
};
var _hoisted_3 = {
  "class": "relative"
};
var _hoisted_4 = {
  "class": "multi-select-input-tag z-10",
  style: {
    "display": "inline-flex",
    "line-height": "1",
    "align-items": "center",
    "font-size": ".875rem",
    "background-color": "#bcdefa",
    "color": "#1c3d5a",
    "border-radius": ".25rem",
    "user-select": "none",
    "padding": ".25rem",
    "margin-right": ".5rem",
    "margin-bottom": ".25rem"
  }
};
var _hoisted_5 = {
  key: 1,
  "class": "multi-select-input-tag z-10",
  style: {
    "display": "inline-flex",
    "line-height": "1",
    "align-items": "center",
    "font-size": ".875rem",
    "background-color": "#bcdefa",
    "color": "#1c3d5a",
    "border-radius": ".25rem",
    "user-select": "none",
    "padding": ".25rem",
    "margin-right": ".5rem",
    "margin-bottom": ".25rem"
  }
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "fill-current h-4 w-4",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
})])], -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 1,
  ref: "dropdown",
  "class": "absolute z-50 right-0 mt-2 py-2 w-full bg-white rounded-lg shadow-xl overflow-y-auto h-48"
};
var _hoisted_8 = {
  key: 2,
  "class": "text-xs text-gray-400 font-medium"
};
var _hoisted_9 = {
  key: 3,
  "class": "text-xs text-pink-600 font-medium"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RecycleScroller = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RecycleScroller");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": ["block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex flex-wrap", $options.errorDisplay ? 'border-red-500 focus:bg-white focus:border-red-500' : '']
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "class": "flex w-full px-2 outline-none pt-1 pb-1 ml-2 mb-1 bg-gray-200 text-gray-700 z-10",
    placeholder: $props.placeholder,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.dropdown = true;
    }, ["prevent"])),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.search = $event;
    }),
    ref: "input_select"
  }, null, 8
  /* PROPS */
  , ["placeholder"]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.search]]), $options.checkValue ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.selectedElements, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[$props.optionLabel]), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "button",
      "class": "multi-select-input-remove",
      style: {
        "color": "#2779bd",
        "font-size": "1.125rem",
        "line-height": "1"
      },
      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.removeElement(item);
      }, ["prevent"])
    }, "×", 8
    /* PROPS */
    , ["onClick"])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.removeElement($data.selectedElements);
    }, ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.item[$props.optionLabel]), 1
  /* TEXT */
  )]))], 2
  /* CLASS */
  ), _hoisted_6, $data.dropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 0,
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.dropdown = false;
    }, ["prevent"])),
    "class": "fixed top-0 left-0 bottom-0 right-0 h-full w-full"
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.dropdown ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_7, [$options.computedOptions.length && !$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RecycleScroller, {
    key: 0,
    "class": "scroller",
    items: $options.computedOptions,
    "item-size": 10,
    "key-field": $props.trackBy,
    prerender: 10
  }, {
    "default": _withId(function (_ref) {
      var item = _ref.item;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", {
        "class": ["block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white z-10", $options.selected(item) ? '' : 'bg-gray-200'],
        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.selectElement(item);
        }, ["prevent"])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item[$props.optionLabel]), 11
      /* TEXT, CLASS, PROPS */
      , ["onClick"])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["items", "key-field"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.hint ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hint), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.errorDisplay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errorDisplay), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputMultiSelect.vue":
/*!******************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputMultiSelect.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsInputMultiSelect_vue_vue_type_template_id_46fbf67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true */ "./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true");
/* harmony import */ var _NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsInputMultiSelect.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=script&lang=js");



_NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsInputMultiSelect_vue_vue_type_template_id_46fbf67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-46fbf67c"
/* hot reload */
if (false) {}

_NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsInputMultiSelect.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputMultiSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsInputMultiSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputMultiSelect_vue_vue_type_template_id_46fbf67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsInputMultiSelect_vue_vue_type_template_id_46fbf67c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsInputMultiSelect.vue?vue&type=template&id=46fbf67c&scoped=true");


/***/ })

}]);