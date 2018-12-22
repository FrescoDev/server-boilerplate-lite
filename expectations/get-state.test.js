const test = require("ava");
const request = require("supertest");
const { server } = require("..");

test("When a client submits a GET request to the /state endpoint", async ({
  is,
  plan
}) => {
  plan(2);

  const response = await request(server).get("/state");

  const expectedStatus = 200;

  is(response.status, expectedStatus);
  is(response.body.isResponsive, true);
});
