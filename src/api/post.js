// axios
const posts = [
  {id:1, title:'제목1', content:'내용1', createAt:'2023-10-01'},
  {id:2, title:'제목2', content:'내용2', createAt:'2023-10-02'},
  {id:3, title:'제목3', content:'내용3', createAt:'2023-10-03'},
  {id:4, title:'제목4', content:'내용4', createAt:'2023-10-04'},
  {id:5, title:'제목5', content:'내용5', createAt:'2023-10-05'},
  {id:6, title:'제목6', content:'내용6', createAt:'2023-10-06'},
  {id:7, title:'제목7', content:'내용7', createAt:'2023-10-07'},
  {id:8, title:'제목8', content:'내용8', createAt:'2023-10-08'},
]

export function getPosts() {
  return posts;
}