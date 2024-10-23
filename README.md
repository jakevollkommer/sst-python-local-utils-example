# SST v3 Python Local Utils Example

This is an example of how to use the SST v3 Python Local Utils.

## Running the example

1. Run `npx sst dev --stage example` to start the SST app locally.
2. Copy the `exampleFunctionUrl` from the sst output
3. Run `curl -X GET https://<your-example-endpoint>.lambda-url.us-east-1.on.aws/`
4. Check the logs in your sst console in the `Functions` tab to see the output
