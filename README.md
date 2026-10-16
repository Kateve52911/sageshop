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

- [x] Browse products
- [x] Filter by options
- [X] Search products
- [x] Adding products to cart
- [X] Change quantity in cart
- [X] Delete products from cart
- [x] Successfully go through checkout
- [x] See product and reviews of the product
- [X] Contact form with form validation 
- [x] Responsive design for all devices

## Contents

- [Getting started](#getting-started)
  - [Requirements](#requirements)
  - [Install](#install)
  - [Usage](#usage)
- [Used Technologies](#used-technologies)
  - [API](#Api)
- [Images and Project Structure](#images-and-project-structure)
  - [Project Structure](#project-structure)
- [Contributing](#contributing)
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

After installation, run the build server:

```bash
npm run build
```

Open your browser and navigate to the local host address shown in the terminal.


## Used technologies

The tech stack for this project includes:

- React
- Typescript
- Tailwind
- Shadcn/ui
- TanStack Router
- TanStack Query
- Zustand
- React Hook Form
- Zod
- Vite
- Vitest
- Husky
- ESLint
- PlayWright

### API

Product data comes from the [Noroff Online Shop API](https://docs.noroff.dev/docs/v2/basic/online-shop). No API key is needed.

| Endpoint                | Used for                             |
|-------------------------|--------------------------------------|
| `GET /online-shop`      | All products on the homepage         |
| `GET /online-shop/<id>` | A single product on the product page |

All API code is in `src/services/api/`. Every request goes through `fetchHelper`,
which handles errors in one place and throws an `APIError` with the status code.


## Images and Project structure:

### Images

The index page:
![Index-computer.png](public/images/screenshots/Index-computer.png)

The index page:
![Index-phone.png](public/images/screenshots/Index-phone.png)


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
