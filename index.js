const path = require("path");
const server = require("fastify")({
  redact: ["req.headers.authorization"],
  logger: true
});

server.register(require("fastify-static"), {
  root: path.join(__dirname, "public")
});

server.get("/ui", (request, reply) => {
  return reply.sendFile("index.html");
});

server.get("/state", (request, reply) => {
  return reply.send({ isResponsive: true });
});

server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(server.printRoutes());
  server.log.info(`server listening on ${address}`);
});

module.exports = server;
