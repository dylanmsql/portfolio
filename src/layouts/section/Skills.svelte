<script>
  import Carousel from '../../components/Carousel.svelte';
  import LanguageSkill from '../../components/Skill/LanguageSkill.svelte';

  const skills = [
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
      name: 'NodeJS',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/dot-net-1-1175179.png',
      name: '.NET Core',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png',
      name: 'React',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/vue-282497.png',
      name: 'Vue',
    },
    {
      name: 'Svelte',
      image: 'https://cdn.iconscout.com/icon/free/png-256/svelte-3-1175052.png',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/mysql-19-1174939.png',
      name: 'MySQL',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png',
      name: 'MongoDB',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png',
      name: 'PostgreSQL',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png',
      name: 'Git',
    },
    {
      image: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png',
      name: 'Docker',
    },
  ];
</script>

<section id='skills'>
  <h1>Skills</h1>
  <div class='skill'>
    <Carousel>
      <LanguageSkill />
    </Carousel>
  </div>
</section>

<style>
    #skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #34353A;
    }

    #skills h1 {
        color: #fff;
        font-size: 3rem;
        margin-bottom: 20px;
        font-weight: bold;
    }

    .skill {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>
