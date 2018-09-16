const express = require('express')
const app = express()
const path = require('path')
const {
    _log,
    colors
} = require('./src/log')
const {
    createSessionIdAsync
} = require('./src/sessionId')
const unirest = require('unirest')

const port = process.env.PORT || 80

function calculatePing(callback) {
    _log(`Calculating ping...`, colors.FgYellow)

    unirest.get('https://google.com')
        .followRedirect(false)
        .end(res => {
            callback({
                time: Date.now()
            })
        })
}

app.get('/api', (req, res) => {
    res.status(400).send({
        body: 'please specify an API version'
    })
})

app.get('/api/:version', (req, res) => {
    var version = req.params.version
    if (version.indexOf('v') == 0 && version == 'v1') {
        res.status(400).send({
            body: 'not enough information'
        })
    } else {
        res.status(400).send({
            body: {
                error: 'that API version is no longer supported or invalid'
            }
        })
    }
})

app.get('/api/:version/ping', (req, res) => {
    var version = req.params.version
     ,  request_time = Date.now()
    if (version.indexOf('v') == 0 && version == 'v1') {
        version = version.replace('v', '')

        calculatePing(cb => {
            res.status(200).send({
                body: {
                    ping: `${cb.time - request_time}ms`
                }
            })
        })
    } else {
        res.status(400).send({
            body: {
                error: 'that API version is no longer supported or invalid'
            }
        })
    }
})

app.get('/api/:version/authenticate', (req, res) => {
    var version = req.params.version
     ,  query = req.query
    if (version.indexOf('v') == 0 && version == 'v1') {
        version = version.replace('v', '')

        if (query.username == 'Admin' && query.password == 'W8Woord') {
            createSessionIdAsync(sessionId => {
                res.status(200).send({
                    body: {
                        sessionid: sessionId
                    }
                })
            }, true)
        } else {
            createSessionIdAsync(sessionId => {
                res.status(200).send({
                    body: {
                        sessionid: sessionId
                    }
                })
            })
        }
    } else {
        res.status(400).send({
            body: {
                error: 'that API version is no longer supported or invalid'
            }
        })
    }
})

app.use(express.static('./public'))
app.listen(port)
_log(`Listening on port ${colors.FgYellow}${port}${colors.ResetColor}`)
