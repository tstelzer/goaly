module.exports = {
    presets: [
        ["@babel/preset-react", {development: process.env.BABEL_ENV === 'development'}],
        ["@babel/preset-stage-2", {decoratorsLegacy: true}],
        ["@babel/preset-env", {"modules": false}]
    ],
    env: {
        production: {
            plugins: [
                ["emotion", {"hoist": true}]
            ],
        },
        development: {
            plugins: [
                ["emotion", {"sourceMap": true, "autoLabel": true}]
            ],
        },
    }
}
