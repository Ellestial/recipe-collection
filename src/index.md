---
layout: base.liquid
pagination: 
  data: collections.recipe
  size: 2
---

# Welcome to the Recipe Site

{% for recipe in collections.recipe %}
- [{{recipe.data.title}}]({{recipe.url}})
{% endfor %}

You should read it!