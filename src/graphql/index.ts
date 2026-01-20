import {GraphQLClient} from 'graphql-request'
import env  from 'app/config/env'



 class GraphQLClientSingleton {
  
    private readonly endpoint: string = env.SHOPIFY_GRAPHQL_ENDPOINT

    private static instance: GraphQLClientSingleton
    private client: GraphQLClient

    private constructor(){
        this.client = new GraphQLClient(this.endpoint,{
            headers:{
                'Shopify-Storefront-Private-Token': env.SHOPIFY_STOREFRONT_TOKEN
            }
        })
    }

    static getInstance(): GraphQLClientSingleton{
        if(!this.instance){
            this.instance = new GraphQLClientSingleton;
        }

        return this.instance;
    }

    getClient(): GraphQLClient {
        return this.client
    }
}

export { GraphQLClientSingleton}