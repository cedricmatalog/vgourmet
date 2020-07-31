import { Jumbotron, Button, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Jumbotron>
      <h1 className="text-center">Hello, Everything!</h1>
      <p>
        We sell our homemade products which are our family's favorites. We've
        perfected our recipes to make sure we'll be giving products of good
        quality, safe, nutritious, and of course, delicious! You'll include it
        in your favorites also!
      </p>
      <p className="text-center">
        <Button variant="primary">See Products</Button>
      </p>
    </Jumbotron>
  );
}
