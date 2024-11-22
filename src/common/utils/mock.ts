import { minimumLoadingTime } from '@/application/config/variables';

export const wait = (fn: () => void, time: number = minimumLoadingTime) =>
  setTimeout(fn, time);
