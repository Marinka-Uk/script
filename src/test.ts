const userName: string = 'Student';
const age: number = 15;
const isActive: boolean = true;

const numbers: number[]= [10, 12, 1];
numbers.push(5)

type Track={
    name: string,
    rating: number,
    isPopular: boolean
}

const track: Track ={
    name: 'Track1',
    rating: 3,
    isPopular: true
}

//composition

const id: string | number = '1234';

//union 
type Alert = 'warning' | 'error' | 'succes'
const alert: Alert = 'error';
const notification: Alert = 'succes'

//unoin 2 

type Return =  'outOf' | 'inStock'

const return: Return = 'inStock';
