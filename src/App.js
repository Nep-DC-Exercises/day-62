import React from 'react';
import List from "./components/List"
import Comment from "./components/Comment"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
        <Route path="/" exact>
          <List/>
        </Route>
        <Route path="/comment/:comment_id" component={Comment} />
    </Router>

  );
}

export default App;
