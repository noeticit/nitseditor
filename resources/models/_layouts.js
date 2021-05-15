// import Vue from 'vue'
//
// Vue.component('AppMarket', () => import('./../layouts/AppMarketLayout'))

import {defineAsyncComponent,defineComponent} from "vue";
import AppMarketLayout from "../layouts/AppMarketLayout";

export default defineComponent({
    name: 'app-comp',
    data() {
        return {

        }
    },
    components: {AppMarketLayout}
})

// import {defineAsyncComponent,defineComponent} from "vue";
//
// const requireContext = require.context(
//     "@/components", //path to components folder which are resolved automatically
//     true,
//     /\.vue$/i,
//     "sync"
// );
// let componentNames= requireContext
//     .keys()
//     .map((file) => file.replace(/(^.\/)|(\.vue$)/g, ""));
//
// let components= {};
//
// componentNames.forEach((component) => { //component represents the component name
//     components[component] = defineAsyncComponent(() => //import each component dynamically
//         import("@/components/components/" + component + ".vue")
//     );
// });
// export default defineComponent({
//     name: "App",
//     data() {
//         return {
//             componentNames,// you need this if you want to loop through the component names in template
//
//         };
//     },
//     components,//ES6 shorthand of components:components or components:{...components }
//
// });
