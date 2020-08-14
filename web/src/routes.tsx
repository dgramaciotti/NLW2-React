import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './pages/landing/index';
import TeacherList from './pages/teachersList/teachersList';
import TeacherForm from './pages/teachersForm/teachersForm';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Sucess from './components/sucessScreen/index';
import ForgotPass from './pages/forgotPass/index';

export default () => {
    return(<BrowserRouter>
        <Route path="/" exact component={Login}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/home" exact component={Landing}></Route>
        <Route path="/study" component={TeacherList}></Route>
        <Route path="/give-classes" component={TeacherForm}></Route>
        <Route path="/forgot-my-pass" exact component={ForgotPass}></Route>

        <Route exact path="/signup/success" render={(props) => <Sucess action="Fazer login" title="Cadastro concluído!" description="Agora você faz parte da plataforma da Proffy"/>}/>
        <Route exact path="/forgot-my-pass/success" render={(props) => <Sucess action="Voltar ao login" title="Redefinição enviada!" description="Boa, agora é só checar o e-mail que foi enviado para você
redefinir sua senha e aproveitar os estudos."></Sucess>}></Route>
    </BrowserRouter>)
}