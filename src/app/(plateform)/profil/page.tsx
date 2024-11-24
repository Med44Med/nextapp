import ChangeProfile from './components/changeProfile'
import EditInfo from './components/editInfo'
import EditPass from './components/editPass'
import DeleteAccount from './components/deleteaccount'



function Dashboard() {
  

  return (
    <div className="w-full flex flex-col justify-start items-center gap-6 py-10">
      <ChangeProfile />
      <EditInfo />
      <EditPass />
      <DeleteAccount />
    </div>
  )
}

export default Dashboard