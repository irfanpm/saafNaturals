import ProductDetail from 'components/product/productDetails'
import React from 'react'
import { useRouter } from 'next/router';

const Prd = () => {
    const router = useRouter();
  return (
    <div><ProductDetail details={router.query} /></div>
  )
}

export default Prd