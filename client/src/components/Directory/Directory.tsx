import React from 'react'
import { connect } from 'react-redux'

import MenuItem from '../Menu/MenuItem/MenuItem'
import { AppState } from '../../store/rootReducer'
import { sectionsSelector } from '../../store/modules/directory/directorySelector'
import { ISection } from '../../store/modules/directory/mockData'

import './Directory.styles.scss'

interface IProps {
  sections: ISection[]
}

const Directory: React.FC<IProps> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }: ISection) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
      ))}
    </div>
  )
}

export default connect(
  (state: AppState) => ({
    sections: sectionsSelector(state)
  }),
  null
)(Directory)
