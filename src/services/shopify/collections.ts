import { shopifyUrls } from './urls'

const getCollections = async () => {
  
 const  query = `
 {
  collections(first: 10) {
    edges {
      node {
        id
        title
        handle
        updatedAt
      }
    }
  } 
}`


 try {
    const response = await fetch(shopifyUrls.collections.all.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': shopifyUrls.collections.all.token ,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const {data:{collections:{edges}}} = (await response.json()) as  GraphQLResponse<CollectionsQuery>
      
        
          
        
      ;
    //const {data:{collections}} = await response.json();
    //console.log(edges)
    return edges

 }catch (error) {
    console.error("Error al obtener coleccion:", error);
    return null;
  }
};

const getCollectionProducts = async (id:string):Promise<ProductsResult> => {
  // console.log("id de la coleccion",id)
  




    const  query = `
    {
      collection(id:  "${id}") {
        
      
            id
            title
            handle
            description
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
}`


 try {
    const response = await fetch(shopifyUrls.collections.products.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': shopifyUrls.collections.products.token ,
      },
      // next:{
      //   revalidate: 10
      // },
      cache: 'force-cache',
      next:{
        tags:['main-products']
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      // throw new Error(`HTTP error: ${response.status}`);
      return {ok:false,error:response.status}
    }

    
    //const {data:{collectionByIdentifier}} = await response.json();
    const json = (await response.json()) as GraphQLResponse<CollectionQuery>;
    //const {data:{collections}} = await response.json();
    const  {data:{collection:{products:{nodes}}}} = json
    // console.log(json)
    // const nodes = json.data.collection.products.nodes
    
    return {ok:true, data:nodes}

 }catch (error) {
    console.error("Error al obtener Productos de la coleccion:", error);
    return {ok:false,error}
    
  }
};

const getCollectionByIdentifier = async (handle: string):Promise<CollectionResult> => {
  
 const  query = `
 {
  collectionByIdentifier(identifier: { handle: "${handle}" }) {
    
      
            id
            title
            handle
            description
           
            
          
    
  } 
}`


 try {
    const response = await fetch(shopifyUrls.collections.all.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': shopifyUrls.collections.all.token ,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      // throw new Error(`HTTP error: ${response.status}`);
      return {ok:false,error: response.status}
    }

    const json  = (await response.json()) as GraphQLResponse<CollectionByIdentifier>;
    const {data:{collectionByIdentifier}} = json 
    // console.log(collectionByIdentifier)
    return {ok:true, data:collectionByIdentifier}

 }catch (error) {
    console.error("Error al obtener coleccion:", error);
    // throw new Error("Error al obtener coleccion:")
    return {ok:false, error}
  }
};


export { getCollections, getCollectionProducts, getCollectionByIdentifier }