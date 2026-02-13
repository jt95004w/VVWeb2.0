---
title: Artists
permalink: /artists/
lead: "Directory of participating artists, grouped by medium and process tags."
---
<div class="tag-filter">
  <label for="artist-tag-filter">Filter by tag</label>
  <select id="artist-tag-filter">
    <option value="all">All</option>
    <option value="sound">Sound</option>
    <option value="installation">Installation</option>
    <option value="film">Film</option>
    <option value="performance">Performance</option>
    <option value="print">Print</option>
    <option value="sculpture">Sculpture</option>
  </select>
</div>

{% assign artist_rows = site.artists %}
{% if artist_rows.size == 0 %}
  {% assign artist_rows = site.data.artists %}
{% endif %}
{% assign artist_headings = "Name|Location|Tags" | split: "|" %}
{% include index_table.html variant="artists" headings=artist_headings rows=artist_rows %}
