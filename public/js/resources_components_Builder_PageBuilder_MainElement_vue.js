(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_PageBuilder_MainElement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ColumnSettings",
  props: {
    data: Object
  },
  data: function data() {
    return {
      isOpen2: true
    };
  },
  methods: {
    titleFormat: function titleFormat(title) {
      return _.startCase(_.toLower(title));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ElementSettings",
  props: {
    data: Object
  },
  data: function data() {
    return {
      isOpen2: true
    };
  },
  methods: {
    titleFormat: function titleFormat(title) {
      return _.startCase(_.toLower(title));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ElementSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementSettings */ "./resources/components/Builder/PageBuilder/ElementSettings.vue");
/* harmony import */ var _RowSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowSettings */ "./resources/components/Builder/PageBuilder/RowSettings.vue");
/* harmony import */ var _ColumnSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColumnSettings */ "./resources/components/Builder/PageBuilder/ColumnSettings.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Main",
  components: {
    ColumnSettings: _ColumnSettings__WEBPACK_IMPORTED_MODULE_3__.default,
    RowSettings: _RowSettings__WEBPACK_IMPORTED_MODULE_2__.default,
    ElementSettings: _ElementSettings__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      selectColumn: false,
      widget: true,
      showElements: true,
      editElement: false,
      elements: [],
      heading: 'Nitseditor',
      elementSettings: {},
      showMagicHat: false
    };
  },
  methods: {
    showElement: function showElement() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-show-elements');
    },
    addRowField: function addRowField() {
      var row_element = {
        component: 'nits-row',
        title: '',
        sub_title: '',
        icon: '',
        attrs: {
          child_components: []
        }
      };
      this.elements.push(row_element);
    },
    listenToEvents: function listenToEvents() {
      var _this = this;

      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-remove-row', function (index) {
        _this.elements.splice(index, 1);
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-add-columns', function (data) {
        if (typeof _this.elements[data.index] !== 'undefined') _this.elements[data.index].attrs.child_components.push(data.column);
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-add-component', function (data) {
        _this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components.splice(data.element_index, 1, data.component);
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-individual-element-attributes', function (data) {
        if (data.component_name === 'nits-row') {
          var attributes = _this.elements[data.row_index].attrs;
          attributes[data.field] = data.value;
          _this.elements[data.row_index].attrs = attributes;
        } else if (data.component_name === 'nits-column') {
          var _attributes = _this.elements[data.row_index].attrs.child_components[data.column_index].attrs;
          _attributes[data.field] = data.value;
          _this.elements[data.row_index].attrs.child_components[data.column_index].attrs = _attributes;
        } else {
          var _attributes2 = _this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs;
          _attributes2[data.field] = data.value;
          _this.elements[data.row_index].attrs.child_components[data.column_index].attrs.child_components[data.element_index].attrs = _attributes2;
        }
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-element-settings', function (data) {
        _this.elementSettings = data;
        _this.editElement = true;
        _this.showElements = false;
        _this.heading = 'Edit ' + data.elementData.name;
      });
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('page-show-elements', function (data) {
        _this.editElement = false;
        _this.showElements = true;
        _this.heading = 'NitsEditor';
      });
    }
  },
  created: function created() {
    this.listenToEvents();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RowSettings",
  props: {
    data: Object
  },
  data: function data() {
    return {
      isOpen2: true
    };
  },
  methods: {
    titleFormat: function titleFormat(title) {
      return _.startCase(_.toLower(title));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-a409483e");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-a409483e");

var _hoisted_1 = {
  "class": "bg-white"
};
var _hoisted_2 = {
  "class": "flex flex-col mx-auto"
};
var _hoisted_3 = {
  key: 0,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 1,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1019.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199a7.6 7.6 0 110-15.2V10l6.792-3.396A7.548 7.548 0 0117.6 10a7.6 7.6 0 01-7.6 7.599z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 2,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "evenodd",
  d: "M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "text-sm font-medium text-gray-700 leading-6 py-1"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-sm font-medium leading-6 text-gray-800"
}, "Title", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0,
  "class": "bg-white"
};
var _hoisted_13 = {
  "class": "py-1 flex"
};
var _hoisted_14 = {
  "class": "flex-col mx-auto"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    cols: 3
  }, {
    "default": _withId(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.elementData.options, function (item, index, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          onClick: function onClick($event) {
            return $props.data.tab_index = index;
          },
          "class": $props.data.tab_index === index ? 'py-1 flex border-b-4 border-indigo-600' : 'py-1 flex'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [index === 'layout' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_3, [_hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 'style' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_5, [_hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 'advanced' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_7, [_hoisted_8])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.titleFormat(index)), 1
        /* TEXT */
        )])], 10
        /* CLASS, PROPS */
        , ["onClick"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.elementData.options, function (item, index, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": $props.data.tab_index === index ? 'block' : 'hidden'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      onClick: _cache[1] || (_cache[1] = function ($event) {
        return $data.isOpen2 = !$data.isOpen2;
      }),
      "class": "flex py-2 px-5 justify-between mt-4 border-b-2 bg-white"
    }, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
      "class": [{
        'rotate-180': $data.isOpen2,
        'rotate-0': !$data.isOpen2
      }, "h-4 w-4 mr-1 transition-transform duration-200 transform inline"],
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, [_hoisted_11], 2
    /* CLASS */
    ))]), $data.isOpen2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(item.attrs, {
      child_components: item.child_components,
      row_index: $props.data.row_index,
      column_index: $props.data.column_index,
      element_index: $props.data.element_index,
      element: $props.data.element,
      component_name: $props.data.component_name
    }), null, 16
    /* FULL_PROPS */
    , ["child_components", "row_index", "column_index", "element_index", "element", "component_name"]))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-f9f0b7b2");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f9f0b7b2");

var _hoisted_1 = {
  "class": "bg-white"
};
var _hoisted_2 = {
  "class": "flex flex-col mx-auto"
};
var _hoisted_3 = {
  key: 0,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 1,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1019.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199a7.6 7.6 0 110-15.2V10l6.792-3.396A7.548 7.548 0 0117.6 10a7.6 7.6 0 01-7.6 7.599z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 2,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "evenodd",
  d: "M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "text-sm font-medium text-gray-700 leading-6 py-1"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-md font-medium leading-6 text-gray-800"
}, "Settings", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0,
  "class": "bg-white"
};
var _hoisted_13 = {
  "class": "py-1 flex"
};
var _hoisted_14 = {
  "class": "flex-col mx-auto w-full"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    cols: 3
  }, {
    "default": _withId(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.elementData.options, function (item, index, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          onClick: function onClick($event) {
            return $props.data.tab_index = index;
          },
          "class": $props.data.tab_index === index ? 'py-1 flex border-b-4 border-indigo-600' : 'py-1 flex'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [index === 'general' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_3, [_hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 'style' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_5, [_hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 'advanced' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_7, [_hoisted_8])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.titleFormat(index)), 1
        /* TEXT */
        )])], 10
        /* CLASS, PROPS */
        , ["onClick"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.elementData.options, function (item, index, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": $props.data.tab_index === index ? 'block' : 'hidden'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      onClick: _cache[1] || (_cache[1] = function ($event) {
        return $data.isOpen2 = !$data.isOpen2;
      }),
      "class": "flex py-2 px-5 justify-between mt-4 border-b-2 bg-white"
    }, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
      "class": [{
        'rotate-180': $data.isOpen2,
        'rotate-0': !$data.isOpen2
      }, "h-4 w-4 mr-1 transition-transform duration-200 transform inline"],
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, [_hoisted_11], 2
    /* CLASS */
    ))]), $data.isOpen2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(item.attrs, {
      child_components: item.child_components,
      row_index: $props.data.row_index,
      column_index: $props.data.column_index,
      element_index: $props.data.element_index,
      element: $props.data.element,
      component_name: $props.data.component_name
    }), null, 16
    /* FULL_PROPS */
    , ["child_components", "row_index", "column_index", "element_index", "element", "component_name"]))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=template&id=32fa85eb&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=template&id=32fa85eb&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-32fa85eb");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-32fa85eb");

var _hoisted_1 = {
  "class": "w-full"
};
var _hoisted_2 = {
  "class": "flex"
};
var _hoisted_3 = {
  "class": "w-1/5 h-screen overflow-y-auto"
};
var _hoisted_4 = {
  "class": "flex py-3 justify-between px-4 bg-indigo-600"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 my-auto text-white",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1s-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1s.048 1 .6 1z"
})], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "text-sm font-medium text-white leading-6 my-auto"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M19 16.685S16.775 6.953 8 6.953V2.969L1 9.542l7 6.69v-4.357c4.763-.001 8.516.421 11 4.81z"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "bg-gray-200"
};
var _hoisted_9 = {
  key: 0,
  "class": "border-b-2 py-2 bg-gray-100 shadow flex border-indigo-600 justify-center text-gray-700 text-base font-medium "
};
var _hoisted_10 = {
  key: 1,
  "class": "relative px-2 my-3"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
  type: "search",
  "class": "bg-white px-3 text-xs py-2 w-full rounded border focus:outline-none focus:border-indigo-600",
  placeholder: "Search elements..."
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "w-4/5"
};
var _hoisted_13 = {
  "class": "h-12 flex pl-3 justify-between bg-gray-100 w-full"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "my-auto flex text-gray-700 "
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.004 0H5.996A1.996 1.996 0 004 1.996v16.007C4 19.106 4.894 20 5.996 20h8.007A1.997 1.997 0 0016 18.004V1.996A1.996 1.996 0 0014.004 0zM10 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1 1.25.447 1.25 1-.56 1-1.25 1zm4-3H6V2h8v14z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 0H4C2.9 0 2 .899 2 2v16c0 1.1.9 2 2 2h12c1.101 0 2-.9 2-2V2c0-1.101-.899-2-2-2zm-6 19c-.69 0-1.25-.447-1.25-1s.56-1 1.25-1c.689 0 1.25.447 1.25 1s-.561 1-1.25 1zm6-3H4V2h12v14z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M19.754 15.631L18 13V4c0-1.102-.9-2-2-2H4c-1.101 0-2 .898-2 2v9L.246 15.631C0 16 0 16.213 0 16.5v.5c0 .5.5 1 .999 1h18.002c.499 0 .999-.5.999-1v-.5c0-.287 0-.5-.246-.869zM7 16l.6-1h4.8l.6 1H7zm9-4H4V4h12v8z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 my-auto mx-3 cursor-pointer hover:text-indigo-600",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M18 1H2C.899 1 0 1.9 0 3v11c0 1.1.882 2.178 1.961 2.393l4.372.875S2.57 19 5 19h10c2.43 0-1.334-1.732-1.334-1.732l4.373-.875C19.117 16.178 20 15.1 20 14V3c0-1.1-.9-2-2-2zm0 13H2V3h16v11z"
})])], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-gray-700 my-auto hover:text-indigo-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 mx-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("title", {
  id: "simpleicons-github-icon"
}, "Undo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M.685 10h2.372v-.205c.108-4.434 3.724-7.996 8.169-7.996 4.515 0 8.174 3.672 8.174 8.201s-3.659 8.199-8.174 8.199a8.13 8.13 0 01-5.033-1.738l1.406-1.504a6.099 6.099 0 003.627 1.193c3.386 0 6.131-2.754 6.131-6.15s-2.745-6.15-6.131-6.15c-3.317 0-6.018 2.643-6.125 5.945V10h2.672l-3.494 3.894L.685 10z"
})])], -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-gray-700 my-auto hover:text-indigo-600"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 mx-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("title", {
  id: "simpleicons-github-icon"
}, "Redo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M19.315 10h-2.372v-.205c-.108-4.434-3.724-7.996-8.169-7.996C4.259 1.799.6 5.471.6 10s3.659 8.199 8.174 8.199a8.13 8.13 0 005.033-1.738l-1.406-1.504a6.099 6.099 0 01-3.627 1.193c-3.386 0-6.131-2.754-6.131-6.15s2.745-6.15 6.131-6.15c3.317 0 6.018 2.643 6.125 5.945V10h-2.672l3.494 3.894L19.315 10z"
})])], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 mx-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("title", {
  id: "simpleicons-github-icon"
}, "Setting"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 00-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 00-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 00-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 001.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 00.691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 001.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 001.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 00.692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 110-7.306 3.653 3.653 0 010 7.306z"
})], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "flex"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "md:mt-32"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "w-full flex md:px-16 justify-center md:py-12"
};
var _hoisted_22 = {
  "class": "border w-full flex flex-col border-dashed border-indigo-700 md:py-10"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-5 w-5 text-white",
  fill: "currentColor",
  viewBox: "0 0 448 448",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  d: "M408 184H272a8 8 0 01-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 01-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 018 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 018-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0"
})], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-sm mx-auto italic mt-5 font-medium text-indigo-700"
}, "Add Widget Here", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_form_elements = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("form-elements");

  var _component_element_settings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("element-settings");

  var _component_page_row_element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("page-row-element");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.heading), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.showElement && $options.showElement.apply($options, arguments);
    }, ["prevent"])),
    "class": "h-6 w-6 my-auto text-white",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [_hoisted_7]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [$data.showElements ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, " Our Elements ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showElements ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_10, [_hoisted_11])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showElements ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_form_elements, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.editElement ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_element_settings, {
    key: 3,
    data: $data.elementSettings
  }, null, 8
  /* PROPS */
  , ["data"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [_hoisted_16, _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.isOpen4 = !_ctx.isOpen4;
    }),
    "class": "text-gray-700 my-auto hover:text-indigo-600"
  }, [_hoisted_18])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.isOpen3 = !_ctx.isOpen3;
    }),
    "class": "px-5 py-2 text-sm font-medium my-auto text-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-700 hover:text-indigo-500"
  }, " Preview "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.isOpen2 = !_ctx.isOpen2;
    }),
    "class": "px-5 py-2 text-sm font-medium my-auto text-white bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-700 hover:bg-indigo-500"
  }, " Publish ")])]), _hoisted_20, $data.elements.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.elements, function (row, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_page_row_element, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: 'row_index_' + index
    }, row.attrs, {
      row_index: index
    }), null, 16
    /* FULL_PROPS */
    , ["row_index"]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.addRowField && $options.addRowField.apply($options, arguments);
    }, ["prevent"])),
    "class": "p-3 mx-auto bg-indigo-600 text-white rounded-full focus:outline-none hover:bg-indigo-400 focus:bg-indigo-700"
  }, [_hoisted_23]), _hoisted_24])])])])]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-ad6b6bf6");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-ad6b6bf6");

var _hoisted_1 = {
  "class": "bg-white"
};
var _hoisted_2 = {
  "class": "flex flex-col mx-auto"
};
var _hoisted_3 = {
  key: 0,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984 7.264 2.21 14.037 1.2 18.799l4.763-1.01 6.774-6.771 6.052-6.052c-.001 0 .216-1.083-1.228-2.527zM5.68 17.217l-1.624.35a3.71 3.71 0 00-.69-.932 3.742 3.742 0 00-.932-.691l.35-1.623.47-.469s.883.018 1.881 1.016c.997.996 1.016 1.881 1.016 1.881l-.471.468z"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 1,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M10 .4C4.698.4.4 4.698.4 10a9.6 9.6 0 1019.2-.001C19.6 4.698 15.301.4 10 .4zm0 17.199a7.6 7.6 0 110-15.2V10l6.792-3.396A7.548 7.548 0 0117.6 10a7.6 7.6 0 01-7.6 7.599z"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 2,
  "class": "h-4 w-4 mx-auto",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "evenodd",
  d: "M8 4H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm-7 7H5a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm7 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "text-sm font-medium text-gray-700 leading-6 py-1"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-sm font-medium leading-6 text-gray-800"
}, "Title", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = {
  key: 0,
  "class": "bg-white"
};
var _hoisted_13 = {
  "class": "py-1 flex"
};
var _hoisted_14 = {
  "class": "flex-col mx-auto"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    cols: 3
  }, {
    "default": _withId(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.elementData.options, function (item, index, key) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          onClick: function onClick($event) {
            return $props.data.tab_index = index;
          },
          "class": $props.data.tab_index === index ? 'py-1 flex border-b-4 border-indigo-600' : 'py-1 flex'
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [index === 'layout' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_3, [_hoisted_4])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 'style' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_5, [_hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), index === 'advanced' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_7, [_hoisted_8])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.titleFormat(index)), 1
        /* TEXT */
        )])], 10
        /* CLASS, PROPS */
        , ["onClick"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.data.elementData.options, function (item, index, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      "class": $props.data.tab_index === index ? 'block' : 'hidden'
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      onClick: _cache[1] || (_cache[1] = function ($event) {
        return $data.isOpen2 = !$data.isOpen2;
      }),
      "class": "flex py-2 px-5 justify-between mt-4 border-b-2 bg-white"
    }, [_hoisted_10, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
      "class": [{
        'rotate-180': $data.isOpen2,
        'rotate-0': !$data.isOpen2
      }, "h-4 w-4 mr-1 transition-transform duration-200 transform inline"],
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, [_hoisted_11], 2
    /* CLASS */
    ))]), $data.isOpen2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(item.attrs, {
      child_components: item.child_components,
      row_index: $props.data.row_index,
      column_index: $props.data.column_index,
      element_index: $props.data.element_index,
      element: $props.data.element,
      component_name: $props.data.component_name
    }), null, 16
    /* FULL_PROPS */
    , ["child_components", "row_index", "column_index", "element_index", "element", "component_name"]))])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
    /* CLASS */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]);
});

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/ColumnSettings.vue":
/*!*********************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/ColumnSettings.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnSettings_vue_vue_type_template_id_a409483e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true */ "./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true");
/* harmony import */ var _ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnSettings.vue?vue&type=script&lang=js */ "./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=script&lang=js");



_ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ColumnSettings_vue_vue_type_template_id_a409483e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-a409483e"
/* hot reload */
if (false) {}

_ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/PageBuilder/ColumnSettings.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/ElementSettings.vue":
/*!**********************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/ElementSettings.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ElementSettings_vue_vue_type_template_id_f9f0b7b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true */ "./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true");
/* harmony import */ var _ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementSettings.vue?vue&type=script&lang=js */ "./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=script&lang=js");



_ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _ElementSettings_vue_vue_type_template_id_f9f0b7b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-f9f0b7b2"
/* hot reload */
if (false) {}

_ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/PageBuilder/ElementSettings.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/MainElement.vue":
/*!******************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/MainElement.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainElement_vue_vue_type_template_id_32fa85eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainElement.vue?vue&type=template&id=32fa85eb&scoped=true */ "./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=template&id=32fa85eb&scoped=true");
/* harmony import */ var _MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainElement.vue?vue&type=script&lang=js */ "./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=script&lang=js");



_MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _MainElement_vue_vue_type_template_id_32fa85eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-32fa85eb"
/* hot reload */
if (false) {}

_MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/PageBuilder/MainElement.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/RowSettings.vue":
/*!******************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/RowSettings.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RowSettings_vue_vue_type_template_id_ad6b6bf6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true */ "./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true");
/* harmony import */ var _RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowSettings.vue?vue&type=script&lang=js */ "./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=script&lang=js");



_RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _RowSettings_vue_vue_type_template_id_ad6b6bf6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-ad6b6bf6"
/* hot reload */
if (false) {}

_RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/PageBuilder/RowSettings.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColumnSettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ElementSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ElementSettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainElement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowSettings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RowSettings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true":
/*!***************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnSettings_vue_vue_type_template_id_a409483e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ColumnSettings_vue_vue_type_template_id_a409483e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ColumnSettings.vue?vue&type=template&id=a409483e&scoped=true");


/***/ }),

/***/ "./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ElementSettings_vue_vue_type_template_id_f9f0b7b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ElementSettings_vue_vue_type_template_id_f9f0b7b2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/ElementSettings.vue?vue&type=template&id=f9f0b7b2&scoped=true");


/***/ }),

/***/ "./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=template&id=32fa85eb&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=template&id=32fa85eb&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainElement_vue_vue_type_template_id_32fa85eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MainElement_vue_vue_type_template_id_32fa85eb_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MainElement.vue?vue&type=template&id=32fa85eb&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/MainElement.vue?vue&type=template&id=32fa85eb&scoped=true");


/***/ }),

/***/ "./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowSettings_vue_vue_type_template_id_ad6b6bf6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RowSettings_vue_vue_type_template_id_ad6b6bf6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/PageBuilder/RowSettings.vue?vue&type=template&id=ad6b6bf6&scoped=true");


/***/ })

}]);