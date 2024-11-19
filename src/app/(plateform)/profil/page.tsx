import ChangeProfile from './changeProfile'
import EditInfo from './editInfo'
function Dashboard() {
  

  return (
    <div className="w-full flex flex-col justify-start items-center gap-6 py-10">
      <ChangeProfile />
      <EditInfo />
      {/* 
      <div>delete account</div> */}

    </div>
  )
}

export default Dashboard