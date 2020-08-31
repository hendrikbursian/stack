<template>
  <div id="app" class="m-4 font-sans text-darkblue">
    <div class="max-w-screen-md">
      <input
        autofocus
        ref="input"
        class="w-full max-w-screen-sm bg-white
      rounded-md text-gray-500 hover:text-darkblue focus:text-darkblue
      border-current transition-colors duration-150 ease-out border px-2 py-1
      shadow-local flex items-center focus:outline-none mb-4"
        type="text"
        @keydown.enter="add"
      />

      <StackItem v-for="itemId in itemIds" :key="itemId" :itemId="itemId" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useStore } from './store'
import StackItem from '@/components/StackItem.vue'
import { ActionTypes } from './store/actions'

export default defineComponent({
  components: {
    StackItem
  },

  setup() {
    const store = useStore()
    const itemIds = computed(() => store.getters.itemIdsSortedByCreatedDesc)

    function add(e: KeyboardEvent) {
      const input = e.currentTarget as HTMLInputElement

      if (!input.value) return

      const content = input.value

      store.dispatch(ActionTypes.ADD, content)

      input.value = ''
    }

    const input = ref(null as HTMLInputElement | null)
    onMounted(() => input.value?.focus())

    return { input, itemIds, add }
  }
})
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
