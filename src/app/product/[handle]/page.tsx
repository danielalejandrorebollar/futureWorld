import { ProductView } from 'app/components/product/ProductView'
import { getProductById } from 'app/services/shopify/products'
import { redirect } from 'next/navigation'
import React from 'react'

interface PropsProductPage {
  params:Promise<{handle:string}>,
  searchParams: Promise<{[key: string]: string | undefined }>
}

export const generateMetadata = async ({searchParams,params}: PropsProductPage) =>{
  const { id } =  await searchParams
  const { handle } =  await params
  // let product
  // if(!id){
  //   console.log("no existióoooooooooooo")
  //   redirect('/store')
  // }else{
    
   const product = await getProductById(id)

  
  if (!product.ok) {
  console.log(product.error);
  throw new Error(`HTTP error: ${product.error}`);
  //  redirect('/store')
}
console.log("desde generateMEtadata",product.data)
  return {
    title: product.data.title,
    description: product.data.description,
    keywords: product.data.tags,
    openGraph: {
      images: [product.data.image],
    },
  }
}


const ProductPage = async (props: PropsProductPage) => {
  const { handle } = await  props.params
  const { id } =  await props.searchParams
  console.log("este es SearchParams \n",await props.searchParams,"\n este es el handle \n",handle)
  // let product: ProductResult = []
  if(!id){
    console.log("no existióoooooooooooo")
    redirect('/store')
  }
  const product = await getProductById(id)
  // console.log(product)
  // }else{
  //   product = await getProductById(id)
  //   if(!product)
  //     console.log("id no existe")
  //     // redirect('/store')
  // }
if (!product.ok) {
  console.log(product.error);
  throw new Error(`HTTP error: ${product.error}`);
   redirect('/store')
}
  // console.log(product.data)
  return (
    <ProductView product={product.data}/>
    
  )
}

export default ProductPage