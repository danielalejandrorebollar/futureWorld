
import getCustomerOrders from "app/services/shopify/graphql/customer";
import { redirect } from "next/navigation";
import styles from './OrdersInfo.module.sass'

const OrdersInfo = async () =>{

    const ordersInfo = await getCustomerOrders()
    console.log(ordersInfo)
    if(!ordersInfo.ok){
        redirect('/login')
        return <p>Error al cargar órdenes usuario no logueado</p>

    }
    
    const {orders} = ordersInfo;
    console.log(orders)
    return (
        <div>
           
            <section className={styles.OrdersInfo}>
                <h2>Orders Info</h2>
                {orders.map((order,index)=>(
                    <div key={order.id} className={styles.OrdersInfo__orderInfo}>
                    <p>Orden {index+1}: {order.orderNumber}</p>
                    
                    {order.lineItems.edges.map(edge=>(
                        <p key={edge.cursor} > {edge.node.title} <span className={styles.OrdersInfo__orderInfo__span}>x {edge.node.quantity}</span></p>
                    ))}
                    

                    </div>
                
                ))}

            </section>

        </div>
    );
 }


 export default OrdersInfo