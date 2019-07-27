import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { ICollectionItem } from '../../../models/models'

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './CollectionPreview.styles'

interface IProps {
  title: string
  items: any
  routeName?: string
}

const CollectionPreview: React.FC<IProps> = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item: any, idx: number) => idx < 4)
          .map((item: any) => (
            <CollectionItem key={item._id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
