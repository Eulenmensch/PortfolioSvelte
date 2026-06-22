<script lang="ts">
  import { cv } from "$lib/content";
  import { mdInline } from "$lib/markdown";
</script>

<!-- White A4 "sheet". On screen it sits on the dark resume page;
     when printed it becomes the whole page (see :global print rules). -->
<article class="cv-sheet">
  <header class="cv-header">
    <h1>{cv.header.name}</h1>
    {#if cv.header.title}<div class="subtitle">{cv.header.title}</div>{/if}
    {#if cv.header.contact}
      {@const c = cv.header.contact}
      <div class="contact">
        {#if c.phone}{c.phone}<br />{/if}
        {#if c.email}{c.email}<br />{/if}
        {#if c.website}<a
            href={c.websiteUrl ?? `https://${c.website}`}
            target="_blank"
            rel="noopener noreferrer">{c.website}</a
          >{/if}
      </div>
    {/if}
  </header>

  {#if cv.profile?.length}
    <section>
      <h2>Profile</h2>
      <ul class="profile-grid">
        {#each cv.profile as item}
          <li>{@html mdInline(item)}</li>
        {/each}
      </ul>
    </section>
  {/if}

  {#if cv.references?.length}
    <section class="references">
      <h2>References</h2>
      {#each cv.references as ref}
        <p>
          {#if ref.link}<a
              href={ref.link}
              target="_blank"
              rel="noopener noreferrer">{ref.name}</a
            >{:else}<span class="ref-name">{ref.name}</span
            >{/if}{#if ref.title}, <span class="ref-title">{ref.title}</span
            >{/if}
        </p>
      {/each}
    </section>
  {/if}

  {#if cv.experience?.length}
    <section>
      <h2>Experience</h2>
      {#each cv.experience as co}
        <div class="company-block">
          <div class="company-header">
            <span class="company-name">{co.company}</span>
            {#if co.tenure}<span class="company-tenure">{co.tenure}</span>{/if}
          </div>
          {#each co.roles as role}
            <div class="role">
              <div class="role-header">
                <span class="role-title">{role.title}</span>
                {#if role.date}<span class="role-date">
                    — {role.date}</span
                  >{/if}
              </div>
              {#if role.bullets?.filter(Boolean).length}
                <ul>
                  {#each role.bullets.filter(Boolean) as bullet}
                    <li>{@html mdInline(bullet)}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </div>
      {/each}
    </section>
  {/if}

  {#if cv.education?.length}
    <section class="education">
      <h2>Education</h2>
      {#each cv.education as ed}
        <p>
          {#if ed.period}
            <span class="role-date">{ed.period}</span> —
          {/if}
          <span class="degree"
            >{ed.degree}
            {#if ed.qualifier}
              &nbsp{ed.qualifier}
            {/if}
          </span>
          {#if ed.institution}
            at {ed.institution}
          {/if}
        </p>
      {/each}
    </section>
  {/if}
</article>

<style>
  /* ============================================================
	   CV document — ported from the standalone HTML design.
	   Scoped to .cv-sheet so it never touches the dark site theme.
	   ============================================================ */
  .cv-sheet {
    /* Screen palette = site theme (dark, light text, yellow accents).
		   The @media print block below swaps these same variables back to
		   the black-on-white document palette for the PDF. */
    --cv-text: whitesmoke;
    --cv-text-secondary: rgba(245, 245, 245, 0.65);
    --cv-rule: var(--mango-yellow);
    --cv-link: var(--mango-yellow);
    --cv-bg: transparent;
    --cv-font-body: "Inter Variable", "Segoe UI", "Helvetica Neue", Arial,
      sans-serif;
    --cv-font-heading: "Barlow", "Times New Roman", serif;

    box-sizing: border-box;
    width: 100%;
    max-width: 60em;
    /* A4 page padding mirrored on screen; print uses @page margins. */
    padding: 14mm 16mm;
    margin: 0 auto;
    background: var(--cv-bg);
    color: var(--cv-text);
    font-family: var(--cv-font-body);
    font-size: 13pt;
    line-height: 1.5;
    text-align: left;
  }

  .cv-sheet * {
    box-sizing: border-box;
  }

  /* --- Header --- */
  .cv-header {
    text-align: center;
    position: relative;
    margin-bottom: 1.4em;
  }
  .cv-sheet h1 {
    font-family: var(--cv-font-heading);
    font-size: 2.4em;
    font-weight: 700;
    letter-spacing: 0.01em;
    line-height: 1.15;
    /* Screen-only accent; removed in print (see @media print). */
    text-shadow: 0.15rem 0.15rem var(--queen-blue);
  }
  .subtitle {
    font-size: 1.1em;
    color: var(--cv-text-secondary);
    margin-top: 0.1em;
  }
  .contact {
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
    font-size: 0.88em;
    line-height: 1.55;
  }
  .contact a {
    color: var(--cv-link);
    text-decoration: underline;
  }

  /* --- Sections --- */
  .cv-sheet section {
    margin-bottom: 2.2em;
  }
  .cv-sheet h2 {
    font-family: var(--cv-font-body);
    font-size: 1.15em;
    font-weight: 700;
    border-bottom: 1.5px solid var(--cv-rule);
    padding-bottom: 0.2em;
    margin-bottom: 0.7em;
  }

  /* --- Profile grid --- */
  .profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.15em 2em;
    list-style: disc;
    padding-left: 1.4em;
  }
  .profile-grid li {
    font-size: 0.97em;
  }

  /* --- References --- */
  .references p {
    margin-bottom: 0.25em;
    font-size: 0.97em;
  }
  .references a {
    color: var(--cv-link);
    text-decoration: underline;
    font-weight: 600;
  }
  .references .ref-title {
    color: var(--cv-text-secondary);
  }

  /* --- Company block --- */
  .company-block {
    margin-bottom: 2.5em;
  }
  .company-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 0.5px solid #ccc;
    padding-bottom: 0.25em;
    margin-bottom: 0.5em;
  }
  .company-name {
    font-weight: 700;
    font-size: 1.02em;
  }
  .company-tenure {
    font-size: 0.88em;
    color: var(--cv-text-secondary);
  }

  /* --- Role --- */
  .role {
    margin-bottom: 0.7em;
    margin-left: 0.2em;
  }
  .role-header {
    font-size: 0.95em;
    margin-bottom: 0.3em;
  }
  .role-title {
    font-weight: 600;
  }
  .role-date {
    color: var(--cv-text-secondary);
  }
  .role ul {
    list-style: disc;
    padding-left: 1.4em;
    margin-top: 0.15em;
  }
  .role li {
    margin-bottom: 0.65em;
    font-size: 0.95em;
    font-style: italic;
  }

  /* --- Education --- */
  .education p {
    font-size: 0.97em;
  }
  .education .degree {
    font-weight: 700;
    margin-left: 0.3em;
  }

  /* --- Responsive (narrow screens) --- */
  @media screen and (max-width: 600px) {
    .contact {
      position: static;
      text-align: center;
      margin-top: 0.5em;
    }
    .profile-grid {
      grid-template-columns: 1fr;
    }
    .company-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  /* --- Print: the sheet becomes a black-on-white A4 page --- */
  @media print {
    .cv-sheet {
      /* Swap the screen (dark) palette back to the document palette. */
      --cv-text: #1a1a1a;
      --cv-text-secondary: #444;
      --cv-rule: #1a1a1a;
      --cv-link: #1a6db5;
      --cv-bg: #fff;

      font-size: 10.5pt;
      line-height: 1.45;
      max-width: none;
      width: auto;
      padding: 0; /* @page (in app.css) supplies the A4 margins */
      box-shadow: none;
    }
    .cv-sheet h1 {
      text-shadow: none; /* drop the screen-only accent */
    }
    .contact a,
    .references a {
      color: var(--cv-link) !important;
    }
    .company-block {
      margin-bottom: 1.3em;
    }

    /* --- Page-break hygiene --- */
    /* Keep a company name glued to its first role (never orphaned). */
    .company-header {
      break-inside: avoid;
      break-after: avoid;
    }
    /* A whole role, and each individual bullet, stay intact. */
    .role {
      break-inside: avoid;
    }
    .role li {
      break-inside: avoid;
      margin-bottom: 0.25em;
    }
    /* Don't strand a single bullet line at a page edge. */
    .role ul {
      orphans: 2;
      widows: 2;
    }
    /* A section heading stays with the content that follows it. */
    .cv-sheet h2 {
      break-after: avoid;
    }
    /* Deliberately NOT breaking whole sections/company-blocks as units —
		   that would push tall blocks (Experience) onto a fresh page and
		   waste space; the per-unit rules above keep the seams clean. */
  }
</style>
