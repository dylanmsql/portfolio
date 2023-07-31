<script>
    import {faGithub, faLinkedinIn, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";

    const socials = [
        {
            class: "git",
            icon: faGithub,
            link: "https://github.com/dylanmsql"
        },
        {
            class: "linkedin",
            icon: faLinkedinIn,
            link: "https://www.linkedin.com/in/dylan-masquelier-5741b0185/"
        }
    ];
</script>
<div class="social">
  {#each socials as social}
    <a href="{social.link}" class="{social.class}">
      <Fa icon="{social.icon}"/>
    </a>
  {/each}
</div>

<style>

    .social {
        width: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .social a {
        width: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        padding: 10px;
        text-align: center;
        transition: background-color 0.3s ease-in-out;
    }

    .social a:hover {
        transition: background-color 0.3s ease-in-out;
    }

    .git:hover {
        background-color: #010409;
    }

    .linkedin:hover {
        background-color: #0077b5;
    }
</style>
