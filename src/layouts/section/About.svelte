<script lang='ts'>
  import Button from '../../components/Button.svelte';
  import Divider from '../../components/Divider.svelte';
  import Presentation from '../../components/Presentation.svelte';
  import Carousel from '../../components/Carousel.svelte';

  const contactMe = (e: Event) => {
    e.preventDefault();
    window.location.href = 'mailto:masquelierdylan1999@gmail.com';
  };
</script>

<section id='about'>
  <div class='about-section'>
    <div class='profile'>
      <h1>
        Dylan Masquelier<span>.</span>
      </h1>
      <Divider />
      <div class='socials'>
        <a href='https://www.linkedin.com/in/dylan-masquelier-1b1b3a1b0/' target='_blank'>
          LinkedIn
        </a>
        <span>|</span>
        <a href='https://github.com/dylanmsql' target='_blank'>
          GitHub
        </a>
      </div>
      <div class='button'>
        <Button label='Contact Me' onClick='{contactMe}' />
      </div>
    </div>
  </div>
  <div class='about-section picture'>
    <img src='77782703.jpeg' alt='moi' />
  </div>
  <div class='about-section presentation'>
    <Carousel components={[Presentation, Presentation]} />
  </div>
</section>

<style>
    #about {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        flex-wrap: wrap;
        gap: 2rem;
    }

    span {
        color: #EBB257;
    }

    .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;

        & h1 {
            font-size: 3rem;
            font-weight: bold;
        }

        & .socials {
            & a {
                text-decoration: none;
            }
        }

        & .button {
            margin: 1rem 0;
        }
    }

    .picture {
        & img {
            width: 300px;
            height: 300px;
            border-radius: 50%;
        }
    }

    .presentation {
        width: 500px;
    }
</style>
