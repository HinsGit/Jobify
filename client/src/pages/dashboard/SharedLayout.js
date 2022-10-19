import Wrapper from '../../assets/wrappers/SharedLayout.js'
import {Outlet, Link} from 'react-router-dom'
import SmallSidebar from '../../components/SmallSidebar.js'
import BigSidebar from '../../components/BigSidebar.js'
import Navbar from '../../components/Navbar.js'

const SharedLayout = () => {
    //smallside bar 跟 bigsidebar其实是一个component，在wrapper里面定义了
    //只有屏幕大大小符合的时候才会显示其中一个


    // Outlet的作用就是把所有的子route的东西根据页面的url展示在特定的div里面
  return (
    <Wrapper>
        <main className='dashboard'> 
            <SmallSidebar/>
            <BigSidebar/>
            <div>
                <Navbar/>
                <div className='dashboard-page'>
                    <Outlet></Outlet> 
                </div>
            </div>
        </main>
        
    </Wrapper>
  )
}

export default SharedLayout
