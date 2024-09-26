import Image from "next/image";

export default function ProfileImage(props: any) {
  return (
    <Image
      alt={props.alt}
      src={props.src}
      width={600}
      height={500}
      quality={75}
      className="p-2 mx-auto sm:transition-transform sm:duration-300 sm:ease-in-out sm:transform-gpu sm:hover:scale-110"
    >
      {props.children}
    </Image>
  );
}
