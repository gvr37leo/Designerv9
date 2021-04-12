//0 definition in code for 1 a knot and 2 objdef,attribute,appdef
//1 tree for definition for the editor //objdef and attributes of objdef and attributes
//2 tree for definition of app //objdef and attributes of person
//3 tree for data of app //instance of person

//definition of appdef objdef attributes
var entityStore = new EntityStore()
var appdefdef = new AppDef({
    name:'appdef',
    type:appdef.id,
    definitionAppdef:appdefdef

})

var appdef = new ObjDef({
    name:'appdef',
    type:objdef.id,
})

entityStore.inject(appdefdef,appdefdef)
generateAttributes(appdefdef,entityStore)


var objdef = new ObjDef({
    name:'objdef',
    type:objdef.id,
})
entityStore.inject(objdef,appdefdef)
generateAttributes(objdef,entityStore)

var attributedef = new ObjDef({
    name:'attribute',
    type:objdef.id,
})
entityStore.inject(attributedef,appdefdef)
generateAttributes(attributedef,entityStore)

var datatypedef = new ObjDef({
    name:'datatype',
    type:objdef.id
})


var datatypestring = entityStore.inject(new DataType({
    name:'string',
}),appdefdef)

var datatypedate = entityStore.inject(new DataType({
    name:'date',
}),appdefdef)

var datatyperange = entityStore.inject(new DataType({
    name:'range',
}),appdefdef)

var datatypenumber = entityStore.inject(new DataType({
    name:'number',
}),appdefdef)

var datatypepointer = entityStore.inject(new DataType({
    name:'pointer',
}),appdefdef)

var datatypeid = entityStore.inject(new DataType({
    name:'id',
}),appdefdef)

var datatypebool = entityStore.inject(new DataType({
    name:'bool',
}),appdefdef)

function generateAttributes(parent, store:EntityStore){
    store.inject(new Attribute({
        name:'id',
        type:attributedef.id,
        datatype:DataType.id,
    }),parent)
    
    store.inject(new Attribute({
        name:'parent',
        type:attributedef.id,
        datatype:DataType.pointer,
    }), parent)

    store.inject(new Attribute({
        name:'name',
        type:attributedef.id,
        datatype:DataType.string,
    }), parent)

    store.inject(new Attribute({
        name:'type',
        type:attributedef.id,
        datatype:DataType.pointer,
    }), parent)

    store.inject(new Attribute({
        name:'status',
        type:attributedef.id,
        datatype:DataType.string,
    }), parent)

    store.inject(new Attribute({
        name:'createdAt',
        type:attributedef.id,
        datatype:DataType.date,
    }), parent)

    store.inject(new Attribute({
        name:'updatedAt',
        type:attributedef.id,
        datatype:DataType.date,
    }), parent)
}


function getEntityId(e:Entity){
    return e.id
    // return e.name
}

