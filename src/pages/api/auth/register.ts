import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.json();
  const email = data.email;
  const password = data.password;

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  console.error(error);
  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/signin");
};