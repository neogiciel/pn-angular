
export class Personne {
    id!: number;
    prenon!: string;
    nom!: string;
    age!: number;
}

/*
    //json1
    const json1 = '{"result":true, "count":42}';
    const obj1 = JSON.parse(json1);

    console.log(obj1.count);
    console.log(obj1.result);

    const json2 = '[{"id":1,"nom":"radin","prenon":"patrice","age":20},{"id":2,"nom":"tito","prenon":"natache","age":20}]';
    console.log(json2.length);
    
    this.liste = JSON.parse(json2);
    console.log(this.liste.length);
    console.log(this.liste[0].id);

    console.log('Login : onSubmitForm');
*/
