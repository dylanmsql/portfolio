<script lang='ts'>
  import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
  import { reveal } from '../../actions/reveal';
  import ProjectCard from '../../components/ProjectCard.svelte';
  import type { Project } from '../../utils/type';

  const projects: Project[] = [
    {
      name: 'Morse Learning',
      description: 'A small app I built for my girlfriend while she was learning Morse code — a searchable reference table plus a training mode to test yourself.',
      link: 'https://dylanmsql.github.io/morse-learning/',
      tags: ['Svelte', 'SvelteKit', 'TypeScript'],
      icon: faTowerBroadcast,
      image: 'works/morse-learning.jpg',
    },
  ];
</script>

<section id='works' class='reveal-on-scroll' use:reveal>
  <div class='works-grid'>
    <div class='ghost-card'>
      <span class='plus'>+</span>
    </div>
    {#each projects as project (project.name)}
      <div class='project-slot'>
        <ProjectCard {project} />
      </div>
    {/each}
    <div class='ghost-card'>
      <span class='plus'>+</span>
    </div>
  </div>
</section>

<style>
    #works {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        background-color: var(--color-dark-secondary);
    }

    .works-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1.5rem;
        width: 100%;
    }

    .ghost-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 220px;
        border-radius: 20px;
        text-align: center;
        grid-column: span 3;
        border: 1px dashed rgba(255, 255, 255, 0.12);
        color: rgba(255, 255, 255, 0.15);
        animation: pulse 3s ease-in-out infinite;
    }

    .ghost-card:first-child {
        grid-column: 1 / 4;
    }

    .ghost-card:last-child {
        grid-column: 10 / 13;
        animation-delay: 1.5s;
    }

    .plus {
        font-size: 1.5rem;
        font-weight: 300;
    }

    .project-slot {
        grid-column: 4 / 10;
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .ghost-card {
            animation: none;
        }
    }

    @media (max-width: 900px) {
        .ghost-card {
            display: none;
        }

        .project-slot {
            grid-column: 1 / -1;
        }
    }
</style>
