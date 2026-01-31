
import { Chat } from "app/components/chat/Chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/util/openai/createAgent"

const ChatPage = async () => {

    const products = await getProducts()
    const productTitles = products.map(product => product.title)
    const flatProductTitles = productTitles.join('\n')
    const agent = createAgent(flatProductTitles)
    console.log(flatProductTitles)

  return (
    <>
    <div>Chatbot</div>
    <Chat agent={agent}/>
    </>
  )
}

export default ChatPage