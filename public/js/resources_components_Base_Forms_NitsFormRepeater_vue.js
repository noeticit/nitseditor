(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsFormRepeater_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsFormRepeater",
  data: function data() {
    return {
      formData: '',
      forms: {
        code: {
          type: 'nits-input-text',
          attrs: {
            label: 'Text',
            placeholder: 'Enter text'
          },
          value: ''
        },
        discount: {
          type: 'nits-input-text',
          attrs: {
            label: 'Text 2',
            placeholder: 'Enter text'
          },
          value: ''
        }
      }
    };
  },
  props: {
    child_components: Array,
    model: String,
    rowIndex: Number,
    columnIndex: Number
  },
  created: function created() {// eventBus.$on('nits-form-input', (data) => {
    //     if(typeof data !== 'undefined' ||  data !== null )
    //         this.form_data[data.field] = data.value
    // })
  },
  methods: {
    deleteRow: function deleteRow(index) {
      var postData = {
        index: index,
        field: this.model
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-delete', postData);
    },
    addRow: function addRow() {
      var formData = this.child_components[0];
      var postData = {
        value: formData,
        field: this.model
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-add', postData);
    },
    emitEvent: function emitEvent() {
      var emittedData = [];
      this.forms.forEach(function (item) {
        var objectValuePair = {};
        Object.keys(item).forEach(function (key) {
          objectValuePair[key] = item[key].value;
        });
        emittedData.push(objectValuePair);
      });
      this.$emit('input', emittedData);
    }
  },
  watch: {
    forms: {
      handler: 'emitEvent',
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0d792a7a");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0d792a7a");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "w-6 h-6 ml-6 mt-4",
  version: "1.1",
  id: "Squared_cross",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 20 20",
  "enable-background": "new 0 0 20 20",
  "xml:space": "preserve"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  fill: "#C0C0C0",
  d: "M16,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M13.061,14.789\r\n                            L10,11.729l-3.061,3.06L5.21,13.061L8.271,10l-3.06-3.061L6.94,5.21L10,8.271l3.059-3.061l1.729,1.729L11.729,10l3.06,3.061\r\n                            L13.061,14.789z"
})], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "inline-block text-white fill-current w-5 h-5 ",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .55-.05 1-.6 1H11v4.4c0 .55-.45.6-1 .6s-1-.05-1-.6V11H4.6c-.55 0-.6-.45-.6-1s.05-1 .6-1H9V4.6c0-.55.45-.6 1-.6s1 .05 1 .6V9h4.4c.55 0 .6.45.6 1z"
})], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-center mr-2 text-sm antialiased tracking-wide leading-snug font-semibold font-sans text-white"
}, "Add New")], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <component v-for=\"(element, index) in child_components\" :key=\"index\" :is=\"element.component\" v-bind=\"element.attrs\"></component>"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.child_components, function (form, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
      rows: 1,
      cols: form.attrs.cols,
      gap: form.attrs.gap
    }, {
      "default": _withId(function () {
        return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(form.component), form.attrs, null, 16
        /* FULL_PROPS */
        )), form.attrs.child_components.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
          key: 0,
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.deleteRow(index);
          }, ["prevent"]),
          "class": ""
        }, [_hoisted_1], 8
        /* PROPS */
        , ["onClick"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["cols", "gap"])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "inline-flex ml-10 mt-6 items-center rounded p-2 bg-blue-500",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.addRow();
    }, ["prevent"]))
  }, [_hoisted_2, _hoisted_3])]);
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormRepeater.vue":
/*!**************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormRepeater.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsFormRepeater_vue_vue_type_template_id_0d792a7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true */ "./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true");
/* harmony import */ var _NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsFormRepeater.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=script&lang=js");



_NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsFormRepeater_vue_vue_type_template_id_0d792a7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0d792a7a"
/* hot reload */
if (false) {}

_NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsFormRepeater.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFormRepeater.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true":
/*!********************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormRepeater_vue_vue_type_template_id_0d792a7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsFormRepeater_vue_vue_type_template_id_0d792a7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsFormRepeater.vue?vue&type=template&id=0d792a7a&scoped=true");


/***/ })

}]);