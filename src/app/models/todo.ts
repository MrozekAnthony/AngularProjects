import { priority } from "../enum/priority"

export type tTodo = {
    id : string,
    title : string,
    description : string,
    priority? : priority,
    deleted : boolean
} 