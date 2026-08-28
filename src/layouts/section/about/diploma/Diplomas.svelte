<script lang='ts'>
  import Diploma from './Diploma.svelte';

  const contents = [
    {
      year: 2019,
      diploma: 'BTS SNIR',
      speciality: 'Systèmes Numériques, option Informatique et Réseaux',
      school: 'Lycée Gustave Eiffel',
      location: 'Armentières',
      mention: 'Mention Très bien',
    },
    {
      year: 2021,
      diploma: 'Licence',
      speciality: 'Informatique',
      school: 'Université de Lille',
      location: 'Villeneuve d\'Ascq',
      mention: 'Mention Très bien',
    },
    {
      year: 2024,
      diploma: 'Master',
      speciality: 'IOT',
      school: 'Université de Lille',
      location: 'Villeneuve d\'Ascq',
      mention: 'Mention Bien',
    },
  ];
</script>

<div class='diplomas'>
  <h2>
    Diplômes
  </h2>
  <div class='timeline'>
    {#each contents as content, i}
      <Diploma {...content} isLast={i === contents.length - 1} />
    {/each}
  </div>
</div>

<style>
    .diplomas {
        min-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .timeline {
        display: flex;
        flex-direction: column;
    }

    h2 {
        font-size: 1.3rem;
        color: var(--color-yellow);
    }
</style>
