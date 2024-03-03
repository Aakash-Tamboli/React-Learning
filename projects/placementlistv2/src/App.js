import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';

class Student
{
constructor(id,name,company,salary)
{
this.id=id;
this.name=name;
this.company=company;
this.salary=salary;
}
getId()
{
return this.id;
}
getName()
{
return this.name;
}
getCompany()
{
return this.company;
}
getSalary()
{
return this.salary;
}
setId(id)
{
this.id=id;
}
setName(name)
{
this.name=name;
}
setCompany(company)
{
this.company=company;
}
setSalary(salary)
{
this.salary=salary;
}
}


function App() {
const students=[];
const placementYear=2024
students.push(new Student(101,"Aakash Tamboli","Thinking Machines","5 LPA"));
students.push(new Student(102,"Bittu","GROW","20 LPA"));
students.push(new Student(103,"John","Google","50 LPA"));

function showDetail(student)
{
alert(student.name);
alert(student.company);
}


return(
<div>
<h1>Thinking Machines - Ujjain</h1>
<PlacementList students={students} placementYear={placementYear} showDetail={showDetail}/>
</div>
);
}


class PlacementList extends React.Component
{
constructor(props)
{
super(props);
this.state={
"students": props.students,
"placementYear": props.placementYear
};
this.showDetail=props.showDetail;
}
studentClicked=(event)=>{
var studentAttribute=event.currentTarget.getAttribute("id");
var selectedStudent=null;
for(var i=0;i<this.state.students.length;i++)
{
if(studentAttribute==this.state.students[i].id)
{
selectedStudent=this.state.students[i];
break;
}
}
if(selectedStudent!=null)
{
this.showDetail(selectedStudent);
}
}
render()
{
var objRef=this;
return(
<div>
<h1>Placements - {this.state.placementYear}</h1>
<ul>
{
this.state.students.map((student)=>{
return (
<li key={student.id} onClick={objRef.studentClicked} id={student.id}>{student.name} ({student.company})</li>
)
})
}
</ul>
</div>
);
}
}

export default App;
