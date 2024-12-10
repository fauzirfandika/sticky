import type { APIRoute } from "astro";
import { Runtime } from "astro";

export const GET: APIRoute = async (context) => {
  const res = await fetch (`${Astro.locals.runtime.env.NOCO_URL}?fields=nama,rsvp,comment&sort=-Id`, {
    method: "GET",
    headers: {'xc-token': `${Astro.locals.runtime.env.NOCO_TOK}`}
  });
  const data = await res.json();
  return new Response(JSON.stringify(data));
};
