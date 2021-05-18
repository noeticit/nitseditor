require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import AppMarket from './../Pages/app-market';

// require('./../models/_layouts');

const el = document.getElementById('app');

const app = createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./../Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin);

app.component('app-market', AppMarket);
// app.component('AppMarket', () => import('./../Pages/app-market'));

app.mount(el);

InertiaProgress.init({ color: '#4B5563' });
