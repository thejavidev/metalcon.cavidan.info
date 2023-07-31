import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { breadcump } from "~/assets";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { myprojects } from "../components/fadedata/fakedata";

const ProjectsSingle = () => {
  const { slug } = useParams();
  const [t] = useTranslation("translation");
  const projects = myprojects;
  const currentPost = projects?.find((post) => post?.slug === slug);
  const currentImages = currentPost?.images;

  return (
    <>
      <div>
        <div className="relative w-full p-[0] m-[0] h-[35vh] breadcump">
          <LazyLoadImage src={breadcump} className="w-full h-full" />
          <Container>
            <Breadcrumb
              className="absolute bottom-[10px] z-10 text-[#fff] breadcumpol"
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <div className="font-[700] text-[16px] capitalize">
                  <Link to="/">ana sehife</Link>
                </div>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <div className="font-[700] text-[16px] capitalize">
                  <Link to="/projects">projects</Link>
                </div>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  className="font-[200] text-[16px] capitalize"
                  href="#"
                >
                  project adi
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <section className="pt-[50px] pb-[50px] bg-[--bg]">
          <Container>
            <Row>
              {currentImages &&
                currentImages?.map((cur, i) => (
                  <Col key={i} lg={3} md={6} xs={6} className="mb-[20px]">
                    <LazyLoadImage
                      src={cur?.src}
                      className="w-[100%!important] h-[300px] md:h-[150px] cursor-zoom-in"
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default ProjectsSingle;
