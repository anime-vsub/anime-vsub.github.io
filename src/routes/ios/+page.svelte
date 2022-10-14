<script lang="ts">
  export let data;

  import '../../css/section.scss';

  import { _ } from 'svelte-i18n';

  const { sections } = data;
</script>

<svelte:head>
  <title>{data.head.title}</title>
  <meta property="og:title" content={data.head.title} />
  <meta property="og:description" content={data.head.description} />
</svelte:head>

<main class="w-response mx-4 sm:mx-auto">
  <h1
    class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-main text-center"
  >
    AnimeVsub
    <span class="text-white">{$_('Help')}</span>
  </h1>

  {#each sections as section}
    <div class=" mt-[64px] section">
      {#if section.title}
        <h4 class="title">{section.title}</h4>
      {/if}

      <div class="box box-list">
        {#if section.sub}
          <div class="text-main text-[1.5rem] font-weight-bold mb-4">
            {section.sub}
          </div>
        {/if}
        {#if section.sub2}
          <div class="text-[1rem] text-white mb-4">{section.sub2}</div>
        {/if}

        {#if section.content}
          <div class="mb-4 whitespace-pre-wrap">{section.content}</div>
        {/if}

        {#if section.ols}
          <ul class="list-decimal pl-[15px] mb-4">
            {#each section.ols as item}
              <li>{item}</li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/each}
</main>
