const nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
const options = {
    name: '途虎养车', // will be inferred if not specified
    targetUrl: 'https://www.tuhu.cn/', // required
    platform: 'darwin', // defaults to the current system
    arch: 'x64', // defaults to the current system
    version: '0.0.1',
    out: '../output',
    overwrite: false,
    asar: false, // see conceal
    icon: './images/tuhu.png',
    counter: false,
    showMenuBar: true,
    fastQuit: true,
    // userAgent: 'Mozilla ...', // will infer a default for your current system
    ignoreCertificate: false,
    ignoreGpuBlacklist: false,
    enableEs3Apis: false,
    insecure: false,
    honest: false,
    zoom: 1.0,
    singleInstance: false,
    // processEnvs: {
    //   "GOOGLE_API_KEY": "<your-google-api-key>"
    // }
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});