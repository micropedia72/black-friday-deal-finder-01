// app.js — DealSieve rendering, search, filters and sorting.
// No network use: all data comes from deals.js, loaded before this file.
(function () {
  "use strict";

  var CATEGORIES = [];
  var STORES = [];
  DEALS.forEach(function (d) {
    if (CATEGORIES.indexOf(d.category) === -1) CATEGORIES.push(d.category);
    if (STORES.indexOf(d.store) === -1) STORES.push(d.store);
  });
  CATEGORIES.sort();
  STORES.sort();

  var state = { q: "", category: "", store: "", minOff: 0, sort: "discount-desc" };

  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var resultLine = document.getElementById("result-line");
  var pills = document.getElementById("pills");
  var storeSel = document.getElementById("store");

  function money(n) {
    return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function pct(d) {
    return Math.round((1 - d.sale / d.usual) * 100);
  }
  function verdictLabel(v) {
    if (v === "new-low") return "New low";
    if (v === "strong") return "Strong deal";
    return "Routine";
  }
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- stats ----
  function renderStats() {
    var total = DEALS.length;
    var sumPct = 0;
    var maxPct = 0;
    var totalSave = 0;
    DEALS.forEach(function (d) {
      var p = pct(d);
      sumPct += p;
      if (p > maxPct) maxPct = p;
      totalSave += d.usual - d.sale;
    });
    var avg = Math.round(sumPct / total);
    statsEl.innerHTML =
      stat(total, "verified deals") +
      stat(avg + "%", "average discount") +
      stat(maxPct + "%", "biggest cut") +
      stat("$" + Math.round(totalSave).toLocaleString("en-US"), "total savings if you bought them all");
    function stat(num, lbl) {
      return '<div class="stat"><div class="num">' + num + '</div><div class="lbl">' + lbl + "</div></div>";
    }
  }
  var statsEl = document.getElementById("stats");

  // ---- category pills ----
  function renderPills() {
    var html = '<button class="pill active" data-cat="">All categories</button>';
    CATEGORIES.forEach(function (c) {
      html += '<button class="pill" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    });
    pills.innerHTML = html;
    pills.addEventListener("click", function (ev) {
      var b = ev.target.closest(".pill");
      if (!b) return;
      state.category = b.getAttribute("data-cat");
      Array.prototype.forEach.call(pills.children, function (p) {
        p.classList.toggle("active", p === b);
      });
      render();
    });
  }

  // ---- store options ----
  STORES.forEach(function (s) {
    var o = document.createElement("option");
    o.value = s;
    o.textContent = s;
    storeSel.appendChild(o);
  });

  // ---- filtering ----
  function visible() {
    var q = state.q.trim().toLowerCase();
    var list = DEALS.filter(function (d) {
      if (state.category && d.category !== state.category) return false;
      if (state.store && d.store !== state.store) return false;
      if (pct(d) < state.minOff) return false;
      if (q) {
        var hay = (d.product + " " + d.store + " " + d.category).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    if (state.sort === "discount-desc") list.sort(function (a, b) { return pct(b) - pct(a); });
    if (state.sort === "savings-desc") list.sort(function (a, b) { return b.usual - b.sale - (a.usual - a.sale); });
    if (state.sort === "price-asc") list.sort(function (a, b) { return a.sale - b.sale; });
    if (state.sort === "price-desc") list.sort(function (a, b) { return b.sale - a.sale; });
    return list;
  }

  function card(d) {
    var p = pct(d);
    var save = d.usual - d.sale;
    return (
      '<article class="card">' +
      '<div class="card-top"><span class="cat">' + esc(d.category) + '</span>' +
      '<span class="store">' + esc(d.store) + "</span></div>" +
      "<h2>" + esc(d.product) + "</h2>" +
      '<span class="verdict ' + esc(d.verdict) + '">' + verdictLabel(d.verdict) + "</span>" +
      '<div class="price-row"><span class="sale">' + money(d.sale) + "</span>" +
      '<span class="usual">' + money(d.usual) + "</span>" +
      '<span class="off">' + p + "% off</span></div>" +
      '<p class="save-line">You save ' + money(save) + " vs the usual price.</p>" +
      '<p class="evidence">' + esc(d.evidence) + "</p>" +
      '<p class="checked">Checked Nov 27, 2026, 6:49 PM WIB · ' + esc(d.source) + "</p>" +
      '<div class="spacer"></div>' +
      '<a class="buy" href="' + esc(d.url) + '" target="_blank" rel="noopener">View at ' + esc(d.store) + " →</a>" +
      "</article>"
    );
  }

  function render() {
    var list = visible();
    grid.innerHTML = list.map(card).join("");
    empty.hidden = list.length > 0;
    var bits = ["Showing <strong>" + list.length + " of " + DEALS.length + " deals</strong>"];
    if (state.category) bits.push("in " + esc(state.category));
    if (state.store) bits.push("at " + esc(state.store));
    if (state.minOff) bits.push(state.minOff + "% off or more");
    if (state.q.trim()) bits.push("matching “" + esc(state.q.trim()) + "”");
    resultLine.innerHTML = bits.join(" · ") + ".";
  }

  // ---- wire controls ----
  document.getElementById("search").addEventListener("input", function (ev) {
    state.q = ev.target.value;
    render();
  });
  storeSel.addEventListener("change", function (ev) {
    state.store = ev.target.value;
    render();
  });
  document.getElementById("discount").addEventListener("change", function (ev) {
    state.minOff = parseInt(ev.target.value, 10) || 0;
    render();
  });
  document.getElementById("sort").addEventListener("change", function (ev) {
    state.sort = ev.target.value;
    render();
  });

  renderStats();
  renderPills();
  render();
})();
