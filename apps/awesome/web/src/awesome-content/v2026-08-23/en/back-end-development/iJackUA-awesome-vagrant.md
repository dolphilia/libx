---
title: "Awesome Vagrant"
description: "Vagrant boxes, provisioning, plugins, tools, web and proxy services, learning resources, and readymade environments."
licenseSource: "github-iJackUA-awesome-vagrant-readme-md"
---

# Awesome Vagrant

Find Vagrant documentation, boxes, provisioning scripts, plugins, tools, web and proxy services, tutorials, books, and readymade development environments. Platform, version, and paid or free service notes reflect the fixed source.

## Official resources

* [Vagrant site](https://www.vagrantup.com/) - Installation instructions, official manuals, and documentation.
* [GitHub repo](https://github.com/hashicorp/vagrant) - Source code, issue discussions, and collaboration.

## Boxes

Sources of operating system boxes.

* [Vagrantbox.es](http://www.vagrantbox.es/) - A community-maintained list of boxes, updated via GitHub pull requests. The source describes it as the biggest list of all available boxes.
* [Vagrant Cloud](https://app.vagrantup.com/boxes/search) - Configuration sharing, box distribution and discovery, with paid features for private collaboration and sharing.
* [Cloud Images Ubuntu.com](https://cloud-images.ubuntu.com/vagrant/) - Official Ubuntu cloud images described by the source as "clean".
* [Baseboxes from Opscode](https://github.com/chef/bento#current-baseboxes) - CentOS, Fedora, Debian, FreeBSD, Ubuntu.
* [Puppet Labs Vagrant Boxes](http://puppet-vagrant-boxes.puppetlabs.com/) - these boxes are provided to be used by various Puppet projects.
* [Cloudsmith](https://cloudsmith.io) - A fully managed package management SaaS with support for Vagrant repositories (and many others).

## Provisioning

* [All available built-in provisioning providers](https://www.vagrantup.com/docs/provisioning) - official doc.
* [Vaprobash](http://fideloper.github.io/Vaprobash/index.html) - Vagrant Provisioning Bash Scripts.

## Notable plugins

Install these plugins with `vagrant plugin install MODULE-NAME`.

* [List of available Vagrant plugins from GitHub wiki](https://github.com/hashicorp/vagrant/wiki/Available-Vagrant-Plugins).
* [vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest) - Automatically update VirtualBox Guest Additions to match the VirtualBox version.
* [vagrant-hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater) - adds an entry to your /etc/hosts file on the host system.
* [vagrant-cachier](http://fgrehm.viewdocs.io/vagrant-cachier/) - share a common package (apt-get, npm, etc.) cache among similar VM instances.
* [vagrant-host-shell](https://github.com/phinze/vagrant-host-shell) - a vagrant provisioner to run commands on the host when a VM boots.
* [vagrant-ansible-local](https://github.com/jaugustin/vagrant-ansible-local) - Provision a VM using Ansible playbooks directly from the guest VM.
* [sahara](https://github.com/jedi4ever/sahara) - Manage VM state through commits and rollbacks while experimenting with a software stack.
* [vagrant-registration](https://github.com/projectatomic/adb-vagrant-registration) - add "register" and "unregister" capabilities to Vagrant guests for updates on systems with a subscription model (like Red Hat Enterprise Linux).
* [vagrant-service-manager](https://github.com/projectatomic/vagrant-service-manager) - enable easier access to the features and services provided by the [Atomic Developer Bundle (ADB)](https://github.com/projectatomic/adb-atomic-developer-bundle).
* [vagrant-scp](https://github.com/invernizzi/vagrant-scp) - Copy files to a Vagrant VM via SCP.

## Helpers / Tools

* [Packer](https://www.packer.io/) - a tool for creating identical machine images for multiple platforms from a single source configuration. The source describes it as supporting fast infrastructure deployment with portability across providers.
* [T.A.D.S. boilerplate](https://github.com/Thomvaill/tads-boilerplate) - boilerplate to create, develop and deploy a Docker Swarm environment, using Vagrant to reproduce production environment locally.
* [Veewee](https://github.com/jedi4ever/veewee) - a tool for easily (and repeatedly) building custom Vagrant base boxes, KVMs, and virtual machine images.
* [Vagrant plugin for ZSH shell](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#vagrant) - auto-complete for commands, task names, box names and built-in documentation.
* [CLI Vagrant Manager](https://github.com/MunGell/vgm) - Command-line tool to manage multiple Vagrant boxes.

## Desktop tools

* [Vagrant Manager](http://vagrantmanager.com/) for OS X.

## Web services

Generate Vagrantfiles with automated provisioning scripts.

* [Phansible](http://phansible.com/) - provides an easy to use interface that helps you generate Ansible Playbooks for PHP based projects.
* [PuPHPet](https://puphpet.com/) - A GUI to set up virtual machines for web development beyond PHP-only use.
* [Protobox](http://getprotobox.com/) - Similar to PuPHPet, using its own YAML-configured installer to control all software installed on the virtual machine.
* [Rove](http://rove.io/) - A service for pregenerating typical Vagrant builds.

## Proxy services

Proxy local web servers to make them publicly available over the internet.

* [Vagrant share](https://www.vagrantup.com/docs/share/) - allows you to share your Vagrant environment with anyone in the world.
* [nip.io](http://nip.io) - A domain name providing wildcard DNS for any IP address.
* [ngrok](https://ngrok.com/) - Tunnels for exposing a local server behind NAT or a firewall to the internet, described by the source as secure.
* [serveo](https://serveo.net/) - expose local servers to the internet, without installing any client.
* [proxylocal.com](http://proxylocal.com) - proxy your local web-server and make it publicly available over the internet.
* [localtunnel.me](https://localtunnel.github.io/www/) - Assigns a unique publicly accessible URL to proxy all requests to your local web server.
* [portmap.io](https://portmap.io/) - OpenVPN-based port forwarding, described by the source as free.

## Tutorials

* [Getting Started With Vagrant](http://www.thisprogrammingthing.com/2013/getting-started-with-vagrant/) by This Programming Thing.
* [Getting started with Vagrant - automated dev servers deploy and provisioning.](http://stdout.in/en/post/getting_started_with_vagrant_automated_dev_servers_deploy_and_provisioning)
* [Working with Advanced Vagrant features in PhpStorm.](http://confluence.jetbrains.com/display/PhpStorm/Working+with+Advanced+Vagrant+features+in+PhpStorm)
* [Sharing Your Virtual Machine on the Web with Vagrant Share](https://scotch.io/tutorials/sharing-your-virtual-machine-on-the-web-with-vagrant-share).
* [Programming Community Curated Resources for Learning Vagrant](https://hackr.io/tutorials/learn-vagrant)
* [Vagrant Online Courses at Classpert](https://classpert.com/vagrant) List of Vagrant Online Courses (free and paid)

## Books

* [Vagrant: Up and Running](https://www.amazon.com/Vagrant-Running-Virtualized-Development-Environments/dp/1449335837) by Mitchell Hashimoto.
* [Vagrant CookBook](https://leanpub.com/vagrantcookbook) by Erika Heidi.
* [Pro Vagrant](https://www.amazon.com/Pro-Vagrant-Wlodzimierz-Gajda/dp/1484200748/) by Wlodzimierz Gajda.
* [Creating Development Environments with Vagrant](http://shop.oreilly.com/product/9781849519182.do) / [2nd Edition](http://shop.oreilly.com/product/9781784397029.do) by Michael Peacock
* [Vagrant Virtual Development Environment Cookbook](http://shop.oreilly.com/product/9781784393748.do) by Chad Thompson

## Readymade environments<a id="popular-readymade-environments"></a>

* [Vagrantpress](https://github.com/vagrantpress/vagrantpress) - development environment for creating and modifying WordPress sites.
* [Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV) - An open source Vagrant configuration focused on WordPress development.
* [Joomla-Vagrant](https://github.com/joomlatools/joomlatools-vagrant).
* [VDD](https://www.drupal.org/project/vdd) - Vagrant Drupal Development.
* [Drupal VM](https://www.drupalvm.com/) - A VM for local Drupal development, built with Vagrant + Ansible
* [Try Yii2](https://github.com/iJackUA/try-yii2) - try Yii2 with Vagrant VM + Ansible provisioning = Complete readymade virtual server playground.
* [Laravel4-Vagrant](https://github.com/bryannielsen/Laravel4-Vagrant) - run Laravel 4 inside a Ubuntu 12.04 Vagrant Virtual Machine w/PHP 5.5.
* [OpenStack on Ansible with Vagrant](https://github.com/openstack-ansible/openstack-ansible).
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Official Vagrant Box for Laravel development, based on Ubuntu 16.04 LTS, PHP 7, Nginx, and multiple database platforms.
* [Scotch Box](https://scotch.io/bar-talk/announcing-scotch-box-2-0-our-dead-simple-vagrant-lamp-stack-improved) - Simple Vagrant Box with [LAMP](https://en.m.wikipedia.org/wiki/LAMP_%28software_bundle%29) stack, plus some useful extras, based on Ubuntu 14.04 LTS.
