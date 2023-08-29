<script lang='ts'>
  import SkillCard from '../../../components/SkillCard.svelte';

  let activeTab = 'webdev';

  const categories = {
    'webdev': {
      name: 'Web Development',
      content: [
        { image: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png', name: 'HTML' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png', name: 'CSS' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png', name: 'JavaScript' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png', name: 'React' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/vue-282497.png', name: 'Vue' },
        {
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/langfr-220px-Svelte_Logo.svg.png',
          name: 'Svelte',
        },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png', name: 'NodeJS' },
      ],
    },
    'softwaredev': {
      name: 'Software Development',
      content: [
        { image: 'https://cdn.iconscout.com/icon/free/png-256/c-programming-569564.png', name: 'C' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/c-programming-569564.png', name: 'C++' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png', name: 'Java' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png', name: 'Python' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/c-programming-569564.png', name: 'C#' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/dot-net-1-1175179.png', name: '.NET Core' },
      ],
    },
    'databases': {
      name: 'Databases',
      content: [
        { image: 'https://cdn.iconscout.com/icon/free/png-256/mysql-19-1174939.png', name: 'MySQL' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/mongodb-3-1175138.png', name: 'MongoDB' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png', name: 'PostgreSQL' },
      ],
    },
    'devops': {
      name: 'DevOps & Version Control',
      content: [
        { image: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png', name: 'Git' },
        { image: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png', name: 'Docker' },
      ],
    },
  };
</script>

<section id='skills'>
  <div class='skills-wrapper'>
    <h1>Skills</h1>
    <div class='browser-frame'>
      <div class='browser-tabs'>
        {#each Object.keys(categories) as category}
          <button
            class='tab' class:active={activeTab === category}
            on:click={() => activeTab = category}
          >
            {categories[category].name}
          </button>
        {/each}
      </div>

      <!-- Content Area -->
      <div class='content-area'>
        {#each categories[activeTab].content as skill}
          <SkillCard {skill} />
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
    #skills {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        background-color: #34353A;
    }

    .skills-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        padding: 50px 0;
    }

    #skills h1 {
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        margin: 0 auto 50px auto;
    }

    .browser-frame {
        border: 1px solid #ebb257;
        border-radius: 8px;
        width: 100%;
        height: 100%;
    }

    .browser-tabs {
        display: flex;
        background-color: #ebb257;
        border-radius: 8px 8px 0 0;
        overflow: scroll;

        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    .tab {
        flex-grow: 1;
        padding: 14px 20px;
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
        color: #444;
    }

    .tab.active {
        background-color: rgba(0, 0, 0, 0.10);
        font-weight: bold;
    }

    .content-area {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 20px;
    }

    @media (max-width: 1024px) {
        .skills-wrapper {
            width: 80%;
        }
    }

    @media (max-width: 768px) {
        .skills-wrapper {
            width: 100%;
        }
    }
</style>

