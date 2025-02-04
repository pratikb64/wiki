export default defineEventHandler(async (event) => {
  const context = await readBody(event);
  
  // Return the rendered HTML directly instead of making another fetch
  return {
    html: `
      <div>
        <h1>${context.title || ''}</h1>
        <div>${context.content || ''}</div>
      </div>
    `
  };
});
