---
title: "Awesome IAM"
description: "IAM protocols, access-control models, libraries, and tools, with resources on secrets, fraud, moderation, privacy, and account UX."
licenseSource: "github-kdeldycke-awesome-iam-readme-md"
---

# Awesome IAM

[Identity and Access Management (IAM)](https://en.wikipedia.org/wiki/Identity_management) covers user accounts, authentication, authorization, roles, permissions, and privacy. This list includes protocols, access-control models, libraries, and tools, alongside resources on secret management, fraud, moderation, privacy, and account UX. For the related cloud-stack topic of billing and payments, see [Awesome Billing](https://github.com/kdeldycke/awesome-billing/).

The labels follow the original list: “Open source” indicates projects without features gated behind a commercial vendor's paid product; paid support alone does not change this label. “Commercial vendor” indicates a maintainer selling a paid version, Enterprise tier, or proprietary modules, and can also apply to free datasets associated with a commercial platform. These labels do not imply that every use is free or paid.

## Overview

The [Stanford overview of cloud computing](https://web.stanford.edu/class/cs349d/docs/L01_overview.pdf) presents the cloud platform as a software stack. In the [diagram reproduced by the source list](https://github.com/kdeldycke/awesome-iam/blob/ede0dca67cb280f4ddb3ec8f6e8ebb1e3d166cb4/assets/cloud-software-stack-iam.jpg), security, including IAM, spans the stack alongside metering and billing. Coordination supports the lower layers; distributed storage and resource management sit below the application, service, and analytics components. The diagram contains the following components and examples.

| Component | Examples in the source diagram |
| --- | --- |
| Web server | Java, PHP, JS |
| Analytics UIs | Hive, Pig, HiPal |
| Cache | memcached, TAO |
| Other services | Model serving, search, Unicorn, Druid |
| Analytics engines | MapReduce, Dryad, Pregel, Spark |
| Operational stores | SQL, Spanner, Dynamo, Cassandra, BigTable |
| Message bus | Kafka, Kinesis |
| Metadata | Hive, AWS Catalog |
| Distributed storage | Amazon S3, GFS, Hadoop FS |
| Resource manager | EC2, Borg, Mesos, Kubernetes |
| Coordination | Chubby, ZK |
| Metering and billing | Cross-cutting function |
| Security | Cross-cutting function, including IAM; highlighted as this list's focus |

The resources below introduce IAM's definition, strategic importance, place in the broader ecosystem, and key features.

- [The EnterpriseReady SaaS Feature Guides](https://www.enterpriseready.io) - SaaS feature guides; the source places the majority of the features valued by B2B users within the IAM domain.

- [IAM is hard. It's really hard.](https://web.archive.org/web/20200809095434/https://twitter.com/kmcquade3/status/1291801858676228098) - The cited post attributes an \$80 million fine for Capital One to overly permissive AWS IAM policies allowing `s3:GetObject` on `*` (all) resources, illustrating the business consequences of excessive permissions.

- [IAM Is The Real Cloud Lock-In](https://forrestbrazeal.com/2019/02/18/cloud-irregular-iam-is-the-real-cloud-lock-in/) - Discusses IAM lock-in in terms of trust that a provider will stay in business, avoid raising prices or withdrawing services, and provide more business-acceleration value than the flexibility it takes away.

## Security

Security is a central pillar of IAM. These resources introduce broad security concepts.

- [Enterprise Information Security](https://infosec.mozilla.org) - Mozilla's security and access guidelines.

- [Mitigating Cloud Vulnerabilities](https://web.archive.org/web/20250529050934/https://media.defense.gov/2020/Jan/22/2002237484/-1/-1/0/CSI-MITIGATING-CLOUD-VULNERABILITIES_20200121.PDF) - “This document divides cloud vulnerabilities into four classes (misconfiguration, poor access control, shared tenancy vulnerabilities, and supply chain vulnerabilities)”.

- [Cartography](https://github.com/lyft/cartography) - Open source. A Neo4J-based tool to map out dependencies and relationships between services and resources. Supports AWS, GCP, GSuite, Okta and GitHub.

- [Open guide to AWS Security and IAM](https://github.com/open-guides/og-aws#security-and-iam)

## Account Management

The foundation of IAM: the definition and life-cycle of users, groups, roles and permissions.

- [As a user, I want…](https://mobile.twitter.com/oktopushup/status/1030457418206068736) - A critique of account management, in which features expected by the business clash with real user needs, in the form of user stories written by a fictional project manager.

- [Things end users care about but programmers don't](https://instadeq.com/blog/posts/things-end-users-care-about-but-programmers-dont/) - Features developers can overlook but users value, including account management, integrations, and import/export tools that enterprise customers need.

- [Separate the account, user and login/auth details](https://news.ycombinator.com/item?id=21151830) - Advice on separating these concepts when designing an IAM API that can accommodate future changes.

- [Identity Beyond Usernames](https://lord.io/blog/2020/usernames/) - On the concept of usernames as identifiers, and the complexities introduced when Unicode characters meet uniqueness requirements.

- [Kratos](https://github.com/ory/kratos) - Commercial vendor. User login, user registration, 2FA and profile management.

- [UserFrosting](https://github.com/userfrosting/UserFrosting) - Open source. Modern PHP user login and management framework.

## Cryptography

Cryptographic primitives underpin the authentication stack. These resources cover concepts, practical recommendations, and foundational papers.

- [Cryptographic Right Answers](https://latacora.micro.blog/2018/04/03/cryptographic-right-answers.html) - Recommendations published in 2018 for developers who are not cryptography engineers. A [shorter summary](https://news.ycombinator.com/item?id=16749140) is also available.

- [Real World Crypto Symposium](https://web.archive.org/web/20260428040052/https://rwc.iacr.org/) - Aims to bring together cryptography researchers with developers, focusing on uses in real-world environments such as the Internet, the cloud, and embedded devices.

- [An Overview of Cryptography](https://www.garykessler.net/library/crypto.html) - “This paper has two major purposes. The first is to define some of the terms and concepts behind basic cryptographic methods, and to offer a way to compare the myriad cryptographic schemes in use today. The second is to provide some real examples of cryptography in use today.”

- [Papers we love: Cryptography](https://github.com/papers-we-love/papers-we-love/blob/master/cryptography/README.md) - Foundational papers of cryptography.

- [Lifetimes of cryptographic hash functions](http://valerieaurora.org/hash.html) - “If you are using compare-by-hash to generate addresses for data that can be supplied by malicious users, you should have a plan to migrate to a new hash every few years”.

### Identifiers

Tokens, primary keys, UUIDs, … Whatever the end use, you'll have to generate these numbers with some randomness and uniqueness properties.

- [Security Recommendations for Any Device that Depends on Randomly-Generated Numbers](https://www.av8n.com/computer/htm/secure-random.htm) - “The phrase 'random number generator' should be parsed as follows: It is a random generator of numbers. It is not a generator of random numbers.”

- [RFC #4122: UUID - Security Considerations](https://www.rfc-editor.org/rfc/rfc4122#section-6) - “Do not assume that UUIDs are hard to guess; they should not be used as security capabilities (identifiers whose mere possession grants access)”. UUIDs are designed to be unique, not to be random or unpredictable: do not use UUIDs as a secret.

- [Awesome Identifiers](https://adileo.github.io/awesome-identifiers/) - A benchmark of all identifier formats.

- [Awesome GUID](https://github.com/secretGeek/AwesomeGUID) - Funny take on the global aspect of unique identifiers.

## Zero-trust Network

Zero trust network security operates under the principle “never trust, always verify”.

- [BeyondCorp: A New Approach to Enterprise Security](https://www.usenix.org/system/files/login/articles/login_dec14_02_ward.pdf) - Quick overview of Google's Zero-trust Network initiative.

- [What is BeyondCorp? What is Identity-Aware Proxy?](https://web.archive.org/web/20251205052156/https://medium.com/google-cloud/what-is-beyondcorp-what-is-identity-aware-proxy-de525d9b3f90) - Discusses an alternative to accumulating VPN, firewall, and other restrictions that can worsen user experience while offering limited security gains.

- [oathkeeper](https://github.com/ory/oathkeeper) - Commercial vendor. Identity & Access Proxy and Access Control Decision API that authenticates, authorizes, and mutates incoming HTTP requests. Inspired by the BeyondCorp / Zero Trust white paper.

- [Pomerium](https://github.com/pomerium/pomerium) - Commercial vendor. An identity-aware proxy that enables secure access to internal applications.

- [heimdall](https://github.com/dadrus/heimdall) - Open source. A cloud-native, identity-aware proxy and policy enforcement point that orchestrates authentication and authorization systems via versatile rules, supporting protocol-agnostic identity propagation.

## Machine Identity

Workloads, services and devices are principals too. They need identities to authenticate to one another and be granted access: the non-human counterpart to human user accounts.

- [SPIFFE/SPIRE](https://github.com/spiffe/spire) - Open source. A CNCF framework issuing short-lived, cryptographically-verifiable identities (SVIDs) to workloads across heterogeneous environments.

- [NanoMDM](https://github.com/micromdm/nanomdm) - Open source. Minimalist Apple MDM server and library to enroll and manage the identity of Apple devices, inspired by MicroMDM.

## Authentication

Protocols and technologies for verifying a claimed identity.

- [API Tokens: A Tedious Survey](https://fly.io/blog/api-tokens-a-tedious-survey/) - An overview and comparison of all token-based authentication schemes for end-user APIs.

- [A Child's Garden of Inter-Service Authentication Schemes](https://web.archive.org/web/20200507173734/https://latacora.micro.blog/a-childs-garden/) - A comparison of authentication schemes at the service level.

- [Scaling backend authentication at Facebook](https://www.youtube.com/watch?v=kY-Bkv3qxMc) - How-to in a nutshell: 1. Small root of trust; 2. TLS isn't enough; 3. Certificate-based tokens; 4. Crypto Auth Tokens (CATs). See the [slides](https://web.archive.org/web/20260306052223/https://rwc.iacr.org/2018/Slides/Lewi.pdf) for more details.

## Password-based auth

Resources on password-based authentication, password storage, policies, and migration.

- [The new NIST password guidance](https://pciguru.wordpress.com/2019/03/11/the-new-nist-password-guidance/) - A 2019 article summarizing password-complexity guidance in [NIST Special Publication 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html).

- [Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) - The source recommends carefully choosing password-hashing algorithms that are as resource-intensive as possible to slow offline attacks.

- [Password expiration is dead](https://techcrunch.com/2019/06/02/password-expiration-is-dead-long-live-your-passwords/) - A 2019 article on research questioning practices such as password-expiration policies and advocating alternatives including banned-password lists and MFA.

- [Practical Recommendations for Stronger, More Usable Passwords](http://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf) - A study recommending a combination of checks against commonly leaked passwords, policies without character-class requirements, and minimum-strength requirements.

- [Banks, Arbitrary Password Restrictions and Why They Don't Matter](https://www.troyhunt.com/banks-arbitrary-password-restrictions-and-why-they-dont-matter/) - “Arbitrary low limits on length and character composition are bad. They look bad, they lead to negative speculation about security posture and they break tools like password managers.”

- [Dumb Password Rules](https://github.com/dumb-password-rules/dumb-password-rules) - Open source. Shaming sites with dumb password rules.

- [Password Manager Resources](https://github.com/apple/password-manager-resources) - Open source. A collection of password rules, change URLs and quirks by sites.

- [A Well-Known URL for Changing Passwords](https://github.com/WICG/change-password-url) - Open source. Specification defining site resource for password updates.

- [How to change the hashing scheme of already hashed user's passwords](https://news.ycombinator.com/item?id=20109360) - A technique for transparently upgrading stored passwords from a legacy hashing scheme to a stronger algorithm.

## Multi-factor auth

Building upon password-only auth, users are requested in these schemes to present two or more pieces of evidence (or factors).

- [Breaking Password Dependencies: Challenges in the Final Mile at Microsoft](https://www.youtube.com/watch?v=B_mhJO2qHlQ) - The talk identifies password spraying against legacy authentication such as SMTP, IMAP, and POP as the leading cause of account compromises, followed by replay attacks. It argues that passwords are insecure and recommends using and enforcing MFA.

- [Beyond Passwords: 2FA, U2F and Google Advanced Protection](https://www.troyhunt.com/beyond-passwords-2fa-u2f-and-google-advanced-protection/) - A walkthrough of these technologies.

- [A Comparative Long-Term Study of Fallback Authentication](https://maximiliangolla.com/files/2019/papers/usec2019-30-wip-fallback-long-term-study-finalv5.pdf) - Key take-away: “schemes based on email and SMS are more usable. Mechanisms based on designated trustees and personal knowledge questions, on the other hand, fall short, both in terms of convenience and efficiency.”

- [Secrets, Lies, and Account Recovery: Lessons from the Use of Personal Knowledge Questions at Google](https://static.googleusercontent.com/media/research.google.com/en/us/pubs/archive/43783.pdf) - “Our analysis confirms that secret questions generally offer a security level that is far lower than user-chosen passwords. (…) Surprisingly, we found that a significant cause of this insecurity is that users often don't answer truthfully. (…) On the usability side, we show that secret answers have surprisingly poor memorability”.

- [How effective is basic account hygiene at preventing hijacking](https://security.googleblog.com/2019/05/new-research-how-effective-is-basic.html) - Google's 2019 security research reported that 2FA blocked 100% of automated bot attacks in the studied data.

- [Your Pa\$\$word doesn't matter](https://techcommunity.microsoft.com/t5/Azure-Active-Directory-Identity/Your-Pa-word-doesn-t-matter/ba-p/731984) - Microsoft reports a similar conclusion from its studies: “Based on our studies, your account is more than 99.9% less likely to be compromised if you use MFA.”

- [Attacking Google Authenticator](https://unix-ninja.com/p/attacking_google_authenticator) - An attack discussion that illustrates a reason to rate-limit 2FA validation attempts.

- [Compromising online accounts by cracking voicemail systems](https://www.martinvigo.com/voicemailcracker/) - Warns against automated phone calls for contacting users to reset passwords or 2FA, or perform other verification. Like SMS-based 2FA, the article describes this method as vulnerable through its weakest link: voicemail systems.

- [Getting 2FA Right in 2019](https://blog.trailofbits.com/2019/06/20/getting-2fa-right-in-2019/) - On the UX aspects of 2FA.

- [2FA is missing a key feature](https://syslog.ravelin.com/2fa-is-missing-a-key-feature-c781c3861db) - “When my 2FA code is entered incorrectly I'd like to know about it”.

- [SMS Multifactor Authentication in Antarctica](https://brr.fyi/posts/sms-mfa) - An account of SMS MFA failing at Antarctic stations without cellphone towers.

- [Authelia](https://github.com/authelia/authelia) - Open source. Open-source authentication and authorization server providing two-factor authentication and single sign-on (SSO) for your applications via a web portal.

- [Kanidm](https://github.com/kanidm/kanidm) - Open source. An identity-management platform described by the source as simple, secure, and fast.

### SMS-based

The source warns against relying on SMS-based authentication. The resources below discuss its risks.

- [SMS 2FA auth is deprecated by NIST](https://techcrunch.com/2016/07/25/nist-declares-the-age-of-sms-based-2-factor-authentication-over/) - A 2016 report describing NIST concerns about SMS-based two-factor authentication.

- [SMS: The most popular and least secure 2FA method](https://www.allthingsauth.com/2018/02/27/sms-the-most-popular-and-least-secure-2fa-method/)

- [Is SMS 2FA Secure? No.](https://www.issms2fasecure.com) - A research project demonstrating successful SIM-swapping attempts.

- [Hackers Hit Twitter C.E.O. Jack Dorsey in a 'SIM Swap.' You're at Risk, Too.](https://archive.ph/AhNAI)

- [AT&T rep handed control of his cellphone account to a hacker](https://www.theregister.com/2017/07/10/att_falls_for_hacker_tricks/)

## Password-less auth

- [An argument for passwordless](https://web.archive.org/web/20190515230752/https://biarity.gitlab.io/2018/02/23/passwordless/) - Passwords are not the be-all and end-all of user authentication. This article tries to tell you why.

- [Magic Links – Are they Actually Outdated?](https://zitadel.com/blog/magic-links) - What are magic links, their origin, pros and cons.

### WebAuthn

WebAuthn is part of the [FIDO2 project](https://en.wikipedia.org/wiki/FIDO_Alliance#FIDO2) and provides the web API used for passkey authentication.

- [WebAuthn guide](https://webauthn.guide) - The guide describes WebAuthn as a standard supported by all major browsers for registering and authenticating users with public-key cryptography instead of passwords.

- [Clearing up some misconceptions about Passkeys](https://www.stavros.io/posts/clearing-up-some-passkeys-misconceptions/) - An argument that passkeys are not worse than passwords.

### Security key

- [Webauthn and security keys](https://www.imperialviolet.org/2018/03/27/webauthn.html) - Describes how authentication works with security keys, details the protocols, and how they relate to WebAuthn. Key takeaway: “There is no way to create a U2F key with webauthn however. (…) So complete the transition to webauthn of your login process first, then transition registration.”

- [Getting started with security keys](https://web.archive.org/web/20260401133706/https://paulstamatiou.com/getting-started-with-security-keys/) - A practical guide to stay safe online and prevent phishing with FIDO2, WebAuthn and security keys.

- [OpenSK](https://github.com/google/OpenSK) - Open source. Open-source implementation for security keys written in Rust that supports both FIDO U2F and FIDO2 standards.

- [YubiKey Guide](https://github.com/drduh/YubiKey-Guide) - Guide to using YubiKey as a SmartCard for storing GPG encryption, signing and authentication keys, which can also be used for SSH. Many of the principles in this document are applicable to other smart card devices.

### Public-Key Infrastructure (PKI)

Certificate-based authentication.

- [PKI for busy people](https://gist.github.com/hoffa/5a939fd0f3bcd2a6a0e4754cb2cf3f1b) - A short overview of key PKI concepts.

- [Everything you should know about certificates and PKI but are too afraid to ask](https://smallstep.com/blog/everything-pki.html) - PKI lets you define a system cryptographically. It's universal and vendor neutral.

- [`lemur`](https://github.com/Netflix/lemur) - Open source. Acts as a broker between CAs and environments, providing a central portal for developers to issue TLS certificates with 'sane' defaults.

- [CFSSL](https://github.com/cloudflare/cfssl) - Open source. A PKI/TLS toolkit by Cloudflare. Command line tool and an HTTP API server for signing, verifying, and bundling TLS certificates.

- [JA4+](https://github.com/FoxIO-LLC/ja4) - Commercial vendor. A suite of network fingerprinting methods to facilitate threat-hunting and analysis.

### JWT

The source discusses [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) as a bearer token.

- [Introduction to JSON Web Tokens](https://jwt.io/introduction/) - Get up to speed on JWT with this article.

- [Learn how to use JWT for Authentication](https://github.com/dwyl/learn-json-web-tokens) - Learn how to use JWT to secure your web app.

- [Using JSON Web Tokens as API Keys](https://auth0.com/blog/using-json-web-tokens-as-api-keys/) - Compares JWTs with API keys in terms of granular security, a homogeneous authentication architecture, decentralized issuance, OAuth2 compliance, debugging, expiration control, and device management.

- [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://web.archive.org/web/2021/https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/) - A review of common JWT implementation pitfalls.

- [Adding JSON Web Token API Keys to a DenyList](https://auth0.com/blog/denylist-json-web-token-api-keys/) - On token invalidation.

- [Stop using JWT for sessions](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/) - And [why your "solution" doesn't work](http://cryto.net/%7Ejoepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/), because [stateless JWT tokens cannot be invalidated or updated](https://news.ycombinator.com/item?id=18354141). They will introduce either size issues or security issues depending on where you store them. Stateful JWT tokens are functionally the same as session cookies, but without the battle-tested and well-reviewed implementations or client support.

- [JWT, JWS and JWE for Not So Dummies!](https://web.archive.org/web/20221112173931/https://medium.facilelogin.com/jwt-jws-and-jwe-for-not-so-dummies-b63310d201a3) - Explains how JWT claims are represented using JWS (JSON Web Signature) for signatures or integrity protection and JWE (JSON Web Encryption) for encryption, using an abstract-class/concrete-implementation analogy.

- [JOSE is a Bad Standard That Everyone Should Avoid](https://paragonie.com/blog/2017/03/jwt-json-web-tokens-is-bad-standard-that-everyone-should-avoid) - A critique arguing that JOSE standards are broken or difficult to use safely because of their complexity.

- [JWT.io](https://jwt.io) - Allows you to decode, verify and generate JWT.

## Authorization

Authentication establishes identity; authorization determines which actions that identity may perform. Policy specification provides the rules, while enforcement requires practical implementation decisions.

### Policy models

Access-control policies follow different models, from [access-control lists](https://en.wikipedia.org/wiki/Access-control_list) to role-based access control. These resources explore policy patterns and architectures.

- [Why Authorization is Hard](https://www.osohq.com/post/why-authorization-is-hard) - Discusses tradeoffs in enforcement across many locations, decision architectures that separate business and authorization logic, and models that balance expressive power with complexity.

- [The never-ending product requirements of user authorization](https://alexolivier.me/posts/the-never-ending-product-requirements-of-user-authorization) - How a simple authorization model based on roles is not enough and gets complicated fast due to product packaging, data locality, enterprise organizations and compliance.

- [RBAC like it was meant to be](https://tailscale.com/blog/rbac-like-it-was-meant-to-be/) - Traces DAC, MAC, and RBAC, discussing examples including Unix permissions, secret URLs, DRM, MFA, 2FA, and SELinux. The article argues that RBAC better models policies, ACLs, users, and groups.

- [The Case for Granular Permissions](https://cerbos.dev/blog/the-case-for-granular-permissions) - Discusses the limitations of RBAC and how ABAC (Attribute-Based Access Control) addresses them.

- [In Search For a Perfect Access Control System](https://web.archive.org/web/20240421203937/https://goteleport.com/blog/access-controls/) - The historical origins of authorization schemes. Hints at the future of sharing, trust and delegation between different teams and organizations.

- [GCP's IAM syntax is better than AWS's](https://web.archive.org/web/20251208231427/https://ucarion.com/iam-operation-syntax) - An argument that details of permission design in GCP improve the developer experience.

- [Semantic-based Automated Reasoning for AWS Access Policies using SMT](https://d1.awsstatic.com/Security/pdfs/Semantic_Based_Automated_Reasoning_for_AWS_Access_Policies_Using_SMT.pdf) - Zelkova is how AWS does it. This system performs symbolic analysis of IAM policies to determine resource reachability given users' rights and access constraints. Also see the higher-level [introduction given at re:inforce 2019](https://youtu.be/x6wsTFnU3eY?t=2111).

- [Authorization Academy](https://www.osohq.com/academy) - An in-depth, vendor-agnostic treatment of authorization that emphasizes mental models. This guide shows the reader how to think about their authorization needs in order to make good decisions about their authorization architecture and model.

### RBAC frameworks

[Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) maps users to permissions through roles.

- [Athenz](https://github.com/yahoo/athenz) - Open source. Set of services and libraries supporting service authentication and role-based authorization for provisioning.

- [Biscuit](https://www.clever-cloud.com/blog/engineering/2021/04/12/introduction-to-biscuit/) - Combines concepts from cookies, JWTs, macaroons, and Open Policy Agent. Its Datalog-based language expresses authorization policies, stores data like JWTs or small conditions like macaroons, and supports more complex rules such as role-based access control, delegation, and hierarchies.

- [Cerbos](https://github.com/cerbos/cerbos) - Commercial vendor. An authorization endpoint to write context-aware access control policies.

- [FerrisKey](https://github.com/ferriskey/ferriskey) - Open source. Self-hosted, open-source, RBAC system written in Rust.

### ABAC frameworks

[Attribute-Based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control) uses attributes rather than roles to support more complex policy-based access control.

- [Keto](https://github.com/ory/keto) - Commercial vendor. Policy decision point. It uses a set of access control policies, similar to AWS policies, in order to determine whether a subject is authorized to perform a certain action on a resource.

- [Ladon](https://github.com/ory/ladon) - Commercial vendor. Access control library, inspired by AWS.

- [Casbin](https://github.com/casbin/casbin) - Open source. Open-source access control library for Golang projects.

- [Open Policy Agent](https://github.com/open-policy-agent/opa) - Open source. An open-source general-purpose decision engine to create and enforce ABAC policies.

### ReBAC frameworks

The source describes [Relationship-Based Access Control](https://en.wikipedia.org/wiki/Relationship-based_access_control) as a more flexible and powerful alternative to RBAC for cloud systems.

- [Zanzibar: Google's Consistent, Global Authorization System](https://web.archive.org/web/20191207160155/https://ai.google/research/pubs/pub48190) - The paper reports a system scaling to trillions of access-control lists and millions of authorization requests per second for services used by billions of people. Across 3 years in production, it maintained 95th-percentile latency below 10 milliseconds and availability above 99.999%. See [details not in the paper](https://nitter.tiekoetter.com/LeaKissner/status/1136626971566149633) and [Zanzibar Academy](https://zanzibar.academy/), which explains its design.

- [SpiceDB](https://github.com/authzed/spicedb) - Commercial vendor. An open source database system for managing security-critical application permissions inspired by Zanzibar.

- [Permify](https://github.com/Permify/permify) - Commercial vendor. Open-source authorization as a service inspired by Google Zanzibar. See [a comparison with other Zanzibar-inspired tools](https://permify.notion.site/Differentiation-Between-Zanzibar-Products-ad4732da62e64655bc82d3abe25f48b6).

- [Topaz](https://github.com/aserto-dev/topaz) - Commercial vendor. An open-source project which combines the policy-as-code and decision logging of OPA with a Zanzibar-modeled directory.

- [Open Policy Administration Layer](https://github.com/permitio/opal) - Commercial vendor. An open-source administration layer for OPA that detects policy and policy-data changes in real time and pushes updates to OPA agents for live applications.

### AWS policy tools

Tools and resources exclusively targeting the [AWS IAM policies](http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html) ecosystem.

- [An AWS IAM Security Tooling Reference](https://ramimac.me/aws-iam-tools-2024) - A 2024 reference list of maintained AWS IAM tools.

- [Become an AWS IAM Policy Ninja](https://www.youtube.com/watch?v=y7-fAT3z8Lo) - “In my nearly 5 years at Amazon, I carve out a little time each day, each week to look through the forums, customer tickets to try to find out where people are having trouble.”

- [AWS IAM Roles, a tale of unnecessary complexity](https://infosec.rodeo/posts/thoughts-on-aws-iam/) - The history of fast-growing AWS explains how the current scheme came to be, and how it compares to GCP's resource hierarchy.

- [Policy Sentry](https://github.com/salesforce/policy_sentry) - Open source. Helps generate least-privilege IAM policies, reducing tedious manual work; the source describes policy creation as taking seconds.

- [IAM Floyd](https://github.com/udondan/iam-floyd) - Open source. An AWS IAM policy-statement generator with a fluent interface. Supports type-safe policies and more restrictive statements through conditions and ARN generation via IntelliSense. Available for Node.js, Python, .NET, and Java.

- [IAMbic](https://github.com/noqdev/iambic) - Commercial vendor. A multi-cloud IAM control plane for centralizing cloud access and permissions using GitOps, likened to Terraform for cloud IAM. Maintains an eventually consistent, human-readable, bidirectional representation of IAM in version control.

### Macaroons

Resources on distributing and delegating authorization with macaroons.

- [Google's Macaroons in Five Minutes or Less](https://web.archive.org/web/20240521142227/https://blog.bren2010.io/blog/googles-macaroons) - If I'm given a Macaroon that authorizes me to perform some action(s) under certain restrictions, I can non-interactively build a second Macaroon with stricter restrictions that I can then give to you.

- [Macaroons: Cookies with Contextual Caveats for Decentralized Authorization in the Cloud](https://web.archive.org/web/20191009113323/https://ai.google/research/pubs/pub41892) - Google's original paper.

- [Google paper's author compares Macaroons and JWTs](https://news.ycombinator.com/item?id=14294463) - As a consumer/verifier of macaroons, they allow you (through third-party caveats) to defer some authorization decisions to someone else. JWTs don't.

### Other tools

- [Gubernator](https://github.com/gubernator-io/gubernator) - Open source. High performance rate-limiting micro-service and library.

## OAuth2 & OpenID

[OAuth 2.0](https://en.wikipedia.org/wiki/OAuth#OAuth_2.0) is a *delegated authorization* framework. [OpenID Connect (OIDC)](https://en.wikipedia.org/wiki/OpenID_Connect) is an *authentication* layer on top of it.

The source distinguishes the older OpenID protocol from the actively used OpenID Connect.

- [Descope](https://www.descope.com/?utm_source=awesome-iam&utm_medium=referral&utm_campaign=awesome-iam-oss-sponsorship) - Drag-and-drop tooling for adding authentication, user management, and authorization to an application with a few lines of code.

- [Awesome OpenID Connect](https://github.com/cerberauth/awesome-openid-connect) - A curated list of providers, services, libraries, and resources for OpenID Connect.

- [An Illustrated Guide to OAuth and OpenID Connect](https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc) - Explains how these standards work using simplified illustrations.

- [OAuth 2 Simplified](https://aaronparecki.com/oauth-2-simplified/) - A reference article describing the protocol in simplified format to help developers and service providers implement it.

- [OAuth 2.0 and OpenID Connect (in plain English)](https://www.youtube.com/watch?v=996OiexHze0) - Explains the historical development of these standards, clarifies terminology, and describes their protocols and pitfalls.

- [OAuth in one picture](https://mobile.twitter.com/kamranahmedse/status/1276994010423361540) - An OAuth summary card.

- [How to Implement a Secure Central Authentication Service in Six Steps](https://shopify.engineering/implement-secure-central-authentication-service-six-steps) - An OIDC approach to merging legacy systems with separate login methods and accounts.

- [Open-Sourcing BuzzFeed's SSO Experience](https://increment.com/security/open-sourcing-buzzfeeds-single-sign-on-process/) - An OAuth2-friendly adaptation of the Central Authentication Service (CAS) protocol, with OAuth user-flow diagrams.

- [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) - “Updates and extends the OAuth 2.0 Security Threat Model to incorporate practical experiences gathered since OAuth 2.0 was published and covers new threats relevant due to the broader application”.

- [Hidden OAuth attack vectors](https://portswigger.net/web-security/oauth) - How to identify and exploit some of the key vulnerabilities found in OAuth 2.0 authentication mechanisms.

- [PKCE Explained](https://www.loginradius.com/blog/engineering/pkce/) - “PKCE is used to provide one more security layer to the authorization code flow in OAuth and OpenID Connect.”

- [Hydra](https://github.com/ory/hydra) - Commercial vendor. Open-source OIDC & OAuth2 Server Provider.

- [Keycloak](https://github.com/keycloak/keycloak) - Open source. Open-source Identity and Access Management. Supports OIDC, OAuth 2 and SAML 2, LDAP and AD directories, password policies.

- [Casdoor](https://github.com/casbin/casdoor) - Open source. A UI-first centralized authentication and single-sign-on (SSO) platform supporting OIDC, OAuth 2, social logins, user management, and email- or SMS-based 2FA.

- [authentik](https://github.com/goauthentik/authentik) - Commercial vendor. Open-source Identity Provider similar to Keycloak.

- [ZITADEL](https://github.com/zitadel/zitadel) - Commercial vendor. An open-source solution built with Go and Angular for managing systems, users, service accounts, roles, and external identities. Provides OIDC, OAuth 2.0, login and registration flows, passwordless authentication, and MFA. Combines event sourcing with CQRS to provide an audit trail.

- [obligator](https://github.com/lastlogin-net/obligator) - Open source. Simple and opinionated OpenID Connect server designed for self-hosters. Single static binary with flat-file or SQLite storage.

## SAML

Security Assertion Markup Language (SAML) 2.0 is a means to exchange authorization and authentication between services, like OAuth/OpenID protocols above.

The source contrasts institutional and corporate SSO as typical SAML identity providers with technology companies operating data silos as typical OIDC/OAuth providers.

- [SAML vs. OAuth](https://web.archive.org/web/20230327071347/https://www.cloudflare.com/learning/access-management/what-is-oauth/) - “OAuth is a protocol for authorization: it ensures Bob goes to the right parking lot. In contrast, SAML is a protocol for authentication, or allowing Bob to get past the guardhouse.”

- [The Difference Between SAML 2.0 and OAuth 2.0](https://www.ubisecure.com/uncategorized/difference-between-saml-and-oauth/) - “Even though SAML was actually designed to be widely applicable, its contemporary usage is typically shifted towards enterprise SSO scenarios. On the other hand, OAuth was designed for use with applications on the Internet, especially for delegated authorisation.”

- [What's the Difference Between OAuth, OpenID Connect, and SAML?](https://www.okta.com/identity-101/whats-the-difference-between-oauth-openid-connect-and-saml/) - A comparison that helps explain the roles of these identity protocols.

- [The Beer Drinker's Guide to SAML](https://duo.com/blog/the-beer-drinkers-guide-to-saml) - An analogy for explaining SAML.

- [SAML is insecure by design](https://joonas.fi/2021/08/saml-is-insecure-by-design/) - A critique arguing that reliance on signatures over canonicalized XML rather than the XML byte stream allows differences between XML parsers and encoders to be exploited.

- [The Difficulties of SAML Single Logout](https://shibboleth.atlassian.net/wiki/spaces/CONCEPT/pages/928645229/SLOIssues) - On the technical and UX issues of single logout implementations.

- [The SSO Wall of Shame](https://sso.tax) - A documented critique of SaaS pricing that gates SSO behind exclusive tiers. The author argues that SSO is a core security feature and should be reasonably priced.

## Secret Management

Architectures, software, and hardware for storing and using authentication and authorization secrets while maintaining a chain of trust.

- [Secret at Scale at Netflix](https://www.youtube.com/watch?v=K0EOPddWpsE) - Solution based on blind signatures. See the [slides](https://web.archive.org/web/20251203022343/https://rwc.iacr.org/2018/Slides/Mehta.pdf).

- [High Availability in Google's Internal KMS](https://www.youtube.com/watch?v=5T_c-lqgjso) - Not GCP's KMS, but the one at the core of their infrastructure. See the [slides](https://web.archive.org/web/20251203022343/https://rwc.iacr.org/2018/Slides/Kanagala.pdf).

- [HashiCorp Vault](https://github.com/hashicorp/vault) - Commercial vendor. Stores tokens, passwords, certificates, and encryption keys while tightly controlling access.

- [Infisical](https://github.com/Infisical/infisical) - Commercial vendor. An alternative to HashiCorp Vault.

- [`sops`](https://github.com/mozilla/sops) - Open source. Editor of encrypted files that supports YAML, JSON, ENV, INI and BINARY formats and encrypts with AWS KMS, GCP KMS, Azure Key Vault, age, and PGP.

- [`gitleaks`](https://github.com/zricethezav/gitleaks) - Open source. Audits Git repositories for secrets.

- [`trufflehog`](https://github.com/trufflesecurity/trufflehog) - Commercial vendor. Searches through Git repositories for high entropy strings and secrets, digging deep into commit history.

### Hardware Security Module (HSM)

HSMs are physical devices that protect secret management at the hardware level.

- [HSM: What they are and why it's likely that you've (indirectly) used one today](https://web.archive.org/web/20260404010649/https://rwc.iacr.org/2015/Slides/RWC-2015-Hampton.pdf) - An introductory overview of HSM uses.

- [Tidbits on AWS Cloud HSM hardware](https://news.ycombinator.com/item?id=16759383) - A discussion describing AWS CloudHSM Classic as backed by SafeNet Luna HSMs and the then-current CloudHSM as using Cavium Nitrox, enabling partitionable “virtual HSMs”.

- [Keystone](https://github.com/keystone-enclave/keystone) - Open source. Open-source project for building trusted execution environments (TEE) with secure hardware enclaves, based on the RISC-V architecture.

- [Project Oak](https://github.com/project-oak/oak) - Open source. A specification and a reference implementation for the secure transfer, storage and processing of data.

- [Everybody be cool, this is a robbery!](https://www.sstic.org/2019/presentation/hsm/) - A French-language case study of an HSM vulnerability and its exploitation.

## Trust & Safety

A substantial user base forms a community. Trust and safety work protects customers, other people, the company, and its business while facilitating interactions and transactions.

Trust and safety operates under policies and local legal constraints, often through a cross-functional team working around the clock with moderation and administration tools. It extends customer support to cases such as manual identity checks, harmful-content moderation, harassment prevention, warrants and copyright claims, data sequestration, and credit-card disputes.

- [Trust and safety 101](https://www.csoonline.com/article/3206127/trust-and-safety-101.html) - An introduction to trust and safety and its responsibilities.

- [What the Heck is Trust and Safety?](https://www.linkedin.com/pulse/what-heck-trust-safety-kenny-shi) - Examples of real use cases to demonstrate the role of a TnS team.

- [Awesome List of Billing and Payments: Fraud links](https://github.com/kdeldycke/awesome-billing#fraud) - Section dedicated to fraud management for billing and payment, from a related list.

### User Identity

The source argues that most businesses collect identity to record contractual relationships under local [Know Your Customer (KYC)](https://en.wikipedia.org/wiki/Know_your_customer) requirements, rather than to create profiles for sale to third parties.

- [The Laws of Identity](https://www.identityblog.com/stories/2005/05/13/TheLawsOfIdentity.pdf) - Although this paper addresses an identity metasystem, its laws also provide insights at smaller scales, especially the first law: to always allow user control and ask for consent to earn trust.

- [How Uber Got Lost](https://archive.ph/hvjKl) - “To limit "friction" Uber allowed riders to sign up without requiring them to provide identity beyond an email — easily faked — or a phone number. (…) Vehicles were stolen and burned; drivers were assaulted, robbed and occasionally murdered. The company stuck with the low-friction sign-up system, even as violence increased.”

- [A Comparison of Personal Name Matching: Techniques and Practical Issues](http://users.cecs.anu.edu.au/~Peter.Christen/publications/tr-cs-06-02.pdf) - Customer name matching has many applications, from account deduplication to fraud monitoring.

- [Statistically Likely Usernames](https://github.com/insidetrust/statistically-likely-usernames) - Open source. Wordlists for creating statistically likely usernames for use in username-enumeration, simulated password-attacks and other security testing tasks.

- [Facebook Dangerous Individuals and Organizations List](https://theintercept.com/document/facebook-dangerous-individuals-and-organizations-list-reproduced-snapshot/) - Some groups and content are illegal in some jurisdictions. This is an example of a blocklist.

- [Ballerine](https://github.com/ballerine-io/ballerine) - Commercial vendor. An open-source infrastructure for user identity and risk management.

- [Sherlock](https://github.com/sherlock-project/sherlock) - Open source. Hunt down social media accounts by username across social networks.

### Fraud

Online service providers face fraud, crime, and abuse. Workflow bugs or inconsistencies can be exploited for financial gain.

- [After Car2Go eased its background checks, 75 of its vehicles were stolen in one day.](https://web.archive.org/web/20230526073109/https://www.bloomberg.com/news/articles/2019-07-11/mercedes-thieves-showed-just-how-vulnerable-car-sharing-can-be) - Why background checks are sometimes necessary.

- [Investigation into the Unusual Signups](https://openstreetmap.lu/MWGGlobalLogicReport20181226.pdf) - A detailed analysis of suspicious OpenStreetMap contributor signups, documenting an orchestrated campaign. The report can serve as a model for fraud investigations.

- [MIDAS: Detecting Microcluster Anomalies in Edge Streams](https://github.com/bhatiasiddharth/MIDAS) - Open source. A proposed method for detecting microcluster anomalies—suddenly arriving groups of suspiciously similar edges—in edge streams using constant time and memory.

- [Gephi](https://github.com/gephi/gephi) - Open source. Open-source platform for visualizing and manipulating large graphs.

### Moderation

Online communities, including those beyond gaming and social networks, require ongoing investment in moderation.

- [Still Logged In: What AR and VR Can Learn from MMOs](https://youtu.be/kgw8RLHv1j4?t=534) - “If you host an online community, where people can harm another person: you are on the hook. And if you can't afford to be on the hook, don't host an online community”.

- [You either die an MVP or live long enough to build content moderation](https://mux.com/blog/you-either-die-an-mvp-or-live-long-enough-to-build-content-moderation/) - “You can think about the solution space for this problem by considering three dimensions: cost, accuracy and speed. And two approaches: human review and machine review. Humans are great in one of these dimensions: accuracy. The downside is that humans are expensive and slow. Machines, or robots, are great at the other two dimensions: cost and speed - they're much cheaper and faster. But the goal is to find a robot solution that is also sufficiently accurate for your needs.”

- [The despair and darkness of people will get to you](https://restofworld.org/2020/facebook-international-content-moderators/) - A report on outsourced moderation at large social networks, describing exposure to disturbing content and reporting that moderators commonly develop PTSD.

- [The Cleaners](https://thoughtmaybe.com/the-cleaners/) - A documentary about underpaid moderation teams removing posts and deleting accounts.

### Threat Intelligence

How to detect, unmask and classify offensive online activities. Most of the time these are monitored by security, networking and/or infrastructure engineering teams. Still, these are good resources for T&S and IAM people, who might be called upon for additional expertise for analysis and handling of threats.

- [Awesome Threat Intelligence](https://github.com/hslatman/awesome-threat-intelligence) - “A concise definition of Threat Intelligence: evidence-based knowledge, including context, mechanisms, indicators, implications and actionable advice, about an existing or emerging menace or hazard to assets that can be used to inform decisions regarding the subject's response to that menace or hazard.”

- [SpiderFoot](https://github.com/poppopjmp/spiderfoot) - Open source. An open source intelligence (OSINT) automation tool. It integrates with just about every data source available and uses a range of methods for data analysis, making that data easy to navigate.

- [OSINT Stuff Tool Collection](https://github.com/cipher387/osint_stuff_tool_collection) - “A collection of several hundred online tools for OSINT”: domain, IP, email, username and social-network lookups useful for unmasking fraud and abuse.

- [Maigret](https://github.com/soxoj/maigret) - Open source. “Collect a dossier on a person by username from 3000+ sites”, useful for account enumeration and unmasking fraud or abuse.

- [Standards related to Threat Intelligence](https://www.threat-intelligence.eu/standards/) - Open standards, tools and methodologies to support threat intelligence analysis.

- [MISP taxonomies and classification](https://www.misp-project.org/taxonomies.html) - Tags to organize information on “threat intelligence including cyber security indicators, financial fraud or counter-terrorism information.”

- [Browser Fingerprinting: A survey](https://arxiv.org/pdf/1905.01051.pdf) - Fingerprints can be used as a source of signals to identify bots and fraudsters.

- [The challenges of file formats](https://speakerdeck.com/ange/the-challenges-of-file-formats) - At one point you will let users upload files in your system. Here is a [corpus of suspicious media files](https://github.com/corkami/pocs) that can be leveraged by scammers to bypass security or fool users.

- [SecLists](https://github.com/danielmiessler/SecLists) - Open source. Collection of multiple types of lists used during security assessments, collected in one place. List types include usernames, passwords, URLs, sensitive data patterns, fuzzing payloads, web shells, and many more.

- [PhishingKitTracker](https://github.com/neonprimetime/PhishingKitTracker) - Open source. CSV database of email addresses used by threat actors in phishing kits.

- [PhoneInfoga](https://github.com/sundowndev/PhoneInfoga) - Open source. Tools to scan phone numbers using only free resources. The goal is to first gather standard information such as country, area, carrier and line type on any international phone numbers with a very good accuracy. Then search for footprints on search engines to try to find the VoIP provider or identify the owner.

- [Confusable Homoglyphs](https://git.sr.ht/~valhalla/confusable_homoglyphs) - Open source. A resource on homoglyphs, a common phishing technique.

### Captcha

Another line of defense against spammers.

- [Awesome Captcha](https://github.com/ZYSzys/awesome-captcha) - A reference list of open-source CAPTCHA libraries, integrations, alternatives, and cracking tools.

- [reCaptcha](https://www.google.com/recaptcha) - Commercial vendor. Described by the source as an effective, economical, and quick option for companies without a dedicated team to combat bots and spam at internet scale.

- [You (probably) don't need ReCAPTCHA](https://web.archive.org/web/20190611190134/https://kevv.net/you-probably-dont-need-recaptcha/) - Critiques the service's privacy and UI costs, then lists alternatives.

- [Anubis](https://github.com/TecharoHQ/anubis) - Open source. An open-source solution to protect upstream resources from scraper bots.

- [Anti-captcha](https://anti-captcha.com) - Commercial vendor. A CAPTCHA-solving service.

## Blocklists

Simple denylists provide a basic automated defense against abuse and fraud.

- [Bloom Filter](https://en.wikipedia.org/wiki/Bloom_filter) - A data structure for quickly checking that an element is absent from a large set, with variations for specific data types.

- [How Radix trees made blocking IPs 5000 times faster](https://web.archive.org/web/2021/https://blog.sqreen.com/demystifying-radix-trees/) - Explains how radix trees can accelerate IP blocklists.

### Hostnames and Subdomains

Resources for identifying clients, detecting and blocking bot swarms, and limiting DDoS effects.

- [`hosts`](https://github.com/StevenBlack/hosts) - Open source. Consolidates reputable hosts files, and merges them into a unified hosts file with duplicates removed.

- [`nextdns/metadata`](https://github.com/nextdns/metadata) - Commercial vendor. Extensive collection of lists for security, privacy and parental control.

- [The Public Suffix List](https://github.com/publicsuffix/list) - Open source. Mozilla's registry of public suffixes, under which Internet users can (or historically could) directly register names.

- [Country IP Blocks](https://github.com/herrbischoff/country-ip-blocks) - Open source. CIDR country-level IP data, straight from the Regional Internet Registries, updated hourly.

- Subdomain denylists: [#1](https://gist.github.com/artgon/5366868), [#2](https://github.com/sandeepshetty/subdomain-blacklist/blob/master/subdomain-blacklist.txt), [#3](https://github.com/nccgroup/typofinder/blob/master/TypoMagic/datasources/subdomains.txt).

- [`common-domain-prefix-suffix-list.tsv`](https://gist.github.com/erikig/826f49442929e9ecfab6d7c481870700) - Top-5000 most common domain prefix/suffix list.

- [`xkeyscorerules100.txt`](https://gist.github.com/sehrgut/324626fa370f044dbca7) - NSA's [XKeyscore](https://en.wikipedia.org/wiki/XKeyscore) matching rules for TOR and other anonymity preserving tools.

- [AMF site blocklist](https://www.amf-france.org/fr/espace-epargnants/proteger-son-epargne/listes-noires-et-mises-en-garde) - Official French denylist of money-related fraud sites.

### Emails

- [Burner email providers](https://github.com/wesbos/burner-email-providers) - Open source. A list of temporary email providers, with a [derived Python module](https://github.com/martenson/disposable-email-domains).

- [MailChecker](https://github.com/FGRibreau/mailchecker) - Commercial vendor. Cross-language temporary (disposable/throwaway) email detection library.

- [`check-if-email-exists`](https://github.com/reacherhq/check-if-email-exists) - Commercial vendor. Checks email-address reachability over SMTP without sending an email, helping detect typos, disposable domains, and role accounts at signup.

- [Temporary Email Address Domains](https://gist.github.com/adamloving/4401361) - A list of domains for disposable and temporary email addresses. Useful for filtering your email list to increase open rates (sending email to these domains likely will not be opened).

- [`gman`](https://github.com/benbalter/gman) - Open source. “A Ruby gem to check if the owner of a given email address or website is working for THE MAN (a.k.a verifies government domains).” Good resource to hunt for potential government customers in your user base.

### Reserved IDs

- [General List of Reserved Words](https://gist.github.com/stuartpb/5710271) - This is a general list of words you may want to consider reserving, in a system where users can pick any name.

- [Hostnames and usernames to reserve](https://ldpreload.com/blog/names-to-reserve) - List of all the names that should be restricted from registration in automated systems.

### Profanity

- [List of Dirty, Naughty, Obscene, and Otherwise Bad Words](https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words) - Open source. Profanity blocklist from Shutterstock.

- [`profanity-check`](https://github.com/vzhou842/profanity-check) - Open source. Uses a linear SVM model trained on 200k human-labeled samples of clean and profane text strings.

## Privacy

IAM systems hold user data, making privacy an integral part of their design.

- [Paper we love: Privacy](https://github.com/papers-we-love/papers-we-love/tree/master/privacy) - A collection of scientific studies of schemes providing privacy by design.

- [Have I been Pwned?](https://haveibeenpwned.com) - Data breach index.

- [Automated security testing for Software Developers](https://fahrplan.events.ccc.de/camp/2019/Fahrplan/system/event_attachments/attachments/000/003/798/original/security_cccamp.pdf) - A talk attributing most privacy breaches to known vulnerabilities in third-party dependencies, and describing how to detect them with CI/CD.

- [Email marketing regulations around the world](https://github.com/threeheartsdigital/email-marketing-regulations) - Open source. As the world becomes increasingly connected, the email marketing regulation landscape becomes more and more complex.

### Anonymization

IAM systems centralize user data, so their maintainers must prevent business and customer data leaks. These resources address anonymization for internal analytics.

- [The False Allure of Hashing for Anonymization](https://web.archive.org/web/20220927004103/https://goteleport.com/blog/hashing-for-anonymization/) - The source describes hashing as sufficient for pseudonymization, which it says the GDPR allows, while warning that hashing alone is insufficient for anonymization.

- [Four cents to deanonymize: Companies reverse hashed email addresses](https://freedom-to-tinker.com/2018/04/09/four-cents-to-deanonymize-companies-reverse-hashed-email-addresses/) - “Hashed email addresses can be easily reversed and linked to an individual”.

- [Why differential privacy is awesome](https://desfontain.es/privacy/differential-privacy-awesomeness.html) - Explains the intuition behind [differential privacy](https://en.wikipedia.org/wiki/Differential_privacy), a theoretical framework that allows sharing of aggregated data without compromising confidentiality. See follow-up articles with [more details](https://desfontain.es/privacy/differential-privacy-in-more-detail.html) and [practical aspects](https://desfontain.es/privacy/differential-privacy-in-practice.html).

- [Presidio](https://github.com/microsoft/presidio) - Open source. Context aware, pluggable and customizable data protection and PII data anonymization service for text and images.

### GDPR

Resources on the European General Data Protection Regulation (GDPR).

- [GDPR Tracker](https://gdpr.eu) - A reference site on the GDPR in Europe.

- [GDPR Developer Guide](https://github.com/LINCnil/GDPR-Developer-Guide) - Best practices for developers.

- [GDPR – A Practical guide for Developers](https://techblog.bozho.net/gdpr-practical-guide-developers/) - A one-page summary of the above.

- [Dark Patterns after the GDPR](https://arxiv.org/pdf/2001.02479.pdf) - A paper arguing that limited GDPR enforcement allows dark patterns and implied consent to remain widespread.

- [GDPR Enforcement Tracker](http://enforcementtracker.com) - List of GDPR fines and penalties.

## UX/UI

The source places most of the primitives needed for signup and onboarding in the IAM backend. Because these flows shape a product's first impression, they require careful design with frontend specialists. These guides address that experience.

- [The 2020 State of SaaS Product Onboarding](https://userpilot.com/saas-product-onboarding/) - Covers all the important facets of user onboarding.

- [User Onboarding Teardowns](https://www.useronboard.com/user-onboarding-teardowns/) - A collection of analyses of first-time signup experiences.

- [Discover UI Design Decisions Of Leading Companies](https://goodui.org/leaks/) - UI design observations drawn from leaked screenshots and A/B tests.

- [Conversion Optimization](https://web.archive.org/web/2020/https://www.nickkolenda.com/conversion-optimization-psychology/#cro-tactic11) - A collection of tactics to increase the chance of users finishing the account creation funnel.

- [11 Tips for Better Signup / Login UX](https://learnui.design/blog/tips-signup-login-ux.html) - Some basic tips on the login form.

- [Don't get clever with login forms](http://bradfrost.com/blog/post/dont-get-clever-with-login-forms/) - Create login forms that are simple, linkable, predictable, and play nicely with password managers.

- [Why are the username and password on two different pages?](https://www.twilio.com/blog/why-username-and-password-on-two-different-pages) - Discusses supporting both SSO and password-based login. For users frustrated by a two-step login flow, it points to Dropbox's approach of making [an AJAX request when a username is entered](https://news.ycombinator.com/item?id=19174355).

- [HTML attributes to improve your users' two factor authentication experience](https://www.twilio.com/blog/html-attributes-two-factor-authentication-autocomplete) - “In this post we will look at the humble `<input>` element and the HTML attributes that will help speed up our users' two factor authentication experience”.

- [Remove password masking](http://passwordmasking.com) - Summarizes the results from an academic study investigating the impact removing password masking has on consumer trust.

- [For anybody who thinks "I could build that in a weekend," this is how Slack decides to send a notification](https://twitter.com/ProductHunt/status/979912670970249221) - An example of the complexity of deciding when to send notifications.

## Competitive Analysis

Resources for tracking open-source projects and companies in this field.

- [Best-of Digital Identity](https://github.com/jruizaranguren/best-of-digital-identity) - Ranking, popularity and activity status of open-source digital identity projects.

- [AWS Security, Identity & Compliance announcements](https://aws.amazon.com/new/?whats-new-content-all.sort-by=item.additionalFields.postDateTime&whats-new-content-all.sort-order=desc&awsf.whats-new-categories=marketing-marchitecture%23security-identity-and-compliance) - AWS announcements of features in security, identity, and compliance.

- [GCP IAM release notes](https://cloud.google.com/iam/docs/release-notes) - Also of note: [Identity Platform](https://cloud.google.com/identity-platform/docs/release-notes), [Resource Manager](https://cloud.google.com/resource-manager/docs/release-notes), [Key Management Service/HSM](https://cloud.google.com/kms/docs/release-notes), [Access Context Manager](https://cloud.google.com/access-context-manager/docs/release-notes), [Identity-Aware Proxy](https://cloud.google.com/iap/docs/release-notes), [Data Loss Prevention](https://cloud.google.com/dlp/docs/release-notes) and [Security Scanner](https://cloud.google.com/security-scanner/docs/release-notes).

- [Unofficial Weekly Google Cloud Platform newsletter](https://www.gcpweekly.com) - Relevant keywords: [`IAM`](https://www.gcpweekly.com/gcp-resources/tag/iam/) and [`Security`](https://www.gcpweekly.com/gcp-resources/tag/security/).

- [DigitalOcean Accounts changelog](http://docs.digitalocean.com/release-notes/accounts/) - Release notes for DigitalOcean account updates.

- [163 AWS services explained in one line each](https://web.archive.org/web/20260301070017/https://adayinthelifeof.nl/2020/05/20/aws.html#discovering-aws) - Helps explain their huge service catalog. In the same spirit: [AWS In Plain English](https://expeditedsecurity.com/aws-in-plain-english/).

- [Google Cloud Developer's Cheat Sheet](https://github.com/gregsramblings/google-cloud-4-words#the-google-cloud-developers-cheat-sheet) - Describes all GCP products in 4 words or less.

## History

- [cryptoanarchy.wiki](https://cryptoanarchy.wiki) - The cypherpunk movement overlaps with security. This wiki compiles information about the movement, its history and the people/events of note.
