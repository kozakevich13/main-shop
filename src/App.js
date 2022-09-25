import './App.css';
import AddProducts from './components/AddProduct';
import ListProducts from './components/ListProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterProductss from './components/FilterProducs';


function App() {
  return (
    <div className="App">
      <h3>Products</h3>
      <AddProducts/>
      <FilterProductss/>
      <ListProducts/>
    </div>
  );
}

export default App;








