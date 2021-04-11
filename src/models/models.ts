class Entity{
    id
    parent
    name

    
    createdAt
    updatedAt
    // archivedAt
    status//draft normal archived


    //bookkeeping
    children
    backrefs
}

class ObjDef{

}

class Attribute extends Entity{
    datatype:string
}


enum DataType{
    string = '1',
    date = '2',
    range = '3',
    number = '4',
    pointer = '5',
    id = '6',
    boolean = '7'
}