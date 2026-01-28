# NGO Website

A modern, responsive NGO website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI**: Built with Tailwind CSS and custom color palette
- **Responsive Design**: Mobile-first approach
- **Fast Performance**: Optimized Next.js build
- **TypeScript**: Full type safety
- **SEO Optimized**: Server-side rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: Radix UI, Lucide Icons
- **Deployment**: Vercel

## 🎨 Custom Color Palette

- Light Cream: `#FDFEFD`
- Black: `#000000`
- Greenish-Gray: `#88A791`
- Beige: `#E1C29E`
- Light Yellow: `#FBFACF`
- Dark Green-Gray: `#595F49`

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/zubairmoosani/ngo-website.git
cd ngo-website
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
npm run start
```

## 🚀 Deployment

### Vercel Auto-Deployment Setup

This project is configured for automatic deployment on Vercel when code is pushed to the main branch.

#### For Team Members:

1. **Connect to Vercel:**

   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Import Project"
   - Select this repository

2. **Environment Variables:**

   - No additional environment variables required for basic deployment

3. **Build Settings:**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (leave default)

#### For Repository Owner:

Set up these secrets in your GitHub repository:

1. Go to Settings → Secrets and variables → Actions
2. Add these secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles & color palette
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── Navbar.jsx         # Navigation component
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── demos/            # Demo components
├── public/               # Static assets
│   └── Images/           # Logo and images
├── src/components/       # Additional components
├── vercel.json           # Vercel configuration
└── .github/workflows/    # GitHub Actions
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support, please contact the development team..