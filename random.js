var createCounter = function(init) {
    let v = init;
    return {
        increment: function(){
            return ++init;
        },
        decrement: function(){
            return --init;
        },
        reset: function(){
            return v;
        }
        
    }
    
};


  const counter = createCounter(5)
  console.log(counter.increment()) // 6
  console.log(counter.reset()) // 5
  console.log(counter.decrement()) // 4
