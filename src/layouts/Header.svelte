<script lang='ts'>
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { sineIn } from 'svelte/easing';
  import Socials from '../components/Socials.svelte';
  import { debounce } from '../utils/Debounce';
  import { hasChanged } from '../utils/HasChanged';
  import { scrollSpy } from '../actions/scrollSpy';
  import type { NavItem } from '../utils/type';

  let { height = 10 }: { height?: number } = $props();

  const translateY = tweened(0, {
    duration: 500,
    easing: sineIn,
  });

  let lastScrollY = 0;
  let ticking = false;
  let scrolled = $state(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        determineShowing(currentScrollY);
        scrolled = currentScrollY > 10;
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
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Works', id: 'works' },
    { name: 'Contact', id: 'contact' },
  ];

  let menuOpen = $state(false);

  const toggleMenu = () => (menuOpen = !menuOpen);
  const closeMenu = () => (menuOpen = false);
</script>

<header style='--headerHeight: {height}vh;' use:scrollSpy={{sections: navItems}}>
  <div class='header' class:scrolled style='transform: translateY(-{$translateY}vh);'>
    <div class='initial'>
      DM<span class='text-color-yellow'>.</span>
    </div>
    <button
      class='menu-toggle'
      class:open={menuOpen}
      onclick={toggleMenu}
      aria-label='Toggle navigation'
      aria-expanded={menuOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav class:open={menuOpen}>
      {#each navItems as navItem, i}
        <a href={`#${navItem.id}`} class:active={i === 0} onclick={closeMenu}>{navItem.name}</a>
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
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-dark);
        border-bottom: 1px solid transparent;
        padding: 0 5rem;
        width: 100%;
        transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
    }

    .header.scrolled {
        background-color: rgba(46, 47, 52, 0.72);
        border-bottom-color: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;
    }

    a {
        position: relative;
        color: white;
        text-decoration: none;
    }

    nav a:not(.active)::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.3rem;
        width: 0;
        height: 0.15rem;
        background-color: var(--color-yellow);
        transition: width 0.25s ease-in-out;
    }

    nav a:not(.active):hover::after {
        width: 100%;
    }

    .initial {
        font-family: var(--font-heading);
        font-size: 2em;
        font-weight: 700;
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

    .menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.35rem;
        width: 2rem;
        height: 2rem;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        z-index: 101;
    }

    .menu-toggle span {
        display: block;
        width: 100%;
        height: 0.15rem;
        background-color: white;
        border-radius: 1px;
        transition: all 0.2s ease-in-out;
    }

    .menu-toggle.open span:nth-child(1) {
        transform: translateY(0.5rem) rotate(45deg);
    }

    .menu-toggle.open span:nth-child(2) {
        opacity: 0;
    }

    .menu-toggle.open span:nth-child(3) {
        transform: translateY(-0.5rem) rotate(-45deg);
    }

    @media (max-width: 768px) {
        .header {
            padding: 0 1.5rem;
        }

        .menu-toggle {
            display: flex;
        }

        nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            width: 100%;
            padding: 2rem 1.5rem;
            background-color: var(--color-dark);
            border-top: solid 1px rgba(255, 255, 255, 0.1);
        }

        nav.open {
            display: flex;
        }
    }
</style>
