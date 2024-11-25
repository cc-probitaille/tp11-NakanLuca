import "reflect-metadata";
export type Constructor<T = any> = new (...args: any[]) => T;
export function createClass<T>(target: Constructor<T>): T {

    const paramTypes: Constructor[] = Reflect.getMetadata("design:paramtypes", target) || [];
    const params = paramTypes.map((type) => new type());
    return new target(...params);
}

export class SpecialType {

    talk() {
        return "Inside the special type";
    }
}
  
export class GenericClass<T> {

    constructor(private specialType: SpecialType) {}
    
    explain(data: T) {
        return `${this.specialType.talk()} with generic type: ${data}`;
    }
}


Reflect.defineMetadata("design:paramtypes", [SpecialType], GenericClass);