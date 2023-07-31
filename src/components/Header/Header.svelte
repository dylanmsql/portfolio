<script lang="ts">
    import Profile from "./Profile.svelte";
    import Socials from "./Socials.svelte";

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
        },
        {
            name: "Resume",
            link: "/src/assets/Resume.pdf",
        },
    ];
</script>

<header>
  <Profile />
  <nav>
    {#each navItems as navItem}
      <a href={navItem.link}>{navItem.name}</a>
    {/each}
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
        background-color: #1a1a1a;
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
