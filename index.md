---
layout: default
title: Home
permalink: /
---
{% include hero.html %}

{% capture tiles %}
<div class="feature-grid">
  <a class="feature-tile" href="{{ '/join/' | relative_url }}"><strong>Join the Collective</strong><span>Apply</span></a>
  <a class="feature-tile" href="{{ '/events/' | relative_url }}"><strong>Next Function</strong><span>Upcoming Events</span></a>
  <a class="feature-tile" href="#orientation"><strong>Watch Orientation</strong><span>Training Tape</span></a>
</div>
{% endcapture %}
{% include module.html title="Action Queue" body=tiles %}

{% capture updates %}
<ul class="mini-list">
{% for update in site.data.updates %}
<li><strong>{{ update.date }}</strong> — {{ update.item }}</li>
{% endfor %}
</ul>
{% endcapture %}
{% include module.html title="Latest Deployments" body=updates %}

{% assign featured_slug = site.data.featured.artist_slug %}
{% assign featured_artist = site.artists | where: 'slug', featured_slug | first %}
{% if featured_artist == nil %}
  {% assign featured_artist = site.data.artists | where: 'slug', featured_slug | first %}
{% endif %}
{% capture spotlight %}
<p>{{ site.data.featured.summary }}</p>
<p><a href="{{ '/artists/' | append: featured_slug | append: '/' | relative_url }}">View artist dossier: {{ featured_artist.name }}</a></p>
{% endcapture %}
{% include module.html title=site.data.featured.headline body=spotlight %}

{% capture report %}
<svg class="faux-chart" viewBox="0 0 300 100" role="img" aria-label="Quarterly culture report chart">
  <rect x="14" y="18" width="16" height="64" fill="#c6bfd8"/>
  <rect x="48" y="30" width="16" height="52" fill="#9d90c2"/>
  <rect x="82" y="24" width="16" height="58" fill="#7f6fb3"/>
  <rect x="116" y="12" width="16" height="70" fill="#6a2cff"/>
  <polyline points="156,72 192,48 228,57 266,33" fill="none" stroke="#ff6a00" stroke-width="3"/>
</svg>
<p>Quarterly creative throughput exceeded baseline by <strong>13.2%</strong> despite deliberate bureaucracy.</p>
<div class="stamp-row">
  <img src="{{ '/assets/overlays/stamp-approved.svg' | relative_url }}" alt="Approved stamp">
  <img src="{{ '/assets/overlays/stamp-redacted.svg' | relative_url }}" alt="Redacted stamp">
</div>
{% endcapture %}
{% include module.html title="Quarterly Culture Report" body=report class="culture-report" %}

{% capture memo %}
<div class="memo-paper">
  <p><strong>INTERNAL MEMO // 22-B</strong></p>
  <p>Adjusting performance review metrics to better track risk-taking and collaborative drift.</p>
  <div class="redacted"></div>
  <div class="redacted"></div>
  <div class="redacted" style="width: 78%;"></div>
</div>
{% endcapture %}
{% include module.html title="Internal Memo" body=memo %}
