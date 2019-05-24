import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
const Countries = () => (
  <Query
    query={gql`
      {
          countries{
            code
            name
            native
            currency
            phone
            }
        }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.countries.map(({code, name, native, currency, phone}) => (
        <div key={code}>
          <p>{`${code} | ${name} | ${native} | ${currency} | ${phone}`}</p>
        </div>
      ));
    }} 
  </Query>
);
export default Countries;