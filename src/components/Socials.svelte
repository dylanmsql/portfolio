<script lang="ts">
    import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";

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

<div class="socials">
  <span>|</span>
  {#each socials as social}
    <a href="{social.link}">
      <Fa icon={social.icon} />
    </a>
  {/each}
</div>

<style lang="scss">
  .socials {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    a {
      color: #fff;
      font-size: 1.2rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #EBB257;
      }
    }
  }
</style>
