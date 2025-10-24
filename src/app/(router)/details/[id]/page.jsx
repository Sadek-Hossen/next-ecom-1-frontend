
"use client"
import ProductDetailsPage from '@/ecommerc-pages/detalis/detail'
import React from 'react'

const DetailCompunent =({params})=> {
    const {id}= params
  return (
    <div>
    <ProductDetailsPage id ={id} />
    </div>
  )
}

export default DetailCompunent