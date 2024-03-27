#!/usr/bin/env bash
# -*- coding: UTF-8 -*-
#
# author        : JV-conseil
# credits       : JV-conseil
# copyright     : Copyright (c) 2019-2024 JV-conseil
#                 All rights reserved
#====================================================
set -Eeou pipefail
shopt -s failglob

declare -ix DEBUG

DEBUG=0

_ulynks_::rename() {
  local _file
  while IFS= read -r _file; do
    mv -vf "${_file}" "${_file/white-/}"
  done < <(find . -type f -name "*.svg" -or -name "*.png")
}

# cd "./static/home" && _ulynks_::rename
