---
title: "cerberauth/awesome-openid-connect"
description: "cerberauth/awesome-openid-connect の定本スナップショット"
licenseSource: "github-cerberauth-awesome-openid-connect-readme-md"
---

# Awesome OpenID Connect [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> [OpenID Connect](https://openid.net/#introduction) は OAuth 2.0 上の認証プロトコル・Identity Layerで、多くのSSOとSocial Login（Apple、Facebook、Googleなど）に採用されています。基本的には、利用者がOpenID Connect Provider（OP）の既存AccountでServiceへ認証し、同意後に一部のIdentity情報を共有し、Relying Party（RP）ApplicationのResourceへAccessするTokenを取得できます。

> Provider、Service、Library、資料を厳選したこのリストから、導入方法と既存・Draft仕様を学べます。

## 目次

- [OpenID Provider（OP）](#openid-providers-op)
- [Relying Party（RP）Library](#relying-parties-rp-libraries)
    - [C](#c)
    - [C#](#c-1)
    - [Dart](#dart)
    - [Erlang](#erlang)
    - [Golang](#golang)
    - [Java](#java)
    - [JavaScript](#javascript)
    - [OCaml](#ocaml)
    - [PHP](#php)
    - [Python](#python)
    - [Ruby](#ruby)
    - [Rust](#rust)
- [Relying Party（RP）Software Plugin](#relying-parties-rp-software-plugins)
- [資料](#resources)
    - [Flow／Grant Type仕様](#flows--grant-types-specifications)
    - [仕様](#specifications)
    - [Webサイト](#websites)
    - [テーマ別記事](#thematic-articles)
    - [Playground](#playgrounds)
    - [Test Utility](#testing-utilities)
    - [書籍](#books)

---

## OpenID Provider（OP）

*SaaSおよびOpen Source SolutionとしてのOpenID Connect Provider。*

- [Auth0](https://auth0.com/docs/authenticate/protocols/openid-connect-protocol) - CloudでSaaSとして利用できるOpenID Connect／OAuth 2.0 Service。
- [Authelia](https://www.authelia.com/) - Single Sign-On（SSO）を提供し、情報SecurityのIdentity and Access Management（IAM）を担うOpen Sourceの認証・認可Server／Portal。
- [Authentik](https://github.com/goauthentik/authentik) - 柔軟性と汎用性を重視するOpen Source Identity Provider。
- [Authlete](https://www.authlete.com/) - OAuth Authorization ServerとOpenID Connect Identity Providerを実装するためのAPI群。
- [AWS Cognito](https://aws.amazon.com/cognito/) - Amazon Web ServicesのCognitoはIAM機能に加えてOpenID Connect Providerを提供。
- [Clerk](https://clerk.com/) - User ManagementとOpenID Connect Provider機能を持つ認証Service。
- [Cloudentity](https://cloudentity.com/) - FAPIとeKYCに対応するCloud Identity and Authorization Platform。
- [Connect2id](https://connect2id.com/products/server) - Enterprise向けOpenID Connect SSO／IdP Server。
- [Curity Identity Server](https://curity.io/product/) - IdentityとAPI Access Managementを統合するAPI Security Solution。
- [Descope](https://docs.descope.com/identity-federation/applications/oidc-apps) - Drag and Dropで利用者認証・認可Flowを構築できるOpenID Connect Provider／Identity Federation Solution。
- [Dex](https://github.com/dexidp/dex) - LDAP、SAML、OIDCやGitHub、Google、Active Directoryなどへ「Connector」を通じて接続するProvider Portal。
- [Duende IdentityServer](https://duendesoftware.com/products/identityserver) - ASP.NET Core OpenID Connect Provider Solution。
- [Duo](https://duo.com/) - Cisco開発のOpenID Connect Provider／IdP Solution。
- [FrontEgg](https://docs.frontegg.com/docs/configure-frontegg-as-oidc-idp) - OpenID Connect Provider機能を持つSaaS Platform向けCustomer Identity Solution。
- [Keycloak](https://www.keycloak.org/) - User Federation、Strong Authentication、User Management、Fine-Grained Authorizationなどを提供するRed Hat支援のOpen Source Project。
- [Gluu](https://gluu.org/) - IAM統合済みでOpenID Connect Provider／FAPI認定のSolution。
- [Gravitee.io](https://www.gravitee.io/platform/access-management) - ApplicationとIdentity Providerを橋渡しし、認証、認可、Account情報取得を行うOpen Source OpenID Connect／OAuth 2.0 Provider。
- [Kinde](https://kinde.com) - CloudでSaaSとして利用できるOpenID Connect／OAuth 2.0 Service。
- [LoginRadius](https://www.loginradius.com/) - OpenID Connect Providerとして動作できるSaaS CIAM。
- [Logto](https://github.com/logto-io/logto) - OpenID Connectベースの認証を持ち、Customer IAM（CIAM）とWorkforce Identity Management向けに設計されたOpen Source Solution。
- [Okta](https://www.okta.com/) - Cloud／On-PremiseのCustomer・Workforce Identity向けにFederation、SSO、API Security、Workflowを提供する拡張可能なSolution。
- [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/solutions/identity-access) - SystemとApplicationへのSSO Accessを提供するMicrosoft製Software Component。
- [MITREid Connect](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server) - JavaによるOpen Source OpenID Connect Reference Implementation。
- [OpenIddict](https://github.com/openiddict/openiddict-core) - ASP.NET Core 2.1以降に対応する.NET Open Source OpenID Connect Provider実装。
- [OneLogin](https://www.onelogin.com/) - OpenID Connect Provider機能を持つEmployee／Customer IAM SaaS。
- [Ory Hydra](https://github.com/ory/hydra) - Open SourceでOpenID Certified™のOpenID Connect／OAuth Provider。
- [Ory Polis（旧BoxyHQ Jackson）](https://github.com/ory/polis) - SAML Login FlowをOpenID ConnectへBridge／Proxyし、User Directory同期も備えるOpen Source Enterprise SSO。
- [panva/node-oidc-provider](https://github.com/panva/node-oidc-provider) - FAPI 1.0／2.0対応、Node.jsによるOpen Source認定OpenID Connect Provider実装。
- [PingFederate](https://www.pingidentity.com/en/platform/capabilities/authentication-authority/pingfederate.html) - EnterpriseのCustomer、Partner、Employee向けに安全なSSO、API Security、Provisioningを提供するFederation Server。
- [Pocket ID](https://github.com/pocket-id/pocket-id) - Passkeyで認証できるシンプルなOpenID Connect Provider。
- [SiteMinder](https://www.broadcom.com/products/identity/siteminder) - OpenID Connect Provider対応のBroadcom製IAM。
- [SSOJet](https://ssojet.com) - B2B SaaSへEnterprise SSOを統合するOpenID ConnectベースのSolution。
- [Scalekit](https://docs.scalekit.com/authenticate/sso/add-modular-sso/) - Hosted Enterprise SSOでApplicationのOPとなるB2B Application向けOpenID Connect Provider。
- [Transmit Security](https://developer.transmitsecurity.com/guides/user/auth_oidc/) - OpenID Connectベースの統合に対応するCIAM Solution。
- [WSO2 Identity Server](https://wso2.com/identity-server/) - 組織のCustomer Experience（CX）Applicationへ組み込みやすい現代的なIAM機能を提供するIdentity Server。
- [Zitadel](https://github.com/zitadel/zitadel) - OpenID Connect Provider（OP）とSAMLv2をすぐ使えるOpen Source Identity Solution。
- [Alibaba Cloud IDaaS](https://www.alibabacloud.com/en/product/identity-as-a-service-idaas) - ServiceとしてのAlibaba Cloud OpenID Connect Provider。
- [SecureAuth](https://www.secureauth.com/) - OpenID Connect Provider機能を持つIdentity Security Platform。
- [FusionAuth](https://fusionauth.io/) - OpenID Connect Provider機能を持つOpen Source IAM Solution。
- [IBM Verify](https://www.ibm.com/products/verify) - IBMのOpenID Connect Provider／Identity as a Service（IDaaS）Solution。
- [MojoAuth](https://mojoauth.com) - Passkey、Magic Link、OTPを使うOpenID ConnectベースのPasswordless Authentication Platform。
- [CyberArk Identity](https://www.cyberark.com/) - OpenID Connect Provider機能を持つIdentity Security Solution。
- [SailPoint](https://www.sailpoint.com/) - OpenID Connect Provider機能を持つEnterprise Identity Security Platform。
- [SAP Customer Identity](https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/4167c2d870b21014bbc5a10ce4041860.html) - SAPのOpenID Connect Provider／IDaaS Solution。
- [WorkOS](https://workos.com/) - 組織がWorkforce、Customer、Partnerへ安全なAccessを提供できるIdentity Management Platform。

- [OpenID Foundation conformance suite](https://gitlab.com/openid/conformance-suite) - OpenID Connect、FAPI1-Advanced、FAPI2、FAPI-CIBA、OpenID for Identity Assurance（eKYC）を対象に、OpenID Foundation認定を得るためのConformance Test Suite。


## Relying Party（RP）Library

*Client ApplicationへOpenID Connectを実装するRelying Party（RP）Library。*

### C

- [liboauth2](https://github.com/OpenIDC/liboauth2) - CベースのOpenID Connect Provider／Relying Partyを構築する汎用Library。
- [mod_auth_openidc](https://github.com/OpenIDC/mod_auth_openidc) - Apache Server 2.x向け認定OpenID Connect Relying Party実装。
- [ngx_oauth2_module](https://github.com/OpenIDC/ngx_oauth2_module) - Nginx向け認定OpenID Connect Relying Party実装。

### C#

- [IdentityModel.OidcClient](https://github.com/IdentityModel/IdentityModel.OidcClient) - Native Mobile／Desktop Application向けC#／.NET認定OpenID Connect RP Client Library。

### Dart

- [openid_client](https://github.com/appsup-dart/openid_client) - Flutter、Web、CLIで使えるDart向けOpenID Connect RP Client Library。

### Erlang

- [oidcc](https://github.com/erlef/oidcc) - FAPI対応のErlang／Elixir認定OpenID Connect RP Client Library。

### Golang

- [coreos/go-oidc](https://github.com/coreos/go-oidc) - CoreOS開発のGo OpenID Connect Client。
- [golang.org/x/oauth2](https://pkg.go.dev/golang.org/x/oauth2) - OpenID Connect対応のOAuth 2.0仕様公式Golang Client実装。
- [zitadel/oidc](https://github.com/zitadel/oidc) - OpenID Foundation認定OpenID Connect Client／Server Library。

### Java

- [com.google.oauth-client/google-oauth-client](https://github.com/googleapis/google-oauth-java-client) - Android対応、Google製OAuth 2.0 RP Java Library。
- [com.nimbusds/oauth2-oidc-sdk](https://mvnrepository.com/artifact/com.nimbusds/oauth2-oidc-sdk) - OpenID Connect、FAPI、Federation、eKYC／Identity Assurance拡張を持つconnect2id製Java SDK。
- [Spring Security](https://docs.spring.io/spring-security/reference/servlet/oauth2/login/index.html) - OpenID Connect／OAuth 2.0対応でSpring Applicationを保護するJava Framework。

### JavaScript

- [openid-client](https://github.com/panva/node-openid-client) - Node.js向けOpenID Certified™ RP（OpenID Connect／OAuth 2.0 Client）実装。
- [oauth4webapi](https://github.com/panva/oauth4webapi) - JavaScript Runtime向けOAuth 2／OpenID Connect Library。
- [oidc-client-ts](https://github.com/authts/oidc-client-ts) - Browser Application向けTypeScript OpenID／OAuth 2.0 Client。

*特定Frameworkとの統合に焦点を当てるLibrary層*

- [Better Auth](https://github.com/better-auth/better-auth) - SPA／Server-Side Application向けFramework非依存TypeScript認証Library。
- [Nuxt 2向けnuxt-auth](https://github.com/nuxt-community/auth-module) - Nuxt.js 2向けZero-Boilerplate認証。
- [Nuxt 3向けnuxt-auth](https://github.com/sidebase/nuxt-auth) - NextAuth.jsをWrapするNuxt 3 User認証・Session Library。
- [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) - OAuth 2.0／OpenID Connect FlowとAngular Schematicsを備える認定Angular Library。
- [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) - AngularへOAuth 2.0／OpenID Connect（OIDC）対応を追加するLibrary。

### OCaml

- [ocaml-oidc](https://github.com/ulrikstrid/ocaml-oidc) - OCamlによる認定OpenID Connect RP実装。

### PHP

- [Laravel Socialite](https://github.com/laravel/socialite) - OpenID Connect対応、OAuth 1／2 LibraryのLaravel Wrapper。
- [thephpleague/oauth2-client](https://github.com/thephpleague/oauth2-client) - PHP向けOAuth 2.0 Service Provider統合。
- [Symfony Security](https://symfony.com/doc/current/security/access_token.html#using-openid-connect-oidc) - OpenID Connect対応PHP Security Component。

### Python

- [mozilla-django-oidc](https://github.com/mozilla/mozilla-django-oidc/) - Mozillaが保守するDjango OpenID Connect RP Library。

### Ruby

- [openid_connect](https://github.com/nov/openid_connect) - Ruby OpenID Connect RP／Provider（OP）Library。
- [omniauth_openid_connect](https://github.com/omniauth/omniauth_openid_connect) - Ruby OmniAuth Library向けOpenID Connect Strategy。

### Rust

- [openidconnect](https://github.com/ramosbugs/openidconnect-rs) - Rust向けOpenID Connect RP Library。

## Relying Party（RP）Software Plugin

- [MiniOrange OAuth SSO](https://wordpress.org/plugins/miniorange-login-with-eve-online-google-facebook/) - MiniOrangeが開発・保守するWordPress OAuth／OpenID Connect Plugin。

## 資料

OpenID Connectの学習資料を見つける場所です。

### Flow／Grant Type仕様

- [authorization_code](https://datatracker.ietf.org/doc/html/rfc6749?grant_type=authorization_code#section-1.3.1) - Web AppなどPublic Clientの認可に適するOAuth 2.0 Authorization Code Grant。
- [refresh_token](https://datatracker.ietf.org/doc/html/rfc6749?grant_type=refresh_token#section-1.5) - Refresh Tokenを短命Access Token、場合によっては新しいRefresh Tokenと交換するOAuth 2.0 Grant。
- [client_credentials](https://datatracker.ietf.org/doc/html/rfc6749?grant_type=client_credentials#section-4.4) - 利用者操作なしでTokenを取得し、Machine-to-Machine通信に適するOAuth 2.0 Grant。
- [implicit](https://datatracker.ietf.org/doc/html/rfc6749?grant_type=implicit#section-4.2) - 非推奨で、今後使用すべきでないOAuth 2.0 Implicit Grant。
- [password](https://datatracker.ietf.org/doc/html/rfc6749?grant_type=password#section-4.3) - 現在は使用を推奨しないOAuth 2.0 Resource Owner Password Credentials Grant。
- [urn:ietf:params:oauth:grant-type:device_code](https://datatracker.ietf.org/doc/html/rfc8628) - Smart TVなどBrowser外で利用者と対話するOAuth 2.0 Device Authorization Grant。
- [urn:ietf:params:oauth:grant-type:jwt-bearer](https://datatracker.ietf.org/doc/html/rfc7523) - 信頼するProvider発行の別JWTを使いClientがAccess Tokenを得るOAuth 2.0向けJWT Profile。
- [urn:ietf:params:oauth:grant-type:saml2-bearer](https://datatracker.ietf.org/doc/html/rfc7522) - 信頼するProvider発行のSAML Assertionを使いClientがAccess Tokenを得るOAuth 2.0向けSAML 2.0 Profile。
- [urn:ietf:params:oauth:grant-type:token-exchange](https://datatracker.ietf.org/doc/html/rfc8693) - 別TokenからTokenを取得し、Actor Claimも追加できるOAuth 2.0 Token Exchange Grant。
- [Proof Key for Code Exchange（PKCE）Extension](https://datatracker.ietf.org/doc/html/rfc7636) - Code Interception AttackへのSecurity層をAuthorization Code Flowへ追加。

### 仕様

#### 公開済み

- [CBOR Web Token（CWT）](https://datatracker.ietf.org/doc/html/rfc8392) - OpenID Connect／OAuth 2.0のTokenで使うCBOR形式。
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html) - OAuth 2.0上の認証とEnd-User情報を伝えるClaimなど中核機能を定義し、Security／Privacy上の考慮事項も説明。
- [The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) - OpenID Connectの基盤となるOAuth 2.0 Protocol。
- [JSON Web Token（JWT）](https://datatracker.ietf.org/doc/html/rfc7519) - OAuth 2.0／OpenID Connect仕様内の各種Tokenで使うJWT仕様。
- [OAuth 2.0 Access Token向けJWT Profile](https://datatracker.ietf.org/doc/html/rfc9068) - OAuth 2.0におけるJWT形式・検証仕様。
- [JSON Web Key（JWK）](https://datatracker.ietf.org/doc/html/rfc7517) - OPが提供する暗号鍵を表すJSON Data Structure。
- [JSON Web Encryption（JWE）](https://datatracker.ietf.org/doc/html/rfc7516) - JSONベース構造で暗号化Contentを表すJWE仕様。
- [JSON Web Signature（JWS）](https://datatracker.ietf.org/doc/html/rfc7515) - Digital Signatureで保護したContentを表すJWS仕様。
- [OAuth 2.0 Threat Model and Security Considerations](https://datatracker.ietf.org/doc/html/rfc6819) - OAuth 2.0／OpenID Connectの既知の脅威と対策。
- [OAuth 2.0 Authentication Method Reference Values](https://datatracker.ietf.org/doc/html/rfc8176) - AMR Token Claimの認証方式値一覧。
- [OAuth 2.0 Authorization Framework: Bearer Token Usage](https://datatracker.ietf.org/doc/html/rfc6750) - OAuth 2.0 Protected ResourceへAccessするHTTP RequestでBearer Tokenを使う方法。
- [OAuth 2.0 for Native Apps](https://datatracker.ietf.org/doc/html/rfc8252) - Native AppでOAuthを使うSecurity／Usability Best Practice。
- [OAuth 2.0 Pushed Authorization Requests](https://datatracker.ietf.org/doc/html/rfc9126) - Clientが直接RequestでOAuth 2.0 Authorization Request PayloadをAuthorization Serverへ送るPAR。
- [OAuth 2.0 Mutual-TLS Client Authentication and Certificate-Bound Access Tokens](https://datatracker.ietf.org/doc/html/rfc8705) - Client CertificateベースのMutual TLS（mTLS）を使うOAuth 2.0強化Security Optionを標準化。
- [OAuth 2.0 JWT-Secured Authorization Request（JAR）](https://datatracker.ietf.org/doc/html/rfc9101) - Request ParameterをJWTで送り、JWS署名・JWE暗号化により完全性、送信元認証、機密性を得ます。
- [OpenID Connect Discovery 1.0](https://openid.net/specs/openid-connect-discovery-1_0.html) - RPがEnd-UserのOPを発見し、対話に必要な情報を得る仕組み。
- [OpenID Connect Front-Channel Logout](https://openid.net/specs/openid-connect-frontchannel-1_0.html) - OPとLogout対象RP間でUser Agentを介すFront-Channel Logout。RP Page上のOP iframeは不要。
- [OpenID Connect Back-Channel Logout](https://openid.net/specs/openid-connect-backchannel-1_0.html) - OPとLogout対象RPの直接Back-Channel通信を使うLogout。
- [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) - End-UserのUser AgentをOP Logout EndpointへRedirectし、RPからLogoutを要求する方法。
- [OAuth 2.0 Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414) - OAuth 2.0 ClientがAuthorization Serverとの対話に必要な情報を取得するMetadata形式。
- [OAuth 2.0 Token Revocation](https://datatracker.ietf.org/doc/html/rfc7009) - 取得済みRefresh／Access Tokenが不要になったとClientからAuthorization Serverへ通知するEndpoint。
- [OAuth 2.0 Dynamic Client Registration Protocol](https://datatracker.ietf.org/doc/html/rfc7591) - OAuth 2.0 RPがServer Providerへ動的登録する方法。
- [OAuth 2.0 Demonstrating Proof of Possession（DPoP）](https://datatracker.ietf.org/doc/html/rfc9449) - OAuth 2.0 Clientの秘密鍵所持を証明。
- [OpenID Connect Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html) - Application LevelのProof-of-PossessionでOAuth 2.0 TokenをSender-Constrainし、Token Replay Attackを検知する仕組み。
- [OAuth 2.0 Token Introspection](https://datatracker.ietf.org/doc/html/rfc7662) - Protected ResourceがAuthorization Serverへ問い合わせ、TokenのActive状態とMetadataを判断する方法。
- [OAuth 2.0 Rich Authorization Requests（RAR）](https://datatracker.ietf.org/doc/html/rfc9396) - JSONの表現力で細粒度認可要件を指定するauthorization_details Parameterを追加。
- [Financial-grade API Security Profile 1.0 - Part 1: Baseline](https://openid.net/specs/openid-financial-api-part-1-1_0.html) - Financial-grade APIで中程度の固有Riskを持つAPI保護に適するOAuth Baseline Security Profile。
- [Financial-grade API Security Profile 1.0 - Part 2: Advanced](https://openid.net/specs/openid-financial-api-part-2-1_0.html) - 高い固有Riskを持つAPI保護に適するOAuth Advanced Security Profile。
- [JWT Secured Authorization Response Mode for OAuth 2.0（JARM）](https://openid.net/specs/oauth-v2-jarm.html) - 送信保護用Claimを加え、OAuth Authorization Response ParameterをJWTへEncodingするMode。
- [Initiating User Registration via OpenID Connect](https://openid.net/specs/openid-connect-prompt-create-1_0.html) - OpenID ConnectとCreate PromptでUser Registrationを開始する仕様。
- [OpenID Connect Session Management](https://openid.net/specs/openid-connect-session-1_0.html) - OpenID Connect Session Management仕様。
- [OpenID Connect Client-Initiated Backchannel Authentication Flow - Core 1.0](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0.html) - Client-Initiated Backchannel Authentication（CIBA）Flow仕様。
- [OpenID Provider Authentication Policy Extension 1.0](https://openid.net/specs/openid-provider-authentication-policy-extension-1_0.html) - Multi-Factor Authenticationなど特定Policyの適用をRPからOPへ要求する仕組み。
- [JWT Response for OAuth Token Introspection](https://datatracker.ietf.org/doc/html/rfc9701) - OAuth 2.0 Token Introspection向けの署名済み追加JWT保護Response。
- [OAuth 2.0 Protected Resource Metadata](https://datatracker.ietf.org/doc/html/rfc9728) - Client／Authorization ServerがProtected Resourceとの対話に必要な情報を得るMetadata形式。
- [OAuth 2.0 Security Best Current Practice](https://datatracker.ietf.org/doc/html/rfc9700) - OAuth 2.0／OpenID Connect利用時のSecurity Best Practice。
- [OpenID Connect Extended Authentication Profile（EAP）ACR Values 1.0](https://openid.net/specs/openid-connect-eap-acr-values-1_0.html) - 特定の認証方式・保証Levelを要求できるEAP ACR Value仕様。
- [Resource Indicators for OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8707) - OAuth 2.0 ClientがAccess予定のResource Serverを示す仕組み。
- [OAuth 2.0 Authorization Server Issuer Identification](https://datatracker.ietf.org/doc/html/rfc9207) - Authorization Responseを発行したServerを識別するiss Parameterを定義し、Mix-Up Attackを軽減。
- [FAPI 2.0 Security Profile](https://openid.net/specs/fapi-security-profile-2_0.html) - 高い固有RiskのFinancial-grade API保護に適する新しいFAPI Security Profile。
- [FAPI 2.0 Attacker Model](https://openid.net/specs/fapi-attacker-model-2_0.html) - Financial-grade APIのSecurity Goal、Attacker Model、Security Mechanism。
- [FAPI 2.0 Message Signing](https://openid.net/specs/fapi-message-signing-2_0.html) - FAPI 2.0 Security Profileベースの特定Request／Responseを署名・検証するAPI Security Profile。

#### Draft

- [OAuth 2.0 Dynamic Client Registration Management Protocol](https://datatracker.ietf.org/doc/html/rfc7592) - OAuth 2.0 Dynamic Client Registrationを管理するEndpoint。
- [OpenID Connect Standard Claims Registration for CBOR Web Tokens](https://datatracker.ietf.org/doc/html/draft-ietf-spice-oidc-cwt-01.html) - OpenID Connect Standard ClaimをCBOR Web Token（CWT）で表す方法。
- [OpenID Connect Federation 1.0](https://openid.net/specs/openid-federation-1_0.html) - 2組織間のBilateral Federationを構築するDraft仕様。
- [OpenID AuthZEN](https://openid.net/specs/authorization-api-1_0-01.html) - Service統合を容易にする、Authorization ServiceへのAccess Decision要求標準API。
- [Financial-grade API: Client Initiated Backchannel Authentication Profile](https://openid.net/specs/openid-financial-api-ciba.html) - Client Initiated Backchannel Authentication（CIBA）の金融Service Profile仕様。
- [OAuth 2.0 for Browser-Based Apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps) - Browser-Based AppでOAuthを使うSecurity／Usability Best Practice。
- [Selective Disclosure for JWTs（SD-JWT）](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-selective-disclosure-jwt) - JWT要素を選択的開示する仕様。
- [OAuth 2.1](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-v2-1-13) - OAuth 2.0仕様を単一文書へ統合し、非推奨機能を削除してBest Practiceを明確化。
- [OAuth 2.0 App2App Browserless Flow](https://github.com/yaron-zehavi/oauth-app2app-browserless) - Web Browser不要で、App2App Patternによる認証を行うApp間Native Navigation Protocol。
- [OAuth 2.0 Attestation-Based Client Authentication](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-attestation-based-client-auth-07) - Key-Bound AttestationでPublic Clientを認証できるOAuth 2.0拡張。
- [OpenID Shared Signals Framework Specification 1.0](https://openid.net/specs/openid-sharedsignals-framework-1_0-ID3.html) - 協力するPeer間でSignal／Eventを共有し、RISCやCAEPなどを可能にするSSF。
- [Cross-App Access（XAA）、旧称「Identity Assertion Authorization Grant」](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-identity-assertion-authz-grant-03.html) - 標準化された細粒度OAuth Permissionと利用者同意により、AI Agent／Appが複数Serviceへ安全にAccess・操作できます。
- [OAuth Identity and Authorization Chaining Across Domains](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-identity-chaining-11) - OAuth Token ExchangeとJWT Assertionで、複数Service／Trust DomainにわたりUser Identity、Authorization Context、Call Chain履歴を保持。
- [OpenID Connect for Agents（OIDC-A）1.0](https://arxiv.org/html/2509.25974v1) - OAuth Ecosystem内でAI Agent Identity、Attestation、Delegation Chain、Fine-Grained Authorizationを支援する研究提案（標準・IETF Draftではありません）。

### Webサイト

- [OpenID](https://openid.net/) - OpenID Connect公式Webサイト。
- [OAuth](https://oauth.net/) - Aaron Pareckiが管理し、Protocol資料を列挙するOAuth Webサイト。
- [ByteByteGo](https://blog.bytebytego.com/i/135955829/oauth-explained-with-simple-terms) - OAuth 2.0を視覚的で平易な言葉で説明。
- [Aaron Parecki](https://aaronparecki.com/articles) - OAuth WG MemberによるOAuth 2.0ブログ記事。
- [Alex Bilbie](https://alexbilbie.github.io/tag/oauth/) - OAuth 2.0に関するブログ記事。
- [CerberAuth](https://www.cerberauth.com/) - OpenID Connect／OAuth 2.0を扱うブログ。
- [Nacho](https://nacho.cerberauth.com/) - Applicationに応じたGrant Type選択を支援するOAuth 2.0 Client作成Helper。
- [Curity Resources](https://curity.io/resources/openid-connect/) - Curity SolutionによるOpenID Connect資料記事。
- [Okta Blog](https://developer.okta.com/blog/tags/oidc/) - OAuth 2.0／OpenID Connectに関するOkta Blog。
- [Medium OAuth 2.0](https://medium.com/oauth-2) - OAuth 2.0利用の学び、Pattern、Ideaを扱うMedium Blog。
- [Mike Jones: Self-Issued](https://self-issued.info/) - OAuth 2.0／OpenID Connectに関するMike Jonesのブログ。
- [IAMDevBox](https://www.iamdevbox.com/) - OAuth 2.0/2.1、OIDC、SAML、Keycloak、ForgeRock、PingIdentityの実践Tutorial／Troubleshooting Guideを扱う開発者ブログ。

### テーマ別記事

- [Model Context Protocol向けOAuth](https://aaronparecki.com/2025/04/03/15/oauth-for-model-context-protocol) - OAuthの仕組みとMCP Serverでの適切な利用を説明するAaron Pareckiの記事。
- [OAuthの一般的脆弱性](https://portswigger.net/web-security/oauth) - OAuth 2.0の一般的脆弱性と軽減策を説明するPortSwiggerの記事。
- [MCP OAuth 2.1認証：AI AgentがToolへ安全に接続する仕組み](https://www.iamdevbox.com/posts/mcp-oauth-21-authentication-how-ai-agents-securely-connect-to-tools/) - MCPが必須PKCE、RFC 8707 Audience Binding、Zero-Configuration Discoveryを用いてAI Agentを認証する方法。
- [GitHub Actions OIDC – Non-Human IdentityとSecretless Authentication](https://eparon.me/posts/2026-02-28-oidc-gh-actions-p1/) - GitHub ActionsでStatic SecretからOIDC Identityへ移行する2部構成ガイド。API保護の実践Lab付き。

### Playground

- [OAuth.com Playground](https://www.oauth.com/playground/) - Authorization FlowとAccess Token取得手順を試すOAuth 2.0／OpenID Connect Playground。
- [SecureAuthCorp/oauth2c](https://github.com/SecureAuthCorp/oauth2c) - 各種FlowをTest・探索するOAuth 2.0／OpenID Connect CLI Client。
- [Curity Playground](https://oauth.tools/) - OAuth／OpenID Connect Flowを探索・TestするTool。
- [MojoAuth: Passkey Playground](https://mojoauth.com/oidc-playground/) - OpenID Connect Requestを構築・可視化する対話型Tool。Parameter設定、Request URL生成、JWT Decodeが可能。

### Test Utility

- [OAuth Mock Server](https://oauth.kogiqa.com/) - URL置換だけで大手Providerを模擬する無料Open Source OAuth Mock Server。E2E Testに有用。

### 書籍

- [2012 - Ryan Boyd著 Getting Started with OAuth 2.0](https://www.oreilly.com/library/view/getting-started-with/9781449317843/)
- [2018 - Aaron Parecki著 OAuth 2.0 Simplified](https://www.amazon.com/OAuth-2-0-Simplified-Aaron-Parecki/dp/1387751514/)
- [2020 - Aaron Parecki著 The Little Book of OAuth 2.0 RFCs](https://www.amazon.com/Little-Book-OAuth-2-0-RFCs/dp/B084DFYJS1/)
- [2021 - Stian Thorgersen／Pedro Igor Silva著 Keycloak - Identity and Access Management for Modern Applications: Harness the power of Keycloak, OpenID Connect, and OAuth 2.0 protocols to secure applications](https://www.amazon.com/Keycloak-Management-Applications-protocols-applications-ebook/dp/B092KP135B/)
- [2022 - Yvonne Wilson著 Solving Identity Management in Modern Applications: Demystifying OAuth 2, OpenID Connect, and SAML 2](https://www.amazon.com/Solving-Identity-Management-Modern-Applications-ebook/dp/B0BMQHF83G/)

## コントリビューション

コントリビューションをいつでも歓迎します。最初に[コントリビューションガイドライン](https://github.com/cerberauth/awesome-openidconnect/blob/master/CONTRIBUTING.md)をご覧ください。
