import { produce } from 'immer'
import { ISection } from './mockData'
import { sections } from './mockData'

import { DirectoryAction } from './types'

export interface DirectoryState {
  sections: ISection[]
}

export const initialState: DirectoryState = {
  sections: sections
}

export const directoryReducer = (state = initialState, action: DirectoryAction): DirectoryState =>
  produce(state, (draft: DirectoryState) => {
    const { type } = action

    switch (type) {
      default:
        return
    }
  })
