---
title: Hello
meta:
  - name: description
    content: Hello World
test: test
---

<h1>Hello world!</h1>

Front matter: {{ frontmatter }}





<script setup>
import Counter2 from '../Counter2.vue'
</script>

<Counter />
<br>
<Counter2 />

<route>
{
  meta: {
    layout: 'home'
  }
}
</route>
