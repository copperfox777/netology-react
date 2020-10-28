import "./coursesList.css";
export default function CoursesList({data}) {
  console.log(data)
  return (

    <>
      <div class="block">Изучайте <span class="blue">актуальные темы</span></div>
      {data.map((item,index)=>
        <div className="block">
          <div className="circle"></div>
          <div className="name">{item.title}</div>
          <div className="amount">{item.counter}</div>
        </div>
      )}

    </>
    
  );
}
 