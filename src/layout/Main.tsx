import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

type MainProps = {
  children?: React.ReactNode
}

const Main = ({ children }: MainProps) => (
  <>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </>
)

export default Main
