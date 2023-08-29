'use client'
import styles from './css modules/category.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './css modules/customCarousel.css'

import ProductButton from './ProductButton'

import { Carousel } from 'react-responsive-carousel';

export default function Category({ products, discount, addToCart }) {
    
  
    return (
      <>
        {products.length > 0  && (
          <>
            <h1
            className={styles.title}
            id={products[0].category ? products[0].category.substring(0, 3) : ""}
          >
            {products[0].category ? products[0].category.toUpperCase() : ""}
          </h1>
  
            <Carousel
            
              className={styles.carousel}
              emulateTouch={true}
              showIndicators={false}
              autoPlay={true}
              interval={3000}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
             
            >
              {products.map((product) => (
                <div key={product.id} className={styles.card}>
                  <img src={`${product.image}`} alt={`${product.title}`} />
                  <h2>{product.title}</h2>
                  <div className={styles.price}>
                    <ProductButton product={product} discount={discount} addToCart={addToCart} />
                  </div>
                </div>
              ))}
            </Carousel>
  
            <Carousel
              className={styles.carouselmd}
              emulateTouch={true}
              showStatus={false}
              showThumbs={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button type="button" onClick={onClickHandler} title={label} className='custom-arrow prev'>
                    <span className="material-symbols-outlined arrow">
                        keyboard_double_arrow_left
                    </span>
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button type="button" onClick={onClickHandler} title={label} className='custom-arrow next'>
                    <span className="material-symbols-outlined arrow">
                      keyboard_double_arrow_right
                    </span> 
                  </button>
                )
              }
            >
              <div className={styles.desktop}>
                {products.slice(0, 3).map((product) => (
                  <div key={product.id} className={styles.card}>
                    <img className={styles.image} src={`${product.image}`} alt={`${product.title}`} />
                    <h2>{product.title}</h2>
                    <div>
                      <ProductButton product={product} discount={discount} addToCart={addToCart}/>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className={styles.desktop}>
                {products.slice(3, 6).map((product) => (
                  <div key={product.id} className={styles.card}>
                    <img src={`${product.image}`} alt={`${product.title}`} />
                    <h2>{product.title}</h2>
                    <div className={styles.price}>
                      <ProductButton product={product} discount={discount}  addToCart={addToCart} />
                    </div>
                  </div>
                ))}
              </div>
            </Carousel>
          </>
        )}
      </>
    );
  }




