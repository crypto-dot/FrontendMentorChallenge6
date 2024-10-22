import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    console.log("test")
    return new Response(null, { status: 200 });
  };