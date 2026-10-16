# Bidly Auction Site

![Index-not-authenticated.png](src/assets/images/Index-not-authenticated.png)

## Intro

SageShop is an online shop where users can browse products, search through the different products, and filter by price or rating.

Users can also view a product, and see reviews that other buyers have left on the product. The user can also add products to a shopping cart and go through checkout.

The shopping cart allows the user to either increase or decrease the quantity of a product or delete a product. It includes buttons to either shop more or continue to checkout.

The checkout process shows a successful "purchase" and the option to continue shopping.

SageShop is my assignment for the course Javascript Frameworks and is a part of my studies to become a front-end developer.

#### Live Demo:

[SageShop][sageshop]

[//]: # 'Source definitions'
[sageshop]: https://sageshop.netlify.app/ 'SageShop'

## Feature overview

- [x] Filter by options
- [x] Browse and search products
- [x] Adding products to cart
- [x] Successfully go through checkout
- [x] See product and reviews of the product
- [x] Responsive design for all devices

## Contents

- [Getting started](#getting-started)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Usage](#usage)
- [Images and Project Structure](#images-and-project-structure)
  - [Project Structure](#project-structure)
- [Contributing](#contributing)
  - [Used Technologies](#used-technologies)
  - [Testing](#testing)

## Getting Started

In order to run this project locally on you computer, you have to do the following steps.
It is easier than you think.

### Requirements

Make sure that you have the following installed on your computer:

- Node.js (version 18 or higher)
- npm or yarn
- Git

### Install

#### 1. Clone the repository:

Use git to clone this repository into your computer. Assuming using https, then run the following in your CLI:

```
git clone https://github.com/Kateve52911/sageshop.git
```

#### 2. Install dependencies:

Navigate to the root directory of the repo and run the following to install all dependencies.

```
npm install
```

### Usage

After installation, run the development server:

```bash
npm run dev
```

Open your browser and navigate to the local host address shown in the terminal.

**As a user you can:**

- Register for an account (receiving 1000 credits in the process)
- Browse and search for auction listings
- Create your own listings
- Bid on items
- View your profile and bid history

## Images and Project structure:

### Images

The index page when user is logged in:

![Index-authenticated.png](src/assets/images/Index-authenticated.png)

Here you can see what a single listing looks like when the user is logged in:

![Single-listing.png](src/assets/images/Single-listing.png)

Here you see the profile page for the user:

![Profile-image-1.png](src/assets/images/Profile-image-1.png)

### Project structure:

```
bidly/
├── src/
│   └── app/
│       ├── api/                    # API integration
│       │   ├── auth/               # Authentication endpoints
│       │   ├── listings/           # Listing CRUD operations
│       │   ├── user/               # User/profile operations
│       │   ├── config/             # API configuration
│       │   └── types/              # TypeScript type definitions
│       ├── components/             # Reusable UI components
│       │   ├── errorHandling/      # Error display components
│       │   ├── forms/              # Form components
│       │   ├── listings/           # Listing display components
│       │   ├── navbar/             # Navigation bar
│       │   ├── profile/            # Profile components
│       │   └── serachAndFilter/    # Search & filter functionality
│       ├── pages/                  # Page-specific TypeScript
│       │   ├── index.ts            # Home page logic
│       │   ├── login.ts            # Login page logic
│       │   ├── register.ts         # Register page logic
│       │   ├── profile.ts          # Profile page logic
│       │   ├── new-listing.ts      # Create listing logic
│       │   └── singleListing.ts    # Single listing view logic
│       ├── ui/                     # UI rendering utilities
│       │   ├── auth/
│       │   └── events/
│       └── utils/                  # Helper functions
│           ├── helpers/            # General utilities
│           │   ├── card/
│           │   ├── delay/
│           │   ├── forms/
│           │   ├── heroSection/
│           │   ├── listings/
│           │   └── modal/
│           ├── storage/            # Local storage management
│           └── validation/         # Form validation
├── scss/                           # Styling
│   ├── custom-bootstrap.scss       # Bootstrap customization
│   └── styles.scss                 # Custom styles
├── assets/                         # Static assets
│   ├── favicon/
│   └── images/
├── tests/                          # Unit tests
│   └── e2e/
│   │   └── auth/
│   └── unit/
│       └── app/
│           ├── ui/
│           └── utils/
├── index.html                      # Home page
├── listing.html                    # Listing detail page
├── login.html                      # Login page
├── register.html                   # Register page
├── profile.html                    # Profile page
├── new-listing.html                # Create listing page
├── main.ts                         # Application entry point
├── vite.config.ts                  # Vite configuration
├── vitest.config.ts
├── tsconfig.json                   # TypeScript configuration
└── package.json
└── package-lock.json
└── env.examples
└── eslint.config.mjs
└── playwright.config.ts
├── prettierrc
├── .gitignore
```

## Contributing

To contribute to the project, simply install as detailed above, and then after finishing your changes, create a PR on GitHub.

### Used technologies

The tech stack for this project includes:

- Typescript
- Tailwind
- React
- ShadCn
- Tanstack Router
- Vite
- Vitest
- Husky
- ESLint
- PlayWright

### Testing

In this project, there are two kinds of tests: unit tests and end-to-end (e2e) tests. To run each of these respectively, run the following commands:

```
npm test
npx playwright test --headed
```

There are actually many ways to run the playwright (e2e) tests. For example:

```
npx playwright test tests/e2e/auth/login.spec.ts --headed  # run a single test
npx playwright test --last-failed  # run last failed tests
```
