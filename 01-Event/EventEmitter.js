function EventEmitter(){
    this.events = [];
}

/* Store the events */

EventEmitter.prototype.on = function(name, callback){
    this.events[name] = this.events[name] || [];
    this.events[name].push(callback); /* callback is a function */
}

EventEmitter.prototype.emit = function(name){
    if(this.events[name]){
        this.events[name].forEach((item)=>{ 
            item(); /* call the callback functions */
        }); 
    }
}

module.exports = EventEmitter;