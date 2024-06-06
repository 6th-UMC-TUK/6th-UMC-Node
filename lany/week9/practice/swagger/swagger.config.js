import path from "path";
import YAML from "yamljs";
import { cwd } from "process";

export const swaggerSpec = YAML.load(path.join(cwd(), "/build/swagger.yaml"));
