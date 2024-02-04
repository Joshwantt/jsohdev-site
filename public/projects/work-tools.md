# Work Tools

## Introduction

Work was bustling - we had recently gone through a period of expansion, and our operations speed was struggling to keep up with the required throughput.

A substantial portion of staff time was consumed configuring, testing, and applying configuration to IoT devices. As part of a business-wide effort to enhance our throughput, I was tasked with implementing a hardware/software solution to reduce the time spent by staff doing physcial tasks on IoT devices.

## Goals
- **Reliability**: The solution needs to be sufficiently reliable for use by internal staff.
- **Secure**: Software must be deployed in a secure manner.
- **Flexibility**: If business needs change, the solution must be capable of change without drastic redesign.
- **Low cost**: We anticipate needing a number of stations counted in the hundreds. To keep the overall cost low, the cost per 'tester' should be minimised where possible.

## Requirements
In addition to the listed goals, several feature requirements need to be met for the project:
- **Apply IoT Device Config**: The tester must be capable of applying IoT device config. The devices connect to a cloud platform seeking configuration updates if specific IO is toggled. The Tester must be capable of reliably triggering this IO.
- **Digital Input Simulation**: The tester must be capable of applying customized tests to the Digital Inputs of IoT devices.
- **Modbus**: The device must be capable of simulating a Modbus Slave over RS232/RS485, with custom register/data definitions able to be applied.
- **Bulk Control UI**: A method (e.g., Web UI) must be implemented for controlling, updating, monitoring the testers.
- **Network Management**: As IoT devices are connected via cellular, the testers must be able to manage cellular network congestion to ensure testing reliability.

## Implementation Overview
With the goals and requirements in mind, it became clear that to best achieve the desired outcome two systems would be required.

1. Testing Cradle for connecting the IoT devices for testing.
2. Web UI for controlling the testing cradles.

## Testing Cradle

This section will provide an overview of the hardware, software, and implementation of the Testing Cradle. This device is intended to receive web requests with instructions on how it should operate the IO of a microcontroller.

### Implemented Hardware/Features
- **Microcontroller**: ESP32
- **Build**: Custom 3D printed Cradle.
- **Network**: 2.4GHz Wifi on a separate VLAN.
- **Other**: Relay board, RS232/RS485 UART Modules.

### Implemented Software/Features
- **Language**: C++
- **API**: Async API for operating inputs, changing settings, returning device status.
- **Modbus**: Modbus slave emulation was achieved by implementing existing open-source Modbus Slave libraries. UART to RS232/RS485.
- **Digital Inputs**: Device is able to trigger device config updates or simulate digital input action via API.
- **Other**: NTP daily sync, device health monitoring.

## Web UI

This section will provide an overview of the software and implementation of the Web UI. This website is intended to provide operators the ability to run tests, apply configuration, etc to a fleet of devices connected to testing cradles.

### Implementation Software/Features
- **Technologies**: Next.JS / SemaphoreCI / AWS CDK
- **Web Framework**: Next.JS static pages were implemented to facilitate bulk control of IoT testers via their APIs.
- **Deployment**: The website was deployed within AWS. AWS CDK was used to write IaC for the website and deploy it within our organisation's private AWS VPC network.
- **CI/CD**: A Semaphore CI/CD pipeline was used to manage deployments of the site and IaC.
