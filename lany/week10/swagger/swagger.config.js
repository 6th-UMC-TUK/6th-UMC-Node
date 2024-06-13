import path from "path";
import YAML from "yamljs";
import { cwd } from "process";

const missionSwagger = YAML.load(path.join(cwd(), "/swagger/mission.swagger.yaml"));
const storeSwagger = YAML.load(path.join(cwd(), "/swagger/store.swagger.yaml"));

export const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "UMC week10 mission",
    version: "1.0.0",
  },
  paths: {
    ...missionSwagger.paths,
    ...storeSwagger.paths,
  },
  components: {
    schemas: {
      ...missionSwagger.components?.schemas,
      ...storeSwagger.components?.schemas,
    },
  },
};
