import  Sidebar  from './components/Sidebar';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";   
import ShopDetailsTable from './components/ShopDetailsTable/ShopDetailsTable' 
import Appbar from './components/Appbar';
import { Dialog } from 'primereact/dialog';


function App() {
  const addShopDetails = () => {

  }
  return (
    <div className="entirePage">
      <Sidebar />
      <Appbar />
      <div className="content">
        {/* <div className="addShopsButton">
          
      <Button label="Add Shops" className="p-button-success" onClick={addShopDetails}/>
      </div> */}
      <ShopDetailsTable />
      </div>
    </div>
  );
}

export default App;
