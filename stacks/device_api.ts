import { StackContext, Api, Table } from "sst/constructs";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager"; //this isn't ideal

export function DeviceAPIStack({ stack }: StackContext) {

    const subdomain = 'api.'
    const domain = 'jsohdev.com'


    const hostedZone = HostedZone.fromLookup(stack, "HostedZone", {
        domainName: domain,
    });

    // Create a certificate with alternate domain names
    const certificate = new DnsValidatedCertificate(stack, "JsohDevCert", {
        domainName: subdomain + hostedZone.zoneName,
        hostedZone,
        region: "ap-southeast-2",
    });

    const DeviceTable = new Table(stack, "DeviceTable", {
        fields: {
            device_id: "string",
            messages: "string",
            user: "string"
        },
        primaryIndex: { partitionKey: "device_id", sortKey: "user" }
    })



    const api = new Api(stack, "DeviceAPI", {
        routes: {
            "GET /device/{id}": "app/api/device/{id}/get.handler",
            "POST /device/{id}": "app/api/device/{id}/post.handler",
        },
        customDomain: {
            domainName: subdomain + hostedZone.zoneName,
            cdk: {
                hostedZone,
                certificate,
            },
        },
    });

    api.bind([DeviceTable])

    stack.addOutputs({
        API_Url: api.url,
    });

}
