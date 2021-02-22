(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_PageBuilder_PageColumnElement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-swatches'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PageColumnElement",
  components: {
    VSwatches: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-swatches'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      loading: false,
      isVisible: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      color: '#1CA085',
      shapes: [{
        id: 1,
        style: 'bg-red-500 mt-4 ',
        svg: 'M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'
      }, {
        id: 2,
        style: 'bg-indigo-400 mt-4 ',
        svg: 'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
      }, {
        id: 3,
        style: 'bg-teal-500 mt-4 ',
        svg: 'M1200 0L0 0 598.97 114.72 1200 0z'
      }, {
        id: 4,
        style: 'bg-orange-500 mt-4 ',
        svg: 'M1200 120L0 16.48 0 0 1200 0 1200 120z'
      }, {
        id: 5,
        style: 'bg-green-500 mt-4 ',
        svg: 'M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z'
      } // {id : 6 , style: 'bg-gray-800  mt-4 ', svg: 'M1200 0L0 0 892.25 114.72 1200 0z'},
      // {id : 7 , style: 'bg-yellow-500  mt-4 ', svg: 'M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'},
      // {id : 8 , style: 'bg-pink-400  mt-4 ', svg: 'M649.97 0L550.03 0 599.91 54.12 649.97 0z'},
      ],
      active: 0
    };
  },
  props: {
    cols: Number,
    gap: Number,
    row_index: Number,
    column_index: Number,
    child_components: Array
  },
  methods: {
    editRow: function editRow() {
      var data = {
        tab_index: "general",
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: this.row_index,
        component_name: 'nits-row',
        element: {
          attrs: {
            child_components: []
          },
          component: 'nits-row'
        },
        elementData: {
          name: 'Row',
          component_name: 'nits-row',
          accordion: 'General Elements',
          options: {
            general: {
              component: 'nits-form-page-builder',
              attrs: {
                grid: {
                  cols: 1,
                  gap: 4
                }
              },
              child_components: [{
                component: 'nits-input-text',
                attrs: {
                  label: 'Gap',
                  placeholder: 'Enter Gap',
                  model: 'gap',
                  value: ''
                }
              }]
            },
            style: {
              component: 'nits-form-page-builder',
              attrs: {
                grid: {
                  cols: 1,
                  gap: 4
                }
              },
              child_components: [{
                component: 'nits-input-select',
                attrs: {
                  label: 'Select Your Background',
                  placeholder: 'Select one',
                  options: [{
                    label: 'Colour',
                    value: 'color'
                  }, {
                    label: 'Shape',
                    value: 'shape'
                  }, {
                    label: 'Image',
                    value: 'image'
                  }],
                  model: 'background',
                  value: ''
                }
              }, {
                component: 'nits-button',
                attrs: {
                  text: 'Edit',
                  model: 'text',
                  value: ''
                }
              }]
            },
            advanced: {}
          }
        }
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-element-settings', data);
    },
    delRow: function delRow() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-remove-row', this.row_index);
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-show-elements');
    },
    emitEvent: function emitEvent() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-show-elements');
    },
    emitSave: function emitSave() {
      this.details = {
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: '',
        field: 'background',
        value: this.color,
        component_name: 'nits-row'
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-individual-element-attributes', this.details);
    }
  },
  created: function created() {
    var _this = this;

    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-individual-element-attributes', function (data) {
      if (data.field === 'background') {
        _this.isOpen2 = false;
        _this.isOpen3 = false;
        _this.isOpen4 = false;

        switch (data.value) {
          case 'color':
            _this.isOpen3 = true;
            break;

          case 'shape':
            _this.isOpen2 = true;
            break;

          case 'image':
            _this.isOpen4 = true;
            break;

          default:
            '';
        }
      }
    });
  },
  computed: {
    svg: function svg() {
      return this.shapes[this.active].svg;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=template&id=52825542&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=template&id=52825542&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-52825542");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-52825542");

var _hoisted_1 = {
  "class": ""
};
var _hoisted_2 = {
  key: 0,
  "class": "flex justify center"
};
var _hoisted_3 = {
  "class": "my-auto mx-auto w-1/4 bg-white rounded-md shadow-lg"
};
var _hoisted_4 = {
  "class": "bg-indigo-600 flex justify-between h-12 rounded-t-md"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto text-sm font-medium text-white px-5"
}, "Your Heading", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex px-1"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "rounded-full my-auto p-2 bg-indigo-400 text-white hover:bg-gray-400  focus:outline-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 01-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"
})])], -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3",
  fill: "currentColor",
  viewBox: "0 0 365.696 365.696",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
})], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "bg-white h-2 relative cursor-pointer shadow-lg w-full mt-5"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  "class": "w-full",
  src: "/nits-assets/images/page_shape.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "custom-shape-divider-top"
};
var _hoisted_12 = {
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1200 120",
  preserveAspectRatio: "none"
};
var _hoisted_13 = {
  "class": "px-5"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto mt-48 text-md font-medium px-2"
}, "Select Your Shape", -1
/* HOISTED */
);

var _hoisted_15 = {
  "data-name": "Layer 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1200 120",
  preserveAspectRatio: "none"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-white py-5 border-t border-gray-200 rounded-b-md flex mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2"
}, "Apply")], -1
/* HOISTED */
);

var _hoisted_17 = {
  key: 1,
  "class": "flex justify center"
};
var _hoisted_18 = {
  "class": "my-auto mx-auto w-1/4 bg-white rounded-md shadow-lg"
};
var _hoisted_19 = {
  "class": "bg-indigo-600 flex justify-between h-12 rounded-t-md"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto text-sm font-medium text-white px-5"
}, "Your Heading", -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "flex px-1"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "rounded-full my-auto p-2 bg-indigo-400 text-white hover:bg-gray-400  focus:outline-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 01-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"
})])], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3",
  fill: "currentColor",
  viewBox: "0 0 365.696 365.696",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
})], -1
/* HOISTED */
);

var _hoisted_24 = {
  "class": "px-5"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto text-sm mt-4 font-medium px-2"
}, "Choose your Background Color", -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "bg-white relative cursor-pointer px-2 w-full mt-4"
};
var _hoisted_27 = {
  "class": "bg-white py-5 border-t border-gray-200 rounded-b-md flex mt-4"
};
var _hoisted_28 = {
  key: 2,
  "class": "flex justify center"
};
var _hoisted_29 = {
  "class": "my-auto mx-auto w-1/4 bg-white rounded-md shadow-lg"
};
var _hoisted_30 = {
  "class": "bg-indigo-600 flex justify-between h-12 rounded-t-md"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto text-sm font-medium text-white px-5"
}, "Your Heading", -1
/* HOISTED */
);

var _hoisted_32 = {
  "class": "flex px-1"
};

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "rounded-full my-auto p-2 bg-indigo-400 text-white hover:bg-gray-400  focus:outline-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.09 2.233C12.95 1.411 11.518 1 9.794 1c-1.311 0-2.418.289-3.317.868C5.05 2.774 4.292 4.313 4.2 6.483h3.307c0-.633.185-1.24.553-1.828.369-.586.995-.879 1.878-.879.898 0 1.517.238 1.854.713.339.477.508 1.004.508 1.582 0 .504-.252.965-.557 1.383a2.88 2.88 0 01-.661.674s-1.793 1.15-2.58 2.074c-.456.535-.497 1.338-.538 2.488-.002.082.029.252.315.252h2.571c.256 0 .309-.189.312-.274.018-.418.064-.633.141-.875.144-.457.538-.855.979-1.199l.91-.627c.822-.641 1.477-1.166 1.767-1.578.494-.676.842-1.51.842-2.5-.001-1.615-.571-2.832-1.711-3.656zM9.741 14.924c-1.139-.035-2.079.754-2.115 1.99-.035 1.234.858 2.051 1.998 2.084 1.189.035 2.104-.727 2.141-1.963.034-1.236-.834-2.076-2.024-2.111z"
})])], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3",
  fill: "currentColor",
  viewBox: "0 0 365.696 365.696",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0"
})], -1
/* HOISTED */
);

var _hoisted_35 = {
  "class": "px-5"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto text-sm mt-4 font-medium px-2"
}, "Upload Your Image", -1
/* HOISTED */
);

var _hoisted_37 = {
  "class": "bg-white relative cursor-pointer px-2 w-full mt-4"
};

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "bg-white py-5 border-t border-gray-200 rounded-b-md flex mt-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2"
}, "Apply")], -1
/* HOISTED */
);

var _hoisted_39 = {
  "class": "w-full flex md:px-16 justify-center md:py-12"
};

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"
})])], -1
/* HOISTED */
);

var _hoisted_41 = {
  "class": "bg-gray-200 p-2 absolute top-0 mr-8 right-0"
};

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"
})], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_swatches = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-swatches");

  var _component_nits_single_dropzone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-single-dropzone");

  var _component_page_builder_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("page-builder-element");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [$data.isOpen2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.isOpen2 = !$data.isOpen2;
    }),
    "class": "rounded-full my-auto p-2 bg-indigo-400 text-white mx-3 hover:bg-red-600 focus:outline-none"
  }, [_hoisted_8])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
    d: $options.svg,
    "class": "shape-fill"
  }, null, 8
  /* PROPS */
  , ["d"])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.shapes, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": [item.style, "h-10 relative cursor-pointer shadow-lg w-full"]
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      onMouseover: function onMouseover($event) {
        return $data.active = index;
      },
      "class": "custom-shape-divider-top"
    }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      d: item.svg,
      "class": "shape-fill"
    }, null, 8
    /* PROPS */
    , ["d"])]))], 40
    /* PROPS, HYDRATE_EVENTS */
    , ["onMouseover"])], 2
    /* CLASS */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), _hoisted_16])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isOpen3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [_hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.isOpen3 = !$data.isOpen3;
    }),
    "class": "rounded-full my-auto p-2 bg-indigo-400 text-white mx-3 hover:bg-red-600 focus:outline-none"
  }, [_hoisted_23])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_swatches, {
    modelValue: $data.color,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.color = $event;
    }),
    "popover-x": "left",
    swatches: "text-advanced",
    inline: ""
  }, null, 8
  /* PROPS */
  , ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.emitSave && $options.emitSave.apply($options, arguments);
    }, ["prevent"])),
    "class": "bg-indigo-500 rounded-full text-sm text-white font-medium mx-auto px-8 py-2"
  }, "Apply")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isOpen4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $data.isOpen4 = !$data.isOpen4;
    }),
    "class": "rounded-full my-auto p-2 bg-indigo-400 text-white mx-3 hover:bg-red-600 focus:outline-none"
  }, [_hoisted_34])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_35, [_hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_single_dropzone, {
    placeholder: "Select JPG/PNG Format"
  })])]), _hoisted_38])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onMouseover: _cache[8] || (_cache[8] = function ($event) {
      return $data.isVisible = true;
    }),
    onMouseleave: _cache[9] || (_cache[9] = function ($event) {
      return $data.isVisible = false;
    }),
    onKeydown: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function ($event) {
      return $data.isVisible = !$data.isVisible;
    }, ["enter"])),
    "class": "border relative w-full flex flex-col border border-4 border-white border-dashed hover:border-blue-500 md:py-12"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    "class": 'px-8 grid ' + ($props.cols ? 'grid-cols-' + $props.cols + ' ' : ' ') + ($props.gap ? 'gap-' + $props.gap + ' ' : ' ')
  }, [!$data.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.child_components, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_page_builder_element, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: 'element_index_' + index
    }, item.attrs, {
      attrs: item.attrs,
      component: item.component,
      row_index: $props.row_index,
      column_index: $props.column_index,
      element_index: index,
      element: item
    }), null, 16
    /* FULL_PROPS */
    , ["attrs", "component", "row_index", "column_index", "element_index", "element"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.delRow();
    }, ["prevent"])),
    "class": "bg-gray-200 p-1 absolute top-0 right-0"
  }, [_hoisted_40], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isVisible]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.editRow && $options.editRow.apply($options, arguments);
    }, ["prevent"])),
    href: "#"
  }, [_hoisted_42])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isVisible]])], 32
  /* HYDRATE_EVENTS */
  )])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.custom-shape-divider-top[data-v-52825542] {\r\n        width: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        overflow: hidden;\r\n        line-height: 0;\n}\n.custom-shape-divider-top svg[data-v-52825542] {\r\n        position: relative;\r\n        display: block;\r\n        width: calc(100% + 1.3px);\r\n        height: auto;\n}\n.custom-shape-divider-top .shape-fill[data-v-52825542] {\r\n        fill: white;\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_style_index_0_id_52825542_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_style_index_0_id_52825542_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_style_index_0_id_52825542_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageColumnElement.vue":
/*!************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageColumnElement.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageColumnElement_vue_vue_type_template_id_52825542_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageColumnElement.vue?vue&type=template&id=52825542&scoped=true */ "./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=template&id=52825542&scoped=true");
/* harmony import */ var _PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageColumnElement.vue?vue&type=script&lang=js */ "./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=script&lang=js");
/* harmony import */ var _PageColumnElement_vue_vue_type_style_index_0_id_52825542_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css */ "./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css");




;
_PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _PageColumnElement_vue_vue_type_template_id_52825542_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-52825542"
/* hot reload */
if (false) {}

_PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/PageBuilder/PageColumnElement.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageColumnElement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=template&id=52825542&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=template&id=52825542&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_template_id_52825542_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_template_id_52825542_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageColumnElement.vue?vue&type=template&id=52825542&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=template&id=52825542&scoped=true");


/***/ }),

/***/ "./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PageColumnElement_vue_vue_type_style_index_0_id_52825542_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/PageColumnElement.vue?vue&type=style&index=0&id=52825542&scoped=true&lang=css");


/***/ })

}]);