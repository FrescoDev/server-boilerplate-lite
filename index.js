const server = require("fastify")({
  logger: true
});

server.get("/state", (request, reply) => {
  reply.send({ isResponsive: true });
});

server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  if (err) throw err;
  server.log.info(`server listening on ${address}`);
});

module.exports = server;
