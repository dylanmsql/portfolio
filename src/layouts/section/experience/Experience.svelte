<script lang='ts'>
  import ExperienceItem from './ExperienceItem.svelte';
  import { reveal } from '../../../actions/reveal';

  interface Entry {
    project: string;
    tag?: string;
    location: string;
    role: string;
    bullets: string[];
  }

  const missions: Entry[] = [
    {
      project: 'IroCO2',
      tag: 'GreenTech',
      location: 'Lille',
      role: 'Fullstack Developer',
      bullets: [
        'Migrated to a clean / hexagonal architecture',
        'AWS infrastructure with Terraform',
        'Open-source contributions',
      ],
    },
    {
      project: 'Décathlon',
      tag: 'Packaging compliance app',
      location: 'Lille',
      role: 'Fullstack Developer',
      bullets: [
        'Feature flipping & data history tracking',
        'Kafka integration & data analysis',
      ],
    },
    {
      project: 'Pion',
      tag: 'HR platform',
      location: 'Lille',
      role: 'Fullstack Developer',
      bullets: [
        'Real-time notifications (SSE)',
        'State management with Redux',
      ],
    },
    {
      project: 'Oikos',
      tag: 'Coliving management',
      location: 'Lille',
      role: 'Backend Developer',
      bullets: [
        'Reactive API with Spring WebFlux',
        'MongoDB & Docker',
      ],
    },
    {
      project: 'Qomod',
      tag: 'Locker booking',
      location: 'Lille',
      role: 'Flutter Project',
      bullets: [
        'Flutter & Firebase POC',
        'Geolocation features',
      ],
    },
  ];

  const internships: Entry[] = [
    {
      project: 'Candy-doc',
      tag: 'DDD documentation',
      location: 'Lille',
      role: 'Fullstack Developer',
      bullets: [
        'Maven plugin + graph visualization',
        'Svelte & CytoscapeJS interface',
      ],
    },
    {
      project: 'Semeru',
      location: 'Templemars',
      role: 'Fullstack Developer',
      bullets: [
        'Built a stock management app from scratch',
        'REST API with .NET Core + React interface',
        'QR code handling & SSO login',
      ],
    },
    {
      project: 'BD\'Graphic',
      location: 'Estaires',
      role: 'Fullstack Developer',
      bullets: [
        'Responsive redesign of a showcase website',
        'Shopping cart & quote generation',
        'Design & integration',
      ],
    },
  ];
</script>

<section id='experience' class='reveal-on-scroll' use:reveal>
  <div class='experience-wrapper'>
    <h1>Experience</h1>

    <div class='groups'>
      <div class='group'>
        <h3><span class='marker'></span>Consulting — Ippon Technologies, Lille (2023–2025)</h3>
        <div class='timeline'>
          {#each missions as mission, i (mission.project)}
            <ExperienceItem {...mission} isLast={i === missions.length - 1} />
          {/each}
        </div>
      </div>

      <div class='group'>
        <h3><span class='marker'></span>Internships</h3>
        <div class='timeline'>
          {#each internships as internship, i (internship.project)}
            <ExperienceItem {...internship} isLast={i === internships.length - 1} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
    #experience {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        background-color: var(--color-dark-secondary);
    }

    .experience-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 50px 0;
    }

    #experience h1 {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: 0 auto 50px auto;
    }

    .groups {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: start;
        gap: 1.5rem;
        width: 100%;
        max-width: 1400px;
    }

    .group {
        width: 100%;
        padding: 2rem;
        border-radius: 20px;
        background-color: var(--color-dark);
        border: 1px solid rgba(255, 255, 255, 0.06);
    }

    .group h3 {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        margin: 0 0 1.5rem 0;
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

    .timeline {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 1024px) {
        .groups {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .group {
            padding: 1.5rem;
        }
    }
</style>
