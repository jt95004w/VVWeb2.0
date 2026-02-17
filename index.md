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
{% include module.html title="Action Queue" body=tiles variant="core" %}

{% assign featured_slug = site.data.featured.artist_slug %}
{% assign featured_artist = site.artists | where: 'slug', featured_slug | first %}
{% if featured_artist == nil %}
  {% assign featured_artist = site.data.artists | where: 'slug', featured_slug | first %}
{% endif %}
{% capture spotlight %}
<p>{{ featured_artist.short_bio | default: site.data.featured.summary | truncate: 105 }}</p>
<p><a href="{{ '/artists/' | append: featured_slug | append: '/' | relative_url }}">View artist dossier: {{ featured_artist.name }}</a></p>
{% endcapture %}
{% include module.html title="Featured Artist" body=spotlight variant="core" %}

{% assign upcoming = site.data.events | where: 'type', 'upcoming' %}
{% capture upcoming_body %}
<ul class="mini-list">
{% for event in upcoming limit:2 %}
  <li><strong>{{ event.date }}</strong> — <a href="{{ '/events/' | relative_url }}">{{ event.title }}</a></li>
{% endfor %}
</ul>
{% endcapture %}
{% include module.html title="Upcoming Events Preview" body=upcoming_body variant="core" %}

{% include flavor_module.html class='home-flavor' %}
