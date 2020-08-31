export type StackItem = { id: string; created: string; content: string }

const defaults = {
  items: {} as { [id: string]: StackItem }
}

export type State = typeof defaults

function load(): State | null {
  const state = window.localStorage.getItem('store')

  if (!state) return null

  return JSON.parse(state)
}

// TODO: migrate
export function save(state: State) {
  window.localStorage.setItem('store', JSON.stringify(state))
}

export const state = load() || defaults
