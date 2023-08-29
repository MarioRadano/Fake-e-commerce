import styles from './css modules/footer.module.css'

export default function Footer() {


    return(
        <>
        <div className={styles.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="var(--light)" fillOpacity="1" d="M0,256L24,261.3C48,267,96,277,144,256C192,235,240,181,288,176C336,171,384,213,432,192C480,171,528,85,576,80C624,75,672,149,720,160C768,171,816,117,864,117.3C912,117,960,171,1008,208C1056,245,1104,267,1152,277.3C1200,288,1248,288,1296,277.3C1344,267,1392,245,1416,234.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
        </svg>
        <div className={styles.container}>
        <p>This site was realized using React and NextJS by Mario Radano</p>
        <p>Mail: radanomario@hotmail.it</p>
        <a href='https://drive.google.com/drive/folders/1Yuu4216gGWVrQdSfIDSfOOgCuVM4DLui?usp=sharing'> <p>See all my projects</p> </a>
        <a href='https://drive.google.com/file/d/1nksd59G26FmIVOicr-Z9qi8_inWwl5LG/view?usp=sharing'> <p>Read my CV</p> </a>
        <p>2023</p>
        
        </div>
        </div>
        
        </>
    )
}