<script lang="ts">
  export let data;

  import Icon from '@iconify/svelte';
  import { slide } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import { _ } from 'svelte-i18n';

  let tabActive = 0;
  const { faqs } = data;
</script>

<svelte:head>
  <title>{data.head.title}</title>
  <meta property="og:title" content={data.head.title} />
  <meta property="og:description" content={data.head.description} />
</svelte:head>

<main class="w-response mx-4 sm:mx-auto">
  <h1
    class="mb-20 mt-30 font-weight-bold text-[3.5rem] md:text-[52px] text-white text-center"
  >
    {$_('Frequently_Asked_Questions')}
  </h1>

  <ul class="bg-[#161616] rounded-sm border border-[rgba(0,0,0,.125)] mb-8">
    {#each faqs as faq, index}
      <li>
        <div
          class="collapse flex items-center"
          on:click={() => {
            if (tabActive === index) {
              tabActive = null;
            } else {
              tabActive = index;
            }
          }}
        >
          <Icon
            icon="akar-icons:circle-{tabActive === index ? 'minus' : 'plus'}"
            width="25"
            height="25"
            class="mr-2"
          />
          <!-- <Icon icon="akar-icons:circle-minus" width="25" height="25"/> -->
          <div class="min-w-0 flex-1">{faq.name}</div>
        </div>
        {#if tabActive === index}
          <div
            transition:slide={{ delay: 0, duration: 500, easing: cubicInOut }}
            class="detail"
          >
            {faq.content}
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</main>

<style lang="scss">
  .collapse {
    @apply text-[20px] font-weight-medium py-3 pl-[50px] pr-[20px] my-[14px] mx-6 text-[var(--c-main)];
  }
  .detail {
    @apply py-3 pl-[50px] pr-[20px] mx-6;
    white-space: pre-wrap;
  }
</style>
