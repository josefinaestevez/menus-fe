import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const params = event.context.params;
  const query = getQuery(event);

  if (!params?.slug || !query?.lang) {
    return { message: 'Restaurant not found' };
  }

  const config = useRuntimeConfig();
  const apiBaseUrl = config.public.apiBaseUrl;

  const response = await $fetch(
    `${apiBaseUrl}/restaurants/${params.slug}/?lang=${query.lang}`
  );

  return response;
});
