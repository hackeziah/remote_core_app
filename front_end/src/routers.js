import { Route, Switch } from 'react-router-dom';
import Layouts from './././hoc/Layouts';
import Main from './component/Main';
import Login from './component/Login';
import Register from './component/Register';




const Routes = () => {
    return (
        <Layouts>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />

            </Switch>
        </Layouts>
    )
}
export default Routes;

