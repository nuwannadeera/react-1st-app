import HeaderContent from "./Components/HeaderContent/HeaderContent";
import BodyContent from "./Components/BodyContent/BodyContent";
import Button from 'react-bootstrap/Button';
import FooterContent from "./Components/FooterContent/FooterContent";

function App() {
  const firstName = 'Nuwan';
  const lastName = 'Nadeera';
  const age = 26;

  const getFulName = (fn, ln) => {
    return `${fn} ${ln}`;
  };

  const fruits = ["apple", "orange", "grapes"];

  const languages =
    <ul>
      <li>Angular</li>
      <li>AngularJS</li>
      <li>Laravel</li>
    </ul>

  const myObj = {
    "fname": "dileepa",
    "lname": "dilhan",
    "age": 22
  }

  // making styles (best practise)
  const stylesDiv = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  return (
    <>
      {/* <div className="heading">
        <h1>Student Details</h1>
        <p>Full Name : {firstName} {lastName}</p>
        <p>Full Name in function : {getFulName("nuwan", "nadeera")}</p>
        <p>Age : {age}</p>
        <p>{firstName} likes {fruits[0]}</p>
        {languages}
        <p>my age is {myObj.age}</p>
      </div> */}


      <HeaderContent />
      <BodyContent>
        {/* <Button variant="primary">Click Here</Button> */}
        <h3>Home page</h3>
      </BodyContent>
      {/* <BodyContent>
        <p style={{color:'green'}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nostrum, voluptate ut ratione praesentium, natus molestias
          quas ex reprehenderit at voluptatum, minima inventore autem?
          Reprehenderit, vitae quas itaque veniam architecto beatae!
        </p>
        <p style={stylesDiv}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Nostrum, voluptate ut ratione praesentium, natus molestias
          quas ex reprehenderit at voluptatum, minima inventore autem?
          Reprehenderit, vitae quas itaque veniam architecto beatae!
        </p>
      </BodyContent> */}
      {/* <FooterContent/> */}
    </>
  )
}

export default App
