<script lang='ts'>
  export let date: string;
  export let diploma: string;

  export let school: string;

  export let speciality: string;
</script>

<div class='diploma'>
  <div class='date'>
    <p>{date}</p>
  </div>
  <div class='diploma-content'>
    <h2>{diploma}</h2>
    {#if speciality}
      <p>{speciality}</p>
    {/if}
    <p>{school}</p>
  </div>
</div>

<style lang='scss'>
  .diploma {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    & > .date {
      width: 20%;
      height: 100%;
      font-weight: lighter;
      font-style: italic;
    }

    & > .diploma-content {
      width: 80%;
      height: 100%;
      text-align: left;
    }

    .diploma-content > h2 {
      font-weight: bold;
      color: #EBB257;
    }
  }
</style>
