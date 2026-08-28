<script lang='ts'>
  let { label = 'Click me', onClick = () => {} }: {
    label?: string;
    onClick?: (_: MouseEvent) => void;
  } = $props();
</script>

<button onclick={onClick}>
  {label}
</button>

<style lang='scss'>
  button {
    border: 2px solid var(--color-yellow);
    border-radius: 8px;
    background: var(--color-yellow);
    color: var(--color-dark);
    cursor: pointer;
    font-weight: 600;
    font-size: 1em;
    padding: 0.7em 1.4em;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background: transparent;
      color: var(--color-yellow);
      transform: translateY(-2px);
      box-shadow: 0 14px 28px -14px rgba(235, 178, 87, 0.6);
    }

    &:active {
      transform: translateY(0);
    }
  }
</style>
