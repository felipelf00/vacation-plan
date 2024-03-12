# My Holidays - Vacation Planner

A simple project for managing holiday plans developed as part of Buzzvel's recruiting process.

It was developed using mainly React and TailwindCSS.

## Prerequisites:

Before you start, make sure you have Node.js and npm installed on your system. You can download and install them from the official Node.js website: [Node.js Downloads](https://nodejs.org/en/download/).

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/felipelf00/vacation-plan.git
   cd vacation-plan
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Running locally

To run this project locally, start the development server:

1. **Start development server**

   ```bash
   npm run dev
   ```

The development server will start running at http://localhost:5173

## Additional Commands

**Run tailwind build script to watch for changes**

```bash
npm run tailwind
```

This command watches for changes in input.css and compiles them into output.css.

**Linting:**

To lint the project code:

```bash
npm run lint
```

## Usage

Using this app is very straight-forward. The plans section displays a button for creating new plans and all current plans. The plans are displayed by their titles, which can be expanded to show the rest of the information for that plan. Additional buttons next to the plan title can be used to edit, delete or print that plan.

In order to accomodate flexible travel plans and vacations which plans are not yet well defined, only the title field is required. Other fields are optional, but if provided require additional validation (example: starting date must be prior ending date)

## Components (in alphabetical order)

**App.jsx**
Returns the Router wrapped with PlanProvider

**Delete**
Asks the user for confirmation before deleting a plan.
