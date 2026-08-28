<script lang='ts'>
  import SkillCard from '../../../components/SkillCard.svelte';
  import type { Skill } from '../../../utils/type';
  import { reveal } from '../../../actions/reveal';

  interface Category {
    name: string;
    content: Skill[];
  }

  const categories: Category[] = [
    {
      name: 'Langages',
      content: [
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', name: 'C' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', name: 'C++' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', name: 'C#' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png', name: 'Java' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png', name: 'JavaScript' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png', name: 'Python' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', name: 'Go' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg', name: 'Rust', invert: true },
      ],
    },
    {
      name: 'Front-end',
      content: [
        {
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
          name: 'Svelte',
        },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/vue-282497.png', name: 'Vue' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', name: 'Angular' },
      ],
    },
    {
      name: 'Back-end',
      content: [
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', name: 'Spring Boot' },
        { image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg', name: '.NET Core' },
      ],
    },
    {
      name: 'Base de données',
      content: [
        { image: 'https://cdn.iconscout.com/icon/free/png-256/mysql-19-1174939.png', name: 'MySQL' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png', name: 'PostgreSQL' },
      ],
    },
    {
      name: 'Outils',
      content: [
        { image: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png', name: 'Git' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png', name: 'Docker' },
      ],
    },
  ];
</script>

<section id='skills' class='reveal-on-scroll' use:reveal>
  <div class='skills-wrapper'>
    <h1>Skills</h1>
    <div class='groups'>
      {#each categories as category, i (category.name)}
        <div class={`skill-group reveal-on-scroll group-${i}`} use:reveal>
          <h3><span class='marker'></span>{category.name}</h3>
          <div class='content-area'>
            {#each category.content as skill (skill.name)}
              <SkillCard {skill} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
    #skills {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        background-color: var(--color-dark);
    }

    .skills-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 50px 0;
    }

    #skills h1 {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: 0 auto 50px auto;
    }

    .groups {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1.5rem;
        width: 100%;
    }

    .skill-group {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 20px;
        background-color: var(--color-dark-secondary);
        border: 1px solid rgba(255, 255, 255, 0.06);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .skill-group:global(.revealed) {
        opacity: 1;
        transform: none;
    }

    /* Langages: big card, left column, spans both rows */
    .group-0 {
        grid-column: 1 / 8;
        grid-row: 1 / 3;
    }

    /* Front-end */
    .group-1 {
        grid-column: 8 / 13;
        grid-row: 1 / 2;
    }

    /* Back-end */
    .group-2 {
        grid-column: 8 / 13;
        grid-row: 2 / 3;
    }

    /* Base de données */
    .group-3 {
        grid-column: 1 / 7;
        grid-row: 3 / 4;
    }

    /* Outils */
    .group-4 {
        grid-column: 7 / 13;
        grid-row: 3 / 4;
    }

    .skill-group h3 {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin: 0 0 1.25rem 0;
        color: var(--color-yellow);
        font-size: 1.1rem;
        font-weight: 600;
        letter-spacing: 0.03em;
    }

    .marker {
        width: 8px;
        height: 8px;
        border-radius: 2px;
        background-color: var(--color-yellow);
        flex-shrink: 0;
    }

    .content-area {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        gap: 20px;
        flex: 1;
    }

    @media (prefers-reduced-motion: reduce) {
        .skill-group {
            opacity: 1;
            transform: none;
            transition: none;
        }
    }

    @media (max-width: 1024px) {
        .groups {
            grid-template-columns: 1fr;
        }

        .group-0,
        .group-1,
        .group-2,
        .group-3,
        .group-4 {
            grid-column: 1 / -1;
            grid-row: auto;
        }
    }

    @media (max-width: 768px) {
        .content-area {
            justify-content: center;
        }
    }
</style>
