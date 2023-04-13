import React from 'react';
import Menu from './Menu';
import List from './List';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books: [
        {id:0, rating: 4, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg'},
        {id:1, rating: 3, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating: 1, title: 'Código Da Vinci', image: 'libro03.jpg'},
        {id:3, rating: 5, title: 'El principito', image: 'libro04.jpg'},
        {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
      ], 
      copyBooks: []
    };
    this.onAdd = this.onAdd.bind(this);
  }

  componentDidMount(){
    this.initBooks();
  }

  initBooks = () => {
    this.setState( 
      (state, props) => ({
      copyBooks: [...state.books]
      })
    );
  }

  onAdd = (item) => {
    console.log(item)
    let temp = [...this.state.books];
    const id = temp[temp.length-1].id ++;
    item['id'] = id;
    temp.push(item);

    this.setState({books: [...temp]})
  }

  render(){
    return (
      <div className="app">
        <Menu
        title = "FemRead" 
        onAdd={this.onAdd}/>
        <List items={this.state.copyBooks} />

      </div>
    );
}
}

export default App;
