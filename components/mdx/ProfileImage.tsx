import Image from "next/image";

export default function ProfileImage(props: any) {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      width={400}
      height={500}
      className="p-2 mx-auto"
    >
      {props.children}
    </Image>
  );
}
