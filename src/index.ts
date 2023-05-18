import "./loadEnviroment.js";
import chalk from "chalk";
import app from "./server/index.js";
import connectDataBase from "./database/connectDatabase.js";
import createDebug from "debug";

const debug = createDebug("items-api:root");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(chalk.red(`Missign enviroment variables`));
  process.exit(1);
}

app.listen(port, () => {
  debug(chalk.green(`Listening on http://localhost:${port}`));
});

try {
  await connectDataBase(mongoDbConnection);

  debug("Conected to database");
} catch (error: unknown) {
  debug(`Error connecting data base: ${chalk.red((error as Error).message)}`);
}
