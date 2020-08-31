import { MutationTree } from 'vuex'
import { StackItem, State } from './state'

export enum MutationTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export type Mutations<S = State> = {
  [MutationTypes.ADD](state: S, item: StackItem): void
  [MutationTypes.REMOVE](state: S, itemId: string): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD](state, item) {
    if (!item.id) return

    state.items[item.id] = item
  },
  [MutationTypes.REMOVE](state, itemId) {
    delete state.items[itemId]
  }
}
