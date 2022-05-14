---
layout: base.liquid
---

# Welcome to the Recipe Site
{% for recipe in collections.all %}
{% if recipe.data.data.category == 'dessert' %}
- [{{recipe.data.title}}]({{recipe.url}})
{% endif %}
{% endfor %}

You should read it!