'use client';
import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    var R = matchMedia('(prefers-reduced-motion:reduce)').matches;
    var bar = document.getElementById('bar');
    var nav = document.getElementById('nav');
    var dash = document.getElementById('dash');
    var sp = [].slice.call(document.querySelectorAll('[data-sp]'));
    var mf = document.getElementById('mf');
    var tl = document.getElementById('tl');
    var stk = [].slice.call(document.querySelectorAll('.stk'));
    var ws = [];

    // Manifesto word split
    if (mf) {
      var words = mf.textContent.trim().split(/\s+/);
      mf.innerHTML = words.map(function(w) { return '<span>' + w + '</span>'; }).join(' ');
      ws = [].slice.call(mf.children);
    }

    var onScroll = function() {
      var y = scrollY;
      var h = document.documentElement.scrollHeight - innerHeight;
      var vh = innerHeight;
      if (bar) bar.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
      if (nav) nav.classList.toggle('s', y > 20);
      if (R) return;
      if (innerWidth > 900 && dash) {
        if (y > 5) {
          var r = Math.min(y / 520, 1);
          dash.style.transform = 'perspective(1500px) rotateX(' + (3 - 3 * r) + 'deg) translateY(' + (-20 * r) + 'px)';
        } else {
          dash.style.transform = '';
        }
      }
      // Manifesto highlight
      if (mf && ws.length) {
        var m = mf.getBoundingClientRect();
        var p = (vh * .85 - m.top) / (m.height + vh * .35);
        p = Math.max(0, Math.min(1, p));
        ws.forEach(function(w, i) { w.classList.toggle('on', i / ws.length < p * 1.05); });
      }
      // Timeline progress
      if (tl) {
        var t = tl.getBoundingClientRect();
        var q = Math.max(0, Math.min(1, (vh * .6 - t.top) / t.height));
        tl.style.setProperty('--p', (q * 100) + '%');
      }
      // Sticky stack scale for Desktop & Mobile
      var baseTop = innerWidth > 900 ? 96 : 72;
      var stepTop = innerWidth > 900 ? 22 : 14;
      stk.forEach(function(c, i) {
        var n = stk[i + 1];
        if (!n) return;
        var d = n.getBoundingClientRect().top - (baseTop + (i + 1) * stepTop);
        var k = Math.max(0, Math.min(1, 1 - d / 400));
        c.style.transform = 'scale(' + (1 - .04 * k) + ')';
      });
    }

    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    onScroll();

    // Counter animation
    function count(el) {
      var t = +el.dataset.count;
      var pre = el.dataset.pre || '';
      var suf = el.dataset.suf || '';
      var t0 = null;
      function f(ts) {
        t0 = t0 || ts;
        var k = Math.min((ts - t0) / 1800, 1);
        var e = 1 - Math.pow(1 - k, 4);
        el.textContent = pre + Math.round(t * e).toLocaleString() + suf;
        if (k < 1) requestAnimationFrame(f);
      }
      requestAnimationFrame(f);
    }

    // Intersection observer
    var io = new IntersectionObserver(function(es) {
      es.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('[data-count]').forEach(count);
          io.unobserve(e.target);
        }
      });
    }, { threshold: .15 });
    document.querySelectorAll('.rv').forEach(function(n) { io.observe(n); });
    setTimeout(function() { document.querySelectorAll('.hero [data-count]').forEach(count); }, 900);

    // Tabs
    var tabs = [].slice.call(document.querySelectorAll('.tab'));
    var pn = [].slice.call(document.querySelectorAll('.panel'));
    tabs.forEach(function(b, i) {
      b.addEventListener('click', function() {
        tabs.forEach(function(x, j) {
          x.setAttribute('aria-selected', j === i ? 'true' : 'false');
          pn[j].classList.toggle('on', j === i);
        });
      });
    });

    // Band parallax (if manual data-h exists)
    var H = [].slice.call(document.querySelectorAll('.bt[data-h]'));
    var band = function() {
      if (R) return;
      H.forEach(function(b) {
        var r = b.parentNode.getBoundingClientRect();
        var p = (innerHeight - r.top) / (innerHeight + r.height);
        var d = +b.dataset.h;
        if (!isNaN(d)) {
          b.style.transform = 'translateX(' + ((p - .5) * d * -38) + 'vw)';
        }
      });
    }
    if (H.length) {
      addEventListener('scroll', band, { passive: true });
      band();
    }

    // Word mask headings
    document.querySelectorAll('.head h2,.sticky-h h2').forEach(function(h) {
      var k = 0;
      h.innerHTML = h.textContent.trim().split(/\s+/).map(function(w) {
        return '<span class="w" style="--k:' + (k++) + '"><span>' + w + '</span></span>';
      }).join(' ');
    });

    // Glow pointer follow
    document.querySelectorAll('.stk,.qc,.pr,.panel').forEach(function(c) {
      c.addEventListener('pointermove', function(e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });

    // Magnetic buttons
    if (!R && matchMedia('(hover:hover)').matches) {
      document.querySelectorAll('.btn').forEach(function(b) {
        b.addEventListener('pointermove', function(e) {
          var r = b.getBoundingClientRect();
          b.style.translate = ((e.clientX - r.left - r.width / 2) * .18) + 'px ' + ((e.clientY - r.top - r.height / 2) * .28) + 'px';
        });
        b.addEventListener('pointerleave', function() { b.style.translate = '0 0'; });
      });
    }

    return function() {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      removeEventListener('scroll', band);
      io.disconnect();
    };
  }, []);

  return null;
}
