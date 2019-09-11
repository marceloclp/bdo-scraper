const sliceFromSubstr = (str, substr, endIdx) => {
    const startIdx = str.indexOf(substr)

    if (startIdx === -1)
        return null

    return str.slice(startIdx + substr.length, endIdx || str.length)
}

module.exports = sliceFromSubstr