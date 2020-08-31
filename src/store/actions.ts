import axios from 'axios'
import metascraper from 'metascraper'
import metascraperDescription from 'metascraper-description'
import metascraperTitle from 'metascraper-title'
import { v4 as uuid } from 'uuid'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationTypes } from './mutations'
import { save, StackItem, StackItemMetadata, State } from './state'

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
    content: string
  ): Promise<void>
  [ActionTypes.REMOVE](
    { commit }: AugmentedActionContext,
    itemId: string
  ): Promise<void>
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.ADD]({ commit, state }, content) {
    if (Object.values(state.items).findIndex(i => i.content === content) > -1) {
      return
    }

    const id = uuid()
    const created = Date.now().toString()
    const metadata: StackItemMetadata = {}

    if (content.startsWith('http')) {
      const m = metascraper([metascraperDescription(), metascraperTitle()])

      const corsProxyApi = 'https://thingproxy.freeboard.io/fetch/'

      try {
        const response = await axios.get(corsProxyApi + content)

        const html = response.data
        const url = content

        const result = await m({ html, url })
        console.log(result)

        metadata.title = result.title
        metadata.description = result.description
      } catch (error) {
        console.log(error)
      }
    }

    const newItem: StackItem = {
      id,
      created,
      content,
      metadata
    }

    commit(MutationTypes.ADD, newItem)

    save(state)
  },
  async [ActionTypes.REMOVE]({ commit, state }, itemId) {
    commit(MutationTypes.REMOVE, itemId)

    save(state)
  }
}
