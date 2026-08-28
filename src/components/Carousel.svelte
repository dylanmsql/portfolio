<script lang='ts'>
  import type { Snippet } from 'svelte';
  import { spring } from 'svelte/motion';
  import Fa from 'svelte-fa';
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Dots from './Dots.svelte';

  let { children, count }: { children: Snippet; count: number } = $props();

  let viewport: HTMLDivElement | undefined = $state();
  let viewportWidth = $state(0);
  let index = $state(0);

  let dragging = $state(false);
  let dragStartX = 0;
  let dragDelta = $state(0);

  const reducedMotion = typeof matchMedia !== 'undefined'
    && matchMedia('(prefers-reduced-motion: reduce)').matches;

  const x = spring(0, reducedMotion ? { stiffness: 1, damping: 1 } : { stiffness: 0.15, damping: 0.8 });

  $effect(() => {
    if (!viewport) return;
    const observer = new ResizeObserver(([entry]) => {
      viewportWidth = entry.contentRect.width;
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  });

  $effect(() => {
    const target = index * -viewportWidth + (dragging ? dragDelta : 0);
    x.set(target, { hard: dragging });
  });

  const goTo = (newIndex: number) => {
    index = Math.max(0, Math.min(count - 1, newIndex));
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  const onPointerDown = (e: PointerEvent) => {
    dragging = true;
    dragStartX = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    dragDelta = e.clientX - dragStartX;
  };

  const onPointerUp = () => {
    if (!dragging) return;
    dragging = false;
    const threshold = viewportWidth * 0.2;
    if (dragDelta < -threshold) next();
    else if (dragDelta > threshold) prev();
    dragDelta = 0;
  };
</script>

<div class='carousel'>
  <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class='carousel-viewport'
    bind:this={viewport}
    role='group'
    aria-roledescription='carousel'
    aria-label='Bio carousel'
    tabindex='0'
    onkeydown={onKeydown}
    onpointerdown={onPointerDown}
    onpointermove={onPointerMove}
    onpointerup={onPointerUp}
    onpointercancel={onPointerUp}
  >
    <div class='carousel-track' class:dragging style={`transform: translateX(${$x}px);`}>
      {@render children()}
    </div>
  </div>
  <div class='carousel-panel'>
    <button onclick={prev} disabled={index === 0} aria-label='Previous slide'>
      <Fa icon={faArrowLeft} />
    </button>
    <Dots itemCount={count} current={index} onSelect={goTo} />
    <button onclick={next} disabled={index === count - 1} aria-label='Next slide'>
      <Fa icon={faArrowRight} />
    </button>
  </div>
</div>

<style>
    .carousel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .carousel-viewport {
        display: flex;
        align-items: center;
        overflow: hidden;
        width: 100%;
        cursor: grab;
        touch-action: pan-y;
        outline-offset: 6px;
    }

    .carousel-viewport:active {
        cursor: grabbing;
    }

    .carousel-track {
        display: flex;
        width: 100%;
    }

    .carousel-track > :global(*) {
        flex: 0 0 100%;
        user-select: none;
    }

    .carousel-track.dragging > :global(*) {
        pointer-events: none;
    }

    .carousel-panel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100px;
    }

    .carousel-panel button {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: solid 3px var(--color-yellow);
        cursor: pointer;
        background-color: transparent;
        color: var(--color-yellow);
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
    }

    .carousel-panel button:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 12px 20px -10px rgba(235, 178, 87, 0.5);
    }

    button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
</style>
