import { MutationTree } from 'vuex'
import { save, State } from './state'

export enum MutationTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export type Mutations<S = State> = {
  [MutationTypes.ADD](state: S, item: string): void
  [MutationTypes.REMOVE](state: S, item: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD](state, item: string) {
    state.items.unshift(item)
    save(state)
  },
  [MutationTypes.REMOVE](state, item: string) {
    const index = state.items.indexOf(item)

    if (index === -1) return

    state.items.splice(index, 1)
    save(state)
  }
}
