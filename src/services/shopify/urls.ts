import env from "app/config/env"


const shopifyUrls = {
    products:{
        'all': {
            url: `${env.SHOPIFY_HOSTNAME}/admin/api/2025-10/graphql.json`,
            token: env.SHOPIFY_TOKEN,
        }
    }
}

export  { shopifyUrls }