export const isLogin = () =>{
    if(localStorage.getItem('user')){
        return true
    }
    return false
}

export  const login = (data) =>{
    const user = JSON.stringify(data)
    localStorage.setItem('user',user)
}   


export const logout = () => {
    localStorage.removeItem('user')
    window.location.reload();
}

