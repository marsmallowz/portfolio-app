import Image from "next/image";

export default function CustomImg(props: any) {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      width={500}
      height={500}
      quality={75}
    >
      {props.children}
    </Image>
  );
}
