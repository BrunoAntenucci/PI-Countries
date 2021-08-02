import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../../Actions/CountriesActions.js'

function CountryCard({countries, getCountries}){       
    function getCountriesFunction() {
        getCountries();
    } 

    useEffect(() => { 
        getCountriesFunction();
    },);

    return (
        <div>
            {countries.map((country) => {
               return (
                   <div>
                      <h4>{country.id}</h4>
                      <h4>{country.name}</h4>
                      <h4>{country.flag}</h4>
                      <h4>{country.continent}</h4>
                   </div>
               );
               })}    
        </div>
    );
}; 

const mapStateToProps = state => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountries: countries => dispatch(getCountries(countries)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryCard);