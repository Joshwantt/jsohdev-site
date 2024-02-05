import { SSTConfig } from "sst";
import { NextStack } from "./stacks/next_site";


export default {
  config(_input) {
    return {
      name: "jsoh-dev",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(NextStack)
  },
} satisfies SSTConfig;
