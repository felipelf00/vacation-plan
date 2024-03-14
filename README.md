# My Holidays - Vacation Planner

A simple project for managing holiday plans developed as part of Buzzvel's recruiting process.

<span style="color:red; font-weight:bold">🚀 New Feature available on api-integration branch: implemented an API for managing the CRUD operations! 🚀</span>

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

**Delete.jsx**

Asks the user for confirmation before deleting a plan. If deletion is confirmed, deletePlan (provided by PlanContext) is called. User is then redirected to /plans.

**Footer.jsx**

Simple footer displayed at the bottom of the page with a link to my portfolio.

**Form.jsx**

Form where the user inputs data when creating a new plan or modifying an existing one. The component checks for the presence of the "id" url parameter to decide if this is a new plan or an existing one. Client-side validation is performed using validateForm(), which checks the inputs and populates an array of errors if they fail validation. If there are errors, the component will not submit the data and instead displays the errors.

**Header.jsx**

Simple header with a logo and the Navigation.jsx component.

**Home.jsx**

Home page displaying a welcome message, a travel-themed image and brief overview of the website's functionality.

**Layout.jsx**

Defines the layout of the page: the Header, the Footer and an Outlet element between them that displays the main content of the pages.

**Navigation.jsx**

Navigation links for the home page and the plans page.

**NotFound.jsx**

Error page for handling bad urls.

**PdfGenerator.jsx**

Uses react-pdf to generate a pdf file for the specified plan.

**Plan.jsx**

Expandable card component for each plan. Initially displayed with just the title row and buttons for editing, deleting, printing and expanding. When expanded, displays the rest of the plan's information.

**PlanContext.jsx**

Context provider for plans. Along with the array of plans it provides functions for creating, updating and deleting them.

**Plans.jsx**

Page that displays all current plans.

**Router.jsx**

Defines the routes using Layout as a parent element and Home as index.
