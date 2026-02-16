---
title: Join
permalink: /join/
lead: "Membership and committee roles for people who want to build shared infrastructure for art."
---
{% capture levels %}
<div class="card-grid">
<div class="card"><h3>Core Member</h3><p>Governance + production ownership.</p></div>
<div class="card"><h3>Active Participant</h3><p>Project and event collaboration cadence.</p></div>
<div class="card"><h3>Casual Contributor</h3><p>Drop-in support for specific cycles.</p></div>
</div>
<p><a class="cta" href="#">Apply</a></p>
{% endcapture %}
{% include module.html title="Membership Levels" body=levels %}

{% capture committees %}
<div class="card-grid committees">
<div class="card" id="committee-legislative"><h3>Legislative</h3><p>Policy, governance, and review.</p></div>
<div class="card" id="committee-creative"><h3>Creative</h3><p>Program ideation and artist support.</p></div>
<div class="card" id="committee-release"><h3>Release</h3><p>Publishing, distribution, and archives.</p></div>
<div class="card" id="committee-outreach"><h3>Outreach &amp; Growth</h3><p>Community partnerships and communications.</p></div>
</div>
{% endcapture %}
{% include module.html title="Committees" body=committees %}

<div class="role-filter-wrap">
  <label for="committee-filter">Filter roles by committee</label>
  <select id="committee-filter">
    <option value="all">All committees</option>
    <option value="Legislative">Legislative</option>
    <option value="Creative">Creative</option>
    <option value="Release">Release</option>
    <option value="Outreach & Growth">Outreach &amp; Growth</option>
  </select>
</div>
{% assign role_headings = "Role|Committee|Time" | split: "|" %}
{% include index_table.html variant="roles" headings=role_headings rows=site.data.roles %}
