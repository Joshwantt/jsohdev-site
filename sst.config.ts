import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager";

// Look up hosted zone

const subdomain = 'www.'
const domain = 'jsohdev.com'


export default {
  config(_input) {
    return {
      name: "JsohDev",
      region: "ap-southeast-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const hostedZone = HostedZone.fromLookup(stack, "HostedZone", {
        domainName: domain,
      });

      // Create a certificate with alternate domain names
      const certificate = new DnsValidatedCertificate(stack, "GraphCert", {
        domainName: subdomain+hostedZone.zoneName,
        hostedZone,
        // The certificates need to be created in us-east-1
        region: "us-east-1",
      });

      const site = new NextjsSite(stack, "GraphSite", {
        customDomain: {
          domainName: subdomain+hostedZone.zoneName,
          cdk: {
            hostedZone,
            certificate,
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
