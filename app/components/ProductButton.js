'use client'
import {useState} from 'react'
import styles from './css modules/category.module.css'

export default function ProductButton({ product, discount, addToCart }) {

const [num, setNum] = useState(1)

    return(<>
    <div className={styles.buttons}>
    
    {discount ? (
  <>
    <h3 className={styles.scount}>{product.price}</h3>
    <h2 className={styles.scount}>{(product.price * discount / 100).toFixed(2)}</h2>
  </>
) : (
  <h2>${product.price}</h2>
)} 
        <div className={styles.counter}>
            <button onClick={() => setNum(num - 1)}><h1>-</h1></button>
            <span>{num}</span>
            <button onClick={() => setNum(num + 1)}><h1>+</h1></button>
        </div>
        <button className={styles.add} onClick={()=>{addToCart(product, num, discount)}}>
            ADD
            <span className="material-symbols-outlined">shopping_cart</span>
        </button>
    </div>
    </>)
}