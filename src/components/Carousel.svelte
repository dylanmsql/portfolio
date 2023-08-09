<script lang='ts'>
  import Fa from 'svelte-fa';
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import Dots from './Dots.svelte';
  import { SvelteComponent } from 'svelte';

  export let components: Array<SvelteComponent>;

  let index = 0;
  $: current = components[index];

  const prev = (e) => {
    e.preventDefault();
    const newIndex = index - 1;
    if (newIndex >= 0) {
      index = newIndex;
    }
  };

  const next = (e) => {
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
    <button on:click={prev}>
      <Fa icon={faArrowLeft} />
    </button>
    <Dots itemCount={components.length} current={index} />
    <button on:click={next}>
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
        width: 100%;
    }

    .carousel-content {
        width: 100%;
        height: 100%;
        display: flex;
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
    }
</style>
