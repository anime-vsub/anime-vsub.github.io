<script lang="ts">
  import 'virtual:windi.css';

  import '/src/locale';
  import './styles.scss';

  import '@fontsource/caveat';
  import '@fontsource/asap';

  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  import { browser } from '$app/environment';
  // @ts-ignore
  if (browser) import('virtual:windi-devtools');
</script>

<svelte:head>
  <meta property="og:image" content="/favicon.png" />
</svelte:head>

<Header />

<slot />

<Footer />
