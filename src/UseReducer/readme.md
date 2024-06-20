## https:react.dev/learn/extracting-state-logic-into-a-reducer

*** 1> Normal state change events ***
 function handleAddTask(text) {
   setTasks([
     ...tasks,
     {
       id: nextId++,
       text: text,
       done: false,
     },
   ]);
 }

 function handleChangeTask(task) {
   setTasks(
     tasks.map((t) => {
       if (t.id === task.id) {
         return task;
       } else {
         return t;
       }
     })
   );
 }

 function handleDeleteTask(taskId) {
   setTasks(tasks.filter((t) => t.id !== taskId));
 }

*** 2> apply dispatch on over setState ***

The object pass to dispatch is called an “action”: 

 function handleAddTask(text) {
     dispatch(
    "action" object:
     {
       type: 'added',
       id: nextId++,
       text: text,
     });
   }

   function handleChangeTask(task) {
     dispatch({
       type: 'changed',
       task: task,
     });
   }

   function handleDeleteTask(taskId) {
     dispatch({
       type: 'deleted',
       id: taskId,
     });
   }

 A reducer function is where you will put your state logic. It takes two arguments, the current state and the action object, and it returns the next state:

 To move your state setting logic from your event handlers 1. to a reducer function 3.

 3.  reducer function -> tasksReducer
 function tasksReducer(tasks, action) {
     if (action.type === 'added') {
         return [
             ...tasks,
             {
                 id: action.id,
                 text: action.text,
                 done: false,
             },
         ];
     } else if (action.type === 'changed') {
         return tasks.map((t) => {
             if (t.id === action.task.id) {
                 return action.task;
             } else {
                 return t;
             }
         });
     } else if (action.type === 'deleted') {
         return tasks.filter((t) => t.id !== action.id);
     } else {
         throw Error('Unknown action: ' + action.type);
     }
 }

const [tasks, setTasks] = useState(initialTasks); 
 Replce with
 const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
 tasksReducer is reducer function and initialTasks is initial states