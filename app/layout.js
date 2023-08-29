
import './globals.css'
import { Josefin_Sans, Kanit } from 'next/font/google'



const josefin = Josefin_Sans({ 
  subsets: ['latin'],
  variable: '--font-josefin' 
})


const kanit = Kanit({
  subsets:['latin'],
  weight:['800'],
  variable: '--font-kanit'
})

export const metadata = {
  title: 'E-commerce',
  description: 'Fake e-commerce for my portfolio',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${josefin.variable} ${kanit.variable}`}>
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </head>
      <body>
       
        {children}
        </body>
    </html>
  )
}
