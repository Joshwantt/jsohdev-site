import { SSTConfig } from "sst";
import { NextStack } from "./stacks/next_site";
import { DeviceAPIStack } from "./stacks/device_api";


export default {
  config(_input) {
    return {
      name: "jsoh-dev",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(NextStack).stack(DeviceAPIStack)
    
  },
} satisfies SSTConfig;
