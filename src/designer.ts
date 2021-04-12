class Designer{
    router: Router;
    store: EntityStore;
    
    constructor(){
        this.router = new Router()
    }

    init(db:EntityStore){
        this.store = db

        this.router.listen(/entity\/(?<id>.*)/, (match:any) => {
            var ent = this.store.get(match.groups.id)
            //render detail view
        })


        this.router.listen(/./, () => {
            //render listview
        })

    }
}