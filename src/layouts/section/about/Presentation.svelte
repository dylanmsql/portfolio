<script lang='ts'>
  const birthDate = new Date(1999, 8, 14);
  const now = new Date();

  const isPassedYet = now.getMonth() > birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
  const age = now.getFullYear() - birthDate.getFullYear() - (isPassedYet ? 0 : 1);
</script>

<div class='presentation'>
  <h2>Who am I ?</h2>
  <div class='info'>
    <p class='name'><b>Name : </b> Dylan Masquelier</p>
    <p class='duration'><b>Age : </b> {age}</p>
    <p class='address'><b>Address : </b> Lille, France</p>
    <p class='mail'><b>Mail : </b> dmasquelier@ippon.fr</p>
  </div>
  <p>Hello, I'm a student in computer science at the University of Lille. I'm in the second year of my Master's program.
    Currently, I'm undertaking an internship at <a href='https://fr.ippon.tech/'>Ippon Technologies</a> in Lille, where
    I'm contributing to an internal
    project named <a href='https://github.com/Candy-Doc'>Candy-Doc</a>.</p>
</div>


<style lang='scss'>
  .presentation {
    min-width: 100%;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--color-yellow);
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    flex-wrap: wrap;
  }

  .address, .duration, .mail, .name {
    width: 50%;
    font-style: italic;
    font-size: 1rem;
  }

  a {
    color: var(--color-yellow);
  }

  p {
    text-align: justify;
  }

  @media (max-width: 565px) {
    .address, .duration, .mail, .name {
      width: 100%;
    }
  }
</style>
