const indexOf = (str, arr, startIdx) => {
    if (str === undefined || !arr)
        return null

    if (!Array.isArray(arr))
        arr = [arr]

    if (startIdx > str.length)
        return -1

    let closest = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < arr.length; i++) {
        const substr = arr[i]
        const index  = str.indexOf(substr, startIdx)
        if (index >= 0 && index < closest)
            closest = index
    }

    return closest
}

module.exports = indexOf