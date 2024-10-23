import type { APIRoute } from "astro";
import { dummyData } from '../../data/dummyData.ts';

export const POST: APIRoute = async ({ request }) => {
    console.log("test")
    return new Response(null, { status: 200 });
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(dummyData), { status : 200 });
};