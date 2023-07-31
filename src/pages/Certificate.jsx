import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from "~/assets";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { LightgalleryItem } from "react-lightgallery";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { certificats } from "../components/fadedata/fakedata";

const Certificate = () => {
  return (
    <>
      <div>
        <div className="relative w-full p-[0] m-[0] h-[35vh] breadcump">
          <LazyLoadImage src={breadcump} className="w-full h-full" />
          <Container>
            <Breadcrumb
              className="absolute bottom-[10px] z-10 text-[#fff]"
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <div className="font-[700] text-[16px] capitalize">
                  <Link to="/">ana sehife</Link>
                </div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  className="font-[200] text-[16px] capitalize"
                  href="#"
                >
                  sertifkatlar
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className="pt-[50px] pb-[50px] bg-[--bg]">
          <Container>
            <Row>
              {certificats &&
                certificats?.map((cur, i) => (
                  <Col lg={3} md={4} xs={6} key={i} className="lg:mb-7">
                    <LightgalleryItem group="any" src={cur?.src}>
                      <a>
                        <LazyLoadImage
                          src={cur?.src}
                          className="w-[100%!important]   cursor-zoom-in"
                        />
                      </a>
                    </LightgalleryItem>
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Certificate;
