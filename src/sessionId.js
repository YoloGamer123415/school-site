function _pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

function createSessionId(isAdmin = false) {
    if (isAdmin) {
        var d = new Date()
        var sessionId = 'A_'
        sessionId += `${_pad(d.getFullYear())}-`
        sessionId += `${_pad(d.getMonth())}-`
        sessionId += `${_pad(d.getDate())}t`
        sessionId += `${_pad(d.getHours())}:`
        sessionId += `${_pad(d.getMinutes())}:`
        sessionId += `${_pad(d.getSeconds())}.`
        sessionId += `${_pad(d.getMilliseconds())}z`
        return sessionId
    } else {
        var d = new Date()
        var sessionId = 'U_'
        sessionId += `${_pad(d.getFullYear())}-`
        sessionId += `${_pad(d.getMonth())}-`
        sessionId += `${_pad(d.getDate())}t`
        sessionId += `${_pad(d.getHours())}:`
        sessionId += `${_pad(d.getMinutes())}:`
        sessionId += `${_pad(d.getSeconds())}.`
        sessionId += `${_pad(d.getMilliseconds())}z`
        return sessionId
    }
}

function createSessionIdAsync(cb, isAdmin = false) {
    if (isAdmin) {
        var d = new Date()
        var sessionId = 'A_'
        sessionId += `${_pad(d.getFullYear())}-`
        sessionId += `${_pad(d.getMonth())}-`
        sessionId += `${_pad(d.getDate())}t`
        sessionId += `${_pad(d.getHours())}:`
        sessionId += `${_pad(d.getMinutes())}:`
        sessionId += `${_pad(d.getSeconds())}.`
        sessionId += `${_pad(d.getMilliseconds())}z`
        cb(sessionId)
    } else {
        var d = new Date()
        var sessionId = 'U_'
        sessionId += `${_pad(d.getFullYear())}-`
        sessionId += `${_pad(d.getMonth())}-`
        sessionId += `${_pad(d.getDate())}t`
        sessionId += `${_pad(d.getHours())}:`
        sessionId += `${_pad(d.getMinutes())}:`
        sessionId += `${_pad(d.getSeconds())}.`
        sessionId += `${_pad(d.getMilliseconds())}z`
        cb(sessionId)
    }
}

module.exports = {
    createSessionId,
    createSessionIdAsync
}
