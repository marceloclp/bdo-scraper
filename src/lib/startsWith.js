const startsWith = (str, chars) => {
    for (let i = 0; i < chars.length; i++) {
        if (str[0] === chars[i])
            return true
    }
}

module.exports = startsWith