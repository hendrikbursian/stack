const defaults = {
  items: [] as string[]
}

export type State = typeof defaults

function load(): State | null {
  const state = window.localStorage.getItem('store')

  if (!state) return null

  return JSON.parse(state)
}

export function save(state: State) {
  window.localStorage.setItem('store', JSON.stringify(state))
}

export const state = load() || defaults
