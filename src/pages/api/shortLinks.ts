import type { APIRoute } from "astro";
import { dummyData } from '../../data/dummyData.ts';

export const POST: APIRoute = async ({ request,  redirect }) => {
  return redirect("/signin");
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(dummyData), { status : 200 });
};