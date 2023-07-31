<script>
    import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";
</script>
<ul class="social">
  <li><a href="https://github.com/dylanmsql"><Fa icon="{faGithub}" /></a></li>
  <li><a href="https://www.linkedin.com/in/dylan-masquelier-5741b0185/"><Fa icon="{faLinkedinIn}" /></a></li>
</ul>

<style>
    li {
        list-style: none;
        margin: 1rem 0;
    }

    li a {
        font-size: 1.3rem;
    }

    a:hover {
        color: #31e3c3;
        transition: color 0.3s ease-in-out;
    }
</style>
