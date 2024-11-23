export interface Todo {
    id: number;
    description: string;
    done: boolean;
}

export enum ActionType {
    add = "[TODO] Add Todo",
    delete = "[TODO] Delete Todo",
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
        default:
            return initialState;
    }
};
