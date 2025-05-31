
import AppRoutes from './routes/AppRoutes'
import {AuthProvider} from './context/Authcontext.jsx';

function App() {

  
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}

export default App
