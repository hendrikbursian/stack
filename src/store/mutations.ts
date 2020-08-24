import { MutationTree } from 'vuex'
import { save, State } from './state'

export enum MutationTypes {
  ADD = 'ADD'
}

export type Mutations<S = State> = {
  [MutationTypes.ADD](state: S, item: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD](state, item: string) {
    state.items.unshift(item)
    save(state)
  }
}
