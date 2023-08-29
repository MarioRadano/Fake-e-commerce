'use client'
import {useState, useEffect} from 'react'
import styles from './css modules/cart.module.css';

export default function Cart({items, removeFromCart}) {
    const [totalCost, setTotalCost] = useState(0)

    const calculateCost = () => {
        let calculatedTotal = 0
        items.forEach((item) => {
            calculatedTotal += item.price * item.count
            setTotalCost(calculatedTotal.toFixed(2))
        })
    }

   useEffect(()=>{
    calculateCost()
   }, [items])

    return(<>
    <div className={styles.cart}>
    {items.length > 0 ? <>

        <h3>Your cart:</h3>
          {items.map((item) => (
            <div className={styles.cartRow} key={item.id}>
              <button onClick={() => removeFromCart(item.id)}><h1>-</h1></button>
              <p>
                {item.title} x{item.count}
              </p>
            </div>
          ))}
          <div className={styles.checkout}><h3>Total: ${totalCost}</h3><button><h3>CHECKOUT</h3></button></div>
      </>:<h1>The cart is empty!</h1>}
    </div>
    </>)
} 