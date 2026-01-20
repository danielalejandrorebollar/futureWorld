import { gql} from 'graphql-request'


export const customerName = gql`
    query getCustomerName($getCustomerAccesToken: String!){
        customer(customerAccessToken: $getCustomerAccesToken){
            firstName
            email
        }
    }
`