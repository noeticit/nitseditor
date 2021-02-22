(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_Features_NitsFeatureTwo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFeatureTwo",
  props: {
    title: {
      type: String,
      required: true
    },
    content: Array
  },
  data: function data() {
    return {
      active: 0,
      timer: ''
    };
  },
  created: function created() {
    var _this = this;

    this.timer = setInterval(function () {
      if (_this.active === 2) _this.active = 0;else _this.active++;
    }, 3000);
  },
  computed: {
    logo: function logo() {
      return this.content[this.active].image;
    }
  },
  destroy: function destroy() {
    clearInterval(this.timer);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-08a34f53");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-08a34f53");

var _hoisted_1 = {
  "class": "w-full"
};
var _hoisted_2 = {
  "class": "text-center md:text-4xl text-2xl font-bold text-blue-800 lg:px-32 lg:mt-16 mb-12"
};
var _hoisted_3 = {
  "class": "lg:px-48 tracking-wide font-ubuntu"
};
var _hoisted_4 = {
  "class": "flex-col"
};
var _hoisted_5 = {
  "class": "flex-col"
};
var _hoisted_6 = {
  "class": "h-full lg:mt-8 sm:w-32"
};
var _hoisted_7 = {
  "class": "flex-col lg:mt-12 text-left"
};
var _hoisted_8 = {
  "class": "text-xl text-gray-800 font-semibold font-ubuntu"
};
var _hoisted_9 = {
  "class": "text-sm text-gray-600 mt-4 font-ubuntu"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-column");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_column, {
    gap: 4,
    cols: 1,
    "class": "md:grid-cols-2"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        "class": "lg:ml-16 ml-4",
        src: $options.logo,
        alt: "logo"
      }, null, 8
      /* PROPS */
      , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.content, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          onMouseover: function onMouseover($event) {
            return $data.active = index;
          },
          "class": ["bg-gray-100 mt-5 lg:px-6 flex lg:mx-6 lg:px-5 rounded lg:h-48 transition duration-500 ease-in-out transform ", $data.active === index ? '-translate-y-2 shadow-lg' : '']
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
          "class": "h-24 w-24 ml-2 mr-3",
          src: item.icon
        }, null, 8
        /* PROPS */
        , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.subtitle), 1
        /* TEXT */
        )])], 42
        /* CLASS, PROPS, HYDRATE_EVENTS */
        , ["onMouseover"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])];
    }),
    _: 1
    /* STABLE */

  })]);
});

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureTwo.vue":
/*!**************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureTwo.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFeatureTwo_vue_vue_type_template_id_08a34f53_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true */ "./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true");
/* harmony import */ var _NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFeatureTwo.vue?vue&type=script&lang=js */ "./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=script&lang=js");



_NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFeatureTwo_vue_vue_type_template_id_08a34f53_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-08a34f53"
/* hot reload */
if (false) {}

_NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/Features/NitsFeatureTwo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureTwo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureTwo_vue_vue_type_template_id_08a34f53_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureTwo_vue_vue_type_template_id_08a34f53_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureTwo.vue?vue&type=template&id=08a34f53&scoped=true");


/***/ })

}]);