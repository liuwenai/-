class Queue {
    constructor(items){
        this.items = items || []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    front(){
        return this.items[0]
    }

    clear(){
        this.items = []
    }

    get size(){
        return this.items.length
    }

    get isEmpty(){
        return !this.items.length
    }

    porint(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty)

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Jane')
console.log(queue.size)
console.log(queue.isEmpty)
console.log(queue.dequeue())
queue.dequeue()
queue.porint()

//优先队列
class PriprityQueue{
    constructor(){
        this.itemn = []
    }

    inqueue(element,priority){
        const queueElement = { element,priority}
        if(this.isEmpty){
            this.itemn.push(queueElement)
        }else{
            const preIndex = this.itemn.findIndex((item) => queueElement.priority < item.priority)
            if(preIndex > -1){
                this.itemn.splice(preIndex, 0, queueElement)
            }else{
                this.itemn.push(queueElement)
            }
        }
    }

    dequeue(){
        return this.itemn.shift()
    }

    front(){
        return this.itemn[0]
    }

    clear(){
        this.itemn = []
    }

    get size(){
        return this.itemn.length
    }

    get isEmpty(){
        return !this.itemn.length
    }

    porint(){
        console.log(this.itemn)
    }
}

const priprityQueue = new PriprityQueue()
priprityQueue.inqueue('John',2)
priprityQueue.inqueue('Jack',1)
priprityQueue.inqueue('Jane',2)
priprityQueue.inqueue('Susan',4)
priprityQueue.inqueue('Jackson',3)
priprityQueue.porint()


//循环队列
class LoopQueue extends Queue {
    constructor (items) {
        super (items)
    }

    getIndex(index){
        const length = this.items.length
        return index > length?(index%length) : index
    }

    find(index){
        return !this.isEmpty ? this.items[this.getIndex(index)] : null
    }
}

const loopQueue = new LoopQueue(['S'])
loopQueue.enqueue('C')
loopQueue.enqueue('A')
loopQueue.enqueue('B')
console.log(loopQueue.size, loopQueue.isEmpty)

console.log(loopQueue.find(4))