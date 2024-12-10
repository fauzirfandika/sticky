import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const res = await fetch ("https://app.nocodb.com/api/v2/tables/mj9yvft5vib78kp/records?fields=nama,rsvp,comment&sort=-Id", {
    method: "GET",
    headers: {'xc-token': 'RzPMz79xLsGvt0YBpZ-XnQ0YGIBeFtzx10oW-rvT'}
  });
  const data = await res.json();
  return new Response(JSON.stringify(data));
};
