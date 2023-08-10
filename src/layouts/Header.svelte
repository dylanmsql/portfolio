<script lang='ts'>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { sineIn } from 'svelte/easing';
  import Socials from '../components/Socials.svelte';
  import { debounce } from '../utils/Debounce';
  import { hasChanged } from '../utils/HasChanged';

  export let height = 10;

  const translateY = tweened(0, {
    duration: 500,
    easing: sineIn,
  });

  let lastScrollY = 0;
  let ticking = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        determineShowing(currentScrollY);
        ticking = false;
      });
      ticking = true;
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  const determineShowing = (currentScrollY: number) => {
    if (currentScrollY > lastScrollY && hasChanged($translateY, height) && currentScrollY > height) {
      translateY.set(height);
    } else if (hasChanged($translateY, 0)) {
      translateY.set(0);
    }
    lastScrollY = currentScrollY;
  };

  onMount(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', debouncedHandleScroll);
  });

  const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Works', link: '#works' },
    { name: 'Contact', link: '#contact' },
  ];
</script>

<header style='--headerHeight: {height}vh;'>
  <div class='header' style='transform: translateY(-{$translateY}vh);'>
    <div class='initial'>
      DM<span class='text-color-yellow'>.</span>
    </div>
    <nav>
      {#each navItems as navItem}
        <a href={navItem.link}>{navItem.name}</a>
      {/each}
      <Socials />
    </nav>
  </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        height: var(--headerHeight);
        z-index: 100;
    }

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #2E2F34;
        padding: 0 5rem;
        width: 100%;
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
