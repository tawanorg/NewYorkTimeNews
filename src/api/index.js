const api_key = "sassPb0INNF3zVoMfxMqLUBAvkncKn8N";
const baseUri = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const createBaseApiUrl = (params = {}) => {
	if (typeof (params) !== 'object') {
		throw new Error('params must be an object');
	}

    var buildParams = Object.assign({}, {
		sort: "newest",
		"api-key": api_key
	}, params);

	var encodeURI = encodeURIComponent;
	return `${baseUri}?`+ Object.keys(buildParams)
		.map(k => encodeURI(k) + "=" + encodeURI(buildParams[k]))
		.join("&");
};

export default createBaseApiUrl;