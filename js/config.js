// sea.js config base bug??
//var base = '/shanghai/';
// Change version (xxxxx.v\d+) after modified to clear cache!
seajs.config({
    alias: {
        "es5-safe": "ucloud/es5-safe/0.9.2/es5-safe",
        "$": "ucloud/jquery/1.8.2/jquery",
        "json": "gallery/json/1.0.2/json",
        "jquery": "ucloud/jquery/1.8.2/jquery-debug",
        "backbone": "gallery/backbone/1.0.0/backbone",
        "underscore": "gallery/underscore/1.4.4/underscore",
        "mustache": "marketing/mustache/0.7.2/mustache",
        "cookie": "arale/cookie/1.0.2/cookie",
        "cache": "ucloud/cache/1.0.0/cache",
        "marionette": "ucloud/marionette/0.9.2/marionette",
        "plugins": "ucloud/plugins/1.2.9/plugins-debug",
        "zxcvbn": "ucloud/zxcvbn/1.0.0/zxcvbn",
        "base64": "ucloud/base64/1.0.0/base64"
    },
    plugins: ["text", "shim"],
    preload: ['es5-safe', 'referrer'],
    map: [
            [/^(.*\/www\/.*\.(?:css|js))(?:.*)$/i, '$1?v='+version ] // timestamp here, clean the cache
        ]
});
