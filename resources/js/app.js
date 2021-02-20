
// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import route from "../../vendor/tightenco/ziggy/src/js";
import { Ziggy } from './ziggy'

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./../Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route: (name, params, absolute) => route(name, params, absolute, Ziggy)} })
    .use(InertiaPlugin)
    .mount(el);
