class Filter{
    attribute:string
    type:string
    value:any
}

class Dereference{
    attribute:string
    dereferences:Dereference[]
}

class Query{
    sort
    asc:boolean
    limit:number
    skip:number
    filters:Filter[]
    derefences:Dereference[]
}

class ListView{

    //filter
    //searchbar
    //table
    
    //create
    //goto
    //delete

    render(){
        return <div>
            <div>filter</div>
            <div>table</div>
        </div>

    }


}