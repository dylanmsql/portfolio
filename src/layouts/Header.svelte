<script lang='ts'>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { sineIn } from 'svelte/easing';
  import Socials from '../components/Socials.svelte';
  import { debounce } from '../utils/Debounce';
  import { hasChanged } from '../utils/HasChanged';
  import { scrollSpy } from '../actions/scrollSpy';
  import type { NavItem } from '../utils/type';

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

  const navItems: NavItem[] = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Works', id: 'works' },
    { name: 'Contact', id: 'contact' },
  ];
</script>

<header style='--headerHeight: {height}vh;' use:scrollSpy={{sections: navItems}}>
  <div class='header' style='transform: translateY(-{$translateY}vh);'>
    <div class='initial'>
      DM<span class='text-color-yellow'>.</span>
    </div>
    <nav>
      {#each navItems as navItem, i}
        <a href={`#${navItem.id}`} class:active={i === 0}>{navItem.name}</a>
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
        background-color: var(--color-dark);
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
        color: var(--color-yellow);
    }

    .active {
        color: var(--color-yellow);
        border-bottom: solid 0.2rem var(--color-yellow);
        transition: all 0.1s ease-in-out;
    }
</style>
