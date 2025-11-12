
import { shopifyUrls } from "./urls";

export const getProducts = async () => {
//   const shop = process.env.SHOPIFY_HOSTNAME;
//   const token = process.env.SHOPIFY_TOKEN;
// if (!shop || !token) {
//   throw new Error('Faltan variables de entorno de Shopify');
// }
  const query = `
    {
      products(first: 25) {
      
        
          nodes {
            id
            title
            handle
            variants(first:3) {
              nodes {
                id
                displayName
                price
              }
            }
            images (first: 1) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
            
          }
        
      }
    }
  `;

  try {
    const response = await fetch(shopifyUrls.products.all.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': shopifyUrls.products.all.token ,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const {data:{products:{nodes}}} = await response.json();
    console.log(nodes)
    return nodes ;

  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};
