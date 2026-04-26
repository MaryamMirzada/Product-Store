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
Folder Structure
text
src/
├── components/
│   ├── About.jsx
│   ├── CustomerFeedback.jsx
│   ├── DeliveryService.jsx
│   ├── FeatureProduct.jsx
│   └── Setting.jsx
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── About.jsx
│   ├── Cart.jsx
│   └── ProductDetail.jsx
├── context/
│   └── SettingsContext.jsx
├── redux/
│   └── store.js
├── hooks/
│   └── useProducts.js
├── App.jsx
└── index.js
How to Use
Switch between Grid and List view on the Products page

Toggle Dark/Light Mode from the navbar

Add products to cart

Go to Cart page to update quantities or remove items

Clear entire cart with one click

Screenshots
Home Page
https://./screenshots/home.png

Demo Video
Click here to watch the demo video

Note: If the video doesn't play directly in GitHub, download it or upload to YouTube and add the link here.

