import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const res = await fetch ("https://app.nocodb.com/api/v2/tables/mj9yvft5vib78kp/records?limit=25&fields=nama,comment,nama_init,rsvp&sort=-Id&where=(comment_check_auto,eq,true)", {
    method: "GET",
    headers: {'xc-token': 'RzPMz79xLsGvt0YBpZ-XnQ0YGIBeFtzx10oW-rvT'}
  });
  const data = await res.json();
  return new Response(JSON.stringify(data));
};

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const res = await fetch ("https://app.nocodb.com/api/v2/tables/mj9yvft5vib78kp/records", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'xc-token': 'RzPMz79xLsGvt0YBpZ-XnQ0YGIBeFtzx10oW-rvT',
      'Content-type': 'application/json'
    },
  });
  const output = await res.json();
  return new Response(
    JSON.stringify({
      message: output.Nama ? "success" : "failure",
    })
  );
}
