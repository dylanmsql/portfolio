<script>
    import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";
</script>
<div class="social">
  <a href="https://github.com/dylanmsql" class="git"><Fa icon="{faGithub}" /></a>
  <a href="https://www.linkedin.com/in/dylan-masquelier-5741b0185/" class="linkedin"><Fa icon="{faLinkedinIn}" /></a>
</div>

<style>

    .social {
        width: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
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
