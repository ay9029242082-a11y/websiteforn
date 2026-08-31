# Nexhibit static website

This deployable static-site package contains the website, its 10-second looping hero visual sequence and hosting configuration.

## Deploy to Netlify

1. Create a new Netlify site and choose **Deploy manually**.
2. Drag the complete contents of this folder into the Netlify deploy area.
3. Add your custom domain in Netlify, then replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml` with it.

## Deploy to Vercel

Import this folder/repository into Vercel as an **Other** static project. No build command is required; the output directory is the project root.

## Before launch

Update the `config` object in `index.html` with the business WhatsApp number, address, event date and location. Connect `enquiryApi` in the same file to your form backend (Formspree, a CRM, or your own API) so enquiries are delivered.
