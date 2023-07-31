<script lang="ts">
    import Fa from "svelte-fa";
    import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
    import Profile from "./Profile.svelte";
    import Socials from "./Socials.svelte";
</script>

<header>
  <Profile />
  <nav>
    <a>About</a>
    <a>Skills</a>
    <a>Works</a>
    <a>Contact</a>
  </nav>
  <Socials />
</header>

<style>
    header {
        display: flex;
        position: fixed;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
        width: 10rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    nav a {
        margin: 1rem 0;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
    }

    a {
        transition: color 0.5s ease;
    }

    a:hover{
        color: #31e3c3;
        transition: color 0.5s ease;
    }
</style>
