
// //深度优先DFS

// let deepTraversal1 = (node,nodeList = []) => {
//     if(node !== null){
//         nodeList.push(node)
//         let children = node.children
//         for(let i = 0;i < children.length;i++){
//             deepTraversall(children[i],nodeList)
//         }
//     }
//     return nodeList
// }

// let deepTraversal2 = (node) =>{
//     let nodes = []
//     if(node !== null){
//         nodes.push(node)
//         let children = node.children
//         for(let i = 0;i < children.length;i++){
//             nodes = nodes.concat(deepTraversal2(children[i]))
//         }
//     }
//     return nodes
// }

var myTree = {
    val: 6,
    left: {                        //     6
      val: 5,                      //  5    2 
      left: {                   //    4  3      1
        val: 4 
      }, 
      right: { 
        val: 3 
      }
    },
    right: { 
      val: 2, 
      right: { 
        val: 1 
      } 
    }
}

console.log(myTree)

//广度优先BFS

function bfs(tree){
    var queue = [tree]
    var res = []
    var count = 0
    while(queue[count] && queue[count].val){
        res.push(queue[count].val)
        var left = queue[count].left
        var right = queue[count].right
        if(left){
            queue.push(left)
        }
        if(right){
            queue.push(right)
        }
        count++
    }

    return res
}


//深度优先DFS

function dfs(tree){
    var stack = [tree]
    var res = []
    while(stack.length){
        var node = stack.pop()
        res.push(node.val)
        var left = node.left
        var right = node.right
        if(right) stack.push(right)
        if(left) stack.push(left)

    }
    return res
}

console.log(bfs(myTree))
console.log(dfs(myTree))


// // 创建图

// function Graph(){
//     this.vertices = []  //顶点集合
//     this.edges = new Map()   //边集合
// }

// Graph.prototype.addVertex = function(v){   //添加顶点方法
//     this.vertices.push(v)
//     this.edges.set(v,[])
// }

// Graph.prototype.addEdge = function(v,w){   //添加边方法
//     let vEdge = this.edges.get(v)
//     vEdge.push(w)
//     let WEdge = this.edges.get(w)
//     WEdge.push(v)
//     this.edges.set(v,vEdge)
//     this.edges.set(w,WEdge)
// }


// Graph.prototype.toString = function(){
//     var s = ''
//     for(var i = 0;i<this.vertices.length;i++){
//         s += this.vertices[i] + ' -> '
//         var neighors = this.edges.get(this.vertices[i])
//         for(var j = 0;j < neighors.length;j++){
//             s += neighors[j] + ' '
//         }
//         s += '\n'
//     }
//     return s
// }

// var graph = new Graph()
// var vertices = [1,2,3,4,5]
// for(var i = 0;i < vertices.length;i++){
//     graph.addVertex(vertices[i])
// }
// graph.addEdge(1,4)    //增加边
// graph.addEdge(1,3)
// graph.addEdge(2,3)
// graph.addEdge(2,5)

// console.log(graph.toString())

// // 深度优先遍历（DFS）
// Graph.prototype.dfs = function() {
//     var marked = []
//     for(var i = 0; i < this.vertices.length;i++){
//         if(!marked[this.vertices[i]]){
//             dfsVisit(this.vertices[i])
//         }
//     }

//     function dfsVisit(u) {
//         let edges = this.edges
//         marked[u] = true
//         console.log(u)
//         var neighbors = edges.get(u)
//         for (var i=0; i<neighbors.length; i++) {
//             var w = neighbors[i]
//             if (!marked[w]) {
//                 dfsVisit(w)
//             }
//         }
//     }
// }

// graph.dfs()




// 广度优先遍历（BFS）
