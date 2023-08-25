<script lang='ts'>
  const skills = [
    {    image: 'https://cdn.iconscout.com/icon/free/png-256/mysql-19-1174939.png',    name: 'MySQL',  },
    {      image: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png',      name: 'MongoDB',    },
    {      image: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png',      name: 'PostgreSQL',    },
  ];
</script>

<div class='database'>
  <h2>Databases</h2>
  <div class='database-skills'>
    {#each skills as skill}
      <div class='database-skills__item'>
        <img src={skill.image} alt={skill.name} />
        <span>{skill.name}</span>
      </div>
    {/each}
  </div>
</div>


<style lang='scss'>
  .database {
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }

  .database h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .database-skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-width: 100%;
    max-width: 800px;
  }

  .database-skills__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 150px;
    height: 150px;
    border-radius: 10%;
    background-color: rgba(52, 53, 58, 0.78);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  .database-skills__item:hover {
    transform: scale(1.1);
  }

  .database-skills__item img {
    width: 50px;
    height: 50px;
  }

  .database-skills__item span {
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }
</style>
