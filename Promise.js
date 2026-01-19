   new Promise((resolve,reject)=>{
    //async
        setTimeout(()=>{
            document.getElementById("t1").style.visibility="visible"
            resolve()
        },1000)

    }).then(()=>{
           return new Promise((resolve)=>{

            setTimeout(()=>{
                document.getElementById("t2").style.visibility="visible"
                resolve()
            },1000)

        })

    }).then(()=>{

        return new Promise((resolve)=>{
            setTimeout(()=>{
                document.getElementById("t3").style.visibility="visible"
                resolve()
            },1000)
        })

    }).then (()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                 document.getElementById("t4").style.visibility="visible"
                 resolve()
            },1000)
        })
    }).then(()=>{
         return new Promise((resolve)=>{
         setTimeout(()=>{
                 document.getElementById("t5").style.visibility="visible"
                 resolve()
            },1000)
        })   
    }).then(()=>{
         return new Promise((resolve)=>{
         setTimeout(()=>{
                 document.getElementById("t6").style.visibility="visible"
                 resolve()
            },1000)
        })   
    }).then(()=>{
         return new Promise((resolve)=>{
         setTimeout(()=>{
                 document.getElementById("t7").style.visibility="visible"
                 resolve()
            },1000)
        })   
    }).then(()=>{
         setTimeout(()=>{
                 document.getElementById("t8").style.visibility="visible"
                 resolve()
            },1000)
    })