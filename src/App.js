// import logo from './logo.svg';
import "./App.css";
import ButtonComponent from "./components/button/button";
// import TableItem from "./components/table/table";
import { FormItem } from "./components/form/form";
import { OrderedListComponents } from "./components/list/ol-ul";
import { UnorderedListComponents } from "./components/list/ol-ul";
import ButtonComponent1 from "./components/class-based/button1";
import ColorChange from "./components/class-based/color";
import ImageChange from "./components/class-based/image";
import ApiCall from "./components/exceptional-handling/api-call";
import ApiCall2 from "./components/exceptional-handling/api-call2";
import ApiCall3 from "./components/exceptional-handling/api-call3";
import InlineStyle from "./components/styling/inline-style";
import ExternalStyle from "./components/styling/external-style";
import ModuleStyle from "./components/styling/module-style";
import Card from "./components/card/card";
import BootstrapComponent from "./components/bootstrap/first-component";
import ParentComponent from "./components/props/parent";
import FormBoot from "./components/bootstrap/form";
import TableBoot from "./components/bootstrap/table";
import NavScrollExample from "./components/bootstrap/navbar";
import Counter from "./components/counter/counter";
import Mounting1 from "./components/lifecycle/mounting/mounting";
import UpdatePhase from "./components/lifecycle/updating/updating";
import Unmounting from "./components/lifecycle/unmount/unmounting";
import UseStateExample1 from "./components/hooks/use-state/useStateEx1";
import UseStateExample2 from "./components/hooks/use-state/useStateEx2";
import UseStateExample3 from "./components/hooks/use-state/useStateEx3";
import UseStateExample4 from "./components/hooks/use-state/useStateEx4";

function App() {
  const greenColor = "green";

  // const tableElements = {
  //   Invoice: "1001",
  //   Customer: "Mark Otto",
  //   SHP: "Japan",
  //   Price: "3000",
  //   PurchasedPrice: "1200",
  // };
  // const { Invoice, Customer, SHP, Price, PurchasedPrice } = tableElements;
  return (
    <div>
      <NavScrollExample />
      {/* <br></br>
      <table className="th" id="table">
      <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>
        <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>
        <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>

        <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>
        <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>
        <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>
        <tr className="th">
          <td className="th">{Invoice}</td>
          <td className="th">{Customer} </td>
          <td className="th">{SHP} </td>
          <td className="th"> {Price} </td>
          <td className="th"> {PurchasedPrice} </td>
        </tr>
      </table>
      <ButtonComponent></ButtonComponent>
      <TableItem />
      <ButtonComponent></ButtonComponent>
      <br></br>
      <button className="btn">Submit</button>
      <br />

      <form>
        <h1>Form</h1>
        <label for="fname" id="name">
          First Name:
        </label>
        <input type="text" id="fname" className="fname" />
        <br />
        <br />
        <label for="name">Last Name:</label>
        <input type="text" id="lname" className="lname" />
        <br />
        <br />
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" />
        <br />
        <br />
        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
        <input type="radio" name="gender" id="others" value="others" />
        <label for="others">Others</label>
        <br />
        <br />
        <label for="age">Age:</label>
        <input
          type="number"
          min="1"
          max="100"
          name="age"
          id="age"
          value="age"
        />
        <label for="country">Country:</label>
        <select name="country" id="country">
          <option value="INDIA">INDIA</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="CANADA">CANADA</option>
        </select>
        <br />
        <br />
        <label for="number">Phone Number:</label>
        <input type="number" required name="number" id="number" />
        <br />
        <br />
        <label for="message">Message:</label>
        <br />
        <textarea name="message" id="message" cols="20" rows="6"></textarea>
        <br />
        <br />
        <label for="Address">Address:</label>
        <br />
        <textarea name="address" id="address" cols="20" rows="6"></textarea>
        <br />
        <br />
        <input type="submit" value="Submit" id="submit" />
      </form> */}

      <FormItem></FormItem>
      <ButtonComponent />
      <OrderedListComponents />
      <UnorderedListComponents />
      <ButtonComponent1 />
      <ColorChange />
      <ImageChange />
      <ApiCall />
      <br />
      <br />
      <ApiCall2 />
      <br />
      <br />
      <ApiCall3 />
      <InlineStyle />
      <ExternalStyle />
      <ModuleStyle />
      <hr />
      <br />
      <Card />
      <br />
      <BootstrapComponent />
      <FormBoot />
      <TableBoot />
      <ParentComponent />
      <Counter />
      <Mounting1 color={greenColor} />
      <UpdatePhase favColor="brown" />
      <br />
      <Unmounting />
      <UseStateExample1 />
      <UseStateExample2 />
      <UseStateExample3/>
      <UseStateExample4/>
    </div>
  );
}

export default App;
