<script lang='ts'>
  export let label: string = 'Click me';
  export let onClick: (_: Event) => void = () => {
  };
</script>

<button on:click='{onClick}'>
  {label}
</button>

<style lang='scss'>
  button {
    border: 3px solid #EBB257;
    color: #EBB257;
    cursor: pointer;
    font-size: 1em;
    padding: 0.5em 1em;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #EBB257;
      color: #fff;
    }
  }
</style>
