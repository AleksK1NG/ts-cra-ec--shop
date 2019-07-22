import React from 'react'
import './Directory.styles.scss'

import { IDSection, sections } from './sections'
import MenuItem from '../Menu/MenuItem/MenuItem'

interface IProps {}

const Directory: React.FC<IProps> = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }: IDSection) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}  />
      ))}
    </div>
  )
}

export default Directory
