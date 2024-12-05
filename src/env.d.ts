/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="worker-configuration.d.ts" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}
