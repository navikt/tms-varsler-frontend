const unusedApmReactPeers = ["@grafana/faro-react", "react-router", "react-router-dom"];

module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === "@nais/apm" && pkg.version === "0.6.0") {
        for (const peer of unusedApmReactPeers) {
          delete pkg.peerDependencies?.[peer];
          delete pkg.peerDependenciesMeta?.[peer];
        }
      }

      return pkg;
    },
  },
};
