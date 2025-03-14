const CountryCard = ({ name, flag }) => {
    return (
      <div className="countryCard" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
        height: "200px",
        border: "1px solid gray",
        borderRadius: "5px",
        padding: "10px",
      }}>
        <img src={flag} alt={`Flag of ${name}`} style={{ width: "100px", height: "60px" }} />
        <h3>{name}</h3>
      </div>
    );
  };
  
  export default CountryCard;
  