import { useAsyncData, useRequestHeaders } from '#app';
import { UAParser } from 'ua-parser-js';

export function useIsMobile() {
  return useAsyncData('isMobile', async () => {
    if (import.meta.env.SSR) {
      const headers = useRequestHeaders();
      const userAgent = headers['user-agent'] || '';
      const { device } = new UAParser(userAgent).getResult();
      return device.type === 'mobile';
    } else {
      const { device } = new UAParser().getResult();
      return device.type === 'mobile';
    }
  });
}
