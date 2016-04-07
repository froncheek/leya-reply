/**
 * @package leya-reply
 */

/**
 * @constructor
 * @param {Object} request
 * @param {Object} response
 */
var fn = function(req, res) {
	if(!req || !res) {
		throw new Error('Param `request` and `response` are required.');
	}
	this.request = req;
	this.response = res;
}, fnp = fn.prototype;

fn.TYPEJSON = 'application/json';
fn.TYPEJS = 'application/javascript';
fn.TYPEXML = 'application/xml';
fn.TYPEHTML = 'text/html';
fn.TYPECSS = 'text/css';

/**
 * @method send
 * @param {String|Object} data
 */
fnp.send = function(d) {
	var res = this.response,
		contentType = fn.TYPEHTML;

	if(typeof d === 'object') {
		d = JSON.stringify(d);
		contentType = fn.TYPEJSON;
	}

	res.writeHead(200, {
		'Content-Type': contentType,
		'Content-Length': d.length
	});
	res.write(d);
	res.end();
};
fnp.sendStatus = function(code) {
    this.response.writeHead(code);
    this.response.end();
}
fnp.getMethod = function() {
    return this.request.method;
};
fnp.getHeader = function(k) {
    return this.request.headers[k];
};
fnp.getHeaders = function(k) {
    return this.request.headers;
};
fnp.getFullUrl = function() {
    return this.request.url;
};
fnp.getUrl = function() {
    return this.request.url;
};
fnp.getParam = function() {
    return this.request.url;
};
fnp.getHash = function() {
    return this.request.url;
};


module.exports = fn;