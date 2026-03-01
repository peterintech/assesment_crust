const fs = require("fs");
const path = require("path");

module.exports = async function handler(req, res) {
  const { id } = req.query;

  console.log("Function running, id:", id);

  try {
    const response = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`,
    );

    if (!response.ok) return serveFallback(res);

    const data = await response.json();
    const photo = data.photo;

    const templatePath = path.resolve(process.cwd(), "dist", "index.html");
    const template = fs.readFileSync(templatePath, "utf-8");

    const metaTags = generateMetaTags(photo);
    const html = template.replace("<!--ssr-meta-tags-->", metaTags);

    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).send(html);
  } catch (error) {
    console.error("SSR Error:", error);
    return serveFallback(res);
  }
};

function serveFallback(res) {
  const templatePath = path.resolve(process.cwd(), "dist", "index.html");
  const template = fs.readFileSync(templatePath, "utf-8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(template);
}

function generateMetaTags(photo) {
  const escape = (str) =>
    String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const title = escape(photo.title);
  const image = escape(photo.url);
  const description = escape(photo.description);

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type"         content="website" />
    <meta property="og:title"        content="${title}" />
    <meta property="og:description"  content="${description}" />
    <meta property="og:image"        content="${image}" />
    <meta property="og:image:width"  content="600" />
    <meta property="og:image:height" content="600" />
    <meta name="twitter:card"        content="summary_large_image" />
    <meta name="twitter:title"       content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image"       content="${image}" />
  `;
}
