import { StackContext, NextjsSite, Table, use } from "sst/constructs";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager"; //this isn't ideal


export function NextAuthTable({ app, stack }: StackContext) {
    const UserTable = new Table(stack, "UserTable", {
        timeToLiveAttribute: "expires",
        fields: {
            pk: "string",
            sk: "string",
            GSI1PK: "string",
            GSI1SK: "string",
        },
        primaryIndex: { partitionKey: "pk", sortKey: "sk" },
        globalIndexes: {
            GSI1: { partitionKey: "GSI1PK", sortKey: "GSI1SK" },
        }
    })

    return UserTable
}

export function NextSite({ stack }: StackContext) {

    const subdomain = 'www.'
    const domain = 'jsohdev.com'


    const hostedZone = HostedZone.fromLookup(stack, "HostedZone", {
        domainName: domain,
    });

    // Create a certificate with alternate domain names
    const certificate = new DnsValidatedCertificate(stack, "JsohDevCert", {
        domainName: subdomain + hostedZone.zoneName,
        hostedZone,
        // The certificates need to be created in us-east-1
        region: "us-east-1",
    });

    const UserTable = use(NextAuthTable)

    const site = new NextjsSite(stack, "JsohDevSite", {
        bind: [UserTable],
        customDomain: {
            domainName: subdomain + hostedZone.zoneName,
            cdk: {
                hostedZone,
                certificate,
            },
        },
    });

    stack.addOutputs({
        SiteUrl: site.url,
    });

}


