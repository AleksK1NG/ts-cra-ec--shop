import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview.styles'
import { IItem } from '../../../models/models'

interface IProps {
  title: string
  items: IItem[]
  routeName?: string
}

const CollectionPreview: React.FC<IProps> = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item: IItem, idx: number) => idx < 4)
          .map((item: any) => (
            <CollectionItem key={item._id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
