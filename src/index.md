---
layout: base.liquid
pagination: 
  data: collections.recipes
  size: 2
  alias: recipes
---

# Welcome to the Recipe Site

{% for recipe in recipes %}
- [{{recipe.data.title}}]({{recipe.url}})
{% endfor %}

You should read it!