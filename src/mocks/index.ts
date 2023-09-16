import mockProducts from "./product.mock";
import fetchMock from "@gr2m/fetch-mock";

mockAPI.initialized = false;

/** Mocking API Responses */
export default async function mockAPI() {
  if (mockAPI.initialized) {
    console.log(`🚀 ~ Mock API already initialized`);
    return;
  }

  const isClient = typeof window != "undefined";

  console.log(`🚀 ~ Start mocking API on ${isClient ? "browser" : "server"}`);

  fetchMock.config.fallbackToNetwork = true;
  fetchMock.config.overwriteRoutes = true;
  fetchMock.config.warnOnFallback = false;

  mockProducts(fetchMock);
  console.log("🚀 ~ Mocked products");

  mockAPI.initialized = true;
}
