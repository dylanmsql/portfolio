<script lang='ts'>
  import Fa from 'svelte-fa';
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Dots from './Dots.svelte';
  import { onMount } from 'svelte';

  let container: HTMLDivElement;
  let index = 0;
  let items = [];

  onMount(() => {
    items = Array.from(container.children);
  });

  $: slideValue = container ? -(index * container.offsetWidth) + 'px' : '0px';

  const prev = (e: Event) => {
    e.preventDefault();
    const newIndex = index - 1;
    if (newIndex >= 0) {
      index = newIndex;
    }
  };

  const next = (e: Event) => {
    e.preventDefault();
    const newIndex = index + 1;
    if (newIndex < items.length) {
      index = newIndex;
    }
  };
</script>

<div class='carousel'>
  <div class='carousel-container'>
    <div bind:this={container} class='carousel-items' style={`transform: translateX(${slideValue});`}>
      <slot></slot>
    </div>
  </div>
  <div class='carousel-panel'>
    <button on:click={prev} class:disabled={index === 0}>
      <Fa icon={faArrowLeft} />
    </button>
    <Dots itemCount={items.length} current={index} />
    <button on:click={next} class:disabled={index === items.length - 1}>
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

    .carousel-container {
        display: flex;
        align-items: center;
        overflow: hidden;
        width: 100%;
    }

    .carousel-items {
        display: flex;
        transition: transform 0.3s;
        width: 100%;
    }

    .carousel-items > * {
        width: 100%;
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
        border: solid 3px #EBB257;
        cursor: pointer;
        background-color: transparent;
        color: #EBB257;
        transition: all 0.3s ease-in-out;
    }

    .disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
