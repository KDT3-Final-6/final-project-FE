export interface IProduct {
  id: string
  title: string
  image: string
  hashs: string[]
  price: number
  heart: boolean
  categoryNames?: string[]
}