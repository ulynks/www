---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: false
description: "{{ replace .File.ContentBaseName "-" " " | title }}"
image: "/img/team/{{ .File.ContentBaseName }}.jpg"
github: "https://github.com/{{ .File.ContentBaseName }}"
linkedin: "https://www.linkedin.com/in/{{ .File.ContentBaseName }}"
tags: ["Data Scientist"]
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
