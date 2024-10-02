

import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Profile from './components/Profile'
function App() {


  return (
    <>
      <Header />
   <div className='bg'>
     
        <Container>
          <Row>
            <Col md={4}>
            <Profile/>
            </Col>
            <Col md={8}>
            
            </Col>
          </Row>
        </Container>
   </div>

    </>
  )
}

export default App
