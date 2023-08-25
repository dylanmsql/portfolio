<script>
  import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
  import LinkCard from '../../components/LinkCard.svelte';

  const contacts = [
    {
      name: 'GitHub',
      icon: faGithub,
      link: 'https://github.com/dylanmsql',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/dylan-masquelier-1b1b3a1b3/',
    },
    {
      name: 'masquelierdylan1999@gmail.com',
      icon: faEnvelope,
      link: 'mailto:masquelierdylan1999@gmail.com',
    },
    {
      name: '+33 6 75 14 86 81',
      icon: faPhone,
      link: 'tel:+33675148681',
    }
  ];
</script>

<section id='contact'>
  <h1>Ways to contact me</h1>
  <p>Feel free to contact me if you have any questions or if you want to work with me.</p>
  <div class='links'>
    {#each contacts as contact}
      <LinkCard {contact} />
    {/each}
  </div>
</section>

<style>
    #contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        background-color: #34353A;
    }

    #contact h1 {
        font-size: 2rem;
        text-align: center;
    }

    #contact p {
        font-size: 1.2rem;
        text-align: center;
    }

    .links {
        margin: 2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
