---
title: Awesome Heroku
description: >-
  Heroku deployment, architecture, databases, scaling tools, company history,
  and migration alternatives from a fixed source.
licenseSource: github-ianstormtaylor-awesome-heroku-readme-md
documentContext:
  - kind: source
    html: >-
      <p>This list is provided under <a
      href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>. To the
      extent possible under law, <a href="http://ianstormtaylor.com">Ian Storm
      Taylor</a> has waived all copyright and related or neighboring rights to
      this work.</p>
---
# Awesome Heroku<a id="-license"></a>

Find Heroku deployment and architecture guides, development and database resources, scaling tools, company history, and alternatives for migrating away. Product names, beta status, and service descriptions reflect the fixed source.

## Analytics <a id="-analytics"></a>

- Tool: [Metabase](http://www.metabase.com/docs/v0.13.3/operations-guide/running-metabase-on-heroku.html) — A beta app deployable directly to Heroku; the fixed source calls it “Metadata”.

## Architecture <a id="-architecture"></a>

- Article: [Exploring Microservices Architecure on Heroku](http://blog.codeship.com/exploring-microservices-architecture-on-heroku/) — Explains why Heroku eliminates much of the tooling needed when working with microservices.
- Article: [Heroku and SOA](https://www.rdegges.com/2014/heroku-and-soa/) — Discusses why Heroku suits a service-oriented architecture.
- Article: [Split Frontend from Backend on Heroku with npm and NodeJS](https://medium.com/@spygi/scalable-cost-effective-web-architectures-for-heroku-eb8f1f55a4b6) — A hands-on guide to deploying a microservices web application on Heroku with npm and NodeJS.

## Blogs <a id="-blogs"></a>

- Blog: [Heroku Blog](https://blog.heroku.com) — The official Heroku blog.

## Deployment <a id="-deployment"></a>

- Official: [Preboot](https://devcenter.heroku.com/articles/preboot) — Explains how to use Preboot for zero-downtime deployments and the difficulties in getting them right.
- Article: [Automating our Heroku deployments from Jenkins](https://www.paulfurley.com/automating-heroku-deployments-from-jenkins/) — Explains how to automate deployment steps, including maintenance mode, copying a production database to staging, and running migrations on staging.
- Question: [How do you ignore files when deploying to Heroku?](http://stackoverflow.com/questions/12523435/how-do-i-ignore-folders-and-files-when-pushing-to-heroku-with-a-rails-app) — An answer about excluding files during deployment with functionality similar to `.gitignore`.
- Article: [Six Tips for Mastering your Procfile](https://medium.com/@adam_41691/six-tips-for-mastering-your-procfile-64ea1207b779) — Tips for improving how Heroku processes are run.
- Article: [Deploying Django to Heroku With Docker](https://testdriven.io/blog/deploying-django-to-heroku-with-docker/) — Explains how to deploy a Django app with Docker via the Heroku Container Runtime.

## Development <a id="-development"></a>

- Official: [Managing Multiple Environments for an App](https://devcenter.heroku.com/articles/multiple-environments) — An introduction to managing the different parts of each app environment.

## Domains <a id="-domains"></a>

- Article: [Configuring CloudFlare DNS for a Heroku app](http://www.higherorderheroku.com/articles/cloudflare-dns-heroku/) — A walkthrough of using CloudFlare as a DNS provider.
- Article: [Hosting multiple Heroku apps on a single domain](https://pilot.co/blog/hosting-multiple-heroku-apps-on-a-single-domain/) — Explains how multiple Heroku applications can share one domain.
- Question: [How do you host multiple Heroku apps on a single domain?](http://stackoverflow.com/questions/19119164/multiple-heroku-apps-on-a-single-domain) — A Stack Overflow question with several answers about serving multiple Heroku apps from different paths instead of subdomains.

## General <a id="-general"></a>

- Book: [The Heroku Hacker's Guide](http://www.theherokuhackersguide.com/) — An ebook covering the basics of maintaining and scaling a Heroku project.
- Book: [Heroku Cookbook](http://www.amazon.com/Heroku-Cookbook-Mike-Coutermarsh/dp/1782177949) — Step-by-step recipes for administering and scaling a production web application on Heroku.

## Meta <a id="-meta"></a>

- Official: [The big kickoff](https://blog.heroku.com/archives/2007/10/30/the_big_kickoff) — The first Heroku blog article.
- Article: [Heroku isn't for idiots](https://www.rdegges.com/2012/heroku-isnt-for-idiots/) — Explains Heroku's advantages and why it is suited to more than side projects.
- Article: [My Heroku values](https://brandur.org/heroku-values) — Lessons [Brandur Leach](https://twitter.com/brandur) drew from his time at Heroku when he left the company.
- Talk: [Buildpack Adventure](http://buildpack-adventure.herokuapp.com/) — Slides about Heroku buildpacks and what the open-source community is building with them.

## Postgres <a id="-postgres"></a>

Resources for [Heroku Postgres](https://www.heroku.com/postgres).

- Official: [Heroku Postgres](https://www.heroku.com/postgres) — A landing page explaining Heroku Postgres.
- Plugin: [heroku-buildpack-pgbouncer](https://github.com/heroku/heroku-buildpack-pgbouncer) — A buildpack that enables transaction pooling with [`stunnel`](https://www.stunnel.org/index.html) and [`pgbouncer`](https://wiki.postgresql.org/wiki/PgBouncer) to avoid connection limits.

## Redis <a id="-redis"></a>

[Heroku Redis](https://elements.heroku.com/addons/heroku-redis).

## Scaling <a id="-scaling"></a>

- Tool: [HireFire](https://www.hirefire.io/) — A SaaS tool that automatically scales Heroku dynos up or down according to load.

## Security <a id="-security"></a>

- Article: [Set up CloudFlare's free SSL on Heroku](https://robots.thoughtbot.com/set-up-cloudflare-free-ssl-on-heroku) — Steps for setting up free SSL via Cloudflare, as described in the fixed source.

## Toolbelt <a id="-toolbelt"></a>

Resources for [Heroku Toolbelt](https://toolbelt.heroku.com/).

- Official: [Toolbelt Download](https://toolbelt.heroku.com/) — The download page for Heroku Toolbelt.
- Plugin: [heroku-accounts](https://github.com/ddollar/heroku-accounts) — Work with multiple accounts at once from the command line.
- Plugin: [heroku-pg-extras](https://github.com/heroku/heroku-pg-extras) — A Toolbelt plugin for analyzing Postgres cache hit rates, outlier queries, unused indexes, table sizes, and more.

## Goodbye... <a id="-goodbye"></a>

- Tool: [dokku](http://dokku.viewdocs.io/dokku/) — A self-hosted, Docker-based, Heroku-compatible platform.
