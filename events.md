---
title: Events
permalink: /events/
lead: "Upcoming functions and archived field reports from collective programs."
---
{% assign upcoming = site.data.events | where: 'type', 'upcoming' %}
{% assign past = site.data.events | where: 'type', 'past' %}

{% capture up_body %}
<div class="event-grid">
{% for event in upcoming limit:3 %}
<article class="event-card">
  <img src="{{ event.image | relative_url }}" alt="{{ event.title }} placeholder">
  <p class="stamp">{{ event.date }} · {{ event.location }} · UPCOMING</p>
  <h3>{{ event.title }}</h3>
  <p>{{ event.short_description }}</p>
  <a href="{{ event.rsvp }}">RSVP</a>
</article>
{% endfor %}
</div>
{% endcapture %}
{% include module.html title="Upcoming Events" body=up_body %}

{% capture past_body %}
<div class="event-grid">
{% for event in past %}
<article class="event-card past">
  <img src="{{ event.image | relative_url }}" alt="{{ event.title }} placeholder">
  <p class="stamp">{{ event.date }} · {{ event.location }} · FIELD REPORT</p>
  <h3>{{ event.title }}</h3>
  <p>{{ event.short_description }}</p>
</article>
{% endfor %}
</div>
{% endcapture %}
{% include module.html title="Field Reports" body=past_body %}
