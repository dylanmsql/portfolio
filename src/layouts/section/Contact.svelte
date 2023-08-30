<script>
  import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
  import LinkCard from '../../components/LinkCard.svelte';

  const contacts = [
    {
      name: 'dylanmsql',
      icon: faGithub,
      link: 'https://github.com/dylanmsql',
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/dylan-masquelier-5741b0185/',
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
  <div class='contact-wrapper'>
    <h1>Ways to contact me</h1>
    <p>Thanks for checking out my portfolio! Got questions or want to work together on something cool? Feel free to get in touch. I'm always open to new ideas and opportunities.</p>
    <div class='links'>
      {#each contacts as contact}
        <LinkCard {contact} />
      {/each}
    </div>
  </div>
</section>

<style>
    #contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        background-color: var(--color-dark-secondary);
    }

    #contact .contact-wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #contact h1 {
        font-size: 2rem;
        text-align: center;
    }

    #contact p {
        font-size: 1.2rem;
        text-align: center;
        margin: 1rem 0;
    }

    .links {
        margin: 2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 768px) {
        #contact .contact-wrapper {
            width: 90%;
        }
    }
</style>
