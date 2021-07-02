import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <Row>
        <Col>
          <p>
            This is a Gatsby Starter that I frequently use to get jump started
            on quick website builds. It includes the following packages:
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
          <p>
            For more documentation on these packages and how they work, please
            refer to the pages linked in the list above.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            leo sollicitudin, sollicitudin orci sed, tincidunt nisl.
            Pellentesque malesuada in magna eu vestibulum. Ut dapibus elementum
            libero, sit amet placerat ante iaculis id. Cras auctor, neque in
            lobortis condimentum, neque nibh euismod purus, vitae pulvinar nunc
            urna et dolor. Nullam pulvinar nibh sed consequat tristique. Nunc
            euismod, purus ut laoreet imperdiet, nisi risus eleifend purus, ac
            viverra massa quam efficitur erat. Integer aliquet ac quam sit amet
            facilisis. Maecenas porttitor, eros at commodo aliquam, magna augue
            tristique lacus, sed maximus nulla eros et massa.
          </p>
          <p>
            Vivamus ac lacus porta, porta urna nec, efficitur dolor. Morbi non
            purus sed risus sagittis euismod et et purus. Nam at elit risus.
            Proin massa diam, aliquet eu justo ut, tincidunt suscipit ligula.
            Duis in magna ac quam cursus commodo vitae at eros. Nam dui tortor,
            aliquam finibus ex eu, auctor mattis ante. Sed tristique risus ut
            euismod sagittis. Nunc elementum dui finibus mollis commodo. Etiam
            vitae auctor tellus. Morbi mollis convallis nunc, vitae tempus augue
            euismod id. Donec efficitur, tortor et pretium hendrerit, lacus
            ligula efficitur magna, finibus euismod elit ex quis ligula. Mauris
            neque lacus, auctor eu suscipit hendrerit, varius nec odio.
          </p>
          <p>
            Quisque tempus nibh et purus fermentum interdum. Nullam luctus erat
            a nulla sagittis, a aliquet sapien finibus. Donec faucibus et elit
            et vulputate. Vestibulum risus justo, egestas eu lacinia vitae,
            ullamcorper eget urna. Maecenas egestas lorem eget vehicula semper.
            Proin volutpat elementum urna sit amet vulputate. Etiam luctus
            aliquet mi, ut volutpat sapien suscipit pulvinar.
          </p>
          <p>
            Suspendisse quis mauris leo. Vivamus mattis tempor mi eget rhoncus.
            Cras nec vehicula velit. Nullam sit amet nulla diam. Pellentesque
            vel massa vel felis malesuada volutpat. Nulla facilisi. Sed
            tristique tincidunt nunc sed vehicula.
          </p>
          <p>
            Donec facilisis neque sed porta porta. Pellentesque scelerisque
            finibus semper. Donec consectetur arcu eu varius scelerisque. Duis
            quis rhoncus quam. Mauris eleifend at sem ut cursus. Donec interdum
            finibus purus, eget luctus felis imperdiet sit amet. Suspendisse
            vitae lacinia risus. Proin non pharetra odio, in ultricies felis.
            Quisque molestie cursus purus non venenatis. Ut elit ex, semper eu
            tincidunt eget, pretium id elit. Nulla ac quam auctor, dictum leo
            id, dapibus orci. Nulla maximus enim eu ipsum convallis, at congue
            lectus consectetur. Curabitur nunc odio, molestie interdum aliquam
            vitae, molestie lacinia lacus. Pellentesque eu tellus at ligula
            gravida commodo.
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
