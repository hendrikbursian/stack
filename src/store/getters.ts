import { GetterTree } from 'vuex'
import { State } from './state'

export type Getters = {
  // items(state: State): string[]
}

export const getters: GetterTree<State, State> & Getters = {
  // items: state => state.tems
}
