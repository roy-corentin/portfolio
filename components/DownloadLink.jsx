import { Text, Link } from "@chakra-ui/react";

const DownloadLink = ({ download }) => {
  if (download !== undefined) {
    return download ? (
      <Link href={download} isExternal>
        <Text as="b"> (download) </Text>
      </Link>
    ) : (
      <></>
    );
  }
  return <></>;
};

export default DownloadLink;
