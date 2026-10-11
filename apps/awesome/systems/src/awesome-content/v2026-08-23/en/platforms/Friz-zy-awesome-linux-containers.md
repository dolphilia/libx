---
title: Awesome Linux Containers
description: >-
  Linux container specifications, platforms, runtimes, image tools, and security
  resources, with notes on isolation and kernel mechanisms.
licenseSource: github-Friz-zy-awesome-linux-containers-readme-md
---
# Awesome Linux Containers<a id="table-of-contents"></a><a id="about-the-author"></a>

Resources for finding Linux container specifications, cloud platforms, operating systems, runtimes, sandboxes, image tools, dashboards, and security material. The list also includes notes on isolation, privileges, and the kernel mechanisms used by containers.

Names, support statements, security notes, and evaluations below reflect the fixed source. They are retained as historical descriptions, rather than a check of current availability or security guarantees.

## Foundations

* [Open Container Initiative](https://www.opencontainers.org/) - The Open Container Initiative is a lightweight, open governance structure, to be formed under the auspices of the Linux Foundation, for the express purpose of creating open industry standards around container formats and runtime.

* [Cloud Native Computing Foundation](https://cncf.io/) - The Cloud Native Computing Foundation will create and drive the adoption of a new set of common container technologies informed by technical merit and end user value, and inspired by Internet-scale computing.

* [Cloud Foundry Foundation](https://www.cloudfoundry.org/foundation/) - The source introduces the foundation with the slogan “The Cloud is our foundry.”

## Specifications

* [Open Container Specifications](https://github.com/opencontainers/specs) - This project is where the Open Container Initiative Specifications are written. This is a work in progress.

* [App Container basics](https://github.com/coreos/rkt/blob/master/Documentation/app-container.md) - App Container (appc) is an open specification that defines several aspects of how to run applications in containers: an image format, runtime environment, and discovery protocol.

* [Systemd Container Interface](https://wiki.freedesktop.org/www/Software/systemd/ContainerInterface/) - systemd provides basic building blocks for Linux, including a system and service manager that runs as PID 1 and starts the rest of the system. The source asks container implementations to consider supporting these interfaces.

* [Nulecule Specification](https://github.com/projectatomic/atomicapp/tree/master/docs/spec) - Nulecule defines a pattern and model for packaging complex multi-container applications and services, referencing all their dependencies, including orchestration metadata in a container image for building, deploying, monitoring, and active management.

* [Oracle microcontainer manifesto](https://blogs.oracle.com/developers/the-microcontainer-manifesto) - This is not a new container format, but simply a specific method for constructing a container that allows for better security and stability.

* [Cloud Native Application Bundle Specification](https://github.com/deislabs/cnab-spec) - A package format specification that describes a technology for bundling, installing, and managing distributed applications, that are by design, cloud agnostic.

## Clouds

* [Amazon EC2 Container Service](https://aws.amazon.com/ecs/) - Container management service that supports Docker containers and allows you to easily run applications on a managed cluster of Amazon EC2 instances.

* [Google Cloud Platform](https://cloud.google.com/container-engine/) - Run Docker containers on Google Cloud Platform, powered by Kubernetes. Google Container Engine actively schedules your containers, based on declared needs, on a managed cluster of virtual machines.

* [Jelastic](http://jelastic.com/) - Unlimited PaaS and Container-Based IaaS in a Joint Cloud Solution for DevOps.

* [Joyent](https://www.joyent.com/) - High-Performance Container-Native Infrastructure for Today's Demanding Real-Time Web and Mobile Applications.

* [Kubernetes](http://kubernetes.io/) - Manage a cluster of Linux containers as a single system to accelerate Dev and simplify Ops.

* [Mesosphere](https://mesosphere.com/) - The Mesosphere Datacenter Operating System (DCOS) is a new kind of operating system that spans all of the machines in your datacenter or cloud. It provides a highly elastic, and highly scalable way of deploying applications, services and big data infrastructure on shared resources.

* [OpenShift Origin](https://www.openshift.org/) - OpenShift Origin is a distribution of [Kubernetes](http://kubernetes.io/) optimized for continuous application development and multi-tenant deployment. Origin adds developer and operations-centric tools on top of Kubernetes to enable rapid application development, easy deployment and scaling, and long-term lifecycle maintenance for small and large teams.

* [Warden](https://github.com/cloudfoundry/warden) - Manages isolated, ephemeral, and resource controlled environments. Part of Cloud Foundry - the open platform as a service project.

* [Virtuozzo](https://virtuozzo.com) - A platform, built on Virtuozzo containers, that can be easily run on top of any bare-metal or virtual servers in any public or private cloud, to automate, optimize, and accelerate internal IT and development processes.

* [Rancher](http://rancher.com/) - Rancher is a complete, open source platform for deploying and managing containers in production. It includes commercially-supported distributions of Kubernetes, Mesos, and Docker Swarm, making it easy to run containerized applications on any infrastructure.

* [Docker Swarm](https://docs.docker.com/engine/swarm/) - Docker Swarm is native clustering for Docker.

* [Azure Container Service](https://azure.microsoft.com/en-us/services/container-service/) - Azure Container Service optimizes the configuration of popular open source tools and technologies specifically for Azure.

* [CIAO](https://ciao-project.github.io/) - Cloud Integrated Advanced Orchestrator for Intel Clear Linux OS.

* [Alibaba Cloud Container Service](https://www.alibabacloud.com/fr/product/container-service) - Container Service is a high-performance and scalable container application management service that enables you to use Docker and Kubernetes to manage the lifecycle of containerized applications.

* [Nomad](https://www.nomadproject.io/) - HashiCorp Nomad is a single binary that schedules applications and services on Linux, Windows, and Mac. It is an open source scheduler that uses a declarative job file for scheduling virtualized, containerized, and standalone applications.

## Operating Systems

* [CoreOS](https://coreos.com/) - A lightweight Linux operating system for clustered deployments, providing automation, security, and scalability for critical applications.

* [RancherOS](http://rancher.com/rancher-os/) - RancherOS is a tiny Linux distro that runs the entire OS as Docker containers.

* [Project Atomic](http://www.projectatomic.io/) - A platform for the Linux Docker Kubernetes (LDK) application stack. Uses immutable infrastructure to deploy and scale containerized applications.

* [Snappy Ubuntu Core](https://www.ubuntu.com/cloud/snappy) - A system for large-scale cloud container deployments, bringing transactional updates to what the source calls the world’s favourite container platform.

* [ResinOS](https://resinos.io/) - A host OS tailored for containers, described by the source as designed for reliability and proven in production.

* [Photon](https://github.com/vmware/photon) - Photon OS is a minimal Linux container host designed to have a small footprint and tuned for VMware platforms. Photon is intended to invite collaboration around running containerized and Linux applications in a virtualized environment.

* [Clear Linux Project](https://clearlinux.org) - The Clear Linux Project for Intel Architecture is a distribution built for various Cloud use cases.

* [CargOS](https://cargos.io/) - CargOS is a new lightweight, open source, platform for Docker hosts that aims for speed, manageability and security. Releases are built for 64-bit Intel/AMD CPUs.

* [OSv](http://osv.io/) - An open-source operating system designed from the ground up for the cloud, aiming for easy deployment and management with high performance.

* [HypriotOS](http://blog.hypriot.com/about/) - Minimal Debian-based operating systems that is optimized to run Docker. It made it dead easy use Docker on any Raspberry Pi.

* [MCL](https://mcl.host) - MCL (*Minimal Container Linux*) is a from scratch minimal Linux OS designed specifically to run containers. It has a small footprint of ~50MB and boots within seconds. It is currently optimized to run Docker.

## Hypervisors

* [Docker](https://github.com/veggiemonk/awesome-docker#cloud-infrastructure) - An open platform for distributed applications for developers and sysadmins, described by the source as the de facto standard.

* [LXD](https://github.com/lxc/lxd) - Daemon based on liblxc offering a REST API to manage LXC containers.

* [OpenVZ](https://openvz.org/) - OpenVZ is container-based virtualization for Linux. OpenVZ creates multiple secure, isolated Linux containers (otherwise known as VEs or VPSs) on a single physical server enabling better server utilization and ensuring that applications do not conflict.

* [MultiDocker](https://github.com/marty90/multidocker) - Create a secure multi-user Docker machine, where each user is segregated into an independent container.

* [Lithos](https://github.com/tailhook/lithos/) - Lithos is a process supervisor and containerizer for running services. It is not intended to be system init, but rather tries to be a base tool to build container orchestration.

* [containerd](https://containerd.io/) - A container runtime which can manage a complete container lifecycle - from image transfer/storage to container execution, supervision and networking.

## Containers

* [runc](https://github.com/opencontainers/runc) - A CLI tool for spawning and running containers according to what the source calls the OCS specification.

* [Bocker](https://github.com/p8952/bocker) - Docker implemented in around 100 lines of Bash.

* [Rocket](https://github.com/coreos/rkt) - rkt (pronounced "rock-it") is a CLI for running app containers on Linux. rkt is designed to be composable, secure, and fast. Based on AppC specification.

* [LXC](https://github.com/lxc/lxc) - LXC is the well known set of tools, templates, library and language bindings. It's pretty low level, very flexible and covers just about every containment feature supported by the upstream kernel.

* [Vagga](https://github.com/tailhook/vagga) - Vagga is a fully-userspace container engine inspired by Vagrant and Docker, specialized for development environments.

* [libct](https://github.com/xemul/libct) - Libct is a containers management library which provides convenient API for frontend programs to rule a container during its whole lifetime.

* [libvirt](https://libvirt.org/drvlxc.html) - A large toolkit for interacting with the virtualization capabilities of Linux versions described as recent in the source, as well as other operating systems.

* [systemd-nspawn](https://wiki.archlinux.org/index.php/Systemd-nspawn) - Spawn a namespace container for debugging, testing and building. Part of [systemd](https://wiki.freedesktop.org/www/Software/systemd/).

* [porto](https://github.com/yandex/porto) - The main goal of Porto is to create a convenient, reliable interface over several Linux kernel mechanism such as cgroups, namespaces, mounts, networking etc.

* [udocker](https://github.com/indigo-dc/udocker) - A basic user tool to execute simple containers in batch or interactive systems without root privileges.

* [Let Me Contain That For You](https://github.com/google/lmctfy) - LMCTFY is the open source version of Google’s container stack, which provides Linux application containers.

* [cc-oci-runtime](https://github.com/01org/cc-oci-runtime) - Intel Clear Linux OCI (Open Containers Initiative) compatible runtime.

* [railcar](https://github.com/oracle/railcar) - Railcar is a rust implementation of the opencontainers initiative's runtime spec. It is similar to the reference implementation runc, but it is implemented completely in rust for memory safety without needing the overhead of a garbage collector or multiple threads.

* [Kata Containers](https://katacontainers.io/) - Kata Containers is a new open source project building extremely lightweight virtual machines that seamlessly plug into the containers ecosystem.

* [plash](https://github.com/ihucos/plash/) - Lightweight, rootless containers.

* [runv](https://github.com/hyperhq/runv) - Hypervisor-based (KVM, Xen, QEMU) Runtime for OCI. Security by isolation.

* [podman](https://github.com/containers/libpod) - Full management of container lifecycle.

* [firecracker](https://github.com/firecracker-microvm/firecracker) - Firecracker runs workloads in lightweight virtual machines, called microVMs, which combine the security and isolation properties provided by hardware virtualization technology with the speed and flexibility of containers.

* [sysbox](https://github.com/nestybox/sysbox) - Sysbox is a "runc" that creates secure (rootless) containers / pods that run not just microservices, but most workloads that run in VMs (e.g., systemd, Docker, and Kubernetes), seamlessly.

* [youki](https://github.com/containers/youki) - A container runtime written in Rust.

* [footloose](https://github.com/weaveworks/footloose) - Containers that look like Virtual Machines.

## Sandboxes

* [Firejail](https://l3net.wordpress.com/projects/firejail/) - Firejail is a SUID sandbox program that reduces the risk of security breaches by restricting the running environment of untrusted applications using Linux namespaces, seccomp-bpf and Linux capabilities.

* [NsJail](https://github.com/google/nsjail) - NsJail is a process isolation tool for Linux. It makes use of the namespacing, resource control, and seccomp-bpf syscall filter subsystems of the Linux kernel.

* [Subuser](https://github.com/subuser-security/subuser) - Securing the Linux desktop with Docker.

* [Snappy](https://wiki.ubuntu.com/SecurityTeam/Specifications/SnappyConfinement) - A rendition of Ubuntu with transactional updates: a minimal server image with the same libraries as the Ubuntu described in the source, with applications provided through a simpler mechanism.

* [xdg-app](https://wiki.gnome.org/Projects/SandboxedApps) - xdg-app is a system for building, distributing and running sandboxed desktop applications on Linux.

* [Bubblewrap](https://github.com/projectatomic/bubblewrap) - Run applications in a sandbox using Linux namespaces without root privileges, with user namespacing provided via setuid binary.

* [singularity](https://github.com/singularityware/singularity) - Universal application containers for Linux.

* [Lxroot](https://github.com/parke/lxroot) - Lxroot is a flexible, lightweight, and safer alternative to chroot and/or Docker for non-root users on Linux.

## Partial Access

* [nsenter](http://man7.org/linux/man-pages/man1/nsenter.1.html) - Run program with namespaces of other processes. Part of the util-linux.

* [ip-netns](http://man7.org/linux/man-pages/man8/ip-netns.8.html) - Process network namespace management. Part of the iproute2.

* [unshare](http://man7.org/linux/man-pages/man1/unshare.1.html) - Run program with some namespaces unshared from parent. Part of the util-linux.

* [python-nsenter](https://github.com/zalando/python-nsenter) - This Python package allows entering Linux kernel namespaces (mount, IPC, net, PID, user and UTS) by doing the "setns" syscall.

* [butter](https://pypi.python.org/pypi/butter) - Python library to interface to low level linux features (inotify, fanotify, timerfd, signalfd, eventfd, containers) with asyncio support.

* [pyspaces](https://github.com/Friz-zy/pyspaces) - Works with Linux namespaces through glibc with pure python.

* [CRIU](https://criu.org/Main_Page) - Checkpoint/Restore In Userspace is a software tool for Linux operating system. Using this tool, you can freeze a running application (or part of it) and checkpoint it to a hard drive as a collection of files. CRIU integrated with Docker and LXC to implement Live migration of containers.

* [Moby](https://github.com/moby/moby) - A "Lego set" of toolkit components for containers software created by Docker.

## Filesystem

* [container-diff](https://github.com/GoogleCloudPlatform/container-diff) - A tool for analyzing and comparing container images.

* [buildah](https://github.com/projectatomic/buildah) - A tool which facilitates building OCI container images.

* [skopeo](https://github.com/projectatomic/skopeo) - Work with remote images registries - retrieving information, images, signing content.

* [img](https://github.com/jessfraz/img) - Standalone, daemon-less, unprivileged Dockerfile and OCI compatible container image builder.

* [dgr](https://github.com/blablacar/dgr) - Command line utility designed to build and to configure at runtime App Containers Images (ACI) and App Container Pods (POD) based on convention over configuration.

* [Whaler](https://github.com/P3GLEG/Whaler) - Whaler is designed to reverse engineer a Docker Image into the Dockerfile that created it.

* [dive](https://github.com/wagoodman/dive) - A tool for exploring each layer in a docker image.

* [go-containerregistry](https://github.com/google/go-containerregistry) - Go library and CLIs for working with container registries.

* [kaniko](https://github.com/GoogleContainerTools/kaniko) - Kaniko is a tool to build container images from a Dockerfile, inside a container or Kubernetes cluster.

* [umoci](https://umo.ci/) - Umoci is a tool to manipulate OCI container images, and can be used as a rudimentary build tool.

* [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - A Docker CLI plugin that lets you push the README.md file from the current directory to a container registry. Supports Docker Hub, Quay and Harbor.

## Dashboard

* [LXC-Web-Panel](https://lxc-webpanel.github.io/) - Web panel for LXC on Ubuntu.

* [Liman](https://github.com/salihciftci/liman) - Basic docker monitoring web application.

* [portainer](https://github.com/portainer/portainer) - Lightweight Docker management UI.

* [swarmpit](https://github.com/swarmpit/swarmpit) - Lightweight mobile-friendly Docker Swarm management UI.

## Best practices

* [The Twelve-Factor App](https://12factor.net/) - The twelve-factor app is a methodology for building software-as-a-service apps.

* [Container Best Practices](http://docs.projectatomic.io/container-best-practices/) - A collaborative project to document container-based application architecture, creation and management from Project Atomic.

## Security

### Tools

* [Docker bench security](https://github.com/docker/docker-bench-security) - The Docker Bench for Security is a script that checks for dozens of common best-practices around deploying Docker containers in production.
* [CoreOS Clair](https://coreos.com/blog/vulnerability-analysis-for-containers/) - Open Source Vulnerability Analysis for your Containers.
* [bane](https://github.com/jfrazelle/bane) - Custom AppArmor profile generator for docker containers.
* [OpenSCAP](https://github.com/OpenSCAP/container-compliance) - The OpenSCAP ecosystem provides multiple tools to assist administrators and auditors with assessment, measurement and enforcement of security baselines.
* [drydock](https://github.com/zuBux/drydock) - Drydock provides a flexible way of assessing the security of your Docker daemon configuration and containers using editable audit templates.
* [trireme](https://www.aporeto.com/trireme/) - Security by segmentation for Docker and Kubernetes.
* [goss](https://github.com/aelsabbahy/goss) - Quick and Easy server testing/validation.
* [sockguard](https://github.com/buildkite/sockguard) - A proxy for docker.sock that enforces access control and isolated privileges.
* [gvisor](https://github.com/google/gvisor) - gVisor is a user-space kernel, written in Go, that implements a substantial portion of the Linux system surface. It includes an Open Container Initiative (OCI) runtime called runsc that provides an isolation boundary between the application and the host kernel. The runsc runtime integrates with Docker and Kubernetes, making it simple to run sandboxed containers.
* [docker-explorer](https://github.com/google/docker-explorer/) - A tool to help forensicate offline docker acquisitions.
* [oci-seccomp-bpf-hook](https://github.com/containers/oci-seccomp-bpf-hook) - OCI hook to trace syscalls and generate a seccomp profile.

### Links
* [CIS Security Benchmarks](https://benchmarks.cisecurity.org/about/)
* [Are Docker containers really secure?](https://opensource.com/business/14/7/docker-security-selinux)
* [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
* [Docker, Linux Containers (LXC), and security](http://www.slideshare.net/jpetazzo/docker-linux-containers-lxc-and-security)
* [For containers, security is problem #1](http://www.itworld.com/article/2920349/security/for-containers-security-is-problem-1.html)
* [Linux Container Security](https://mjg59.dreamwidth.org/33170.html)
* [Ask HN: Best Linux sandbox?](https://news.ycombinator.com/item?id=10030868)
* [CIS Docker 1.6 Benchmark v1.0.0](https://benchmarks.cisecurity.org/tools2/docker/CIS_Docker_1.6_Benchmark_v1.0.0.pdf)
* [Understanding docker security and best practices](https://blog.docker.com/2015/05/understanding-docker-security-and-best-practices/)
* [Update on Ubuntu Phone security issue](https://insights.ubuntu.com/2015/10/15/update-on-ubuntu-phone-security-issue/)
* [Don't expose the Docker socket (not even to a container)](https://www.lvh.io/posts/dont-expose-the-docker-socket-not-even-to-a-container/)
* [RedHat Blog](http://rhelblog.redhat.com/?s=container&submit=Search)
  - [Introduction to Linux Containers](https://access.redhat.com/articles/1353593)
  - [What’s Next for Containers? User Namespaces](http://rhelblog.redhat.com/2015/07/07/whats-next-for-containers-user-namespaces/#more-1004)
  - [Architecting Containers Part 1: Why Understanding User Space vs. Kernel Space Matters](http://rhelblog.redhat.com/2015/07/29/architecting-containers-part-1-user-space-vs-kernel-space/)
  - [Architecting Containers Part 2: Why the User Space Matters](http://rhelblog.redhat.com/2015/09/17/architecting-containers-part-2-why-the-user-space-matters-2/)
  - [Secure Your Containers with this One Weird Trick](http://rhelblog.redhat.com/2016/10/17/secure-your-containers-with-this-one-weird-trick/)
* [Why you shouldn't use ENV variables for secret data](https://diogomonica.com/2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/)
* [When to use-Docker alternatives rkt and LXD](http://searchitoperations.techtarget.com/tip/When-to-use-Docker-alternatives-rkt-and-LXD)
* [The container is a lie](https://platform.sh/blog/2020/the-container-is-a-lie/)

### Levels of security problems

1) Regular applications (fixed-source notes)

* Applications are always untrusted: keep this in mind.
* SUID bit: mount with nosuid.
* Limit available system calls with seccomp-bpf or grsec.
* Leaks into another container through bugs in namespaces or the filesystem: use user namespaces with different external UIDs for each container, for example UID 1000 inside mapping to 14293 or 15398 outside; use security modules such as SELinux or AppArmor.

2) System services such as cron and ssh

* Running as root: isolate through a bastion host or VM.
* Using /dev: use the devices control group. The source lists these device nodes as created in containers by default, and says Docker images are mounted with nodev, so a device node already present in an image cannot be used by container processes to communicate with the kernel: /dev/console, /dev/null, /dev/zero, /dev/full, /dev/tty*, /dev/urandom, /dev/random, /dev/fuse.
* Calls requiring root: use capabilities, with particular caution around cap_sys_admin. The source gives the following list of capabilities used by Docker: chown, dac_override, fowner, kill, setgid, setuid, setpcap, net_bind_service, net_raw, sys_chroot, mknod, setfcap, and audit_write. It also presents a list of capabilities removed by Docker; both original lists are retained here, including their overlap. The removed-capability list and descriptions are:  
  CAP_SETPCAP — Modify process capabilities.  
  CAP_SYS_MODULE — Insert or remove kernel modules.  
  CAP_SYS_RAWIO — Modify kernel memory.  
  CAP_SYS_PACCT — Configure process accounting.  
  CAP_SYS_NICE — Modify process priorities.  
  CAP_SYS_RESOURCE — Override resource limits.  
  CAP_SYS_TIME — Modify the system clock.  
  CAP_SYS_TTY_CONFIG — Configure tty devices.  
  CAP_AUDIT_WRITE — Write the audit log.  
  CAP_AUDIT_CONTROL — Configure the audit subsystem.  
  CAP_MAC_OVERRIDE — Ignore the kernel MAC policy.  
  CAP_MAC_ADMIN — Configure MAC settings.  
  CAP_SYSLOG — Modify kernel printk behavior.  
  CAP_NET_ADMIN — Configure networking.  
  CAP_SYS_ADMIN — Broad, catch-all privileges.  
  For /proc and /sys, the source suggests remounting read-only (ro), dropping cap_sys_admin, and using security modules such as SELinux or AppArmor; some parts of these filesystems are namespace-aware. It lists /sys, /proc/sys, /proc/sysrq-trigger, /proc/irq, and /proc/bus as mounted read-only by Docker.  
  Copy-on-write filesystems: the source describes Docker containers sharing a base filesystem image, with writes going to a container-specific filesystem. One container therefore does not see another container's changes, even when both write to the same base image, and cannot change the image contents to affect processes in another container.
* UID 0: use user namespaces to map UID 0 to a random external UID.

3) System services for devices, networking, and filesystems

* Root: run more services outside the container on the host; isolate sensitive functions and run them in a non-privileged context.
* Full privileges: isolate at the kernel level.

4) Kernel drivers, network stack, and security policies

* Absolute privileges: run in a separate VM.

5) General approaches such as immutable infrastructure

* Keep the container read-only (ro).
* Direct writes to a small, separate read-write (rw) area mounted with nosuid.

[Source: Docker, Linux Containers (LXC), and security](http://www.slideshare.net/jpetazzo/docker-linux-containers-lxc-and-security)
[Source: Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)

### Technologies for security

The source describes improvements through Linux's built-in security tools, listing [AppArmor](http://wiki.apparmor.net/index.php/Main_Page), [SELinux](http://selinuxproject.org/page/Main_Page), and [Seccomp](http://man7.org/linux/man-pages/man2/seccomp.2.html) policies; [Grsecurity](https://grsecurity.net/); [control groups (cgroups)](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Resource_Management_Guide/ch01.html); and [kernel namespaces](http://man7.org/linux/man-pages/man7/namespaces.7.html). It says most container technologies contemporary to the source can use these tools. [Source: For containers, security is problem #1](http://www.itworld.com/article/2920349/security/for-containers-security-is-problem-1.html).

The source states that deploying seccomp does not allow SELinux to be used inside a container because its policy is not per-namespace. It also leaves this point uncertain with a question about LXC using AppArmor for each container. It lists [sVirt](http://selinuxproject.org/page/SVirt) as SELinux for KVM. [Source: Linux Container Security](https://mjg59.dreamwidth.org/33170.html).

The source lists the following major kernel subsystems as not namespaced:

- SELinux
- Cgroups
- Filesystems under /sys
- /proc/sys, /proc/sysrq-trigger, /proc/irq, /proc/bus

It also lists the following devices or components as not namespaced:

- /dev/mem
- /dev/sd* filesystem devices
- Kernel modules

The source warns that a privileged process able to communicate with or attack one of these can take control of the system. [Source: Are Docker containers really secure?](https://opensource.com/business/14/7/docker-security-selinux).

## Other Information Sources <a id="another-information-sources"></a>

* [sysdig-container-ecosystem](https://github.com/draios/sysdig-container-ecosystem) - The Container Ecosystem Project aims to help readers navigate the many technologies emerging around containers and microservices.

* [doger.io](http://doger.io/) - Documents the ins and outs of Linux containers for programmers implementing containers or container-like features, as well as sysadmins and users seeking to understand how containers work under the hood.
