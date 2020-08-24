import { ActionContext, ActionTree } from 'vuex'
import { Mutations } from './mutations'
import { State } from './state'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export enum ActionTypes {}
export type Actions = {}
export const actions: ActionTree<State, State> & Actions = {}
