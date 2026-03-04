// Fiatballers Dashboard Loader
(function() {
  var CDN = 'https://cdn.jsdelivr.net/gh/Fiatballers/fiatballers-dashboard@f62b3e8/dashboard.js';
  
  fetch(CDN)
    .then(function(r) { return r.text(); })
    .then(function(html) {
      // Use DOMParser to safely parse
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');
      
      // Create container if not exists
      var container = document.getElementById('fb-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'fb-container';
        document.body.appendChild(container);
      }
      
      // Add styles to head
      doc.querySelectorAll('link, style').forEach(function(el) {
        document.head.appendChild(document.adoptNode(el));
      });
      
      // Add non-script elements to container
      doc.body.childNodes.forEach(function(node) {
        if (node.nodeName !== 'SCRIPT') {
          container.appendChild(document.adoptNode(node));
        }
      });
      
      // Execute scripts in order using eval
      var scripts = Array.from(doc.querySelectorAll('script'));
      var extScripts = scripts.filter(function(s) { return s.src; });
      var inlineScripts = scripts.filter(function(s) { return !s.src; });
      
      // Load external scripts sequentially, then run inline
      function loadExt(i) {
        if (i >= extScripts.length) {
          // All external loaded, run inline
          inlineScripts.forEach(function(s) {
            try { eval(s.textContent); } catch(e) { console.error('Script error:', e); }
          });
          return;
        }
        var s = document.createElement('script');
        s.src = extScripts[i].src;
        s.onload = function() { loadExt(i + 1); };
        s.onerror = function() { loadExt(i + 1); };
        document.head.appendChild(s);
      }
      loadExt(0);
    })
    .catch(function(e) { console.error('Dashboard load error:', e); });
})();
