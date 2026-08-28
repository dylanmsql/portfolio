<script lang='ts'>
  let { size = 50 }: { size?: number } = $props();
</script>

<hr class='solid' style={`width:${size}%`}>

<style>
    hr.solid {
        height: 4px;
        border: none;
        border-radius: 4px;
        background: linear-gradient(90deg, var(--color-yellow), transparent);
    }
</style>
