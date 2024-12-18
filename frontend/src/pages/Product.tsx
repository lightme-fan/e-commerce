import React, { Fragment } from 'react'
import { Footer, Header } from '../components'

const Product = () => {
  return (
    <Fragment>
      <div className={`relative h-[100vh] overflow-y-scroll`}>
        <Header />
        <Footer />
      </div>
    </Fragment>
  )
}

export default Product
