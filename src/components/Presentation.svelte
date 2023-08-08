<script lang="ts">
  const birthDate = new Date(1999, 8, 14);
  const now = new Date();

  const isPassedYet = now.getMonth() > birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
  const age = now.getFullYear() - birthDate.getFullYear() - (isPassedYet ? 0 : 1);
</script>

<div class="about">
  <h1>Who am I ?</h1>
  <div class="info">
    <p class="name"><b>Name : </b> Dylan Masquelier</p>
    <p class="duration"><b>Age : </b> {age}</p>
    <p class="address"><b>Address : </b> Lille, France</p>
    <p class="mail"><b>Mail : </b> dmasquelier@ippon.fr</p>
  </div>
  <p>I'm a student in computer science at the University of Lille. I'm in my second year of Master's degree. Currently,
    I'm doing an internship at Ippon Technologies in Lille. I'm working on an internal project called Candy-Doc.</p>
</div>


<style lang="scss">
  h1 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #EBB257;
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
</style>
