import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

export default {
  entities: [Post],
  dbName: "lirredit",
  type: "postgresql",
  debug: !__prod__,
};
