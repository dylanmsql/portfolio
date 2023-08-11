<script lang='ts'>
  import Fa from 'svelte-fa';
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Dots from './Dots.svelte';
  import type { ComponentType } from 'svelte';

  export let components: ComponentType[];

  let index = 0;
  $: current = components[index];

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
    if (newIndex <= components.length - 1) {
      index = newIndex;
    }
  };
</script>

<div class='carousel'>
  {#key index}
    <div class='carousel-content'>
      <svelte:component this={current} />
    </div>
  {/key}
  <div class='carousel-panel'>
    <button on:click={prev} class:disable={index === 0}>
      <Fa icon={faArrowLeft} />
    </button>
    <Dots itemCount={components.length} current={index} />
    <button on:click={next} class:disable={index === components.length - 1}>
      <Fa icon={faArrowRight}/>
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

    .carousel-content {
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

    .disable {
        opacity: 0.5;
        cursor: none;
    }
</style>
