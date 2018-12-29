const test = require("ava");
const request = require("supertest");
const { contains } = require("ramda");
const uiContent = require("../ui/index.content.json");
const { server, ready, close } = require("..");

test("When a client submits a GET request to the /state endpoint", async ({
  is,
  plan
}) => {
  plan(2);

  await ready();
  const response = await request(server).get("/state");

  is(response.status, 200);
  is(response.body.isResponsive, true);

  close();
});

test("When a client submits a GET request to the /ui endpoint", async ({
  is,
  plan
}) => {
  plan(3);

  await ready();
  const response = await request(server).get("/ui");

  is(response.status, 200);
  is(response.type, "text/html");

  const uitHtml = response.text;
  const expectedContentRendered = contains(uiContent.header_text, uitHtml);

  is(expectedContentRendered, true);

  close();
});
