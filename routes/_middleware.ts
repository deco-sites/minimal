import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 572,
  site: "minimal",
  domains: ["minimal.deco.site"],
});