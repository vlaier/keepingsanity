import { defineConfig } from 'sanity';

import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID');
}
export const baseConfig = {
  projectId,
  dataset: 'production',
  title: 'Keeping Sanity',
  apiVersion: '2023-04-18',
};
const config = defineConfig({
  ...baseConfig,
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});
export default config;
