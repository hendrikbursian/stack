import { GetterTree } from 'vuex'
import { StackItem, State } from './state'

export type Getters = {
  itemIds(state: State): string[]
  itemIdsSortedByCreatedDesc(state: State): string[]
  item(state: State): (itemId: string) => StackItem
}

export const getters: GetterTree<State, State> & Getters = {
  itemIds: state => Object.keys(state.items),
  itemIdsSortedByCreatedDesc: state =>
    Object.values(state.items)
      .sort((a, b) => (a.created > b.created ? -1 : 1))
      .map(item => item.id),
  item: state => itemId => state.items[itemId]
}
