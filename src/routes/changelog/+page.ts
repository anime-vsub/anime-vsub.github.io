import { error } from '@sveltejs/kit';

export async function load() {
  const name = 'PikaShow APK';
  const changelogs = [
    {
      version: '65',
      file: '',
      messages: Array(6).fill('Added network speed while playing a video')
    }
  ];

  return { name, changelogs };
}
