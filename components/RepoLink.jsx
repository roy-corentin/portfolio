import { Text, Link } from "@chakra-ui/react";
import { GithubIcon } from "../public/icons/icons";

const RepoLink = ({ repo }) => {
    return (repo !== undefined ?
      <Link href={repo} isExternal>
        <Text as="b">
          (Repo <GithubIcon boxSize={"1.5rem"} />)
        </Text>
      </Link> : null
    );
};

export default RepoLink;
