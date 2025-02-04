import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const params = event.context.params;
  const query = getQuery(event);

  if (!params?.slug || !query?.lang) {
    return { message: 'Restaurant not found' };
  }

  const response = await $fetch(
    `http://localhost:8000/api/restaurants/${params.slug}?lang=${query.lang}`
  );
  return response;
});
