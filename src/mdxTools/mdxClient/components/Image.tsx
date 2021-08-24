import Image from "next/image";
import { HalfBleed } from "components/layouts/PostLayout";

export const Img: React.FC<any> = (props) => {
  return (
    <HalfBleed>
      <Image {...props} width="100%" height="50%" layout="responsive" />
    </HalfBleed>
  );
};
