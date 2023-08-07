<script lang="ts">
    import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";

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

    const socials = [
        {
            icon: faGithub,
            link: "https://github.com/dylanmsql"
        },
        {
            icon: faLinkedinIn,
            link: "https://www.linkedin.com/in/dylan-masquelier-5741b0185/"
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
    <span>|</span>
    {#each socials as social}
      <a href={social.link}>
        <Fa icon={social.icon} />
      </a>
    {/each}
  </nav>
</header>

<style>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 10vh;
        background-color: #2E2F34;
        padding: 0 2rem;
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
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
