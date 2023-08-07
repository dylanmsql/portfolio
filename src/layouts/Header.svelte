<script lang="ts">
    import Socials from "../components/Socials.svelte";

    const navItems = [
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Skills",
            link: "#skills",
        },
        {
            name: "Works",
            link: "#works",
        },
        {
            name: "Contact",
            link: "#contact",
        }
    ];
</script>

<header>
  <div class="initial">
    DM<span class="text-color-yellow">.</span>
  </div>
  <nav>
    {#each navItems as navItem}
      <a href={navItem.link}>{navItem.name}</a>
    {/each}
    <Socials/>
  </nav>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        background-color: #2E2F34;
        padding: 0 5rem;
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .initial {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
    }

    .text-color-yellow {
        color: #EBB257;
    }
</style>
