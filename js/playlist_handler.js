// playlist_handler.js — reconstructed for the magpu.com archive mirror.
// Original file was never captured by the Wayback Machine; this replacement
// drives the same markup the show pages emit: <audio id="audio"> plus a
// <ul id="playlist"> of track links. Styling hook (.active on the li) matches
// assets/player.css.
jQuery(function ($) {
  var audio = document.getElementById('audio');
  var $items = $('#playlist li');
  if (!audio || !$items.length) return;

  function activate(idx, autoplay) {
    var url = $items.eq(idx).find('a').attr('href');
    $items.removeClass('active').eq(idx).addClass('active');
    audio.src = url;
    if (autoplay) audio.play();
  }

  $items.find('a').on('click', function (e) {
    e.preventDefault();
    activate($items.find('a').index(this), true);
  });

  $(audio).on('ended', function () {
    var idx = $items.index($items.filter('.active')[0]);
    if (idx > -1 && idx + 1 < $items.length) activate(idx + 1, true);
  });
});
