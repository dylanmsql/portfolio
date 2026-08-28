<script lang='ts'>
  import Fa from 'svelte-fa';
  import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
  import { reveal } from '../../actions/reveal';
</script>

<section id='works' class='reveal-on-scroll' use:reveal>
  <div class='works-grid'>
    <div class='ghost-card'>
      <span class='plus'>+</span>
    </div>
    <div class='message-card'>
      <div class='works-icon'>
        <Fa icon={faScrewdriverWrench} />
      </div>
      <h1>Works</h1>
      <p>Selected projects are on their way — check back soon.</p>
    </div>
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

    .ghost-card,
    .message-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 220px;
        border-radius: 20px;
        text-align: center;
    }

    .ghost-card {
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

    .message-card {
        grid-column: 4 / 10;
        gap: 1rem;
        padding: 3rem;
        border: 1px dashed rgba(235, 178, 87, 0.35);
        background-color: rgba(255, 255, 255, 0.02);
    }

    .works-icon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--color-yellow-soft);
        color: var(--color-yellow);
        font-size: 1.5rem;
        animation: float 3s ease-in-out infinite;
    }

    h1 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
    }

    p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.1rem;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-6px);
        }
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
        .works-icon,
        .ghost-card {
            animation: none;
        }
    }

    @media (max-width: 900px) {
        .ghost-card {
            display: none;
        }

        .message-card {
            grid-column: 1 / -1;
        }
    }
</style>
