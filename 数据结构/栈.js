class Stack{
    constructor(){
        this.item = []
    }

    //入栈
    push(element){
        this.item.push(element);
    }

    //出栈
    pop(){
        return this.item.pop()
    }

    //末位
    get peek(){
        return this.item[this.item.length - 1]
    }

    //是否为空栈
    get isEmpty(){
        return !this.item.length
    }

    //尺寸
    get size(){
        return this.item.length
    }

    //请空栈
    clear(){
        this.item = []
    }

    //打印栈数据
    print(){
        console.log(this.item.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty)  //true

stack.push(4)
stack.push(1)


console.log(stack.peek)   //1
stack.push(12)   
console.log(stack.size)    //3
console.log(stack.isEmpty)  //false