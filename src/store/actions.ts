import { v4 as uuid } from 'uuid'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationTypes } from './mutations'
import { save, StackItem, State } from './state'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export enum ActionTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE'
}

export type Actions = {
  [ActionTypes.ADD](
    { commit }: AugmentedActionContext,
    item: StackItem
  ): Promise<void>
  [ActionTypes.REMOVE](
    { commit }: AugmentedActionContext,
    itemId: string
  ): Promise<void>
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.ADD]({ commit, state }, item) {
    if (
      Object.values(state.items).findIndex(i => i.content === item.content) > -1
    ) {
      return
    }

    const id = uuid()
    const created = Date.now().toString()

    commit(MutationTypes.ADD, { ...item, id, created })

    save(state)
  },
  async [ActionTypes.REMOVE]({ commit, state }, itemId) {
    commit(MutationTypes.REMOVE, itemId)

    save(state)
  }
}
