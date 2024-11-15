# LaunchDarkly Demo: SaaS Landing Page

This is an example landing page for an AI SaaS todo list app. It integrates LaunchDarkly to dynamically show or hide a new feature, the Computer-Using Agent, on the page.

The launchDarkly flag is monitored in the `App.tsx` file to control the visibility of the Computer-Using Agent component.

A video demo of this repository is available [here](https://youtu.be/PXjae7WuN80).

NOTE: This is a frontend-only demo. You may leak your keys if you use this code in production.

## Prerequisites

- [Node.js and npm installed locally](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- A [LaunchDarkly account](https://launchdarkly.com/)

## Setup

1. Clone the repo
2. [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. In a terminal window, `cd` to the directory of the cloned repo, then run `npm install` to install the dependencies
4. Duplicate `.env.example` and rename it `.env`
5. Within LaunchDarkly, create a new feature flag within your Test environment with the key `computerAgentEnabled`. Be sure to go to the Settings tab under Client-side SDK availability, and check the box next to SDKs using Client-side ID.
6. Add the Client-side ID to the `.env` file. The Client-side ID can be found in the LaunchDarkly dashboard under Flags > click ... next to the Test environment > Client-side ID
7. Run `npm run dev` to start the development server
8. Open the app in your browser at the localhost URL provided in the terminal.

Note: If you get a blank screen, you may need to disable your ad blocker

## Targeting in LaunchDarkly

On the LaunchDarkly web interface, under the computerAgentEnabled feature flag, you can add targeting rules to control which users see the Computer-Using Agent.

For example, you can click Add rule > Target individuals and add individual user keys so that only specific users see the feature.

Or, you can add targeting rules based on shared attributes, such as country. Click Add rule > Build a custom rule, then under Attribute, select country. Enter values to target, such as 'US' and 'GB', then select true as the targeting.

You can edit the context dictionary within `App.tsx` to change the user's key, country, and other attributes.
