
import { shopifyUrls } from "./urls";



export const getProducts = async (): Promise<ProductType[]> => {

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

    const {data:{products:{nodes}}} = (await response.json()) as GraphQLResponse<ProductsQuery>;
    // console.log(nodes)
    
    return nodes  ;

  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};


export const getProductById = async (id:string): Promise<ProductResult> => {
//   const shop = process.env.SHOPIFY_HOSTNAME;
//   const token = process.env.SHOPIFY_TOKEN;
// if (!shop || !token) {
//   throw new Error('Faltan variables de entorno de Shopify');
// }
  const query = `
    {
        product(id:"gid://shopify/Product/${id}"){
        
            
              id
              title
              tags
              handle
              description
              
              variants(first:3) {
                nodes {
                  id
                  displayName
                  sku
                  barcode
                  inventoryQuantity
                  taxable
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

    const {data:{product}} = await response.json();
    // console.log(product)
   return { 
            ok:true,
            data:{

              id: product.id,
              image: product.images.edges[0].node.originalSrc,
              title: product.title,
              description: product.description,
              price: product.variants.nodes[0].price,
              quantity: product.variants.nodes[0].price,
              handle: product.handle,
              tags: product.tags[0],
              images:product.images.edges,
              variants: product.variants.nodes[0].price,
              gql_id: product.variants.nodes[0].id
            }
      }  ;

  } catch (error) {
    console.error("Error al obtener producto:", error);
    return {
      ok:false,
      error: "error no se encontró el id del producto",
      data: null,
    };
  }
};
