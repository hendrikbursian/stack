<template>
  <a
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    class="flex items-center px-2 py-1 mb-1 ease-out bg-white border border-current rounded-md cursor-pointer select-none hover:bg-green-200 shadow-local"
  >
    <div class="flex flex-col w-full overflow-x-hidden">
      <template v-if="metadata.title">
        <div class="text-xs font-bold whitespace-no-wrap">
          {{ metadata.title }}
        </div>
        <div class="text-xs text-gray-500 whitespace-no-wrap">
          {{ content }}
        </div>
      </template>
      <template v-else>
        <div class="text-xs font-bold">{{ content }}</div>
      </template>
    </div>

    <button class="ml-2 focus:outline-none" @click.prevent="remove">
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { ActionTypes } from '@/store/actions'

export default defineComponent({
  props: {
    itemId: {
      default: ''
    }
  },

  setup(props) {
    const store = useStore()

    const item = computed(() => store.getters.item(props.itemId))
    const href = computed(() => {
      if (!item.value.content.startsWith('http')) return

      return item.value.content
    })
    const target = computed(() => {
      return item.value.content.startsWith('http') ? '_blank' : '_self'
    })

    function remove() {
      store.dispatch(ActionTypes.REMOVE, props.itemId)
    }

    return { href, target, remove, ...item.value }
  }
})
</script>
