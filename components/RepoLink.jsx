import { Text, Link } from "@chakra-ui/react";
import { GithubIcon } from "../public/icons/icons";

const RepoLink = ({ repo }) => {
  if (repo != undefined) {
    return (
      <Link href={repo} isExternal>
        <Text as="b">
          {" "}
          (Repo <GithubIcon boxSize={"1.5rem"} />)
        </Text>
      </Link>
    );
  }
  return <></>;
};

export default RepoLink;
