import { UserCard } from 'react-ui-cards';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Home = () => {
  return (
    <div>
        <Header></Header>

      <div class="row mt-3 mb-3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Video tour of our kitchen</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Live Kitchen</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Food Made with Cold Pressed Oil</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Love to eat food....Enjoy each bite</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Eat only Healthy food</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">More Info</Button>
          </Card.Body>
        </Card>
      </div>
      <div class="row mt-3 mb-3">
        <UserCard
          float
          href='https://github.com/nukeop'
          header='https://i.imgur.com/vRAtM3i.jpg'
          avatar='https://i.imgur.com/XJxqvsU.jpg'
          name='Frank Hepsfield'
          positionName='Software Engineering Manager' />
      </div>
    </div>
  )
}

export default Home