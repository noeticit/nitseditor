(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsSingleDropzone_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue2-dropzone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsSingleDropzone",
  components: {
    vueDropzone: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue2-dropzone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  props: {
    label: String,
    value: '',
    error: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    hint: {
      type: String,
      "default": function _default() {
        return '';
      }
    },
    placeholder: String,
    model: String
  },
  data: function data() {
    return {
      options: {
        url: "/nits-system-api/upload-files",
        maxFilesize: 20,
        // MB
        maxFiles: 1,
        // chunking: true,
        // chunkSize: 500, // Bytes
        thumbnailWidth: 150,
        // px
        thumbnailHeight: 150,
        addRemoveLinks: true
      }
    };
  },
  mounted: function mounted() {
    if (this.value) {
      var file = {
        size: 123,
        name: "Icon",
        type: "image/png"
      };
      var url = this.value;
      this.$refs.myVueDropzone.manuallyAddFile(file, url);
    }
  },
  methods: {
    removeAllFiles: function removeAllFiles() {
      this.$refs.myVueDropzone.removeAllFiles();
    },
    afterComplete: function afterComplete(file) {
      var info = typeof file.xhr !== 'undefined' && typeof file.xhr.response !== 'undefined' ? JSON.parse(file.xhr.response) : {};

      if (typeof info.link !== 'undefined') {
        // const data = {
        //     field: this.model,
        //     value: info.link
        // }
        // eventBus.$emit('nits-form-input', data)
        this.$emit('input', info.link);
      }
    }
  },
  computed: {
    errorDisplay: function errorDisplay() {
      if (this.error.length) return this.error.join(', ');else return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-90e16acc");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-90e16acc");

var _hoisted_1 = {
  "class": "flex-col justify-start py-2 w-full"
};
var _hoisted_2 = {
  "class": "mt-2 ml-2 block uppercase tracking-wide text-left text-gray-700 text-sm font-bold mb-2"
};
var _hoisted_3 = {
  "class": "dropzone-custom-content"
};
var _hoisted_4 = {
  "class": "dropzone-custom-title"
};
var _hoisted_5 = {
  key: 0,
  "class": "text-xs text-gray-400 font-medium"
};
var _hoisted_6 = {
  key: 1,
  "class": "text-xs text-pink-600 font-medium"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_vue_dropzone = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-dropzone");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_dropzone, {
    ref: "myVueDropzone",
    id: "dropzone",
    options: $data.options,
    useCustomSlot: true,
    value: $props.value,
    onVdropzoneComplete: $options.afterComplete
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.placeholder), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div class=\"subtitle\">...or click to select a file from your computer</div>")])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["options", "value", "onVdropzoneComplete"]), $props.hint ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.hint), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $options.errorDisplay ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.errorDisplay), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsSingleDropzone.vue":
/*!****************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsSingleDropzone.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsSingleDropzone_vue_vue_type_template_id_90e16acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true */ "./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true");
/* harmony import */ var _NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsSingleDropzone.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=script&lang=js");



_NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsSingleDropzone_vue_vue_type_template_id_90e16acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-90e16acc"
/* hot reload */
if (false) {}

_NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsSingleDropzone.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsSingleDropzone_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsSingleDropzone.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsSingleDropzone_vue_vue_type_template_id_90e16acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsSingleDropzone_vue_vue_type_template_id_90e16acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsSingleDropzone.vue?vue&type=template&id=90e16acc&scoped=true");


/***/ })

}]);