import styles from './css modules/productcard.module.css'


export default function ProductCard({object}) {

    
const containerStyle = {
    backgroundImage: `url(${object?.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative,'
};

    return(<>
    <div className={styles.container} style={containerStyle}>
    <div className={styles.overlay}></div>
        <div className={styles.category}>
            <h1 className={styles.fancy}>{object?.category.toUpperCase()}</h1>
            </div>
        
        
    </div>
    </>)
}