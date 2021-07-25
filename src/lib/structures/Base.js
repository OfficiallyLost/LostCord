class Base {
	constructor(id) {
		this._id = id;
	}

	get createdAt() {
		return Math.floor(this._id / 4194304) + 1420070400000;
	}
}

module.exports = Base;
