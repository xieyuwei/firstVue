const STORAGE_KEY = 'todos-vuejs'
export default{
  fetch(){
    const items = window.localStorage.getItem(STORAGE_KEY)
    return JSON.parse(items) || []
  },
  save(items){
    console.log('items', items)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}




// const STORAGE_KEY = 'todos-vuejs'
// export default{
//   fetch(){
//     return JSON.parse(window.localStorage.getItem(
//         STORAGE_KEY)||'[]')
//   },
//   save(items){
//     window.localStorage.setItem(STORAGE_KEY,JSON.stringify(
//       items))
//   }
// }
