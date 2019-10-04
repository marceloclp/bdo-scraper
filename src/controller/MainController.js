const Controller = require('./Controller')

class MainController extends Controller {
    get() {
        return this.format(`${this._lang}/${this._type}/${this._id}`)
    }
}

module.exports = MainController