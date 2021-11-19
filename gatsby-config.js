module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: " My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    // "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      }
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-sharp",
  ],
};
