<script>
  import Fa from 'svelte-fa';

  export let contact;
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
        margin: 1rem;
        padding: 1rem;
        border-radius: 5px;
        background-color: #3c3d41;
        cursor: pointer;
        gap: 1rem;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        background-color: #2c2d31;
    }

    p {
        margin: 0;
        color: var(--color-yellow);
    }


</style>
