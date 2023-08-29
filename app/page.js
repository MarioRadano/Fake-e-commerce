'use client'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Category from './components/Category'
import SliderOffer from './components/SliderOffer'
import Loading from './components/Loading'
import Footer from './components/Footer'
export default function Page() {



  const [cartItems, setCartItems] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const removeFromCart = (itemId) => {
    const updatedCartItems = [...cartItems]
    const existingItem = updatedCartItems.find(cartItem => cartItem.id === itemId)
  
    if (existingItem) {
      if (existingItem.count > 1) {
        existingItem.count -= 1
      } else {
        const indexToRemove = updatedCartItems.findIndex(cartItem => cartItem.id === itemId)
        updatedCartItems.splice(indexToRemove, 1)
      }
      setCartItems(updatedCartItems)
    }
  }

 
  const addToCart = (item, n, discount) => {
    const updatedCartItems = [...cartItems];
    const existingItem = updatedCartItems.find(cartItem => cartItem.id === item.id);
  
    if (existingItem) {
      existingItem.count += n;
    } else { const newItem = {
      ...item,
      count: n,
    }
    if (discount) {
      newItem.price = item.price - (item.price * discount) / 100
      newItem.price = newItem.price.toFixed(2)
    }
      updatedCartItems.push(newItem);
    }
  
    setCartItems(updatedCartItems);
  }

const fetchProducts = async () => {
    try{
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    setProducts(data)
    setLoading(false)
} catch (error) {
        console.error('Errore nel fecciamento dei prodotti', error)
}
}

useEffect(() => {
fetchProducts()}, [])

useEffect(() => {
  
}, [cartItems])


  return <>
  <Navbar cartItems={cartItems} removeFromCart={removeFromCart}/>
  {loading ? <Loading /> : <>
  <Banner products={products}  />
  <AboutUs /> 
  <Slider />
  <Category products={products.filter(product => product.category === 'jewelery')}   addToCart={addToCart}/>
  <Category products={products.filter(product => product.category === 'electronics')} addToCart={addToCart}/>
  <Category products={products.filter(product => product.category === `men's clothing`)}  addToCart={addToCart} discount={50}/>
   <SliderOffer />  
  <Category products={products.filter(product => product.category === `women's clothing`)} addToCart={addToCart}/>
  <Footer />
  </>}
  </>
    
}
