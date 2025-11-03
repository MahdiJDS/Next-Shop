import { jsonType } from '@/types';
import ProductList from '../Components/productsList';
import axios from 'axios'
import React from 'react'
import { products } from '@/utils/GetAPI';

export default async function Getlist() {



  return (
    <div>
        <ProductList lists={products}/>
    </div>
  )
}
