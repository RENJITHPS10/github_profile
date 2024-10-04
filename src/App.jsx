

import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Profile from './components/Profile'
import Details from './components/Details'
function App() {


  return (
    <>
      <Header />
   <div className='bg'>
     
        <Container>
          <Row>
            <Col md={3}>
            <Profile/>
            </Col>
            <Col md={9} className='mt-4 py-1 px-5'>
            <Details/>
            </Col>
          </Row>
        </Container>
   </div>

    </>
  )
}

export default App
