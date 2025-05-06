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

_ulynks_::cp_vendor() {
  local _dest="static/vendor" _html="" _pack
  local -a _packages=(
    "jquery/dist/jquery.min.js"
    "bootstrap/dist/js/bootstrap.bundle.min.js"
    "dompurify/dist/purify.min.js"
    "coi-serviceworker/coi-serviceworker.min.js"
  )
  cat <<EOF

Update ${_dest}...

EOF
  for _pack in "${_packages[@]}"; do
    cp -pvf "./node_modules/${_pack}"* "./${_dest}/" &&
      _html+=$'\n'"<script src=\"/${_dest##*/}/${_pack##*/}\"></script>"
  done
  cat <<EOF

Copy these lines to source your scripts 👇
${_html}

And past them into 👇

./themes/ulynks/layouts/partials/script.html

EOF
}

_ulynks_::drop_cache() {
  local -a _dir=("public" "resources")
  for _cache in "${_dir[@]}"; do
    printf "Drop cache folder %s...\n" "${_cache}" &&
      rm -rf "./${_cache}"s
  done
}

_ulynks_::cp_fonts() {
  local _dest="static" _html="" _pack
  local -a _packages=(
    "bootstrap-icons/bootstrap-icons.svg"
  )
  cat <<EOF

Update ${_dest}...

EOF
  for _pack in "${_packages[@]}"; do
    cp -pvf "./node_modules/${_pack}"* "./${_dest}/"
  done
}

_ulynks_::main() {
  _ulynks_::drop_cache
  _ulynks_::cp_fonts
  _ulynks_::cp_vendor
}

_ulynks_::main
