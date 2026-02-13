Project Structure

```
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── styles/          # Tailwind imports if needed
│       └── globals.css
│
├── components/          # Reusable UI components
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── IconButton.jsx
│   │   ├── Input.jsx
│   │   └── Badge.jsx
│   ├── cart/
│   │   ├── CartModal.jsx
│   │   └── CartItem.jsx
│   └── common/
│       ├── Spinner.jsx
│       └── Modal.jsx
│
├── features/             # Feature slices / domain logic
│   ├── cart/
│   │   ├── cartSlice.js    # Redux/Zustand logic
│   │   └── cartUtils.js
│   ├── products/
│   │   ├── productsSlice.js
│   │   ├── productsApi.js
│   │   └── productsUtils.js
│   └── user/
│       ├── authSlice.js
│       └── authApi.js
│
├── hooks/               # Custom hooks
│   ├── useCart.js
│   ├── useProducts.js
│   └── useAuth.js
│
├── pages/               # Route pages
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Profile.jsx
│   └── NotFound.jsx
│
├── services/            # API / third-party integration
│   ├── axiosConfig.js
│   └── firebase.js
│
├── store/               # Redux / Zustand store config
│   └── index.js
│
├── utils/               # Utility functions
│   ├── debounce.js
│   ├── formatCurrency.js
│   └── helpers.js
│
├── App.jsx
├── main.jsx
└── tailwind.config.js

```