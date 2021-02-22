(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Wizard_NitsWizardTwo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsWizardTwo",
  data: function data() {
    return {
      errors: {},
      loading: false,
      activeTab: ''
    };
  },
  props: {
    contents: Object,
    api_url: String,
    redirect: String,
    back_url: String,
    grid: Object,
    active: String
  },
  created: function created() {
    if (this.active) this.activeTab = this.active;else this.activeTab = Object.keys(this.contents)[0];
  },
  methods: {
    listensToEvent: function listensToEvent(tab, field) {
      var _this = this;

      if (typeof this.contents[tab].forms !== 'undefined') {
        Object.keys(this.contents[tab].forms).forEach(function (key) {
          if (typeof _this.contents[tab].forms[key].listensTo !== 'undefined' && _this.contents[tab].forms[key].listensTo.length && _this.contents[tab].forms[key].listensTo.includes(field)) {
            _this.contents[tab].forms[key].attrs.query[field] = _this.contents[tab].forms[field].value; // console.log(this.forms[key].listensTo)
            // console.log('Coming from '+ field+' for field '+key);

            console.log(_this.contents[tab].forms);
          }
        });
      }
    },
    next: function next(key) {
      var keys = Object.keys(this.contents);
      var i = keys.indexOf(key);
      return i !== -1 && keys[i + 1] && this.contents[keys[i + 1]];
    },
    nextTab: function nextTab(key) {
      var keys = Object.keys(this.contents);
      var i = keys.indexOf(key);
      this.activeTab = keys[i + 1];
    },
    previous: function previous(key) {
      var keys = Object.keys(this.contents);
      var i = keys.indexOf(key);
      return i !== -1 && keys[i - 1] && this.contents[keys[i - 1]];
    },
    previousTab: function previousTab(key) {
      var keys = Object.keys(this.contents);
      var i = keys.indexOf(key);
      this.activeTab = keys[i - 1];
    },
    submit: function submit() {
      var _this2 = this;

      this.loading = true;
      var postData = {};
      Object.keys(this.contents).forEach(function (key) {
        Object.keys(_this2.contents[key].forms).forEach(function (form_key) {
          postData[form_key] = _this2.contents[key].forms[form_key].value;
        });
      });
      this.$api.post(this.api_url, postData).then(function (response) {
        if (response.status === 200) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Created!', 'Your data has been created.', 'success').then(function () {
            _this2.$router.push({
              name: _this2.redirect
            });
          });
        }
      })["catch"](function (error) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          title: "Oops!",
          text: error.response.data.message,
          type: "error"
        });
        _this2.loading = false;
        _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-7d891340");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-7d891340");

var _hoisted_1 = {
  "class": "w-full"
};
var _hoisted_2 = {
  "class": "flex-col bg-white mt-1 h-full justify-center"
};
var _hoisted_3 = {
  "class": "p-2 text-center items-center"
};
var _hoisted_4 = {
  "class": "list-reset px-10 w-full flex border-b"
};
var _hoisted_5 = {
  "class": "ml-16 pr-2 focus:text-blue-500 h-12 w-12 text-teal-500",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
};
var _hoisted_6 = {
  "class": "bg-white hover:border-b hover:border-teal-500 inline-block py-2 px-5 text-teal-500 font-semibold"
};
var _hoisted_7 = {
  key: 0,
  "class": "ml-8 pr-2 mt-6 focus:text-blue-500 h-8 w-8 text-teal-500",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 010 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0-.446-.434-.481-1.041 0-1.574L11.295 10 7.548 6.092c-.481-.533-.446-1.141 0-1.576.445-.436 1.197-.409 1.615 0z"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "mb-3 relative border-black mx-2"
};
var _hoisted_10 = {
  style: {
    "height": "578px"
  },
  "class": "ml-48 pl-10 mr-64"
};
var _hoisted_11 = {
  "class": "justify-between pt-4 pb-4 mt-3 text-center items-center"
};
var _hoisted_12 = {
  "class": "text-left text-lg focus:text-blue-500 font-semibold subpixel-antialiased capitalize text-gray-600 leading-snug tracking-normal"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "border-b mt-8"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "relative justify-end mt-8 mr-5"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.contents, function (item, key, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("li", {
      "class": "px-5 py-5 flex cursor-pointer",
      onClick: function onClick($event) {
        return $data.activeTab = key;
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
      "fill-rule": "evenodd",
      d: item.icon
    }, null, 8
    /* PROPS */
    , ["d"])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [$options.next(key) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_7, [_hoisted_8])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 8
    /* PROPS */
    , ["onClick"]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.contents, function (item, key, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, $props.grid, {
      "default": _withId(function () {
        return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.forms, function (element, element_key, form_index) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(element.type), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            key: element_key
          }, element.attrs, {
            modelValue: element.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return element.value = $event;
            },
            error: $data.errors[element_key],
            onInput: function onInput($event) {
              return $options.listensToEvent(key, element_key);
            }
          }), null, 16
          /* FULL_PROPS */
          , ["modelValue", "onUpdate:modelValue", "error", "onInput"]);
        }), 128
        /* KEYED_FRAGMENT */
        ))];
      }),
      _: 2
      /* DYNAMIC */

    }, 1040
    /* FULL_PROPS, DYNAMIC_SLOTS */
    ), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [$options.next(key) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
      key: 0,
      onClick: function onClick($event) {
        return $options.nextTab(key);
      },
      "class": "bg-blue-500 absolute right-0 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
    }, " Next ", 8
    /* PROPS */
    , ["onClick"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
      key: 1,
      "class": [{
        'spinner': $data.loading
      }, "absolute right-0 uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"],
      onClick: _cache[1] || (_cache[1] = function ($event) {
        return $options.submit();
      })
    }, "Submit", 2
    /* CLASS */
    )), $options.previous(key) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
      key: 2,
      onClick: function onClick($event) {
        return $options.previousTab(key);
      },
      "class": "bg-transparent hover:text-gray-700 absolute left-0 text-gray-500 font-semibold py-2 px-6 border border-gray-500 hover:border-gray-700 rounded"
    }, " Preview ", 8
    /* PROPS */
    , ["onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])], 512
    /* NEED_PATCH */
    )), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, key === $data.activeTab]]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])])]);
});

/***/ }),

/***/ "./resources/components/Base/Wizard/NitsWizardTwo.vue":
/*!************************************************************!*\
  !*** ./resources/components/Base/Wizard/NitsWizardTwo.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsWizardTwo_vue_vue_type_template_id_7d891340_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true */ "./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true");
/* harmony import */ var _NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsWizardTwo.vue?vue&type=script&lang=js */ "./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=script&lang=js");



_NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsWizardTwo_vue_vue_type_template_id_7d891340_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-7d891340"
/* hot reload */
if (false) {}

_NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Wizard/NitsWizardTwo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsWizardTwo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsWizardTwo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsWizardTwo_vue_vue_type_template_id_7d891340_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsWizardTwo_vue_vue_type_template_id_7d891340_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Wizard/NitsWizardTwo.vue?vue&type=template&id=7d891340&scoped=true");


/***/ })

}]);