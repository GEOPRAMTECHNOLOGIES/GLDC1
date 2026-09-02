import { handleMpesaCallback } from '../../../lib/mpesa-callback';

export async function POST(req: Request) {
  return handleMpesaCallback(req);
}

export async function GET() {
  return Response.json({ service: 'GLDC API', callback: 'ready' });
}
