# Client Dashboard Application

## Deployment Guide

### GitHub Actions CI/CD Setup

This project is configured with GitHub Actions for continuous integration and deployment. When you push changes to the `main` branch, the application will automatically build and deploy to GitHub Pages.

### Prerequisites for Deployment

Before your first deployment, you need to set up the following secrets in your GitHub repository:

1. **Supabase Environment Variables**:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

2. **GitHub Access Token**:
   - `FAMOUS_AI_GITHUB_ACCESS_TOKEN`: Your GitHub access token for repository operations

### How to Add GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add each required secret with its corresponding value

## Custom Domain Setup

This application is configured to be deployed to GitHub Pages with the custom domain `vivacitycms.com.au`.

### DNS Configuration

To set up your custom domain, you need to configure the following DNS records at your domain registrar:

#### A Records

Add the following A records to point your apex domain (vivacitycms.com.au) to GitHub Pages:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

#### CNAME Record (Optional)

If you want to also support the www subdomain:

```
CNAME    www    vivacitycms.com.au
```

### GitHub Pages Configuration

1. Go to your GitHub repository
2. Click on "Settings" > "Pages"
3. Under "Build and deployment", ensure the source is set to "GitHub Actions"
4. Under "Custom domain", enter your domain name: `vivacitycms.com.au`
5. Check the "Enforce HTTPS" option (available after DNS propagation)

## HTTPS Enforcement

The application is configured to enforce HTTPS through multiple mechanisms:

1. **GitHub Pages HTTPS**:
   - GitHub Pages automatically provisions an SSL certificate for your custom domain
   - Enable "Enforce HTTPS" in the GitHub Pages settings once DNS is configured

2. **Content Security Policy**:
   - The application includes a CSP header to upgrade insecure requests
   - This ensures all resources are loaded via HTTPS

3. **Absolute URLs**:
   - All meta tags and resource references use absolute HTTPS URLs
   - This prevents mixed content warnings

## SEO Optimization

The application includes comprehensive meta tags for improved search engine visibility and social sharing:

1. **Basic SEO Tags**:
   - Title and description meta tags
   - Author information

2. **Open Graph Tags (Facebook/LinkedIn)**:
   - og:title, og:description, og:type, og:url, og:image
   - Enables rich previews when shared on social platforms

3. **Twitter Card Tags**:
   - twitter:card, twitter:site, twitter:title, twitter:description, twitter:image
   - Provides enhanced Twitter sharing capabilities

### Environment Setup

Create a `.env` file in the root of your project with the following variables for local development:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GITHUB_ACCESS_TOKEN=your_github_access_token
```

### GitHub Repository Connection

If you've transferred your GitHub repository from a personal account to an organization:

1. Navigate to the Settings page in the application
2. Select the GitHub tab
3. Use the reconnection form to update your repository URL
4. Ensure your GitHub access token has the necessary permissions for the organization repository

## Deployment Checklist

Follow these steps to complete the deployment process:

1. **DNS Setup**:
   - [ ] Add the four A records for GitHub Pages IP addresses to your domain registrar
   - [ ] Add a CNAME record for www if desired
   - [ ] Wait for DNS propagation (can take up to 24-48 hours)

2. **Repository Setup**:
   - [ ] If needed, transfer the repository to your organization
   - [ ] Ensure the repository is public or you have GitHub Pages enabled for private repositories

3. **GitHub Pages Configuration**:
   - [ ] Go to repository Settings > Pages
   - [ ] Enter your custom domain: vivacitycms.com.au
   - [ ] Save the settings
   - [ ] After DNS propagation, enable "Enforce HTTPS"

4. **Deployment**:
   - [ ] Push your changes to the main branch
   - [ ] Verify the GitHub Action workflow completes successfully
   - [ ] Check that your site is accessible at your custom domain
   - [ ] Verify HTTPS is working correctly (look for the padlock icon)
   - [ ] Test social sharing previews using Facebook and Twitter validation tools

### Notes

- The deployment workflow uses Node.js 20
- The build command used is `npm run build`
- The application is deployed to the `gh-pages` branch of your repository
- With custom domain setup, your application will be accessible at `https://vivacitycms.com.au`
- For detailed DNS setup instructions, see [DNS Setup Guide](docs/dns-setup.md)
- For a comprehensive deployment checklist, see [Deployment Checklist](docs/deployment-checklist.md)
