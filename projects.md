---
layout: page
title: Projects
permalink: /projects/
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in turpis tincidunt, condimentum felis ac, tincidunt mauris. Cras id eros sit amet sem porttitor gravida. Nunc sed mattis augue, sed lobortis tellus.

<div class="grid">
  {% for project in site.projects reversed %}
    {% include grid.html %}
  {% endfor %}
</div>