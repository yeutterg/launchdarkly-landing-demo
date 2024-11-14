# LaunchDarkly Demo: SaaS Landing Page

This is an example landing page for an AI SaaS todo list app. It integrates LaunchDarkly to dynamically show or hide a new feature, the Computer-Using Agent, on the page.

The launchDarkly flag is monitored in the `App.tsx` file to control the visibility of the Computer-Using Agent component.

NOTE: This is a frontend-only demo. You may leak your keys if you use this code in production.

## Prerequisites

- [Node.js and npm installed locally](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- A [LaunchDarkly account](https://launchdarkly.com/)

## Setup

1. Clone the repo
2. [Install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. In a terminal window, `cd` to the directory of the cloned repo, then run `npm install` to install the dependencies
4. Duplicate `.env.example` and rename it `.env`
5. Within LaunchDarkly, create a new feature flag within your Test environment with the key `computerAgentEnabled`, then add the Client-side ID to the `.env` file. The Client-side ID can be found in the LaunchDarkly dashboard under Flags > click ... next to the Test environment > Client-side ID
7. Run `npm run dev` to start the development server
8. Open the app in your browser at the localhost URL provided in the terminal.If you get a blank screen, you may need to disable your ad blocker
