function defaultArguments(fn, params) {
  let paramNames = getParamNames(fn)
  return function () {
    let defaultParams = []
    console.log(arguments, paramNames, params)

    for (let paramName of paramNames) {
      defaultParams.push(
        arguments[paramNames.indexOf(paramName)] || params[paramName]
      )
    }
    return fn(...defaultParams)
  }
}

let STRIP_COMMENTS =
  /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s*=[^,\)]*(('(?:\\'|[^'\r\n])*')|("(?:\\"|[^"\r\n])*"))|(\s*=[^,\)]*))/gm
let ARGUMENT_NAMES = /([^\s,]+)/g
function getParamNames(func) {
  let fnStr = func.toString().replace(STRIP_COMMENTS, '')
  let result = fnStr
    .slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')'))
    .match(ARGUMENT_NAMES)
  if (result === null) result = []
  return result
}

module.exports = { defaultArguments }
