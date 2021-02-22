(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_components_Builder_BuilderElement_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/BuilderElement.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/BuilderElement.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BuilderElement",
  data: function data() {
    return {
      openTab: 1,
      Add: false,
      isVisible: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpen: false,
      addedRow: false,
      hideButton: true,
      components: [{
        id: 1,
        title: 'Input Text',
        icon: '/nits-assets/images/row.png',
        desc: 'Input text box',
        component_name: 'nits-input-text',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                hidden: true,
                model: 'value',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Input Type',
                placeholder: 'Select one',
                options: [{
                  label: 'String',
                  value: 'string'
                }, {
                  label: 'Number',
                  value: 'number'
                }],
                model: 'type',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'class',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'id',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'CSS Animation',
                placeholder: 'Select ',
                options: [],
                model: 'animation',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 2,
        title: 'Check Box',
        icon: '/nits-assets/images/checkbox.png',
        desc: 'Place content elements inside the Checkbox',
        component_name: 'nits-check-box',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Checked',
                placeholder: 'Select one',
                options: [{
                  label: 'True',
                  value: 'true'
                }, {
                  label: 'False',
                  value: 'false'
                }],
                model: 'checked',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 3,
        title: 'Editor',
        icon: '/nits-assets/images/ckeditor.png',
        desc: 'Place content elements inside the editor',
        component_name: 'nits-editor',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 4,
        title: 'Date Picker',
        icon: '/nits-assets/images/date1.jpg',
        desc: 'Place content elements inside the row',
        component_name: 'nits-date-picker',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 5,
        title: 'Input File',
        icon: '/nits-assets/images/inputfile.png',
        desc: 'Place content elements inside the row',
        component_name: 'input_file',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }]
          }
        }
      }, // {id: 6, title:'Form', icon:'/nits-assets/images/form.jpg', desc:'Place content elements inside the row',  component_name: 'form'},
      {
        id: 7,
        title: 'Input Date',
        icon: '/nits-assets/images/inputdate.png',
        desc: 'Place content elements inside the row',
        component_name: 'nits-input-date',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 8,
        title: 'Multi Select',
        icon: '/nits-assets/images/multiselect.png',
        desc: 'Place content elements inside the row',
        component_name: 'nits-input-multi-select',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'API URL',
                placeholder: 'Enter api',
                model: 'api_url',
                value: [],
                api_url: '',
                options: [],
                optionLabel: 'name',
                trackBy: 'id'
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Multiple Selection',
                placeholder: 'Select one',
                options: [{
                  label: 'Yes',
                  value: 'yes'
                }, {
                  label: 'No',
                  value: 'no'
                }],
                model: 'multiple',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Select Model',
                placeholder: 'Select one',
                options: [],
                model: 'model_select',
                api_url: '/nits-system-api/model',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 9,
        title: 'Single Select',
        icon: '/nits-assets/images/select1.png',
        desc: 'Place content elements inside the row',
        component_name: 'nits-input-select',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'API URL',
                placeholder: 'Enter api',
                model: 'api_url',
                value: '',
                api_url: '',
                options: []
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Select Model',
                placeholder: 'Select one',
                options: [],
                model: 'model_select',
                api_url: '/nits-system-api/model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 10,
        title: 'Text',
        icon: '/nits-assets/images/text.png',
        desc: 'Place content elements inside the row',
        component_name: 'text',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Input Type',
                placeholder: 'Select one',
                options: [{
                  label: 'String',
                  value: 'string'
                }, {
                  label: 'Number',
                  value: 'number'
                }],
                model: 'text',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'CSS Animation',
                placeholder: 'Select ',
                options: [],
                model: 'animation',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 11,
        title: 'Multiple DropZone',
        icon: '/nits-assets/images/multidropzone.png',
        desc: 'Place content elements inside the row',
        component_name: 'multiple_dropzone',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Upload Limit',
                placeholder: 'Select one',
                options: [{
                  label: '1',
                  value: '1'
                }, {
                  label: '2',
                  value: '2'
                }, {
                  label: '3',
                  value: '3'
                }, {
                  label: '4',
                  value: '4'
                }],
                model: 'text',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'CSS Animation',
                placeholder: 'Select ',
                options: [],
                model: 'animation',
                value: ''
              }
            }]
          }
        }
      }, {
        id: 12,
        title: 'Single DropZone',
        icon: '/nits-assets/images/dropzone.png',
        desc: 'Place content elements inside the row',
        component_name: 'nits-single-dropzone',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Label',
                placeholder: 'Enter Label',
                model: 'label',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Hint',
                placeholder: 'Enter Hint',
                model: 'hint',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Placeholder',
                placeholder: 'Enter Placeholder',
                model: 'placeholder',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'CSS Animation',
                placeholder: 'Select ',
                options: [],
                model: 'animation',
                value: ''
              }
            }]
          }
        }
      }, // {id: 13, title:'Button', icon:'/nits-assets/images/button.png', desc:'Place content elements inside the row',  component_name: 'button'},
      // {id: 14, title:'Group Button', icon:'/nits-assets/images/groupbutton.png', desc:'Place content elements inside the row',  component_name: 'group_button'},
      // {id: 15, title:'Pagination', icon:'/nits-assets/images/pagination.png', desc:'Place content elements inside the row',  component_name: 'pagination'},
      // {id: 16, title:'Table', icon:'/nits-assets/images/table.png', desc:'Place content elements inside the row',  component_name: 'table'},
      // {id: 17, title:'Tabs', icon:'/nits-assets/images/tabs.png', desc:'Place content elements inside the row',  component_name: 'tabs'},
      // {id: 18, title:'Alert', icon:'/nits-assets/images/alert.png', desc:'Place content elements inside the row',  component_name: 'alert'},
      // {id: 19, title:'Bread Crumb', icon:'/nits-assets/images/timeline-512.png', desc:'Place content elements inside the row',  component_name: 'bread_crumb'},
      // {id: 20, title:'Footer', icon:'/nits-assets/images/footer.png', desc:'Place content elements inside the row',  component_name: 'footer'},
      // {id: 21, title:'Menu', icon:'/nits-assets/images/menu.png', desc:'Place content elements inside the row',  component_name: 'menu'},
      // {id: 22, title:'Video Player', icon:'/nits-assets/images/video.png', desc:'Place content elements inside the row',  component_name: 'video_player'},
      // {id: 23, title:'Progress Bar', icon:'/nits-assets/images/progress.png', desc:'Place content elements inside the Progress Bar',  component_name: 'progress_bar'},
      // {id: 24, title:'Empty Space', icon:'/nits-assets/images/emptyspace.png', desc:'Place content elements inside the Empty Space',  component_name: 'empty_space'},
      // {id: 25, title:'Pie Chart', icon:'/nits-assets/images/piechart.png', desc:'Place content elements inside the row',  component_name: 'pie_chart'},
      {
        id: 26,
        title: 'Form Repeater',
        icon: '/nits-assets/images/row.png',
        desc: 'Add multiple fields',
        component_name: 'nits-form-repeater',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Field Name',
                placeholder: 'Enter field name',
                model: 'model',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: []
          }
        }
      }, {
        id: 27,
        title: 'Divider',
        icon: '/nits-assets/images/line.png',
        desc: 'Just a simple Division',
        component_name: 'nits-division',
        options: {
          general: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6" // rows: "1"

              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Margin',
                placeholder: 'Enter Margin',
                model: 'margin',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Heading',
                placeholder: 'Enter heading',
                model: 'heading',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'Underline',
                placeholder: 'Select one',
                options: [{
                  label: 'Yes',
                  value: 'true'
                }, {
                  label: 'No',
                  value: 'false'
                }],
                model: 'underline',
                value: ''
              }
            }]
          },
          display: {
            component: 'nits-form-check',
            attrs: {
              grid: {
                cols: "1",
                gap: "6"
              }
            },
            child_components: [{
              component: 'nits-input-text',
              attrs: {
                label: 'Extra Class Name',
                placeholder: 'Enter Text',
                model: 'text',
                value: ''
              }
            }, {
              component: 'nits-input-text',
              attrs: {
                label: 'Element ID',
                placeholder: 'Enter Element ID',
                model: 'test_text',
                value: ''
              }
            }, {
              component: 'nits-input-select',
              attrs: {
                label: 'CSS Animation',
                placeholder: 'Select ',
                options: [],
                model: 'animation',
                value: ''
              }
            }]
          }
        }
      }]
    };
  },
  props: {
    element: Object,
    child_components: Array,
    component: String,
    row_index: Number,
    column_index: Number,
    element_index: Number,
    form_column_index: Number,
    form_element_index: Number,
    attrs: Object
  },
  created: function created() {
    var _this = this;

    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('popup-close', function () {
      _this.isOpen2 = false;
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-close', function () {
      _this.isOpen3 = false;
    });
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-popup-close', function () {
      _this.isOpen4 = false;
    });
  },
  methods: {
    openModal: function openModal(title) {
      if (title === 'Form Repeater') this.isOpen3 = true;else if (typeof this.form_element_index !== "undefined") this.isOpen4 = true;else this.isOpen2 = true;
    },
    removeField: function removeField() {
      var data = {
        row: this.row_index,
        column: this.column_index,
        element: this.element_index
      };
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('remove-row-element', data);
    },
    addElement: function addElement(item) {
      var component_element = {
        component: item.component_name,
        attrs: {
          child_components: []
        }
      };
      if (typeof this.form_element_index === 'undefined') Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('add-component', {
        component: component_element,
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: this.element_index
      });else Object(function webpackMissingModule() { var e = new Error("Cannot find module 'NitsModels/_events'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-repeater-add-component', {
        component: component_element,
        row_index: this.row_index,
        column_index: this.column_index,
        element_index: this.element_index,
        form_element_index: this.form_element_index,
        form_column_index: this.form_column_index
      });
      this.Add = true;
      this.addedRow = true;
      this.isOpen = false;
      this.hideButton = false;
    },
    toggleTabs: function toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    }
  },
  components: {
    'VueTailwindModal': function VueTailwindModal() {
      return Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-tailwind-modal'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
    },
    'InputField': function InputField() {
      return __webpack_require__.e(/*! import() */ "resources_components_Builder_Elements_InputField_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./Elements/InputField */ "./resources/components/Builder/Elements/InputField.vue"));
    },
    'PopupOptions': function PopupOptions() {
      return __webpack_require__.e(/*! import() */ "resources_components_Builder_PopupOptions_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./PopupOptions */ "./resources/components/Builder/PopupOptions.vue"));
    }
  },
  computed: {
    elementData: function elementData() {
      var _this2 = this;

      var index = _.findIndex(this.components, function (a) {
        return _this2.component === a.component_name;
      });

      if (index > -1) return this.components[index];else return {};
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-9a6438b4");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-9a6438b4");

var _hoisted_1 = {
  "class": "flex  w-full m-2 p-2"
};
var _hoisted_2 = {
  key: 0,
  "class": "max-w-md my-auto top-0 bottom-0 right-0 left-0 mx-auto"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-6 w-6 my-2 mx-3 font-bold",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
})], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "h-10 w-10 mt-1 mb-2 mr-3 cursor-pointer  font-bold text-white rounded-lg"
};
var _hoisted_5 = {
  "class": "flex-col text-left"
};
var _hoisted_6 = {
  "class": "text-blue-500 font-bold"
};
var _hoisted_7 = {
  "class": "text-xs text-gray-600 mt-1"
};
var _hoisted_8 = {
  "class": "max-w-md absolute my-auto item-center top-0 bottom-0 right-0 left-0 mx-auto"
};
var _hoisted_9 = {
  "class": "bg-transparent rounded"
};
var _hoisted_10 = {
  "class": "flex ml-auto mr-auto item-center cursor-pointer"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex cursor-move rounded-l bg-blue-500 p-2  text-white hover:bg-blue-600 text-normal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 ",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M507.353 245.245l-83.692-78.769a14.77 14.77 0 00-24.891 10.755v34.462h-98.462v-98.462h34.462a14.768 14.768 0 0010.755-24.891l-78.77-83.693a14.772 14.772 0 00-21.51 0L166.476 88.34a14.77 14.77 0 0010.755 24.891h34.462v98.462h-98.462v-34.462a14.768 14.768 0 00-24.891-10.755L4.647 245.245a14.772 14.772 0 000 21.51l83.692 78.769a14.77 14.77 0 0024.891-10.755v-34.462h98.462v98.462H177.23a14.768 14.768 0 00-10.755 24.891l78.769 83.692a14.773 14.773 0 0021.511.001l78.769-83.692a14.77 14.77 0 00-10.755-24.891h-34.462v-98.462h98.462v34.462a14.768 14.768 0 0024.891 10.755l83.692-78.769a14.773 14.773 0 00.001-21.511zm-79.045 55.342v-15.049c0-8.157-6.613-14.769-14.769-14.769h-128c-8.157 0-14.769 6.613-14.769 14.769v128c0 8.157 6.613 14.769 14.769 14.769h15.049L256 475.682l-44.587-47.374h15.049c8.157 0 14.769-6.613 14.769-14.769v-128c0-8.157-6.613-14.769-14.769-14.769h-128c-8.157 0-14.769 6.613-14.769 14.769v15.049L36.319 256l47.374-44.587v15.049c0 8.157 6.613 14.769 14.769 14.769h128c8.157 0 14.769-6.613 14.769-14.769v-128c0-8.157-6.613-14.769-14.769-14.769h-15.049L256 36.319l44.587 47.374h-15.049c-8.157 0-14.769 6.613-14.769 14.769v128c0 8.157 6.613 14.769 14.769 14.769h128c8.157 0 14.769-6.613 14.769-14.769v-15.049L475.682 256l-47.374 44.587z"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "ml-2 text-xs mx-2"
}, "Text Block ")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "flex bg-blue-500 p-2  text-white hover:bg-blue-600 text-normal"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.69 2.661c-1.894-1.379-3.242-1.349-3.754-1.266a.538.538 0 00-.35.223l-4.62 6.374-2.263 3.123a2.447 2.447 0 00-.462 1.307l-.296 5.624a.56.56 0 00.76.553l5.256-2.01c.443-.17.828-.465 1.106-.849l1.844-2.545 5.036-6.949a.56.56 0 00.1-.423c-.084-.526-.487-1.802-2.357-3.162zM8.977 15.465l-2.043.789a.19.19 0 01-.221-.062 5.145 5.145 0 00-1.075-1.03 5.217 5.217 0 00-1.31-.706.192.192 0 01-.126-.192l.122-2.186.549-.755s1.229-.169 2.833.998c1.602 1.166 1.821 2.388 1.821 2.388l-.55.756z"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "flex bg-blue-500 p-2 text-white hover:bg-blue-600  text-normal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 mx-1",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5 13V8h2L3.5 4 0 8h2v6a2 2 0 002 2h9.482l-2.638-3H5zm4.156-6L6.518 4H16c1.104 0 2 .897 2 2v6h2l-3.5 4-3.5-4h2V7H9.156z"
})])], -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 mx-1 font-bold",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"
})], -1
/* HOISTED */
);

var _hoisted_16 = {
  key: 3,
  "class": "main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster",
  style: {
    "background": "rgba(0,0,0,.7)"
  }
};
var _hoisted_17 = {
  "class": "border border-teal-500 shadow-lg modal-container bg-white w-full mx-20 rounded shadow-lg z-50 overflow-y-auto"
};
var _hoisted_18 = {
  "class": "flex relative justify-between border-solid border-b-2 p-2 text-center items-center"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-left font-medium ml-6 text-sm antialiased leading-snug text-gray-700 tracking-normal font-sans"
}, "Add Elements", -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "flex py-1"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "w-2/3 h-6 pl-3 mt-1 pr-2 bg-white border rounded-full flex justify-between items-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
  type: "search",
  name: "search",
  id: "search",
  placeholder: "Search Elements",
  "class": "appearance-none text-xs w-full outline-none focus:outline-none active:outline-none"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "submit",
  "class": "ml-1 outline-none focus:outline-none active:outline-none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 my-2 mx-2 text-gray-500",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
})])])], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  "class": "h-4 w-4 my-2 mx-2 font-bold",
  fill: "currentColor",
  viewBox: "0 0 512.001 512.001",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  "fill-rule": "evenodd",
  d: "M512.001 84.853L427.148 0 256.001 171.147 84.853 0 0 84.853 171.148 256 0 427.148l84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853L340.853 256z"
})], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "overflow-y-auto scroll_bar",
  style: {
    "height": "500px"
  }
};
var _hoisted_24 = {
  "class": "flex-col text-left"
};
var _hoisted_25 = {
  "class": "text-blue-500 font-bold"
};
var _hoisted_26 = {
  "class": "text-xs text-gray-600 mt-1"
};
var _hoisted_27 = {
  "class": "flex justify-between border-solid border-t-2 p-2 text-center items-center"
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_form_popup_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("form-popup-options");

  var _component_popup_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("popup-options");

  var _component_form_popup_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("form-popup-modal");

  var _component_nits_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("nits-grid");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [$data.hideButton ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.isOpen = !$data.isOpen;
    }),
    "class": "h-10 w-12 text-white rounded hover:bg-gray-300 inline-block bg-gray-400 font-bold"
  }, [_hoisted_3])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.addedRow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 1,
    onMouseover: _cache[4] || (_cache[4] = function ($event) {
      return $data.isVisible = true;
    }),
    onMouseleave: _cache[5] || (_cache[5] = function ($event) {
      return $data.isVisible = false;
    }),
    onKeydown: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function ($event) {
      return $data.isVisible = !$data.isVisible;
    }, ["enter"])),
    "class": "flex relative w-full mr-4 bg-gray-200 p-2 border border-gray-200 hover:border-1 hover:border-blue-500"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
    "class": "h-10 w-10 mr-3",
    src: $options.elementData.icon
  }, null, 8
  /* PROPS */
  , ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.elementData.title), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.elementData.desc), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", {
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.openModal($options.elementData.title);
    }, ["prevent"])),
    "class": "h-4 w-4 mx-1",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [_hoisted_13]))]), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.removeField();
    }, ["prevent"])),
    "class": "flex bg-blue-500 p-2 text-white hover:bg-blue-600 rounded-r text-normal"
  }, [_hoisted_15])])])], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.isVisible]])], 32
  /* HYDRATE_EVENTS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $data.isOpen4 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_form_popup_options, {
    key: 0,
    elementData: $options.elementData,
    tab_index: "general",
    row_index: $props.row_index,
    column_index: $props.column_index,
    element_index: $props.element_index,
    form_element_index: $props.form_element_index,
    form_column_index: $props.form_column_index,
    element: $props.element,
    component_name: $options.elementData.component_name
  }, null, 8
  /* PROPS */
  , ["elementData", "row_index", "column_index", "element_index", "form_element_index", "form_column_index", "element", "component_name"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isOpen2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_popup_options, {
    key: 1,
    elementData: $options.elementData,
    tab_index: "general",
    row_index: $props.row_index,
    column_index: $props.column_index,
    element_index: $props.element_index,
    element: $props.element,
    component_name: $options.elementData.component_name
  }, null, 8
  /* PROPS */
  , ["elementData", "row_index", "column_index", "element_index", "element", "component_name"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isOpen3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_form_popup_modal, {
    key: 2,
    elementData: $options.elementData,
    row_index: $props.row_index,
    column_index: $props.column_index,
    element_index: $props.element_index,
    element: $props.element,
    component_name: $options.elementData.component_name
  }, null, 8
  /* PROPS */
  , ["elementData", "row_index", "column_index", "element_index", "element", "component_name"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.isOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [_hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    onClick: _cache[7] || (_cache[7] = function ($event) {
      return $data.isOpen = false;
    }),
    "class": "text-gray-600 ml-16 inline-block bg-white hover:bg-red-600 hover:text-white rounded shadow-md no-underline mr-3 focus:outline-none active:shadow-none font-bold"
  }, [_hoisted_22])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_nits_grid, {
    "class": "px-5 py-5",
    cols: "5",
    gap: "2"
  }, {
    "default": _withId(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.components, function (ele, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.addElement(ele, index);
          }, ["prevent"]),
          "class": "flex w-full bg-gray-200 p-2 cursor-pointer border border-gray-200 hover:border-1 hover:border-blue-500"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
          "class": "h-10 w-10 mt-3 mr-3",
          src: ele.icon
        }, null, 8
        /* PROPS */
        , ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ele.title), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(ele.desc), 1
        /* TEXT */
        )])], 8
        /* PROPS */
        , ["onClick"]);
      }), 256
      /* UNKEYED_FRAGMENT */
      ))];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    onClick: _cache[8] || (_cache[8] = function ($event) {
      return $data.isOpen = !$data.isOpen;
    }),
    "class": "ml-5 my-2 bg-transparent border border-gray-500 text-gray-600 font-semibold py-1 px-4 rounded"
  }, "Close")])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
});

/***/ }),

/***/ "./resources/components/Builder/BuilderElement.vue":
/*!*********************************************************!*\
  !*** ./resources/components/Builder/BuilderElement.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuilderElement_vue_vue_type_template_id_9a6438b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true */ "./resources/components/Builder/BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true");
/* harmony import */ var _BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuilderElement.vue?vue&type=script&lang=js */ "./resources/components/Builder/BuilderElement.vue?vue&type=script&lang=js");



_BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _BuilderElement_vue_vue_type_template_id_9a6438b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-9a6438b4"
/* hot reload */
if (false) {}

_BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/components/Builder/BuilderElement.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/components/Builder/BuilderElement.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/components/Builder/BuilderElement.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderElement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderElement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/BuilderElement.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/components/Builder/BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true":
/*!***************************************************************************************************!*\
  !*** ./resources/components/Builder/BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderElement_vue_vue_type_template_id_9a6438b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BuilderElement_vue_vue_type_template_id_9a6438b4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/Builder/BuilderElement.vue?vue&type=template&id=9a6438b4&scoped=true");


/***/ })

}]);