<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Skill from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Header from "./components/Header.svelte";
  export let url: string = '';
</script>

<!--<Router url="{url}">-->
<!--  <nav>-->
<!--    <Link to="/">Home</Link>-->
<!--    <Link to="/skill">Skill</Link>-->
<!--  </nav>-->
<!--  <Route path="/" component="{Home}"/>-->
<!--  <Route path="/skill" component="{Skill}"/>-->
<!--</Router>-->

<main>
  <Header />
</main>

<style scope>
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
