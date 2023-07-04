import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-xl">{"I'am Alsandy Maulana"}</div>
      <p className="prose prose-gray">
        A web developer with about 6+ month experience that use React.js and
        Express.js to development a website. Currently focusing on learning to
        use Typescript and Next.js.
      </p>
      <div className="flex flex-col items-center">
        <Image
          src={"/profile-image.png"}
          width={300}
          height={300}
          alt="alsandy maulana image"
        />
      </div>
      <div>
        <div className="font-bold">Study History</div>
        <p className="prose prose-gray">
          Graduated with a Computer Science degree from Universitas Negeri
          Semarang and a Javascript Web Developer bootcamp at Purwadhika.
        </p>
      </div>
      <div>
        <div className="font-bold">Project & Blog </div>
        <p className="prose prose-gray">
          Please use this website to <a>see</a> what projects and blogs I have,
          here are some projects:
        </p>
        <div className="flex flex-col gap-2 p-3 border">
          <Link
            href={"/projects/project-ketiga"}
            className="p-2 border hover:bg-slate-200 cursor-pointer"
          >
            <div>Multi Warehouse E-Commerce (NiagaJaya)</div>
            <div>Team</div>
            <div className="flex flex-wrap gap-2 mt-1">
              <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-400">
                React.Js
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-yellow-200">
                Express.Js
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-sky-300">
                Prisma
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-cyan-200">
                Mysql
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-emerald-200">
                Chakra-UI
              </div>
            </div>
          </Link>
          <Link
            href={"/projects/project-kedua"}
            className="p-2 border hover:bg-slate-200 cursor-pointer"
          >
            <div>Library (OpenLibz)</div>
            <div>Team</div>
            <div className="flex flex-wrap gap-2 mt-1">
              <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-400">
                React.Js
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-yellow-200">
                Express.Js
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-sky-500">
                Sequelize
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-cyan-200">
                Mysql
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-200">
                Tailwind
              </div>
            </div>
          </Link>
          <Link
            href={"/projects/project-pertama"}
            className="p-2 border hover:bg-slate-200 cursor-pointer"
          >
            <div>Instagram Clone</div>
            <div>Individu</div>
            <div className="flex flex-wrap gap-2 mt-1">
              <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-400">
                React.Js
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-yellow-200">
                Express.Js
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-sky-500">
                Sequelize
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-cyan-200">
                Mysql
              </div>
              <div className="text-sm border px-1 rounded-md max-w-fit bg-blue-200">
                Tailwind
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mb-10">
        <div className="font-bold">Follow me</div>
        <Link
          href="https://linkedin.com/in/alsandy-maulana"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
}
