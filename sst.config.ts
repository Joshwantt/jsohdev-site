import { SSTConfig } from "sst";
import { NextAuthTable, NextSite } from "./stacks/next_site";
import { DeviceAPI, DeviceAPITable } from "./stacks/device_api";


export default {
  config(_input) {
    return {
      name: "jsohdev",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(NextAuthTable).stack(DeviceAPITable);

    app.stack(NextSite).stack(DeviceAPI);
  },
} satisfies SSTConfig;
