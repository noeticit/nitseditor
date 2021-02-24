<template>
  <div class="w-full h-24 " :style="'background: '+ background_color">
    <div class="flex max-w-8xl mx-auto h-full">
      <div class="grid grid-cols-5 w-full">
       <div class="col-span-2 flex h-full">
         <div class="flex my-auto">
             <a :href="item.url" @mouseover="item.open = true" @mouseleave="item.open = false" @keydown.enter="item.open = !item.open" v-for="(item, index) in menu" class="flex my-auto mx-5 text-base cursor-pointer family-mont font-medium relative" :style="'color:' +text_color">
                 <span>{{item.name}}</span>
                 <svg v-if="item.sub_menu && item.sub_menu.length" class="h-3 w-3 ml-1 my-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.437 407.437"><path d="M386.258 91.567l-182.54 181.945L21.179 91.567 0 112.815 203.718 315.87l203.719-203.055z" fill-rule="evenodd"/></svg>
                 <div v-if="item.sub_menu && item.sub_menu.length" v-show="item.open" :style="'background: '+ background_color" class="w-36 shadow-lg rounded-lg h-auto absolute top-12 left-0">
                     <div class="mx-3">
                         <div v-for="(ele,ind) in item.sub_menu" class="flex justify-between" :class="ind+1 < item.sub_menu.length ? 'border-b' : ''">
                             <a href="#" :style="'color:' +text_color" class="hover:text-indigo-700 cursor-pointer my-3 family-mont text-sm font-medium">{{ele.name}}</a>
                         </div>
                     </div>
                 </div>
             </a>
         </div>
         </div>
        <div class="flex col-span-1">
          <img class="m-auto h-12" :src="logo">
        </div>
        <div class="flex col-span-2 flex justify-end">
          <div class="flex" :style="'color:' +text_color">
              <svg v-for="(item, index) in svg_icon" class="h-6 w-6 my-auto mx-4" fill="currentColor" viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg"><path :d="item.path" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center-logo-header",
    props: {
        logo: String,
        menu:Array,
        background_color:{
            type: String,
            default:'bg-gray-900'
        },
        text_color:{
            type: String,
            default:'text-white'
        },
        svg_icon:Array
    }
}
</script>

<style scoped>

</style>
