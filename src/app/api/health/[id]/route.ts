
import {type NextRequest} from 'next/server'
export const runtime = "edge"

// export async function GET(){
//     return Response.json({status:"ok"})
// }

export async function GET(request:NextRequest , { params }:{params:Promise<{id:string}>}) {
const { searchParams } = new URL(request.url);
  const status = searchParams.get('status');
    const { id } = await params
    console.log("Searchparams...",params)
  return new Response(`User ID: ${id}, Status: ${status}`, {
    status: 200,
  });
}