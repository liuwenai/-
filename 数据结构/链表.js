//链表节点
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

//链表
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    //追加元素
    append(element) {
        const node = new Node(element)
        let current = null
        if (this.head === null) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.length++
    }

    //任意位置插元素
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            const node = new Node(element)
            let current = this.head
            let previous = null
            let index = 0
            if (position === 0) {
                this.head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            this.length++
            return true
        }
        return false
    }

    //移除指定位置元素
    removeAt(position) {
        //检查越界
        if (position > -1 && position < length) {
            let current = this.head
            let previous = null
            let index = 0
            if(position === 0){
                this.head = current.next
            }else{
                while(index++ < position){
                   previous = current
                   current = current.next
                }
                previous.next = current.next
            }
            this.length--
            return current.element
        }
        return null
    }

    //寻找元素下标
    findIndex(element){
        let current = this.head
        let index = -1
        while(current){
            if (element === current.element){
                return index + 1
            }
            index++
            current = current.next
        }
        return -1
    }

    //删除指定文档
    remove(element){
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    isEmpty(){
        return !this.length
    }

    size(){
        return this.length
    }

    //转为字符串
    toString(){
        let current = this.head
        let string = ''
        while(current){
            string += '$(current.element)'
            current = current.next
        }
        return string
    }
}

const linkedList = new LinkedList()

console.log(linkedList)
linkedList.append(2)
linkedList.append(6)
linkedList.append(24)
linkedList.append(152)

linkedList.insert(3, 18)
console.log(linkedList)
console.log(linkedList.findIndex(18))


//双向链表
//链表节点
class Node1{
    constructor(element){
        this.element = element
        this.prev = null
        this.next = null
    }
}

// //双向链表
// class DoublyLinkedList{

//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }

//     //任意位置插入元素
//     insert(position,element){
//         if (position >= 0 && position <= this.length){
//             const node = new Node1(element)
//             let current = this.head
//             let previous = null
//             let index = 0
//             //首位
//             if (position === 0){
//                 if (!this.head){
//                     this.head = node 
//                     this.tail = node
//                 }else{
//                     node.next = current
//                     this.head = node
//                     current.prev = node
//                 }
//                 }
//                 //末位
//                 else if(position === this.length){
//                     current = this.tail
//                     current.next = node
//                     node.prev = current
//                     this.tail = node
//             }
//             //中位
//             else{
//                 while (index++ < position){
//                     previous = current
//                     current = current.next
//                 }
//                 node.next = current
//                 previous.next = node
//                 current.prev = node
//                 node.prev = previous
//             }
//             this.length++
//             return true
//         }
//         return false
//     }

//     //删除指定位置
//     removeAt(position){
//         if (position > -1 && position < this.length){
//             let current = this.head
//             let previous = null
//             let index = 0

//             //首位
//             if(position === 0){
//                 this.head = this.head.next
//                 this.head.prev = null
//                 if ()
//             }
//         }
//     }
// }

