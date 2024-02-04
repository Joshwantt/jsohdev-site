# JsohDev Site

I have been eager to develop a simple site to showcase personal projects and enhance my familiarity with current web development frameworks. This document aims to outline the requirements, goals, and implementation of the JsohDev site.

## Goals
- **Portfolio**: The site is initially intended to function as a simple portfolio showcasing work experience, projects, and a CV.
- **Modern Webdev**: By building the site, I aim to enhance my skills and understanding of modern web frameworks and deployments.
- **Groundwork**: Moving forward, I plan to develop a simple hardware project and an accompanying SaaS component for a personal project. This will extend this site, so I need to ensure the codebase remains structured enough to provide a solid foundation for future development.
- **Performant**: The site needs to be reasonably responsive and utilize caching where required to provide an optimal user experience.

## Requirements
In addition to the listed goals, several technology requirements need to be met for the project:

- **Low-cost Deployment**: The solution's deployment needs to be low cost with minimal initial expenses.
- **Secure**: To mitigate security risks, I want to avoid hosting applications from my home network. HTTPS and typesafe code are essential security measures.
- **Minimal Infrastructure**: To minimize the time and complexity of managing cloud infrastructure (VMs, containers, etc.).
- **Dynamic Pages**: The site should support both static and dynamic pages/elements.
  - **Server Rendering**: The environment should support both server and client rendering to facilitate future features.
  - **Stack Control**: I aim to maintain control of the deployment environment without unnecessarily increasing complexity.

## Implementation
Considering the goals and requirements, the following technologies have been chosen for the project:

- **Web Framework - NextJS 14**: Utilizing the new app router for NextJS, the site will support both server and client rendering on the same page. API routes will enable full-stack functionality crucial for implementing SaaS features.
- **Infrastructure**: Using AWS and open-source projects such as SST/OpenNext, the project will be deployed to AWS through serverless and high-availability products. Infrastructure as Code (using SST/AWS CDK) will define and manage self-contained infrastructure stacks within AWS. Certificates, DNS, and domains will also be provisioned through the IaC deploy process.
- **TypeScript**: The project will be implemented using TypeScript to ensure type safety of the code.
