<template>
    <div class="h-20 w-full bg-black ">
        <div class="flex justify-between max-w-7xl mx-auto h-full">
            <div class="flex my-auto">
                <div class="text-white text-4xl font-bold">CHARITY<span class=" text-yellow-400 ml-1">.</span></div>
            </div>
            <div class="flex my-auto">
              <simple-menu></simple-menu>
              <button class="px-5 ml-8 py-2 bg-yellow-400 hover:text-yellow-400 hover:bg-white text-white font-medium focus:outline-none text-base">Donate</button>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleMenu from "./menu/simple-menu";
export default {
name: "different-header",
  components: {SimpleMenu}
}
</script>

<style scoped>

</style>
