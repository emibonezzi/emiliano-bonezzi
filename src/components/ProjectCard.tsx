interface Props {
  name: string;
  thumbnail: string;
  description: string;
  stack: string;
}

const ProjectCard = (props: Props) => {
  return (
    <article className="grid grid-cols-2">
      <img src="#" />
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
