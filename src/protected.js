import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Protected = ({ auth, component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if (auth) return <component {...props} />;
            if (!auth) return <Redirect to={{ path: "/", state: { from: props.location } }} />
        }} />
    )
}


export default Protected;





