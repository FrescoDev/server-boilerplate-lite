const server = require("fastify")({
  redact: ['req.headers.authorization'],
  logger: true
});

server.get("/state", (request, reply) => {
  return reply.send({ isResponsive: true });
});

server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server listening on ${address}`);
});

module.exports = server;
