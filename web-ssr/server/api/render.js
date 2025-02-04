export default defineEventHandler(async (event) => {
  const context = await readBody(event);
  const html = await $fetch("/_nuxt/render", {
    method: "POST",
    body: { slug: context.slug, context },
  });
  return html;
});
