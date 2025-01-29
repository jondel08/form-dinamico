import Introduction from './components/Introduction/Introduction';
import NavBarMenu from './components/NavBarMenu/NavBarMenu';
import Services from './components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBarMenu />
      {/* <Introduction /> */}
      <Services/>
    </div>
  );
}

export default App;
