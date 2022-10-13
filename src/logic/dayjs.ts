
	import dayjs from "dayjs"
	import relativeTime from 'dayjs/plugin/relativeTime'
import {locale} from "/src/stores/locale"

	import "dayjs/locale/vi"
	import "dayjs/locale/ja"
  dayjs.locale(navigator.language)
  dayjs.extend(relativeTime)

locale.subscribe(value => dayjs.locale(value))

  export default dayjs