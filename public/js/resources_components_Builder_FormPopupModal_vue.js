(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_FormPopupModal_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/FormPopupModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/FormPopupModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FormPopupOptions",
  data: function data() {
    return {
      selectColumn: false,
      details: {},
      elements: [],
      isOpen: false,
      row_component: {}
    };
  },
  props: {
    elementData: Object,
    tab_index: String,
    row_index: Number,
    column_index: Number,
    element_index: Number,
    component_name: String,
    element: Object
  },
  created: function created() {
    console.log(this.element);
  },
  methods: {
    titleFormat: function titleFormat(title) {
      return _.startCase(_.toLower(title));
    },
    emitEvent: function emitEvent() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-close');
    },
    fillArray: function fillArray(value, times) {
      var arr = [];

      for (var i = 0; i < times; i++) {
        arr.push(value);
      }

      return arr;
    },
    addColumn: function addColumn(type) {
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

      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-add-columns', {
        column: column_element,
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: this.element_index
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-1f56e80a");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1f56e80a");

var _hoisted_1 = {
  "class": "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster",
  style: {
    "background": "rgba(0,0,0,.7)"
  }
};
var _hoisted_2 = {
  "class": "border border-teal-500 shadow-lg modal-container bg-white w-full mx-20 rounded shadow-lg z-50 overflow-y-auto"
};
var _hoisted_3 = {
  "class": "flex relative justify-between border-solid border-b-2 p-2 text-center items-center"
};
var _hoisted_4 = {
  "class": "text-xl leading-normal font-normal font-sans ml-6"
};
var _hoisted_5 = {
  "class": "flex py-1"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
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

var _hoisted_7 = {
  "class": "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded h-32"
};
var _hoisted_8 = {
  "class": " px-4 py-5 flex-auto block"
};
var _hoisted_9 = {
  "class": "overflow-y-auto scroll_bar",
  style: {
    "height": "500px"
  }
};
var _hoisted_10 = {
  "class": "h-56 m-8 rounded-b px-5 bg-gray-200 border-black"
};
var _hoisted_11 = {
  "class": "px-8 py-8"
};
var _hoisted_12 = {
  "class": "flex-col"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-xl mt-10 antialiased font-normal text-center tracking-wider text-gray-500 px-64"
}, " YOU HAVE EMPTY ELEMENT ADD YOUR FIRST COLUMN ", -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "flex mt-10 ml-64 pl-40"
};
var _hoisted_15 = {
  "class": "flex justify-between border-solid border-t-2 p-2 text-center items-center"
};
var _hoisted_16 = {
  key: 0,
  "class": "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster",
  style: {
    "background": "rgba(0,0,0,.7)"
  }
};
var _hoisted_17 = {
  "class": "border border-teal-500 shadow-lg modal-container bg-white w-1/2 mx-32 rounded shadow-lg z-50 overflow-y-auto"
};
var _hoisted_18 = {
  "class": "flex relative justify-between border-solid border-b-2 p-2 text-center items-center"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-left font-medium ml-6 text-sm antialiased leading-snug text-gray-700 tracking-normal font-sans"
}, "Add Columns", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "flex py-1"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
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

var _hoisted_22 = {
  "class": " scroll_bar"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "cursor-pointer mt-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", {
  "class": "text-blue-500 font-bold"
}, "Add One Column")], -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-1f56e80a><h5 class=\"text-blue-500 font-bold\" data-v-1f56e80a>Add Two Columns</h5><div class=\"flex mt-1\" data-v-1f56e80a><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div></div></div>", 1);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-1f56e80a><h5 class=\"text-blue-500 font-bold\" data-v-1f56e80a>Add Three Columns</h5><div class=\"flex mt-1\" data-v-1f56e80a><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div></div></div>", 1);

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

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-1f56e80a><h5 class=\"text-blue-500 font-bold\" data-v-1f56e80a>Add Four Columns</h5><div class=\"flex mt-1\" data-v-1f56e80a><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div></div></div>", 1);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
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

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\" flex-col cursor-pointer\" data-v-1f56e80a><h5 class=\"text-blue-500 font-bold\" data-v-1f56e80a>Add Six Columns</h5><div class=\"flex mt-1\" data-v-1f56e80a><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div><div class=\"bg-gray-400 h-8 p-2 rounded mx-1\" data-v-1f56e80a></div></div></div>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_column_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("column-element");

  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.titleFormat($props.elementData.title) + ' Wizard'), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.emitEvent();
    }),
    "class": "text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold"
  }, [_hoisted_6])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.elementData.options, function (item, index, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(item.attrs, {
      child_components: item.child_components,
      row_index: $props.row_index,
      column_index: $props.column_index,
      element_index: $props.element_index,
      element: $props.element,
      component_name: $props.component_name
    }), null, 16
    /* FULL_PROPS */
    , ["child_components", "row_index", "column_index", "element_index", "element", "component_name"]))]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [$props.element.attrs.child_components.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.element.attrs.child_components, function (column, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_column_element, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: 'column_index_' + index
    }, column.attrs, {
      row_index: $props.row_index,
      column_index: index,
      form_element_index: $props.element_index,
      form_column_index: $props.column_index
    }), null, 16
    /* FULL_PROPS */
    , ["row_index", "column_index", "form_element_index", "form_column_index"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $data.selectColumn = !$data.selectColumn;
    }, ["prevent"])),
    "class": "text-sm focus:outline-none focus:bg-blue-600 hover:bg-blue-500 rounded bg-red-600 px-10 py-3 font-semibold tracking-normal text-white mr-5"
  }, "Add Column")])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.emitEvent();
    }),
    "class": "ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded"
  }, "Close")]), $data.selectColumn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $data.selectColumn = false;
    }),
    "class": "text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold"
  }, [_hoisted_21])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    "class": "px-5 py-5",
    cols: "3",
    gap: "2"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1');
        }, ["prevent"])),
        "class": "flex w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 cursor-pointer hover:border-blue-500"
      }, [_hoisted_23, _hoisted_24]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/2 1/2');
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_25, _hoisted_26]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/3 1/3 1/3');
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_27, _hoisted_28]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        onClick: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $options.addColumn('1/4 1/4 1/4 1/4');
        }, ["prevent"])),
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
      }, [_hoisted_29, _hoisted_30]), _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": "flex cursor-pointer w-full bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500",
        onClick: _cache[9] || (_cache[9] = function ($event) {
          return _ctx.showModalRow = true;
        })
      }, [_hoisted_32, _hoisted_33])];
    }),
    _: 1
    /* STABLE */

  })])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
});

/***/ }),

/***/ "./resources/components/Builder/FormPopupModal.vue":
/*!*********************************************************!*\
  !*** ./resources/components/Builder/FormPopupModal.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormPopupModal_vue_vue_type_template_id_1f56e80a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true */ "./resources/components/Builder/FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true");
/* harmony import */ var _FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormPopupModal.vue?vue&type=script&lang=js */ "./resources/components/Builder/FormPopupModal.vue?vue&type=script&lang=js");



_FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _FormPopupModal_vue_vue_type_template_id_1f56e80a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-1f56e80a"
/* hot reload */
if (false) {}

_FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/FormPopupModal.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/FormPopupModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/components/Builder/FormPopupModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormPopupModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormPopupModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/FormPopupModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/components/Builder/FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormPopupModal_vue_vue_type_template_id_1f56e80a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormPopupModal_vue_vue_type_template_id_1f56e80a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/FormPopupModal.vue?vue&type=template&id=1f56e80a&scoped=true");


/***/ })

}]);