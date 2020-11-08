import Head from 'next/head'

import { fromImageToUrl } from '../../utils/urls'
import { twoDecimals } from '../../utils/format'

import products from '../../products.json'
const product = products[0]

const Product = () => {
  return (
    <div>

        <Head>
            {product.meta_title &&
                <title>{product.meta_title}</title>
            }
            {product.meta_description &&
                <meta name="description" 
                content={product.meta_description}
                />
            }
        
        </Head>

        <h3>{product.name}</h3>
        <img src={fromImageToUrl(product.image)} />
        <h3>{product.name}</h3>
        <p>${twoDecimals(product.price)}</p>

      <p>
        {product.content}
      </p>
    </div>
  )
}

export default Product