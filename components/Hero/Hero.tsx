"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Button from "../Buttons/Button";
import Container from "../Conteiner/Container";
import NestedContent from "../NestedContent/NestedContent";
import { Section } from "../Section/Section";
import style from "./styles.module.scss";

//import { heroData } from "@/constants";

//import { Container } from "@/components";

const Hero = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("./");
  }, [router]);
  const t = useTranslations('Hero');
  return (
    <Section className={`${style.bg} relative`}>
      <Container >



        <div className="grid  auto-cols-[auto_min-content]   ">

          <h2 className="t:col-start-1  text-[98px] t:tracking-[-3.92px] font-thin uppercase leading-[1.2143] break-words w-min ">
            <NestedContent t={t} nested='title' className="text-red font-medium" />
          </h2>

          <div className=" t:col-start-2 ml-auto mr-0 ">
            <p className="  text-[10px] t:text-[14px] d:text-[98px] leading-[1.6] t:leading-[1.14] t:tracking-[-1.89px] t:mr-[-2px]
          d:leading-[1.2143]  uppercase  font-thin   whitespace-nowrap">
              <NestedContent t={t} nested='subtitle-01' className="text-red  font-medium mr-3 ml-[-2px] " />

            </p>

            <p className=" flex justify-between uppercase t:tracking-[2px] t:text-[16px]  d:leading-[1.1875]">
              <NestedContent t={t} nested='subtitle-02' />
            </p>

          </div>

          <p className="  t:col-start-1 t:row-start-3 w-[157px] t:w-[263px] d:w-full text-[10px] t:text-[14px] d:text-[16px] leading-[1.6] t:leading-[1.14] 
          d:leading-[1.5] font-extralight  t:mt-auto">
            <NestedContent t={t} nested='content-01' className="text-red" />
          </p>

          <p className="   t:col-start-2 text-[10px] t:text-[14px] d:text-[18px] leading-[1.6] t:leading-[1.14] 
          d:leading-[1.3333]   font-extralight d:mb-[28px]">

            <NestedContent t={t} nested='description' />
          </p>

          <div className=" t:col-start-2 t:mb-[6px]   ">
            <Button

              type='button'
              onClick={handleClick}
              className=" bg-btn-normal hover:bg-btn-hover text-center leading-normal text-[32px] text-white uppercase 
              d:px-16 d:py-4"
            > join now </Button>

          </div>
        </div>

      </Container>
    </Section>
  );
};

export default Hero;