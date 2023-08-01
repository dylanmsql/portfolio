<script>
    const skills = [
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "JavaScript"
        },
        {
            name: "C",
        },
        {
            name: "C++",
        },
        {
            name: "C#"
        },
        {
            name: "Java"
        },
        {
            name: "Python"
        },
        {
            name: "NodeJS"
        },
        {
            name: ".NET Core"
        },
        {
            name: "React"
        },
        {
            name: "Vue"
        },
        {
            name: "Svelte"
        },
        {
            name: "MySQL"
        },
        {
            name: "MongoDB"
        },
        {
            name: "PostgreSQL"
        },
        {
            name: "Git"
        },
        {
            name: "Docker"
        }
    ]
</script>

<section id="skills">
  <h1>Skills</h1>
  <div class="skill">
    {#each skills as skill}
      <div class="skill-card">
        <h2>{skill.name}</h2>
      </div>
    {/each}
  </div>
</section>

<style>
    #skills {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #skills h1 {
        font-size: 3rem;
        margin-bottom: 20px;
    }

    .skill {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        height: 100vh;
        overflow: scroll;
    }

    .skill::-webkit-scrollbar {
        display: none;
    }

    .skill-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        background-color: rgba(255, 255, 255, 0.2);
        /*backdrop-filter: blur(0px);*/
        border-radius: 10px;
        margin: 10px;
    }
</style>
