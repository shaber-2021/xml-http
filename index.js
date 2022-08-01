const alldata=(mathod,url,data)=>{
return new Promise((res,rej)=>{
    const xhr = new XMLHttpRequest();

 xhr.open(mathod,url,data);
 xhr.setRequestHeader('Content-type','application/json; charset=UTF-8',)
 xhr.onload=()=>{
  console.log(JSON.parse(xhr.response))
 }
 xhr.onerror=()=>{
  console.log(Error)
 }
 xhr.send(JSON.stringify(data))

})
}


const getdata =()=>{
    alldata('get','https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{console.log(res)})

}
getdata()
const postdata =()=>{
    alldata('post','https://jsonplaceholder.typicode.com/posts',{
        title: 'student',
        body: 'shaber',
        userId: 1,
      });

}
postdata()
const deletedata =()=>{
    alldata('DELETE','https://jsonplaceholder.typicode.com/posts/1');

}
deletedata()