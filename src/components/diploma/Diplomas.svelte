<script lang='ts'>
  import Diploma from './Diploma.svelte';

  const contents = [
    {
      date: '2017-2019',
      diploma: 'Brevet de technicien supérieur',
      speciality: 'Système Numerique Informatique et réseaux',
      school: 'Lycée Gustave Eiffel à Armentières',
    },
    {
      date: '2019-2021',
      diploma: 'Licence',
      speciality: 'Informatique',
      school: 'Université de Lille',
    },
    {
      date: '2021-2023',
      diploma: 'Master',
      speciality: 'IOT',
      school: 'Université de Lille',
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
