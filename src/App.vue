<template>
  <div id="app" class="m-4 font-sans text-darkblue">
    <div class="max-w-screen-md">
      <input
        class="w-full max-w-screen-sm bg-white rounded-md text-gray-500 hover:text-darkblue focus:text-darkblue border-current transition-colors duration-150 ease-out border px-2 py-1 shadow-local flex items-center focus:outline-none mb-4"
        type="text"
        @keydown.enter="add"
      />

      <a
        v-for="(item, index) in items"
        :key="index"
        :href="item"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white hover:bg-green-200 ease-out rounded-md border-current border px-2 py-1 shadow-local flex items-center mb-1 cursor-pointer"
      >
        <img src="favicon.ico" class="h-5 w-5" />
        <div class="ml-2">{{ item }}</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from './store'
import { MutationTypes } from './store/mutations'

export default defineComponent({
  components: {},

  setup() {
    const store = useStore()
    const items = computed(() => store.state.items)

    function add(e: KeyboardEvent) {
      const input = e.currentTarget as HTMLInputElement
      store.commit(MutationTypes.ADD, input.value)
    }

    return { items, add }
  }
})
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
