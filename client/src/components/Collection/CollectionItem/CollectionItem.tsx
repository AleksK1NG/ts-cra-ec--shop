import React from 'react'
import { connect } from 'react-redux'
import { addCartItem } from '../../../store/modules/cart/cartActions'
import { IItem } from '../../../models/models'

import {
  CollectionItemContainer,
  NameContainer,
  BackgroundImage,
  AddButton,
  CollectionFooterContainer,
  PriceContainer
} from './CollectionItem.styles'

interface IProps {
  item: IItem
  addCartItem: (item: IItem) => void
}

const CollectionItem: React.FC<IProps> = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item

  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addCartItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

export default connect(
  null,
  { addCartItem }
)(CollectionItem)
