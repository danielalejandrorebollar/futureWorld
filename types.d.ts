interface ErrorPageProps {
    error:Error;
    reset: () =>void
    
}
type ProductType = {
    id: string;
    images: {edges:[]};
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    variants: {nodes:{price:string}[]}

}

type GraphQLResponse<T> = {
  data: T
}

type ProductsQuery = {
  
    products: {
      nodes: ProductType[]
    }
  
}

type CollectionsQuery = {
  
    collections:{
            edges:{
              node:{
                id: string
                title: string
                handle: string
                updatedAt: string
              }
            }[]
          }
  
}

type CollectionQuery = {
  
    collection:{
            id: string
            title: string
            handle: string
            description: string
            products:{
              nodes:ProductType[]
            }
          }
  
}

type CollectionByIdentifier = {
    collectionByIdentifier:Collection
}

type Collection = {
  id: string
  title: string
  handle: string
  description: string
}

type ProductResult =
  | { ok: true; data: ProductType }
  | { ok: false; error: string, data: null };


  type CartItem = {
    title: string;
    price:number;
    quantity: number;
    id: string;
    image: string;

  }