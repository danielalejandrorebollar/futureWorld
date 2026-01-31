
import styles from './MyAccountLayout.module.sass'

interface MyAccountLayoutProps {
    children: React.ReactNode,
    ordersInfo: React.ReactNode
    userInfo: React.ReactNode
}
const MyAccountLayout = async ({children,userInfo,ordersInfo}:MyAccountLayoutProps) =>{

    
    return (
        <>
        <h1 className={styles.h1}>My Account</h1>
        <div className={styles.MyAccountLayout}>
            {children}
            {userInfo}
            {ordersInfo}
        </div>
        
        </>
    );
 }


 export default MyAccountLayout