export interface ISection {
  title: string
  imageUrl: string
  _id: string
  linkUrl: string
}

export interface ICategory {
  items: IItem[]
  createdAt: string
  updatedAt: string
  _id: string
  title: string
  routeName: string
}

export interface IItem {
  _id: string
  category: string
  name: string
  imageUrl: string
  price: number
  createdAt: string
  updatedAt: string
}
