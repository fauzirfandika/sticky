import { getPlatformProxy } from "wrangler";
const { env } = await getPlatformProxy();

console.log(`MY_LAST_NAME = ${env.MY_LAST_NAME}`);

