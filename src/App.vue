<template>
  <div id="app" class="m-4 font-sans text-darkblue">
    <div class="max-w-screen-md">
      <input
        ref="input"
        class="w-full max-w-screen-sm bg-white
      rounded-md text-gray-500 hover:text-darkblue focus:text-darkblue
      border-current transition-colors duration-150 ease-out border px-2 py-1
      shadow-local flex items-center focus:outline-none mb-4"
        type="text"
        @keydown.enter="add"
      />

      <a
        v-for="(item, index) in items"
        :key="index"
        :href="getHref(item)"
        :target="getTarget(item)"
        rel="noopener noreferrer"
        class="select-none bg-white hover:bg-green-200 ease-out rounded-md border-current border px-2 py-1 shadow-local flex items-center mb-1 cursor-pointer"
      >
        <img src="favicon.ico" class="h-5 w-5" />
        <div class="ml-2">{{ item }}</div>

        <button class="ml-auto focus:outline-none" @click="remove(item)">
          <svg
            width="12"
            height="12"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.63605 10.4138L14.8583 16.636L16.636 14.8583L10.4138 8.63606L16.636 2.41386L14.8583 0.636084L8.63605 6.85828L2.41381 0.636047L0.636037 2.41382L6.85827 8.63606L0.636032 14.8583L2.41381 16.6361L8.63605 10.4138Z"
              fill="currentColor"
            />
          </svg>
        </button>
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

      if (!input.value) return
      if (items.value.indexOf(input.value) > -1) return

      store.commit(MutationTypes.ADD, input.value)
      input.value = ''
    }

    function remove(item: string) {
      store.commit(MutationTypes.REMOVE, item)
    }

    function getHref(item: string): string | undefined {
      if (!item.startsWith('http')) return

      return item
    }

    function getTarget(item: string): string {
      if (!item.startsWith('http')) return '_self'
      return '_blank'
    }

    return { items, add, getHref, getTarget, remove }
  },

  methods: {
    focusInput() {
      this.$nextTick(() => {
        const input = this.$refs.input as HTMLInputElement
        input.focus()
      })
    }
  },

  mounted() {
    this.focusInput()
  }
})
</script>

<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
