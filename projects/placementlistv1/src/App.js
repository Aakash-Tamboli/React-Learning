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
}

function App()
{
const students=[];
const placementYear=2024;

students.push(new Student(101,"Aakash Tamboli","Thinking Machines","5 LPA"));
students.push(new Student(102,"Bittu","GROW","20 LPA"));
students.push(new Student(103,"John","Google","50 LPA"));

return (
<div>
<h1>Thinking Machines Placements</h1>
<PlacementList students={students} placementYeat={placementYear} />
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
}

render()
{
return (
<div>
<h3>Placement List {this.state.placementYear}</h3>
<ul>
{
this.state.students.map((student)=>{
return (<li key={student.id}>{student.name}</li>)
})
}
</ul>
</div>
);
}
}
export default App;
