(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Base_Forms_NitsForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsForm.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsForm.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NitsForm",
  data: function data() {
    return {
      errors: {},
      loading: false,
      form_data: {}
    };
  },
  props: {
    forms: Array,
    api_url: String,
    redirect_api: String,
    back_api: String,
    type: String,
    id: Number
  },
  created: function created() {
    var _this = this;

    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('nits-form-input', function (data) {
      if (typeof data !== 'undefined' || data !== null) {
        _this.form_data[data.field] = data.value;

        _this.forms.forEach(function (row) {
          row.attrs.child_components.forEach(function (column) {
            column.attrs.child_components.forEach(function (type) {
              if (type.attrs.model === data.field) {
                type.attrs.value = data.value;
              }
            });
          });
        }); // this.forms.forEach((row) => {
        //     row.attrs.child_components.forEach((column) => {
        //         column.attrs.child_components.forEach((repeater) => {
        //             repeater.attrs.child_components.forEach((col) => {
        //                 col.attrs.child_components.forEach((type) => {
        //                     if(type.attrs.model === data.field) {
        //                         type.attrs.value = data.value
        //                     }
        //                 })
        //             })
        //         })
        //
        //     })
        // })

      }
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-add', function (data) {
      if (typeof data !== 'undefined' || data !== null) {
        _this.forms.forEach(function (row, rIndex) {
          row.attrs.child_components.forEach(function (column, colIndex) {
            column.attrs.child_components.forEach(function (repeater, repeaterIndex) {
              if (repeater.attrs.model === data.field) {
                var postData = {
                  rowIndex: rIndex,
                  columnIndex: colIndex,
                  repeaterIndex: repeaterIndex,
                  field: data.field,
                  value: data.value
                };
                Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('add-form-data', postData);
              }
            });
          });
        });
      }
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-delete', function (data) {
      if (typeof data !== 'undefined' || data !== null) {
        _this.forms.forEach(function (row, rIndex) {
          row.attrs.child_components.forEach(function (column, colIndex) {
            column.attrs.child_components.forEach(function (repeater, repeaterIndex) {
              if (repeater.attrs.model === data.field) {
                var postData = {
                  rowIndex: rIndex,
                  columnIndex: colIndex,
                  repeaterIndex: repeaterIndex,
                  field: data.field,
                  index: data.value
                };
                Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('delete-form-data', postData);
              }
            });
          });
        });
      }
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../Models/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-data', function (data) {
      _this.form_data = data;
    });
  },
  methods: {
    update: function update() {
      var _this2 = this;

      this.$api.update(this.api_url + '/' + this.id, this.form_data).then(function (response) {
        if (response.status === 202) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Updated!', 'Your data has been Updated.', 'success').then(function () {
            _this2.$router.push({
              path: _this2.redirect_api
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
    },
    findModel: function findModel(ele) {
      var obj = {};
      ele.forEach(function (row) {
        row.attrs.child_components.forEach(function (column) {
          column.attrs.child_components.forEach(function (element) {
            if (typeof element.attrs.model !== 'undefined') {
              if (element.component === 'nits-form-repeater') {
                obj[element.attrs.model] = element.attrs.child_components.map(function (a) {
                  var d = {};
                  a.attrs.child_components.forEach(function (b) {
                    if (typeof b.attrs.model !== 'undefined') {
                      d[b.attrs.model] = b.attrs.value;
                    }
                  });
                  return d;
                });
              } else obj[element.attrs.model] = element.attrs.value;
            }
          });
        });
      });
      return obj;
    },
    submit: function submit() {
      var _this3 = this;

      this.loading = true;
      this.form_data = this.findModel(this.forms);
      console.log(this.form_data);
      this.$api.post(this.api_url, this.form_data).then(function (response) {
        if (response.status === 200) {
          Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('Created!', 'Your data has been created.', 'success').then(function () {
            _this3.$router.push({
              path: _this3.redirect_api
            });
          });
        }
      })["catch"](function (error) {
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
          title: "Oops!",
          text: error.response.data.message,
          type: "error"
        });
        _this3.loading = false;
        _this3.errors = error.response.data.errors;
      });
    }
  },
  watch: {
    $props: {
      handler: function handler() {
        console.log("From form object");
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-f37be3ca");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-f37be3ca");

var _hoisted_1 = {
  "class": "flex m-4 w-full"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer"
}, "Submit", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-center text-base antialiased tracking-tight font-sans text-white cursor-pointer"
}, "Update", -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "text-center text-base antialiased tracking-tight font-sans text-gray-600"
}, "Cancel", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.forms, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(item.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
      key: index
    }, item.attrs), null, 16
    /* FULL_PROPS */
    ))]);
  }), 256
  /* UNKEYED_FRAGMENT */
  )), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [$props.type === 'create' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 0,
    "class": [{
      'spinner': $data.loading
    }, "inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700"],
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_2], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.type === 'update' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 1,
    "class": [{
      'spinner': $data.loading
    }, "inline-flex mt-10 items-center rounded-lg py-2 px-6 bg-teal-700"],
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.update && $options.update.apply($options, arguments);
    }, ["prevent"]))
  }, [_hoisted_3], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: $props.back_api ? $props.back_api : '',
    "class": "inline-flex mt-10 ml-2 items-center rounded-lg py-2 px-6 border border-gray-400"
  }, {
    "default": _withId(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])])]);
});

/***/ }),

/***/ "./resources/components/Base/Forms/NitsForm.vue":
/*!******************************************************!*\
  !*** ./resources/components/Base/Forms/NitsForm.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NitsForm_vue_vue_type_template_id_f37be3ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true */ "./resources/components/Base/Forms/NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true");
/* harmony import */ var _NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NitsForm.vue?vue&type=script&lang=js */ "./resources/components/Base/Forms/NitsForm.vue?vue&type=script&lang=js");



_NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _NitsForm_vue_vue_type_template_id_f37be3ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-f37be3ca"
/* hot reload */
if (false) {}

_NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Base/Forms/NitsForm.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Base/Forms/NitsForm.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsForm.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Base/Forms/NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/components/Base/Forms/NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsForm_vue_vue_type_template_id_f37be3ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NitsForm_vue_vue_type_template_id_f37be3ca_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Base/Forms/NitsForm.vue?vue&type=template&id=f37be3ca&scoped=true");


/***/ })

}]);