import { Text, Link } from "@chakra-ui/react";

const DownloadLink = ({ download }) => {
  return download ? (
    <Link href={download} isExternal>
      <Text as="b"> (download) </Text>
    </Link>
  ) : null;
};

export default DownloadLink;
