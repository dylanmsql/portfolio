<script lang="ts">
  import Header from "./components/Header/Header.svelte";
  import About from "./components/Content/About.svelte";
  import Content from "./components/Content/Content.svelte";
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

<style>
    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
    a:hover {
        color: #535bf2;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
</style>
