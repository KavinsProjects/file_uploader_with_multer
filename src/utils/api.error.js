

class ApiError extends Error{
    constructor(statuscode, message = "Something went wrong", error=[],stact=""){
        super(message);

        this.statuscode = statuscode,
        this.message = message
        this.error = error
        this.sucess = false
        this.data = null


        if(stact){
            this.stact = stact
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export default ApiError