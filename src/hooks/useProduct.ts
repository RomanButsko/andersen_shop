import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { productService } from '../services/ProductCards'
import { IProduct } from '../types/products'

interface IUseProduct{
  id?: number
}

export const useProduct = ({ id }: IUseProduct) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [product, setProduct] = useState<IProduct | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const { getProducts, getExactProduct } = productService

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = id
          ? await getExactProduct(id)
          : await getProducts()
        if (!response) {
          navigate('*')
          return
        }
        id ? setProduct(response) : setProducts(response) 
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id, navigate])

  return { products, loading, setProducts, setLoading, product }
}
