<script lang='ts'>
  import type { Snippet } from 'svelte';

  let { children }: { children: Snippet } = $props();
</script>

<div class='section-wrapper'>
  {@render children()}
</div>

<style>
    .section-wrapper {
        min-height: 100vh;
        margin-top: 10vh;
    }

    :global(section) {
        width: 100%;
        padding: 0 5rem;
        min-height: inherit;
    }

    :global(section.reveal-on-scroll) {
        opacity: 0;
        transform: translateY(32px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    :global(section.reveal-on-scroll.revealed) {
        opacity: 1;
        transform: none;
    }

    @media (max-width: 768px) {
        :global(section) {
            padding: 0 1rem;
        }
    }
</style>
