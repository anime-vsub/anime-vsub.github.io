<script lang="ts">
  export let data;

  import Icon from '@iconify/svelte';

  const { name, changelogs } = data;
</script>

<main class="w-response mx-4 sm:mx-auto">
  <h1
    class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-main text-center"
  >
    AnimeVsub
    <span class="text-white">Changelogs</span>
  </h1>

  {#each changelogs as changelog}
    <div class="log-item">
      <a target="_blank" href={changelog.file} class="log-item-title">
        {name} APK <span class="log-item-tag">(v{changelog.version})</span>
        <Icon icon="fluent:cloud-arrow-down-24-regular" class="inline-block" />
      </a>

      <div class="mb-3 ml-5">Changelog:</div>

      <ul class="list-greek pl-[15px] mb-4 ml-8">
        {#each changelog.messages as item}
          <li class="mb-3">{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
</main>

<style lang="scss">
  .log-item {
    &-title {
      @apply text-[1.5rem] sm:text-[32px] font-weight-bold text-white mb-3;
    }
    &-tag {
      @apply text-[18px] text-[#c10023];
    }
  }
</style>
