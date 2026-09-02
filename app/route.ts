import { handleMpesaCallback } from '../lib/mpesa-callback';
export async function POST(req:Request){const host=req.headers.get('host')||'';if(host.startsWith('api.'))return handleMpesaCallback(req);return new Response('GLDC API endpoint',{status:200})}
export async function GET(req:Request){const host=req.headers.get('host')||'';if(host.startsWith('api.'))return Response.json({service:'GLDC API',callback:'ready'});return new Response('GLDC',{status:200})}
