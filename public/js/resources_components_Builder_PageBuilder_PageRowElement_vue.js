(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_PageBuilder_PageRowElement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PageRowElement",
  props: {
    child_components: Array,
    row_index: Number
  },
  data: function data() {
    return {
      selectColumn: false,
      widget: true
    };
  },
  methods: {
    addColumn: function addColumn(type, index) {
      this.selectColumn = false;
      var column_element = {
        component: 'nits-column',
        attrs: {
          child_components: []
        }
      };
      var component = {
        component: null,
        attrs: {
          child_components: []
        }
      };

      switch (type) {
        case '1':
          column_element.attrs = {
            gap: 8,
            cols: 1,
            child_components: this.fillArray(component, 1)
          };
          break;

        case '1/2 1/2':
          column_element.attrs = {
            gap: 8,
            cols: 2,
            child_components: this.fillArray(component, 2)
          };
          break;

        case '1/3 1/3 1/3':
          column_element.attrs = {
            gap: 8,
            cols: 3,
            child_components: this.fillArray(component, 3)
          };
          break;

        case '1/4 1/4 1/4 1/4':
          column_element.attrs = {
            gap: 8,
            cols: 4,
            child_components: this.fillArray(component, 4)
          };
          break;

        default:
          column_element.attrs = {
            gap: 8,
            cols: 1,
            child_components: component
          };
          break;
      }

      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-add-columns', {
        column: column_element,
        index: index
      });
    },
    fillArray: function fillArray(value, times) {
      var arr = [];

      for (var i = 0; i < times; i++) {
        arr.push(value);
      }

      return arr;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-4c2bfdf9");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-4c2bfdf9");

var _hoisted_1 = {
  "class": ""
};
var _hoisted_2 = {
  key: 1,
  "class": "w-full flex md:px-12 justify-center md:py-16"
};
var _hoisted_3 = {
  "class": "border w-full flex flex-col border-dashed border-indigo-700 md:py-4"
};
var _hoisted_4 = {
  "class": "flex md:ml-56 md:px-64"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-sm mx-auto italic font-medium text-indigo-700"
}, "Select Your Structure", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex mt-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
})])], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": " flex-col cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex mt-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
})])], -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-4c2bfdf9><div class=\"flex mt-1\" data-v-4c2bfdf9><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div></div></div>", 1);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-4c2bfdf9><div class=\"flex mt-1\" data-v-4c2bfdf9><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div></div></div>", 1);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-4c2bfdf9><div class=\"flex mt-1\" data-v-4c2bfdf9><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div></div></div>", 1);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-4c2bfdf9><div class=\"flex mt-1\" data-v-4c2bfdf9><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-4c2bfdf9></div></div></div>", 1);

var _hoisted_13 = {
  key: 2,
  "class": "w-full flex md:px-16 justify-center md:py-12"
};
var _hoisted_14 = {
  "class": "border w-full flex flex-col border-dashed border-indigo-700 md:py-10"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
}, null, -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-sm mx-auto italic mt-5 font-medium text-indigo-700"
}, "Add Column", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_page_column_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("page-column-element");

  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [$props.child_components.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.child_components, function (column, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_page_column_element, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: 'column_index_' + index
    }, column.attrs, {
      row_index: $props.row_index,
      column_index: index
    }), null, 16
    /* FULL_PROPS */
    , ["row_index", "column_index"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.selectColumn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.selectColumn = false;
    }),
    "class": "text-gray-600 ml-16  hover:bg-white  mr-3 focus:outline-none active:shadow-none font-bold"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.widget = true;
    }),
    "class": "h-4 w-4 my-2 mx-2 font-bold",
    fill: "currentColor",
    viewBox: "0 0 512.001 512.001",
    xmlns: "http://www.w3.org/2000/svg"
  }, [_hoisted_5]))])]), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    "class": "px-5 py-5",
    cols: 3,
    gap: 2
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1', $props.row_index);
        }, ["prevent"])),
        "class": "flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500"
      }, [_hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/2 1/2', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/3 1/3 1/3', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_9]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/4 1/4 1/4 1/4', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/5 1/5 1/5 1/5 1/5', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/6 1/6 1/6 1/6 1/6 1/6', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_12])];
    }),
    _: 1
    /* STABLE */

  })])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.widget ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.selectColumn = !$data.selectColumn;
    }, ["prevent"])),
    "class": "p-3 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $data.widget = false;
    }),
    "class": "h-5 w-5 text-white",
    fill: "currentColor",
    viewBox: "0 0 448 448",
    xmlns: "http://www.w3.org/2000/svg"
  }, [_hoisted_15]))]), _hoisted_16])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
});

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageRowElement.vue":
/*!*********************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageRowElement.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageRowElement_vue_vue_type_template_id_4c2bfdf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true */ "./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true");
/* harmony import */ var _PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageRowElement.vue?vue&type=script&lang=js */ "./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=script&lang=js");



_PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PageRowElement_vue_vue_type_template_id_4c2bfdf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-4c2bfdf9"
/* hot reload */
if (false) {}

_PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/PageBuilder/PageRowElement.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageRowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageRowElement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageRowElement_vue_vue_type_template_id_4c2bfdf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageRowElement_vue_vue_type_template_id_4c2bfdf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageRowElement.vue?vue&type=template&id=4c2bfdf9&scoped=true");


/***/ })

}]);