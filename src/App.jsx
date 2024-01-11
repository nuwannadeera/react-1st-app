function App() {
  const firstName = 'Nuwan';
  const lastName = 'Nadeera';
  const age = 26;

  const getFulName = (fn,ln) => { 
    return `${fn} ${ln}`
  };

  const fruits = ["apple","orange","grapes"];

const languages = 
<ul>
<li>Angular</li>
<li>AngularJS</li>
<li>Laravel</li>
</ul>

const myObj = {
  "fname":"dileepa",
  "lname":"dilhan",
  "age":22
}

  return (
    <>
      <div className="heading">
        <h1>Student Details</h1>
        <p>Full Name : {firstName} {lastName}</p>
        <p>Full Name in function : {getFulName("nuwan","nadeera")}</p>
        <p>Age : {age}</p>
        <p>{firstName} likes {fruits[0]}</p>
        {languages}
        <p>my age is {myObj.age}</p>
      </div>
    </>
  )
}

export default App
