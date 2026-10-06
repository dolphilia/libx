---
title: "Awesome Billing"
description: "Resources for designing billing and payment systems, from pricing and invoicing to accounting, fraud detection, and business intelligence."
licenseSource: "github-kdeldycke-awesome-billing-readme-md"
---

# Awesome Billing

Resources for software engineers designing billing and payment systems. The list covers pricing, product catalogs, cost estimates and forecasts, marketplaces, accounting, finance, contracts, credits, taxes, invoices, payments, fraud, user experience, and business intelligence. It connects business requirements with the software needed to collect money from customers.

The descriptions preserve the recorded source’s context, including historical pricing models and reported product conditions. “Free resource” and “Commercial offering” express the source’s markers; individual descriptions explain open-source cores, paid add-ons, hosting, and support where the source provides those details.

## Basics

The [Stanford cloud-computing overview](https://web.stanford.edu/class/cs349d/docs/L01_overview.pdf) presents a platform software stack. The original list’s [annotated diagram](https://raw.githubusercontent.com/kdeldycke/awesome-billing/ec5eba3b4f3ccbf7e292b76338df781f3d2ff24a/assets/cloud-software-stack-billing.jpg) highlights metering and billing as a pillar spanning that stack, alongside security such as Identity and Access Management (IAM). The diagram’s red “You are here” arrow points to metering and billing.

| Component | Examples shown in the diagram |
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

Distributed storage and resource management form the base of the diagram, with coordination alongside them. Metering and billing, and security (for example, IAM), are shown as cross-cutting vertical pillars. The examples are those in the source diagram; each group also includes an ellipsis indicating other possible examples.

Billing brings together customers, products, and business across the ecosystem. [Identity and Access Management (IAM)](https://github.com/kdeldycke/awesome-iam/) is the other pillar identified by the list. This gives billing strategic importance for cloud providers and other businesses, especially those centered on software.

<a id="intro-quote-ref"></a>

“Money is the most universal and most efficient system of mutual trust ever devised.” — Yuval Noah Harari, [Sapiens: A Brief History of Humankind](https://openlibrary.org/isbn/0062316095) (Harper, 2015; [citation](#intro-quote-def)).

<a id="intro-quote-def"></a>

The quotation above is attributed to this book in the original list. [Return to the quotation](#intro-quote-ref).

- [5 things I learned while developing a billing system](https://arnon.dk/5-things-i-learned-developing-billing-system/) - An introduction to billing systems, from currencies and invoices to the logic of changing plans, with illustrations. These topics are covered in the sections below.

- [Open guide to AWS](https://github.com/open-guides/og-aws#billing-and-cost-management) - The Billing and Cost Management section explains the main characteristics of billing for a cloud provider.

- [Billed for ¥21,120, invoiced at ¥2,112,000 and paid ¥2,112,000](https://xunroll.com/thread/1668082843728367616) - [Get rid of integers and floats for monetary values](https://xunroll.com/thread/1599113889093890049) recommends decimals to avoid anomalous charges such as the 100-fold overcharge described here.

- A suggestion for recruiting software engineers into this domain: make the accounting, billing, and payment department an entry point to data engineering ([source](https://x.com/kdeldycke/status/1422564355799924736)).

## Pricing

Pricing can take many forms, from monthly subscriptions and metered consumption to the familiar shopping-cart purchase flow.

- [Don't just roll the dice – Software pricing guide](https://neildavidson.com/downloads/dont-just-roll-the-dice-2.0.0.pdf) - A comprehensive guide to pricing schemes, their psychological effects, and their impact on revenue models.

- [Business Model Patterns](https://reasonstreet.co/business-model-library/) - A list of 15 different ways to sell products and services.

- [Axial - Business models](https://archive.ph/BFsZ1) - 38 models for inspiration.

- [The Network Monetization Map: Aligning Incentives with Revenue](https://web.archive.org/web/20201222120055/https://medium.com/breadcrumb/the-network-monetization-map-aligning-incentives-with-revenue-b73c362d1ad5) - 6 models of monetization relying on network effect.

- [The 5 Pillars of PriceOps](https://web.archive.org/web/20260124084716/https://priceops.org/) - A DevOps-inspired manifesto that treats pricing as a responsive, iterative process and a flexible property of the system, rather than an inflexible configuration.

- [SaaS pricing explorer](https://saaspricingexplorer.hyperline.co) - A collection of 1,000+ pricing pages for inspiration.

### Usage-based Pricing

Usage-based pricing adapts charges to the consumption of elastic resources.

- [Credyt](https://credyt.ai/?utm_source=awesome-billing&utm_medium=referral&utm_campaign=awesome-billing-oss-sponsorship) - Real-time monetization infrastructure for AI products: meter usage, charge from prepaid balances, and ship a branded customer portal without writing frontend code. Commercial SaaS.

- [Why I Love Usage-Based Pricing](https://www.rdegges.com/2020/the-only-type-of-api-services-ill-use/) - The author argues that usage-based pricing aligns the incentives of customers and service providers with everyone’s interests, and discusses problems with other pricing models.

- [Use-cases for cloud services](https://news.ycombinator.com/item?id=19830022) - A discussion of cloud ROI that recommends keeping regular workloads on traditional infrastructure and reserving cloud computing for elastic and experimental projects.

- [Socially Optimal Pricing of Cloud Computing Resources](https://webee.technion.ac.il/people/shimkin/PAPERS/Menache-CloudPricing-Conf2011.pdf) - A paper arguing that the socially optimal operating point is unique and can be sustained by a linear usage-based tariff charging a fixed price per unit of resource and per unit of time.

- [A Survey of Profit Optimization Techniques for Cloud Providers](http://www.cs.newpaltz.edu/~lik/publications/Peijin-Cong-ACM-CS-a-2020.pdf) - A survey that first discusses strategies to improve service quality, then cloud-resource pricing strategies to maximize revenue.

- “Billing is not complex on purpose: it's the price to pay for elasticity.” ([source](https://x.com/kdeldycke/status/1214160678363246592)) — The list’s author notes that utility pricing, while accurate to the cent or milli-cent, can frustrate customers who are not prepared to spend time understanding its underlying concepts.

- [Riemann sum](https://en.wikipedia.org/wiki/Riemann_sum) - A starting point for understanding the quantization of usage.

- [Allen's interval algebra](https://en.wikipedia.org/wiki/Allen%27s_interval_algebra) - Interval algebra for organizing the temporal reasoning needed to implement usage-based pricing. Also see this [Stack Overflow question with a clear schema](https://web.archive.org/web/20240413010618/https://stackoverflow.com/questions/12069082/allens-interval-algebra-operations-in-sql?rq=1).

- [Reconcile Your Monthly GCP Invoice with BigQuery Billing Export](https://web.archive.org/web/20201107232605/https://medium.com/@lukwam/reconcile-your-monthly-gcp-invoice-with-bigquery-billing-export-b36ae0c961e) - A developer’s attempt to track cloud expenses illustrates the difficulty of reconciling billing. The list’s author points to quantization, granularity, and rounding across space, time, and currencies as underlying difficulties, though the article does not explicitly identify them.

- [AWS EC2 T2 Instances Demystified: Don't Learn The Hard Way](https://roberttisdale.com/aws-ec2-t2-instances-demystified-dont-learn-hard-way/) - An example of the complexity of burstable instances that accumulate CPU credits and impose limits on them.

- [“Designing billing for a service can be really challenging”](https://news.ycombinator.com/item?id=23536919) - Personal anecdote on the design of the pricing plan for AWS Simple Email Service.

- [Subscription-based pricing is dead: Smart SaaS companies are shifting to usage-based models](https://techcrunch.com/2021/01/29/subscription-based-pricing-is-dead-smart-saas-companies-are-shifting-to-usage-based-models/) - An argument for usage-based pricing as a more efficient and fairer model that lowers entry costs and friction while retaining the ability to monetize customers over time.

- [Electropedia: Tariffs for electricity](https://www.electropedia.org/iev/iev.nsf/index?openform=&part=691) - A detailed multilingual taxonomy of electricity tariffs from the International Electrotechnical Commission, providing vocabulary for a metered resource that predates cloud computing.

- [Lago](https://github.com/getlago/lago) - Commercial offering. Open-source metering & usage-based billing in Ruby. Lago SAS sells a hosted Cloud and Premium add-ons on top of the AGPL core.

- [StripeMeter](https://github.com/geminimir/stripemeter) - Free resource. Open-source, Stripe-native usage metering in TypeScript. Reconciles computed usage against Stripe invoices for “pre-invoice parity”, with exactly-once processing and real-time cost projections.

- [CGRateS](https://github.com/cgrates/cgrates) - Free resource. A fast, scalable real-time billing system for ISPs and telecom operators, written in Go. Supports 50k+ CPS, load balancing, and replication. Open-source and vendor-neutral, with a commercial model based only on support.

### Subscription Plans

Subscription plans are common in SaaS businesses and offer a straightforward pricing structure.

- [Pricing low-touch SaaS](https://stripe.com/en-in/atlas/guides/saas-pricing) - In low-touch SaaS, plans are commonly shown as columns in a pricing grid, with different prices, feature access, or maximum usage along an axis relevant to the business.

- [Lotus](https://github.com/uselotus/lotus) - Free resource. Open-source pricing and packaging infrastructure. Lotus Inc. sells only managed hosting on top of the MIT-licensed core.

- [`f-license`](https://github.com/furkansenharputlu/f-license) - Free resource. Open-source license key generation and verification tool in Go. Solo-maintainer project, no commercial offering.

### Hybrid

Less common pricing schemes that combine different charging components.

- [The Three Part Tariff](https://tomtunguz.com/three-part-tariffs/) - A discussion of three-part tariffs: pricing structures that add platform fees and free tiers to linear usage pricing.

### Strategy

Theory and practical guidance for choosing pricing tactics.

- "There are two ways to make money. You can bundle, or you can unbundle." - [Jim Barksdale](https://hbr.org/podcast/2014/07/marc-andreessen-and-jim-barksdale-on-how-to-make-money.html#:~:text=in%20business%2C%20there%20are%20two%20ways%20to%20make%20money.%20You%20can%20bundle%2C%20or%20you%20can%20unbundle.).

- [Pricing Psychology](https://www.nickkolenda.com/psychological-pricing-strategies/) - A guide with 42 pricing techniques, covering which numbers to use, how high to set prices, and whether to round them.

- [The 7 factors to consider when pricing your startup product](https://tomtunguz.com/how-to-price-your-startups-product/) - A discussion of seven factors in pricing, treating price as a way to reinforce product value and the company’s core marketing message.

- [The Anatomy of SaaS Pricing Strategy](https://sbigrowth.com/hubfs/SBI_PI_AnatomyofSaaSPricingStrategy_Handbook.pdf) - How to develop a SaaS pricing strategy around the product strategy.

- [The cup-of-coffee pricing fallacy](https://blog.gingerlime.com/2020/the-cup-of-coffee-pricing-fallacy/) - Why comparing a product’s price to the price of a cup of coffee is a misleading analogy.

- [Changing the Pricing Model](https://monkeynoodle.org/2024/02/10/changing-the-pricing-model/) - Several ways to relicense a product when changing its pricing model.

### Market Research

Survey methods and price-discovery techniques for identifying a suitable price point.

- [Jeremy Howard - From Predictive Modelling to Optimization](https://youtu.be/vYrWTDxoeGg?t=542) - A talk on moving from predictive modeling to optimization. Using insurance, where the price is the product, Howard explains how to optimize prices for profit and deliver an outcome—an optimal customer price—instead of the risk estimate traditionally supplied by actuaries.

- [Gabor–Granger method](https://en.wikipedia.org/wiki/Gabor%E2%80%93Granger_method) - A survey method for determining the price of a new product or service. Its results can be used to produce a demand chart and a revenue curve.

- [Van Westendorp's Price Sensitivity Meter](https://en.wikipedia.org/wiki/Van_Westendorp%27s_Price_Sensitivity_Meter) - A market-research method for determining consumers’ price preferences. The source describes using the resulting revenue curve to estimate the price point with maximum revenue.

- [Pricing niche products](https://kevinlynagh.com/notes/pricing-niche-products/) - An argument that simply choosing a price limits what you can learn about your market, followed by the author’s use of Vickrey auctions to discover prices.

- [Finding the max revenue price mark for digital products](https://web.archive.org/web/20260213003122/https://medium.com/@hovm/finding-the-max-revenue-price-mark-for-digital-products-24cef24f746d) - A method for testing several price points in the field, reconstructing the revenue curve, and locating its peak to find the revenue-maximizing price.

- [Personalised pricing and EU law](https://www.econstor.eu/bitstream/10419/205221/1/de-Streel-Jacques.pdf) - A study of personalized pricing and the cases prohibited by EU consumer-protection and data-protection rules.

## Product Catalog

A product catalog brings together the services, products, variants, options, and prices a customer can purchase. Cloud-service catalogs are often custom-built, but existing product-data or [product-information management](https://en.wikipedia.org/wiki/Product_information_management) systems may fit. The original list refers to these as PDM and PIM; the linked concept is Product Information Management (PIM).

- [GCP Product Catalog](https://cloud.google.com/blog/products/gcp/introducing-cloud-billing-catalog-api-gcp-pricing-in-real-time) - All GCP SKUs available as an API.

- [Pimcore](https://github.com/pimcore/pimcore) - Commercial offering. An open-source UI and database for managing product metadata, written with PHP and Symfony. Pimcore GmbH sells Enterprise Subscription, PaaS, and proprietary modules on top of the GPL/POCL core.

## Calculator

Simulate an invoice for the resources you plan to use.

- [Infracost](https://github.com/infracost/infracost) - Commercial offering. Cloud cost estimates from Terraform code, surfaced as a breakdown in the terminal or as a diff in pull requests before resources are provisioned. Infracost Inc. sells a hosted dashboard (Infracost Cloud) on top of the Apache-2.0 CLI.

- [Cloudorado](https://www.cloudorado.com) - Commercial offering. A cloud-comparison matrix using EC2 Compute Units (ECUs), a measure of relative CPU processing power. Operated by Cloudorado as a commercial cloud-comparison product.

- [EC2Instances.info](https://ec2instances.info) - Commercial offering. A comparison of Amazon EC2 instances, operated by Vantage as a free lead-generation site for its commercial FinOps platform.

## Cost Forecast

Help customers forecast future consumption from their past usage.

- [Forecasting: Principles and Practice](https://otexts.com/fpp2/) - A comprehensive introduction to forecasting methods, with enough detail to help readers use each method appropriately.

- [Transforming Financial Forecasting with Data Science and Machine Learning at Uber](https://web.archive.org/web/20221203184815/https://www.uber.com/blog/transforming-financial-forecasting-machine-learning/) - How Uber applies data science and machine learning to its financial-planning platforms.

- [Time Series Prediction - A short introduction for pragmatists](https://www.liip.ch/en/blog/time-series-prediction-a-short-comparison-of-best-practices) - An introduction to using time series to evaluate business problems.

- [`sktime`](https://github.com/alan-turing-institute/sktime) - Free resource. Python library for time-series machine learning, governed by the Alan Turing Institute. See the [forecasting tutorial](https://github.com/alan-turing-institute/sktime/blob/master/examples/01_forecasting.ipynb) and the [differences between sktime and the Prophet project](https://news.ycombinator.com/item?id=24543861).

- [Darts](https://github.com/unit8co/darts) - Free resource. A Python library for time-series forecasting and anomaly detection, stewarded by Unit8 SA, which sells only consulting around it, with no paid library tier. Wraps many models, including [Prophet](https://facebook.github.io/prophet/). Useful for experiments, but the [models expect](https://news.ycombinator.com/item?id=37665435) regularly spaced data and make assumptions about its shape.

- [Komiser](https://github.com/mlabouardy/komiser) - Commercial offering. An open-source tool for finding hidden costs, monitoring spending increases, and staying within budget through custom recommendations. Tailwarden sells a hosted SaaS on top.

- [GCP Cost Forecast](https://cloud.google.com//billing/docs/how-to/reports#cost-forecast) - An example of using a consumption trend line to forecast resource consumption.

- [How to save money on your AWS bill](https://threadreaderapp.com/thread/1091041507342086144.html) - “The biggest cost savings there are: 1. Turning things off that you're not using; 2. Then spot instances; 3. Then reserved instances.”

## Marketplace

The list defines a marketplace as a service connecting supply and demand through a financial transaction, distinguishing it from an aggregator or hub without payments.

- [Customized Regression Model for Airbnb Dynamic Pricing](https://www.kdd.org/kdd2018/accepted-papers/view/customized-regression-model-for-airbnb-dynamic-pricing) - A paper describing the dynamic-pricing model deployed at Airbnb.

- [Papers we love: Auctions and Bidding](https://github.com/papers-we-love/papers-we-love/tree/master/economics#auctions-and-bidding) - A collection of papers on bidding and auctions.

- [Vickrey auction](https://en.wikipedia.org/wiki/Vickrey_auction) - An [HN comment](https://news.ycombinator.com/item?id=19145391) suggests Vickrey auctions, similar to Google’s ad-auction mechanism, as a way to elicit maximum willingness to pay, arguing that simply asking people what they would pay rarely works.

- [19 Tactics to Solve the Chicken-or-Egg Problem and Grow Your Marketplace](https://www.nfx.com/post/19-marketplace-tactics-for-overcoming-the-chicken-or-egg-problem) - “Which comes first, the supply or the demand? Chicken or egg?”

- How to Kickstart and Scale a Marketplace Business: [Constrain the marketplace](https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-marketplace), choose which side to focus on, drive initial supply, and drive initial demand. A four-part series based on dozens of interviews with people experienced in building and scaling marketplaces.

- [A Rake Too Far: Optimal Platform Pricing Strategy](https://abovethecrowd.com/2013/04/18/a-rake-too-far-optimal-platformpricing-strategy/) - A discussion of platform commissions. In a casino, the rake is the house’s commission for operating a poker game; many other terms describe the same practice of retaining a portion of the revenue for the company running a service.

### Cloud Resources

Bid/ask mechanisms that match resource producers with consumers. The list describes these as often one-sided markets in which a large platform seeks to monetize underused inventory.

- [Incentive Engineering for Computational Resource Management](https://papers.agoric.com/assets/pdf/papers/incentive-engineering-for-computational-resource-management.pdf) - A paper on allocating processor time and storage through mechanisms compatible with both programming practice and markets.

- [Pricing of Service in Clouds: Optimal Response and Strategic Interactions](http://www.sigmetrics.org/mama/2013/abstracts2013/UrgaonkarEtAl.pdf) - A paper on how consumers can adjust demand to optimize profits and how providers and consumers can negotiate pricing structures. Covers nonlinear models, tiered pricing, elastic demand, and the strategies of both sides.

- [History of Spot Instances](https://spot.rackspace.com/blogs/history-of-spot-instances) - A history from AWS’s auction-based spot market in 2009–2017 to provider-managed pricing at major clouds, describing how transparent bidding gave way to opaque algorithms.

- [Dynamic Cloud Pricing for Revenue Maximization](https://henryhxu.github.io/share/hxu-tcc2013.pdf) - A paper arguing that the narrow fluctuations in Amazon’s spot prices are more likely to reflect an algorithm with a predetermined reserve price than market supply and demand.

- [Usage Patterns and the Economics of the Public Cloud](https://mc4f.ee/Papers/PDF/EconPublicCloud.pdf) - A study of cloud-computing supply and demand that explains the prevalence of fixed prices at the time. It examines CPU utilization and argues that demand fluctuations comparable to hotels, electricity, or airlines would make dynamic pricing essential for efficiency.

- [Maximizing Profit of Cloud Brokers under Quantized Billing Cycles: a Dynamic Pricing Strategy based on Ski-Rental Problem](https://arxiv.org/pdf/1507.02545.pdf) - A dynamic-pricing strategy that uses price signals to regulate demand under quantized billing cycles. The paper acknowledges a possible cost to users: tasks may be pushed out of the queue to maximize the cloud broker’s profit.

- [Present or Future: Optimal Pricing for Spot Instances](https://web.archive.org/web/20150708151037/http://www.temple.edu/cis/icdcs2013/data/5000a410.pdf) - A paper arguing that spot-resource pricing should account for its effects in both the present and the future.

- “You always pay the spot market price, not your bid.” ([source](https://news.ycombinator.com/item?id=20347716)) — A short explanation of the historical bidding mechanism.

- [Deconstructing Amazon EC2 Spot Instance Pricing](https://dants.github.io/papers/Spotprice11CloudCom.pdf) - An analysis of the original EC2 spot-market model, in which customers bid on spare capacity and receive resources while their bids exceed a periodically changing spot price. Describes how a provider can monetize otherwise unused capacity.

- [GCP Preemptible VMs vs AWS Spot Instances](https://news.ycombinator.com/item?id=9564287) - A historical discussion comparing Google’s fixed preemptible-VM prices with AWS’s market model.

- “Look at the 3-month spot price history to estimate cost and to discover combinations of availability zone and instance type with extra capacity.” ([source](https://news.ycombinator.com/item?id=16071684)) - Users are seeking more transparency on the spot market.

- [The Eternal Cost Savings Of Netflix's Internal Spot Market](http://highscalability.com/blog/2017/12/4/the-eternal-cost-savings-of-netflixs-internal-spot-market.html) - When operating at sufficient scale makes an [internal secondary market for instances](https://web.archive.org/web/20200101000000/https://medium.com/netflix-techblog/creating-your-own-ec2-spot-market-6dd001875f5) economically worthwhile.

### Online Ads

Targeted-advertising markets share concepts and technology with cloud-resource markets, offering useful design ideas.

- [RTB Budget Pacing Summarized](https://github.com/PragmaticLab/RTB_Budget_Pacing_Summarized) - A reading list distilling research papers from Turn Inc., Yahoo, and LinkedIn on RTB budget pacing techniques. Static resource: dated but still a useful entry point into the literature.

- [Samsung's online ads platform/exchange war story](https://github.com/eloraiby/fs-pacer/blob/master/fs-pacer.md) - An account of scaling an advertising exchange to 5 million bid requests per second, with a maximum response time of 2 milliseconds.

- [`RTB4Free`](https://github.com/RTB4FREE) - Free resource. An Apache-2.0-licensed, OpenRTB 2.0-compliant bidder and demand-side platform (DSP). The recorded source describes it as largely dormant since late 2022, but the only open-source DSP reference in this niche.

## Accounting

- “The Accounting department is usually backwards facing. The Finance department is usually forwards facing.” ([source](https://news.ycombinator.com/item?id=25366184))

### Double-Entry Model

The list identifies double-entry accounting as the most important concept to understand when designing a reliable system that tracks money.

- [Accounting for Developers 101](https://docs.google.com/document/d/1HDLRa6vKpclO1JtxbGB5NeAYWf8cf1UMGy22o8OZZq4) - An introduction to accounting history and terminology.

- [Accounting for Computer Scientists](https://martin.kleppmann.com/2011/03/07/accounting-for-computer-scientists.html) - How to model accounting as a graph of money flows and represent those movements in a small company’s financial statements.

- [The Double-Entry Counting Method](https://web.archive.org/web/20260306094438/https://beancount.github.io/docs/the_double_entry_counting_method.html) - A more detailed treatment of the graph-based approach above, including reporting and implementation.

- [Accounting Memento For Entrepreneurs (US GAAP)](https://www.odoo.com/documentation/functional/accounting.html) - An interactive form for exploring accounting concepts.

### Bookkeeping

The daily practices needed to keep accounting records clean and consistent.

- [So, you want to learn Bookkeeping!](https://www.dwmbeancounter.com/BCTutorials/BCIntro/index.html) - The daily work of recording and maintaining a business’s transactions.

- [Reconciliation: A game designed to frustrate the player](https://bam.kalzumeus.com/archive/a-game-that-intentionally-frustrates-the-player/) - A discussion of reconciliation as a consequence of missing structured data in the pipelines that transfer money between businesses. Suggests techniques such as arbitrary discounts producing unique trailing decimals and virtual bank accounts used as proxies.

- [Plain text accounting tools](https://plaintextaccounting.org/#software) - A list of open-source personal-finance tools that can provide implementation ideas for double-entry accounting and bookkeeping.

- Free resources. Community-maintained graphical accounting tools without paid editions: [GNUCash](https://gnucash.org) (GTK+), [Grisbi](https://grisbi.org) (C), and [Firefly III](https://firefly-iii.org) (PHP).

- [GnuCash Tutorial and Concepts Guide](https://www.gnucash.org/docs/v2.4/C/gnucash-guide/) - A tutorial on tracking personal finances with GnuCash.

- [Frappe Books](https://github.com/frappe/books) - Free resource. Desktop bookkeeping software for small businesses and freelancers, with no paid edition.

- [Luca](https://github.com/brandon-rhodes/luca) - Free resource. YAML accounting and JSON tax forms, solo-maintained.

- [Go DB Ledger](https://github.com/darcys22/godbledger) - Free resource. An open-source accounting system designed to make recording double-entry transactions programmable.

- [Formance Ledger](https://github.com/formancehq/ledger) - Commercial offering. A standalone MIT-licensed programmable double-entry ledger with the Numscript DSL, multi-currency support, a REST API, and Docker deployment. Formance sells Enterprise add-ons (Wallets, Flows, Reconciliation, pre-built connectors, SSO, RBAC, audit logs) on top, but the core ledger is fully functional in OSS.

### Software design and implementation

Resources for implementing accounting concepts and practices in software.

- [Moonpig: a billing system that doesn't suck](https://blog.plover.com/prog/Moonpig.html) - Billing and accounting design decisions covering payment by check, avoiding floating-point amounts, complex customer workflows, date and time problems, and mutable data.

- [Books, an immutable double-entry accounting database service](https://developer.squareup.com/blog/books-an-immutable-double-entry-accounting-database-service/) - The basic data model of Square’s internal immutable double-entry accounting service, built on Google Spanner.

- [TigerBeetle](https://github.com/tigerbeetle/tigerbeetle) - Free resource. A distributed financial-accounting database designed to ensure that money either moves or does not move, without being lost between the two states. All features are in the Apache-2.0 open-source repository; TigerBeetle Inc. sells managed hosting and support rather than gated features. [Jepsen tested](https://jepsen.io/analyses/tigerbeetle-0.16.11) its strong serializability.

- [Django Hordak](https://github.com/adamcharnock/django-hordak) - Free resource. Core double-entry accounting functionality for Django, provided as a single-maintainer MIT-licensed library.

- [Managed accounts for Django](https://github.com/django-oscar/django-oscar-accounts) - Free resource. A community-maintained django-oscar extension for managed accounts: allocations of money that can be debited and credited.

- [Triple‐entry accounting with Blockchain: How far have we come?](https://sci-hub.st/10.1111/acfi.12556) - A paper arguing that triple-entry accounting is a newer, more efficient way to address trust and transparency problems, and that combining it with blockchain can fundamentally improve accounting when properly implemented.

### Currencies

Accounting systems for global businesses need to handle multiple local currencies.

- [Tutorial on multiple currency accounting](https://www.mathstat.dal.ca/~selinger/accounting/tutorial.html) - A guide to implementing multi-currency accounting systems.

## Finance

Once accounts are in order, financial data can provide business insights and metrics.

- [Accounts Demystified: The Astonishingly Simple Guide To Accounting](https://openlibrary.org/isbn/0273744704) - How to analyze and monitor a company’s financial performance.

- [The Games People Play With Cash Flow](https://commoncog.com/blog/cash-flow-games/) - An article beginning with Malone’s use of EBITDA—earnings before interest, taxes, depreciation, and amortization—to understand a cable company’s cash flow, in a manner similar to real-estate businesses. It then explores other cash-flow strategies for SaaS models.

- [Financial Intelligence for Entrepreneurs: What You Really Need to Know About the Numbers](https://openlibrary.org/isbn/1422119157) - How to understand and use financial data to make business decisions.

- [What is FinOps](https://www.finops.org/introduction/what-is-finops/) - A framework that gives technology-finance and business-leadership teams a shared language and processes for cloud operations and management.

- [Algebraic Models for Accounting Systems](https://openlibrary.org/isbn/9814287113) - Advanced abstract algebra applied to the analysis of accounting systems.

## Contracts

The contract between a customer and a service provider sets out invoicing terms and conditions and supplies the rules for the billing cycle.

- [Is this what Enterprise mean?](https://threadreaderapp.com/thread/1389946268764475394.html) - How mismatched contracts, invoices, and payments can alienate enterprise customers. Also see the HN discussion of [bulk license purchases](https://news.ycombinator.com/item?id=27053246).

- [Entitlements untangled: The modern way to software monetization](https://www.stigg.io/blog-posts/entitlements-untangled-the-modern-way-to-software-monetization) - An explanation of entitlements as the feature-access settings for product variants, pricing plans, or packages. They connect how a product is sold with how it behaves, defining what paying and nonpaying customers are allowed to do.

- [CUDs vs. Commit Contracts vs. SUDs in Google Cloud](https://66degrees.com/insights/comparing-cuds-suds-and-commits-in-google-cloud) - The differences between GCP discount types and usage commitments.

- [Quantity discounts on a virtual good: The results of a massive pricing experiment](https://sci-hub.st/https://www.pnas.org/doi/pdf/10.1073/pnas.1510501113) - A pricing experiment that found little positive or negative effect on revenue from discounts of 9–70% for large purchases. The list’s author asks whether widespread discounts may act as a marketing device to attract large customers, even when their measured effect is small.

- A commenter recalls giving Google Ads a lump sum to run until the budget was exhausted ([source](https://news.ycombinator.com/item?id=36325785)). The list’s author describes this former capped-actuals arrangement as a monthly budget with rollover that reduced billing surprises, and likens it to selling quotas.

## Coupons and Vouchers

- [Raising Prices is Hard](https://www.backblaze.com/blog/raising-prices-is-hard/) - Backblaze’s account of raising the price of its main offering. A planned extension program based on credits became a six-month project requiring several of its most senior engineers to work full time.

- [Details on Expiring DigitalOcean Credits](https://blog.digitalocean.com/details-on-expiring-digitalocean-credits/) - Why credits need expiry dates: unused credits appear as liabilities on the balance sheet.

- [Hacking Scooters: How I Created \$100k Worth Of Free Rides](https://fant.io/p/hacking-voi/) - A cautionary account of exploiting promotional codes to obtain unlimited free scooter rides.

- [China’s Pinduoduo reports theft of online discount vouchers to police](https://web.archive.org/web/20230404113232/https://www.reuters.com/article/us-pinduoduo-china/chinas-pinduoduo-reports-theft-of-online-discount-vouchers-to-police-idUSKCN1PE05J) - A report of an online group exploiting a platform loophole to steal tens of millions of yuan in discount vouchers.

- [Council Directive 2016/1065 as regards the treatment of vouchers](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016L1065) - An EU directive on applying VAT to vouchers.

- [The coupon code is a slap in the face](https://justinjackson.ca/the-coupon-code-is-a-slap-in-the-face) - The negative effects of showing a blank coupon field to users who do not have a coupon. The article’s update includes research supporting the initial anecdote.

## Taxes

- [2017 Tax Software Developer's Guides](https://web.archive.org/web/20240227073911/https://www.mass.gov/lists/2017-tax-software-developers-guides) - Test cases for developers testing tax software, from the 2017 developer guides.

- [{Digital,Cloud,Electronic,Online} Services VAT Rate Database](https://github.com/kdeldycke/vat-rates) - Free resource. A database of VAT rates applicable to foreign online services by customers’ country of residence, including territorial exceptions.

- [Global VAT & GST on digital services](https://www.avalara.com/vatlive/en/global-vat-gst-on-e-services.html) - Countries requiring taxes to be applied to foreign-provided online services.

- A commenter describes British supermarkets charging a card-processing fee while subtracting the same amount from the checkout price ([source](https://news.ycombinator.com/item?id=22047028)). The list links this practice to [claiming VAT on processing fees as input tax](https://www.gov.uk/guidance/vat-guide-notice-700#section4).

- [Streamlined Sales Tax Governing Board](https://www.streamlinedsalestax.org/about-us/about-sstgb) - A multistate US initiative to automate and standardize sales-tax accounting and collection.

### European VAT

- [How to correctly setup SaaS subscriptions to charge VAT in Europe](https://web.archive.org/web/20260220184109/https://medium.com/slight-pause/how-to-setup-saas-subscriptions-correctly-to-charge-vat-in-europe-d75d857b5d01) - An account of configuring SaaS subscriptions to charge VAT in Europe, warning that a simple Stripe integration may not be sufficient.

- [Council Directive 2006/112/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L:2006:347:FULL) - The EU directive establishing the common system of VAT.

- [What does the "Reverse Charge" refer to?](https://news.ycombinator.com/item?id=8767388) - A discussion of reverse charge, where the customer takes responsibility for handling VAT instead of the supplier.

## Invoice

An invoice records a consumed service or purchased product awaiting settlement through a payment transaction.

- [On GCP invoiced billing](https://news.ycombinator.com/item?id=17517479) - A discussion of [invoiced billing](https://cloud.google.com/billing/docs/how-to/invoiced-billing), a B2B-friendly arrangement in which payment follows consumption and issuance of an invoice. The list’s author suspects GCP’s setup complexity is intended to reduce costly fraud.

### Structure

- [Content of EU invoices](https://web.archive.org/web/20260128155309/https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ%3AL%3A2006%3A347%3AFULL) - The information required on EU invoices under Article 226, Section 4 (Content of invoices), of Council Directive 2006/112/EC.

### Integrity

The list treats an issued invoice as immutable: adjustments should preserve the original record.

- [Digital signatures: how Sleek leverages Cloud HSM to guarantee the integrity of legal documents](https://web.archive.org/web/20260113213039/https://medium.com/google-developers/digital-signatures-how-sleek-leverages-cloud-hsm-to-guarantee-the-integrity-of-legal-documents-a7bd3b82faf6) - How Sleek uses GCP Cloud HSM to digitally sign documents and create an immutable audit trail, with potential applications to invoices and contracts.

- [OpenTimestamps](https://opentimestamps.org) - A way to timestamp immutable documents directly on Bitcoin’s blockchain.

- [Credit note](https://en.wikipedia.org/wiki/Credit_note) - The list presents a credit note as the only way to fully or partially cancel an invoice while preserving the original invoice’s immutability.

### Generators

- [Invoice Builder](https://github.com/piratuks/invoice-builder) - Free resource. Offline-first desktop app to create, manage and export invoices and quotes to PDF, with all data kept in a local database you own.

- [InvoicePlane](https://github.com/InvoicePlane/InvoicePlane) - Free resource. A self-hosted open-source application for managing your invoices, clients and payments. Community project, no paid edition.

- [klirr](https://github.com/sajjon/klirr) - Free resource. A zero-maintenance FOSS command-line tool for generating invoices for services and expenses.

- [InvoiceGenerator](https://github.com/by-cx/InvoiceGenerator) - Free resource. Python library to generate simple invoices.

- [microinvoice](https://github.com/baptistejamin/node-microinvoice) - Free resource. Fast Node.js library to generate PDF invoices with PDFKit, no headless browser required.

- [Ruby Invoicing Framework](https://github.com/code-mancers/invoicing) - Free resource. A framework for generating and displaying invoices in commercial Rails applications, with flexible business logic and tools for taxes and commission calculations.

### Extractors

- [InvoiceNet](https://github.com/naiveHobo/InvoiceNet) - Free resource. Deep neural networks for extracting information from invoice documents.

### Electronic invoices

- [Invoice Security Vulnerabilities](https://invoice.secvuln.info) - An examination of security vulnerabilities in the EU’s XML-based electronic-invoicing standard.

- [EU eInvoicing](https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+HUB) - The European standard for electronic invoicing.

- [Factur-X](https://github.com/akretion/factur-x) - Free resource. Python library to support the e-invoicing standard for France and Germany.

- [Universal Business Language](https://en.wikipedia.org/wiki/Universal_Business_Language) - An XML document language that most invoicing software can read and write for data transfer, according to the list.

- [GOBL](https://github.com/invopop/gobl) - Commercial offering. A JSON Schema, open-source Go library, global tax database, and conversion tools in one package. Invopop sells a managed e-invoicing SaaS implementation on top of the open spec.

## Payments

- [The Best Payment Gateway for Startups](https://web.archive.org/web/20230204235716/http://aynuriev.com/best-payment-gateway-startups/) - A comparison of payment providers, their pricing, and their models.

- [Avoiding Double Payments in a Distributed Payments System](https://web.archive.org/web/20260516074518/https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb) - How to avoid duplicate payments in a distributed system. The discussion contrasts the transaction support of relational databases developed for banking with the care required when implementing payments using NoSQL systems.

- [Monzo's bank transfers post-mortem](https://monzo.com/blog/2019/06/20/why-bank-transfers-failed-on-30th-may-2019/) - Monzo’s incident report on failed bank transfers, illustrating the need to prepare for payment-gateway outages.

- [How to Build an Insurance Company](https://www.moderntreasury.com/journal/how-to-build-an-insurance-company) - The importance of payment-operations architecture.

- [EU's Late Payment Directive](https://single-market-economy.ec.europa.eu/smes/sme-strategy/late-payment-directive_en) - European rules on applicable fees for late payments.

- [High failure rate of Point Of Sale devices in the upper Midwest](https://news.ycombinator.com/item?id=20043944) - An account of point-of-sale failures caused by static electricity from wool clothing in low-humidity conditions.

- How ACH works: A developer perspective, [part 1](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-1-339d3e7bea1), [part 2](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-2-7a890638c4dd), [part 3](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-3-cd98728cf31f), [part 4](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-4-718a48cb8d2c), [part 5](https://web.archive.org/web/20200101000000/https://engineering.gusto.com/how-ach-works-a-developer-perspective-part-5-1d998bbcd82c).

- [Handling system failures during payment communication](https://blogs.dropbox.com/tech/2017/09/handling-system-failures-during-payment-communication/) - Dropbox’s experience handling failures in communication with an unreliable payment provider.

- [Why was I charged?](https://wpchrg.wordpress.com) - A dedicated WordPress site explaining unexpected payment transactions. Its URL was placed directly on bank statements to help address repeated customer complaints.

- [Hyperswitch](https://github.com/juspay/hyperswitch) - Commercial offering. An open-source payment-processing backend. Juspay sells Hyperswitch Cloud and a self-hosted Enterprise edition; the open-source version is functionally complete, with 90+ connectors, a vault, routing, 3DS, and fraud orchestration.

- [Polar](https://github.com/polarsource/polar) - Commercial offering. An open-source monetization platform for selling SaaS and digital products. Polar Software Inc. operates polar.sh as a merchant of record, handling billing, sales tax, and VAT remittance in return for a share of each transaction. The self-hostable open-source version provides checkout, subscriptions, usage metering, and license keys on top of your own Stripe account.

- [moov](https://github.com/moov-io) - Free resource. Suite of Apache-2.0 libraries for financial technology, including [`moov-io/ach`](https://github.com/moov-io/ach), [`iso8583`](https://github.com/moov-io/iso8583), and [`watchman`](https://github.com/moov-io/watchman). No paid product on top.

- [Fintech Open Source Foundation](https://github.com/finos) - Free resource. Linux Foundation project hosting open-source projects for financial services.

### Receipt

A receipt records the payment transaction.

- [The humble receipt gets a brilliant redesign](https://susielu.com/data-viz/reviziting-the-receipt) - A redesign of receipts by a Netflix data engineer.

- [The long, long history of long, long CVS receipts](https://www.vox.com/the-goods/2018/10/10/17956950/why-are-cvs-pharmacy-receipts-so-long) - “CVS is a drugstore much like other drugstores, with one important difference: The receipts are very long.”

### Credit Cards

The list describes credit cards as the most popular payment instrument.

- ['Is that even legal?': Companies may be sharing new credit or debit card information without you knowing](https://www.cbc.ca/news/business/banking-information-shared-with-third-parties-1.5102931) - An account of credit- and debit-card updating services that share replacement account numbers and expiry dates with merchants. Visa calls its implementation [VAU](https://developer.visa.com/capabilities/vau); Mastercard calls its implementation [ABU](https://developer.mastercard.com/product/automatic-billing-updater-abu/).

- [Strong Customer Authentication](https://stripe.com/guides/strong-customer-authentication) - [Payment Services Directive](https://en.wikipedia.org/wiki/Payment_Services_Directive) 2, explained.

- [Address Verification System](https://en.wikipedia.org/wiki/Address_Verification_System) - A system for checking whether a customer’s billing address matches the address associated with the credit card.

### Bank Accounts

Payments through bank accounts and transfers.

- [A (shallow) dive into the American banking system](https://blog.yossarian.net/2019/12/25/A-shallow-dive-into-the-American-banking-system) - Notes on the American banking system, focusing on commonly routable checking and savings accounts.

- [Open IBAN](https://openiban.com) - Free resource. Free and public IBAN validation and calculation webservice.

- [Swift Codes](https://bank.codes/swift-code/) - Swift / BIC codes for personal use only.

- [Swift Codes Repository](https://github.com/PeterNotenboom/SwiftCodes) - Free resource. A static JSON dataset of worldwide SWIFT/BIC codes, scraped from the site above and last refreshed in 2019. The recorded source describes it as the largest free reference and argues that it remains broadly usable because SWIFT codes change slowly.

- [EPC QR code](https://en.wikipedia.org/wiki/EPC_QR_code) - A European standard for QR codes used to transfer money between bank accounts through SEPA.

### Online Payments

Online money-transfer services and payment protocols.

- [UPI 101: The Basics](https://blog.setu.co/articles/upi-101-the-basics) - An introduction to India’s Unified Payments Interface. At the time of the article, the four-year-old scheme accounted for 40–45% of digital payments in India.

- [20 years of payment processing problems](https://kaimi.io/en/2022/07/20-years-of-payment-processing-problems-en/) - A collection of two decades of payment-API problems, with a warning that unresolved issues can lead to stolen money.

- [The untold story of Stripe](https://www.wired.co.uk/article/stripe-payments-apple-amazon-facebook) - An account of Stripe’s history that describes PayPal imposing a 21–60-day rolling reserve once a business reached a certain turnover, potentially locking up to 30% of revenue for up to two months.

- [Idempotency in the context of payments](https://developers.google.com/standard-payments/reference/idempotency) - Idempotency in payment requests: multiple identical requests from the same client should not produce a different final state. The reference discusses preventing race conditions.

- [Optimizing payments with machine learning](https://dropbox.tech/machine-learning/optimizing-payments-with-machine-learning) - A payment workflow and how machine learning can replace hard-coded rules, refine failure and retry handling, and increase charge-success rates.

## Fraud

Financial incentives attract attempts to exploit a business. These resources address fraud detection and prevention.

- [Detecting fraudulent activity in a cloud using privacy-friendly data aggregates](https://arxiv.org/pdf/1411.6721v1.pdf) - A method for detecting activities such as DDoS attacks or Bitcoin mining using nonintrusive, privacy-friendly aggregates from billing data.

- [Awesome List of IAM: Fraud links](https://github.com/kdeldycke/awesome-iam#fraud) - Fraud management related to user accounts, from the list’s companion IAM repository.

- [Driving Global Fraud Losses Down While Empowering Business Growth](https://youtu.be/yJKWpTBVTiI?t=60) - An Uber Eats talk noting that growth with declining fraud-loss rates is rare in the industry. Covers chargebacks on nonperishable goods, promotional abuse, and refunds.

- [KYC and AML: beyond the acronyms](https://www.bitsaboutmoney.com/archive/kyc-and-aml-beyond-the-acronyms/) - The nuances of KYC as a stochastic process for reducing risk.

- [Awesome Fraud Detection Research Papers](https://github.com/benedekrozemberczki/awesome-fraud-detection-papers) - Papers from multiple conferences on credit-card fraud, payment transactions, loans, customs inspections, money-laundering networks, and other fraud.

- [Tazama](https://github.com/tazama-lf) - Free resource. Open-source real-time transaction monitoring for fraud and money-laundering detection, governed by the Tazama Linux Foundation project. Provides an engine for defining rules, assigning weights, and applying them to transactions; the engine itself is not specific to payments or financial transactions.

- [Mojaloop Fraud Risk Management](https://github.com/mojaloop/fraud_risk_management/tree/master/typology-214/src/rules) - Free resource. Concrete AML rule implementations from the Mojaloop Foundation: transaction mirroring with a 90–100% amount-match window, multi-tier payee-graph traversal for layering detection, account-dormancy reactivation, large-transaction-payer, and new-payee-transfer. The repository is archived, but its rules remain static reference material described by the list as rare elsewhere in open source.

### Cards

The list states that most fraud exploits credit cards, which it describes as the most popular payment instrument.

- [Reproducible Machine Learning for Credit Card Fraud detection](https://fraud-detection-handbook.github.io/fraud-detection-handbook/) - A practical handbook on how to identify patterns in transactions.

- [How I Stopped a Credit Card Thief From Ripping Off 3,537 People – and Saved Our Nonprofit in the Process](https://www.freecodecamp.org/news/stopping-credit-card-fraud-and-saving-our-nonprofit/) - An account of card testing, in which large batches of stolen cards are checked for validity through a payment API.

- [How Candy Japan got credit card fraud somewhat under control](https://www.candyjapan.com/behind-the-scenes/how-i-got-credit-card-fraud-somewhat-under-control) - Suggestions for identifying potentially fraudulent orders through [warning signals](https://www.candyjapan.com/behind-the-scenes/fraudulent-transaction-warning-signs), or introducing countermeasures that make fraud harder.

- [Five Fun Fraud Facts](https://web.archive.org/web/20220327085654/https://blog.sift.com/2013/five-ecommerce-fraud-facts/) - Features for detecting fraud with machine learning, supplemented by HN discussions of [additional signals](https://news.ycombinator.com/item?id=6376350) and [geographic data derived from transactions](https://news.ycombinator.com/item?id=6376221).

- [Credit Card Fraud Detection using Autoencoders in Keras](https://web.archive.org/web/20200101000000/https://medium.com/@curiousily/credit-card-fraud-detection-using-autoencoders-in-keras-tensorflow-for-hackers-part-vii-20e0c85301bd) - A tutorial on using anomaly detection to identify suspicious credit-card transactions.

- [Training an ML model to score chargebacks](https://threadreaderapp.com/thread/1315452323330621440.html) - An example of using a platform’s network effects to predict the likelihood of winning a chargeback dispute.

- [How credit card thieves use free-to-play apps to launder gains](https://kromtech.com/blog/security-center/digital-laundry) - An account arguing that stronger credit-card verification and account creation are needed to prevent laundering through free-to-play apps.

### Trust Score

A score combining multiple signals can act as a proxy for a user’s trustworthiness. Customer-support teams may use it to decide on actions that are not triggered automatically.

- [GCP improved account management policies to better support customers](https://cloudplatform.googleblog.com/2018/07/improving-our-account-management-policies-to-better-support-customers.html) - An example of how excessive reliance on automated fraud controls can frustrate customers.

- [Digital Ocean's Update on Customer Shutdown Incident](https://blog.digitalocean.com/an-update-on-last-weeks-customer-shutdown-incident/) - DigitalOcean’s account of a customer-shutdown incident, illustrating the limits of aggressively stopping servers to prevent abuse of free resources.

- [Awesome Credit Modeling](https://github.com/mourarthur/awesome-credit-modeling#readme) - Statistical methods and research for classifying credit applicants by risk, offering ideas for improving general trust scores.

### Statistics

Statistical methods that can support automated fraud detection.

- [Benford's law](https://en.wikipedia.org/wiki/Benford's_law) - Digit distribution can be a signal of accounting fraud.

- [Integer percentages as electoral falsification fingerprints](https://arxiv.org/pdf/1410.6059.pdf) - A paper identifying unusually frequent round percentages in election results as possible signs of human-made anomalies, with potential applications to other forms of fraud detection.

- [Huber loss](https://en.wikipedia.org/wiki/Huber_loss) - “A loss function used in robust regression, that is less sensitive to outliers in data than the squared error loss.”

- [Peak Detection in the Python World](https://blog.ytotech.com/2015/11/01/findpeaks-in-python/) - Simple way to detect outliers.

- [Method to check if you swapped 2 digits](https://news.ycombinator.com/item?id=39021273) - A manual accounting technique for detecting an error caused by transposing two digits in a double-entry ledger.

### Billing

- [More than 600 million users installed Android 'fleeceware' apps from the Play Store](https://www.zdnet.com/article/more-than-600-million-users-installed-android-fleeceware-apps-from-the-play-store/) - A report on fleeceware: applications that continue charging users without their awareness after the trial period ends.

- [CEO Fraud](https://www.knowbe4.com/ceo-fraud) - Fraud targeting billing teams through CEO impersonation and instructions to make exceptional payments.

- [The Challenges of Operating a Computing Cloud and Charging for its Use](https://web.stanford.edu/class/cs349d/docs/theimer.pdf) - A presentation by an AWS vice president. The first 90% concerns general reliability; the last four slides summarize billing for cloud services, including soft quotas to limit fraud.

- [Fraud in Telephony Networks](http://www.s3.eurecom.fr/docs/eurosp17_sahin.pdf) - A paper on telephone-network fraud related to billing and metering small transactions. Page 6 provides a taxonomy distinguishing root causes, vulnerabilities, exploitation techniques, and how fraudsters benefit.

## UX/UI

Money-related problems can quickly frustrate users. Clear interfaces and interaction design can help reduce that frustration.

- [Apple In-app purchase Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/in-app-purchase) - Design guidance for user-friendly in-app purchases and [auto-renewable subscriptions](https://developer.apple.com/app-store/subscriptions/).

- [Which has a higher conversion rate: A single long ecommerce checkout form or a multi-step one?](https://capitalandgrowth.org/questions/2055/which-has-a-higher-conversion-rate-a-single-long-e.html) - An argument for first reducing checkout anxiety and second thoughts through reassurance, such as trust marks and testimonials near credit-card and completion steps, and guarantee language introduced earlier in product exploration.

- [We tried to make billing backendless](https://useautumn.com/blog/backendless) - An unsuccessful attempt to move the billing experience from the backend to the frontend, because of security concerns.

- [Pricing pages design](https://pricingpages.design) - A collection of pricing pages from various SaaS companies, to get inspiration on how to present your offers.

## Business Intelligence

Billing-pipeline teams handle critical data for measuring and reporting on the health of a business.

### Metrics

Definitions and collection of key performance indicators (KPIs) for monitoring a business.

- [Startup financial models - 12 templates compared for SaaS](https://www.stephnass.com/blog/startup-financial-model) - Twelve SaaS financial-model templates compared, providing ideas for gaining visibility into business operations.

- [16 Startup Metrics](https://a16z.com/16-startup-metrics/) - Sixteen startup metrics, highlighting customer acquisition cost (CAC) and customer lifetime value (CLV) as two critical measures.

- [Thinking about growth and profit](https://jlongster.com/thinking-growth-profit) - How investment, profit, and growth affect decisions about pricing, free trials, and plan structure.

- [A Quantitative Approach to Product Market Fit](https://tribecap.co/a-quantitative-approach-to-product-market-fit/) - How the business metrics above can also serve as signals for evaluating product-market fit.

- [Startup growth calculator](http://growth.tlb.org) - An interactive profitability calculator for startups.

- [An Overview of Visa](http://minesafetydisclosures.com/blog/2019/7/23/part-ll-an-overview-of-visa) - An analysis of Visa’s business model and metrics.

- [The SaaS Financial Model You'll Actually Use](https://web.archive.org/web/20230205234207/https://baremetrics.com/blog/saas-financial-model) - A tour of startup finances that places individual metrics in the broader financial picture.

### Customer Lifetime Value

Customer lifetime value (CLV, also called LTV) measures the value generated per customer. The list identifies understanding and acting on this measure as the most important part of a business’s sales efforts.

- [You're all calculating churn rates wrong](https://web.archive.org/web/20260204065339/https://medium.com/swlh/youre-all-calculating-churn-rates-wrong-cbab072cd992) - Why churn rate alone is not a meaningful measure for computing CLV when churn probability changes over a customer’s lifetime, often because of free trials or vouchers. Shows how the distribution used to model departure affects the result.

- [How to project customer retention](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Fader_hardie_jim_07.pdf) - A paper on customer-retention forecasts, with an approach using [a geometric model instead of exponential distributions](https://news.ycombinator.com/item?id=24833319). The former better fits discrete intervals such as monthly contracts; the latter is better suited to continuous-time processes.

- [Survival Analysis For Customer Retention](https://two-wrongs.com/survival-analysis-for-customer-retention.html) - Modeling retention with a survival function, including [Kaplan–Meier survival curves](https://two-wrongs.com/bootstrapping-kaplan-meier-confidence-intervals.html).

- [RFM (customer value)](https://en.wikipedia.org/wiki/RFM_%28customer_value%29) - A refinement of customer-value modeling that segments customers by recency, frequency, and monetary value.

- [Churn Prediction](https://towardsdatascience.com/customer-churn-prediction-with-text-and-interpretability-bd3d57af34b1/) - An introduction to predicting churn with XGBoost binary classification in Python, applying predictive methods to business actions.

- [PyMC-Marketing](https://github.com/pymc-labs/pymc-marketing) - Free resource. A full-featured Python package to analyze your users based on their "alive" and "dead" states. Apache-2.0 library stewarded by PyMC Labs, which only sells consulting services around it (no paid library tier).

### Data Engineering

Data engineers clean, persist, and consolidate data to support its production and consumption at scale. The list recommends establishing these foundations before bringing in data scientists.

- [AI vs Data Science vs Data Engineering](https://web.archive.org/web/20171009002725/https://blog.insightdatascience.com/how-emerging-ai-roles-fit-in-the-data-landscape-d4cd922c389b?gi=ebcf517502c7) - A comparison of data engineers, who build pipelines and infrastructure for transformed data; data scientists, who analyze and model that data for product features and business outcomes; and AI professionals, whose focus is cognitive automation.

- [Ten Ways Your Data Project is Going to Fail](https://www.martingoodson.com/ten-ways-your-data-project-is-going-to-fail/) - An argument for matching roles to the work: data engineers for ETL and BI analysts for reporting, rather than hiring data scientists for those tasks.

- [Cargo cult data science](http://blog.richardweiss.org/2017/07/25/data-science-in-organizations.html) - An argument that data science is a company culture, and that acquiring technologies alone does not create that culture.

- [Why not use Double or Float to represent currency?](https://web.archive.org/web/20250524184249/https://stackoverflow.com/questions/3730019/why-not-use-double-or-float-to-represent-currency/3730040#answer-3730040) - Why binary floating-point types cannot accurately represent the decimal amounts used for money.

- [Never Use Floats for Money](https://husobee.github.io/money/float/2016/09/23/never-use-floats-for-currency.html) - “This is precisely the problem we have when trying to represent 10^-1, or 0.1 in binary. There is not an exact binary representation of 0.1 or 0.01.”

- [The Soul of an Old Machine: Revisiting the Timeless von Neumann Architecture](https://ankush.dev/p/neumann_architecture) - A historical discussion of von Neumann’s doubts about floating-point arithmetic before EDVAC was built, illustrated with examples of precision and rounding problems.

- [European Spreadsheet Risks Interest Group - Horror Stories](https://eusprig.org/research-info/horror-stories/) - Cases where uncontrolled or untested spreadsheet models caused lost revenue, mispricing, poor decisions, fraud, and systemic financial failures.

### Tools

Software for visualizations, dashboards, SQL queries, and drilling down into data.

- [Practical Business Python](https://pbpython.com) - A blog about using Python effectively in business.

- [`redash`](https://github.com/getredash/redash) - Free resource. A tool for querying data sources, building dashboards, and sharing them within a company. Owned by Databricks; the hosted SaaS closed in 2021. The recorded source describes it as community-maintained within the Databricks organization, with no paid Redash product.

- [Apache Superset](https://github.com/apache/superset) - Free resource. Enterprise-ready business intelligence web application, governed by the Apache Software Foundation.

- [Meltano](https://github.com/meltano/meltano) - Free resource. A convention-over-configuration product for the full data lifecycle, from loading to analysis. Meltano sells only managed cloud hosting and support SLAs on top of its open-source core.

## Competitive Analysis

Resources for following companies and products in the billing domain.

- [Patents on billing systems of the dot-com era](https://news.ycombinator.com/item?id=34773821) - A discussion of dot-com-era billing-system patents. The commenter describes them as abandoned prior art and argues that their concepts can be implemented or commercialized.

- A Google product director’s view that assembling a billing platform requires a somewhat more sophisticated development team, with engineers suited to the domain ([source](https://www.techemails.com/i/124009734/google-pms-on-stripe)).

### Cloud providers

- [AWS Cost Management announcements](https://aws.amazon.com/about-aws/whats-new/aws-cost-management/) - Announcements of AWS billing and cost-management features.

- [AWS reserved instances vs saving plan](https://web.archive.org/web/20240602133657/https://www.prosperops.com/wp-content/uploads/2022/01/ris_and_savings_plans.png) - A feature matrix comparing AWS Reserved Instances and Savings Plans and their average discounts.

- [GCP billing release notes](https://cloud.google.com/billing/docs/release-notes) - Release notes for changes to GCP billing features.

- [GCP billing news](https://www.gcpweekly.com/gcp-resources/tag/billing/) - Billing news from an unofficial Google Cloud Platform newsletter.

- [More choice, less complexity: New Compute Engine pricing options on tap](https://cloud.google.com/blog/products/compute/more-choice-less-complexity-new-compute-engine-pricing-options-on-tap) - A roundup of GCP pricing options announced in the linked article.

- [Orbitera](https://en.wikipedia.org/wiki/Orbitera) - The GCP billing subsidiary described in the recorded source.

- [DigitalOcean Billing changelog](http://docs.digitalocean.com/release-notes/billing/) - DigitalOcean billing release notes.

## History

- A commenter recalls Larry Page’s use of the Michigan Terminal System at the University of Michigan and his encouragement for App Engine engineers to follow its example. The commenter describes a familiar resemblance in AWS and GCP bills ([source](https://news.ycombinator.com/item?id=35123587)).

- [Product Development as Iterated Taste](https://commoncog.com/product-development-iterated-taste/) - How AWS chose cost-following pricing for S3 instead of simpler subscription pricing because it did not know how customers would use the service.

- [Israel demanded Google and Amazon use secret 'wink' to sidestep legal orders](https://www.theguardian.com/us-news/2025/oct/29/google-amazon-israel-contract-secret-code#how-the-secret-code-works) - A report of invoices for random fees with coded amounts being used as hidden signals to bypass legal obligations. The list’s author uses it to illustrate the value of a flexible billing system.

- [£sd computing](https://en.wikipedia.org/wiki/%C2%A3sd#Computing) - The IBM 1401 mainframe, introduced in 1959, had optional hardware support for pounds, shillings, and pence (£sd) arithmetic.

- [Engineering and Operations in the Bell System](http://bitsavers.trailing-edge.com/communications/westernElectric/books/Engineering_and_Operations_in_the_Bell_System_2ed_1984.pdf) - Section 10.5, Billing Equipment and Systems, beginning on page 445, describes the history and technical evolution of telephone-call metering and pricing in the Bell System.

- [The vanished grandeur of accounting](https://www.bostonglobe.com/ideas/2014/06/07/the-vanished-grandeur-accounting/3zcbRBoPDNIryWyNYNMvbO/story.html) - An article on accounting paintings as a significant genre in Dutch art.

- [Graphic methods for presenting facts](https://archive.org/details/graphicmethodsfo00brinrich/page/336/mode/2up?view=theater&ui=embed&wrapper=false) - A 1914 example of using a physical model made of plaster of Paris to optimize pricing.

## Humour

The original list’s joke: billing is not funny.

- [Detax](https://detax.framer.website) - A mock website for a tax-avoidance product aimed at small businesses.
