// 二分搜索树②
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }
    addNode(v) {
        this.root = this._addChild(this.root, v)
    }
    // 添加节点时，需要比较添加的节点值和当前
    // 节点值的大小
    _addChild(node, v) {
        if (!node) {
            this.size++
            return new Node(v)
        }
        if (node.value > v) {
            node.left = this._addChild(node.left, v)
        } else if (node.value < v) {
            node.right = this._addChild(node.right, v)
        }
        return node
    }
    // 先序、中序、后续遍历都是深度遍历
    // 先序遍历可以打印树的结构
    // 先序遍历二叉树(先访问根节点，再访问左结点，再访问右结点)
    preTraversal() {
        this._pre(this.root)
    }
    _pre(node) {
        if (node) {
            console.log(node)
            _pre(node.left)
            _pre(node.right)
        }   
    }
    // 中序遍历可用于排序，遍历一次就可以得到有序的值
    // 中序遍历二叉树(先访问左结点，然后访问根节点，再访问右结点)
    midTraversal() {
        this._mid(this.root)
      }
      _mid(node) {
        if (node) {
          this._mid(node.left)
          console.log(node.value)
          this._mid(node.right)
        }
      }
      // 后序遍历可用于先操作子节点
      // 再操作父节点的场景
      // 后序遍历表示先访问左节点，然后访问右节点，最后访问根节点。
      backTraversal() {
        this._back(this.root)
      }
      _back(node) {
        if (node) {
          this._back(node.left)
          this._back(node.right)
          console.log(node.value)
        }
      }
      // 广度遍历
      breadthTraversal() {
        if (!this.root) return null
        let q = new Queue()
        // 将根节点入队
        q.enQueue(this.root)
        // 循环判断队列是否为空，为空
        // 代表树遍历完毕
        while (!q.isEmpty()) {
          // 将队首出队，判断是否有左右子树
          // 有的话，就先左后右入队
          let n = q.deQueue()
          console.log(n.value)
          if (n.left) q.enQueue(n.left)
          if (n.right) q.enQueue(n.right)
        }
      }
      //二叉树中寻找最大最小值
      getMin(){
          return this._getMin(this.root).value
      }
      _getMin(node){
        if(!node.left) return node
        return this._getMin(node.left)
      }
      getMax(){
        return this._getMax(this.root).value
      }
      _getMax(node){
          if(!node.right) return node
          return this._getMax(node.right)
      }
}