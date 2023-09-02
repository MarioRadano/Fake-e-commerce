'use client'
import {useState, useEffect} from 'react'
import styles from './css modules/aboutus.module.css'

export default function AboutUs(){

    const [scrolled, setScrolled] = useState(styles.nonscrolled)
    
    const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 90) {
            setScrolled(styles.scrolled)
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            
        }
    }, [])
    return<>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--light)" fillOpacity="1" d="M0,192L34.3,160C68.6,128,137,64,206,80C274.3,96,343,192,411,224C480,256,549,224,617,197.3C685.7,171,754,149,823,149.3C891.4,149,960,171,1029,154.7C1097.1,139,1166,85,1234,64C1302.9,43,1371,53,1406,58.7L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
    <div className={`${styles.container} ${scrolled}`}>
    <h1>About Us</h1>
    <p>Eiusmod duis occaecat ut aliqua irure proident occaecat dolore id. Commodo ex ullamco laboris do occaecat enim consectetur ut quis dolore ipsum. Dolor eiusmod labore pariatur ipsum enim anim velit cupidatat non exercitation nostrud aliquip est.</p>
    
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--light)" fillOpacity="1" d="M0,192L24,202.7C48,213,96,235,144,218.7C192,203,240,149,288,149.3C336,149,384,203,432,197.3C480,192,528,128,576,85.3C624,43,672,21,720,37.3C768,53,816,107,864,144C912,181,960,203,1008,192C1056,181,1104,139,1152,112C1200,85,1248,75,1296,74.7C1344,75,1392,85,1416,90.7L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
    </>
}