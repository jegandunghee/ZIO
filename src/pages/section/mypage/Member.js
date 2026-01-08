import { FaUserCircle } from "react-icons/fa";


const Member = () => {
  return (
    <div className='mypage-Member'>
      <div className="user-wrap">
        <div className="user-icon">
          <FaUserCircle />
        </div>
        <div className="usar-information">
          {/* 회원정보 dp 불러오기 */}
        </div>
        
      </div>
    </div>
  )
}

export default Member