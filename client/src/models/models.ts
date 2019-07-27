
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
  quantity?: number
}

export interface ICollectionItem {
  id: string | number
  imageUrl: string
  name: string
  price: number
  quantity?: number
}

export interface IUser {
  _id: string
  username: string
  email: string
  avatar?: string
  info?: string
  token?: string
}

export interface IPaymentData {
  amount: number
  token: string
}
