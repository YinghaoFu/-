// 栈的实现
class Stack{
    construct(){
        this.stack=[];
    }
    puch(item){
        this.stack.push(item);
    }
    pop(){
        this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.getCount()-1];
    }
    getCount(){
        return this.stack.length;
    }
    isEmpty(){
        return this.stack.length===0;
    }
}
