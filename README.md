# Kato Laban Foundation Website

A production ready website built with Astro and Sveltia CMS.

## About

Kato Laban Foundation is a non profit organization operating in Isingiro District, Uganda. We work to improve health outcomes, expand access to quality education, and promote climate education and climate justice.

## Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:4321 to view the site.

## Sveltia CMS Admin

Access the admin dashboard at http://localhost:4321/admin

### Authentication Setup

To use Sveltia CMS, you need to authenticate with GitHub. There are two options:

#### Option 1: GitHub OAuth App (Recommended for self hosted)

1. Go to GitHub Settings > Developer settings > OAuth apps
2. Click "New OAuth App"
3. Fill in the details:
   - Application name: Kato Laban Foundation CMS
   - Homepage URL: https://your-domain.com
   - Authorization callback URL: https://your-domain.com/admin/ callback
4. Note your Client ID and generate a Client Secret
5. Configure these in Netlify under Site settings > Identity

#### Option 2: Git Gateway (For Netlify Identity)

1. Enable Identity in your Netlify site settings
2. Go to Identity > Git Gateway > Enable Git Gateway
3. Authorize the CMS to access your repository

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy site

### Vercel

1. Import your GitHub repository to Vercel
2. Framework Preset: Astro
3. Deploy

## Required Files

You must manually add the following files to the `public/` folder after generating the project:

- `logo.png` - Main logo image (rename your existing katoaban_logo.png)
- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`

To generate favicons:
1. Go to https://realfavicongenerator.net
2. Upload your logo.png
3. Download the generated files
4. Copy all downloaded files to the public/ folder

## Project Structure

```
/
├── public/
│   ├── admin/
│   │   ├── config.yml    # Sveltia CMS configuration
│   │   └── index.html  # CMS entry point
│   └── (logo and favicon files)
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/       # Page layouts
│   ├── pages/        # Route pages
│   └── styles/       # Global styles
├── netlify.toml       # Netlify configuration
├── astro.config.mjs # Astro configuration
└── package.json     # Dependencies
```

## License

Copyright (c) 2026 Kato Laban Foundation. All rights reserved.