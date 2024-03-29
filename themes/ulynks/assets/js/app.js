/* global $, DOMPurify */
// import $ from "jquery";

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const SITE = {
  title: "uLynks"
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
    $(this)
      .removeClass('active')
      .removeAttr('aria-current')

    let link = $(this).text().trim()
    link = DOMPurify.sanitize(link)
    // console.debug("link", link)
    link = new RegExp(link, 'gi')
    if (!page.match(link)) return

    $(this)
      .addClass('active')
      .attr('aria-current', 'page')
  })


  $('a[href^="mailto:"]').on('click', function () {
    /* window.location = 'mailto:' + encodeURIComponent($(this).data('mail')) + '?subject=' + encodeURIComponent($(this).data('subject')) + '&body=' + encodeURIComponent("Hello " + SITE.title + ",\n\n...\n\nKind Regards,\n") */

    let link = $(this).attr('href').trim()
    link = DOMPurify.sanitize(link)
    link = link.replace(/mailto:/g, '')

    // console.debug("link ", link)

    link = 'mailto:' + encodeURIComponent(link)
    link += '?subject=' + encodeURIComponent("Sent From " + SITE.title + " Website")
    link += '&body=' + encodeURIComponent("Hello " + SITE.title + ",\n\n...\n\nKind Regards,\n")

    // console.debug("link ", link)

    window.location = link

    // event.preventDefault()
    return false
  })


  /**
   * Add target="'_blank" to all external links
   */
  $("a[href^='http']").each(function () {
    /* console.debug('_link', this.href); */
    let rel = $(this).attr('rel')
    rel = DOMPurify.sanitize(rel)
    rel = 'noopener noreferrer' + (rel && !rel.match('noopener noreferrer') ? ' ' + rel : '')
    /* console.debug('rel', rel); */
    $(this).attr({ 'target': '_blank', 'rel': rel })
  })


  /**
   * Tooltips
   * https://stackoverflow.com/a/22569369/2477854
   */
  // $('[data-bs-toggle="tooltip"]').tooltip()
  $('body').tooltip({
    selector: '[data-bs-toggle="tooltip"]'
  })

  /**
   * img-hover
   */
  $('.img-hover').on('mouseenter', function () {
    // let src = $(this).attr('src')
    // src = src.replace(/([^.]+).([^.]+)$/, '$1-hover.$2')
    // console.debug('mouseenter src', src);
    // $(this).attr({ 'src': src })
    changeImageSourceHover($(this))
  }).on('mouseleave', function () {
    let src = $(this).attr('data-src') || $(this).attr('src')
    src = DOMPurify.sanitize(src)
    // src = src.replace('-hover', '')
    // console.debug('mouseleave src', src);
    $(this).attr({ 'src': src })
  })
});


/**
 * pathExists
 * @param {*} url
 * @param {*} callback
 * XMLHttpRequest: response property
 * see: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response#examples
 */
function pathExists(url, callback) {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.status < 400)
    }
  }
  xhr.open('HEAD', url)
  xhr.send()
}


/**
 * changeImageSourceHover
 * @param {*} obj = $(this)
 * @returns
 */
function changeImageSourceHover(obj) {
  let hover = obj.attr('data-hover') || false
  if (hover) {
    hover = DOMPurify.sanitize(hover)
    obj.attr({ 'src': hover })
    return
  }
  const src = obj.attr('src')
  const _src = src.replace(/([^.]+).([^.]+)$/, '$1-hover')
  for (const _type of ["gif", "jpg", "png", "svg"]) {
    const _hover = _src + "." + _type
    pathExists(_hover, function (result) {
      // console.debug(_hover, result);
      if (!result) return
      obj.attr({
        'src': _hover,
        'data-hover': _hover,
        'data-src': src
      })
    });
  }
  if (obj.attr('data-hover')) return
  obj.attr({
    'src': src,
    'data-hover': src
  })
}




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
