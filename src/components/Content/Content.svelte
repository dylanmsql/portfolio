<div class="section-wrapper">
  <slot></slot>
</div>

<style>
    .section-wrapper {
        min-height: 100vh;
    }

    :global(section) {
        width: 100%;
        min-height: inherit;
    }
</style>
