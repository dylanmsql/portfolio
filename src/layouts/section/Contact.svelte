<script lang='ts'>
  import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
  import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
  import LinkCard from '../../components/LinkCard.svelte';
  import { reveal } from '../../actions/reveal';
  import type { Contact } from '../../utils/type';

  const contacts: Contact[] = [
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
      name: '+33 6 75 14 86 81',
      icon: faPhone,
      link: 'tel:+33675148681',
    },
    {
      name: 'masquelierdylan1999@gmail.com',
      icon: faEnvelope,
      link: 'mailto:masquelierdylan1999@gmail.com',
      wide: true,
    },
  ];
</script>

<section id='contact' class='reveal-on-scroll' use:reveal>
  <div class='contact-wrapper'>
    <h1>Ways to contact me</h1>
    <p>Thanks for checking out my portfolio! Got questions or want to work together on something cool? Feel free to get in touch. I'm always open to new ideas and opportunities.</p>
    <div class='links'>
      {#each contacts as contact (contact.name)}
        <div class='link-cell' class:wide={contact.wide}>
          <LinkCard {contact} />
        </div>
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
        width: 100%;
        background-color: var(--color-dark);
    }

    #contact .contact-wrapper {
        width: 100%;
        max-width: 900px;
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
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
        width: 100%;
    }

    .link-cell.wide {
        grid-column: 1 / -1;
    }

    @media screen and (max-width: 640px) {
        .links {
            grid-template-columns: 1fr;
        }
    }
</style>
