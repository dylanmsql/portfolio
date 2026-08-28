<script lang='ts'>
  import Fa from 'svelte-fa';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
  import type { Project } from '../utils/type';

  let { project }: { project: Project } = $props();
</script>

<a class='project-card' href={project.link} target='_blank' rel='noopener noreferrer'>
  {#if project.image}
    <div class='thumb'>
      <img src={project.image} alt={`${project.name} screenshot`} loading='lazy' />
    </div>
  {/if}
  <div class='card-body'>
    <div class='project-icon'>
      <Fa icon={project.icon} />
    </div>
    <h2>{project.name}</h2>
    <p>{project.description}</p>
    <div class='tags'>
      {#each project.tags as tag (tag)}
        <span class='tag'>{tag}</span>
      {/each}
    </div>
    <span class='visit'>
      Visit site
      <Fa icon={faArrowUpRightFromSquare} />
    </span>
  </div>
</a>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        min-height: 220px;
        border-radius: 20px;
        border: 1px dashed rgba(235, 178, 87, 0.35);
        background-color: rgba(255, 255, 255, 0.02);
        overflow: hidden;
        text-align: center;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        transition: all 0.25s ease-in-out;
    }

    .project-card:hover {
        border-style: solid;
        background-color: rgba(255, 255, 255, 0.04);
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -12px rgba(235, 178, 87, 0.4);
    }

    .thumb {
        width: 100%;
        aspect-ratio: 16 / 9;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top left;
        display: block;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem 3rem 3rem;
    }

    .project-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--color-yellow-soft);
        color: var(--color-yellow);
        font-size: 1.5rem;
    }

    h2 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 700;
    }

    p {
        margin: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.1rem;
        max-width: 40ch;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
    }

    .tag {
        padding: 0.25rem 0.75rem;
        border-radius: 999px;
        background-color: rgba(255, 255, 255, 0.06);
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.85rem;
    }

    .visit {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
        color: var(--color-yellow);
        font-weight: 600;
        font-size: 0.95rem;
    }
</style>
