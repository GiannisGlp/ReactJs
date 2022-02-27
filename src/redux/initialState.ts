interface State{
    users:{
        error:string,
        usersData:[],
        loggedIn:boolean
    },
    places:{
       error:string,
       placesData:[]
    },
    products:{
        error:string,
       productsData:[]
    }
}

const initialState:State = {
    users:{
        error:"",
        usersData:[],
        loggedIn:false
    },
    places:{
        error:"",
        placesData:[]
    },
    products:{
        error:"",
        productsData:[]
    }
}

export default initialState