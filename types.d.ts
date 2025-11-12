interface ErrorPageProps {
    error:Error;
    reset: () =>void
    
}
type ProductType = {
    id: string;
    images: {edges};
    title: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string;
    variants: {nodes:[{price:string}]}

}