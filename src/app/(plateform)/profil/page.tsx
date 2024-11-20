import ChangeProfile from './changeProfile'
import EditInfo from './editInfo'
import EditPass from './editPass'
import DeleteAccount from './deleteaccount'
function Dashboard() {
  

  return (
    <div className="w-full flex flex-col justify-start items-center gap-6 py-10">
      <ChangeProfile />
      <EditInfo />
      <EditPass />
      <DeleteAccount />
      {/* 
      <div>delete account</div> */}

    </div>
  )
}

export default Dashboard