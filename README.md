# CEDRA Website

A modern website for the Center for Educational Research/Recreational Activities (CEDRA), focused on empowering underprivileged women through education and economic opportunities.

## Features

- Modern, responsive design
- Integrated payment gateway for donations
- AI-powered chatbot for personalized guidance
- Informative multi-page layout
- Accessibility compliant
- GDPR compliant

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Stripe account (for payment processing)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/cedra-website.git
cd cedra-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

- `app/` - Next.js app directory
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `styles/` - Global styles
  - `api/` - API routes
- `public/` - Static assets
- `components/` - Shared components

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 