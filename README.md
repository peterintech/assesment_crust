# Novacrust

Novacrust is a modern, React-based widget application designed for seamless crypto-fiat operations. It provides an intuitive interface for exchanging cryptocurrency to cash, with planned support for cash-to-crypto conversions and crypto-backed loans.

## Features

- **Crypto to Cash:** A functional form to calculate and initiate crypto-to-fiat exchanges. (Screen 1)
- **Cash to Crypto:** (Coming Soon) A placeholder interface for future implementation. (Screen 2)
- **Crypto to Fiat Loan:** (Coming Soon) A placeholder interface for future implementation. (Screen 3)
- **Responsive Design:** Built with Tailwind CSS for a fully responsive and modern UI.
- **Form Validation:** Form handling using React Hook Form and Zod.

## Tech Stack

- **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons:** [Lucide React](https://lucide.dev/), [Ant Design Web3 Icons](https://web3.ant.design/), [React Country Flag](https://www.npmjs.com/package/react-country-flag)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/peterintech/assesment_crust.git
    cd assesment_crust
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port shown in your terminal).

4.  **Build for production:**

    ```bash
    npm run build
    ```

## Assumptions & Trade-offs

- **Mocked Backend:** The application currently operates as a frontend-only prototype. Form submissions (e.g., in the "Crypto to Cash" tab) are mocked and display an alert with the submitted data instead of making actual API calls.
- **Hardcoded Data:** Currency lists (crypto tokens, fiat currencies) and payment methods are currently hardcoded in `src/data/index.tsx` for demonstration purposes. In a real-world scenario, these would likely be fetched from an API.
- **`Clash Display` Font Famiy Not Found:** The `Clash Display` font-family used for the "Coming Soon" text in the `cash to crypto` and `crypto to fiat loan` is not on google fonts, i defaulted to `Outfit` font
