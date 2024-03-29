<!-- markdownlint-disable MD033 MD041 -->
# uLynks 🐈

[![CodeQL](https://github.com/ulynks/www/actions/workflows/codeql.yml/badge.svg?branch=dev)](https://github.com/ulynks/www/actions/workflows/codeql.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/ulynks/www/badge)](https://www.codefactor.io/repository/github/ulynks/www)
[![Deploy Hugo site to Pages](https://github.com/ulynks/www/actions/workflows/hugo.yml/badge.svg)](https://github.com/ulynks/www/actions/workflows/hugo.yml)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=ulynks.www)
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
