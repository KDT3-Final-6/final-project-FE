export interface IProduct {
  id: string
  title: string
  image: string
  hash: string
  price: number
  heart: boolean
  categoryName: { id: string; category: string }[]
}