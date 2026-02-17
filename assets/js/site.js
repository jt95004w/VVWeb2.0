(function () {
  var tagFilter = document.getElementById('artist-tag-filter');
  if (tagFilter) {
    tagFilter.addEventListener('change', function () {
      var value = tagFilter.value.toLowerCase();
      document.querySelectorAll('.index-table.artists .index-row:not(.header)').forEach(function (row) {
        var tags = (row.getAttribute('data-tags') || '').toLowerCase();
        row.style.display = value === 'all' || tags.indexOf(value) !== -1 ? 'grid' : 'none';
      });
    });
  }

  document.querySelectorAll('.archive-groups details > summary').forEach(function (summary) {
    summary.addEventListener('click', function () {
      summary.parentElement.classList.toggle('open');
    });
  });

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var desktopOnly = window.matchMedia('(min-width: 881px)').matches;
  var parallaxNodes = Array.prototype.slice.call(document.querySelectorAll('.parallax-rail'));

  if (!reducedMotion && desktopOnly && parallaxNodes.length) {
    var ticking = false;
    var updateParallax = function () {
      var y = window.scrollY || window.pageYOffset || 0;
      parallaxNodes.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-speed') || '0.05');
        var offset = Math.max(-24, Math.min(24, y * speed));
        el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
      });
      ticking = false;
    };

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    updateParallax();
  }
})();
