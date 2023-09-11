'use client'
import {useState, useEffect} from 'react'
import styles from './css modules/category.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './css modules/customCarousel.css'
import ProductButton from './ProductButton'
import { Carousel } from 'react-responsive-carousel';


export default function Category({ products, discount, addToCart }) {
    
  const [details, setDetails] = useState(null)
  const [detailsDsk, setDetailsDsk] = useState(Array(products.length).fill(null))
  const [autoPlayState, setAutoPlayState] = useState(true)

  useEffect(()=>{
    details ? setAutoPlayState(false) : setAutoPlayState(true)
  }, [details])

  

const handleCloseDetails = (index) => {
  const newDetails = [...detailsDsk]
  newDetails[index] = false
  setDetailsDsk(newDetails)
}
const handleProductClick = (index) => {
  const newDetails = [...detailsDsk]
  newDetails[index] = true
  setDetailsDsk(newDetails)
}


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
              autoPlay={autoPlayState}
              interval={3000}
              infiniteLoop={true}
              showStatus={false}
              showThumbs={false}
             
            >
              {products.map((product) => (
                <div key={product.id} className={`${styles.card}  ${details ? styles.visible : ''}`}>
                  <div className={styles.productCard}>
                  <img src={`${product.image}`} alt={`${product.title}`} />
                  <h2>{product.title}</h2>
                  <button className={styles.detailsButton} onClick={()=>setDetails(true)}><h2>Details</h2></button>
                  <div className={styles.price}>
                    <ProductButton product={product} discount={discount} addToCart={addToCart} />
                  </div>
                  </div>
                  <div className={`${styles.detailsCard}`}>
                      <button className={styles.back} onClick={() => setDetails(null)}>
                        <span className="material-symbols-outlined">
                          arrow_back
                        </span>
                      </button>
                      <h3>{product.title}</h3>
                      <img src={`${product.image}`} alt={`${product.title}`} />
                      <p>{product.description}</p>
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
                {products.slice(0, 3).map((product, index) => (
                  <div key={product.id} className={`${styles.card} ${detailsDsk[index] ? styles.visible : ''}`}>
                    <div className={styles.productCard}>
                    <img className={styles.image} src={`${product.image}`} alt={`${product.title}`} />
                    <h2>{product.title}</h2>
                    <button className={styles.detailsButton} onClick={() => handleProductClick(index)}>
                      <h2>Details</h2>
                      </button>
                    <div>
                      <ProductButton product={product} discount={discount} addToCart={addToCart}/>
                    </div>
                    </div>
                  
                    <div className={`${styles.detailsCard}`}>
                        <button className={styles.back} onClick={() => handleCloseDetails(index)}>
                        <span className="material-symbols-outlined">
                            arrow_back
                        </span>
                        </button>
                        <h3>{product.title}</h3>
                        <img src={`${product.image}`} alt={`${product.title}`} />
                        <p>{product.description}</p>
                    </div>
                    
                  </div>
                ))}
              </div>
  
              <div className={styles.desktop}>
                {products.slice(3, 6).map((product,index) => (
                  <div key={product.id} className={`${styles.card} ${detailsDsk[index] ? styles.visible : ''}`}>
                  <div className={styles.productCard}>
                  <img className={styles.image} src={`${product.image}`} alt={`${product.title}`} />
                  <h2>{product.title}</h2>
                  <button className={styles.detailsButton} onClick={() => handleProductClick(index)}>
                    <h2>Details</h2>
                    </button>
                  <div>
                    <ProductButton product={product} discount={discount} addToCart={addToCart}/>
                  </div>
                  </div>
                
                  <div className={`${styles.detailsCard}`}>
                      <button className={styles.back} onClick={() => handleCloseDetails(index)}>
                      <span className="material-symbols-outlined">
                          arrow_back
                      </span>
                      </button>
                      <h3>{product.title}</h3>
                      <img src={`${product.image}`} alt={`${product.title}`} />
                      <p>{product.description}</p>
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




