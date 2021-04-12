abstract class Widget{

    root:HTMLElement

    constructor(public attr:Attribute){

    }

    abstract set(val:any)

    abstract get():any
}