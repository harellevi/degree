import './App.css';
import Company from './company';
function App() {
  return (
    <div className="App">
      <h1> company details</h1>
      <Company CompanyName= "Uniliver"   NumberOfEmployees = "5000"  Address= "Tel Aviv, Israel"/>
      <Company CompanyName= "Shufersal"   NumberOfEmployees = "2300"  Address= "Herzelia, Israel"/>
      <Company CompanyName= "Asos"   NumberOfEmployees = "14000"  Address= "New York"/>
    </div>
  );
}

export default App;
