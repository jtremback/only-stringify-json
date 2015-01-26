module.exports = function onlyStringifyJSON (value, stringify) {
  stringify = stringify || JSON.stringify
  var type = typeof value
  if (type === 'boolean' || type === 'string' || type === 'number'){ return value }
  return stringify(value)
}