import TopProductDetails from '@/ecommerc-pages/detalis/top-product-details';
import React from 'react'

function TopProductDetailsPage({ params }) {
    const {id} = params;
  return (
    <div> <TopProductDetails id={id} /></div>
  )
}

export default  TopProductDetailsPage