<script>
    const skills = [
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png",
            name: "HTML"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
            name: "CSS"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
            name: "JavaScript"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/c-57-1175191.png",
            name: "C",
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/c-4-226082.png",
            name: "C++",
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/csharp-1-1175241.png",
            name: "C#"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png",
            name: "Java"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png",
            name: "Python"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
            name: "NodeJS"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/dot-net-1-1175179.png",
            name: ".NET Core"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png",
            name: "React"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/vue-282497.png",
            name: "Vue"
        },
        {
            name: "Svelte",
            image: "https://cdn.iconscout.com/icon/free/png-256/svelte-3-1175052.png",
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/mysql-19-1174939.png",
            name: "MySQL"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png",
            name: "MongoDB"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png",
            name: "PostgreSQL"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/git-225996.png",
            name: "Git"
        },
        {
            image: "https://cdn.iconscout.com/icon/free/png-256/docker-226091.png",
            name: "Docker"
        }
    ]
</script>

<section id="skills">
  <h1>Skills</h1>
  <div class="skill">
    {#each skills as skill}
      <div class="skill-card">
        <img src="{skill.image}" alt="{skill.name}">
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

    .skill-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        background-color: #a49292;
        backdrop-filter: blur(10px);
        border-radius: 10px;
        margin: 10px;
    }

    .skill-card img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }

    .skill-card:hover {
        transform: scale(1.1);
        transition: 0.5s;
    }
</style>
