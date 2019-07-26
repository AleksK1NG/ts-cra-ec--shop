import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { ICollectionItem } from '../../../models/models'

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview.styles'

interface IProps {
  title: string
  items: ICollectionItem[]
  routeName?: string
}

const CollectionPreview: React.FC<IProps> = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item: ICollectionItem) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
