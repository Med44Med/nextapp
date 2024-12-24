

export default function Card({key,title,content,author,date,category}) {
  return (
    <div key={key} className="w-48 h-72 bg-red-500 rounded-xl">
        {title}
        <h4>{date}</h4>
    </div>
  )
}
