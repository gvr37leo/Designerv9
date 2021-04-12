class Designer{
    router: Router;
    
    constructor(public store:EntityStore,selfAppDefId:number){
        this.router = new Router()
    }

    init(){

        this.router.listen(/entity\/(?<id>.*)/, (match:any) => {
            var ent = this.store.get(match.groups.id)
            //render detail view
        })


        this.router.listen(/./, () => {
            //render listview
        })

    }
}