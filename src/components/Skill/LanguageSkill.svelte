<script lang='ts'>
  const skills = [
    { image: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png', name: 'HTML' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png', name: 'CSS' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png', name: 'JavaScript' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/c-57-1175191.png', name: 'C' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/c-4-226082.png', name: 'C++' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/csharp-1-1175241.png', name: 'C#' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png', name: 'Java' },
    { image: 'https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png', name: 'Python' },
  ];
</script>

<div class='language'>
  <h2>Languages</h2>
  <div class='language-skills'>
    {#each skills as skill}
      <div class='language-skills__item'>
        <img src={skill.image} alt={skill.name} />
        <span>{skill.name}</span>
      </div>
    {/each}
  </div>
</div>


<style lang='scss'>
  .language {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }

  .language h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .language-skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-width: 100%;
    max-width: 800px;
  }

  .language-skills__item {
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

  .language-skills__item:hover {
    transform: scale(1.1);
  }

  .language-skills__item img {
    width: 50px;
    height: 50px;
  }

  .language-skills__item span {
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.5rem;
  }
</style>
