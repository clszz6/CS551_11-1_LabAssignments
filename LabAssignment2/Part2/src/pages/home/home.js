
module.exports = {
    validText: function() {
        if (text.length === 0) {
            return false;
        } else {
        let input = Number(text)
        return Number.isInteger(input)
        }
    }
};