
# jsoh-dev  [(link)](www.jsohdev.com)

I have been eager to develop a simple site to showcase personal projects and enhance my familiarity with current web development frameworks. Here I'll outline some base goals, requirements, implementations, and instructions for running locally/deployment.

## Local Development
To run a local development server, please ensure you have at least Node.js version 20 installed and added to your PATH.

1. Install dependencies:

    ```
    npm install
    ```

2. Run the SST development instance and wait for completion:

    ```
    npx sst dev
    ```

3. Next, in a duplicate command window, run:

    ```
    npm run dev
    ```

## Deployment
To deploy the application, ensure you have at least Node.js version 20 installed and added to your PATH. This step also requires the AWS CLI to be configured with sufficient IAM permissions.

1. Install dependencies:

    ```
    npm install
    ```

2. Run SST deploy with stage prod:

    ```
    npx sst deploy --stage prod
    ```

If the command fails, you may need to comment out all stacks from `sst.config.ts` except the 'table' stacks, run a deploy, uncomment stacks, and redeploy. Current versions of OpenNext/SST/App router may have some compatibility issues with resource binding.

## Known Issues

1. Next-auth beta9 introduced a critical error that makes auth routes non-functional in production. I've removed auth from the site until this is resolved. Unfortunately, previous beta versions of next-auth v5 also have various issues.
2. Not noticeable because the auth-gated sections of the site are inaccessible. However, the navbar has some weird interaction edge cases for dropdown menus and server/client components. It needs further improvement.

## Goals
- **Portfolio**: The site is initially intended to function as a simple portfolio showcasing work experience, projects, and a CV.
- **Modern Web Dev**: By building the site, I aim to enhance my skills and understanding of modern web frameworks and deployments.
- **Groundwork**: Moving forward, I plan to develop a simple hardware project and an accompanying SaaS component for a personal project. This will extend this site, so I need to ensure the codebase remains structured enough to provide a solid foundation for future development.
- **Performant**: The site needs to be reasonably responsive and utilize caching where required to provide an optimal user experience.

## Requirements
In addition to the listed goals, several technology requirements need to be met for the project:

- **Low-cost Deployment**: The solution's deployment needs to be low cost with minimal initial expenses.
- **Secure**: To mitigate security risks, I want to avoid hosting applications from my home network. HTTPS and type-safe code are essential security measures.
- **Minimal Infrastructure**: To minimize the time and complexity of managing cloud infrastructure (VMs, containers, etc.).
- **Dynamic Pages**: The site should support both static and dynamic pages/elements.
  - **Server Rendering**: The environment should support both server and client rendering to facilitate future features.
  - **Stack Control**: I aim to maintain control of the deployment environment without unnecessarily increasing complexity.

## Implementation
Considering the goals and requirements, the following technologies have been chosen for the project:

- **Web Framework - Next.js 14**: Utilizing the new app router for Next.js, the site will support both server and client rendering on the same page. API routes will enable full-stack functionality crucial for implementing SaaS features.
- **Auth**: Authentication has been set up via Next-auth using the beta V5 release.
- **Infrastructure**: Using AWS and open-source projects such as SST/OpenNext, the project will be deployed to AWS through serverless and high-availability products. Infrastructure as Code (using SST/AWS CDK) will define and manage self-contained infrastructure stacks within AWS. Certificates, DynamoDB Tables, DNS, and domains will also be provisioned through the IaC deploy process.
- **TypeScript**: The project will be implemented using TypeScript to ensure type safety of the code.
