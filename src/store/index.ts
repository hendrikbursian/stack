import {
  ActionContext,
  ActionTree,
  CommitOptions,
  createStore,
  DispatchOptions,
  GetterTree,
  MutationTree,
  Store as VuexStore
} from 'vuex'

export enum MutationTypes {
  ADD = 'ADD'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export enum ActionTypes {}
// ADD = 'ADD'

export type Mutations<S = State> = {
  [MutationTypes.ADD](state: S, item: string): void
}

export type Actions = {
  // [ActionTypes.GET_COUTNER](
  //   { commit }: AugmentedActionContext,
  //   payload: number
  // ): Promise<number>
}

export type Getters = {
  // items(state: State): string[]
}

const defaultState = {
  items: [
    //
    'https://google.de'
  ]
}

function loadState() {
  const state = window.localStorage.getItem('store')

  if (!state) return

  return JSON.parse(state)
}

const state = loadState() || defaultState

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD](state, item: string) {
    state.items.unshift(item)
    window.localStorage.setItem('store', JSON.stringify(state))
  }
}

const actions: ActionTree<State, State> & Actions = {}

const getters: GetterTree<State, State> & Getters = {
  // items: state => state.items
}

export const store = createStore({
  state,
  mutations,
  getters,
  actions,
  modules: {}
})

export type State = typeof state

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export function useStore() {
  return store as Store
}
