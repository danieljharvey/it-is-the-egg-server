const moduleExists = path => {
  try {
    return require.resolve(path);
  } catch (e) {
    return false;
  }
};

const localConfigPath = "./settings/connection.json";

// fetch local config file if exists, if not return empty object
const loadLocalConfigFile = path => {
  if (moduleExists(path) === false) {
    return {};
  }
  const localConfig = require(path);
  return localConfig;
};

const loadConfig = () => loadLocalConfigFile(localConfigPath);

module.exports = { loadConfig };
