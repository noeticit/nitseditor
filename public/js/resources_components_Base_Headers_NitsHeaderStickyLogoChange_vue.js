(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Headers_NitsHeaderStickyLogoChange_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsHStickyLogoChange",
  data: function data() {
    return {
      isVisibleHeader1: false,
      isVisibleHeader2: false,
      search: false
    };
  },
  props: {
    menu: Array,
    heading: {
      type: String,
      required: true
    },
    menus: {
      type: Array
    }
  },
  created: function created() {
    console.log(this.menus);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-31ec7b5e");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-31ec7b5e");

var _hoisted_1 = {
  "class": "relative"
};
var _hoisted_2 = {
  "class": "sticky top-0 bg-white flex w-screen h-24 "
};
var _hoisted_3 = {
  "class": "flex justify-between"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "float-left ml-4 mt-4 "
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/nits-assets/images/nits-editor-logo.png",
  alt: "logo",
  "class": "h-16"
})], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "float-right ml-64 mt-1"
};
var _hoisted_6 = {
  "class": "lg:flex-grow font-medium uppercase flex flex-col lg:flex-row pb-4 lg:pb-0 text-sm  text-gray-700"
};
var _hoisted_7 = {
  "class": "hover:text-teal-400"
};
var _hoisted_8 = {
  "class": " font-semibold lg:inline-block lg:mt-0 mx-3 lg:py-8 px-2",
  href: ""
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "w-5 h-5 mx-24 mt-1",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.55 15.47l-3.78-3.78c.57-.94.9-2.04.9-3.21A6.52 6.52 0 008.28 2.1 6.18 6.18 0 002.1 8.3a6.52 6.52 0 006.38 6.37c1.13 0 2.2-.3 3.11-.84l3.8 3.8c.37.37.98.37 1.35 0l.94-.94c.37-.37.24-.84-.13-1.21zM4 8.29A4.28 4.28 0 018.3 4c2.36 0 4.47 2.11 4.47 4.48a4.28 4.28 0 01-4.28 4.28A4.62 4.62 0 014 8.3z"
})], -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 0,
  "class": "absolute flex top-0 w-full "
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
  "class": "w-full h-24 ml-2 border border-gray-300 py-1 px-10 bg-white rounded placeholder-gray-700 text-xl focus:outline-none antialiased tracking-wide font-medium text-gray-700 leading-normal",
  type: "text",
  placeholder: "TYPE HERE.."
}, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2.939 12.789L10 11.729l-3.061 3.06-1.729-1.728L8.271 10l-3.06-3.061L6.94 5.21 10 8.271l3.059-3.061 1.729 1.729L11.729 10l3.06 3.061-1.728 1.728z"
}, null, -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "absolute bottom-0 px-56 mb-16 ml-64 "
};
var _hoisted_14 = {
  "class": " font-black text-5xl text-white "
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-11/12 w-screen"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: "/project-assets/images/work-from-home-getty.jpg",
  "class": "w-screen h-full",
  alt: " image"
})], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "h-screen w-screen bg-gray-200"
}, null, -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("      <img src=\"/project-assets/images/HiRes1-150x150.jpg.jpg\" class=\"h-full w-screen\" alt=\" image\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("          <div class=\" flex items-center ml-4\" >"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div class=\"inline-block pl-4 mx-5 \" >"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.menu, function (item) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            @mouseover=\"isVisibleHeader1 = true\" @mouseleave=\"isVisibleHeader1 = false\" @keydown.enter=\"isVisibleHeader1 = !isVisibleHeader1\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        HOME")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                          <ul v-show=\"isVisibleHeader1\" class=\"dropdown-menu absolute w-56 text-gray-600 bg-white border-t-2 border-teal-400\" >"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                          <li class=\" hover:text-teal-500\"  @mouseover=\"isVisible1 = true\" @mouseleave=\"isVisible1 = false\" @keydown.enter=\"isVisible1 = !isVisible1\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                             <a class=\"rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex \" href=\"#\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                             <span class=\"block\" >HOME-CORPORATE</span>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                             <span class=\"mr-auto\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                  <svg class=\"absolute right-0 w-5 h-5  ml-40 \" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                    <path fill-rule=\"evenodd\" d=\"M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                </svg>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                             </span>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                    </a>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                </li>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <li class=\"\"  @mouseover=\"isVisible1 = true\" @mouseleave=\"isVisible1 = false\" @keydown.enter=\"isVisible1 = !isVisible1\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                    <a class=\"rounded-t  hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap flex \" href=\"#\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                        <span class=\"flex  hover:text-teal-500\" >HOME-PORFOLIO</span>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                        <span class=\"mr-auto\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                            <svg class=\"absolute right-0 w-5 h-5  ml-40 \" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                              <path fill-rule=\"evenodd\" d=\"M11 10L7.86 6.58a.7.7 0 010-.98c.27-.27.7-.27.97 0l3.83 3.91a.7.7 0 010 .98l-3.83 3.9a.68.68 0 01-.97 0 .7.7 0 010-.97L11 10z\"/>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                            </svg>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                        </span>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                    </a>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                </li>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            </ul>")]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                </div>")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("search icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.search = !$data.search;
    }),
    "class": "flex absolute right-0 mt-8"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <a  class=\" py-2 px-4 mt-2 text-gray-700 text-lg font-semibold rounded-lg\" href=\"\">"), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            </a>")])])]), $data.search ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_10, [_hoisted_11, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $data.search = !$data.search;
    }),
    "class": "h-5 w-5 mt-8 ml-4 text-black",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, [_hoisted_12]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.heading), 1
  /* TEXT */
  )]), _hoisted_15, _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("       <section class=\"color\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("           <div class=\"container\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("               <h1 class=\"text-3xl text-gray-800 text-center\">The Duh-Vinci Code</h1>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("               <p class=\"text-lg text-gray-700 text-center leading-normal mt-4 ml-24\">Bender, you risked your life to save me! Good news, everyone! I've taught the toaster to feel love! I can explain. It's very valuable. Can we have Bender Burgers again?"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                   For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! You seem malnourished. Are you suffering from intestinal parasites? Say what? Now, now. Perfectly symmetrical violence never solved anything. Eeeee! Now say \"nuclear wessels\"! Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it?"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                   I suppose I could part with 'one' and still be feared… Noooooo! Have you ever tried just turning off the TV, sitting down with your children, and hitting them?"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                   Isn't it true that you have been paid for your testimony? All I want is to be a monkey of moderate intelligence who wears a suit… that's why I'm transferring to business school! We'll need to have a look inside you with this camera. Really?!</p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("           </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("       </section>")]);
});

/***/ }),

/***/ "./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue":
/*!**************************************************************************!*\
  !*** ./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsHeaderStickyLogoChange_vue_vue_type_template_id_31ec7b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true */ "./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true");
/* harmony import */ var _NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js */ "./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js");



_NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsHeaderStickyLogoChange_vue_vue_type_template_id_31ec7b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-31ec7b5e"
/* hot reload */
if (false) {}

_NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStickyLogoChange_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStickyLogoChange_vue_vue_type_template_id_31ec7b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsHeaderStickyLogoChange_vue_vue_type_template_id_31ec7b5e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Headers/NitsHeaderStickyLogoChange.vue?vue&type=template&id=31ec7b5e&scoped=true");


/***/ })

}]);