'use client'
import Link from 'next/link'
import styles from './css modules/banner.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import ProductCard from "./ProductCard";



export default function Banner({products}) {
    

    return(<>
   
    <Carousel className={styles.carousel} emulateTouch={true} showArrows={false} showIndicators={false} autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false} showThumbs={false}>
    <Link href='#men' ><ProductCard object={products[0]}  /></Link>
    <Link href='#jew' ><ProductCard object={products[6]}/></Link>
    <Link href='#ele' ><ProductCard object={products[11]}/></Link>
    <Link href='#wom' ><ProductCard object={products[14]} /></Link>
    </Carousel>

    <div className={styles.banner}>
    <Link href='#men' ><ProductCard object={products[3]}/></Link>
    <Link href='#jew' ><ProductCard object={products[6]} /></Link>
    <Link href='#ele' ><ProductCard object={products[13]} /></Link>
    <Link href='#wom' ><ProductCard object={products[14]}/></Link>
    </div>
    
    </>)
}