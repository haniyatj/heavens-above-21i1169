const crypto = require('crypto');

/**
 * Converts a time string in the format "HH:MM:SS" to seconds.
 * @param {string} time - The time string to convert it.
 * @returns {number} The time in seconds.
 */

function getTimestamp(time) {
	const arr = time.split(":");
	return parseInt(arr[0]) * 3600 + parseInt(arr[1]) * 60 + parseInt(arr[2]);
}

/**
 * Generates options for making a POST request.
 * @param {string} target - The target URL.
 * @param {Object} opt - The request options is given
 * @returns {Object} The POST options.
 */
function post_options(target, opt) {
	return {
		url: `https://www.heavens-above.com/${target}lat=39.9042&lng=116.4074&loc=%E5%8C%97%E4%BA%AC%E5%B8%82&alt=52&tz=ChST`,
		method: "POST",
		json: true,
		body: opt,
		headers: {
			"Host": "www.heavens-above.com",
			"Connection": "keep-alive",
			"Cache-Control": "max-age=0",
			"Origin": "https://www.heavens-above.com",
			"Upgrade-Insecure-Requests": "1",
			"DNT": "1",
			"Content-Type": "application/x-www-form-urlencoded",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
			"Accept-Encoding": "deflate, br",
			"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
			"Cookie": "ASP.NET_SessionId=4swouj1mkd2nburls12t5ryx; preferences=showDaytimeFlares=True; userInfo=lat=39.9042&lng=116.4074&alt=52&tz=ChST&loc=%e5%8c%97%e4%ba%ac%e5%b8%82"
		}
	};
}


/**
 * Generates options for making a GET request.
 * @param {string} target - The target URL.
 * @returns {Object} The GET options.
 */
function get_options(target) {
	return {
		url: `https://www.heavens-above.com/${target}lat=39.9042&lng=116.4074&loc=%E5%8C%97%E4%BA%AC%E5%B8%82&alt=52&tz=ChST`,
		method: "GET",
		headers: {
			"Host": "www.heavens-above.com",
			"Connection": "keep-alive",
			"Upgrade-Insecure-Requests": "1",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15",
			"DNT": "1",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
			"Accept-Encoding": "deflate, br",
			"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
			"Cookie": "ASP.NET_SessionId=4swouj1mkd2nburls12t5ryx; preferences=showDaytimeFlares=True; userInfo=lat=39.9042&lng=116.4074&alt=52&tz=ChST&loc=%e5%8c%97%e4%ba%ac%e5%b8%82"
		}
	};
}


/**
 * Generates options for making a GET request for an image.
 * @param {string} target - The target URL of the image.
 * @returns {Object} The image GET options.
 */
function image_options(target) {
	return {
		url: target,
		method: "GET",
		headers: {
			"Host": "www.heavens-above.com",
			"Connection": "keep-alive",
			"Upgrade-Insecure-Requests": "1",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15",
			"DNT": "1",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
			"Accept-Encoding": "deflate, br",
			"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
			"Cookie": "ASP.NET_SessionId=4swouj1mkd2nburls12t5ryx; preferences=showDaytimeFlares=True; userInfo=lat=39.9042&lng=116.4074&alt=52&tz=ChST&loc=%e5%8c%97%e4%ba%ac%e5%b8%82"
		}
	};
}
/**
 * Generates options for making a GET request for an iridium.
 * @param {string} target - The target URL.
 * @returns {Object} The iridium GET options.
 */
function iridium_options(target) {
	return {
		url: target,
		method: "GET",
		headers: {
			"Host": "www.heavens-above.com",
			"Connection": "keep-alive",
			"Cache-Control": "max-age=0",
			"Upgrade-Insecure-Requests": "1",
			"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Safari/605.1.15",
			"DNT": "1",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
			"Accept-Encoding": "deflate, br",
			"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
			"Cookie": "ASP.NET_SessionId=4swouj1mkd2nburls12t5ryx; preferences=showDaytimeFlares=True; userInfo=lat=39.9042&lng=116.4074&alt=52&tz=ChST&loc=%e5%8c%97%e4%ba%ac%e5%b8%82"
		}
	};
}

function md5(str) {
	return crypto.createHash('md5').update(str).digest('hex');
}
/**
 * Calculates the MD5 hash of a string.
 * @param {string} str - The string to hash.
 * @returns {string} The MD5 hash.
 */
module.exports = {
	getTimestamp,
	post_options,
	get_options,
	image_options,
	iridium_options,
	md5
};