import './App.css';
import {Component} from "react";

class WhoAmI extends Component {
   constructor(props) {
      super(props);
      this.state = {
         years: 27,
         position: ''
      }
   }

   nextYear = () => {
      this.setState(state => ({
         years: state.years + 1
      }))
   }

   commitInputChanges = (e) => {
      this.setState({
         position: e.currentTarget.value
      })
   }

   render() {
      const {name, surname, link} = this.props;
      const {position, years} = this.state;
      return (
         <div>
            <button onClick={this.nextYear}>+++</button>
            <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
            <a href={link}>My profile</a>
            <form>
               <span>Введите должность</span>
               <input type="text" onChange={this.commitInputChanges}/>
            </form>
         </div>
      )

   }
}

function App() {
   return (
      <div className="App">
         <WhoAmI/>
      </div>
   )

}

export default App;
