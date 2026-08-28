<script lang='ts'>
  import { reveal } from '../../../actions/reveal';

  let { project, tag, location, role, bullets, isLast = false }: {
    project: string;
    tag?: string;
    location: string;
    role: string;
    bullets: string[];
    isLast?: boolean;
  } = $props();
</script>

<div class='timeline-item reveal-on-scroll' use:reveal>
  <div class='marker'>
    <span class='dot'></span>
    {#if !isLast}
      <span class='line'></span>
    {/if}
  </div>
  <div class='content'>
    <p class='role'>{role}</p>
    <h2>{project}{#if tag}<span class='tag'> · {tag}</span>{/if}</h2>
    <p class='location'>{location}</p>
    <ul>
      {#each bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </ul>
  </div>
</div>

<style lang='scss'>
  .timeline-item {
    display: flex;
    gap: 1.25rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;

    &:global(.revealed) {
      opacity: 1;
      transform: none;
    }
  }

  .marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  .dot {
    width: 12px;
    height: 12px;
    margin-top: 0.35rem;
    border-radius: 50%;
    background-color: var(--color-yellow);
    box-shadow: 0 0 0 4px var(--color-yellow-soft);
    flex-shrink: 0;
  }

  .line {
    flex-grow: 1;
    width: 2px;
    margin: 0.35rem 0;
    background: linear-gradient(var(--color-yellow), transparent);
  }

  .content {
    padding-bottom: 2rem;
    text-align: left;
  }

  .role {
    margin: 0 0 0.35rem 0;
    color: var(--color-yellow);
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0 0 0.25rem 0;
    font-weight: bold;
  }

  .tag {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
  }

  .location {
    margin: 0.15rem 0;
    color: rgba(255, 255, 255, 0.7);
  }

  ul {
    margin: 0.75rem 0 0 0;
    padding-left: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
  }

  li {
    margin: 0.25rem 0;
  }

  @media (prefers-reduced-motion: reduce) {
    .timeline-item {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>
