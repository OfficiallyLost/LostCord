const constants = require('../../Constants');

function HandleWSConnection(data, payload, identify) {
	switch (payload.op) {
		case constants.OPCODES.HELLO:
			data.heartbeatInterval = payload.d.heartbeat_interval;
			data.send(identify);

			setInterval(() => {
				data.send({ op: 1, d: null });
			}, data.heartbeatInterval);
	}
}

module.exports = HandleWSConnection;
