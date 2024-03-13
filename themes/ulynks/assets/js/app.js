/* global $ */
// import $ from "jquery";

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const SITE = {
  title: "uLynks",
}

$(function () {

  console.info('This site was generated by', $("meta[name='generator']").attr("content"));

  const page = new URL(window.location.href).pathname;
  // console.debug("page", page);

  /*
  $('.app-link').on('click', function () {
    $('.app-link').each(function () {
      $(this).removeAttr('aria-current')
    })
    $(this).attr('aria-current', 'page')
  })

  $('.app-link').each(function () {
    $(this).removeAttr('aria-current')
    let link = $(this).text().trim()
    // console.debug("link", link);
    link = new RegExp(link, 'gi');
    if (!page.match(link)) return
    $(this).attr('aria-current', 'page')
  })
  */

  $('.nav-link').each(function () {
    $(this).removeClass('active').removeAttr('aria-current')
    let link = $(this).text().trim()
    // console.debug("link", link);
    link = new RegExp(link, 'gi');
    if (!page.match(link)) return
    $(this).addClass('active').attr('aria-current', 'page')
  })

  $('a[data-mail]').on('click', function () {
    window.location = 'mailto:' + encodeURIComponent($(this).data('mail')) + '?subject=' + encodeURIComponent($(this).data('subject')) + '&body=' + encodeURIComponent("Hello " + SITE.title + ",\n\n...\n\nKind Regards,\n")
  })

  /**
   * Add target="'_blank" to all external links
   */
  $("a[href^='http']").each(function () {
    /* console.debug('_link', this.href); */
    let rel = $(this).attr('rel')
    rel = 'noopener noreferrer' + (rel && !rel.match('noopener noreferrer') ? ' ' + rel : '')
    /* console.debug('rel', rel); */
    $(this).attr({ 'target': '_blank', 'rel': rel })
  })
});

/**
 * Freely Inspired by
 * https://codesandbox.io/p/sandbox/a-guide-to-using-primer-css-k3fdu?file=%2Findex.html%3A436%2C7-461%2C8
 *

function handleClick(e) {
  document.querySelectorAll('.app-link').forEach((x) => {
    x.removeAttribute('aria-current');
  });
  e.setAttribute('aria-current', 'page');
}

function handlePopover() {
  const popup = document.querySelector('.app-popover');

  if (popup.style.display === 'none') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
}

function handlePopover2() {
  const popup = document.querySelector('.app-popover2');

  if (popup.style.display === 'none') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
}

*/
