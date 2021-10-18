export function addQR(qr){
    return{
        type:'ADD_QR',
        payload:qr
    }

}

export function filterSearch (text){
    return{
        type:'FILTER',
        payload:text
    }
}