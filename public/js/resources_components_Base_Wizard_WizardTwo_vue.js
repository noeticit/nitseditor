(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Wizard_WizardTwo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/WizardTwo.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/WizardTwo.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WizardTwo",
  data: function data() {
    return {
      showTab: true,
      showTab2: false,
      showTab3: false,
      showTab4: false,
      showTab5: false,
      hover: ''
    };
  },
  methods: {
    activeClass: function activeClass(tab) {
      return this.active === tab;
    },
    hoverClass: function hoverClass(tab) {
      return this.hover === tab;
    },
    changeTab: function changeTab(tab) {
      this.showTab = false;
      this.showTab2 = false;
      this.showTab3 = false;
      this.showTab4 = false;
      this.showTab5 = false;

      switch (tab) {
        case 'personal':
          this.showTab = true;
          break;

        case 'account':
          this.showTab2 = true;
          break;

        case 'address':
          this.showTab3 = true;
          break;

        case 'course':
          this.showTab4 = true;
          break;

        case 'payment':
          this.showTab5 = true;
          break;

        default:
          this.showTab = true;
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-6587bf1a");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6587bf1a");

var _hoisted_1 = {
  "class": "relative px-24 bg-gray-300 py-8 mb-10 w-full"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-col  mt-1 min-h-full justify-center\" data-v-6587bf1a><div class=\" min-h-full text-center items-center\" data-v-6587bf1a><div class=\"list-reset flex\" data-v-6587bf1a><button class=\"px-5 mr-2 bg-gray-200 focus:bg-white rounded focus:outline-none w-1/4 py-5 cursor-pointer focus:text-blue-500\" data-v-6587bf1a><span class=\" hover:border-b hover:border-teal-500 inline-block py-2 px-4 text-teal-500 font-semibold\" data-v-6587bf1a>Account Info</span></button><button class=\"w-1/4 mr-2 bg-gray-200 px-5 py-5 focus:bg-white rounded focus:outline-none cursor-pointer\" data-v-6587bf1a><span class=\"hover:border-b hover:border-teal-500  inline-block py-2 px-4 text-teal-500 font-semibold\" data-v-6587bf1a>Address Info</span></button><button class=\"w-1/4 mr-2 bg-gray-200 px-5 rounded focus:bg-white py-5 focus:outline-none cursor-pointer\" data-v-6587bf1a><span class=\"hover:border-b hover:border-teal-500 inline-block py-2 px-4 text-teal-500 font-semibold\" data-v-6587bf1a>Course Selection</span></button><button class=\"w-1/4 mr-2 bg-gray-200 mr-2 rounded focus:bg-white px-5 focus:outline-none py-5 cursor-pointer\" data-v-6587bf1a><span class=\" hover:border-b hover:border-teal-500 inline-block py-2 px-4 text-teal-500 font-semibold\" data-v-6587bf1a>Review and Submit</span></button></div></div><div class=\"mb-3 relative pt-6 rounded-b shadow-lg bg-white border-black mx-2\" data-v-6587bf1a><div style=\"height:578px;\" class=\"ml-48 pl-10 mr-64 pr-32\" data-v-6587bf1a><div class=\"justify-between p-4 text-center items-center\" data-v-6587bf1a><div class=\"text-left text-lg focus:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600 leading-snug tracking-normal\" data-v-6587bf1a>Fill Students Personal Details</div></div><div class=\"flex-col p-4 justify-start w-full\" data-v-6587bf1a><div class=\"mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2\" data-v-6587bf1a>First Name</div><input class=\"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\" placeholder=\"Enter Your Name\" data-v-6587bf1a></div><div class=\"flex-col p-4 justify-start w-full\" data-v-6587bf1a><div class=\"mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2\" data-v-6587bf1a>Last Name</div><input class=\"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\" placeholder=\"Enter Your Name\" data-v-6587bf1a></div><div class=\"grid grid-cols-2\" data-v-6587bf1a><div class=\"flex-col p-4 justify-start w-full\" data-v-6587bf1a><div class=\"mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2\" data-v-6587bf1a>State</div><input class=\"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\" placeholder=\"Enter Your State\" data-v-6587bf1a></div><div class=\"flex-col p-4 justify-start w-full\" data-v-6587bf1a><div class=\"mt-2 ml-2 block tracking-wide text-left text-teal-500 text-sm font-semibold mb-2\" data-v-6587bf1a>City</div><input class=\"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\" placeholder=\"Enter Your City\" data-v-6587bf1a></div></div><div class=\"border-b mt-8\" data-v-6587bf1a></div></div></div></div>", 1);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_hoisted_2]);
});

/***/ }),

/***/ "./resources/components/Base/Wizard/WizardTwo.vue":
/*!********************************************************!*\
  !*** ./resources/components/Base/Wizard/WizardTwo.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WizardTwo_vue_vue_type_template_id_6587bf1a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true */ "./resources/components/Base/Wizard/WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true");
/* harmony import */ var _WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WizardTwo.vue?vue&type=script&lang=js */ "./resources/components/Base/Wizard/WizardTwo.vue?vue&type=script&lang=js");



_WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _WizardTwo_vue_vue_type_template_id_6587bf1a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-6587bf1a"
/* hot reload */
if (false) {}

_WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Wizard/WizardTwo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Wizard/WizardTwo.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/components/Base/Wizard/WizardTwo.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WizardTwo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/WizardTwo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Wizard/WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/components/Base/Wizard/WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WizardTwo_vue_vue_type_template_id_6587bf1a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_WizardTwo_vue_vue_type_template_id_6587bf1a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/WizardTwo.vue?vue&type=template&id=6587bf1a&scoped=true");


/***/ })

}]);