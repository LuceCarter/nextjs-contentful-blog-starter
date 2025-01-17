/*
 * This Config object is used throughout the application to
 * personalise your code and preferences for how you would
 * like things to work.
 *
 * For example, use the Config object to configure your menu links
 * without editing HTML, or change the page size on /blog without
 * touching any of the functional code.
 *
 */

const SITE_URL = "https://lucecarter.co.uk";

export const Config = {
  site: {
    owner: "Luce Carter",
    title: "Luce Carter Blog",
    domain: "lucecarter.co.uk",
    email: "luce@lucyscarter.co.uk",
    feedDescription: "RSS Feed for lucecarter.co.uk",
  },
  pageMeta: {
    openGraph: {
      twitterUser: "LuceCarter1",
    },
    home: {
      url: SITE_URL,
      slug: "/",
    },
    blogIndex: {
      url: `${SITE_URL}/blog`,
      slug: "/blog",
    },
    blogIndexPage: {
      slug: "/blog/page/[page]",
    },
    post: {
      slug: "/blog/[slug]",
    },
    buildRss: {
      url: `${SITE_URL}/buildrss`,
      slug: "/buildrss",
    },
    notFound: {
      url: SITE_URL,
      slug: "/404",
    },
  },
  pagination: {
    pageSize: 8,
    recentPostsSize: 3,
  },
  menuLinks: [
    {
      displayName: "Home",
      path: "/",
    },
    {
      displayName: "Blog",
      path: "/blog",
    },
    {
      displayName: "Uses",
      path: "/uses"
    }
  ],
};
