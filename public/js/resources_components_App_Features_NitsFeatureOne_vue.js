(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_Features_NitsFeatureOne_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureOne.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureOne.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFeatureOne",
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    content: String,
    location: String,
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    options: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    textalign: String,
    image_margin_top: Number,
    image_margin: Number,
    text_margin: Number
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var _this = undefined;



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-1f88c326");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1f88c326");

var _hoisted_1 = {
  "class": "text-gray-800 px-1 mt-5 font-base md:text-xl text-lg font-ubuntu"
};
var _hoisted_2 = {
  key: 0,
  "class": "w-full mt-4"
};
var _hoisted_3 = {
  "class": "flex py-5"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "py-1 text-red-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 ",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M9.999.8A9.2 9.2 0 00.8 10.001a9.2 9.2 0 0018.399 0A9.2 9.2 0 009.999.8zM10 13.001a3 3 0 110-6 3 3 0 010 6z"
})])], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "flex-col"
};
var _hoisted_6 = {
  "class": "text-lg font-ubuntu ml-3 text-blue-800 font-semibold tracking-wide antialiased"
};
var _hoisted_7 = {
  "class": "font-semibold font-ubuntu"
};
var _hoisted_8 = {
  "class": "flex"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-column");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_nits_column, {
    gap: 4,
    cols: 1,
    "class": "md:grid-cols-2"
  }, {
    "default": _withId(function () {
      return [$props.location === 'left' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: 0,
        "class": 'lg:mx-8 my-4 mx-4 ' + ($props.image_margin ? 'md:mt-' + $props.image_margin : 'md:mt-1 ') + ($props.image_margin_top ? ' mt-' + $props.image_margin_top : '')
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        "class": "",
        src: $props.src,
        alt: $props.alt
      }, null, 8
      /* PROPS */
      , ["src", "alt"])], 2
      /* CLASS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": 'lg:mx-12 mx-6 mt-16 ' + ($props.text_margin ? 'md:mt-' + $props.text_margin : 'md:mt-16 ')
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
        "class": 'text-blue-800 font-bold md:mt-8 mt-4 md:text-4xl text-2xl font-ubuntu ' + (_this.textalign ? _this.textalign : 'text-left')
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 3
      /* TEXT, CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": 'content-center leading-tight text-blue-800 md:text-3xl text-1xl mt-5 font-ubuntu antialiased tracking-normal font-semibold ' + (_this.textalign ? _this.textalign : 'text-left')
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subtitle), 3
      /* TEXT, CLASS */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.content), 1
      /* TEXT */
      ), $props.options && $props.options.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.options, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1
        /* TEXT */
        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.services, function (ele, index) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
            "class": 'text-xs md:text-sm font-ubuntu cursor-pointer hover:text-gray-700 font-medium text-gray-600 text-left tracking-wide px-3 my-1 border-gray-500 ' + (index + 1 < item.services.length ? 'border-r-2' : '')
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ele.title), 3
          /* TEXT, CLASS */
          );
        }), 256
        /* UNKEYED_FRAGMENT */
        ))])])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
      /* CLASS */
      ), $props.location === 'right' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: 1,
        "class": 'lg:mx-8 mx-4 ' + ($props.image_margin ? 'md:mt-' + $props.image_margin : 'md:mt-1 ') + ($props.image_margin_top ? ' mt-' + $props.image_margin_top : '')
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        "class": "w-full",
        src: $props.src,
        alt: $props.alt
      }, null, 8
      /* PROPS */
      , ["src", "alt"])], 2
      /* CLASS */
      )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  });
});

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureOne.vue":
/*!**************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureOne.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFeatureOne_vue_vue_type_template_id_1f88c326_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true */ "./resources/components/App/Features/NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true");
/* harmony import */ var _NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFeatureOne.vue?vue&type=script&lang=js */ "./resources/components/App/Features/NitsFeatureOne.vue?vue&type=script&lang=js");



_NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFeatureOne_vue_vue_type_template_id_1f88c326_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-1f88c326"
/* hot reload */
if (false) {}

_NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/Features/NitsFeatureOne.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureOne.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureOne.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureOne_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureOne.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureOne.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureOne_vue_vue_type_template_id_1f88c326_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureOne_vue_vue_type_template_id_1f88c326_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureOne.vue?vue&type=template&id=1f88c326&scoped=true");


/***/ })

}]);