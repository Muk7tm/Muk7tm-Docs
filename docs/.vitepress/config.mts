import { defineConfig } from "vitepress";

const year = new Date().getFullYear();

export default defineConfig({
  title: "Muk7tm's Docs",
  description: "Documentation hub for Muk7tm projects.",
  lang: "en-US",
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    }
  },
  transformHtml(code) {
    let html = code;

    // 1) Security: ensure rel includes noopener for all target=_blank links.
    html = html.replace(
      /(<a\b[^>]*\btarget="_blank"[^>]*\brel=")([^"]*)(")/g,
      (_m, pre, rel, post) => {
        const parts = rel.split(/\s+/).filter(Boolean);
        if (!parts.includes("noopener")) parts.unshift("noopener");
        if (!parts.includes("noreferrer")) parts.push("noreferrer");
        return `${pre}${parts.join(" ")}${post}`;
      }
    );
    html = html.replace(
      /(<a\b(?![^>]*\brel=)[^>]*\btarget="_blank"[^>]*?)(>)/g,
      `$1 rel="noopener noreferrer"$2`
    );

    // 2) A11y: VitePress SSR renders the appearance switch with an empty boolean
    // title attribute; give it a stable title + aria-label so checkers stop flagging it.
    html = html.replace(
      /<button\b([^>]*\bVPSwitchAppearance\b[^>]*)>/g,
      (_m, attrs) => {
        let out = attrs;
        out = out.replace(/\stitle(?=\s)/, ' title="Toggle appearance"');
        out = out.replace(/\stitle=""/, ' title="Toggle appearance"');
        if (!/\saria-label=/.test(out)) out += ' aria-label="Toggle appearance"';
        return `<button${out}>`;
      }
    );

    // 3) Style hygiene: remove two small inline styles injected by SSR and
    // provide equivalent defaults in CSS.
    html = html.replace(/\sstyle="--vp-vh:0px;?"/g, "");
    html = html.replace(/\sstyle="position:\\s*relative;?"/g, "");

    return html;
  },
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
