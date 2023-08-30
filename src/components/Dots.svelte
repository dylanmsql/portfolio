<script lang='ts'>
  export let itemCount: number;
  export let current;
</script>

<div class='dots-container'>
  {#each Array(itemCount) as _, i}
    <span class='dots' class:active={current === i}></span>
  {/each}
</div>

<style lang='scss'>
  .dots-container {
    display: flex;
    gap: 0.5rem;
  }

  .dots {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: solid 2px var(--color-yellow);
    transition: all 0.3s ease-in-out;
  }

  .active {
    transform: scale(1.5);
    background-color: var(--color-yellow);
    transition: all 0.3s ease-in-out;
  }
</style>
