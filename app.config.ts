import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: "My Home",
    logo: "",
    iconLogo: "fluent-emoji-flat:leaf-fluttering-in-wind",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: "My Home",
    description: "",
    url: "https://czczc-nuxt-minted-directory.nuxt.space/",
    favicon: {
      image: "",
      emoji: "🍃",
    },
  },
  directory: {
    search: {
      placeholder: "Search among {0} tools",
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Seems that this entry is missing from the archives.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: false,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "Featured ✨",
    },
    tags: [
      { name: "SAAS", color: "blue" },
      { name: "dashboard", color: "green" },
      { name: "landing-page" },
      { name: "toolbox" },
      { name: "agency" },
      { name: "markdown-based" },
      { name: "basics", color: "indigo" },
    ],
    tagPages: {
      title: "Available {0} products:",
      description:
        "View all available tools and templates in the {0} category...",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Create your own directory website in minutes.",
      link: "https://minteddirectory.com",
      brandText: "MintedDirectory",
    },
    navbar: {
      colorModeSelector: true,
      links: [{
        name: "Home",
        to: "/",
      }, {
        name: "Blog",
        to: "/blog",
      }, {
        name: "Notes",
        to: "/advertise",
      }],
    },
    actionButton: {
      text: "Edit",
      href: "https://github.com/czczc/nuxt-minted-directory/",
    },
  },
  footer: {
    description: "Best directory for my niche.",
    socials: {
      github: {
        link: "",
        icon: "tabler:brand-github",
      },
      facebook: {
        link: "",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "https://x.com/mark_bruderer",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "https://www.youtube.com/@mark_hacks",
        icon: "tabler:brand-youtube",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});