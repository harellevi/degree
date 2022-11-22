
function Company(props) {
    const {CompanyName}= props
    const {NumberOfEmployees} = props
    const {Address} = props

    return (
      <div >
        <h2> In the company - {CompanyName}</h2>
        <h2> that located in {Address}, </h2>
        <h2> there are {NumberOfEmployees} employees.</h2>
      </div>
    );
  }
  
  export default Company;
  