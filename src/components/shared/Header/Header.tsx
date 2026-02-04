
import { validateAccessToken } from 'app/util/auth/validateAccessToken'

import { HeaderClient } from './HeaderClient'


// const cookieStore = await cookies();
// const token = cookieStore.get("accesToken")
// console.log(customer,"toke")

const Header = async () =>{ 


  const result: CustomerResponse = await validateAccessToken()
  
    return(
         <HeaderClient customer={result}/>
    )
}

export {Header} ;