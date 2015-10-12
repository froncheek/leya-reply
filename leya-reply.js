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
};

fn.TYPEJSON = 'application/json';
fn.TYPEJS = 'application/javascript';
fn.TYPEXML = 'application/xml';
fn.TYPEHTML = 'text/html';
fn.TYPECSS = 'text/css';

/**
 * @method send
 * @param {String|Object} data
 */
fn.prototype.send = function(d) {
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

module.exports = fn;