/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "sst-python-local-utils-example",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const exampleFunction = new sst.aws.Function("ExampleFunction", {
      runtime: "python3.10",
      url: true,
      architecture: process.arch === "arm64" ? "arm64" : "x86_64",
      handler: "packages/functions/src/example/lambda.handler",
      copyFiles: [
        {
          from: "packages/functions/src/utils",
          to: "utils",
        }
      ]
    });
    return {
      exampleFunctionUrl: exampleFunction.url,
    };
  },
});
