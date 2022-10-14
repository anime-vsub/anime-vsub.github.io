import { addMessages } from 'svelte-i18n';
import { register, init, getLocaleFromNavigator } from 'svelte-i18n';
import { locale } from '/src/stores/locale';
import { get } from 'svelte/store';

addMessages('en', {
  changelogs: 'Changelogs'
});
addMessages('vi', {
  changelogs: 'Nhật ký thay đổi',
  release_at: 'phát hành lúc',
  Changelog: 'Thay đổi',
  Frequently_Asked_Questions: 'Câu hỏi thường gặp',
  Help: 'Trợ giúp',
  Copyright: 'Bản quyền',
  All_Rights_Reserved: 'Tất cả quyền được bảo lưu.',

  Features: 'Đặc điểm',
  Changelogs: 'Thay đổi',
  'Need_Help?': 'Cần giúp đỡ?',
  FAQ: 'Câu hỏi thường gặp'
});

locale.subscribe((value) => {
  init({
    fallbackLocale: 'vi',
    initialLocale: value
  });
});
