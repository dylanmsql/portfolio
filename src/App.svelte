<script lang='ts'>
  import Header from './layouts/Header.svelte';
  import About from './layouts/section/About.svelte';
  import Content from './layouts/Content.svelte';
  import Skills from './layouts/section/Skills.svelte';
  import Works from './layouts/section/Works.svelte';
  import Contact from './layouts/section/Contact.svelte';
</script>

<main>
  <Header />
  <Content>
    <About />
    <Skills />
    <Works />
    <Contact />
  </Content>
</main>
