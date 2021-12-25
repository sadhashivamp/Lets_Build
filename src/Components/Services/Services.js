import React from "react";
import costReduce from "./costReduce.jpg";
import benifits from "./benifits.jpg";
import vertualOffices from "./vertualOffices.jpg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={costReduce} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            we help reduce your budjet and increase your overall Satisfaction
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={benifits} />
          <ServicesH2>Benifits</ServicesH2>
          <ServicesP>
            we help reduce your budjet and increase your overall Satisfaction
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={vertualOffices} />
          <ServicesH2>Vertual offices</ServicesH2>
          <ServicesP>
            We have multiple offices in multiple places and we provide our
            service in every were in India
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
