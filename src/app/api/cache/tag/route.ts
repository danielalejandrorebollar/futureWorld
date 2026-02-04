import env from 'app/config/env';
import { revalidateTag } from 'next/cache';

const POST = async (request: Request) => {
    const body = await request.json();
    const { tag, token } = body
    

    console.log(body)
    if(!tag || !token){
        return Response.json({error: "Missing tag or token"},{status:400});
    }

    if(token !== env.CACHE_TOKEN){
         return Response.json({error: "Invalid token"},{status:401});
    }
    revalidateTag(tag,'max')
    return Response.json({succes: true})
}

export { POST }