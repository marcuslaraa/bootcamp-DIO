// DECORATORS

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`)
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })

    }
}

// atributte decorator
class Api{
    @minLength(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("Produtos");
