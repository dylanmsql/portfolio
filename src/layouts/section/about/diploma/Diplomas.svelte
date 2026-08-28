<script lang='ts'>
  import Diploma from './Diploma.svelte';

  const contents = [
    {
      year: 2019,
      diploma: 'BTS SNIR',
      speciality: 'Digital Systems, Computer Science and Networks option',
      school: 'Lycée Gustave Eiffel',
      location: 'Armentières',
      mention: 'High Distinction',
    },
    {
      year: 2021,
      diploma: 'Licence',
      speciality: 'Computer Science',
      school: 'Université de Lille',
      location: 'Villeneuve d\'Ascq',
      mention: 'High Distinction',
    },
    {
      year: 2024,
      diploma: 'Master',
      speciality: 'IOT',
      school: 'Université de Lille',
      location: 'Villeneuve d\'Ascq',
      mention: 'Distinction',
    },
  ];
</script>

<div class='diplomas'>
  <h2>
    Education
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
