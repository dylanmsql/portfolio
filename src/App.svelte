<script lang="ts">
  import Header from "./layouts/Header.svelte";
  import About from "./components/Content/About.svelte";
  import Content from "./layouts/Content.svelte";
  import Skills from "./components/Content/Skills.svelte";
  import Works from "./components/Content/Works.svelte";
  import Contact from "./components/Content/Contact.svelte";
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
