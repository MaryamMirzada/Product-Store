# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Product Story

An interactive e-commerce product store built with React.  
This project demonstrates the practical use of **Context API + useReducer**, **Redux Toolkit**, and **React Query** together in one application.

## Features

- Browse products with **Grid View** and **List View** layout switching
- **Dark Mode / Light Mode** theme toggle
- Shopping cart management (add, remove, update quantity, clear cart)
- Product listing with loading and error states
- Product details page
- Responsive design with **Tailwind CSS**
- Persistent theme preference (bonus)

## Pages

1. **Home** – Company info, shipping details, featured products, customer feedback
2. **Products** – Product cards with image, short info, "More Info" and "Details" buttons, layout switcher (Grid/List)
3. **About** – Information about the store
4. **Cart** – Display cart items, update quantities, show total items and total price, clear cart option

## Tech Stack

| Technology          | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| React               | UI library                                             |
| React Router DOM    | Routing between pages                                 |
| Tailwind CSS        | Styling and responsive design                         |
| React Query         | Fetching and caching product data from API            |
| Context API + useReducer | Global state for theme and layout settings       |
| Redux Toolkit       | Shopping cart state management                        |
| JSON Server (or similar) | Mock API for product data                          |

## State Management Approach

| State Type          | Tool Used               | Responsibility                        |
| ------------------- | ----------------------- | ------------------------------------- |
| App settings        | Context API + useReducer| Theme (dark/light), layout (grid/list)|
| Shopping cart       | Redux Toolkit           | Cart items, quantities, totals        |
| Server state        | React Query             | Product fetching, caching, loading/error |

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/product-story.git
   cd product-story
Install dependencies

bash
npm install
Start the JSON server

bash
npx json-server --watch db.json --port 5000
Start the React app

bash
npm start

## Folder Structure
product-story/
│
├── src/
│ ├── assets/ # Images and icons
│ ├── components/
│ │ ├── common/ # Navbar, ThemeToggle, LayoutSwitcher
│ │ ├── home/ # CustomerFeedback, DeliveryService, FeatureProduct
│ │ ├── products/ # ProductCard, ProductList, ProductDetail
│ │ └── cart/ # CartItem
│ ├── pages/ # Home, Products, About, Cart
│ ├── context/ # SettingsContext + Reducer
│ ├── redux/ # Store + cartSlice
│ ├── hooks/ # useProducts (React Query)
│ ├── services/ # API calls
│ ├── utils/ # Constants, helpers
│ └── styles/ # Global CSS
│
├── screenshots/ # App screenshots
├── videos/ # Demo video
└── README.md

## How to Use
Switch between Grid and List view on the Products page

Toggle Dark/Light Mode from the navbar

Add products to cart

Go to Cart page to update quantities or remove items

Clear entire cart with one click

Screenshots
Home Page
[https://./screenshots/home.png](https://github.com/MaryamMirzada/Product-Store/blob/56b41fd503f2811f83eb57ff54ca5f591dd863c3/Product-Store/src/assets/home.png)

Demo Video
[https://./video/UnixStore.MP4](https://drive.google.com/file/d/14rs-EXUf-QAfpta-_TftFot-4-GJw4_M/view?usp=drive_link)



