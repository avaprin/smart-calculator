class SmartCalculator {
    constructor(initialValue) {
        this.stack = [initialValue];
        this.res = initialValue;
        // your implementation
    }
    calculate(){
        for(let i = this.stack.length-1;i>=0;--i){
            if(this.stack[i]==='^'){
                this.stack[i-1]=Math.pow(this.stack[i-1],this.stack[i+1]);
                this.stack.splice(i,2);
                i = this.stack.length-1;
            }
        }
        for(let i = 0;i<this.stack.length;++i){
            if(this.stack[i]==='*'){
                this.stack[i-1]*=this.stack[i+1];
                this.stack.splice(i,2);
                i = 0;
            }
            else if(this.stack[i]==='/'){
                this.stack[i-1]/=this.stack[i+1];
                this.stack.splice(i,2);
                i =0;
            }
        }
        for(let i = 0;i<this.stack.length;++i){
            if(this.stack[i]==='+'){
                this.stack[i-1]+=this.stack[i+1];
                this.stack.splice(i,2);
                i =0;
            }
            else if(this.stack[i]==='-'){
                this.stack[i-1]-=this.stack[i+1];
                this.stack.splice(i,2);
                i =0;
            }
        }
        return this.stack[0];
    }
    valueOf(){
        let a = this.calculate();
        return a;
    }
    toString(){
        let a = this.calculate();
        return a;
    }
        add(number)
        {
            this.stack.push('+');
            this.stack.push(number);
            return this;
            // your implementation
        }

        subtract(number)
        {
            this.stack.push('-');
            this.stack.push(number);
            return this;
            // your implementation
        }

        multiply(number)
        {
            this.stack.push('*');
            this.stack.push(number);
            return this;
            // your implementation
        }

        devide(number)
        {
            this.stack.push('/');
            this.stack.push(number);
            return this;
            // your implementation
        }

        pow(number)
        {
            this.stack.push('^');
            this.stack.push(number);
            return this;
            // your implementation
        }
}



module.exports = SmartCalculator;
