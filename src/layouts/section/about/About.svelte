<script lang='ts'>
  import Button from '../../../components/Button.svelte';
  import Presentation from './Presentation.svelte';
  import Diplomas from './diploma/Diplomas.svelte';

  const contactMe = (e: Event) => {
    e.preventDefault();
    window.location.href = 'mailto:masquelierdylan1999@gmail.com';
  };
</script>

<section id='about'>
  <div class='about-grid'>
    <div class='cell hero-name'>
      <p class='kicker'>Hello, I'm</p>
      <h1>Dylan Masquelier<span>.</span></h1>
      <p class='role'>Fullstack Developer</p>
    </div>

    <div class='cell photo-card'>
      <img src='77782703.jpeg' alt='moi' />
    </div>

    <div class='cell intro-card'>
      <div class='socials'>
        <a href='https://www.linkedin.com/in/dylan-masquelier-5741b0185/' target='_blank'>LinkedIn</a>
        <span>|</span>
        <a href='https://github.com/dylanmsql' target='_blank'>GitHub</a>
      </div>
      <Button label='Contact Me' onClick='{contactMe}' />
    </div>

    <div class='cell info-card'>
      <Presentation />
    </div>

    <div class='cell timeline-card'>
      <Diplomas />
    </div>
  </div>
</section>

<style>
    #about {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 100%;
    }

    .about-grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 1.5rem;
        width: 100%;
        padding: 4rem 0;
    }

    .cell {
        opacity: 0;
        transform: translateY(24px);
        animation: rise-in 0.8s ease-out forwards;
    }

    .hero-name {
        grid-column: 1 / 8;
        grid-row: 1 / 3;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation-delay: 0.05s;
    }

    .kicker {
        margin: 0 0 0.5rem 0;
        color: var(--color-yellow);
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .hero-name h1 {
        margin: 0;
        font-size: clamp(2.5rem, 6vw, 5.5rem);
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: -0.02em;
    }

    .hero-name h1 span {
        color: var(--color-yellow);
    }

    .role {
        margin: 0.75rem 0 0 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.1rem;
        font-weight: 500;
    }

    .photo-card {
        grid-column: 8 / 13;
        grid-row: 1 / 3;
        align-self: center;
        justify-self: center;
        z-index: 2;
        position: relative;
        width: 100%;
        max-width: 380px;
        aspect-ratio: 1;
        border-radius: 24px;
        overflow: hidden;
        border: 1px solid rgba(235, 178, 87, 0.3);
        box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.55);
        animation-delay: 0.15s;
    }

    .photo-card img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .photo-card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(160deg, rgba(235, 178, 87, 0.18), transparent 55%);
        pointer-events: none;
    }

    .intro-card {
        grid-column: 1 / 7;
        grid-row: 3 / 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
        padding: 2rem;
        border-radius: 20px;
        background-color: var(--color-dark-secondary);
        border: 1px solid rgba(255, 255, 255, 0.06);
        animation-delay: 0.25s;
    }

    .intro-card .socials {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .intro-card .socials a {
        text-decoration: none;
    }

    .info-card {
        grid-column: 7 / 13;
        grid-row: 3 / 5;
        padding: 2rem;
        border-radius: 20px;
        background-color: var(--color-dark-secondary);
        border: 1px solid rgba(255, 255, 255, 0.06);
        animation-delay: 0.35s;
    }

    .timeline-card {
        grid-column: 1 / 7;
        grid-row: 4 / 5;
        padding: 2rem;
        border-radius: 20px;
        background-color: var(--color-dark-secondary);
        border: 1px solid rgba(255, 255, 255, 0.06);
        animation-delay: 0.45s;
    }

    @keyframes rise-in {
        from {
            opacity: 0;
            transform: translateY(24px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .cell {
            opacity: 1;
            transform: none;
            animation: none;
        }
    }

    @media screen and (max-width: 1024px) {
        .about-grid {
            grid-template-columns: 1fr;
        }

        .hero-name,
        .photo-card,
        .intro-card,
        .info-card,
        .timeline-card {
            grid-column: 1 / -1;
            grid-row: auto;
        }
    }
</style>
