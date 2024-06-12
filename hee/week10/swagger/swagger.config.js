import path from "path";
import YAML from "yamljs";
import { cwd } from "process";

const missionSwagger = YAML.load(path.join(cwd(), "/swagger/mission.swagger.yaml"));
const reviewSwagger = YAML.load(path.join(cwd(), "/swagger/review.swagger.yaml"));

export const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "UMC week10 mission",
    version: "1.0.0",
  },
  paths: {
    ...missionSwagger.paths,
    ...reviewSwagger.paths,
  },
  components: {
    schemas: {
      ...missionSwagger.components?.schemas,
      ...reviewSwagger.components?.schemas,
    },
  },
};