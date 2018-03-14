export class Enum<T>{
    public constructor(public readonly value: T){

    }
    public toString(){
        return this.value.toString();
    }
}

export class EnumExample extends Enum<string>
{
     public static readonly DEFAULT = new Enum('DEFAULT');
}