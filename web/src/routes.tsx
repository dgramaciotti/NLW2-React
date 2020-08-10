import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Landing from './pages/landing/index';
import TeacherList from './pages/teachersList/teachersList';
import TeacherForm from './pages/teachersForm/teachersForm';

export default () => {
    return(<BrowserRouter>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/study" component={TeacherList}></Route>
        <Route path="/give-classes" component={TeacherForm}></Route>
    </BrowserRouter>)
}