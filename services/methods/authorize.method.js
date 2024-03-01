const _ = require("lodash");

module.exports = async function (ctx, route, req) {
	ctx.meta.auth = ctx.meta.user;
	delete ctx.meta.user;
};
