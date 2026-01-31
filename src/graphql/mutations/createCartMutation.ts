import { gql } from "graphql-request"

export const createCartMutation = gql`
mutation cartCreate($input: CartInput) {
  cartCreate(input: $input) {
    cart {
      checkoutUrl
    }
    userErrors {
      field
      message
    }
    warnings {
        message
    }
  }
}`
  