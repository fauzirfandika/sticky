/// <reference path="../.astro/types.d.ts" />

import { getPlatformProxy } from "wrangler";
const { env } = await getPlatformProxy();
