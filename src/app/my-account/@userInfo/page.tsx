import { validateAccessToken } from "app/util/auth/validateAccessToken"
import styles from './UserInfo.module.sass'


const UserInfo = async () =>{

    const customerResponse = await validateAccessToken();
    if(!customerResponse.ok)
        return <div>Usuario no logueado</div>
    const {customer} = customerResponse;
    if(customer)
    console.log(customer)
    return (
        <div>
            <section className={styles.UserInfo}>
                <h2>Account Info </h2>

                <p>Nombre: {customer?.firstName}</p>
                <p>email: {customer?.email }</p>
            </section>
            

        </div>
    );
 }


 export default UserInfo