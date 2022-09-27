import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

const LogoBox = styled.span`
  font-weigth: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover {
    transform: scale(1.2);
  }
`;

const Logo = () => {
  const BigBossImg = `/images/BigBoss.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={BigBossImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Corentin Roy
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
