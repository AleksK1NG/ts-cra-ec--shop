import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'

import { sectionsSelector } from '../../store/modules/directory/directorySelector'
import { ISection } from '../../store/modules/directory/mockData'
import MenuItem from '../Menu/MenuItem/MenuItem'

import { DirectoryMenuContainer } from './Directory.styles'

interface IProps {
  sections?: ISection[]
}

const Directory: React.FC<IProps> = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections && sections.map(({ id, title, imageUrl, size, linkUrl }: ISection) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default connect(
  (state: AppState) => ({
    sections: sectionsSelector(state)
  }),
  null
)(Directory)
