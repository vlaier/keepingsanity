import { defineConfig } from "sanity";

import { deskTool } from "sanity/desk";
import schemas from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID");
}
const config = defineConfig({
  projectId,
  dataset: "production",
  title: "Keeping Sanity",
  apiVersion: "2023-04-18",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
export default config;
