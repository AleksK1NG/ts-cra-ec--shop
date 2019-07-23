import React from 'react'
import { SHOP_DATA } from './collections'
import CollectionPreview from '../../components/Collection/CollectionPreview/CollectionPreview'

const ShopPage: React.FC = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherProps }) => {
        console.log('other props => ', otherProps)
        return (
          <CollectionPreview
            key={id}
            title={otherProps.title}
            items={otherProps.items}
            routeName={otherProps.routeName}
          />
        )
      })}
    </div>
  )
}

export default ShopPage
