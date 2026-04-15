import ProjectSlider from "./ProjectSlider";

type Props = {
  title: string;
  category: string;
  desc: string;
  images: string[];
};

export default function ProjectCard({
  title,
  category,
  desc,
  images,
}: Props) {
  return (
    <div className="glass-card overflow-hidden group hover:-translate-y-1 transition">
      {/* Visual */}
      <ProjectSlider images={images} />


      {/* Content */}
      <div className="p-6">
        <p className="page-label">{category}</p>

        <h3 className="mt-3 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-stone-500 leading-7">
          {desc}
        </p>

        <div className="mt-5 flex gap-2 flex-wrap text-xs">
          <span className="px-3 py-1 rounded-full bg-stone-100">
            React
          </span>
          <span className="px-3 py-1 rounded-full bg-stone-100">
            UI
          </span>
          <span className="px-3 py-1 rounded-full bg-stone-100">
            Responsive
          </span>
        </div>

        <a href="#" className="btn-light mt-6">
          Voir le projet
        </a>
      </div>
    </div>
  );
}