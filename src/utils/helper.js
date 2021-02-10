export const moneyFormat  = (arg) => {
    let number          = arg.toString()
    let number_string   = number.replace(`/[^,/d]/g `, '')
    let split   		= number_string.split(',')
    let spare     		= split[0].length % 3
    let nominal     	= split[0].substr(0, spare)
    let thousand     	= split[0].substr(spare).match(/\d{3}/gi)

    if(thousand){
    let	separator = spare ? '.' : '';
        nominal += separator + thousand.join('.');
    }

    nominal = split[1] !== undefined ? nominal + ',' + split[1] : nominal;
    return nominal
}

export const RandomString = (length) =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}