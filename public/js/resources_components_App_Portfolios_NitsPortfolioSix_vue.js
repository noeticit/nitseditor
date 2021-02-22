(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_Portfolios_NitsPortfolioSix_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsPortfolioSix",
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
      if (_this.active === 11) _this.active = 0;else _this.active++;
    }, 3000);
  },
  destroy: function destroy() {
    clearInterval(this.timer);
  },
  computed: {
    logo: function logo() {
      return this.content[this.active].image;
    },
    name: function name() {
      return this.content[this.active].name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-1ad2fda9");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1ad2fda9");

var _hoisted_1 = {
  "class": "w-full hidden md:block"
};
var _hoisted_2 = {
  "class": "text-center md:text-4xl text-2xl font-bold text-blue-800 md:px-32 py-8 md:py-16"
};
var _hoisted_3 = {
  "class": "lg:px-48 tracking-wide font-ubuntu"
};
var _hoisted_4 = {
  "class": "px-64"
};
var _hoisted_5 = {
  "class": "relative w-full "
};
var _hoisted_6 = {
  "class": "circle-container relative"
};
var _hoisted_7 = {
  "class": "absolute top-0 w-full flex justify-center md:mt-12"
};
var _hoisted_8 = {
  "class": "mx-auto",
  style: {
    "width": "324px",
    "height": "600px"
  }
};
var _hoisted_9 = {
  "class": "py-4 mt-16 text-center font-bold text-sm text-red-600 antialiased font-ubuntu"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "py-4 text-center text-xs text-blue-800 antialiased font-ubuntu"
}, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-column");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_column, {
    gap: 4,
    cols: 1
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.content, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          onMouseover: function onMouseover($event) {
            return $data.active = index;
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
          src: item.icon,
          "class": $data.active === index ? '-translate-y-3 shadow-lg scale-150 bg-white p-2 rounded-full' : ''
        }, null, 10
        /* CLASS, PROPS */
        , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          "class": [$data.active === index ? '-translate-y-3 scale-110' : '', "mx-auto text-center mt-2 text-blue-800 font-bold text-base antialiased tracking-wide font-ubuntu"]
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 3
        /* TEXT, CLASS */
        )], 40
        /* PROPS, HYDRATE_EVENTS */
        , ["onMouseover"])]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        "enter-active-class": "transition duration-700 ease-out absolute top-0  transform flex justify-center",
        "enter-class": "-translate-x-4 scale-150 opacity-0",
        "enter-to-class": "translate-x-0 scale-100 opacity-100",
        "leave-active-class": "transition duration-150 ease-in transform",
        "leave-class": "translate-x-0 opacity-100",
        "leave-to-class": "-translate-x-3 opacity-0"
      }, {
        "default": _withId(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.name), 1
          /* TEXT */
          ), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
            "class": "mx-auto",
            style: {
              "width": "250px",
              "height": "250px"
            },
            src: $options.logo
          }, null, 8
          /* PROPS */
          , ["src"])])])];
        }),
        _: 1
        /* STABLE */

      })])])])];
    }),
    _: 1
    /* STABLE */

  })]);
});

/***/ }),

/***/ "./resources/components/App/Portfolios/NitsPortfolioSix.vue":
/*!******************************************************************!*\
  !*** ./resources/components/App/Portfolios/NitsPortfolioSix.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsPortfolioSix_vue_vue_type_template_id_1ad2fda9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true */ "./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true");
/* harmony import */ var _NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsPortfolioSix.vue?vue&type=script&lang=js */ "./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=script&lang=js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './NitsPortfolioSix.vue?vue&type=style&index=0&id=1ad2fda9&scoped=true&lang=scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




;
_NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsPortfolioSix_vue_vue_type_template_id_1ad2fda9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-1ad2fda9"
/* hot reload */
if (false) {}

_NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/Portfolios/NitsPortfolioSix.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsPortfolioSix_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsPortfolioSix.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsPortfolioSix_vue_vue_type_template_id_1ad2fda9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsPortfolioSix_vue_vue_type_template_id_1ad2fda9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Portfolios/NitsPortfolioSix.vue?vue&type=template&id=1ad2fda9&scoped=true");


/***/ })

}]);