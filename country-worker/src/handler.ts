export async function handleRequest(request: Request): Promise<Response> {
  return new Response(JSON.stringify({"country": request.cf?.country || "??"}), {headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }});
}
