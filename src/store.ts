class EntityStore{

    map = new Map<number,Entity>()
    counter = 0

    get(id){
        return this.map.get(id)
    }

    add(item:Entity){
        (item as any).id = this.counter++
        this.map.set((item as any).id,item)
        return item
    }

    inject(item:Entity,parent:Entity){
        this.add(item)
        this.setParent(item,parent)
        return item
    }

    list(){
        return Array.from(this.map.values())
    }

    archive(id){

    }

    remove(id){
        var val = this.map.get(id)
        this.map.delete(id)
        return val
    }

    setParent(child, parent){

    }

    setChild(){

    }

    save(){

    }

    findDescentDants():Entity[]{
        return null
    }

    findAncestor():Entity{
        return null
    }
}