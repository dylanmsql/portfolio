<script lang='ts'>
  import type { Skill } from '../utils/type';

  let { skill }: { skill: Skill } = $props();
</script>

<div class='skill-card'>
  <img class:invert={skill.invert} src={skill.image} alt={skill.name} />
  <p>{skill.name}</p>
</div>

<style>
    .skill-card {
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff1;
        padding: 10px;
        border-radius: 5px;
        backdrop-filter: blur(10px);
        transition: all 0.2s ease-in-out;
    }

    .skill-card:hover {
        background-color: #fff3;
        transform: scale(1.1);
        box-shadow: 0 12px 24px -10px rgba(235, 178, 87, 0.45);
        transition: all 0.2s ease-in-out;
    }

    .skill-card img {
        max-width: 50px;
        max-height: 50px;
    }

    .skill-card img.invert {
        filter: invert(1);
    }

    @media (max-width: 768px) {
        .skill-card {
            width: 100px;
        }
    }
</style>
