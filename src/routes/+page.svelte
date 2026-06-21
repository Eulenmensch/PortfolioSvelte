<script lang="ts">
  import { home, projects } from "$lib/content";
  import Wave from "$lib/components/home/Wave.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import ProjectCard from "$lib/components/home/ProjectCard.svelte";
  import SecondaryCard from "$lib/components/home/SecondaryCard.svelte";
  import Contact from "$lib/components/home/Contact.svelte";

  const palette = [
    "var(--mango-yellow)",
    "var(--mahogany-red)",
    "var(--queen-blue)",
  ];
  const accent = (i: number) => palette[i % palette.length];

  // z-index order so the secondary cards' offset shadow-boxes stack correctly
  // in the 2-column grid (from the original layout).
  const stackOrder = [8, 9, 6, 7, 4, 5, 2, 3];
</script>

<svelte:head>
  <title>Yoshua Woo — Game Designer</title>
  <meta
    name="description"
    content="Portfolio of Yoshua Woo, a game designer from Berlin specializing in 3Cs, game feel, systems and UX design."
  />
</svelte:head>

<Wave />
<Hero hero={home.hero} />

<div class="container">
  <section id="projects" class="projects">
    {#each home.projects as ref, i (ref.uid)}
      {#if projects[ref.uid]}
        <ProjectCard {ref} project={projects[ref.uid]} color={accent(i)} />
      {/if}
    {/each}
  </section>

  <section id="additional-cards" class="secondary">
    {#each home.secondaryProjects as project, i (project.title)}
      <SecondaryCard {project} color={accent(i + 1)} index={stackOrder[i]} />
    {/each}
  </section>

  <div id="contact-wrap">
    <Contact contact={home.contact} />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 0 4rem;
  }

  .projects {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #additional-cards {
    position: relative;
    z-index: 10;
  }

  @media (min-width: 768px) {
    .container {
      margin-top: 20rem;
      max-width: 70rem;
    }
    #additional-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .container {
      margin-top: 25rem;
      max-width: 145rem;
    }
  }
  @media screen and (min-width: 1440px) {
    .container {
      max-width: 80%;
    }
  }
</style>
