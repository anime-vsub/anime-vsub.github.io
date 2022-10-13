<script lang="ts">
  export let data;

  import { onMount } from 'svelte';
  // import Typed from 'typed.js';
  import Icon from '@iconify/svelte';
  import '../css/section.scss';

  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import Typed from 'typed.js';
  import { browser } from '$app/environment';

  const { meta, features } = data;

  // =========== logic ============
  let captionRef: HTMLSpanElement;

  if (browser)
    onMount(() => {
      new Typed(captionRef, {
        strings: meta.strings,
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
      });
    });

  let showToTop = false;
  if (browser)
    document.addEventListener('scroll', () => {
      showToTop = window.pageYOffset > 300;
    });
</script>

<div class="bg-image" />

<div class="h-[100vh] w-full flex items-center justify-center">
  <div class="w-full w-response text-white">
    <h1 class="text-[4.5rem] font-weight-bold text-center mb-6">
      Anime<span class="text-main px-0">Vsub</span>
    </h1>
    <h3 class="text-[1.5rem] sm:text-[32px] md:text-[3.5rem] text-center mb-2">
      <span bind:this={captionRef} />
    </h3>
  </div>
</div>

<main class="w-response mx-4 sm:mx-auto">
  <div class=" mt-[64px] section">
    <h4 class="title">{meta.download.name}</h4>

    <div class="box">
      <div class="mb-4 whitespace-pre-wrap">{meta.download.description}</div>

      <!-- <div class="mb-4"></div> -->

      <a target="_blank" href={meta.download.file}>
        <button class="btn">{meta.download.versionName}</button>
      </a>
    </div>

    <div class="flex flex-wrap md:flex-nowrap">
      {#each meta.cards as card}
        <div class="card">
          <div class="large-icon">
            <img src={card.icon} alt="pika" width="70" />
          </div>

          <div class="card-title">{card.title}</div>

          {card.content}
        </div>
      {/each}
    </div>
  </div>
  <div class="section">
    <h4 class="title">
      {features.name}
      <p class="subtitle">{features.description}</p>
    </h4>

    {#each features.items as feature, index}
      <div class="splitter" class:splitter-reverse={index % 2 === 1}>
        <div class="splitter-content">
          <div class="splitter-rank">#{index + 1}</div>
          <div class="splitter-title">{feature.title}</div>

          <ul class="list-greek pl-[15px] mb-4">
            {#each feature.uls as item}
              <li class="mb-3">{item}</li>
            {/each}
          </ul>
        </div>
        <div class="splitter-images">
          {#each feature.images as image}
            <img src={image} alt="screenshot" />
          {/each}
        </div>
      </div>
    {/each}
  </div>

  {#if showToTop}
    <button
      class="w-11 h-11 rounded-1/2 bg-main text-black fixed bottom-4 right-4 flex items-center justify-center font-weight-bold"
      transition:fade={{ delay: 0, duration: 333, easing: cubicInOut }}
      on:click={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}
    >
      <Icon icon="fluent:chevron-up-24-regular" width="25" height="25" />
    </button>
  {/if}
</main>

<style lang="scss">
  @import '../css/section.scss';

  .bg-image {
    @apply absolute w-full h-[100vh];

    // background: {
    background-image: url('https://pikashows.com/assets/img/intro-bg.webp');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    // }

    z-index: -1;

    @media (max-width: 1024px) {
      background-attachment: scroll;
    }

    &:before {
      content: '';
      @apply bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 h-[100vh] w-full opacity-[0.9];
    }
  }

  .btn {
    @apply mx-2 my-2 rounded-[3px] text-black font-weight-medium px-6 py-3 decoration-none bg-[var(--c-main)];
  }
</style>
