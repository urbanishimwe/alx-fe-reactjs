import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'

const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage/>
    </UserContext.Provider>
  )
}

export default App
