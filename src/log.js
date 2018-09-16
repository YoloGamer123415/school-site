const colors = {
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
    ResetColor: "\x1b[0m"
}

function _log(text, color = colors.FgWhite) {
    console.log(`${colors.FgGreen}\[ School Site \]${colors.ResetColor} ${color}%s${colors.ResetColor}`, text)
}

function _warn(text, color = color.FgYellow) {
    console.log(`${colors.BgYellow}\[ Site Warn \]${colors.ResetColor} ${color}%s${colors.ResetColor}`, text)
}

function _error(text, color = colors.BgRed) {
    console.log(`${colors.FgRed}\[ Site Error \]${colors.ResetColor} ${color}%s${colors.ResetColor}`, text)
}

module.exports = {
    _log,
    _warn,
    _error,
    colors
}
