export function GET(context) {
  const runtime = context.locals.runtime;

  return new Response('Some body');
}

