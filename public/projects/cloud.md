# Work Cloud Dev

## Introduction

To extend our offering and add further value to customers, I was tasked with implementing cloud software to perform additional calculations, produce non-standard graphs, etc by using the API of existing third-party applications.

## Goals

- **Reliability**: The solution needs to be reliable and error-resistant, suitable for usage by end-users. Minimal maintenance should be required for cloud systems.

- **Secure**: Software must be deployed in a secure manner. API keys, customer environmental data, etc must be processed in a secure manner.

- **Flexibility**: The system must provide the flexibility to not only add customers but also add new features in a scalable way.

- **Low cost**: The solution should have a low cost of operation.

## Requirements

In addition to the listed goals, several feature requirements needed to be met for the base project:

- **Graph Generation**: Customers often require graphs that aren't available within third-party applications. We wish to generate these graphs using data extracted by the API for delivery to customers.

- **Data Manipulation**: Often, the data manipulation options offered by the platform are restrictive due to the time complexity of some calculations being infeasible at scale (e.g rolling averages). We wish to do these calculations using API-extracted data and return the result to the third-party platforms.

## Implementation

With the goals and requirements in mind, a system leveraging AWS serverless and SST was developed to deploy the following applications:

1. Next.JS Website with server-side rendering for custom graphs
	- Dynamic page routes were created allowing key information to be included in the URL (e.g parameter ID to graph, and customer reference). This allows for one graph template to serve many customers.

2. Lambda Cron & Simple Queue System (SQS) for custom calculations
	- At a specified interval, the site is checked to see if any calculation is needed.
	- If a calculation is needed, the node along with the calculation is passed to the appropriate SQS for processing.
	- Once the consumer has processed the calculation, it is sent back into the third-party platform via API.

For both systems, server-side code looks up customer reference and uses the appropriate API key. This ensures API keys remain secure on the server.
