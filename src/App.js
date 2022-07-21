import logo from './logo.svg';
import pfp from './pfp.jpg';
import './App.css';


function ShoppingList(props) {

  console.log(props.foo)
  return(
    <div>
      <h1>Shopping list for {props.name} </h1>
      <ul>
        <li>Veal</li>
        <li>Cheese</li>
        <li>Tomatoes</li>
        <li>Potatoes</li>
        <li>Buke</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <ShoppingList />
      <ShoppingList name = {"Elia"} foo = {"Hellooo"}/>
      <ShoppingList name = {"Joni"}/>
      <ShoppingList name = {"Linda"}/>
      <header className="App-header">
        <img src={pfp} className="App-logo" alt="logo" />
        <br/>
        <p>
          This is <code>me</code> at CFA two years ago!
        </p><br/>
        <p className="App-text">
          My name is Elia. I love listening to music, watching movies and doing a lot of extrovert-typical things. 
          I am an ENFP on the Myers-Briggs personality test and a 3 on the Enneagram types :)
        </p><br/>
        <a
          className="App-link"
          href="https://www.instagram.com/eliagjika/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Instagram to learn more :)
        </a>
      </header>
    </div>
  );
}

export default App;


//<br/> adds more spacing

//The <a> tag adds a link

//The <p> tag adds a "paragraph" (text)
