import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import {
  MenuItemContainer,
  ContentContainer,
  ContentSubtitle,
  BackgroundImageContainer,
  ContentTitle
} from './MenuItem.styles'

interface IProps extends RouteComponentProps {
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

const MenuItem: React.FC<IProps> = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
      <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(React.memo(MenuItem))
