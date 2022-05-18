
function toggler(a,b,c) {
    return function(){
        console.log(a)
        return  function(){
            console.log(b)
            return  function(){
                console.log(c)
              
            }
        }
    }
}
const toggle = toggler(1,2,3)
const toggle1 =toggle()
const toggle2= toggle1()
const toggle3 =toggle2()

