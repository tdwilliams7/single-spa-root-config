import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@troy-williams/single-spa-demo-nav",
  () => System.import("@troy-williams/single-spa-demo-nav"),
  isActive.nav,
  { domElement: document.getElementById("nav-container") }
);

registerApplication(
  "@troy-williams/single-spa-demo-page-one",
  () => System.import("@troy-williams/single-spa-demo-page-one"),
  isActive.page1,
  { domElement: document.getElementById("page-1-container") }
);

registerApplication(
  "@troy-williams/single-spa-demo-page-two",
  () => System.import("@troy-williams/single-spa-demo-page-two"),
  isActive.page2,
  { domElement: document.getElementById("page-2-container") }
);

start();
