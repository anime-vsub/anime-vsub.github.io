import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import index from "../../data/index.yaml"

export const load: PageLoad = () => {
  return index
};
