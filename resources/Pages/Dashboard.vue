<template>
    <app-layout>
        <template #header>
<!--            <button @click.prevent="download" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-->
<!--                Download Plugin-->
<!--            </button>-->
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <welcome />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'
    import axios from "axios";

    export default {
        components: {
            AppLayout,
            Welcome,
        },
        methods:{
            download(){
                axios.post('/api/download-plugin',
                    {}
                ).then(response => {
                    if (response.status === 200) {

                    }
                })
            }
        }
    }
</script>
