/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="worker-configuration.d.ts" />

export function GET(context) {
  const runtime = context.locals.runtime;

  return new Response('Test');
}
