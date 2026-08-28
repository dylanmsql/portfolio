<script lang='ts'>
  import Fa from 'svelte-fa';
  import type { Contact } from '../utils/type';

  let { contact }: { contact: Contact } = $props();
</script>


<a href={contact.link} target='_blank'>
  {#if contact.icon}
    <Fa icon={contact.icon} />
  {/if}
  <p>{contact.name}</p>
</a>

<style>
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 1.5rem;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background-color: var(--color-dark-secondary);
        color: rgba(255, 255, 255, 0.85);
        cursor: pointer;
        gap: 1rem;
        transition: all 0.25s ease-in-out;
    }

    a:hover {
        background-color: #2c2d31;
        border-color: var(--color-yellow-soft);
        color: var(--color-yellow);
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -12px rgba(235, 178, 87, 0.4);
    }

    p {
        margin: 0;
        color: var(--color-yellow);
    }
</style>
