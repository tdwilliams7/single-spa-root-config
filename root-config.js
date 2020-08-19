import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "troy-williams/single-spa-demo-nav",
  () => System.import("troy-williams/single-spa-demo-nav"),
  isActive.nav
);

registerApplication(
  "troy-williams/single-spa-demo-1",
  () => System.import("troy-williams/single-spa-demo-one"),
  isActive.page1
);

registerApplication(
  "troy-williams/single-spa-demo-2",
  () => System.import("troy-williams/single-spa-demo-two"),
  isActive.page2
);

start();
