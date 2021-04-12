class RangeWidget extends Widget{

    constructor(attr:Attribute){
        super(attr)
        var x = <div>
            <input type="range" min="0" max="1" step="0.01" value="val"></input>
        </div>
    }

    set(val:any) {

    }

    get() {

    }
    
}