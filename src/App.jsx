

import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Profile from './components/Profile'
import Details from './components/Details'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <Header />
   <div className='bg'>
     
        <Container>
          <Row>
            <Col lg={3}>
            <Profile/>
            </Col>
            <Col lg={9} className='mt-4 py-1 px-sm-5'>
            <Details/>
            </Col>
         
          </Row>
        </Container>
        <Footer/>

   </div>

    </>
  )
}

export default App
