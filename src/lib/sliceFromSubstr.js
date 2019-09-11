const sliceFromSubstr = (str, substr, endIdx) => {
    if (str === undefined)
        return null
        
    const startIdx = str.indexOf(substr)

    if (startIdx === -1)
        return null

    return str.slice(startIdx + substr.length, endIdx || str.length)
}

module.exports = sliceFromSubstr