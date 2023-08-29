<script>
  export let skill;
</script>

<div class='skill-card'>
  <img src={skill.image} alt={skill.name} />
  <p>{skill.name}</p>
</div>

<style>
    .skill-card {
        width: 200px;
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
        transition: all 0.2s ease-in-out;
    }

    .skill-card img {
        max-width: 50px;
        max-height: 50px;
    }
</style>
