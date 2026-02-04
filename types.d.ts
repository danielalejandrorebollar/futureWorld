interface ErrorPageProps {
    error:Error;
    reset: () =>void
    
}

type ImageNode = {
  originalSrc: string;
}
type ImageEdge ={
  node:ImageNode 
}
type ImageConnection = {
  edges: ImageEdge[]
}
type ProductType = {
    id: string;
    images: ImageConnection;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    variants: {nodes:{price:string}[]}
    gql_id:string

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

type CollectionResult = 
  | { ok: true; data: Collection; error?: undefined }
  | { ok: false; error: unknown, data?: undefined }
  | { ok: false; error?: undefined, data?: undefined }


type ProductResult =
  | { ok: true; data: ProductType; error?: undefined }
  | { ok: false; error: unknown, data?: undefined }
  | { ok: false; error?: unknown, data?: undefined }

type ProductsResult =
  | { ok: true; data: ProductType[]; error?: undefined }
  | { ok: false; error: unknown, data?: undefined }
  | { ok: false; error?: unknown, data?: undefined }


type CartItem = {
    title: string;
    price:number;
    quantity: number;
    id: string;
    image: string;
    gql_id: string

  }

type CustomerResponse = {
    ok: boolean;
    customer?: undefined;
    error?: undefined;
} | {
    ok: boolean;
    customer: {
      firstName:string
      email: string
    };
    error?: undefined;
} | {
    ok: boolean;
    error: unknown;
    customer?: undefined;
}

type Customer = {
  customer: {
    customer:string,

  }
}

type LineItemEdge = {
      cursor:string
      node: {
        title: string;
        quantity: number
      }
    
};
 type Order = {
  id: string;
  orderNumber: string;
  lineItems: {edges: LineItemEdge[]}
};

 type OrdersSuccess = {
  ok: true;
  totalOrders: number;
  orders: Order[];
};

 type OrdersError = {
  ok: false;
  error: unknown;
};

 type OrdersResponse = | OrdersSuccess | OrdersError;