<script lang='ts'>
  let { itemCount, current, onSelect }: {
    itemCount: number;
    current: number;
    onSelect?: (_: number) => void;
  } = $props();
</script>

<div class='dots-container'>
  {#each Array(itemCount) as _, i}
    <button
      class='dots'
      class:active={current === i}
      aria-label={`Go to slide ${i + 1}`}
      aria-current={current === i}
      onclick={() => onSelect?.(i)}
    ></button>
  {/each}
</div>

<style lang='scss'>
  .dots-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dots {
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 999px;
    border: none;
    background-color: rgba(235, 178, 87, 0.3);
    cursor: pointer;
    transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  .active {
    width: 22px;
    background-color: var(--color-yellow);
  }
</style>
