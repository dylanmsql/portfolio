<script lang='ts'>
  import Diploma from './Diploma.svelte';

  const contents = [
    {
      start: '2017',
      end: '2019',
      diploma: 'Brevet de technicien supérieur',
      speciality: 'Système Numerique Informatique et réseaux',
      school: 'Lycée Gustave Eiffel',
      location: 'Armentières',
    },
    {
      start: '2019',
      end: '2021',
      diploma: 'Licence',
      speciality: 'Informatique',
      school: 'Université de Lille',
      location: 'Villeneuve d\'Ascq',
    },
    {
      start: '2021',
      end: '2023',
      diploma: 'Master',
      speciality: 'Internet des objets',
      school: 'Université de Lille',
      location: 'Villeneuve d\'Ascq',
    },
  ];
</script>

<div class='diplomas'>
  <h2>
    Diplômes
  </h2>
  {#each contents as content}
    <Diploma {...content} />
  {/each}
</div>

<style>
    .diplomas {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h2 {
        font-size: 1.3rem;
        color: #EBB257;
    }
</style>
