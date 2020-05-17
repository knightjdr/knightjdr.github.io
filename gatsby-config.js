module.exports = {
  siteMetadata: {
    title: 'James Knight, PhD',
    description: 'GitHub page for James Knight - programmer, scientist and bioinformatician in Toronto.',
    siteUrl: 'https://knightjdr.github.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        defaultQuality: 70,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GitHub page for James Knight, PhD',
        short_name: 'knightjdr.github.io',
        start_url: '/',
        background_color: '#f5f5f5',
        theme_color: '#98BCBF',
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
  ],
};
