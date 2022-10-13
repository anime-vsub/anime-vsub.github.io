<script lang="ts">
	import 'virtual:windi.css';

	import './styles.scss';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import { browser } from '$app/environment';
	// @ts-ignore
	if (browser) import('virtual:windi-devtools');
</script>

<Header />

<slot />

<Footer />
