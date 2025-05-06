#!/usr/bin/env bash
#
# Script Name : rename.sh
# Description : ...
# Created     : May 06, 2025
# Author      : JV-conseil
# Contact     : contact@jv-conseil.dev
# Website     : https://www.jv-conseil.dev
# Copyright   : (c) 2025 JV-conseil
#               All rights reserved
# ========================================================

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
