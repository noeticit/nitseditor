(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_App_Features_NitsFeatureEight_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureEight.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureEight.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFeatureEight",
  props: {
    title: String,
    subtitle: String,
    per_row: Number,
    page_name: String,
    api: String
  },
  data: function data() {
    return {
      tableData: []
    };
  },
  methods: {
    Open: function Open(id) {
      if (this.page_name === 'knowledge_base') this.$router.push({
        name: 'knowledge-base-edit',
        params: {
          edit: id
        }
      });
      if (this.page_name === 'case_study') this.$router.push({
        name: 'case-study-edit',
        params: {
          edit: id
        }
      });
      if (this.page_name === 'newsroom') this.$router.push({
        name: 'footer-menu-knowledge-base-view',
        params: {
          id: id
        }
      });
    }
  },
  created: function created() {
    var _this = this;

    this.$api.get(this.api).then(function (response) {
      if (response.status === 200) {
        _this.tableData = response.data.data;
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-6b763754");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6b763754");

var _hoisted_1 = {
  "class": "w-full"
};
var _hoisted_2 = {
  "class": "text-center mb-5 text-4xl font-bold text-blue-800 md:px-24 md:py-8"
};
var _hoisted_3 = {
  "class": "lg:px-32 py-8 tracking-wide font-ubuntu"
};
var _hoisted_4 = {
  "class": "text-center px-10 leading-snug text-gray-600 text-lg font-ubuntu antialiased tracking-wide font-normal"
};
var _hoisted_5 = {
  "class": "m-2 mt-3 border rounded-lg shadow-lg items-center overflow-hidden"
};
var _hoisted_6 = {
  "class": "text-center items-center"
};
var _hoisted_7 = {
  "class": "p-4"
};
var _hoisted_8 = {
  "class": "mt-4 w-full text-left text-blue-700 text-xl font-semibold font-sans tracking-tight antialiased"
};
var _hoisted_9 = {
  "class": "flex mt-5"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-3 w-3 mt-1 text-gray-700",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 480 480"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M386.816 323.456l-69.984-14.016c-7.424-1.472-12.832-8.064-12.832-15.68v-16.064c4.608-6.4 8.928-14.944 13.408-23.872 3.424-6.752 8.576-16.928 10.88-19.328 13.568-13.28 28.032-29.76 32.448-51.232 4-19.456 0-29.568-4.64-37.568 0-15.648 0-44.288-5.44-64.928-.544-24.928-5.12-39.008-16.608-51.552-8.128-8.768-20.096-10.816-29.696-12.448-3.808-.64-9.024-1.536-10.848-2.528C276.896 5.056 260.032.512 239.392 0c-42.24 1.6-94.08 28.384-111.424 76.544-5.28 14.624-4.768 38.624-4.384 57.92l-.448 11.232c-4.064 8-8.064 18.112-4.032 37.536 4.416 21.568 18.88 38.016 32.384 51.232 2.336 2.432 7.552 12.672 11.008 19.424 4.544 8.896 8.896 17.44 13.504 23.84v16.032c0 7.616-5.408 14.208-12.864 15.68l-69.984 14.016C48.448 332.384 16 371.968 16 417.568V448c0 17.632 14.368 32 32 32h384c17.632 0 32-14.368 32-32v-30.432c0-45.6-32.448-85.184-77.184-94.112zM432 448H48v-30.432c0-30.4 21.632-56.8 51.456-62.752l69.952-14.016C191.776 336.384 208 316.576 208 293.76V272c0-4.288-1.728-8.416-4.768-11.392-2.752-2.688-8.672-14.336-12.224-21.28-6.016-11.776-11.2-21.952-17.12-27.712-10.624-10.368-20.768-21.76-23.456-34.816-2.08-10.112-.64-12.96 1.216-16.576 1.632-3.2 4.064-8 4.064-14.528l-.16-11.872c-.288-13.984-.768-37.408 2.496-46.432C170.464 52.96 209.856 33.152 239.584 32c14.656.384 26.176 3.424 38.4 10.24 6.592 3.648 14.272 4.928 21.024 6.08 3.808.64 10.176 1.728 11.488 2.56 4.32 4.704 7.904 10.368 8.16 32.384 0 1.44.224 2.88.64 4.288 4.768 16.352 4.768 44.576 4.768 58.144 0 6.528 2.464 11.328 4.064 14.528 1.856 3.616 3.296 6.464 1.216 16.608-2.656 12.992-12.864 24.416-23.456 34.784-5.952 5.824-11.104 16-17.056 27.808-3.456 6.912-9.312 18.496-12.032 21.152A16.003 16.003 0 00272 272v21.76c0 22.816 16.224 42.624 38.592 47.072l69.984 14.016c29.792 5.92 51.424 32.32 51.424 62.72V448z"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "text-center ml-1 text-gray-500 text-sm font-normal font-sans leading-snug tracking-normal antialiased"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" By ");

var _hoisted_13 = {
  "class": "hover:underline cursor-pointer text-blue-600"
};
var _hoisted_14 = {
  "class": "border-t-2 h-12 w-full"
};
var _hoisted_15 = {
  "class": "flex px-4 justify-between items-center text-center"
};
var _hoisted_16 = {
  "class": "mt-1 inline-flex items-center text-center rounded-full shadow-sm py-2 px-4 bg-blue-100"
};
var _hoisted_17 = {
  "class": "items-center text-center text-xs antialiased tracking-tight font-semibold font-ubuntu text-blue-700"
};
var _hoisted_18 = {
  "class": "text-center text-gray-400 italic text-sm font-semibold font-sans tracking-wide antialiased"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  var _component_nits_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-column");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_nits_column, {
    gap: 4,
    cols: 1
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subtitle), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
        cols: $props.per_row,
        gap: 2,
        padding: 12
      }, {
        "default": _withId(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.tableData, function (item, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
              "class": "inline-block hover:scale-110 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0",
              src: item.image,
              style: {
                "width": "600px",
                "height": "270px"
              }
            }, null, 8
            /* PROPS */
            , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
              "class": "mt-3 w-full text-left text-gray-600 text-base font-normal font-sans tracking-normal leading-snug antialiased",
              innerHTML: item.description.substring(0, 150) + (item.description.length > 150 ? '' : '')
            }, null, 8
            /* PROPS */
            , ["innerHTML"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.author), 1
            /* TEXT */
            )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
                return $options.Open(item.id);
              }, ["prevent"]),
              "class": "mt-3 focus:outline-none focus:bg-red-100 py-2 px-4 text-left text-red-700 text-base hover:bg-red-100 font-semibold font-sans tracking-wide antialiased rounded-full"
            }, " Read story ", 8
            /* PROPS */
            , ["onClick"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(item.tags, function (ele, index) {
              return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ele.name), 1
              /* TEXT */
              )]);
            }), 256
            /* UNKEYED_FRAGMENT */
            )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.created_at), 1
            /* TEXT */
            )])])]);
          }), 256
          /* UNKEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["cols"])])];
    }),
    _: 1
    /* STABLE */

  });
});

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureEight.vue":
/*!****************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureEight.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFeatureEight_vue_vue_type_template_id_6b763754_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true */ "./resources/components/App/Features/NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true");
/* harmony import */ var _NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFeatureEight.vue?vue&type=script&lang=js */ "./resources/components/App/Features/NitsFeatureEight.vue?vue&type=script&lang=js");



_NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFeatureEight_vue_vue_type_template_id_6b763754_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-6b763754"
/* hot reload */
if (false) {}

_NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/App/Features/NitsFeatureEight.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureEight.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureEight.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureEight_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureEight.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureEight.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/App/Features/NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/components/App/Features/NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureEight_vue_vue_type_template_id_6b763754_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFeatureEight_vue_vue_type_template_id_6b763754_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/App/Features/NitsFeatureEight.vue?vue&type=template&id=6b763754&scoped=true");


/***/ })

}]);