<template>
    <div class="block">
        <div v-if="canLogin" class="absolute mt-4 right-0 px-10">
            <inertia-link v-if="$page.props.user" href="/dashboard" class="text-sm text-gray-700 underline">
                Dashboard
            </inertia-link>

            <template v-else>
                <inertia-link href="/login" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Login</inertia-link>
                <inertia-link v-if="canRegister" href="/register" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose p-2 text-gray-600">Register</inertia-link>
            </template>

         </div>

        <div class="block flex h-screen">
            <div class="m-auto">
                <div class="font-serif subpixel-antialiased font-medium text-6xl text-gray-800 tracking-wider leading-4 items-center text-center">
                    Nits Editor
                </div>

                <div class="text-gray-400 mt-6 items-center text-center">
                    <a href="https://nitseditor.com/docs" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose text-gray-600 p-4">Docs</a>
                    <a href="https://github.com/noeticit/nitseditor" class="font-serif subpixel-antialiased font-normal tracking-normal leading-loose text-gray-600 p-4">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
        }
    }
</script>

<style scoped>

</style>
