/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1634439756217_5731';

    // add your middleware config here
    config.middleware = ['printDate', 'forbidIps', 'auth'];
    config.forbidIps = {
        list: ['127.0.0.1']
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    config.view = {
        mapping: {
            // '.ejs': 'ejs',
            '.html': 'ejs',
        }
    }

    config.baseUrl = 'http://www.phonegap100.com/'

    return {
        ...config,
        ...userConfig,
    };
};
