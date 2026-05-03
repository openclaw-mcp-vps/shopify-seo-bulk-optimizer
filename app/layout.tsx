import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify SEO Bulk Optimizer – Optimize All Products at Once",
  description: "AI-powered bulk SEO optimization for Shopify stores. Generate optimized titles, descriptions, and meta tags for every product in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84e45e52-87e4-452b-92ff-e5a0eed58a91"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
