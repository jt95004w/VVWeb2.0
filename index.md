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
