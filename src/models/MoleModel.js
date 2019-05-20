import uuid from "uuid/v4"

export default class MoleModel {
    constructor() {
        this.__id = uuid()
        this.__timer = null
        this.__visible = false
    }

    get visible() {
        return this.__visible
    }

    set visible(visible) {
        this.__visible = visible
    }

    get id() {
        return this.__id
    }

    get timer() {
        return this.__timer
    }

    set timer(timer) {
        this.__timer = timer
    }

}