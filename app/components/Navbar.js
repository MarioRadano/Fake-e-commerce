'use client'
import styles from './css modules/navbar.module.css'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Cart from './Cart'

export default function Navbar({cartItems, removeFromCart}) {

    
    const [burgerClass, setBurgerClass] =  useState(styles['burger-bar'] + ' ' + styles.unclicked)
    const [menuClass, setMenuClass] = useState(styles.menu + ' ' + styles.hidden)
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [navbarScroll, setNavbarScroll] = useState(styles.extended)
    const [cartVisible,setCartVisible] = useState(false)
    const [numberItems, setNumberItems] = useState(0);

const handleScroll = () => {
    if (window.scrollY > 0) {
        setNavbarScroll(styles.reduced)
    } else {
        setNavbarScroll(styles.extended)
    }
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
}, [])

const getTotalNumber = (cartItems) =>{
let totalItems = 0;
for (const item of cartItems) {
    if (item.count) {
        totalItems += item.count
    } else {
        totalItems++
    }
}
return totalItems
}

useEffect(()=>{
    const total = getTotalNumber(cartItems)
    setNumberItems(total)
}, [cartItems])

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass(styles['burger-bar'] + ' ' + styles.clicked)
      setMenuClass(styles.menu + ' ' + styles.visible)
        }
        else {
            setBurgerClass(styles['burger-bar'] + ' ' + styles.unclicked)
      setMenuClass(styles.menu + ' ' + styles.hidden)
        }
        setIsMenuClicked(!isMenuClicked)
    }



    return(<>
    <nav className={`${styles.navbar} ${navbarScroll}`}>
       
        <div className={styles.sections}>
            <Link href='#jew' ><h3 >JEWELERY</h3></Link>
            <Link href='#ele' ><h3 >ELECTRONICS</h3></Link>
            <Link href='#men' ><h3 >MEN'S CLOTHING</h3></Link>
            <Link href='#wom' ><h3 >WOMEN'S CLOTHING</h3></Link>
        </div>
            
        <div className={styles['burger-menu']} onClick={updateMenu}>
            <div className={burgerClass} ></div>
            <div className={burgerClass} ></div>
            <div className={burgerClass} ></div>
        </div> 


        <div className={styles.logoContainer}>
        {numberItems > 0 && <div className={styles.counter}><p>{numberItems}</p></div>}
        <span className={`material-symbols-outlined ${cartVisible ? styles.activated : ''}`} onClick={() => setCartVisible(!cartVisible)}>shopping_cart</span>
        <h1 className={styles.logo}>LOGO</h1>
        </div>
    </nav>

    <div className={`${styles.overlay} ${cartVisible ? styles.visible : ''}`} onClick={() => setCartVisible(!cartVisible)}>
    </div>

    <div className={menuClass}>
        <ul>
            <Link href='#jew' onClick={updateMenu}><li>JEWELERY</li></Link>
            <Link href='#ele' onClick={updateMenu}><li>ELECTRONICS</li></Link>
            <Link href='#men' onClick={updateMenu}><li>MEN'S CLOTHING</li></Link>
            <Link href='#wom' onClick={updateMenu}><li>WOMEN'S CLOTHING</li></Link>
        </ul>
    </div>

    <div className={`${styles.cart} ${cartVisible ? styles.visible : ''}`}>
        <Cart items={cartItems} removeFromCart={removeFromCart}/>
   
  </div>
    
    
    </>)
}