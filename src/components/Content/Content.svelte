<div>
  <slot></slot>
</div>

<style>
    div {
        justify-content: center;
        align-items: center;
        margin: 0 auto 0 10rem;
        height: 100vh;
    }

    :global(section) {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
