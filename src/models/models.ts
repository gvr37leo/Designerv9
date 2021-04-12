//0 definition in code for 1 a knot and 2 objdef,attribute,appdef
//1 tree for definition for the editor //objdef and attributes of objdef and attributes
//2 tree for definition of app //objdef and attributes of person
//3 tree for data of app //instance of person


class Entity{

    //maybe keep this stuff in a sidebar
    id
    parent
    name
    type
    
    createdAt
    updatedAt
    // version
    // archivedAt
    status//draft normal archived


    //bookkeeping
    children
    backrefs

    public constructor(init?:Partial<Entity>) {
        Object.assign(this, init);
    }
}

class AppDef extends Entity{
    // defini tionAppdef//references an appdef that is used as definition for the contenttype editor

    public constructor(init?:Partial<AppDef>) {
        super(init)
    }

}

class ObjDef extends Entity{

}

class Attribute extends Entity{
    datatype:string

    public constructor(init?:Partial<Attribute>) {
        super(init)
    }
}

class DataType extends Entity{
    public constructor(init?:Partial<DataType>) {
        super(init)
    }
}

enum EntityStatus{
    draft = 'draft',
    normal = 'normal',
    archived = 'archived',
}

// enum DataType{
//     string = 'string',
//     date = 'date',
//     range = 'range',
//     number = 'number',
//     pointer = 'pointer',
//     id = 'id',
//     bool = 'bool'
// }