/// <reference path="libs/vector/vector.ts" />
/// <reference path="libs/utils/rng.ts" />
/// <reference path="libs/utils/table.ts" />
/// <reference path="libs/utils/utils.ts" />
/// <reference path="libs/utils/stopwatch.ts" />
/// <reference path="libs/utils/ability.ts" />
/// <reference path="libs/utils/anim.ts" />
/// <reference path="libs/rect/rect.ts" />
/// <reference path="libs/event/eventqueue.ts" />
/// <reference path="libs/event/eventsystem.ts" />
/// <reference path="src/store.ts" />
/// <reference path="src/models/models.ts" />
/// <reference path="src/models/definition.ts" />
/// <reference path="src/designer.ts" />
/// <reference path="src/router.ts" />
/// <reference path="src/views/detailview.tsx" />
/// <reference path="src/views/listview.tsx" />
/// <reference path="src/views/treeview.tsx" />
/// <reference path="src/widgets/widget.tsx" />
/// <reference path="src/widgets/date.tsx" />
/// <reference path="src/widgets/id.tsx" />
/// <reference path="src/widgets/number.tsx" />
/// <reference path="src/widgets/pointer.tsx" />
/// <reference path="src/widgets/range.tsx" />
/// <reference path="src/widgets/string.tsx" />





//create a definition for the app

//save both the app data and its definition in the database
//save the definition of itself somewhere?

//1 tree for definition for the editor //objdef and attributes of objdef and attributes
//2 tree for definition of app //objdef and attributes of person
//3 tree for data of app //instance of person

//make it so the editor can edit both the app and the definition

//upsert hardcoded entity tree to the database,work on that instead of local data
var store = generateSelfDef()

var designer = new Designer(store,null)