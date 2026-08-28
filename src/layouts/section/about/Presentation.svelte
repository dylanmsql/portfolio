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
    <p class='address'><b>Address : </b> Saint-Lô, France</p>
    <p class='mail'><b>Mail : </b> masquelierdylan1999@gmail.com</p>
  </div>
  <p>Hello, I'm Dylan, a fullstack developer. I hold a Master's degree in IoT from the University of Lille (2024) and
    spent 2023–2025 on a consulting track at <a href='https://fr.ippon.tech/' target='_blank'>Ippon Technologies</a> in Lille,
    working across several client missions spanning frontend, backend, and cloud infrastructure.</p>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 0.75rem 1rem;
    margin: 1rem 0;
  }

  .address, .duration, .mail, .name {
    font-style: italic;
    font-size: 1rem;
    overflow-wrap: break-word;
  }

  a {
    color: var(--color-yellow);
  }

  p {
    text-align: justify;
  }

  @media (max-width: 565px) {
    .info {
      grid-template-columns: 1fr;
    }
  }
</style>
