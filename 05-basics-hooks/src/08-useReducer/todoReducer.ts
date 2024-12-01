export interface Todo {
    id: number;
    description: string;
    done: boolean;
}

export enum ActionType {
    add = "[TODO] Add Todo",
    delete = "[TODO] Delete Todo",
    put = "[TODO] Updated Todo",
    none = "",
}

interface Action {
    type: ActionType;
    payload: Todo | Todo[];
}

export const todoReducer = (
    initialState: Todo[],
    { type, payload }: Action
) => {
    switch (type) {
        case ActionType.add:
            return [...initialState, payload as Todo];
        case ActionType.delete:
            return initialState.filter(
                (todo) => todo.id !== (payload as Todo).id
            );
        case ActionType.put:
            return initialState.map((todo) => {
                if (todo.id === (payload as Todo).id) {
                    return payload as Todo;
                }
                return todo;
            });
        default:
            return initialState;
    }
};
