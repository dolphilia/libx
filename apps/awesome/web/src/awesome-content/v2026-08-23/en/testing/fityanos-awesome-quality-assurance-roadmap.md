---
title: "Awesome Quality Assurance Roadmap"
description: "Quality assurance and software testing roadmap, test plan sample, testing approaches, automation tools, and practical advice."
licenseSource: "github-fityanos-awesome-quality-assurance-roadmap-readme-md"
---

# Awesome Quality Assurance Roadmap

Learn the foundations of quality assurance and software testing, then explore frontend, backend, and mobile automation. This roadmap includes a test plan sample, a learning path with tools and testing practices, and advice from the author.

## Introduction

Testing is part of a product’s life cycle, whether for food, cars, or software: outcomes should match expectations and meet the purpose for which the product was created. QA engineers need to understand how software components work together and develop the skills to exercise software in ways that can break it, finding unintended behavior and undesirable scenarios.

The learning path below is a starting point for QA and software testing. A separate [roadmap page](https://fityanos.github.io/anasfitiani/qaroadmap.html) is also linked by the source.

## Test Plan Sample

A test plan establishes criteria, a starting point, and when to perform different types of testing. Without it, a team risks working without a clear direction and delivering poor-quality code.

Sections and content vary with the project and delivery. The source offers a general-purpose PDF example for software testing; adapt it to the project’s needs.

[Download test_plan_sample.pdf](https://github.com/anas-qa/Quality-Assurance-Road-Map/blob/master/Test_Plan_Sample.pdf).

## The Road Map

The source labels the two diagrams “QA Engineer Road Map 2022”: [first diagram](https://i.imgur.com/cM9cM8T.png) and [second diagram](https://i.imgur.com/meodAKp.png). The tables below preserve their learning order and branches. Red means “high adoption” and blue means “personal preference” in the diagrams; these are the diagrams’ assessments, not current adoption measurements. Other entries have no such marker.

Abbreviations in the diagram: STLC — software testing life cycle; SDLC — software development life cycle; TDD — test-driven development; RPA — robotic process automation; UAT — user acceptance testing.

### Foundations and frontend automation

| Stage | Topics and tools |
| --- | --- |
| Testing approaches | White-box, gray-box, and black-box testing. |
| Testing types | Functional testing: UAT, exploratory, sanity, regression, smoke, unit, and integration testing. Non-functional testing: load, performance, stress, and security testing. |
| Test management | qTest, TestRail (personal preference), TestLink (high adoption), and Zephyr. |
| Project management | Atlassian (high adoption), with Jira and Confluence; Assembla, YouTrack, and Trello. |
| SDLC delivery models | Waterfall: hand-off approach. Agile: synchronized and iterative. V model: sequential. |
| Manual testing and TDD | Understand manual testing, then test-driven development. The diagram recommends developing against tests and use cases, and says clear acceptance criteria can improve productivity and reduce time and effort during regression rounds. |
| Test planning | Decide what to test, the delivery scope, the strategy, and how to carry it out. |
| Test cases and scenarios | Marked essential. Clearly written and documented cases form the basis of testing; the diagram presents covering all possibilities and releasing with greater confidence as the aim. |
| Reporting | Communicate QA and testing outputs clearly so stakeholders and managers can make decisions without conflicting interpretations. |
| Compatibility | Simulate different users’ behavior and capabilities across hardware and software components. |
| Verification and validation | Understand their differences and when to apply each: verification asks whether the product is being built in the right way; validation asks whether the right product is being built. |
| Automation paths | After understanding automation testing, consider mobile, backend, and frontend automation. The diagram then details frontend automation, followed by backend and mobile automation in the second image. |
| Frontend browser add-ons | Frontend testing covers browser UI. Add-ons: Selenium IDE, CodeCeption add-on, Ghost Inspector, Bug Magnet, and Check my links. |
| Frontend automation frameworks | qaWolf, Mocha.js, Webdriver IO (high adoption), Jasmine JS, a second Webdriver IO entry, Protractor JS, Nightwatch JS, CodeCeption, Robot, Jest, and Cypress.io (personal preference; labeled Selenium-less). |

### Backend, mobile, and supporting tools

| Stage | Topics and tools |
| --- | --- |
| Backend automation frameworks | Cypress.io (personal preference), Rest-Assured, Codeception, newMan, postMan, and SoapUI. |
| Mobile automation frameworks | Appium (high adoption), XCUITest and Espresso (personal preference), and Detox. |
| Non-functional testing: load and performance | JMeter (high adoption), Vegeta (personal preference), Gatling, and K6. Lighthouse is labeled a browser add-on; Webpage Test is also listed. |
| Supporting the technology stack: email listeners | Gmail Tester and mailinator. |
| Reporting | Mochawesome (personal preference), Testrail, Allure, and jUnit. |
| Monitoring and logs | Sentry, Kibana, RunScope (personal preference), Grafana, and Pager Duty. |
| CI and CD | Version control: GIT. Repository hosting: GitHub and BitBucket. GOCD and Jenkins. Terminal and command line: iTerm. |
| Additional headless testing tools | Zombie JS, Electron, Phantom JS, and PHP browser. The diagram ends by encouraging continued learning. |

## Advice<a id="advices"></a>

The author offers the following advice:

- Do not trust test code that you have not seen fail.

- Understand software testing before jumping into automation. Design the test criteria first, then use automation to carry out repetitive tasks efficiently.

- Treat automation as documenting manually written tests and engineering readable, understandable, reusable code.

- Make sure the test code actually tests something.

- The testing code should not itself require testing.

- 200~OK is not always okay. Do not rely only on the server status: an unauthorized API call returning 200 risks the software’s security.
