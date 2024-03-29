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

_ulynks_::cp_vendor() {
  local _dest="static/vendor" _html="" _pack
  local -a _packages=(
    "jquery/dist/jquery.min.js"
    "bootstrap/dist/js/bootstrap.bundle.min.js"
    "dompurify/dist/purify.min.js"
  )
  cat <<EOF

Update ${_dest}...

EOF
  for _pack in "${_packages[@]}"; do
    cp -pvf "./node_modules/${_pack}"* "./${_dest}/"
    _html+=$'\n'"<script src=\"/${_dest##*/}/${_pack##*/}\"></script>"
  done
  cat <<EOF

Copy these lines to source your scripts 👇
${_html}

And past them into 👇

./themes/ulynks/layouts/partials/script.html

EOF
}

_ulynks_::cache_remove() {
  local _cache="./public"
  cat <<EOF

Cache Remove ${_cache}...

EOF
  rm -rf "${_cache}"
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
  _ulynks_::cache_remove
  _ulynks_::cp_fonts
  _ulynks_::cp_vendor
}

_ulynks_::main
