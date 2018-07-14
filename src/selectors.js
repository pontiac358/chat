import * as R from 'ramda'


export const setStatusMessage = (status, id, messages) => {
    return R.curry((status, id, items) => R.map(
        R.when(R.propEq('id', id), R.assoc('status', status)),
        items
    ))(status, id, messages)
}

export const deleteMessage = (id, messages) => {
    const removeId = (id, objs) => R.map(
        R.evolve({ queries: xs => removeId(id, xs) }),
        R.reject(R.propEq('id', id), objs)
    )

    return removeId(id, messages)
}

export const sortMessages = (key, messages) => {

    return R.sortBy(R.prop(key), messages);
}
