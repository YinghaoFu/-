// 单链队列
class Queue{
    constructor(){
        this.queue =[];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        return this.queue.shift();
    }
    getHeader(){
        return this.queue[0];
    }
    getLength(){
        return this.queue.length();
    }
    isEmpty(){
        return this.queue===0;
    }
}