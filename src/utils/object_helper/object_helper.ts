
//это вспомогательная функция, к-я возвразает мне новый массив, совпавшим айди юзеров с айди к-й прибыл в action,
//и возвразщает ключ-значения; followed:true, если совпала

// - здесь я говорю map пройдись по элементам текущей загруженной стр пол-ей,
// верни мне новый массив, с юзером только того у которого есть совподения id на которого id,к-ый сейчас пришел в action
//если не будет совпадении, то верни юзера
export const updateObjectArray = (items:any, itemId:any, objPropName:any, newObjProps:any) => {
    return items.map((u:any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}