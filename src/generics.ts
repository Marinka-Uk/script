function concatArray<T,M>(arr: T[], arr1: M[]): (T|M)[]{

return(
    [...arr, ...arr1]
)

}

interface IHotel{name: string, capacity: number, stars: number}
const hotel:IHotel = {
    name: "cscs",
    capacity: 134,
    stars: 3,
}

const showProp = (obj:IHotel, key:Partial<IHotel>)=>{
return {...obj, ...key}
}

// const showCapacity = <T>(obj:T)=>{
//     return obj.capacity
// }
// showCapacity(hotel)
// const showProp =<T, K extends keyof>(obj:T, key:)=>{
// return obj[key]
// }


