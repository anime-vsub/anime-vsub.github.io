<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<footer class="py-6 bg-[#111] text-[12px] text-center">
  {new Date().getFullYear()}
  {$_('Copyright')} © 橘しん（tachib_shin）

  <p class="mt-1">{$_('All_Rights_Reserved')}</p>
</footer>
