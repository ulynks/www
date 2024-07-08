<!-- markdownlint-disable MD033 MD041 -->
# uLynks 🐈

[![CodeQL](https://github.com/ulynks/www/actions/workflows/codeql.yml/badge.svg?branch=dev)](https://github.com/ulynks/www/actions/workflows/codeql.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/ulynks/www/badge)](https://www.codefactor.io/repository/github/ulynks/www)
[![Deploy Hugo site to Pages](https://github.com/ulynks/www/actions/workflows/hugo.yml/badge.svg)](https://github.com/ulynks/www/actions/workflows/hugo.yml)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=ulynks.www)
[![uLynks.io](https://img.shields.io/badge/uLynks-orange?style=flat-round&color=E07E3C&labelColor=white&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAMAAABrN94UAAAA8FBMVEUAAABLIAVMHgBJHQhMHgBLHABKHgBKHgBLHQBNHwBAIABNHwBLHgBNHgBLHwBMIQVGHwBJGABPIgVNHgBNIQdIHABMHQBJHABMHgBIHABNHQAAAAwAAABAIABAIABNHwBRIgFOKBRNHwFKHABMHwBSKBUAAABPHgIAAABPKRhlNhpKHQBJGwAAAABMHgBUKxi+ajRNIACAdXOhRgDAbDYeAADJr6gAAAA8EwC0TgBfNia3ZzM5AADTe0QAEB4AAABQIABMHgBUIgBVLRxVJAK+tLHuvKmjo6PgrJmslpFhaW6iWzDbbQDQaAB/NAAAAAAb4M+jAAAAQHRSTlMAMeAr5qtlbEQhCPnw0s2fOhX+ybWilHdeWU9LOxgQ9vLd2NXDq5+HbWpGPhwS7Ojd2tHHtbWvqqWkoYaBdF8nB4V2zQAAAQlJREFUKM+Nj9Vuw0AQRWd3DTHbScx2mKHMOOukTP//N63dpFFbV+p5maujGekO/Mm0UmblEHxKSvyWBMB6v26GdJaPOsrfvZvVilkTNFHd6IaJglkkwVJ001l7Rrnt0WJDF1WJrytUdC6D1cmjwjkiR15UCD5iVeO7eXbqXkhY1EEbQML6hNmS6EGOag9PxPGcGpDy/vyi7/qs8IqxGNzcvZ2FmEbVZO/xdedw+dlSWiRHty9PgxaRt48f7p8vR7hq0m1fnx5MukikzIr3zxN0V9UJb1/FvsCVAI1xPNJo4+upHi4FnQLjQiurig5sUAhYxjRqBkBS+AFrItZUKKGimQ6UQmbwD94BQWMbPxP3lssAAAAASUVORK5CYII=)](https://www.ulynks.io/ "Visit official uLynks website")
[![Follow uLynks on Mastodon](https://img.shields.io/mastodon/follow/111813739207573245)](https://mastodon.social/@ulynks "Follow @ulynks@mastodon.social on Mastodon")

Growing on Fyn, Denmark 🇩🇰

## Usage

How to create new pages under the `team` section 👇

```bash
for _who in "alexander-dernild" "dusan-misevic" "lionel-jouvet" "julien-vieillefont"; do
  hugo new content "team/${_who}.md"
done
```

:point_right: An [archetype](https://gohugo.io/content-management/archetypes/#overview) is a template for new content.

How to create new `blog` posts 👇

```bash
for _who in "test-1" "test-2"; do
  hugo new content "blog/${_who}.md"
done
```

## yarn install

> The preferred way to manage Yarn is by-project and through Corepack, a tool shipped by default with Node.js. Modern releases of Yarn aren't meant to be installed globally, or from npm. Start by enabling Corepack, if it isn't already; this will add the yarn binary to your PATH:

```bash
corepack enable
```

see: <https://yarnpkg.com/getting-started/install>

> So if you wish to switch to Corepack-only, you need to remove the `yarnPath` field from your `.yarnrc.yml` yourself.

see: <https://github.com/yarnpkg/berry/issues/4063#issuecomment-1985599132>
