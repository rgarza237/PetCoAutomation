# README

## Introduction

This repository contains a WebdriverIO (WDIO) integration with Cucumber and TypeScript. It's set up for end-to-end (E2E) testing with a focus on behavior-driven development (BDD). The test subject for this automation will be the page of Petco.com.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- Node.js (Preferably the latest LTS version, at least 18)
- A package manager (npm or Yarn)
- Google Chrome (latest version if possible)
- An IDE or text editor (e.g., VSCode, Sublime Text)

## Setup

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone git@github.com:rgarza237/PetCoAutomation.git
```

### Install Dependencies 
- yarn install

### Running tests
run the test with the following command
```
yarn wdio
```

### Adding Test Cases
Write your test cases in the features folder. These should be .feature files written in Gherkin syntax.

### Page Objects
Create page object models in the pageobjects directory. This abstraction helps to maintain the code and reduces code duplication.

### Step Definitions
Step definitions in Cucumber bridge the gap between plain language Gherkin steps and code. They are the methods that translate a Gherkin step (from a .feature file) into actions to be performed.

### Creating Step Definitions
1. **Organize by Feature**: Store step definitions in a folder structure that mirrors your feature files for easier navigation and maintenance.

2. **Use Descriptive Names**: Name your step definition files to clearly indicate which feature or scenario they're associated with.

3. **Implement Step Functions**: Write functions that execute actions for each step. These functions will use WebdriverIO's browser commands to interact with the web application.

