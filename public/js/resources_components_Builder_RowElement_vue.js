(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_RowElement_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/RowElement.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/RowElement.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnElement */ "./resources/components/Builder/ColumnElement.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RowElement",
  components: {
    ColumnElement: _ColumnElement__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      selectColumn: false,
      isVisible: false,
      isOpen2: false,
      dataSet: {
        id: 1,
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Form Title',
                placeholder: 'Enter title',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Form SubTitle',
                placeholder: 'Enter subtitle',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-single-dropzone',
              attrs: {
                label: 'Upload image',
                model: '',
                value: ''
              }
            }]
          }
        }
      }
    };
  },
  props: {
    child_components: Array,
    row_index: Number
  },
  methods: {
    delRow: function delRow() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('remove-row', this.row_index);
    },
    cloneRow: function cloneRow() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('clone-row', this.row_index);
    },
    fillArray: function fillArray(value, times) {
      var arr = [];

      for (var i = 0; i < times; i++) {
        arr.push(value);
      }

      return arr;
    },
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
            gap: 4,
            cols: 1,
            child_components: this.fillArray(component, 1)
          };
          break;

        case '1/2 1/2':
          column_element.attrs = {
            gap: 4,
            cols: 2,
            child_components: this.fillArray(component, 2)
          };
          break;

        case '1/3 1/3 1/3':
          column_element.attrs = {
            gap: 4,
            cols: 3,
            child_components: this.fillArray(component, 3)
          };
          break;

        case '1/4 1/4 1/4 1/4':
          column_element.attrs = {
            gap: 4,
            cols: 4,
            child_components: this.fillArray(component, 4)
          };
          break;

        default:
          column_element.attrs = {
            gap: 4,
            cols: 1,
            child_components: component
          };
          break;
      }

      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('add-columns', {
        column: column_element,
        index: index
      });
    }
  },
  computed: {}
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/RowElement.vue?vue&type=template&id=f2c42af2&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/RowElement.vue?vue&type=template&id=f2c42af2&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-f2c42af2");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f2c42af2");

var _hoisted_1 = {
  "class": "w-full pb-10 bg-white",
  style: {
    "min-height": "500px"
  }
};
var _hoisted_2 = {
  "class": "relative flex flex-row mt-4 pt-4 pl-8 pr-8"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-2 mx-3 pt-1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 317.215 317.215"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  "fill-rule": "evenodd"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M309.715 1.107h-71.223a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h18.973l-57.129 57.127a7.501 7.501 0 000 10.606l14.143 14.143a7.476 7.476 0 005.304 2.197 7.482 7.482 0 005.304-2.197l57.129-57.127V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V8.607a7.502 7.502 0 00-7.501-7.5zM59.75 36.107h18.973a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H7.5a7.5 7.5 0 00-7.5 7.5V79.83a7.5 7.5 0 007.5 7.5h20a7.5 7.5 0 007.5-7.5V60.857l57.125 57.126a7.483 7.483 0 005.305 2.197 7.486 7.486 0 005.305-2.197l14.142-14.143a7.5 7.5 0 000-10.606L59.75 36.107zM102.734 199.233a7.503 7.503 0 00-10.609 0L35 256.358v-18.974a7.5 7.5 0 00-7.5-7.5h-20a7.5 7.5 0 00-7.5 7.5v71.223a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-20a7.5 7.5 0 00-7.5-7.5H59.75l57.126-57.125a7.5 7.5 0 000-10.606l-14.142-14.143zM309.715 229.885h-20a7.5 7.5 0 00-7.5 7.5v18.976l-57.13-57.127a7.5 7.5 0 00-10.606 0l-14.143 14.143a7.501 7.501 0 00.001 10.606l57.128 57.125h-18.973a7.5 7.5 0 00-7.5 7.5v20a7.5 7.5 0 007.5 7.5h71.223a7.5 7.5 0 007.5-7.5v-71.223a7.5 7.5 0 00-7.5-7.5z"
})])])], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 my-2 mx-3 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})], -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 0,
  "class": "main-modal fixed w-full h-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster",
  style: {
    "background": "rgba(0,0,0,.7)"
  }
};
var _hoisted_6 = {
  "class": "border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-20 rounded shadow-lg z-50"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex bg-blue-600 p-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "text-white text-xl leading-normal font-normal font-sans"
}, "Form Settings")], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "mt-4",
  style: {
    "height": "400px"
  }
};
var _hoisted_9 = {
  "class": " px-4 py-5 flex-auto"
};
var _hoisted_10 = {
  "class": "flex items-center mt-5 justify-end p-6 border-t border-solid border-gray-300 bg-gray-300 rounded-b"
};
var _hoisted_11 = {
  "class": "flex absolute right-0 mr-8"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-3 mx-4",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"
})])], -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-3 mx-4 font-bold",
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

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-4 my-3 mx-4 font-bold",
  fill: "currentColor",
  viewBox: "0 0 512.001 512.001",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"
})], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "h-56 ml-8 mr-8 rounded-b px-5 bg-gray-200 border-black"
};
var _hoisted_16 = {
  "class": "px-8 py-8"
};
var _hoisted_17 = {
  "class": "flex-col"
};
var _hoisted_18 = {
  key: 0,
  "class": "text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64"
};
var _hoisted_19 = {
  "class": "flex mt-10 ml-64 pl-40"
};
var _hoisted_20 = {
  key: 0,
  "class": "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster",
  style: {
    "background": "rgba(0,0,0,.7)"
  }
};
var _hoisted_21 = {
  "class": "border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-32 rounded shadow-lg z-50 overflow-y-auto"
};
var _hoisted_22 = {
  "class": "flex relative justify-between border-solid border-b-2 p-2 text-center items-center"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-left font-medium ml-6 text-sm antialiased leading-snug text-gray-700 tracking-normal font-sans"
}, "Add Columns", -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "flex py-1"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 my-2 mx-2 font-bold",
  fill: "currentColor",
  viewBox: "0 0 512.001 512.001",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"
})], -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": " scroll_bar"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 m-2 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <div class=\"h-8 mx-4 mt-1 bg-white \"></div>")], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cursor-pointer mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", {
  "class": "text-blue-500 font-bold"
}, "Add One Column")], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 m-2 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <div class=\"h-8 mx-4 mt-1 bg-white \"></div>")], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-f2c42af2><h5 class=\"text-blue-500 font-bold\" data-v-f2c42af2>Add Two Columns</h5><div class=\"flex mt-1\" data-v-f2c42af2><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div></div></div>", 1);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-10 w-10 p mt-3 mr-2 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 m-2 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <div class=\"h-8 mx-4 mt-1 bg-white \"></div>")], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-f2c42af2><h5 class=\"text-blue-500 font-bold\" data-v-f2c42af2>Add Three Columns</h5><div class=\"flex mt-1\" data-v-f2c42af2><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div></div></div>", 1);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 m-2 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <div class=\"h-8 mx-4 mt-1 bg-white \"></div>")], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-f2c42af2><h5 class=\"text-blue-500 font-bold\" data-v-f2c42af2>Add Four Columns</h5><div class=\"flex mt-1\" data-v-f2c42af2><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div></div></div>", 1);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 m-2 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <div class=\"h-8 mx-4 mt-1 bg-white \"></div>")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": " flex-col cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", {
  "class": "text-blue-500 font-bold"
}, "Add Five Columns"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex mt-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-gray-400 h-8 p-2 rounded mx-1"
})])])], -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-10 w-10 p mt-3 mr-3 inline-block cursor-pointer bg-blue-600 font-bold text-white rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 m-2 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <div class=\"h-8 mx-4 mt-1 bg-white \"></div>")], -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-f2c42af2><h5 class=\"text-blue-500 font-bold\" data-v-f2c42af2>Add Six Columns</h5><div class=\"flex mt-1\" data-v-f2c42af2><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-f2c42af2></div></div></div>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_column_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("column-element");

  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.isOpen2 = !$data.isOpen2;
    }),
    "class": "h-10 w-12 text-gray-600 rounded-t hover:text-gray-400 inline-block bg-gray-300 font-bold"
  }, [_hoisted_4]), $data.isOpen2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.dataSet.options, function (item, index, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(item.attrs, {
      child_components: item.child_components,
      row_index: $props.row_index
    }), null, 16
    /* FULL_PROPS */
    , ["child_components", "row_index"]))]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.isOpen2 = !$data.isOpen2;
    }),
    "class": "text-white bg-gray-500 bg-transparent border border-solid border-gray-500 active:bg-gray-500 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1",
    type: "button",
    style: {
      "transition": "all .15s ease"
    }
  }, " Close ")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.cloneRow();
    }),
    "class": "bg-gray-300 mr-1 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600"
  }, [_hoisted_13]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.delRow();
    }),
    "class": "bg-gray-300 rounded-t h-10 w-12 hover:text-gray-400 text-gray-600"
  }, [_hoisted_14])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [$props.child_components.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.child_components, function (column, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_column_element, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: 'column_index_' + index
    }, column.attrs, {
      row_index: $props.row_index,
      column_index: index
    }), null, 16
    /* FULL_PROPS */
    , ["row_index", "column_index"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [!$props.child_components.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_18, " YOU HAVE EMPTY ELEMENT ADD YOUR FIRST COLUMN ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.selectColumn = !$data.selectColumn;
    }, ["prevent"])),
    "class": "text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-red-600 px-10 py-3 font-semibold tracking-normal text-white mr-5"
  }, "Add Column")])])])])]), $data.selectColumn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[6] || (_cache[6] = function ($event) {
      return $data.selectColumn = false;
    }),
    "class": "text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold"
  }, [_hoisted_25])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    "class": "px-5 py-5",
    cols: "3",
    gap: "2"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1', $props.row_index);
        }, ["prevent"])),
        "class": "flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500"
      }, [_hoisted_27, _hoisted_28]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/2 1/2', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_29, _hoisted_30]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/3 1/3 1/3', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_31, _hoisted_32]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/4 1/4 1/4 1/4', $props.row_index);
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_33, _hoisted_34]), _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500",
        onClick: _cache[11] || (_cache[11] = function ($event) {
          return _ctx.showModalRow = true;
        })
      }, [_hoisted_36, _hoisted_37])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div class=\"flex justify-between border-solid border-t-2 p-2 text-center items-center\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <button @click=\"isOpen2 = ! isOpen2\" class=\"ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded\">Close</button>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                </div>")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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

/***/ "./resources/components/Builder/RowElement.vue":
/*!*****************************************************!*\
  !*** ./resources/components/Builder/RowElement.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RowElement_vue_vue_type_template_id_f2c42af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowElement.vue?vue&type=template&id=f2c42af2&scoped=true */ "./resources/components/Builder/RowElement.vue?vue&type=template&id=f2c42af2&scoped=true");
/* harmony import */ var _RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowElement.vue?vue&type=script&lang=js */ "./resources/components/Builder/RowElement.vue?vue&type=script&lang=js");



_RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _RowElement_vue_vue_type_template_id_f2c42af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-f2c42af2"
/* hot reload */
if (false) {}

_RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/RowElement.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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

/***/ "./resources/components/Builder/RowElement.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/components/Builder/RowElement.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RowElement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/RowElement.vue?vue&type=script&lang=js");
 

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


/***/ }),

/***/ "./resources/components/Builder/RowElement.vue?vue&type=template&id=f2c42af2&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/components/Builder/RowElement.vue?vue&type=template&id=f2c42af2&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowElement_vue_vue_type_template_id_f2c42af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowElement_vue_vue_type_template_id_f2c42af2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RowElement.vue?vue&type=template&id=f2c42af2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/RowElement.vue?vue&type=template&id=f2c42af2&scoped=true");


/***/ })

}]);