<div class="section-wrapper">
  <slot></slot>
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
</style>
