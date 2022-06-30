import React from 'react'
import Navbar from '../components/NavBar'


// type Props = {}

// const MainLayout = (children: React.ReactElement) => {
//   return (
//     <>
//         <Navbar/>
//         <main>{children}</main>
//     </>
//   )
// }

export default function MainLayout({children}: {children:React.ReactNode}) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    )
  }

// export default MainLayout