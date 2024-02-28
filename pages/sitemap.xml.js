export default function handler(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>https://www.starcontractoragency.com/</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.starcontractoragency.com/about</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/our-work</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/contact-us</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/services</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/services/web-design</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/services/seo-optimization</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/services/digital-media</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/services/brand-identity</loc>
  <lastmod>2024-02-28T07:07:49+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog/essential-branding-components-for-gta-service-businesses</loc>
  <lastmod>2024-02-28T07:12:13+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog/website-builder-vs-website-design-agency</loc>
  <lastmod>2024-02-28T07:12:13+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog/how-to-improve-boost-your-local-business-online-through-link-building</loc>
  <lastmod>2024-02-28T07:12:13+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog/6-common-website-mistakes-gta-service-business-owners-make-(and-how-to-avoid-them)</loc>
  <lastmod>2024-02-28T07:12:13+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog/the-power-of-local-seo:-how-to-dominate-search-results-in-the-gta</loc>
  <lastmod>2024-02-28T07:12:13+00:00</lastmod>
</url>
<url>
  <loc>https://www.starcontractoragency.com/blog/how-to-optimize-your-garage-door-installation-website-for-local-seo-&-visibility</loc>
  <lastmod>2024-02-27T07:12:13+00:00</lastmod>
</url>
</urlset>`
    res.end(xml)
  }
  