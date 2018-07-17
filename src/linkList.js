// 单向链表
class Node {//结点
    constructor(v, next) {
        this.value = v;
        this.next = next;
    }
}
class LinkList {
    constructor() {
        this.size = 0;
        // 虚拟结点
        this.dummyNode = new Node(null, null);
    }
    find(header, index, currentIndex) {
        if (index === currentIndex) return header;
        return this.find(header.next, index, currentIndex + 1);
    }
    addNode(v, index) {
        this.checkIndex(index);
        // 查找要添加结点到哪一个结点
        let prev = this.find(this.dummyNode, index, 0);
        // 指向新的结点，新节点的指针指向插入的结点的之前的指向
        prevv.next = new Node(v, prev.next);
        this.size++;
        return prev.next;
    }
    insertNode(v, index) {
        return this.addNode(v, index);
    }
    addToFirst(v) {
        return this.addNode(v, 0);
    }
    addToLast(v) {
        return this.addNode(v, this.size);
    }
    removeNode(index, isLast) {
        this.checkIndex(index);
        let prev = this.find(this.dummyNode, index, 0);
        let node = prev.next;
        pre.next = node.next;
        node.next = null;
        this.size--;
        return node;
    }
    removeFirstNode() {
        return this.removeNode(0);
    }
    removeLastNode() {
        return this.removeNode(this.size - 1);
    }
    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('Index error!');
        }
    }
    getNode(index) {
        this.checkIndex(index);
        if (this.isEmpty()) return;
        return this.find(this.dummyNode, index, 0).next;
    }
    isEmpty() {
        return this.size === 0;
    }
    getsize() {
        return this.size;
    }
}
