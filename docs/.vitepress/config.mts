import { defineConfig } from "vitepress";

const year = new Date().getFullYear();

export default defineConfig({
  title: "Muk7tm's Docs",
  description: "Documentation hub for Muk7tm projects.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    siteTitle: "Muk7tm's Docs",
    nav: [
      { text: "Overview", link: "/" },
      { text: "Projects", link: "/projects/" },
      { text: "GitHub", link: "https://github.com/Muk7tm" }
    ],
    sidebar: [
      {
        text: "Get Started",
        items: [
          { text: "Overview", link: "/" },
          { text: "All Projects", link: "/projects/" }
        ]
      },
      {
        text: "Published Projects",
        items: [
          { text: "Mk7WIN", link: "/projects/mk7win" },
          { text: "MUKHTM", link: "/projects/mukhtm" },
          { text: "join-voice-bot", link: "/projects/join-voice-bot" },
          { text: "MWD", link: "/projects/mwd" },
          { text: "Windows-ISO-Files", link: "/projects/windows-iso-files" }
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Muk7tm" }],
    search: {
      provider: "local"
    },
    outline: {
      level: [2, 3],
      label: "On this page"
    },
    docFooter: {
      prev: "Previous",
      next: "Next"
    },
    footer: {
      message: "Muk7tm's Docs",
      copyright: `Copyright ${year} Muk7tm`
    }
  }
});
