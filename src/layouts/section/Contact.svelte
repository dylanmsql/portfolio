<script>
  const sendMail = () => {
    window.open('mailto:masquelierdylan1999@gmail.com');
  }
</script>

<section id="contact">
  <h1>Contact</h1>
  <p>My inbox is always open.</p>
  <button on:click|preventDefault={sendMail}>
    Say Hello
  </button>
</section>

<style>
  #contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  #contact h1 {
    font-size: 3rem;
  }

  #contact p {
    font-size: 1.5rem;
  }

  #contact button {
    margin: 2rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    background-color: #1d1d1d;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
  }

  #contact button:hover {
    background-color: #fff;
    color: #1d1d1d;
  }
</style>
