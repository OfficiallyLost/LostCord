const constants = require('../../Constants');

function HandleWSConnection(data, payload, identify) {
	switch (payload.op) {
		case constants.OPCODES.HELLO:
			data.heartbeatInterval = payload.d.heartbeat_interval;
			data.send(identify);

			setInterval(() => {
				data.send({ op: constants.OPCODES.HEARTBEAT, d: null });
			}, data.heartbeatInterval);
	}
}

module.exports = HandleWSConnection;
