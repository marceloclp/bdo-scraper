const Controller = require('./Controller')

class TabsController extends Controller {
    get(flag) {
        let query = this.parseFlag(flag)
        return this.format(this.parseQuery(query))
    }

    parseFlag(flag) {
        switch (flag) {
            case '#tabs-productofrecipe':
                return this.buildQueryObj('recipes', 'product')
            case '#tabs-mproductofrecipe':
                return this.buildQueryObj('mrecipes', 'product')
            case '#tabs-recipematerial':
                return this.buildQueryObj('recipes', 'material')
            case '#tabs-designmaterial':
                return this.buildQueryObj('designs', 'material')
        }
    }

    buildQueryObj(a, type) {
        return { a, type, item_id: this._id, l: this._lang }
    }
}

module.exports = TabsController