# Virtualised Home Network Infrastructure

## Introduction

Upon moving out, it became apparent that my housemates and I wanted more control over our home network, aiming to enhance its capabilities. The following aims to better outline the goals, requirements, and implementation of our home network setup.

## Goals
- **Reliability**: The solution needs to be reliable as it will provide WAN access to our home network.
- **Secure**: Software packages and configurations must be as secure as reasonably possible for a home network context.
- **Performance**: The implementation needs to be sufficiently performant to provide 2.5Gb LAN access and 1Gb WAN, as well as other local services.
- **Flexibility**: We wish not to be locked into hardware configurations and remain in control of software running within the network.
- **Recoverability**: In the event of a disaster, we wish for all configurations to be recoverable.

## Requirements
In addition to the listed goals, several feature requirements need to be met for the project:
- **Low-cost**: The solution's deployment needs to be low cost with minimal initial expenses or ongoing costs.
- **Open source**: Where possible, open-source software should be used.
- **Router Functionality**: The device must be capable of operating as a customisable router.
- **DNS**: Network-level domain blocking (Ads, threats, other) must be implemented.
- **Home Automation**: Locally hosted home automation software is required to facilitate the implementation of bespoke IoT devices around home.
- **VPN Connectivity**: A VPN must be made available so home resources can be securely accessed remotely.
- **Container Flexibility**: Provisions must be made to permit the deployment of Docker/other containers.
- **Media Server/Linux ISOs**: To distribute media within the home and remotely, a media server must be set up.
- **Game Server Hosting**: We enjoy playing games with the boys. Being able to host our own (performant) servers would be very nice.

## Implementation Overview
With the goals and requirements in mind, it became clear that to best achieve the desired outcome, two servers would be required:

1. Low-cost low-power Intel small form factor PC (Low compute requirements, new hardware required)
2. Media/Game Server (High compute requirements, using existing hardware)

## Intel SFF PC
This section will provide an overview of the hardware, OS, and implementation of the Intel SFF PC. This machine is intended to run less compute demanding tasks and have a small form factor to be concealed like a normal router.

### Hardware/Features
- **CPU**: Intel N100 (4C, 10W TDP)
- **Storage**: 240GB NVMe SSD
- **RAM**: 16GB DDR5 RAM
- **Network**: 4 x 2.5GB RJ45
- **Cooling**: Sealed units / passive cooling

### Operating System
The Intel SFF PC is running Proxmox, a complete open-source platform for enterprise-grade virtualisation. It allows for configuration of VMs and containers, providing great flexibility and management of services. Additionally, virtualisation allows utilisation of overprovisioning to more efficiently utilise available compute.

### Implemented Features
- **Router**: Using hardware passthrough for two of the RJ45 ports, routing is provided by an OpenWRT VM. Furthermore, an additional VLAN has been configured, which cannot access WAN for connection of devices (mostly IoT) that should not be WAN accessible for security reasons.
- **DNS**: Local DNS is provided through a PiHole container - this DNS is handed out by the router's DHCP to all clients.
- **Home Automation**: Home Assistant has been provisioned as a VM to provide powerful home automation control to locally connected devices.
- **Tailscale**: A Tailscale VPN node container has been deployed to allow users within my personal Tailscale network to access LAN services as needed. The VPN also enforces the PiHole for DNS - extending the DNS level blocking to mobile phones regardless of location.
- **Express VPN**: A container configured to only connect to the internet via Express VPN has been configured. This container can then be used as the network device for other containers (effectively routing them through Express VPN). This is particularly useful for privacy when torrenting or with some cheeky Tailscale configurations allowing more clients to use ExpressVPN as an exit node than ExpressVPN allows.
- **qBitTorrent**: Torrent Application, set up with network storage mapped to the Media/Game server.

## Media/Game Server
This section will provide an overview of the hardware, OS, and implementation of the Media/Game Server (MGS).

### Hardware/Features
- **CPU**: AMD 3700x
- **Storage**: 1TB SATA SSD
- **RAM**: 32GB DDR4 RAM
- **Network**: 1 x 2.5GB RJ45
- **GPU**: NVIDIA P400

### Operating System
The MGS is running UNRAID, a powerful, easy-to-use operating system for self-hosted servers and network-attached storage. Regrettably, Unraid isn't open source. However, it has a unique storage system that allows for bespoke drive additions to the pool in a way not easily achievable with ZFS/RAID. It's too convenient for home usage to pass up.

### Implemented Features
- **Storage Pool**: UNRAID provides a method for tiered storage (SSD and then write to array on some schedule). This allows for drives to be spun down (only activating on your defined array write schedule), saving power and noise. Storage pool is made available to the network via SMB.
- **Emby Media Server**: An Emby Media Server provides access to all media on the storage pool for local and remote users. The NVIDIA P400 is used for hardware transcoding of video where required.
- **Minecraft Server**: What good is a game server without a Minecraft Server? World stored on SSD, extra CPU performance is good for world generation.
- **Assetto Corsa Server**: I'm pretty into SIM Racing. Have been running a network of 10-15 Assetto Corsa servers for quite some time. These aren't too compute-intensive, but can be sometimes so not running them on the Intel SFF PC.

## Does it Work?
Yes, both systems have been functioning as expected, and the extra flexibility and utility we've been able to achieve have been very useful. Backups have been useful to quickly fix bad updates and have even allowed us to copy relevant parts of our setup and provide it 'as is' to other friends.

## Lessons Learned
Throughout this project, we gained valuable insights:
- Virtual machines (VMs) provide tremendous flexibility, enabling the reduction of redundant machines without sacrificing performance or stability.
- Properly scoping the deployment prior to committing is of utmost importance. We conducted extensive planning and executed small-scale implementations, which significantly contributed to determining the final form of our network. This approach saved us time.
- We initially had both of these in the one system. However, it was determined that a two-system approach would be best, allowing for changes to the media server PC without taking down the internet. It also saves on space where the NBN termination is, as having a large PC there was problematic.
